import { error, redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getPostBySlug, getCategoryBySlug, blogPosts } from "$lib/data/blog";
import { postContents } from "$lib/data/blogContent";

export const load: PageLoad = ({ params }) => {
    // Handle legacy /blog/slug or /artigos/slug redirects
    if (params.categoria === 'blog' || params.categoria === 'artigos') {
        const post = getPostBySlug(params.slug);
        if (post) {
            throw redirect(301, `/${post.categorySlug}/${post.slug}/`);
        }
        // If not found, fall through to 404 logic below (or specific error)
    }

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
        // Gracefully redirect if accessed via wrong category but valid slug
        throw redirect(301, `/${post.categorySlug}/${post.slug}/`);
    }

    return {
        categoria: params.categoria,
        category,
        slug: params.slug,
        post,
        content
    };
};
