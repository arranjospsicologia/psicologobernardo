export const BLOG_BASE_URL = "https://psicologobernardo.com.br";
export const BLOG_INDEX_PATH = "/artigos";
export const POSTS_PER_PAGE = 9;

export const BLOG_CATEGORIES = [
    {
        slug: "saude-mental",
        label: "Saúde Mental",
        description:
            "Artigos sobre ansiedade, estresse, emoções e bem-estar psicológico",
    },
    {
        slug: "acp",
        label: "Abordagem Centrada na Pessoa",
        description:
            "Artigos sobre a ACP, Carl Rogers e psicoterapia humanista",
    },
    {
        slug: "homens",
        label: "Terapia para Homens",
        description:
            "Artigos sobre masculinidades, emoções e saúde mental masculina",
    },
    {
        slug: "psicoterapia",
        label: "Psicoterapia",
        description:
            "Artigos sobre o processo terapêutico, modalidades e dúvidas comuns",
    },
    {
        slug: "jardim-da-penha",
        label: "Jardim da Penha",
        description:
            "Artigos sobre saúde mental em Jardim da Penha, UFES e região",
    },
    {
        slug: "vitoria-es",
        label: "Vitória ES",
        description:
            "Artigos sobre psicologia e saúde mental em Vitória, Espírito Santo",
    },
] as const;

export const BLOG_CATEGORY_MAP = new Map(
    BLOG_CATEGORIES.map((category) => [category.slug, category]),
);
