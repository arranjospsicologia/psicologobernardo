#!/usr/bin/env node
// Validação técnica de SEO executada sobre o diretório `build/`
// gerado por `npm run build`. Deve ser chamada após o build.
//
// Checagens:
//  1. sitemap.xml existe e é XML válido básico (urlset + <loc>).
//  2. Todas as URLs do sitemap são absolutas, usam o domínio canônico e
//     terminam com "/" (trailingSlash: 'always').
//  3. Nenhuma rota noindex conhecida está presente no sitemap.
//  4. Cada URL do sitemap tem um arquivo index.html correspondente no build.
//  5. Cada index.html tem <link rel="canonical"> absoluto e coerente.
//  6. Páginas noindex conhecidas contêm <meta name="robots" content="...noindex...">.
//  7. Cada <lastmod> do sitemap corresponde a uma data real (não à data de
//     build residual) — páginas estáticas devem estar registradas no SSoT
//     (`src/lib/server/seo/pageMeta.ts`).
//  8. llms.txt existe, é coerente e todos os links internos apontam para
//     páginas que realmente existem no build.
//
// Uso:
//   node scripts/validate-seo.mjs

import { readFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const BUILD_DIR = path.join(ROOT, "build");
const SITE = "https://psicologobernardo.com.br";

// Rotas marcadas como noindex ou que são stubs de redirect (prerender=false).
// Deve estar sincronizado com NOINDEX_ROUTES em src/lib/server/seo/pageMeta.ts.
const NOINDEX_ROUTES = [
    "/politica-privacidade",
    "/termos-uso",
    // Rotas /localizacao/* movidas para /psicologo-vitoria-es/* — redirect stubs, não indexáveis.
    "/localizacao",
    "/localizacao/psicologo-vitoria-es",
    "/localizacao/psicologo-jardim-da-penha",
];
const ROUTES_DIR = path.join(ROOT, "src", "routes");

const errors = [];
const warnings = [];

function fail(msg) {
    errors.push(msg);
}
function warn(msg) {
    warnings.push(msg);
}

async function ensureBuildDir() {
    try {
        const s = await stat(BUILD_DIR);
        if (!s.isDirectory()) throw new Error("not a directory");
    } catch {
        console.error(
            `[seo:validate] diretório build/ não encontrado. Rode 'npm run build' antes.`,
        );
        process.exit(1);
    }
}

async function loadSitemap() {
    const p = path.join(BUILD_DIR, "sitemap.xml");
    if (!existsSync(p)) {
        fail("sitemap.xml não encontrado em build/");
        return [];
    }
    const xml = await readFile(p, "utf8");
    if (!xml.includes("<urlset")) {
        fail("sitemap.xml não contém <urlset>");
        return [];
    }
    // Extrai pares (loc, lastmod) por bloco <url>…</url>.
    const entries = [];
    for (const block of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
        const body = block[1];
        const loc = body.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
        const lastmod = body.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim();
        if (loc) entries.push({ loc, lastmod: lastmod ?? "" });
    }
    if (!entries.length) fail("sitemap.xml não contém nenhum <url>");
    return entries;
}

function routeFromUrl(url) {
    return url.replace(SITE, "").replace(/\/+$/, "") || "/";
}

function validateSitemapUrls(entries) {
    for (const { loc: url, lastmod } of entries) {
        if (!url.startsWith(SITE + "/") && url !== SITE + "/") {
            fail(`URL do sitemap não usa domínio canônico: ${url}`);
            continue;
        }
        if (!url.endsWith("/")) {
            fail(`URL do sitemap sem trailing slash: ${url}`);
        }
        const route = routeFromUrl(url);
        if (NOINDEX_ROUTES.includes(route)) {
            fail(`Rota noindex presente no sitemap: ${route}`);
        }
        if (!lastmod) {
            fail(`URL do sitemap sem <lastmod>: ${route}`);
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod)) {
            fail(`<lastmod> em formato inesperado em ${route}: ${lastmod}`);
        }
    }
}

