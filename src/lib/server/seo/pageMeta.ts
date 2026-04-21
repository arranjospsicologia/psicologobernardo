// Fonte única de verdade para metadados técnicos de SEO de páginas estáticas.
//
// Use este módulo para registrar:
//  - páginas não indexáveis (`noindex`)
//  - lastmod real (data da última alteração significativa de conteúdo)
//
// Artigos e páginas do blog continuam usando `date` / `lastReviewed`
// como fonte primária — não há duplicação aqui.
//
// Ao editar uma página estática, atualize o `lastmod` correspondente.

export interface StaticPageMeta {
    /** Rota absoluta (sem domínio, com "/" inicial, sem "/" final, exceto "/"). */
    route: string;
    /** Data ISO (YYYY-MM-DD) da última alteração real. */
    lastmod: string;
    /** true se a página deve ser excluída do sitemap e marcada como noindex. */
    noindex?: boolean;
}

// Páginas explicitamente fora do índice do Google.
// Referenciadas também na geração do sitemap para garantir coerência.
// As rotas /localizacao/* foram movidas para /psicologo-vitoria-es/* e redirecionam via 301.
// Incluí-las aqui garante que não apareçam no sitemap mesmo que os arquivos ainda existam.
export const NOINDEX_ROUTES: readonly string[] = [
    "/politica-privacidade",
    "/termos-uso",
    "/localizacao",
    "/localizacao/psicologo-vitoria-es",
    "/localizacao/psicologo-jardim-da-penha",
] as const;

// Lastmod real por rota. Cada página estática indexável DEVE ter uma entrada
// aqui — a validação (`npm run seo:validate`) falha caso alguma URL do sitemap
// caia no fallback de build date.
//
// Observação: as rotas devem bater exatamente com a pasta em src/routes.
// Ex.: `terapia-de-casal` (com "de"), não `terapia-casal`.
export const STATIC_PAGE_LASTMOD: Record<string, string> = {
    "/": "2026-04-05",
    "/sobre": "2026-04-05",
    "/contato": "2026-03-29",
    "/agendar": "2026-03-29",

    "/servicos": "2026-03-29",
    "/servicos/psicoterapia-individual": "2026-03-29",
    "/servicos/terapia-de-casal": "2026-03-29",
    "/servicos/terapia-online": "2026-03-29",
    "/servicos/grupos-e-rodas": "2026-03-29",
    "/servicos/laudos-psicologicos": "2026-03-29",
    "/servicos/supervisao-profissional": "2026-03-29",

    "/experiencia": "2026-03-29",
    "/experiencia/ansiedade": "2026-04-05",
    "/experiencia/depressao": "2026-04-05",
    "/experiencia/burnout": "2026-04-05",
    "/experiencia/relacionamento": "2026-04-05",
    "/experiencia/autoestima": "2026-04-05",

    "/psicologo-vitoria-es": "2026-04-14",
    "/psicologo-vitoria-es/psicologo-jardim-da-penha": "2026-04-14",

    "/artigos": "2026-04-14",

    "/politica-editorial": "2026-04-14",
};

export function isNoIndexRoute(route: string): boolean {
    return NOINDEX_ROUTES.includes(route);
}
