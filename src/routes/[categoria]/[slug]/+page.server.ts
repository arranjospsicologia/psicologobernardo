import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import {
    getPostBySlug,
    getCategoryBySlug,
    getPostsByCategory,
    getAllBlogRouteEntries,
} from "$lib/server/blog/loader";

export const load: PageServerLoad = ({ params }) => {
    // Handle legacy /blog/slug or /artigos/slug redirects
    if (params.categoria === "blog" || params.categoria === "artigos") {
        const post = getPostBySlug(params.slug);
        if (post) {
            throw redirect(301, `/${post.categorySlug}/${post.slug}/`);
        }
    }

    const category = getCategoryBySlug(params.categoria);

    if (!category) {
        throw error(404, "Categoria não encontrada");
    }

    const post = getPostBySlug(params.slug);

    if (!post) {
        throw error(404, "Artigo não encontrado");
    }

    // Verify post belongs to this category
    if (post.categorySlug !== params.categoria) {
        throw redirect(301, `/${post.categorySlug}/${post.slug}/`);
    }

    const relatedPosts = getPostsByCategory(post.categorySlug)
        .filter((p) => p.slug !== post.slug)
        .slice(0, 3);

    return {
        categoria: params.categoria,
        category,
        slug: params.slug,
        post,
        relatedPosts,
    };
};

export function entries() {
    return getAllBlogRouteEntries();
}
