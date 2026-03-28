import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import {
    getCategoryBySlug,
    getPaginatedPostsByCategory,
    getCategoryPaginationEntries,
} from "$lib/server/blog/loader";
import { normalizePageParam } from "$lib/server/blog/pagination";
import { buildCollectionCanonical, buildCollectionBreadcrumbs } from "$lib/server/blog/seo";
import type { BlogCategorySlug } from "$lib/server/blog/types";

export const load: PageServerLoad = ({ params }) => {
    const category = getCategoryBySlug(params.categoria);

    if (!category) {
        throw error(404, "Categoria não encontrada");
    }

    const page = normalizePageParam(params.page);

    if (page <= 1) {
        throw redirect(301, `/${params.categoria}/`);
    }

    const result = getPaginatedPostsByCategory(
        params.categoria as BlogCategorySlug,
        page,
    );

    if (result.posts.length === 0) {
        throw error(404, "Página não encontrada");
    }

    return {
        categoria: params.categoria,
        category,
        ...result,
        seo: {
            title: `${category.label} - Página ${page} | Psicólogo Bernardo`,
            description: `Página ${page} dos artigos sobre ${category.label.toLowerCase()}.`,
            canonical: buildCollectionCanonical(`/${category.slug}`, page),
            breadcrumbs: buildCollectionBreadcrumbs(category.label, `/${category.slug}`, page),
        },
    };
};

export function entries() {
    return getCategoryPaginationEntries();
}
