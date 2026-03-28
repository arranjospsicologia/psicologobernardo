import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import {
    getCategoryBySlug,
    getPaginatedPostsByCategory,
} from "$lib/server/blog/loader";
import { BLOG_CATEGORIES } from "$lib/server/blog/constants";
import type { BlogCategorySlug } from "$lib/server/blog/types";

export const load: PageServerLoad = ({ params }) => {
    if (params.categoria === "blog") {
        throw redirect(301, "/artigos/");
    }

    const category = getCategoryBySlug(params.categoria);

    if (!category) {
        throw error(404, "Categoria não encontrada");
    }

    const result = getPaginatedPostsByCategory(
        params.categoria as BlogCategorySlug,
        1,
    );

    return {
        categoria: params.categoria,
        category,
        ...result,
    };
};

export function entries() {
    return BLOG_CATEGORIES.map((cat) => ({ categoria: cat.slug }));
}
