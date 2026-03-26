# Plano de Correcao - Relatorio SEO/AEO/GEO

Baseado no `relatorio_final.md` de 25/03/2026.

Você atuará como um webdesigner senior na implementação das seguintes etapas, individualmente, sem agregar complexidade desnecessaria ao site.

---

## P1 - Prioridade Critica

### [X] 1. Corrigir falha do `npm run check` — schemaIds.serviceOnline

**Problema:** `schemaIds.serviceOnline` e usado em `terapia-online/+page.svelte` mas nao existe em `siteProfile.ts`. Isso quebra o type-check do projeto.

**Arquivos a alterar:**
- `src/lib/data/siteProfile.ts`

**Descricao da correcao:**
Adicionar a propriedade `serviceOnline` ao objeto `schemaIds` em `siteProfile.ts`, seguindo o padrao existente:
```ts
serviceOnline: "https://psicologobernardo.com.br/servicos/terapia-online/#service",
```
Inserir logo apos a linha 61 (`serviceCouple`), antes do `} as const;`.

**Validacao:** Rodar `npm run check` — deve passar sem erros.

**Mudanca observavel no site:** Nenhuma mudanca visual. Correcao de integridade tecnica do projeto.

---

### [X] 2. Alinhar politica de privacidade com a implementacao real

**Problema:** A politica de privacidade declara uso de Google Analytics, cookies e coleta automatica de dados (IP, navegador, paginas visitadas), mas nao ha implementacao de GA, nem banner de consentimento no site. Isso cria risco de compliance (LGPD) e de confianca (EEAT/Trust).

**Arquivos a alterar:**
- `src/routes/politica-privacidade/+page.svelte`

**Descricao da correcao:**
Como o site **nao usa** Google Analytics nem cookies de rastreamento, a politica deve refletir essa realidade. Reescrever as secoes 3.2 (Dados coletados automaticamente), 4.2 (Dados de navegacao), 6 (Compartilhamento — remover menção a GA como processador) e 7 (Cookies) para declarar que:
- O site nao utiliza cookies de rastreamento ou analytics de terceiros.
- O site nao coleta dados de navegacao automaticamente.
- A navegacao e anonima; nenhum dado e enviado a plataformas externas.
- Cookies utilizados sao apenas tecnicos/essenciais do proprio site (se houver).

Remover tambem da secao 10 (Retencao) o item sobre "dados de navegacao armazenados pelo Google Analytics".

**Validacao:** Ler a pagina `/politica-privacidade` e confirmar que nenhuma tecnologia inexistente e declarada.

**Mudanca observavel no site:** Texto da pagina de politica de privacidade atualizado — sem mencoes a Google Analytics ou cookies de rastreamento.

---

### [X] 3. Atualizar links internos legados `/blog/...` para URLs canonicas

**Problema:** 6 paginas de localizacao usam `href="/blog/${article.slug}/"` em vez da URL canonica `/${article.categorySlug}/${article.slug}/`. Isso gera redirects internos desnecessarios, desperdicando crawl budget.

**Arquivos a alterar:**
- `src/routes/localizacao/psicologo-vitoria-es/+page.svelte` (linha 529)
- `src/routes/localizacao/psicologo-vila-velha/+page.svelte` (linha 290)
- `src/routes/localizacao/psicologo-serra-es/+page.svelte` (linha 291)
- `src/routes/localizacao/psicologo-praia-do-canto/+page.svelte` (linha 303)
- `src/routes/localizacao/psicologo-mata-da-praia/+page.svelte` (linha 295)
- `src/routes/localizacao/psicologo-jardim-da-penha/+page.svelte` (linha 485)

**Descricao da correcao:**
Em cada arquivo, trocar:
```svelte
href={`/blog/${article.slug}/`}
```
por:
```svelte
href={`/${article.categorySlug}/${article.slug}/`}
```
Verificar que o objeto `article` usado nessas paginas ja possui a propriedade `categorySlug`. Se nao possuir, verificar como os artigos sao importados e garantir que o `categorySlug` esteja disponivel no contexto.

