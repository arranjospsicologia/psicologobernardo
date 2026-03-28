# Plano Operacional de Migracao do Blog

## Objetivo

Migrar o blog do modelo atual baseado em [`src/lib/data/blogContent.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\data\blogContent.ts) e [`src/lib/data/blog.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\data\blog.ts) para um modelo com arquivos independentes por postagem, mantendo:

- `SvelteKit`
- `adapter-static`
- rotas atuais de posts e categorias
- SEO e sitemap
- estilos editoriais ja existentes

Tambem preparar:

- paginacao numerada de `/artigos`
- paginacao numerada por categoria
- fluxo simples para novas postagens

Este plano foi desenhado para minimizar risco de corrupcao do arquivo legado e evitar complexidade desnecessaria.

## Premissas Tecnicas

- O projeto usa `@sveltejs/adapter-static`, conforme [`svelte.config.js`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\svelte.config.js).
- O conteudo atual das postagens esta dividido em:
  - metadados em [`src/lib/data/blog.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\data\blog.ts)
  - HTML bruto em [`src/lib/data/blogContent.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\data\blogContent.ts)
- Nem todos os drafts em [`blog-posts/drafts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\blog-posts\drafts) representam fielmente o conteudo publicado.
- A fonte de verdade da migracao deve ser o conteudo efetivamente publicado no codigo legado.
- O fluxo novo deve aceitar `Markdown` com HTML inline para preservar CTA, caixas, FAQ e variacoes de markup sem introduzir um CMS nem um sistema de componentes dentro do conteudo.

## Decisoes de Arquitetura

### Formato dos posts

Cada post sera salvo em um arquivo `.md` com:

1. `frontmatter` YAML para metadados
2. corpo em `Markdown`
3. HTML inline permitido quando necessario para blocos especiais
4. `publishedOrder` explicito para desempate de posts da mesma data

Justificativa:

- reduz risco de syntax break comparado a template strings TypeScript
- permite editar um post por arquivo
- evita criar DSL customizada agora
- preserva markup rico sem depender de parser complexo
- garante ordenacao deterministica quando houver mais de um post na mesma data

### Renderizacao

Usar:

- `gray-matter` para frontmatter
- `markdown-it` para conversao Markdown -> HTML
- HTML inline permitido no Markdown

Nao implementar, nesta fase:

- CMS
- MDsveX
- blocos customizados `:::cta`
- banco de dados

Justificativa:

- reduz superficie de falha
- simplifica migracao do legado
- preserva flexibilidade para CTA e blocos com classe

### Paginas numeradas

Paginacao padrao:

- `/artigos/` = pagina 1
- `/artigos/pagina/2/`
- `/artigos/pagina/3/`

Categorias:

- `/{categoria}/` = pagina 1
- `/{categoria}/pagina/2/`

### Regra de ordenacao editorial

Ordenacao oficial dos posts:

1. `date` desc
2. `publishedOrder` asc
3. `slug` asc apenas como fallback tecnico

Regra editorial:

- quando dois posts compartilham a mesma data, `publishedOrder: 1` aparece antes de `publishedOrder: 2`
- a exportacao inicial deve reproduzir a ordem atual definida em [`src/lib/data/blog.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\data\blog.ts)
- novos posts publicados na mesma data devem sempre declarar `publishedOrder`

### Prerender no adapter-static

Como o site e estatico, as rotas dinamicas de paginacao e posts precisam ser garantidas no build. A implementacao deve incluir `entries()` nas rotas dinamicas para evitar depender apenas do crawler do prerender.

## Dependencias a Instalar

### Runtime dependencies

Instalar:

```powershell
npm install gray-matter markdown-it
```

Uso:

- `gray-matter`: leitura de frontmatter dos arquivos `.md`
- `markdown-it`: renderizacao do corpo do post

### Dev dependencies

Instalar:

```powershell
npm install -D turndown
```

Uso:

- `turndown`: conversao assistida de HTML legado para Markdown durante a migracao

Observacao:

- `turndown` sera usado apenas em scripts de migracao
- nao entra no fluxo de runtime do site

## Estrutura Final de Pastas

Criar:

```text
src/content/posts/
src/lib/server/blog/
scripts/blog-migration/
tmp/blog-migration/
```

Estrutura detalhada:

