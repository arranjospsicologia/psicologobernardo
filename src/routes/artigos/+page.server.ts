import type { PageServerLoad } from "./$types";
import { getPaginatedPosts, getCategorySummaries } from "$lib/server/blog/loader";

export const load: PageServerLoad = () => {
    return {
        ...getPaginatedPosts(1),
        categories: getCategorySummaries(),
    };
};
