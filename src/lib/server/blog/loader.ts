import matter from "gray-matter";
import { dev } from "$app/environment";
import { BLOG_CATEGORY_MAP, BLOG_INDEX_PATH, POSTS_PER_PAGE } from "./constants";
import { renderMarkdown } from "./markdown";
import { paginateItems } from "./pagination";
import { validateFrontmatter } from "./schema";
import type {
    BlogCategorySlug,
    BlogPostFull,
    BlogPostIndexItem,
    PaginatedPostsResult,
} from "./types";

const PT_BR_DATE = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
});

const POST_FILENAME_RE = /\/\d{4}-\d{2}-\d{2}-.+\.md$/;

function getMarkdownModules(): Record<string, string> {
    const all = import.meta.glob("/src/content/posts/*.md", {
        eager: true,
        query: "?raw",
        import: "default",
    }) as Record<string, string>;

    return Object.fromEntries(
        Object.entries(all).filter(([path]) => POST_FILENAME_RE.test(path)),
    );
}

function formatDateLabel(value: string): string {
    return PT_BR_DATE.format(new Date(`${value}T00:00:00.000Z`));
}

function compareByDateDesc(a: BlogPostIndexItem, b: BlogPostIndexItem): number {
    const byDate = b.date.localeCompare(a.date);
    if (byDate !== 0) return byDate;

    const byPublishedOrder = a.publishedOrder - b.publishedOrder;
    if (byPublishedOrder !== 0) return byPublishedOrder;

    return a.slug.localeCompare(b.slug);
}

function getSlugFromFilename(filePath: string): string {
    const filename = filePath.split("/").pop() ?? filePath;
    return filename.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
}

function loadAllPosts(): BlogPostFull[] {
    const seenSlugs = new Set<string>();

    return Object.entries(getMarkdownModules())
        .map(([filePath, rawContent]) => {
            const slugHint = getSlugFromFilename(filePath);
            const parsed = matter(rawContent);
            const frontmatter = validateFrontmatter(slugHint, parsed.data);

            if (seenSlugs.has(frontmatter.slug)) {
                throw new Error(`Duplicate blog slug: '${frontmatter.slug}'`);
            }
            seenSlugs.add(frontmatter.slug);

            const category = BLOG_CATEGORY_MAP.get(frontmatter.category);
            if (!category) {
                throw new Error(`Unknown category '${frontmatter.category}'`);
            }

            return {
                slug: frontmatter.slug,
                title: frontmatter.title,
                description: frontmatter.description,
                categorySlug: frontmatter.category,
                categoryLabel: frontmatter.categoryLabel ?? category.label,
                tags: frontmatter.tags,
                date: frontmatter.date,
                dateLabel: frontmatter.dateLabel ?? formatDateLabel(frontmatter.date),
                publishedOrder: frontmatter.publishedOrder,
                readTime: frontmatter.readTime,
                image: frontmatter.image,
                altText: frontmatter.altText,
                schemaType: frontmatter.schemaType,
                lastReviewed: frontmatter.lastReviewed,
                references: frontmatter.references,
                featured: frontmatter.featured,
                source: "markdown" as const,
                htmlContent: renderMarkdown(parsed.content),
                faq: frontmatter.faq,
            };
        })
        .sort(compareByDateDesc);
}

let cachedPosts: BlogPostFull[] | null = null;

function getResolvedPosts(): BlogPostFull[] {
    if (dev) {
        return loadAllPosts();
    }

    if (!cachedPosts) {
        cachedPosts = loadAllPosts();
    }

    return cachedPosts;
}

function getPostsMap(): Map<string, BlogPostFull> {
    return new Map(getResolvedPosts().map((post) => [post.slug, post]));
}

export function getAllPublishedPosts(): BlogPostIndexItem[] {
    return getResolvedPosts();
}

export function getCategorySummaries(): Array<{
    slug: string;
    label: string;
    description: string;
    postCount: number;
}> {
    const posts = getAllPublishedPosts();
    return Array.from(BLOG_CATEGORY_MAP.values()).map((cat) => ({
        slug: cat.slug,
        label: cat.label,
        description: cat.description,
        postCount: posts.filter((p) => p.categorySlug === cat.slug).length,
    }));
}

export function getPostBySlug(slug: string): BlogPostFull | undefined {
    return getPostsMap().get(slug);
}

export function getPostsByCategory(
    categorySlug: BlogCategorySlug,
): BlogPostIndexItem[] {
    return getAllPublishedPosts().filter((post) => post.categorySlug === categorySlug);
}

export function getCategoryBySlug(categorySlug: string) {
    return BLOG_CATEGORY_MAP.get(categorySlug as BlogCategorySlug);
}

export function getPaginatedPosts(page: number): PaginatedPostsResult {
    const result = paginateItems(
        getAllPublishedPosts(),
        page,
        POSTS_PER_PAGE,
        BLOG_INDEX_PATH,
    );

    return {
        posts: result.items,
        pagination: result.pagination,
    };
}

export function getPaginatedPostsByCategory(
    categorySlug: BlogCategorySlug,
    page: number,
): PaginatedPostsResult {
    const result = paginateItems(
        getPostsByCategory(categorySlug),
        page,
        POSTS_PER_PAGE,
        `/${categorySlug}`,
    );

    return {
        posts: result.items,
        pagination: result.pagination,
    };
}

export function getAllBlogRouteEntries(): Array<{
    categoria: string;
    slug: string;
}> {
    return getAllPublishedPosts().map((post) => ({
        categoria: post.categorySlug,
        slug: post.slug,
    }));
}

export function getBlogPaginationEntries(): Array<{ page: string }> {
    const totalPages = Math.max(
        1,
        Math.ceil(getAllPublishedPosts().length / POSTS_PER_PAGE),
    );

    return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({
        page: String(index + 2),
    }));
}

export function getCategoryPaginationEntries(): Array<{
    categoria: string;
    page: string;
}> {
    return Array.from(BLOG_CATEGORY_MAP.values()).flatMap((category) => {
        const totalPages = Math.max(
            1,
            Math.ceil(getPostsByCategory(category.slug).length / POSTS_PER_PAGE),
        );

        return Array.from(
            { length: Math.max(0, totalPages - 1) },
            (_, index) => ({
                categoria: category.slug,
                page: String(index + 2),
            }),
        );
    });
}