```text
src/
  content/
    posts/
      2025-01-22-abordagem-centrada-pessoa.md
      2025-01-22-terapia-para-homens.md
      2026-03-26-parque-pedra-cebola-terapia-natural.md

  lib/
    server/
      blog/
        constants.ts
        types.ts
        schema.ts
        markdown.ts
        loader.ts
        pagination.ts
        seo.ts
        legacy.ts

scripts/
  blog-migration/
    extract-legacy-posts.mjs
    normalize-post-markdown.mjs
    compare-draft-to-legacy.mjs
    report-migration-status.mjs

tmp/
  blog-migration/
    extracted/
    reports/
```

## Arquivos a Criar

### Conteudo

- `src/content/posts/*.md`

Cada arquivo representa um post publicado.

### Infraestrutura nova

- [`src/lib/server/blog/constants.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\server\blog\constants.ts)
- [`src/lib/server/blog/types.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\server\blog\types.ts)
- [`src/lib/server/blog/schema.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\server\blog\schema.ts)
- [`src/lib/server/blog/markdown.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\server\blog\markdown.ts)
- [`src/lib/server/blog/loader.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\server\blog\loader.ts)
- [`src/lib/server/blog/pagination.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\server\blog\pagination.ts)
- [`src/lib/server/blog/seo.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\server\blog\seo.ts)
- [`src/lib/server/blog/legacy.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\server\blog\legacy.ts)

### Scripts de migracao

- [`scripts/blog-migration/extract-legacy-posts.mjs`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\scripts\blog-migration\extract-legacy-posts.mjs)
- [`scripts/blog-migration/normalize-post-markdown.mjs`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\scripts\blog-migration\normalize-post-markdown.mjs)
- [`scripts/blog-migration/compare-draft-to-legacy.mjs`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\scripts\blog-migration\compare-draft-to-legacy.mjs)
- [`scripts/blog-migration/report-migration-status.mjs`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\scripts\blog-migration\report-migration-status.mjs)

### Rotas novas

- [`src/routes/artigos/+page.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\artigos\+page.ts)
- [`src/routes/artigos/pagina/[page]/+page.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\artigos\pagina\[page]\+page.ts)
- [`src/routes/[categoria]/pagina/[page]/+page.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\[categoria]\pagina\[page]\+page.ts)

Observacao:

- o projeto hoje usa `+page.ts` nas rotas dinamicas existentes
- manter `+page.ts` em vez de `+page.server.ts` reduz atrito com o comportamento atual
- os utilitarios de leitura podem continuar importados do servidor local porque a saida e estatica no build

## Arquivos a Alterar

### Rotas de listagem e post

- [`src/routes/artigos/+page.svelte`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\artigos\+page.svelte)
- [`src/routes/[categoria]/+page.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\[categoria]\+page.ts)
- [`src/routes/[categoria]/+page.svelte`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\[categoria]\+page.svelte)
- [`src/routes/[categoria]/[slug]/+page.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\[categoria]\[slug]\+page.ts)
- [`src/routes/[categoria]/[slug]/+page.svelte`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\[categoria]\[slug]\+page.svelte)

### SEO

- [`src/routes/sitemap.xml/+server.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\sitemap.xml\+server.ts)

### Data legado

Manter inicialmente sem alteracao funcional:

- [`src/lib/data/blog.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\data\blog.ts)
- [`src/lib/data/blogContent.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\data\blogContent.ts)

Esses arquivos so devem ser removidos no corte final.

## Contrato dos Arquivos Markdown

### Frontmatter obrigatorio

```yaml
slug:
title:
description:
category:
date:
dateLabel:
publishedOrder:
readTime:
image:
tags:
published:
```

### Frontmatter opcional

```yaml
altText:
schemaType:
lastReviewed:
faq:
references:
featured:
legacySlug:
```

### Exemplo canonico

```md
---
slug: abordagem-centrada-pessoa
title: O que e a Abordagem Centrada na Pessoa e por que ela continua tao atual
description: Conheca os principios da ACP, desenvolvida por Carl Rogers...
category: acp
date: 2025-01-22
dateLabel: 22 Jan 2025
publishedOrder: 1
readTime: 14
image: /images/blog/abordagem-centrada-pessoa.webp
altText: ...
tags:
  - acp
published: true
schemaType: Article
lastReviewed: 2026-03-25
faq:
  - question: O que e ACP?
    answer: ...
references:
  - Rogers, C. R. ...
---

<p class="lead">Texto inicial do artigo...</p>

## Subtitulo

Paragrafo em markdown.

<section class="box">
  <h3>Bloco de destaque</h3>
  <p>Conteudo preservado em HTML.</p>
</section>

<section class="cta">
  <h2>Quando fizer sentido, podemos conversar</h2>
  <p>...</p>
  <p>
    <a href="/sobre/">Conheca meu trabalho</a> ·
    <a href="/contato/">Entre em contato</a>
  </p>
</section>
```

