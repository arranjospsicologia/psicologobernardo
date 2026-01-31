export const prerender = true;

import { blogPosts, categoryPages } from '$lib/data/blog';

const site = 'https://psicologobernardo.com.br';

// Data do último deploy/build - atualizar quando necessário
const LAST_BUILD_DATE = '2026-01-27';

interface SitemapUrl {
    loc: string;
    lastmod: string;
    changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: string;
}

/**
 * Converte data do formato brasileiro "DD MMM YYYY" para ISO "YYYY-MM-DD"
 * Ex: "19 Dez 2025" -> "2025-12-19"
 */
function parseBrazilianDate(dateStr: string): string {
    const months: { [key: string]: string } = {
        'Jan': '01', 'Fev': '02', 'Mar': '03', 'Abr': '04',
        'Mai': '05', 'Jun': '06', 'Jul': '07', 'Ago': '08',
        'Set': '09', 'Out': '10', 'Nov': '11', 'Dez': '12'
    };

    const parts = dateStr.split(' ');
    if (parts.length !== 3) return LAST_BUILD_DATE;

    const day = parts[0].padStart(2, '0');
    const month = months[parts[1]] || '01';
    const year = parts[2];

    return `${year}-${month}-${day}`;
}

/**
 * Determina prioridade da página baseado no tipo
 * 1.0 = Home, 0.9 = Conversão, 0.8 = Institucional, 0.7 = Categorias, 0.6 = Posts, 0.5 = Legal
 */
function getPriority(route: string): string {
    if (route === '/') return '1.0';

    // Páginas de alta conversão
    if (['/agendar', '/contato'].includes(route) || route.startsWith('/servicos')) {
        return '0.9';
    }

    // Páginas institucionais
    if (route === '/sobre' || route === '/artigos') {
        return '0.8';
    }

    // Páginas de localização e experiência (SEO local)
    if (route.startsWith('/localizacao') || route.startsWith('/experiencia')) {
        return '0.8';
    }

    // Páginas legais
    if (['/politica-privacidade', '/termos-uso'].includes(route)) {
        return '0.5';
    }

    // Páginas de categoria do blog (silos)
    const categorySlugs = categoryPages.map(c => `/${c.slug}`);
    if (categorySlugs.includes(route)) {
        return '0.7';
    }

    // Posts do blog
    return '0.6';
}

/**
 * Determina frequência de atualização baseado no tipo de página
 */
function getChangefreq(route: string): 'daily' | 'weekly' | 'monthly' | 'yearly' {
    if (route === '/') return 'weekly';

    // Páginas legais raramente mudam
    if (['/politica-privacidade', '/termos-uso'].includes(route)) {
        return 'yearly';
    }

    // Páginas de serviço e conversão
    if (route.startsWith('/servicos') || ['/agendar', '/contato'].includes(route)) {
        return 'monthly';
    }

    // Blog posts são estáticos após publicação
    const categorySlugs = categoryPages.map(c => c.slug);
    const isBlogPost = categorySlugs.some(slug =>
        route.startsWith(`/${slug}/`) && route !== `/${slug}`
    );
    if (isBlogPost) {
        return 'monthly';
    }

    // Páginas de categoria podem receber novos posts
    if (categorySlugs.map(s => `/${s}`).includes(route)) {
        return 'weekly';
    }

    return 'monthly';
}

/**
 * Obtém data de lastmod para uma rota
 */
function getLastmod(route: string): string {
    // Tentar encontrar post correspondente
    for (const post of blogPosts) {
        if (route === `/${post.categorySlug}/${post.slug}`) {
            return parseBrazilianDate(post.date);
        }
    }

    // Para outras páginas, usar data do build
    return LAST_BUILD_DATE;
}

export async function GET() {
    // Auto-discover static +page.svelte files
    const modules = import.meta.glob('/src/routes/**/+page.svelte');

    const staticPages = Object.keys(modules)
        .map((path) => {
            // Transform /src/routes/sobre/+page.svelte -> /sobre
            const route = path
                .replace('/src/routes', '')
                .replace('/+page.svelte', '');

            return route === '' ? '/' : route;
        })
        .filter((route) => {
            // Exclude dynamic routes (contain [ or ]) as we'll add them manually
            return !route.includes('[') && !route.includes(']');
        });

    // Generate dynamic routes
    const dynamicPages = [
        // Category pages (e.g., /saude-mental/)
        ...categoryPages.map(cat => `/${cat.slug}`),

        // Blog posts (e.g., /saude-mental/titulo-do-post)
        ...blogPosts.map(post => `/${post.categorySlug}/${post.slug}`)
    ];

    const allPages = [...staticPages, ...dynamicPages];

    // Gerar URLs com metadados otimizados
    const sitemapUrls: SitemapUrl[] = allPages.map(page => ({
        loc: page === '/' ? `${site}/` : `${site}${page}/`, // Evitar barra dupla na home
        lastmod: getLastmod(page),
        changefreq: getChangefreq(page),
        priority: getPriority(page)
    }));

    const body = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
${sitemapUrls
            .map(
                (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
            )
            .join('\n')}
</urlset>`;

    return new Response(body, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=0, s-maxage=3600'
        }
    });
}
