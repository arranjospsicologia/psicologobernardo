export const prerender = true;

import {
    getAllPublishedPosts,
    getBlogPaginationEntries,
    getCategoryPaginationEntries,
} from "$lib/server/blog/loader";
import { BLOG_CATEGORIES, BLOG_BASE_URL } from "$lib/server/blog/constants";

const site = BLOG_BASE_URL;

const BUILD_DATE = new Date().toISOString().slice(0, 10);

interface SitemapUrl {
    loc: string;
    lastmod: string;
    changefreq: "daily" | "weekly" | "monthly" | "yearly";
    priority: string;
}

function getPriority(route: string): string {
    if (route === "/") return "1.0";

    if (
        ["/agendar", "/contato"].includes(route) ||
        route.startsWith("/servicos")
    ) {
        return "0.9";
    }

    if (route === "/sobre" || route === "/artigos") {
        return "0.8";
    }

    if (route.startsWith("/localizacao") || route.startsWith("/experiencia")) {
        return "0.8";
    }

    if (["/politica-privacidade", "/termos-uso"].includes(route)) {
        return "0.5";
    }

    const categorySlugs = BLOG_CATEGORIES.map((c) => `/${c.slug}`);
    if (categorySlugs.includes(route)) {
        return "0.7";
    }

    // Pagination pages
    if (route.includes("/pagina/")) {
        return "0.5";
    }

    // Blog posts
    return "0.6";
}

function getChangefreq(
    route: string,
): "daily" | "weekly" | "monthly" | "yearly" {
    if (route === "/") return "weekly";

    if (["/politica-privacidade", "/termos-uso"].includes(route)) {
        return "yearly";
    }

    if (
        route.startsWith("/servicos") ||
        ["/agendar", "/contato"].includes(route)
    ) {
        return "monthly";
    }

    const categorySlugs = BLOG_CATEGORIES.map((c) => c.slug);
    if (categorySlugs.map((s) => `/${s}`).includes(route)) {
        return "weekly";
    }

    if (route === "/artigos" || route.includes("/pagina/")) {
        return "weekly";
    }

    return "monthly";
}

function getLastmod(
    route: string,
    postDateMap: Map<string, string>,
): string {
    const date = postDateMap.get(route);
    if (date) return date;
    return BUILD_DATE;
}

export async function GET() {
    const allPosts = getAllPublishedPosts();

    // Build a route->date map for posts
    const postDateMap = new Map<string, string>();
    for (const post of allPosts) {
        postDateMap.set(
            `/${post.categorySlug}/${post.slug}`,
            post.lastReviewed ?? post.date,
        );
    }

    // Auto-discover static pages
    const modules = import.meta.glob("/src/routes/**/+page.svelte");

    const staticPages = Object.keys(modules)
        .map((path) => {
            const route = path
                .replace("/src/routes", "")
                .replace("/+page.svelte", "");
            return route === "" ? "/" : route;
        })
        .filter((route) => {
            if (route.includes("[") || route.includes("]")) return false;
            const noIndexPages = ["/politica-privacidade", "/termos-uso"];
            if (noIndexPages.includes(route)) return false;
            return true;
        });

    // Dynamic routes: categories
    const categoryPages = BLOG_CATEGORIES.map((cat) => `/${cat.slug}`);

    // Dynamic routes: blog posts
    const postPages = allPosts.map(
        (post) => `/${post.categorySlug}/${post.slug}`,
    );

    // Dynamic routes: artigos pagination
    const artigosPaginationPages = getBlogPaginationEntries().map(
        (entry) => `/artigos/pagina/${entry.page}`,
    );

    // Dynamic routes: category pagination
    const categoryPaginationPages = getCategoryPaginationEntries().map(
        (entry) => `/${entry.categoria}/pagina/${entry.page}`,
    );

    const allPages = [
        ...staticPages,
        ...categoryPages,
        ...postPages,
        ...artigosPaginationPages,
        ...categoryPaginationPages,
    ];

    const sitemapUrls: SitemapUrl[] = allPages.map((page) => ({
        loc: page === "/" ? `${site}/` : `${site}${page}/`,
        lastmod: getLastmod(page, postDateMap),
        changefreq: getChangefreq(page),
        priority: getPriority(page),
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
  </url>`,
            )
            .join("\n")}
</urlset>`;

    return new Response(body, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "max-age=0, s-maxage=3600",
        },
    });
}
