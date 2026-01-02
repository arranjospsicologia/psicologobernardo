export const prerender = true;

import { blogPosts, categoryPages } from '$lib/data/blog';

const site = 'https://psicologobernardo.com.br';

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

    const body = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
  ${allPages
            .map(
                (page) => `
  <url>
    <loc>${site}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>
  `
            )
            .join('')}
</urlset>`;

    return new Response(body, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=0, s-maxage=3600'
        }
    });
}
