---
titulo: Plano de Implementação — Melhorias de SEO e AEO para psicologobernardo
data: 2026-04-14
autor: Equipe técnica / Webdesign sênior
escopo: Blog e estrutura editorial
principio_guia: "Clareza editorial e ética clínica primeiro; otimização técnica como consequência, nunca como truque."
---

# Plano de Implementação — SEO e AEO (blog psicologobernardo)

Este plano traduz a conversa anterior em ações concretas, ordenadas por impacto, risco e esforço. A premissa é a mesma da documentação oficial do Google para *AI features and your website*: não há schema mágico nem arquivo especial para aparecer em AI Overviews / AI Mode; o que move o ponteiro é conteúdo textual útil, rastreável, bem estruturado e com autoria confiável.

Para um site clínico (YMYL), qualquer bloco pensado para IA deve ser, antes de tudo, útil para o leitor humano. Nada neste plano deve virar *padrão mecânico*.

---

## Resumo executivo

- Implementar uma **caixa de resposta direta** opcional no início de cada post (campos `summaryQuestion` / `summaryAnswer` no frontmatter).
- Criar uma **página pública de política editorial e metodologia clínica** (E-E-A-T para YMYL).
- Refinar **robots.txt** e **monitoramento** de bots/citações de IA.
- Consolidar **clusters editoriais** e eliminar sobreposição semântica entre posts.
- Reforçar **âncoras internas descritivas** e **referências externas contextuais**.
- Refinar **structured data** sem inflar schema.

Sem alterações autorizadas ainda — este documento é apenas a proposta de implementação.

---

## Fase 1 — Alto impacto, baixo risco (2 a 4 dias)

### 1.1. Caixa de resposta direta no início do post (AEO)

**Objetivo.** Oferecer, logo após o título, uma resposta curta e citável que espelhe a intenção de busca dominante do artigo.

**Implementação técnica.**

- Adicionar ao schema do post dois campos opcionais:
  - `summaryQuestion: string` (40-80 caracteres, forma de pergunta real do leitor)
  - `summaryAnswer: string` (40-80 palavras, resposta completa, autossuficiente)
- Renderizar em [src/routes/[categoria]/[slug]/+page.svelte](src/routes/%5Bcategoria%5D/%5Bslug%5D/+page.svelte) um bloco `<section aria-label="Resumo do artigo">` antes do corpo:
  - `summaryQuestion` como `<h2>` real (não `<div>` com aparência de título).
  - `summaryAnswer` em `<p>`.
- Não gerar schema `QAPage`. O conteúdo já é um artigo; `Article` / `BlogPosting` é o tipo correto.
- Atualizar [src/lib/server/blog/types.ts](src/lib/server/blog/types.ts) com os campos opcionais e a validação (tamanho máx./mín.).
- Adicionar regra em [src/lib/server/seo/](src/lib/server/seo/) (ou validador existente) que alerte quando `summaryAnswer` repetir exatamente um item do `faq`.

**Política editorial.**

- Usar apenas em posts com intenção clara: conceito ACP, *primeira sessão*, *terapia online*, *psicólogo em Jardim da Penha*, *ansiedade*.
- Proibido copiar-colar o primeiro parágrafo; a resposta deve ser **mais direta** que a introdução.
- Proibido usar linguagem diagnóstica ou promessa terapêutica.

**Critério de aceite.**

- 10 primeiros posts da lista prioritária com `summaryQuestion`/`summaryAnswer` populados.
- HTML renderizado contém o H2 **antes** do primeiro parágrafo do corpo.
- Lighthouse de acessibilidade não regride em nenhum slug testado.

---

### 1.2. Página pública de política editorial e metodologia clínica

**Objetivo.** Dar a leitores e buscadores o *quem, como e por quê* do conteúdo (recomendação direta da Google Search Central para YMYL).

**Implementação.**

- Criar rota `/politica-editorial/` com:
  - processo de redação e revisão clínica;
  - uso de referências bibliográficas;
  - limites explícitos: *não substitui avaliação clínica ou atendimento*;
  - política sobre IA (se há uso, para quê, com que supervisão humana); ## Há uso de IA na pesquisa e geração de reflexões e drafts. Drafts são lidos, editados por um humano, discutidos e, por fim postados.
  - CRP, vínculo profissional e contato;
  - data da última revisão da política.
- Linkar no **rodapé global** e no **bloco de autor** de cada post.
- Adicionar à seção `llms.txt` como documento institucional.

