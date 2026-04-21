import type { PageLoad } from "./$types";

// As avaliações não são mais buscadas no carregamento inicial da home.
// Elas são carregadas sob intenção (quando a seção entra perto da viewport)
// diretamente em +page.svelte, a partir de /data/reviews.json com fallback
// em $lib/data/homeReviewsFallback. Isso evita que dados abaixo da dobra
// concorram com o hero e os CTAs iniciais.
export const load: PageLoad = async () => {
    return {};
};
