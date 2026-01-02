import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getPostBySlug, getCategoryBySlug, blogPosts } from "$lib/data/blog";
import { postContents } from "$lib/data/blogContent";

export const load: PageLoad = ({ params }) => {
    const category = getCategoryBySlug(params.categoria);

    if (!category) {
        throw error(404, "Categoria não encontrada");
    }

    const post = getPostBySlug(params.slug);
    const content = postContents[params.slug];

    if (!post || !content) {
        throw error(404, "Artigo não encontrado");
    }

    // Verify post belongs to this category
    if (post.categorySlug !== params.categoria) {
        throw error(404, "Artigo não encontrado nesta categoria");
    }

    return {
        categoria: params.categoria,
        category,
        slug: params.slug,
        post,
        content
    };
};