**Validacao:** No site, clicar nos links de artigos dentro de qualquer pagina de localizacao — devem levar diretamente a URL final sem redirect.

**Mudanca observavel no site:** Links de artigos nas paginas de localizacao agora apontam para a URL correta (ex: `/saude-mental/meu-artigo/` em vez de `/blog/meu-artigo/`).

---

### [ ] 4. Remover paginas `noindex` do sitemap

**Problema:** O sitemap inclui `/politica-privacidade/` e `/termos-uso/`, que possuem `<meta name="robots" content="noindex, nofollow">`. Oferecer uma URL ao rastreador e ao mesmo tempo instrui-lo a nao indexar cria sinal contraditorio.

**Arquivos a alterar:**
- `src/routes/sitemap.xml/+server.ts`

**Descricao da correcao:**
No filtro de rotas estaticas (por volta da linha 135-138), adicionar exclusao explicita das paginas com noindex:
```ts
.filter((route) => {
    // Exclude dynamic routes
    if (route.includes('[') || route.includes(']')) return false;
    // Exclude noindex pages from sitemap
    const noIndexPages = ['/politica-privacidade', '/termos-uso'];
    if (noIndexPages.includes(route)) return false;
    return true;
});
```

**Validacao:** Fazer build (`npm run build`) e verificar que `build/sitemap.xml` nao contem as URLs `/politica-privacidade/` nem `/termos-uso/`.

**Mudanca observavel no site:** As URLs de politica de privacidade e termos de uso desaparecem do sitemap.xml servido.

---

## P2 - Prioridade Alta

### [X] 5. Corrigir path de cache em `_headers` (`/_app` → `/app`)

**Problema:** O `static/_headers` usa `/_app/immutable/*` e `/_app/*`, mas o `appDir` configurado em `svelte.config.js` e `app` (sem underscore). O build real gera `/app/immutable/*`. Resultado: a regra de cache de 1 ano nao se aplica aos assets imutaveis.

**Arquivos a alterar:**
- `static/_headers`

**Descricao da correcao:**
Trocar:
```
/_app/immutable/*
  Cache-Control: public, max-age=31536000, immutable

/_app/*
  Cache-Control: public, max-age=604800
```
por:
```
/app/immutable/*
  Cache-Control: public, max-age=31536000, immutable

/app/*
  Cache-Control: public, max-age=604800
```

**Validacao:** Conferir que os paths no `_headers` correspondem exatamente ao `appDir: 'app'` do `svelte.config.js`.

**Mudanca observavel no site:** Assets JS/CSS hashados passam a receber cache de 1 ano no CDN, melhorando performance para visitas recorrentes.

---

### [X] 6. Corrigir icones ausentes no `site.webmanifest`

**Problema:** O manifest referencia `web-app-manifest-192x192.png` e `web-app-manifest-512x512.png`, mas esses arquivos nao existem em `static/`. O unico PNG disponivel e `favicon-96x96.png`.

**Arquivos a alterar:**
- `static/site.webmanifest`

**Descricao da correcao:**
Ha duas opcoes. Escolher a mais adequada:

**Opcao A (rapida):** Gerar os PNGs 192x192 e 512x512 a partir do `favicon.svg` existente e salvar como `static/web-app-manifest-192x192.png` e `static/web-app-manifest-512x512.png`. Pode-se usar sharp, Inkscape CLI ou qualquer ferramenta de conversao. Exemplo com sharp via Node:
```js
import sharp from 'sharp';
await sharp('static/favicon.svg').resize(192).png().toFile('static/web-app-manifest-192x192.png');
await sharp('static/favicon.svg').resize(512).png().toFile('static/web-app-manifest-512x512.png');
```

**Opcao B (alternativa):** Atualizar o manifest para apontar para os icones que realmente existem:
```json
"icons": [
  {
    "src": "/favicon-96x96.png",
    "sizes": "96x96",
    "type": "image/png",
    "purpose": "any"
  }
]
```
**Opcao A e recomendada** pois garante icones nos tamanhos padrao para PWA.

**Validacao:** Abrir `/site.webmanifest` no navegador e verificar que cada URL de icone referenciada retorna 200.

