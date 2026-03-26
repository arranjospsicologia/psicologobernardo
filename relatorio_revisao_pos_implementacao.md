# Revisao Pos-Implementacao do Site

Data da revisao: 26/03/2026  
Escopo: revisao local do estado atual do projeto, com foco em SEO tecnico, AEO, GEO/Local SEO, schemas/JSON-LD, consistencia NAP, editorial e EEAT.  
Metodo: inspeção direta do codigo, validacao com `npm run check`, validacao com `npm run build` e conferencia do HTML gerado em `build/`.

## Veredito executivo

O site melhorou de forma relevante em relacao a auditoria anterior. A base tecnica esta mais solida, o type-check agora passa sem erros, o sitemap foi saneado, o problema do `schemaIds.serviceOnline` foi resolvido, o CEP divergente foi eliminado, os links internos legados para `/blog/` foram removidos das paginas locais e o editorial ganhou uma camada real de revisao (`lastReviewed`) e maior uso de `Article`.

Ainda assim, **o site nao esta 100% no padrao alto desejado**. Encontrei **2 achados de alta prioridade** e **1 achado tecnico residual de media prioridade**:

1. A nova camada de `lastReviewed` esta implementada com um bug de parsing que afeta `dateModified` no schema e a data exibida ao usuario em todos os artigos.
2. A politica de privacidade agora declara que o site nao envia dados de navegacao a plataformas externas, mas o front continua carregando recursos de terceiros como Google Maps, script do Doctoralia e asset externo do Trustindex.
3. O arquivo `static/_headers` continua apontando cache para `/_app/*`, enquanto o build real publica assets em `/app/*`.

Minha leitura final: **o projeto saiu de "bom com debitos" para "quase premium, mas ainda com inconsistencias que precisam ser fechadas antes de considerar a base totalmente confiavel"**.

## Findings

## 1. Alta - `lastReviewed` esta em formato ISO, mas o template o interpreta como data brasileira

### Evidencia

- Em `src/lib/data/blog.ts`, o contrato editorial foi padronizado para ISO:
  - comentario em `src/lib/data/blog.ts:31`
  - valores como `lastReviewed: "2026-03-25"` em toda a lista
- Em `src/routes/[categoria]/[slug]/+page.svelte`, o valor continua sendo processado pela funcao `convertToISO`:
  - `src/routes/[categoria]/[slug]/+page.svelte:124`
  - `src/routes/[categoria]/[slug]/+page.svelte:125`
  - `src/routes/[categoria]/[slug]/+page.svelte:175`
  - `src/routes/[categoria]/[slug]/+page.svelte:236`
- No HTML gerado, isso vira data incorreta:
  - `build/saude-mental/intelectualizar-nao-sentir/index.html` mostra `dateModified":"2026-03-26"`
  - o mesmo HTML mostra `Revisado: 2026-03-26`
  - em `src/lib/data/blog.ts`, o valor salvo para o post e `2026-03-25`

### Impacto

- A data de revisao clinica exibida ao usuario fica incorreta.
- O campo `dateModified` do JSON-LD fica contaminado pelo dia do build, nao pela data real de revisao.
- Isso enfraquece a confiabilidade do bloco editorial exatamente na camada que deveria reforcar EEAT.
- Como `lastReviewed` foi aplicado em 37 posts, o problema e **sitewide** no corpus editorial.

### Julgamento

Para um site de psicologia que quer operar em alto padrao, esse e um problema relevante. Nao e um erro cosmetico: ele compromete a confiabilidade da metadata editorial e a integridade do sinal de revisao clinica.

## 2. Alta - Politica de privacidade ainda nao reflete com precisao o comportamento real do front

### Evidencia

Na politica de privacidade:

- `src/routes/politica-privacidade/+page.svelte:147` afirma que o site nao utiliza analytics de terceiros
- `src/routes/politica-privacidade/+page.svelte:150` afirma que nenhum dado de navegacao e registrado ou enviado a plataformas externas
- `src/routes/politica-privacidade/+page.svelte:234` afirma que o site nao utiliza cookies de rastreamento, analytics ou publicidade
- `src/routes/politica-privacidade/+page.svelte:240`
- `src/routes/politica-privacidade/+page.svelte:241`

Na implementacao real:

- `src/routes/localizacao/+page.svelte:127` carrega iframe do Google Maps
- `src/routes/localizacao/psicologo-mata-da-praia/+page.svelte:162` carrega iframe do Google Maps
- `src/routes/localizacao/psicologo-praia-do-canto/+page.svelte:166` carrega iframe do Google Maps
- `src/routes/localizacao/psicologo-vila-velha/+page.svelte:166` carrega iframe do Google Maps
- `src/routes/localizacao/psicologo-serra-es/+page.svelte:163` carrega iframe do Google Maps
- `src/lib/components/LazyDoctoraliaWidget.svelte:27` injeta script `platform.docplanner.com/js/widget.js`
- `src/lib/components/ReviewCarousel.svelte:93` carrega asset externo do `cdn.trustindex.io`
- `src/lib/components/ReviewCarousel.svelte:139` usa fallback externo em `via.placeholder.com`

### Impacto