// Descobre rotas estáticas percorrendo src/routes/**/+page.svelte.
// Pastas dinâmicas (contendo `[` / `]`) e rotas noindex são excluídas.
// Esta é a fonte autoritativa para decidir o que é "página estática";
// não usamos heurísticas por número de segmentos porque rotas como
// `/servicos/terapia-de-casal`, `/experiencia/ansiedade` e
// `/localizacao/psicologo-vitoria-es` também têm dois segmentos e
// precisam ser validadas contra o SSoT.
async function discoverStaticRoutes() {
    const routes = new Set();

    async function walk(dir, relSegments) {
        let entries;
        try {
            entries = await readdir(dir, { withFileTypes: true });
        } catch {
            return;
        }

        for (const entry of entries) {
            if (entry.isDirectory()) {
                if (entry.name.includes("[") || entry.name.includes("]")) {
                    continue;
                }
                await walk(path.join(dir, entry.name), [
                    ...relSegments,
                    entry.name,
                ]);
                continue;
            }
            if (entry.isFile() && entry.name === "+page.svelte") {
                const route =
                    relSegments.length === 0 ? "/" : "/" + relSegments.join("/");
                if (NOINDEX_ROUTES.includes(route)) continue;
                routes.add(route);
            }
        }
    }

    await walk(ROUTES_DIR, []);
    return routes;
}

// Cada rota estática presente no sitemap deve:
//  1) estar registrada em STATIC_PAGE_LASTMOD;
//  2) ter <lastmod> no sitemap batendo exatamente com o SSoT.
// Rotas não estáticas (posts, hubs de categoria, paginações) saem dessa
// checagem — elas usam datas derivadas do conteúdo.
async function validateLastmodCoverage(entries) {
    const metaPath = path.join(
        ROOT,
        "src",
        "lib",
        "server",
        "seo",
        "pageMeta.ts",
    );
    if (!existsSync(metaPath)) {
        fail("pageMeta.ts não encontrado; não é possível validar SSoT.");
        return;
    }

    const metaSrc = await readFile(metaPath, "utf8");
    // Remove linhas de comentário `//...` antes de extrair as entradas,
    // para não capturar pares comentados.
    const metaSrcStripped = metaSrc
        .split(/\r?\n/)
        .map((line) => line.replace(/\/\/.*$/, ""))
        .join("\n");
    // Parse de pares "route": "YYYY-MM-DD" dentro de STATIC_PAGE_LASTMOD.
    const ssot = new Map();
    for (const m of metaSrcStripped.matchAll(
        /"(\/[^"]*)"\s*:\s*"(\d{4}-\d{2}-\d{2})"/g,
    )) {
        ssot.set(m[1], m[2]);
    }

    const staticRoutes = await discoverStaticRoutes();

    // 1) Toda rota estática descoberta no filesystem deve estar no SSoT.
    for (const route of staticRoutes) {
        if (!ssot.has(route)) {
            fail(
                `Rota estática ${route} não está registrada em STATIC_PAGE_LASTMOD (src/lib/server/seo/pageMeta.ts)`,
            );
        }
    }

    // 2) Toda URL do sitemap cuja rota é estática precisa bater com o SSoT.
    for (const { loc: url, lastmod } of entries) {
        const route = routeFromUrl(url);
        if (!staticRoutes.has(route)) continue;

        const expected = ssot.get(route);
        if (!expected) {
            // Já reportado acima, mas reforça no contexto do sitemap.
            continue;
        }
        if (lastmod !== expected) {
            fail(
                `lastmod do sitemap diverge do SSoT em ${route}: sitemap=${lastmod} vs SSoT=${expected}`,
            );
        }
    }
}