## Responsabilidade de Cada Arquivo Novo

### `src/lib/server/blog/constants.ts`

Definir:

- `POSTS_PER_PAGE`
- ordem das categorias
- labels de categorias
- URL base do site
- configuracoes de canonical das paginas numeradas

### `src/lib/server/blog/types.ts`

Definir tipos:

- `BlogCategorySlug`
- `BlogFrontmatter`
- `BlogPostIndexItem`
- `BlogPostFull`
- `PaginatedPostsResult`
- `publishedOrder` como inteiro obrigatorio no frontmatter e no indice

### `src/lib/server/blog/schema.ts`

Responsavel por:

- validar frontmatter minimo
- garantir categorias permitidas
- garantir `slug` unico
- garantir `published` booleano
- garantir `publishedOrder` inteiro >= 0
- validar arrays de `faq` e `references`

### `src/lib/server/blog/markdown.ts`

Responsavel por:

- criar instancia `markdown-it`
- renderizar markdown para HTML
- permitir HTML inline
- normalizar links externos `target="_blank"` quando necessario

Nao deve:

- reescrever semanticamente o conteudo
- tentar inferir CTA automaticamente

### `src/lib/server/blog/loader.ts`

Responsavel por:

- ler todos os arquivos `src/content/posts/*.md`
- aplicar `gray-matter`
- validar frontmatter
- renderizar corpo
- gerar indice ordenado por `date desc`, `publishedOrder asc`
- expor helpers:
  - `getAllPublishedPosts()`
  - `getPostBySlug(slug)`
  - `getPostsByCategory(category)`
  - `getPaginatedPosts(page)`
  - `getPaginatedPostsByCategory(category, page)`
  - `getAllBlogRouteEntries()`

### `src/lib/server/blog/pagination.ts`

Responsavel por:

- calcular total de paginas
- validar pagina requerida
- fatiar arrays
- construir URLs prev/next

### `src/lib/server/blog/seo.ts`

Responsavel por:

- gerar canonical das listagens numeradas
- gerar metadados de `CollectionPage`
- gerar breadcrumbs para:
  - `/artigos/`
  - `/artigos/pagina/N/`
  - `/{categoria}/`
  - `/{categoria}/pagina/N/`

### `src/lib/server/blog/legacy.ts`

Responsavel por:

- encapsular leitura temporaria do legado
- prover fallback durante a migracao

Deve ser temporario.

## Scripts de Migracao

### `extract-legacy-posts.mjs`

Entrada:

- [`src/lib/data/blog.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\data\blog.ts)
- [`src/lib/data/blogContent.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\data\blogContent.ts)

Saida:

- `tmp/blog-migration/extracted/{slug}.json`
- `tmp/blog-migration/extracted/{slug}.html`
- `tmp/blog-migration/extracted/{slug}.md`

Responsabilidade:

- nunca editar os arquivos legados
- extrair metadados por `slug`
- calcular `publishedOrder` por data a partir da ordem atual do array legado
- converter HTML inicial para markdown via `turndown`
- registrar blocos sensiveis encontrados:
  - `lead`
  - `section class="box"`
  - `section class="cta"`
  - `faq`
  - `references`

### `normalize-post-markdown.mjs`

Responsabilidade:

- ajustar espacos
- normalizar titulos
- evitar quebras ruins
- preservar HTML inline necessario

Nao deve:

- inferir semanticamente referencias
- alterar o texto clinico

### `compare-draft-to-legacy.mjs`

Responsabilidade:

