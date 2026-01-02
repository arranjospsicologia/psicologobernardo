import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getPostsByCategory, getCategoryBySlug } from "$lib/data/blog";

export const load: PageLoad = ({ params }) => {
    const category = getCategoryBySlug(params.categoria);

    if (!category) {
        throw error(404, "Categoria não encontrada");
    }

    const posts = getPostsByCategory(params.categoria);

    return {
        categoria: params.categoria,
        category,
        posts
    };
};
