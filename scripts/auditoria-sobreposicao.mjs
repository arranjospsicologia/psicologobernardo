#!/usr/bin/env node
/**
 * auditoria-sobreposicao.mjs
 *
 * Detecta posts com intenção de busca possivelmente sobreposta:
 *  - Mesmo título/slug com palavras-chave em comum
 *  - summaryQuestion idêntica ou muito similar entre dois posts
 *  - Mesma categoria + tags com alto grau de sobreposição
 *
 * Uso:
 *   node scripts/auditoria-sobreposicao.mjs
 *   node scripts/auditoria-sobreposicao.mjs --json   (saída em JSON)
 *
 * Saída:
 *   - Tabela de pares suspeitos com score de similaridade (0–1)
 *   - Recomendação por par: CONSOLIDAR | DIFERENCIAR | OK
 */

import { readFileSync, readdirSync } from "fs";
import { join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const POSTS_DIR = resolve(__dirname, "../src/content/posts");
const JSON_OUTPUT = process.argv.includes("--json");

// ─── Frontmatter parser simples (sem gray-matter) ───────────────────────────

function parseFrontmatter(raw) {
    const match = raw.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return {};

    const yaml = match[1];
    const result = {};

    // title, slug, description, category, summaryQuestion
    for (const key of ["slug", "title", "description", "category", "summaryQuestion"]) {
        const re = new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, "m");
        const m = yaml.match(re);
        if (m) result[key] = m[1].trim();
    }

    // tags (array YAML simples)
    const tagsBlock = yaml.match(/^tags:\n((?:\s+-\s+.+\n?)+)/m);
    if (tagsBlock) {
        result.tags = [...tagsBlock[1].matchAll(/^\s+-\s+["']?(.+?)["']?\s*$/gm)].map(
            (m) => m[1].toLowerCase(),
        );
    } else {
        result.tags = [];
    }

    // published
    const pubMatch = yaml.match(/^published:\s*(true|false)/m);
    result.published = pubMatch ? pubMatch[1] === "true" : true;

    return result;
}

// ─── Tokenização para comparação ────────────────────────────────────────────

const STOPWORDS = new Set([
    "a", "o", "e", "de", "do", "da", "em", "um", "uma", "para", "com",
    "por", "que", "se", "na", "no", "as", "os", "mais", "como", "mas",
    "ao", "à", "dos", "das", "é", "ou", "não", "seu", "sua", "ele",
    "ela", "isso", "este", "esta", "esse", "essa", "muito", "bem",
    "sobre", "entre", "quando", "ter", "ser", "pode", "faz", "há",
    "após", "antes", "durante", "também", "já", "ainda", "tudo",
]);

function tokenize(text) {
    if (!text) return new Set();
    return new Set(
        text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9\s]/g, " ")
            .split(/\s+/)
            .filter((t) => t.length > 2 && !STOPWORDS.has(t)),
    );
}

function jaccardSimilarity(setA, setB) {
    if (setA.size === 0 && setB.size === 0) return 0;
    const intersection = new Set([...setA].filter((x) => setB.has(x)));
    const union = new Set([...setA, ...setB]);
    return intersection.size / union.size;
}

// ─── Carregar posts ──────────────────────────────────────────────────────────

const files = readdirSync(POSTS_DIR)
    .filter((f) => /^\d{4}-\d{2}-\d{2}-.+\.md$/.test(f))
    .sort();

const posts = files
    .map((file) => {
        const raw = readFileSync(join(POSTS_DIR, file), "utf8");
        const fm = parseFrontmatter(raw);
        return {
            file,
            slug: fm.slug || file.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, ""),
            title: fm.title || "",
            description: fm.description || "",
            category: fm.category || "",
            tags: fm.tags || [],
            summaryQuestion: fm.summaryQuestion || "",
            published: fm.published,
        };
    })
    .filter((p) => p.published);

// ─── Calcular scores de similaridade entre pares ────────────────────────────

const THRESHOLD = 0.35; // pares com score >= threshold são reportados

const pairs = [];

for (let i = 0; i < posts.length; i++) {
    for (let j = i + 1; j < posts.length; j++) {
        const a = posts[i];
        const b = posts[j];

        // Tokens de título + description + summaryQuestion (peso maior)
        const titleA = tokenize(a.title + " " + a.summaryQuestion);
        const titleB = tokenize(b.title + " " + b.summaryQuestion);
        const titleScore = jaccardSimilarity(titleA, titleB);

        // Tokens de tags
        const tagsA = new Set(a.tags);
        const tagsB = new Set(b.tags);
        const tagScore = jaccardSimilarity(tagsA, tagsB);

        // Score ponderado: título/pergunta conta mais
        const score = titleScore * 0.65 + tagScore * 0.35;

        if (score >= THRESHOLD) {
            const sameCategory = a.category === b.category;

            let recommendation;
            if (score >= 0.6 && sameCategory) {
                recommendation = "CONSOLIDAR";
            } else if (score >= 0.45) {
                recommendation = "DIFERENCIAR";
            } else {
                recommendation = "MONITORAR";
            }

            pairs.push({
                slugA: a.slug,
                slugB: b.slug,
                titleA: a.title,
                titleB: b.title,
                category: sameCategory ? a.category : `${a.category} / ${b.category}`,
                titleScore: +titleScore.toFixed(2),
                tagScore: +tagScore.toFixed(2),
                score: +score.toFixed(2),
                recommendation,
            });
        }
    }
}

pairs.sort((a, b) => b.score - a.score);

// ─── Saída ───────────────────────────────────────────────────────────────────

if (JSON_OUTPUT) {
    console.log(JSON.stringify(pairs, null, 2));
    process.exit(0);
}

console.log(`\n${"─".repeat(72)}`);
console.log(`AUDITORIA DE SOBREPOSIÇÃO — psicologobernardo.com.br`);
console.log(`Posts analisados: ${posts.length}   Pares suspeitos: ${pairs.length}`);
console.log(`${"─".repeat(72)}\n`);

if (pairs.length === 0) {
    console.log("Nenhum par com score >= " + THRESHOLD + " encontrado. Boa saúde editorial!\n");
    process.exit(0);
}

const byRecommendation = { CONSOLIDAR: [], DIFERENCIAR: [], MONITORAR: [] };
for (const p of pairs) byRecommendation[p.recommendation].push(p);

for (const [label, group] of Object.entries(byRecommendation)) {
    if (group.length === 0) continue;

    const icon = label === "CONSOLIDAR" ? "🔴" : label === "DIFERENCIAR" ? "🟡" : "⚪";
    console.log(`${icon}  ${label} (${group.length} par${group.length > 1 ? "es" : ""})\n`);

    for (const p of group) {
        console.log(`  Score: ${p.score}  (título/pergunta: ${p.titleScore} | tags: ${p.tagScore})`);
        console.log(`  Categoria: ${p.category}`);
        console.log(`  A: ${p.slugA}`);
        console.log(`     "${p.titleA}"`);
        console.log(`  B: ${p.slugB}`);
        console.log(`     "${p.titleB}"`);
        console.log();
    }
}

console.log(`${"─".repeat(72)}`);
console.log(`Legenda de recomendações:`);
console.log(`  CONSOLIDAR  — Score alto + mesma categoria. Avaliar fusão ou redirect 301.`);
console.log(`  DIFERENCIAR — Sobreposição parcial. Reescrever H1/intro para intenções distintas.`);
console.log(`  MONITORAR   — Similaridade moderada. Acompanhar performance antes de agir.`);
console.log();
console.log(`Use --json para saída estruturada consumível por outras ferramentas.`);
console.log();