**Critério de aceite.** Página indexável, linkada a partir de cada post e do rodapé; schema `AboutPage` ou `WebPage` coerente com o texto visível.

---

### 1.3. Refino do `robots.txt` e política para crawlers de IA

**Objetivo.** Garantir descoberta explícita por bots que alimentam respostas de IA.

**Ações.**

- Revisar `static/robots.txt` para garantir entradas nomeadas:
  - `Googlebot`, `Bingbot` (para AI Performance do Bing/Copilot);
  - `OAI-SearchBot` (descoberta p/ ChatGPT Search);
  - `ChatGPT-User` (fetch a pedido do usuário no ChatGPT);
  - `PerplexityBot`.
- Decisão editorial explícita sobre `GPTBot` (treinamento do modelo) — documentar no próprio arquivo e na política editorial.
- Validar pelo Search Console e Bing Webmaster Tools após o deploy.

**Critério de aceite.** `robots.txt` com entradas nomeadas, comentadas, e uma decisão registrada (não um "allow all" implícito).

---

### 1.4. Auditoria de sobreposição e canibalização de posts

**Objetivo.** Uma URL canônica por intenção de busca.

**Ações.**

- Gerar planilha (via script em `scripts/`) listando, para cada post: `slug`, `H1`, `summaryQuestion` (quando existir), *keyword* principal inferida, categoria, links internos recebidos.
- Marcar grupos com intenção sobreposta (ex.: vários posts sobre "ansiedade" sem diferenciação clara).
- Decidir, caso a caso: **consolidar**, **diferenciar** (reescrever H1/intro) ou **redirecionar 301**.
- Registrar decisões em `scripts/auditoria-sobreposicao.md` (histórico, não planejamento vivo).

**Critério de aceite.** Nenhum par de posts com a mesma `summaryQuestion` prevista e mesma categoria.

---

## Fase 2 — Médio impacto, médio esforço (1 a 2 semanas)

### 2.1. Blocos editoriais padronizados (não automáticos)

Componentes Svelte reutilizáveis, **invocados pelo autor** no Markdown, não injetados em todo post:

- `<EmResumo />` — resumo de 2 a 3 bullets.
- `<OQueNaoSignifica />` — anti-padrões de interpretação.
- `<QuandoBuscarAjuda />` — ponte ética para atendimento profissional.
- `<DiferencaEntre a="X" b="Y" />` — tabela curta.

Cada bloco deve ter *markup* semântico (`<aside>`, `<section>` com `aria-label`), não `<div>` puro. Documentar em [AGENTS.md](AGENTS.md) quando usar cada um. 
##COMENTÁRIO: Neste caso, não seria em post-guide.md?

---

### 2.2. Clusters editoriais e páginas-hub

**Hubs a criar ou reforçar.**

- ACP / Carl Rogers
- Psicoterapia individual
- Ansiedade e sofrimento emocional
- Terapia online
- Primeira sessão
- Localização: Jardim da Penha / Vitória / UFES (já existe — revisar interlinks)

**Regras.**

- Toda página-hub tem: intro de 120-200 palavras, FAQ curto, lista de posts do cluster com *âncora descritiva* (não "leia mais").
- Cada post do cluster linka **para o hub** e para, no mínimo, dois outros posts do mesmo cluster.

**Critério de aceite.** Crawl interno mostra cada post do cluster a ≤2 cliques do hub correspondente.

---

### 2.3. Âncoras internas descritivas

- Script de auditoria em `scripts/` que lista todas as âncoras de link interno agrupadas por URL de destino.
- Substituir "clique aqui", "este artigo", "saiba mais" por frases informativas: *"como funciona a psicoterapia individual"*, *"psicólogo em Jardim da Penha"*, *"abertura à experiência em Rogers"*.
- Revisar em lotes por cluster (não tudo de uma vez).

---

### 2.4. Referências externas contextuais

- Além da seção final, linkar a **fonte primária** próximo à afirmação técnica (ex.: ao citar Rogers no parágrafo, linkar a edição/obra ou um repositório acadêmico confiável).
- Preferir: APA, editoras acadêmicas, periódicos indexados, instituições. Evitar: blogs comerciais, agregadores com conteúdo instável.
- Adicionar, no validador SEO, um alerta quando post conceitual passar de 800 palavras **sem nenhum link externo**.

---

### 2.5. Refino de structured data

Revisar o gerador de JSON-LD em [src/lib/server/seo/](src/lib/server/seo/):

