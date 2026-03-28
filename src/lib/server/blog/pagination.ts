import { BLOG_BASE_URL, BLOG_INDEX_PATH } from "./constants";
import type { PaginationInfo } from "./types";

export function normalizePageParam(value: string | number | undefined): number {
    const page = typeof value === "number" ? value : Number(value);
    if (!Number.isInteger(page) || page < 1) {
        return 1;
    }
    return page;
}

export function buildPaginatedPath(basePath: string, page: number): string {
    if (page <= 1) {
        return basePath;
    }
    return `${basePath}/pagina/${page}`;
}

export function buildCanonicalUrl(basePath: string, page: number): string {
    const path = buildPaginatedPath(basePath, page);
    if (path === BLOG_INDEX_PATH) {
        return `${BLOG_BASE_URL}${path}/`;
    }
    return `${BLOG_BASE_URL}${path}/`;
}

export function paginateItems<T>(
    items: T[],
    currentPage: number,
    perPage: number,
    basePath: string,
): { items: T[]; pagination: PaginationInfo } {
    const totalPages = Math.max(1, Math.ceil(items.length / perPage));
    const safePage = Math.min(Math.max(1, currentPage), totalPages);
    const start = (safePage - 1) * perPage;
    const pageItems = items.slice(start, start + perPage);

    return {
        items: pageItems,
        pagination: {
            currentPage: safePage,
            totalPages,
            hasPrev: safePage > 1,
            hasNext: safePage < totalPages,
            prevUrl: safePage > 1 ? `${buildPaginatedPath(basePath, safePage - 1)}/` : null,
            nextUrl:
                safePage < totalPages
                    ? `${buildPaginatedPath(basePath, safePage + 1)}/`
                    : null,
            canonicalUrl: buildCanonicalUrl(basePath, safePage),
            basePath,
        },
    };
}