- localizar draft correspondente em:
  - [`blog-posts/drafts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\blog-posts\drafts)
  - [`blog-posts/draft-posted`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\blog-posts\draft-posted)
- gerar diff textual simples
- apontar:
  - titulo diferente
  - CTA diferente
  - FAQ diferente
  - referencias diferentes

Regra:

- o publicado no codigo legado prevalece
- o draft serve apenas como material auxiliar de revisao

### `report-migration-status.mjs`

Responsabilidade:

- gerar relatorio com status de todos os slugs
- apontar:
  - extraido
  - convertido
  - revisado
  - publicado no novo fluxo
  - ainda em fallback legado

## Sequencia de Implementacao

### Etapa 1: Preparacao e dependencia

Tarefas:

1. Instalar dependencias:
   - `gray-matter`
   - `markdown-it`
   - `turndown`
2. Criar pastas:
   - `src/content/posts`
   - `src/lib/server/blog`
   - `scripts/blog-migration`
   - `tmp/blog-migration/extracted`
   - `tmp/blog-migration/reports`
3. Adicionar scripts ao `package.json`:
   - `blog:migrate:extract`
   - `blog:migrate:report`

Arquivos envolvidos:

- [`package.json`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\package.json)

### Etapa 2: Criar a camada de conteudo nova

Tarefas:

1. Criar `types.ts`
2. Criar `constants.ts`
3. Criar `schema.ts`
4. Criar `markdown.ts`
5. Criar `pagination.ts`
6. Criar `loader.ts`
7. Criar `seo.ts`

Validacoes esperadas:

- leitura de todos os `.md`
- ordenacao correta por data
- slug unico
- categoria valida

### Etapa 3: Criar a infraestrutura de fallback legado

Tarefas:

1. Criar `legacy.ts`
2. Expor uma API simples:
   - `getLegacyPostBySlug(slug)`
   - `hasMigratedPost(slug)`

Objetivo:

- permitir migracao por lotes sem quebrar posts ainda nao migrados

### Etapa 4: Criar pipeline de extracao assistida

Tarefas:

1. Criar `extract-legacy-posts.mjs`
2. Criar `normalize-post-markdown.mjs`
3. Criar `compare-draft-to-legacy.mjs`
4. Criar `report-migration-status.mjs`
5. Rodar extracao inicial para todos os slugs atuais

Saidas esperadas:

- um arquivo intermediario por slug em `tmp/blog-migration/extracted`
- relatorio de divergencia com drafts

### Etapa 5: Migrar lote piloto

Tarefas:

1. Selecionar 5 posts representativos:
   - 1 simples
   - 1 com CTA rico
   - 1 com FAQ
   - 1 com referencias
   - 1 local
2. Gerar `.md` finais em `src/content/posts`
3. Revisar manualmente:
   - acentuacao
   - links
   - imagem
   - ordem relativa entre posts da mesma data
   - CTA
   - FAQ
   - referencias
4. Validar render visual do lote

Critico:

- nao migrar em massa antes do lote piloto estar estavel

### Etapa 6: Adaptar a rota de post individual

Tarefas:

1. Alterar [`src/routes/[categoria]/[slug]/+page.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\[categoria]\[slug]\+page.ts)
2. Ler primeiro do novo `loader.ts`
3. Se o slug ainda nao tiver sido migrado, usar fallback de `legacy.ts`
4. Manter redirects atuais
5. Ajustar [`src/routes/[categoria]/[slug]/+page.svelte`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\[categoria]\[slug]\+page.svelte) para consumir a nova estrutura

Resultado:

- posts migrados passam pelo novo fluxo
- posts nao migrados continuam disponiveis

### Etapa 7: Implementar paginacao da listagem geral

Tarefas:

1. Criar [`src/routes/artigos/+page.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\artigos\+page.ts)
2. Criar [`src/routes/artigos/pagina/[page]/+page.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\artigos\pagina\[page]\+page.ts)
3. Alterar [`src/routes/artigos/+page.svelte`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\artigos\+page.svelte)

Decisoes:

- pagina 1 em `/artigos/`
- `POSTS_PER_PAGE = 9`
- busca client-side atual deve ser removida ou simplificada

Recomendacao:

- remover a busca livre da listagem principal nesta fase
- manter apenas navegacao por pagina e categoria

Motivo:

- a busca atual reintroduz a necessidade de carregar o dataset inteiro no cliente
- isso contraria o objetivo de desempenho mobile

### Etapa 8: Implementar paginacao por categoria

Tarefas:

1. Criar [`src/routes/[categoria]/pagina/[page]/+page.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\[categoria]\pagina\[page]\+page.ts)
2. Alterar [`src/routes/[categoria]/+page.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\[categoria]\+page.ts)
3. Alterar [`src/routes/[categoria]/+page.svelte`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\[categoria]\+page.svelte)

Decisoes:

- usar a mesma regra de 9 posts por pagina
- expor prev/next e numero da pagina atual

### Etapa 9: Garantir prerender das rotas dinamicas

Tarefas:

