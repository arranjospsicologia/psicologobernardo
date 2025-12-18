import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getPostBySlug } from "$lib/data/blog";
import { postContents } from "$lib/data/blogContent";

export const load: PageLoad = ({ params }) => {
    const post = getPostBySlug(params.slug);
    const content = postContents[params.slug];

    if (!post || !content) {
        throw error(404, "Post não encontrado");
    }

    return {
        slug: params.slug,
        post,
        content
    };
};
