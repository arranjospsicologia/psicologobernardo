# Plano de Implementacao - Melhorias SEO/AEO/GEO Padrao-Ouro

**Base**: relatorio-seo-aeo-geo-psicologo-vitoria.md
**Referencia**: site_abandonado/
**Projeto alvo**: site_psicologo_bernardo (atual)

> Cada item e uma melhoria individual. Marque `[x]` quando concluido.

> você é um webdesigner senior, com a tarefa de implementar as mudanças listadas em implementar.md\
> Você pode utilizar para referencia o site contido na pasta site_abandonado. Nele, as mudanças já foram implementadas mas, num unico pacote que alterou UI e editorial e descaracterizou o site, portanto, vamos aplicar as mudanças uma a uma, sem o compromisso de realizar todas as alterações (apenas as que forem interessantes).

---

## FASE 1 — Infraestrutura e dados centralizados

### 1.1 Criar modulo centralizado de dados do site (`siteProfile.ts`)

- [X] **Criar arquivo**: `src/lib/data/siteProfile.ts`
- **Referencia abandonado**: `site_abandonado/src/lib/data/siteProfile.ts`
- **Relatorio**: Secoes 4.6 (NAP e consistencia institucional), 10 (E-E-A-T), 13 (criterios de aceite — 100% consistencia)
- **O que fazer**: Criar modulo TypeScript que centraliza todos os dados institucionais (nome, CRP, telefone, email, endereco completo com CEP e coordenadas, horario, duracao de sessao, contagem de reviews, links externos). Exportar tambem `schemaIds` (IDs estaveis para schema.org `@id`), `siteSameAs` (perfis externos), e funcoes utilitarias (`buildWhatsAppUrl`, `getDisplayAddress`, `getFullStreetAddress`).
- **Onde alterar**: Criar novo arquivo em `src/lib/data/siteProfile.ts`. Adicionar re-export em `src/lib/index.ts`.

**Mudanca observada na UI/UX**: Nenhuma mudanca visual direta. Porem, elimina divergencias de NAP (telefone, email, horario, CEP) que hoje aparecem com variacoes entre paginas. Garante que toda pagina que exibe dados de contato mostra exatamente os mesmos valores — base para todos os itens seguintes.

---

### 1.2 Criar modulo centralizado de navegacao (`siteNavigation.ts`)

- [X] **Criar arquivo**: `src/lib/data/siteNavigation.ts`
- **Referencia abandonado**: `site_abandonado/src/lib/data/siteNavigation.ts`
- **Relatorio**: Secao 7.1 (navegacao principal), 7.2 (hubs obrigatorios), 7.3 (hierarquia interna)
- **O que fazer**: Criar modulo que exporta `serviceNavItems` (6 servicos com nome, href, descricao), `experienceNavItems` (5 paginas de experiencia), e `primaryServiceItems` (3 servicos principais). Usado por Header, Footer, hubs e home.
- **Onde alterar**: Criar novo arquivo em `src/lib/data/siteNavigation.ts`. Adicionar re-export em `src/lib/index.ts`.

**Mudanca observada na UI/UX**: Nenhuma mudanca visual imediata. Garante que menus, hubs e listas de servicos/experiencias sao sempre sincronizados. Adicionar ou remover um servico passa a exigir uma unica edicao.

---

## FASE 2 — Componentes globais e SEO tecnico

### 2.1 Adicionar `robots` e `imageAlt` ao componente SEO

- [X] **Editar**: `src/lib/components/SEO.svelte`
- **Referencia abandonado**: `site_abandonado/src/lib/components/SEO.svelte`
- **Relatorio**: Secao 4.1 (indexacao e rastreabilidade), 4.2 (HTML final)
- **O que fazer**: Adicionar prop `robots` (default: `"index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"`) e prop `imageAlt`. Renderizar `<meta name="robots">`, `<meta property="og:image:alt">` e `<meta name="twitter:image:alt">`.
- **Onde alterar**: `src/lib/components/SEO.svelte` — adicionar 2 props e 3 tags `<meta>`.

**Mudanca observada na UI/UX**: Nenhuma mudanca visual. Porem, o Google passa a receber instrucoes explicitas de indexacao e de tamanho maximo de preview. Imagens compartilhadas em redes sociais terao texto alternativo, melhorando acessibilidade e SEO de imagens.

---

### 2.2 Adicionar `theme-color` e `site.webmanifest` ao layout raiz

- [X] **Editar**: `src/routes/+layout.svelte`
- **Referencia abandonado**: `site_abandonado/src/routes/+layout.svelte`
- **Relatorio**: Secao 4.3 (performance e CWV)
- **O que fazer**: Adicionar dentro de `<svelte:head>`: `<meta name="theme-color" content="#0b7d77" />` e `<link rel="manifest" href="/site.webmanifest" />`. Criar arquivo `static/site.webmanifest` se nao existir.
- **Onde alterar**: `src/routes/+layout.svelte` — 2 linhas em `<svelte:head>`.