- `author.url` sempre apontando para `/sobre/`.
- `datePublished` e `dateModified` consistentes com o frontmatter; `dateModified` só muda quando o conteúdo muda de fato (não em mudanças cosméticas).
- `mainEntityOfPage` explícito em `Article` / `BlogPosting`.
- `citation` quando existir `references`.
- Imagens do schema com dimensões reais declaradas; variações 1:1, 4:3, 16:9 quando fizer sentido para a página.
- **Não** adicionar `MedicalWebPage`, `MedicalCondition` ou similares — o site não é diagnóstico; schema médico sem lastro gera risco reputacional e de qualidade.

---

## Fase 3 — Observabilidade e disciplina (contínuo)

### 3.1. Monitoramento de citações por IA

- Configurar/validar acesso a:
  - Google Search Console (incluir relatório de *Search appearance*);
  - Bing Webmaster Tools → **AI Performance** (citações em Copilot/Bing Chat);
- Planilha mensal com colunas: `data`, `consulta`, `URL citada`, `trecho citado`, `sistema (AI Overview / Copilot / Perplexity / ChatGPT)`.
- Análise trimestral: quais posts são citados, qual o trecho recorrente, o que diferenciar.

### 3.2. Disciplina de `lastmod` no sitemap

- Manter a regra atual (`lastReviewed` ou `date`), mas documentar em [AGENTS.md](AGENTS.md): `lastReviewed` só muda quando há mudança **material** (parágrafo, estrutura, referência, schema). Correção de typo não conta.
- Adicionar teste em `scripts/` que compare o hash do conteúdo renderizado com o commit anterior para flagrar `lastReviewed` movido sem mudança real.

### 3.3. Conteúdo rastreável sem dependência de JS

- Auditar com "JavaScript desligado" as páginas: home, sobre, política editorial, 3 posts de cada categoria, hubs.
- O texto principal, `summaryAnswer`, `faq`, `references` devem estar no HTML inicial.

---

## O que **não** faremos

- Não criar `summaryQuestion` em todos os posts indiscriminadamente.
- Não usar `QAPage`, `MedicalWebPage` ou schemas clínicos não aderentes.
- Não inflar FAQ com perguntas fabricadas.
- Não inserir palavras-chave repetidas ("stuffing") em intro, alt-text ou headings.
- Não bloquear bots sem registrar a razão editorial.

---

## Ordem sugerida de execução

1. Aprovar este plano e decidir política sobre `GPTBot` (treinamento).
2. **Fase 1.1** (caixa AEO) — começar pelos 10 posts de maior tráfego/intenção clara.
3. **Fase 1.2** (política editorial pública) em paralelo.
4. **Fase 1.3** (robots.txt) + **Fase 1.4** (auditoria sobreposição).
5. Entrar na Fase 2 com os blocos editoriais e clusters.
6. Estabilizar Fase 3 (observabilidade) como rotina mensal/trimestral.

---

## Riscos e mitigações

| Risco | Mitigação |
|---|---|
| Caixa AEO virar "padrão mecânico" e empobrecer o texto | Revisão editorial obrigatória; limitar a posts com intenção clara; variar forma da pergunta. |
| Schema inflado levando a *soft warnings* no Search Console | Validar tudo no Rich Results Test antes do deploy; não adicionar tipos médicos. |
| Consolidação de posts quebrar links externos/SEO | Redirecionamentos 301 mapeados em `cloudflare-worker-redirects.js`; manter slugs antigos por 12 meses. |
| Reescrita de âncoras internas em lote gerando diffs ruidosos | Fazer por cluster; um PR por cluster. |
| Política editorial parecer "burocrática" ao leitor | Escrever em primeira pessoa, tom clínico humano, sem jargão de compliance. |

---

## Critérios globais de sucesso (90 dias após início)

- Ao menos 15 posts com caixa AEO aprovada editorialmente.
- Página `/politica-editorial/` indexada, linkada em 100% dos posts.
- `robots.txt` com política explícita e documentada para bots de IA.
- Zero pares de posts com intenção duplicada não resolvida.
- Relatório mensal de citações por IA em operação (ao menos uma planilha com dados reais).
- Nenhum post do blog com `lastReviewed` alterado sem mudança material (verificado pelo script).

---

*Documento vivo. Atualizar conforme a execução avança. Decisões irreversíveis (redirecionamentos, consolidação de posts, mudanças de `robots.txt` com `disallow`) exigem aprovação explícita antes da implementação.*