async function validateBuiltPages(entries) {
    for (const { loc: url } of entries) {
        const route = routeFromUrl(url);
        const htmlPath =
            route === "/"
                ? path.join(BUILD_DIR, "index.html")
                : path.join(BUILD_DIR, route.replace(/^\//, ""), "index.html");

        if (!existsSync(htmlPath)) {
            fail(`HTML não encontrado no build para rota do sitemap: ${route}`);
            continue;
        }

        const html = await readFile(htmlPath, "utf8");

        const canonicalMatch = html.match(
            /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i,
        );
        if (!canonicalMatch) {
            fail(`Canonical ausente em ${route}`);
        } else {
            const canonical = canonicalMatch[1];
            if (!canonical.startsWith("http")) {
                fail(`Canonical não absoluto em ${route}: ${canonical}`);
            }
            // Normaliza trailing slash na comparação
            const canonicalRoute = routeFromUrl(canonical);
            if (canonicalRoute !== route) {
                warn(
                    `Canonical divergente em ${route}: aponta para ${canonicalRoute}`,
                );
            }
        }

        const robotsMatch = html.match(
            /<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i,
        );
        if (robotsMatch && /noindex/i.test(robotsMatch[1])) {
            fail(
                `Página marcada como noindex está no sitemap: ${route} (${robotsMatch[1]})`,
            );
        }
    }
}

async function validateNoindexPages() {
    for (const route of NOINDEX_ROUTES) {
        const htmlPath = path.join(
            BUILD_DIR,
            route.replace(/^\//, ""),
            "index.html",
        );
        if (!existsSync(htmlPath)) {
            warn(`Página noindex esperada não encontrada no build: ${route}`);
            continue;
        }
        const html = await readFile(htmlPath, "utf8");
        const robotsMatch = html.match(
            /<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i,
        );
        if (!robotsMatch || !/noindex/i.test(robotsMatch[1])) {
            fail(`Página ${route} deveria conter meta robots noindex`);
        }
    }
}

async function validateRobots() {
    const robotsPath = path.join(BUILD_DIR, "robots.txt");
    if (!existsSync(robotsPath)) {
        fail("robots.txt não encontrado no build");
        return;
    }
    const robots = await readFile(robotsPath, "utf8");
    if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) {
        fail("robots.txt não aponta para o sitemap canônico");
    }
}

async function validateLlmsTxt(sitemapEntries) {
    const llmsPath = path.join(BUILD_DIR, "llms.txt");
    if (!existsSync(llmsPath)) {
        fail("llms.txt não encontrado no build");
        return;
    }
    const llms = await readFile(llmsPath, "utf8");

    // Coleta todas as URLs do domínio canônico — tanto em markdown
    // `[label](url)` quanto formas simples `Site: url`.
    const urls = new Set();
    for (const m of llms.matchAll(
        new RegExp(`https?://psicologobernardo\\.com\\.br[^\\s)\\]]*`, "g"),
    )) {
        urls.add(m[0]);
    }

    if (!urls.size) {
        warn("llms.txt não contém links internos — é útil listar páginas principais.");
        return;
    }

    // Conjunto de URLs válidas = sitemap + a raiz canônica.
    const validUrls = new Set(sitemapEntries.map((e) => e.loc));
    validUrls.add(`${SITE}/`);

    for (const raw of urls) {
        // Normaliza para comparar com o sitemap (trailing slash).
        const normalized = raw.endsWith("/") || raw === SITE ? raw : raw + "/";

        // Aceita a raiz, URLs do sitemap, e âncoras/subseções conhecidas do
        // próprio site (ex.: psicoterapia/, acp/ como hubs) se existirem no build.
        if (validUrls.has(normalized)) continue;

        const route = routeFromUrl(normalized);
        const htmlPath =
            route === "/"
                ? path.join(BUILD_DIR, "index.html")
                : path.join(BUILD_DIR, route.replace(/^\//, ""), "index.html");
        if (existsSync(htmlPath)) continue;

        fail(`llms.txt aponta para URL que não existe no build: ${raw}`);
    }
}

async function main() {
    await ensureBuildDir();
    const entries = await loadSitemap();
    validateSitemapUrls(entries);
    await validateBuiltPages(entries);
    await validateNoindexPages();
    await validateLastmodCoverage(entries);
    await validateRobots();
    await validateLlmsTxt(entries);

    if (warnings.length) {
        console.log("\n[seo:validate] Avisos:");
        for (const w of warnings) console.log("  - " + w);
    }
    if (errors.length) {
        console.error("\n[seo:validate] Erros:");
        for (const e of errors) console.error("  - " + e);
        console.error(`\nFalhou com ${errors.length} erro(s).`);
        process.exit(1);
    }
    console.log(
        `\n[seo:validate] OK — ${entries.length} URL(s) do sitemap validadas.`,
    );
}

main().catch((err) => {
    console.error("[seo:validate] erro inesperado:", err);
    process.exit(1);
});