**Mudanca observavel no site:** Icone do PWA/manifest funcional. Ao adicionar o site a tela inicial de um celular, o icone correto aparece.

---

### [X] 7. Unificar CEP divergente na pagina Sobre

**Problema:** O schema JSON-LD `Person` na pagina `/sobre` usa CEP `29060-630`, enquanto todo o restante do site usa `29060-500`. Isso gera inconsistencia de entidade (NAP).

**Arquivos a alterar:**
- `src/routes/sobre/+page.svelte` (linha 79)

**Descricao da correcao:**
Na linha 79, trocar:
```ts
postalCode: "29060-630",
```
por:
```ts
postalCode: "29060-500",
```
Idealmente, importar o valor de `siteProfile.address.postalCode` em vez de hardcodar, para prevenir futuras divergencias. Verificar se ja ha import de `siteProfile` nessa pagina e usar:
```ts
postalCode: siteProfile.address.postalCode,
```

**Validacao:** Inspecionar o JSON-LD da pagina `/sobre` no HTML gerado — o CEP deve ser `29060-500`.

**Mudanca observavel no site:** Nenhuma mudanca visual. CEP unificado nos dados estruturados, fortalecendo consistencia NAP para buscadores.

---

### [X] 8. Definir padrao editorial para `Article` vs `BlogPosting`, referencias e `lastReviewed`

**Problema:** Apenas 3 dos 37 posts usam `schemaType: "Article"`, 11 possuem referencias e 0 possuem `lastReviewed`. Isso reduz a formalizacao de autoridade clinica (EEAT).

**Arquivos a alterar:**
- `src/lib/data/blog.ts` — atualizar metadados dos posts existentes
- `src/routes/[categoria]/[slug]/+page.svelte` — garantir que `lastReviewed` e renderizado no schema JSON-LD do post (se ainda nao estiver)

**Descricao da correcao:**

**Parte A — Criterio editorial (documentar no topo de `blog.ts` como comentario):**
Adicionar um comentario de governanca no inicio do array `blogPosts`:
```ts
/**
 * Criterios editoriais:
 * - schemaType "Article": usar para posts com referencias bibliograficas, dados tecnicos ou conteudo clinico fundamentado.
 * - schemaType "BlogPosting" (default): posts opinativos, reflexivos ou de posicionamento pessoal.
 * - lastReviewed: preencher com data ISO (YYYY-MM-DD) sempre que o conteudo for revisado clinicamente.
 * - references: obrigatoria para posts "Article"; recomendada para posts que mencionem dados, pesquisas ou afirmacoes clinicas.
 */
```

**Parte B — Atualizar posts que ja possuem referencias para usar `schemaType: "Article"`:**
Revisar os 11 posts que ja tem `references` em `blogContent.ts` e, para aqueles que nao possuem `schemaType: "Article"` em `blog.ts`, adicionar essa propriedade.

**Parte C — Adicionar `lastReviewed` aos posts existentes:**
Para todos os 37 posts, adicionar `lastReviewed: "2026-03-25"` (data da revisao atual) no objeto do post em `blog.ts`.
1
**Parte D — Garantir renderizacao no schema:**
No template `[slug]/+page.svelte`, verificar se o JSON-LD do artigo ja renderiza `lastReviewed`. Se nao, adicionar campo `dateModified` (ou custom property) ao schema usando o valor de `lastReviewed` quando presente.

**Validacao:**
- `npm run check` passa.
- Inspecionar HTML de um artigo com `lastReviewed` — o schema JSON-LD deve conter `dateModified`.
- Artigos com referencias devem ter `schemaType: "Article"` no schema.

**Mudanca observavel no site:** Nenhuma mudanca visual direta. Dados estruturados dos artigos passam a declarar tipo correto, data de revisao e maior consistencia editorial.

---

## P3 - Prioridade Media

### [X] 9. Evoluir paginas de area atendida (Vila Velha e Serra)

**Problema:** As paginas de Vila Velha e Serra funcionam como paginas de area atendida, mas ainda possuem pouca diferenciacao editorial. Risco moderado de percepcao de doorway pages.

