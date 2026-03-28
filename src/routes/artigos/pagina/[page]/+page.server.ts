import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import {
    getPaginatedPosts,
    getBlogPaginationEntries,
    getCategorySummaries,
} from "$lib/server/blog/loader";
import { normalizePageParam } from "$lib/server/blog/pagination";
import {
    buildBlogPageTitle,
    buildBlogPageDescription,
    buildCollectionCanonical,
    buildCollectionBreadcrumbs,
} from "$lib/server/blog/seo";

export const load: PageServerLoad = ({ params }) => {
    const page = normalizePageParam(params.page);

    if (page <= 1) {
        throw redirect(301, "/artigos/");
    }

    const result = getPaginatedPosts(page);

    if (result.posts.length === 0) {
        throw error(404, "Página não encontrada");
    }

    return {
        ...result,
        categories: getCategorySummaries(),
        seo: {
            title: buildBlogPageTitle(page),
            description: buildBlogPageDescription(page),
            canonical: buildCollectionCanonical("/artigos", page),
            breadcrumbs: buildCollectionBreadcrumbs("Artigos", "/artigos", page),
        },
    };
};

export function entries() {
    return getBlogPaginationEntries();
}
