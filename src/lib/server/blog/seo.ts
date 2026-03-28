import { BLOG_BASE_URL, BLOG_INDEX_PATH } from "./constants";

export function buildBlogPageTitle(page: number): string {
    return page <= 1
        ? "Artigos - Psicólogo Bernardo | Bernardo Carielo"
        : `Artigos - Página ${page} | Psicólogo Bernardo`;
}

export function buildBlogPageDescription(page: number): string {
    return page <= 1
        ? "Artigos sobre saúde mental, psicologia e bem-estar por Bernardo Carielo, psicólogo em Vitória/ES - CRP 16/5527"
        : `Página ${page} da coleção de artigos sobre saúde mental, psicologia e bem-estar.`;
}

export function buildCollectionCanonical(path: string, page: number): string {
    if (page <= 1) {
        return `${BLOG_BASE_URL}${path}/`;
    }

    return `${BLOG_BASE_URL}${path}/pagina/${page}/`;
}

export function buildCollectionBreadcrumbs(
    label: string,
    path: string = BLOG_INDEX_PATH,
    page: number = 1,
) {
    const items: Array<{ name: string; href?: string }> = [
        { name: "Início", href: "/" },
        { name: label, href: `${path}/` },
    ];

    if (page > 1) {
        items.push({ name: `Página ${page}` });
    }

    return items;
}