**Arquivos a alterar:**
- `src/routes/localizacao/psicologo-vila-velha/+page.svelte`
- `src/routes/localizacao/psicologo-serra-es/+page.svelte`

**Descricao da correcao:**
Para cada pagina:

1. **Texto:** Reforcar explicitamente que o consultorio fica em Jardim da Penha (Vitoria) e que a pagina destina-se a moradores dessas regioes que buscam atendimento presencial ou online. Incluir:
   - Tempo medio de deslocamento da regiao ate o consultorio.
   - Menção explicita a opcao de terapia online como alternativa.
   - Motivos reais e contextos especificos de por que pacientes dessas regioes buscam atendimento em Vitoria.
   - Dores ou necessidades especificas do publico local (ex.: rotina, transito, acesso).

2. **Schema JSON-LD:** Evoluir o schema dessas paginas para incluir:
   - `areaServed` declarando explicitamente o municipio como area atendida.
   - Referencia ao `ProfessionalService` principal (consultorio em Vitoria) via `@id`.
   - `serviceArea` com nome do municipio.

3. **Diferenciacao:** Garantir que o conteudo de cada pagina seja substancialmente diferente entre si e das demais paginas de localizacao. Evitar blocos de texto identicos com apenas troca de nome de cidade.

**Validacao:** Comparar o HTML gerado de Vila Velha e Serra — devem ter conteudo, FAQ e schema significativamente distintos. Inspecionar JSON-LD para presenca de `areaServed`.

**Mudanca observavel no site:** Paginas de Vila Velha e Serra com conteudo mais rico, contextualizado e com dados estruturados mais robustos.

---

### [ ] 10. Expandir governanca editorial e cluster local

**Problema:** O acervo editorial e bom em direcao mas ainda carece de rotinas formais de revisao, e a cobertura local fora de Vitoria/Jardim da Penha e curta.

**Arquivos a alterar:**
- `src/lib/data/blog.ts` — adicionar novos posts ao longo do tempo
- `src/lib/data/blogContent.ts` — conteudo dos novos posts

**Descricao da correcao:**
Este item e de execucao continua. Definir como diretriz:

1. **Revisao trimestral:** A cada 3 meses, revisar os artigos evergreen mais acessados. Atualizar `lastReviewed` e, se necessario, o conteudo.

2. **Aumentar proporcao de referencias:** Para cada novo artigo sobre tema clinico, tecnico ou sensivel, incluir pelo menos 2-3 referencias bibliograficas.

3. **Bloco editorial padrao:** Em artigos-chave, incluir secoes como:
   - "Para quem este conteudo serve"
   - "Quando buscar ajuda profissional"
   - "Limites do conteudo informativo"

4. **Cluster local:** Criar conteudo editorial que reforce as paginas locais com profundidade geografica autentica (ex.: artigos sobre saude mental no contexto de vida em Vitoria, desafios urbanos, rotina em cidades da Grande Vitoria).

**Validacao:** Este item nao tem validacao tecnica unica — e uma diretriz de governanca editorial continua.

**Mudanca observavel no site:** Ao longo do tempo, artigos mais completos, referenciados, revisados e com ancoragem local mais forte.

---

## Ordem de execucao recomendada

| Etapa | Item | Estimativa de esforco |
|-------|------|-----------------------|
| 1 | Item 1 — schemaIds.serviceOnline | 2 min |
| 2 | Item 4 — Remover noindex do sitemap | 5 min |
| 3 | Item 5 — Corrigir _headers | 2 min |
| 4 | Item 7 — Unificar CEP na pagina Sobre | 5 min |
| 5 | Item 3 — Links legados /blog/ | 15 min |
| 6 | Item 6 — Icones do manifest | 10 min |
| 7 | Item 2 — Politica de privacidade | 20 min |
| 8 | Item 8 — Padrao editorial Article/BlogPosting | 30 min |
| 9 | Item 9 — Paginas Vila Velha e Serra | 45 min |
| 10 | Item 10 — Governanca editorial continua | Continuo |