- O site reduziu a inconsistência anterior sobre Google Analytics, mas ainda mantém uma declaracao ampla demais para a realidade.
- Do ponto de vista de privacidade e compliance, o problema mudou de forma, mas nao foi totalmente encerrado.
- Em um site de saude mental, esse tipo de desalinhamento pesa mais porque a camada de confianca e central para a marca.

### Julgamento

Se a estrategia for "site sem analytics", isso e defensavel. Mas entao a politica precisa distinguir claramente:

- ausencia de analytics de terceiros
- existencia de embeds/scripts externos sob demanda ou em paginas especificas
- quais recursos podem comunicar dados tecnicos a terceiros

Hoje o texto institucional ainda e mais absoluto do que a implementacao real permite sustentar.

## 3. Media - `_headers` continua desatualizado em relacao ao `appDir` real do build

### Evidencia

- `static/_headers:13` usa `/_app/immutable/*`
- `static/_headers:17` usa `/_app/*`
- O build atual publica assets em `/app/immutable/*`
- `npm run build` confirmou novamente assets gerados sob `/app/immutable/`

### Impacto

- O cache dos assets hashados pode nao receber a politica ideal em producao.
- Isso nao quebra indexacao, mas ainda fica abaixo do padrao tecnico desejado para uma base premium.

### Julgamento

E um debito tecnico pequeno, facil de corrigir, e ainda assim importante porque este tipo de detalhe separa um projeto "funcional" de um projeto realmente polido.

## O que foi corrigido com sucesso

Os seguintes pontos da auditoria anterior foram efetivamente resolvidos:

- `npm run check` agora passa com 0 erros e 0 warnings.
- `npm run build` passa com sucesso.
- `schemaIds.serviceOnline` agora existe em `src/lib/data/siteProfile.ts` e e usado corretamente em `src/routes/servicos/terapia-online/+page.svelte`.
- As paginas legais foram removidas do sitemap:
  - `privacy_in_sitemap=False`
  - `terms_in_sitemap=False`
- O CEP divergente da pagina `sobre` foi eliminado:
  - `old_cep_present=False`
- Os icones do manifest agora existem:
  - `static/web-app-manifest-192x192.png=True`
  - `static/web-app-manifest-512x512.png=True`
- Os links internos legados para `/blog/` deixaram de aparecer nas paginas locais revisadas.
- As paginas de localizacao evoluiram com schema melhor, incluindo `ProfessionalService` com `areaServed` nas paginas de `Vila Velha` e `Serra`.
- O editorial ganhou reforco de governanca:
  - 37 posts
  - 37 posts com `lastReviewed`
  - 11 posts com `schemaType: "Article"`
  - 37 blocos de FAQ

## Avaliacao por eixo

| Eixo | Avaliacao atual | Comentario |
| --- | --- | --- |
| SEO tecnico | Muito bom | Base robusta, com 1 debito residual em cache headers |
| AEO | Bom para muito bom | Boa estrutura de resposta, FAQs amplas, mas metadata editorial de revisao esta incorreta |
| GEO / Local SEO | Muito bom | Pags locais mais maduras, copy e schema mais consistentes |
| Schema / JSON-LD | Bom para muito bom | Evoluiu bastante, mas `dateModified` esta errado no corpus editorial |
| NAP | Muito bom | Coerencia forte, com o CEP antigo removido |
| Editorial | Bom para muito bom | Mais governado, mais revisado, ainda com oportunidade de ampliar referencias |
| EEAT | Bom para muito bom | Avancou materialmente, mas a confianca editorial e juridica ainda nao esta 100% fechada |

## Observacoes estrategicas

Estas nao sao falhas bloqueadoras, mas ainda separam o site de um padrao realmente premium:

- O corpus editorial agora tem `lastReviewed` em 37 posts, mas referencias continuam em 11 posts. Isso nao e necessariamente errado, desde que haja criterio editorial claro para diferenciar artigo clinico/referenciado de artigo mais reflexivo.
- O uso de `Article` subiu para 11 posts, o que e um progresso real. O proximo passo e tornar esse criterio explicito e consistente.
- A estrutura local esta bem mais madura e muito mais defensavel do que antes, especialmente em `Vila Velha` e `Serra`.

## Conclusao

O saldo da implementacao e claramente positivo. A maior parte das recomendacoes estruturais anteriores foi aplicada com competenca, e o site agora esta mais forte em SEO tecnico, mais coerente em schema, mais solido em local SEO e mais maduro editorialmente.

Mas a revisao nao autoriza dizer que "esta tudo de acordo com o alto padrao desejado" ainda.

Para chegar nesse nivel com seguranca, faltam tres fechamentos:

1. Corrigir o parsing de `lastReviewed` para que `dateModified` e a data exibida reflitam a data real de revisao.
2. Reescrever a politica de privacidade com precisao institucional, distinguindo analytics de terceiros de embeds/scripts externos realmente presentes no site.
3. Ajustar `static/_headers` para `/app/*`.

Se esses tres pontos forem resolvidos, minha avaliacao passa de "quase premium" para "base premium confiavel".

## Validacoes executadas nesta revisao

- `npm run check`: sucesso
- `npm run build`: sucesso
- conferencia de `build/sitemap.xml`
- conferencia de HTML gerado em artigos e paginas legais
- conferencia de schemas, NAP, localizacao, editorial e politica de privacidade no codigo-fonte