**Mudanca observada na UI/UX**: A barra de endereco do navegador mobile (Chrome, Edge) passa a exibir a cor principal do site (#0b7d77 — verde-azulado). O manifest habilita "Adicionar a tela inicial" em dispositivos moveis, reforçando presenca de marca.

---

### 2.3 Refatorar Header com navegacao centralizada e links para hubs

- [X] **Editar**: `src/lib/components/Header.svelte`
- **Referencia abandonado**: `site_abandonado/src/lib/components/Header.svelte`
- **Relatorio**: Secao 7.1 (navegacao principal — adicionar "Localizacao", renomear "Experiencia" para "Como posso ajudar"), 4.1 (links sem redirecionamento)
- **O que fazer**:
  1. Importar `serviceNavItems`, `experienceNavItems` de `siteNavigation.ts` e `buildWhatsAppUrl` de `siteProfile.ts` (remover arrays hardcoded locais).
  2. Nos dropdowns desktop: separar o label do dropdown em um `<a>` que navega para o hub (`/servicos/` ou `/experiencia/`) e um `<button>` dedicado para abrir/fechar o dropdown. Isso faz o nome do menu ser um link real.
  3. Adicionar item "Localizacao" (`/localizacao/`) na navegacao desktop e mobile.
  4. Renomear "Experiencia" para "Como posso ajudar".
  5. Alterar CTA do header: de "Conversar" para "Agendar conversa", usando `buildWhatsAppUrl(...)`.
  6. No mobile: mesma separacao link + botao expand.
- **Onde alterar**: `src/lib/components/Header.svelte` — script (imports, remover arrays locais) e template (reestruturar dropdowns, adicionar item nav, mudar CTA).

**Mudanca observada na UI/UX**: O usuario que clicar em "Servicos" no menu vai para a pagina hub `/servicos/` em vez de nao acontecer nada (hoje o label nao e clicavel). "Experiencia" passa a se chamar "Como posso ajudar" — linguagem mais acessivel para leigos. "Localizacao" aparece no menu principal, dando acesso direto a informacao de endereco. O botao CTA fica mais orientado a acao ("Agendar conversa").

---

### 2.4 Refatorar Footer com links estruturados e dados centralizados

- [X] **Editar**: `src/lib/components/Footer.svelte`
- **Referencia abandonado**: `site_abandonado/src/lib/components/Footer.svelte`
- **Relatorio**: Secao 4.1 (links internos), 4.6 (NAP consistente), 7.3 (hierarquia interna)
- **O que fazer**:
  1. Importar `siteProfile`, `buildWhatsAppUrl`, `getFullStreetAddress`, `primaryServiceItems`, `experienceNavItems`.
  2. Adicionar bloco `footer-quick-actions` no topo do footer: 3 cards de acao rapida (atendimento individual, localizacao, WhatsApp).
  3. Expandir de 4 para 5 colunas: Logo+sobre, Servicos (de `primaryServiceItems`), Como posso ajudar (de `experienceNavItems`), Localizacao e conteudo, Contato e CRP.
  4. Substituir todos os dados hardcoded (telefone, email, endereco) por valores de `siteProfile`.
  5. Alterar link de endereco de `/localizacao/psicologo-jardim-da-penha/` para `/localizacao/psicologo-vitoria-es/`.
  6. Adicionar nota informativa com horario e preferencia de contato.
- **Onde alterar**: `src/lib/components/Footer.svelte` — script (imports) e template (reestruturar colunas, adicionar quick-actions).

**Mudanca observada na UI/UX**: O footer ganha 3 cards de acao rapida visualmente destacados no topo, servindo como "ultima chance de conversao" antes do fim da pagina. A organizacao em 5 colunas distribui melhor os links, cobrindo servicos, experiencias, localizacao e contato. O endereco e telefone ficam 100% consistentes com o resto do site. O email passa de `arranjospsicologia.com.br` para `psicologobernardo.com.br`, consolidando a entidade principal.

---

### 2.5 Criar componente `TrustPanel`

- [X] **Criar arquivo**: `src/lib/components/TrustPanel.svelte`
- **Referencia abandonado**: `site_abandonado/src/lib/components/TrustPanel.svelte`
- **Relatorio**: Secao 10 (E-E-A-T e confianca — CRP visivel, experiencia verificavel), 8.1 a 8.7 (blocos de confianca em multiplos templates)
- **O que fazer**: Criar componente reutilizavel que exibe grid de 6 indicadores de confianca: CRP, localizacao do consultorio, modalidades (presencial/online), duracao e horario, WhatsApp como canal, nota media e quantidade de avaliacoes. Props opcionais para titulo, texto intro e ate 2 CTAs. Responsivo: 3 colunas → 2 → 1.
- **Onde alterar**: Criar `src/lib/components/TrustPanel.svelte`. Adicionar export em `src/lib/index.ts`.

**Mudanca observada na UI/UX**: Um painel visual de confianca aparecera nas paginas de servico, contato e agendar. O visitante ve de relance: CRP, endereco, modalidade, horario, canal de contato e avaliacoes — sem precisar procurar. Reduz objecoes e aumenta credibilidade percebida, especialmente para quem chega via busca organica pela primeira vez.

---

### 2.6 Criar componente `JourneyShortcuts`

- [X] **Criar arquivo**: `src/lib/components/JourneyShortcuts.svelte`
- **Referencia abandonado**: `site_abandonado/src/lib/components/JourneyShortcuts.svelte`
- **Relatorio**: Secao 7.3 (hierarquia interna), 4.4 (linkagem interna orientada por funil)
- **O que fazer**: Criar componente de grid de atalhos de navegacao com cards clicaveis (badge, titulo, descricao, CTA). Layout opcional com imagem destacada + lista de bullets. Responsivo: 4 colunas → 2 → 1.
- **Onde alterar**: Criar `src/lib/components/JourneyShortcuts.svelte`. Adicionar export em `src/lib/index.ts`.

**Mudanca observada na UI/UX**: Nas paginas de hub e na home, o visitante que nao sabe por onde comecar encontra cards visuais com caminhos claros ("Quero terapia individual", "Estou com ansiedade", "Quero ver localizacao"). Reduz a taxa de rejeicao e direciona o usuario para a pagina certa de forma intuitiva.

---

### 2.7 Atualizar sitemap com data dinamica de build

- [X] **Editar**: `src/routes/sitemap.xml/+server.ts`
- **Referencia abandonado**: `site_abandonado/src/routes/sitemap.xml/+server.ts`
- **Relatorio**: Secao 4.1 (sitemap sem URLs quebradas, todas as rotas indexaveis)
- **O que fazer**: Substituir `const LAST_BUILD_DATE = '2026-02-04'` (data fixa) por `const BUILD_DATE = new Date().toISOString().slice(0, 10)` (data dinamica a cada build). Atualizar referencia de `LAST_BUILD_DATE` para `BUILD_DATE`. Adicionar URLs dos novos hubs `/servicos/` e `/experiencia/` ao sitemap.
- **Onde alterar**: `src/routes/sitemap.xml/+server.ts` — substituir constante e adicionar novas rotas.

**Mudanca observada na UI/UX**: Nenhuma mudanca visual. O sitemap passa a refletir a data real de cada deploy, e os hubs novos serao descobertos pelo Google. Melhora a velocidade de indexacao de paginas novas e atualizadas.

---

## FASE 3 — Hubs indexaveis

### 3.1 Criar pagina hub `/servicos/`

- [X] **Criar arquivo**: `src/routes/servicos/+page.svelte`
- **Referencia abandonado**: `site_abandonado/src/routes/servicos/+page.svelte`
- **Relatorio**: Secao 7.2 (hub `/servicos/` obrigatorio), 4.1 (hub indexavel real), 13 (criterio de aceite — hub publicado)
- **O que fazer**: Criar pagina com:
  1. Hero com H1 ("Servicos de psicologia em Vitoria") e 2 CTAs (WhatsApp + link para `/localizacao/psicologo-vitoria-es/`).
  2. Paragrafo de contexto.
  3. Grid de cards dos 3 servicos principais (de `primaryServiceItems`).
  4. Lista dos 3 servicos secundarios.
  5. Links de apoio a decisao (quando procurar individual, casal, etc.).
  6. CTA final gradiente.
  7. JSON-LD: `WebPage` + `ItemList` enumerando servicos com `schemaIds`.
- **Onde alterar**: Criar `src/routes/servicos/+page.svelte`.

**Mudanca observada na UI/UX**: O site passa a ter uma pagina intermediaria `/servicos/` que organiza todos os servicos com hierarquia clara. Psicoterapia individual fica em destaque como servico principal. O visitante que nao sabe qual servico escolher encontra orientacao antes de entrar em uma pagina especifica. Breadcrumbs de paginas de servico passam a apontar para um destino real em vez de ancora na home.

---

### 3.2 Criar pagina hub `/experiencia/`

- [X] **Criar arquivo**: `src/routes/experiencia/+page.svelte`
- **Referencia abandonado**: `site_abandonado/src/routes/experiencia/+page.svelte`
- **Relatorio**: Secao 7.2 (hub `/experiencia/` obrigatorio), 3.3 (regra anti-canibalizacao)
- **O que fazer**: Criar pagina com:
  1. Hero explicando que a secao organiza entradas por demanda do paciente.
  2. Grid de cards das 5 paginas de experiencia (de `experienceNavItems`).
  3. Guia de navegacao contextual (3 caminhos mais comuns).
  4. CTA final.
  5. JSON-LD: `WebPage` + `ItemList`.
- **Onde alterar**: Criar `src/routes/experiencia/+page.svelte`.

**Mudanca observada na UI/UX**: Quem busca por sintoma ("psicologo ansiedade vitoria") ou entra pelo menu "Como posso ajudar" encontra uma pagina que organiza todas as demandas com cards visuais. O visitante identifica rapidamente sua situacao e clica no card correspondente. Breadcrumbs de paginas de experiencia passam a apontar para um hub real.

---

## FASE 4 — Paginas principais (money pages e landings)

### 4.1 Reescrever home page com hierarquia de conversao

- [ ] **Editar**: `src/routes/+page.svelte`
- **Referencia abandonado**: `site_abandonado/src/routes/+page.svelte`
- **Relatorio**: Secao 8.1 (home — blocos obrigatorios), 3.2 (mapa de paginas-alvo), 4.5 (schema)
- **O que fazer**:
  1. **Script**: Importar `siteProfile`, `schemaIds`, `siteSameAs`, `buildWhatsAppUrl`, `serviceNavItems`, `experienceNavItems`, `primaryServiceItems`. Importar reviews via `data` prop (requer item 4.2).
  2. **Hero**: Adicionar 2 CTAs (WhatsApp + "Ver atendimento em Vitoria"). Adicionar barra `quick-facts` com bairro, CRP e modalidade.
  3. **Trust strip**: Adicionar faixa horizontal abaixo do hero com nota, CRP, bairro e horario.
  4. **Remover secoes**: "Sobre mim" completa, "Credenciais/Formacao", banner "Arranjos Psicologia", secao "Projetos", secao de contato com mapa embutido — delegar para paginas proprias.
  5. **Servicos**: Renderizar de `primaryServiceItems` + link "Ver todos os servicos".
  6. **Avaliacoes**: Unificar em um unico `ReviewCarousel` com reviews intercaladas (Google + Doctoralia) + logos de fonte.
  7. **Informacoes rapidas**: Adicionar grid de 4 cards (primeira sessao, modalidade, convenio, como agendar).
  8. **"Como posso ajudar"**: Adicionar secao com cards de `experienceNavItems`.
  9. **Localizacao**: Manter carousel do consultorio, usar `siteProfile` para endereco, adicionar links para `/localizacao/psicologo-vitoria-es/` e `/localizacao/psicologo-jardim-da-penha/`.
  10. **Schema**: Reestruturar JSON-LD para usar `siteProfile` em vez de strings hardcoded. Incluir nos `WebSite`, `WebPage`, `Person`, `ProfessionalService`, `FAQPage`. Remover `containedInPlace: Arranjos`, remover `review[]` inline, remover `hasOfferCatalog`, remover `potentialAction`.
  11. **CTA final**: Ajustar tom para "Quando fizer sentido..." (menos pressao comercial).
- **Onde alterar**: `src/routes/+page.svelte` — reescrita significativa do template e schema.

**Mudanca observada na UI/UX**: A home deixa de ser uma "one-page completa" e passa a funcionar como hub de distribuicao de autoridade. O hero ganha CTAs claros. O visitante ve confianca (trust strip), servicos organizados, experiencias por demanda, avaliacoes reais e localizacao — tudo orientado para conversao. Secoes que competiam com paginas proprias (sobre, credenciais, projetos, mapa) saem da home, reduzindo o scroll e focando a intencao.

---

### 4.2 Criar loader da home page (`+page.ts`)

- [ ] **Criar arquivo**: `src/routes/+page.ts`
- **Referencia abandonado**: `site_abandonado/src/routes/+page.ts`
- **Relatorio**: Secao 10 (prova social — reviews), 4.2 (HTML final)
- **O que fazer**: Criar `PageLoad` que busca `/data/doctoralia-reviews.json` e `/data/reviews.json` em paralelo, normaliza e valida cada review (nome, data, texto, nota), limita a 6 por fonte, retorna como `doctoraliaReviews` e `googleReviews`.
- **Onde alterar**: Criar `src/routes/+page.ts`. Garantir que os JSONs existam em `static/data/`.

**Mudanca observada na UI/UX**: As avaliacoes na home passam a ser carregadas de arquivos JSON atualizaveis separadamente, sem necessidade de editar o codigo Svelte. Reviews mal-formadas sao descartadas silenciosamente. Facilita a atualizacao periodica de reviews.

---

### 4.3 Expandir pagina `psicoterapia-individual` (principal money page)

- [X] **Editar**: `src/routes/servicos/psicoterapia-individual/+page.svelte`
- **Referencia abandonado**: `site_abandonado/src/routes/servicos/psicoterapia-individual/+page.svelte`
- **Relatorio**: Secao 8.3 (blocos obrigatorios da money page), 6.1 (resposta curta AEO), 4.4 (headings e blocos semanticos), 4.5 (schema com @id)
- **O que fazer**:
  1. **Imports**: Adicionar `TrustPanel`, `buildWhatsAppUrl`, `schemaIds`, `siteProfile`.
  2. **SEO title**: Encurtar para `"Psicoterapia Individual em Vitoria ES | Bernardo Carielo"`.
  3. **Schema**: Adicionar `@id: schemaIds.serviceIndividual` ao `Service`, `about` ao `WebPage`, remover `potentialAction`, mudar `offers.url` para `/agendar/`.
  4. **Breadcrumb**: Mudar href de `"/#servicos"` para `"/servicos/"`.
  5. **Hero**: Adicionar 2 CTAs no hero (WhatsApp + "Ver atendimento em Vitoria").
  6. **Answer box**: Adicionar paragrafo-resposta curto (40-90 palavras) logo no inicio do conteudo, usando `siteProfile.sessionMinutes.individual`.
  7. **Decision grid**: Adicionar 3 cards ("Quando costuma ajudar", "Como comeca", "O que nao precisa acontecer antes").
  8. **Mid-CTA**: Adicionar bloco de CTA intermediario no meio do conteudo.
  9. **TrustPanel**: Inserir componente acima do conteudo editorial.
  10. **Headings reestruturados**: "Quando a psicoterapia individual costuma fazer sentido", "Como funciona, na pratica", "O que esperar da primeira sessao", "Duvidas comuns e objecoes honestas", "Atendimento em Vitoria e online".
  11. **Links internos**: Adicionar links para `/experiencia/ansiedade/`, `/experiencia/depressao/`, `/experiencia/burnout/`.
  12. **FAQ**: Reescrever perguntas com foco em conversao ("Preciso estar em crise?", "O que esperar da primeira sessao?").
  13. **CTA final**: Tom "Quando fizer sentido, comecamos pela primeira conversa".
  14. **CSS**: Adicionar estilos para `.service-hero-actions`, `.decision-grid`, `.decision-card`, `.mid-cta-box` com responsivo.
- **Onde alterar**: `src/routes/servicos/psicoterapia-individual/+page.svelte` — template, schema e styles.

**Mudanca observada na UI/UX**: A pagina de psicoterapia individual ganha estrutura de money page completa. O visitante encontra logo no topo uma resposta direta ao que procura (answer box). Tres cards visuais ajudam a decidir se faz sentido. Um CTA intermediario captura quem ja se convenceu antes de chegar ao final. O TrustPanel reforça credibilidade. Os headings respondem as perguntas reais que o visitante tem. A pagina fica muito mais orientada a conversao e preparada para featured snippets.

---

### 4.4 Expandir pagina `terapia-de-casal` (segunda money page)

- [X] **Editar**: `src/routes/servicos/terapia-de-casal/+page.svelte`
- **Referencia abandonado**: `site_abandonado/src/routes/servicos/terapia-de-casal/+page.svelte`
- **Relatorio**: Secao 8.4 (blocos obrigatorios), 6.1 (resposta curta AEO)
- **O que fazer**: Mesma logica estrutural de 4.3, adaptada para terapia de casal:
  1. Imports: `TrustPanel`, `buildWhatsAppUrl`, `schemaIds`, `siteProfile`.
  2. SEO title: `"Terapia de Casal em Vitoria ES | Bernardo Carielo"`.
  3. Schema: `@id: schemaIds.serviceCouple`, remover `potentialAction`, `offers.url` para `/agendar/`.
  4. Breadcrumb: `"/servicos/"`.
  5. Hero CTAs, answer box, decision grid ("Quando procurar", "Como funciona", "Quando pode nao bastar sozinho").
  6. Mid-CTA, TrustPanel, headings reestruturados.
  7. Link para `/experiencia/relacionamento/`.
  8. FAQ reescrito: "Quando costuma fazer sentido?", "E preciso que os dois estejam convencidos?".
  9. CTA final: "Quando fizer sentido, o primeiro passo pode ser simples".
  10. CSS: mesmos estilos de decision-grid/mid-cta.
- **Onde alterar**: `src/routes/servicos/terapia-de-casal/+page.svelte` — template, schema e styles.

**Mudanca observada na UI/UX**: A pagina de terapia de casal ganha a mesma estrutura robusta da money page principal. O casal que chega pela busca encontra resposta direta, decision grid que ajuda a decidir, e objecoes comuns respondidas com transparencia. O CTA intermediario captura conversao mais cedo no scroll.

---

### 4.5 Reescrever pagina `psicologo-vitoria-es` (principal landing local)

- [X] **Editar**: `src/routes/localizacao/psicologo-vitoria-es/+page.svelte`
- **Referencia abandonado**: `site_abandonado/src/routes/localizacao/psicologo-vitoria-es/+page.svelte`
- **Relatorio**: Secao 5.1 (SEO local onsite — landing principal), 8.2 (blocos obrigatorios), 6.1 (resposta curta)
- **O que fazer**:
  1. Imports: `buildWhatsAppUrl`, `siteProfile`, `JourneyShortcuts`, `TrustPanel`.
  2. SEO title: `"Psicologo em Vitoria ES | Bernardo Carielo"`.
  3. Hero: Adicionar badges locais ("Jardim da Penha", "Em frente a UFES", "Presencial e online"). Adicionar CTA secundario para `/servicos/psicoterapia-individual/`.
  4. TrustPanel apos o hero.
  5. Answer box com resposta curta.
  6. JourneyShortcuts com 4 caminhos (terapia individual, casal, ansiedade, agendar).
  7. Cards de servicos (Heart=individual, Users=casal, Monitor=online).
  8. Secao de acesso/localizacao com `Card` components + mapa embutido usando `siteProfile.externalLinks.googleMapsEmbed`.
  9. Links relacionados (3 itens).
  10. FAQ interativo com `$state`.
  11. CTA gradiente final.
  12. JSON-LD inline: `WebPage` + `FAQPage`.
  13. CSS: estilos para `.hero-local-facts`, `.access-grid`, `.location-process`, `.map-action`.
- **Onde alterar**: `src/routes/localizacao/psicologo-vitoria-es/+page.svelte` — reescrita completa se a pagina atual depende de `locations["vitoria-es"]` (que nao existe em `locations.ts`).

**Mudanca observada na UI/UX**: A landing local principal ganha identidade propria com badges de localizacao no hero, atalhos visuais por demanda, mapa embutido, e FAQ local. O visitante que busca "psicologo em Vitoria" encontra imediatamente: onde fica o consultorio, quais bairros atende, como chegar, e caminhos claros para agendar. A pagina deixa de depender de dados ausentes e passa a funcionar como landing autonoma.

---

### 4.6 Refatorar pagina de Contato

- [X] **Editar**: `src/routes/contato/+page.svelte`
- **Referencia abandonado**: `site_abandonado/src/routes/contato/+page.svelte`
- **Relatorio**: Secao 8.7 (contato — conversao sem ruido), 4.6 (NAP consistente)
- **O que fazer**:
  1. Imports: `TrustPanel`, `buildWhatsAppUrl`, `getFullStreetAddress`, `schemaIds`, `siteProfile`.
  2. Hero: Trocar hero simples por `contact-hero gradient-hero` com eyebrow label e 2 CTAs (WhatsApp + "Ver agenda online").
  3. TrustPanel logo apos hero.
  4. Cards de contato: WhatsApp, Agenda online (`/agendar/`), Email — remover card de redes sociais.
  5. Headings: mudar `<h3>` para `<h2>`.
  6. Email: substituir `contato@arranjospsicologia.com.br` por `siteProfile.officialEmail`.
  7. Remover secao "Onde atendo" duplicada.
  8. Adicionar grid pratico (endereco + horario de `siteProfile`).
  9. Adicionar "Como comecamos": 3 passos numerados.
  10. Mapa: titulo de "Arranjos Psicologia" para "Bernardo Carielo", src de `siteProfile.externalLinks.googleMapsEmbed`.
  11. Schema: usar `schemaIds` em vez de strings hardcoded.
  12. CTA final: `variant="gradient"`.
  13. CSS: adicionar estilos para `.contact-hero`, `.contact-grid`, `.process-grid`, `.practical-grid`.
- **Onde alterar**: `src/routes/contato/+page.svelte` — template, schema e styles.

**Mudanca observada na UI/UX**: A pagina de contato perde o ruido institucional (Arranjos) e ganha foco em conversao. O hero tem CTAs imediatos. O TrustPanel reforça confianca. Os 3 passos visuais mostram como funciona o primeiro contato. O email e mapa apontam para a entidade correta (Bernardo Carielo). A hierarquia de headings melhora (h2 em vez de h3).

---

### 4.7 Refatorar pagina Agendar

- [X] **Editar**: `src/routes/agendar/+page.svelte`
- **Referencia abandonado**: `site_abandonado/src/routes/agendar/+page.svelte`
- **Relatorio**: Secao 8.7 (conversao sem ruido), 4.6 (NAP), 4.5 (schema)
- **O que fazer**:
  1. Imports: Adicionar `Breadcrumb`, `TrustPanel`, `buildWhatsAppUrl`, `getFullStreetAddress`, `siteProfile`. Remover `onMount`.
  2. Breadcrumb: Adicionar `[Inicio -> Agendar]`.
  3. Hero: Adicionar eyebrow, 2 CTAs (Calendar "Ver horarios" + Phone "Tirar duvidas" via WhatsApp).
  4. TrustPanel apos hero.
  5. Info cards: `text-align: left`, grid fixo 4 colunas.
  6. Widget Doctoralia: Envolver em `widget-shell` com heading e descricao.
  7. Schema: Substituir strings hardcoded por `siteProfile.*` (horario, reviews, endereco). FAQPage gerada de `faqItems.map(...)`.
  8. FAQ: Reduzir para 4 itens, usar `siteProfile.phoneDisplay` e `siteProfile.sessionMinutes.individual`.
  9. Secao de contato alternativo: Email via `siteProfile.officialEmail` (nao mais Arranjos).
  10. Doctoralia fallback: usar `siteProfile.externalLinks.doctoralia`.
  11. CTA final: "Quando fizer sentido, escolha o primeiro horario possivel".
  12. CSS: Ajustar breakpoints para 900px e 640px.
- **Onde alterar**: `src/routes/agendar/+page.svelte` — template, schema e styles.

**Mudanca observada na UI/UX**: A pagina de agendamento ganha breadcrumb (melhora navegacao e SEO), TrustPanel de confianca, hero com CTAs duplos, widget Doctoralia melhor contextualizado, e dados consistentes via siteProfile. O email de contato alternativo aponta para o dominio correto. O layout responsivo melhora em tablets (breakpoint 900px).

---

## FASE 5 — Paginas de experiencia e apoio

### 5.1 Adicionar answer box e hero CTAs nas paginas de experiencia (ansiedade)

- [X] **Editar**: `src/routes/experiencia/ansiedade/+page.svelte`
- **Referencia abandonado**: `site_abandonado/src/routes/experiencia/ansiedade/+page.svelte`
- **Relatorio**: Secao 8.5 (blocos obrigatorios — definicao curta, CTA), 6.1 (resposta curta AEO)
- **O que fazer**:
  1. Imports: `buildWhatsAppUrl`, `schemaIds` de `siteProfile`.
  2. Schema: Substituir strings hardcoded de `@id` por `schemaIds.website`, `schemaIds.person`, `schemaIds.organization`, `schemaIds.serviceIndividual`.
  3. Breadcrumb: Mudar `{ href: "/#experiencia" }` para `{ href: "/experiencia/" }`.
  4. Hero: Adicionar 2 botoes ("Agendar primeira conversa" via WhatsApp + "Ver psicoterapia individual").
  5. Answer box: Adicionar paragrafo-resposta curto antes do conteudo principal.
  6. WhatsApp URL: Substituir URL hardcoded por `buildWhatsAppUrl(...)`.
  7. CTA final: Ajustar tom para "Quando fizer sentido, o primeiro passo pode ser simples".
- **Onde alterar**: `src/routes/experiencia/ansiedade/+page.svelte` — script (imports, schema) e template (hero, answer box, CTA).

**Mudanca observada na UI/UX**: A pagina de ansiedade ganha CTAs no hero (captura quem ja decidiu logo no topo), um paragrafo-resposta que responde diretamente a busca (favorece featured snippets), e breadcrumb que aponta para hub real. O tom do CTA final fica mais acolhedor e menos comercial.

---

### 5.2 Replicar melhorias de 5.1 para demais paginas de experiencia

- [X] **Editar**: `src/routes/experiencia/depressao/+page.svelte`
- [X] **Editar**: `src/routes/experiencia/burnout/+page.svelte`
- [X] **Editar**: `src/routes/experiencia/autoestima/+page.svelte`
- [X] **Editar**: `src/routes/experiencia/relacionamento/+page.svelte`
- **Relatorio**: Secao 8.5 (blocos obrigatorios por template de experiencia)
- **O que fazer**: Aplicar o mesmo padrao de 5.1 em cada pagina: `schemaIds`, breadcrumb para `/experiencia/`, hero com CTAs, answer box, `buildWhatsAppUrl`, CTA final ajustado. Para `relacionamento`, o link principal deve apontar para `/servicos/terapia-de-casal/` em vez de psicoterapia individual.
- **Onde alterar**: Cada arquivo `+page.svelte` das 4 paginas listadas.

**Mudanca observada na UI/UX**: Todas as paginas de experiencia ganham consistencia visual e estrutural: answer box AEO, CTAs no hero, breadcrumb funcional, e linguagem de conversao alinhada. O visitante que chega por qualquer busca de sintoma tem a mesma experiencia de qualidade.

---

## FASE 6 — Paginas secundarias

### 6.1 Refatorar pagina Sobre com dados centralizados

- [X] **Editar**: `src/routes/sobre/+page.svelte`
- **Referencia abandonado**: `site_abandonado/src/routes/sobre/+page.svelte`
- **Relatorio**: Secao 10 (autoria, E-E-A-T), secao 2.2 (confusao de entidade Bernardo vs Arranjos)
- **O que fazer**:
  1. Imports: `buildWhatsAppUrl`, `getFullStreetAddress`, `schemaIds`, `siteProfile`, `siteSameAs`.
  2. Schema: Usar `schemaIds` e `siteProfile` em vez de strings hardcoded. Remover `Arranjos Psicologia` de `worksFor` (simplificar para `{ "@id": schemaIds.organization }`). Usar `siteSameAs` para `sameAs`.
  3. Adicionar `<span class="section-kicker">` antes dos H2s das secoes (Sobre mim, Formacao, Atendimento).
  4. Renomear secao "Redes e projetos" para "Projetos e parcerias". Remover nome "Arranjos Psicologia" do titulo do card (usar "Projeto complementar"). Usar `siteProfile.externalLinks.arranjos`.
  5. CTA WhatsApp: usar `buildWhatsAppUrl(...)`.
- **Onde alterar**: `src/routes/sobre/+page.svelte` — script (imports, schema) e template (kickers, rename, WhatsApp).

**Mudanca observada na UI/UX**: A pagina Sobre consolida a entidade "Bernardo Carielo" como principal. Arranjos Psicologia deixa de competir como entidade paralela e aparece apenas como projeto complementar. Os section kickers ("Sobre mim", "Formacao") adicionam micro-rotulos visuais que melhoram a escaneabilidade. Schema fica mais limpo e coerente com o grafo semantico do site.

---

### 6.2 Ajustar pagina de Artigos

- [x] **Editar**: `src/routes/artigos/+page.svelte`
- **Referencia abandonado**: `site_abandonado/src/routes/artigos/+page.svelte`
- **Relatorio**: Secao 9.3 (regras editoriais — CTA contextual), 10 (autoria)
- **O que fazer**:
  1. Import: `buildWhatsAppUrl`.
  2. Hero subtitle: Adicionar classe `hero-subtitle`, reescrever com atribuicao autoral ("escritas por Bernardo Carielo, psicologo em Vitoria ES").
  3. CTA final: Reescrever H2 para "Quando fizer sentido, o primeiro passo pode ser simples". Expandir paragrafo com mencao a presencial/online/Vitoria. Usar `buildWhatsAppUrl(...)`.
- **Onde alterar**: `src/routes/artigos/+page.svelte` — 3 pontos no template.

**Mudanca observada na UI/UX**: A pagina de listagem de artigos ganha atribuicao autoral visivel no subtitulo (reforça E-E-A-T). O CTA final fica mais contextualizado com localidade e modalidades, ajudando na conversao de quem terminou de navegar o blog.

---

## FASE 7 — Correcao de entidade e consistencia global

### 7.1 Substituir todas as URLs hardcoded de WhatsApp por `buildWhatsAppUrl`

- [X] **Buscar e substituir** em todos os arquivos `.svelte`
- **Relatorio**: Secao 4.6 (consistencia), 4.1 (links sem redirecionamento)
- **O que fazer**: Grep por `wa.me` em todos os arquivos `.svelte` e substituir por chamadas a `buildWhatsAppUrl(...)` importada de `siteProfile`.
- **Onde alterar**: Todos os arquivos `.svelte` que contenham URLs `wa.me` hardcoded (servicos secundarios, localizacoes secundarias, etc.).

**Mudanca observada na UI/UX**: Nenhuma mudanca visual. Garante que o numero de WhatsApp e consistente em 100% do site. Se o numero mudar, basta uma edicao.

---

### 7.2 Substituir todas as referencias a email Arranjos pelo email oficial

- [X] **Buscar e substituir** em todos os arquivos
- **Relatorio**: Secao 2.2 (email alternando entre dominios), 4.6 (NAP consistente)
- **O que fazer**: Grep por `arranjospsicologia` em todo o `src/` e substituir emails por `siteProfile.officialEmail` ou pelo valor correto.
- **Onde alterar**: Todos os arquivos que referenciem email de contato.

**Mudanca observada na UI/UX**: O email exibido em qualquer pagina do site passa a ser do dominio `psicologobernardo.com.br`, eliminando confusao de entidade. O visitante nunca ve um dominio diferente do que esta navegando.

---

### 7.3 Corrigir todas as breadcrumbs para apontar para hubs reais

- [X] **Buscar e substituir** `"/#servicos"` por `"/servicos/"` e `"/#experiencia"` por `"/experiencia/"`
- **Relatorio**: Secao 4.1 (breadcrumbs em paginas importantes), 13 (criterio de aceite — breadcrumbs corrigidos)
- **O que fazer**: Em todas as paginas de servico e experiencia, ajustar o array de breadcrumb items.
- **Onde alterar**: `src/routes/servicos/*/+page.svelte` e `src/routes/experiencia/*/+page.svelte`.

**Mudanca observada na UI/UX**: Os breadcrumbs passam a ser links funcionais. O visitante pode clicar em "Servicos" no breadcrumb e ir para a pagina hub em vez de ser jogado para uma ancora na home. O Google interpreta a hierarquia corretamente.

---

### 7.4 Padronizar titulo do mapa e referencias a entidade em iframes

- [X] **Buscar e substituir** titulos de iframe que mencionem "Arranjos" por "Bernardo Carielo"
- **Relatorio**: Secao 2.2 (mapa/titulo associados a Arranjos), 4.6 (consistencia)
- **O que fazer**: Em todas as paginas com iframe do Google Maps, garantir que o atributo `title` diga "Bernardo Carielo" e que o link abaixo do mapa use `siteProfile.externalLinks.googleMapsPlace`.
- **Onde alterar**: `src/routes/contato/+page.svelte`, `src/routes/localizacao/*/+page.svelte`, e qualquer outro arquivo com iframe de mapa.

**Mudanca observada na UI/UX**: O nome que aparece como rotulo de acessibilidade do mapa e no link "Ver no Google Maps" sera sempre "Bernardo Carielo", reforçando a entidade correta para bots e leitores de tela.

---

### 7.5 Unificar schema `@id` em todas as paginas

- [X] **Auditar e corrigir** todos os blocos JSON-LD
- **Relatorio**: Secao 4.5 (schema com @id coerentes), 13 (criterio de aceite — schema unificado)
- **O que fazer**: Importar `schemaIds` de `siteProfile` em todas as paginas que tenham JSON-LD. Substituir strings hardcoded de `@id` (como `"/#website"`, `"/#organization"`, `"/sobre/#person"`, `"/servicos/psicoterapia-individual/#service"`) pelas constantes do modulo.
- **Onde alterar**: Todas as paginas com blocos `jsonLd` — home, servicos, experiencias, localizacoes, blog posts, sobre, contato, agendar.

**Mudanca observada na UI/UX**: Nenhuma mudanca visual. Porem, o grafo semantico do site fica internamente consistente. O Google e modelos generativos conseguem conectar entidade, servicos, pessoa e localizacao sem ambiguidade. Fundamental para GEO.

---

## Resumo de arquivos afetados

| Acao | Arquivo |
|------|---------|
| CRIAR | `src/lib/data/siteProfile.ts` |
| CRIAR | `src/lib/data/siteNavigation.ts` |
| CRIAR | `src/lib/components/TrustPanel.svelte` |
| CRIAR | `src/lib/components/JourneyShortcuts.svelte` |
| CRIAR | `src/routes/servicos/+page.svelte` |
| CRIAR | `src/routes/experiencia/+page.svelte` |
| CRIAR | `src/routes/+page.ts` |
| EDITAR | `src/lib/components/SEO.svelte` |
| EDITAR | `src/lib/components/Header.svelte` |
| EDITAR | `src/lib/components/Footer.svelte` |
| EDITAR | `src/routes/+layout.svelte` |
| EDITAR | `src/routes/+page.svelte` |
| EDITAR | `src/routes/sitemap.xml/+server.ts` |
| EDITAR | `src/routes/servicos/psicoterapia-individual/+page.svelte` |
| EDITAR | `src/routes/servicos/terapia-de-casal/+page.svelte` |
| EDITAR | `src/routes/localizacao/psicologo-vitoria-es/+page.svelte` |
| EDITAR | `src/routes/contato/+page.svelte` |
| EDITAR | `src/routes/agendar/+page.svelte` |
| EDITAR | `src/routes/experiencia/ansiedade/+page.svelte` |
| EDITAR | `src/routes/experiencia/depressao/+page.svelte` |
| EDITAR | `src/routes/experiencia/burnout/+page.svelte` |
| EDITAR | `src/routes/experiencia/autoestima/+page.svelte` |
| EDITAR | `src/routes/experiencia/relacionamento/+page.svelte` |
| EDITAR | `src/routes/sobre/+page.svelte` |
| EDITAR | `src/routes/artigos/+page.svelte` |
| EDITAR | `src/lib/index.ts` |

---

## Ordem de execucao recomendada

1. **Fase 1** (1.1, 1.2) — criar modulos de dados. Sem dependencias.
2. **Fase 2** (2.1 a 2.7) — componentes globais. Depende da Fase 1.
3. **Fase 3** (3.1, 3.2) — hubs. Depende das Fases 1 e 2.
4. **Fase 4** (4.1 a 4.7) — paginas principais. Depende das Fases 1, 2 e 3.
5. **Fase 5** (5.1, 5.2) — paginas de experiencia. Depende das Fases 1 e 2.
6. **Fase 6** (6.1, 6.2) — paginas secundarias. Depende da Fase 1.
7. **Fase 7** (7.1 a 7.5) — auditoria global. Depende de todas as fases anteriores.

> Fases 4, 5 e 6 podem ser executadas em paralelo apos as Fases 1-3.