1. Adicionar `entries()` em:
   - `src/routes/[categoria]/[slug]/+page.ts`
   - `src/routes/artigos/pagina/[page]/+page.ts`
   - `src/routes/[categoria]/pagina/[page]/+page.ts`
2. Gerar entradas a partir de `loader.ts`

Objetivo:

- garantir build estavel no `adapter-static`
- evitar paginas faltando por ausencia de descoberta no crawl

### Etapa 10: Atualizar sitemap

Tarefas:

1. Alterar [`src/routes/sitemap.xml/+server.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\routes\sitemap.xml\+server.ts)
2. Trocar a fonte de dados de `blog.ts` para `loader.ts`
3. Incluir:
   - posts migrados
   - paginas de categoria
   - paginas de categoria numeradas
   - paginas de `/artigos/pagina/N/`

### Etapa 11: Migracao em lotes

Tarefas:

1. Executar extracao global
2. Migrar em lotes de 5 a 10 posts
3. Para cada post:
   - comparar legado e draft
   - revisar markdown gerado
   - criar arquivo final `.md`
   - testar pagina
4. Ao final de cada lote:
   - rodar build
   - validar visualmente
   - commitar

Regra operacional:

- nunca migrar dezenas de posts num unico commit

### Etapa 12: Corte do legado

Pre-condicoes:

- todos os posts migrados
- nenhuma rota usando fallback
- sitemap apontando apenas para o novo fluxo

Tarefas:

1. Remover fallback de `legacy.ts`
2. Alterar definitivamente a rota de post para usar apenas `loader.ts`
3. Remover dependencia editorial de:
   - [`src/lib/data/blogContent.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\data\blogContent.ts)
   - [`src/lib/data/blog.ts`](c:\Users\bcari\OneDrive\Desktop\Projetos\site_psicologo_bernardo\src\lib\data\blog.ts)
4. Manter backup do legado fora do fluxo ativo

## Checklist de Revisao de Cada Post

Para cada slug migrado, revisar:

- slug correto
- titulo correto
- description correta
- categoria correta
- data correta
- `publishedOrder` correto
- `lastReviewed` correto
- imagem correta
- `altText` correto
- tags corretas
- CTA preservado
- FAQ preservado
- referencias preservadas
- classes especiais preservadas
- links internos funcionando
- links externos funcionando
- acentuacao correta
- rendering visual equivalente ao post atual

## Criticos de Qualidade

### Nao fazer

- nao editar em massa `blogContent.ts`
- nao substituir HTML legado por Markdown puro sem revisao
- nao manter busca client-side carregando todos os posts
- nao depender apenas do crawler do prerender para paginas numeradas
- nao migrar baseado apenas nos drafts

### Fazer

- extrair sempre para arquivos novos
- revisar manualmente cada post
- migrar em lotes pequenos
- usar fallback temporario durante a transicao
- centralizar leitura dos posts no `loader.ts`
- manter `publishedOrder` explicito e consistente em toda nova postagem

## Scripts a Adicionar no `package.json`

Adicionar:

```json
{
  "scripts": {
    "blog:migrate:extract": "node scripts/blog-migration/extract-legacy-posts.mjs",
    "blog:migrate:report": "node scripts/blog-migration/report-migration-status.mjs"
  }
}
```

Opcionalmente depois:

```json
{
  "scripts": {
    "blog:validate": "node scripts/blog-migration/report-migration-status.mjs && npm run check"
  }
}
```

## Ordem Exata de Execucao Recomendada

1. Instalar dependencias.
2. Criar infraestrutura `src/lib/server/blog`.
3. Criar scripts de extracao.
4. Rodar extracao inicial de todos os slugs.
5. Criar 5 posts migrados piloto em `src/content/posts`.
6. Adaptar rota individual com fallback.
7. Implementar paginacao de `/artigos`.
8. Implementar paginacao por categoria.
9. Implementar `entries()` para prerender.
10. Atualizar sitemap.
11. Migrar o restante em lotes.
12. Remover legado e fallback.

## Resultado Esperado

Ao final da implementacao:

- cada post estara em um arquivo independente
- o blog deixara de depender de um arquivo monolitico e fragil
- a criacao de novos posts sera feita por adicao de um novo `.md`
- a pagina `/artigos` deixara de carregar todos os cards de uma vez
- categorias tambem ficarao paginadas
- o build estatico continuara previsivel
- o risco de corromper varios posts em uma unica edicao caira drasticamente
