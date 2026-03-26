# Relatorio SEO/AEO/GEO do Estado Atual

Data da auditoria: 25/03/2026  
Escopo: auditoria local do projeto atual, baseada no codigo-fonte, configuracoes e build gerado localmente.  
Metodo: analise documental e tecnica do estado atual da worktree, sem uso de dados externos de SERP, Search Console, Google Business Profile ou crawl online.  
Observacao: este documento nao implementa correcoes; ele consolida diagnostico, riscos e recomendacoes priorizadas.

## Resumo executivo

O site ja tem uma base acima da media para um ativo local de psicologia clinica. A estrutura editorial por silos e boa, os metadados estao bem cobertos, ha canonicals, breadcrumbs, FAQs em larga escala, sinais de confianca fortes e um NAP central quase todo consistente. Em termos de posicionamento, o ativo esta mais perto de um projeto "bem estruturado que precisa de governanca" do que de um projeto "mal montado".

O principal gargalo nao esta em falta de conteudo. Esta em higiene tecnica, consistencia de dados estruturados, manutencao de arquitetura antiga, alinhamento entre discurso institucional e implementacao real e formalizacao editorial para EEAT. Em outras palavras: o site ja comunica autoridade, mas ainda nao governa essa autoridade com o rigor tecnico e documental que mecanismos de busca, motores de resposta e sistemas generativos tendem a premiar no longo prazo.

Se eu tivesse que resumir a prioridade do projeto em uma frase, seria esta: **o site precisa menos de "mais paginas" e mais de padronizacao, confiabilidade tecnica e rotina editorial de revisao**.

### Diagnostico geral

| Eixo | Avaliacao |
| --- | --- |
| SEO tecnico | Bom, com falhas pontuais relevantes |
| SEO on-page | Bom |
| AEO | Bom potencial, ainda sem governanca editorial plena |
| GEO / Local SEO | Bom, com risco moderado em paginas de area atendida |
| Schema / JSON-LD | Bom volume, mas consistencia irregular |
| NAP | Majoritariamente consistente |
| Editorial | Bom volume e boa organizacao |
| EEAT | Forte em experiencia e confianca, medio em evidencia formal |

## Pontos fortes

- Boa cobertura de title, meta description, canonical, Open Graph e Twitter Cards nas paginas principais.
- Arquitetura editorial organizada por silos, o que ajuda relevancia topica e navegacao.
- Breadcrumbs e malha principal de links internos bem construidos.
- Uso amplo de FAQ, o que fortalece SEO semantico, AEO e capacidade de resposta direta.
- Forte presenca de sinais de confianca: nome profissional, CRP, endereco, telefone, e-mail, horario, mapa, perfis externos e provas sociais.
- Home e paginas principais ja trabalham bem a entidade local "psicologo em Vitoria / Jardim da Penha".
- Conteudo alinhado a intencoes reais de busca clinica e de consideracao, nao apenas a palavras-chave genericas.
- Estrutura de JSON-LD ampla, especialmente na home, sobre e paginas de servico.
- Build estatico funcionando, o que e positivo para performance, simplicidade de deploy e previsibilidade de rastreamento.
- NAP principal aparece de forma coerente em homepage, footer, contato e localizacao.

## Pontos fracos e riscos

| Severidade | Achado | Impacto esperado |
| --- | --- | --- |
| Critico | `npm run check` falha porque `schemaIds.serviceOnline` e referenciado sem definicao | Fragiliza manutencao, CI e confiabilidade tecnica do projeto |
| Alto | Politica de privacidade declara Google Analytics/cookies, mas nao ha implementacao correspondente nem banner/consentimento | Risco de confianca, compliance e inconsistencia institucional |
| Alto | Paginas locais ainda usam links internos legados para `/blog/...`, gerando redirects internos | Desperdicio de crawl budget, perda de eficiencia interna e manutencao desnecessaria |
| Medio/alto | `sitemap.xml` inclui paginas com `noindex, nofollow` | Sinal contraditorio para buscadores |
| Medio | `static/_headers` aplica cache em `/_app/immutable/*`, mas o build real publica `/app/immutable/*` | Possivel perda de cache ideal para assets imutaveis |
| Medio | `site.webmanifest` aponta para icones inexistentes | Falha tecnica de integridade de ativos |
| Medio | Schema `Person` da pagina `sobre` usa CEP divergente do restante do site | Inconsistencia de entidade/localidade |
| Medio | Paginas de `Vila Velha` e `Serra` atuam como paginas de area atendida, mas ainda precisam de maior diferenciacao editorial | Risco moderado de percepcao de doorway/local page thin differentiation |
| Medio | Editorial tem 37 posts e 37 FAQs, mas apenas 11 posts com referencias e 0 com `lastReviewed` | Autoridade clinica fica forte no discurso, mas menos formalizada |
| Baixo/medio | Parte dos ratings e reviews exibidos e estatica, exigindo manutencao para nao gerar defasagem percebida | Risco reputacional e de atualizacao |

## Analise detalhada por eixo

## 1. SEO tecnico

### Leitura geral

A base tecnica do site e boa: estrutura limpa, build estatico funcional, bom uso de canonicals, metadados consistentes e arquitetura de rotas organizada. O problema nao e estrutural; e de governanca e manutencao.

### O que esta funcionando bem

- O build local passa com sucesso.
- As paginas principais saem com metadados completos e coerentes.
- Ha boa definicao de pagina canonica nas rotas principais.
- O HTML gerado ja entrega sinais semanticos fortes sem depender pesadamente de JavaScript no cliente.
- A arquitetura por categoria e slug e clara para blog/silos.

### Fragilidades confirmadas

1. O projeto falha em verificacao tecnica local:
   - `npm run check` falha porque `schemaIds.serviceOnline` nao existe em `src/lib/data/siteProfile.ts`, embora seja usado em `src/routes/servicos/terapia-online/+page.svelte`.
   - Isso e um sinal de quebra entre tipagem, schema governance e manutencao do codigo.

2. Ha residuos da arquitetura antiga de URLs:
   - As paginas locais ainda apontam para `/blog/${article.slug}/`.
   - A arquitetura canonica atual esta nos silos finais (`/${categoria}/${slug}/`).
   - Isso significa que o site ainda depende de redirects internos para circular relevancia.

3. Sitemap contraditorio:
   - `build/sitemap.xml` inclui `/politica-privacidade/` e `/termos-uso/`.
   - As paginas publicadas dessas rotas estao com `meta robots="noindex, nofollow"`.
   - Isso cria sinal misto: a URL e oferecida ao rastreador no sitemap, mas simultaneamente instruida a nao ser indexada.

4. Regra de cache potencialmente incorreta:
   - `static/_headers` usa `/_app/immutable/*`.
   - O build real usa `/app/immutable/*`.
   - Resultado provavel: os assets hashados nao recebem exatamente a politica de cache pretendida.

5. Integridade parcial do manifest:
   - `static/site.webmanifest` referencia `web-app-manifest-192x192.png` e `web-app-manifest-512x512.png`.
   - Esses arquivos nao estao presentes.

### Julgamento consultivo

O SEO tecnico do site nao esta "ruim". Ele esta "bom, mas com debitos de manutencao". Isso e importante porque, nesse estagio, pequenas inconsistencias passam a ter peso maior. O projeto ja fez o dificil, que foi construir base e cobertura. Agora precisa da etapa menos visivel, mas mais valorizada no medio prazo: higiene operacional.

### Melhorias recomendadas

- Corrigir a falha do `npm run check` como prioridade imediata.
- Atualizar todos os links internos legados para as URLs canonicas atuais.
- Remover do sitemap URLs marcadas como `noindex`, ou revisar a politica dessas paginas se houver motivo para indexa-las.
- Corrigir `_headers` para refletir o `appDir` real do build.
- Sincronizar o manifest com os assets realmente publicados. 

## 2. AEO

### Leitura geral

O site tem bom potencial para AEO porque ja escreve em linguagem humana, trabalha perguntas reais do usuario e usa FAQ em larga escala. Isso e melhor do que muitos sites que "fazem SEO" mas nao respondem de fato o que o usuario pergunta.

### O que esta funcionando bem

- O corpus editorial e orientado por problemas concretos, nao apenas por keywords frias.
- As FAQs estao amplamente distribuidas no site e ajudam a capturar perguntas de alta intencao.
- Os temas abordados combinam descoberta, consideracao e confianca.
- Ha boa conexao entre paginas de servico, experiencia, localizacao e artigos.
- A presenca forte da entidade profissional melhora a chance de confianca em respostas sintetizadas.

### Limitadores atuais

- O uso de FAQ e forte, mas ainda falta uma governanca editorial de respostas "definitivas".
- Nao ha marcador de revisao clinica (`lastReviewed`) em nenhum post.
- Apenas 11 dos 37 posts usam referencias bibliograficas.
- Apenas 3 posts usam `schemaType: "Article"`, o que reduz a diferenciacao entre conteudo mais opinativo e conteudo mais tecnico/referenciado.
- O projeto comunica experiencia e posicionamento com qualidade, mas ainda formaliza pouco sua camada de validacao editorial.

### Julgamento consultivo

Para AEO, o site ja tem formato de resposta. O que falta e blindagem. Motores de resposta tendem a valorizar conteudo claro, verificavel, atualizado e assinado por entidade confiavel. O projeto ja tem "clareza" e "assinatura". Ainda precisa evoluir em "verificacao" e "rotina de revisao".

### Melhorias recomendadas

- Definir padrao editorial para artigos clinicos:
  - data de publicacao
  - data de revisao
  - referencia quando o tema exigir lastro
  - classificacao consistente entre `Article` e `BlogPosting`
- Priorizar answer-first sections em temas com forte demanda informacional.
- Padronizar resumos objetivos no topo de artigos-chave.
- Criar um bloco editorial recorrente de "quando buscar ajuda", "para quem este conteudo serve" e "limites do conteudo informativo".

## 3. GEO / Local SEO

### Leitura geral

Em GEO/local SEO, o site esta bem posicionado conceitualmente. Ele deixa claro onde o profissional atua, qual e o bairro central, como chegar, como agendar e quais regioes se beneficiam do atendimento. Isso e um bom ponto de partida.

### O que esta funcionando bem

- O eixo local central "Vitoria / Jardim da Penha" esta forte.
- O endereco fisico aparece de forma recorrente e consistente na maior parte do site.
- Ha pagina de localizacao, mapa, referencias territoriais e prova local.
- Existem paginas locais com copy propria e FAQ propria.
- O consultorio, a referencia a UFES e a ancoragem em Jardim da Penha ajudam a construir relevancia geografica autentica.

### Riscos e fragilidades

- As paginas de `Vila Velha` e `Serra` exigem cuidado estrategico.
- Como ha um unico endereco fisico principal em Vitoria, essas paginas devem ser tratadas como paginas de area atendida/acesso, nao como "unidades locais equivalentes".
- Hoje elas ja possuem algum nivel de diferenciacao, o que e positivo, mas ainda precisam de aprofundamento para reduzir risco de percepcao de doorway.
- O schema dessas paginas ainda esta relativamente leve para reforcar contexto local e relacao com area atendida.

### Julgamento consultivo

O ativo local principal esta bem montado. O risco nao esta no centro geografico do projeto; esta na expansao lateral. Ou seja: Vitoria/Jardim da Penha transmite autenticidade. Paginas de municipios vizinhos precisam ser continuamente justificadas por contexto, acesso, comportamento de busca e utilidade real.

### Melhorias recomendadas

- Tratar `Vila Velha` e `Serra` como paginas de deslocamento/acesso/area atendida, com linguagem explicita.
- Aprofundar conteudo dessas paginas com:
  - tempo medio de deslocamento
  - motivos reais para pacientes dessas regioes buscarem atendimento em Vitoria
  - alternativas entre presencial e online
  - dores e contextos locais especificos
- Reforcar no schema e no texto que existe um unico consultorio fisico e area atendida ampliada.

## 4. Schemas e JSON-LD

### Leitura geral

O projeto usa dados estruturados em volume acima da media. Isso e uma vantagem real. O problema nao e ausencia de schema; e padronizacao, manutencao e coerencia entre paginas.

### Pontos positivos

- A home possui um `@graph` rico com `WebSite`, `WebPage`, `Person`, `ProfessionalService`/`LocalBusiness`, `FAQPage` e `AggregateRating`.
- A pagina `sobre` reforca identidade, formacao, areas de conhecimento e entidade pessoal.
- Servicos e paginas-chave usam FAQ com boa consistencia.
- Existe tentativa clara de modelar organizacao, servicos e relacionamento com a entidade principal.

### Fragilidades confirmadas

- A governanca de IDs nao esta fechada: o caso de `schemaIds.serviceOnline` prova isso.
- O schema `Person` da pagina `sobre` usa CEP `29060-630`, enquanto o restante da entidade local usa `29060-500`.
- As paginas locais usam schema mais simples do que o ideal para reforco de contexto geografico e servico.
- O uso de `AggregateRating` e valido como sinal de prova social, mas exige manutencao rigorosa para nao haver discrepancia futura entre site e plataformas.
- Ha assimetria entre o nivel de detalhe do schema da home e o de outras paginas importantes.

### Julgamento consultivo

O site esta na fase em que schema deixa de ser "diferencial" e passa a ser "infraestrutura". Por isso, qualquer incoerencia pesa mais. Quando o projeto decide usar JSON-LD de forma extensa, ele precisa aceitar o custo de governanca dessa decisao.

### Melhorias recomendadas

- Criar padrao unico de schema IDs e revisar a cobertura de todas as rotas principais.
- Unificar CEP, endereco e demais dados de entidade em um unico source of truth.
- Evoluir o schema das paginas locais para refletir com mais clareza servico, area atendida e relacao com o consultorio principal.
- Definir regra editorial para quando usar `Article` versus `BlogPosting`.

## 5. Consistencia NAP

### Leitura geral

O NAP do projeto esta, no geral, bem consistente. Isso e um ativo importante e deve ser preservado com disciplina.

### NAP principal identificado

- Nome: Bernardo Carielo / Bernardo Carielo Psicologo
- Telefone: `(27) 99833-1228`
- E-mail: `contato@psicologobernardo.com.br`
- Endereco: Rua Darcy Grijo, 50, Sala 409, Ed. Madison Office Tower, Jardim da Penha, Vitoria - ES, CEP 29060-500
- Horario: segunda a sexta, 13:30 as 21:00
- Registro: CRP 16/5527

### O que esta funcionando bem

- Footer, homepage, contato e localizacao trabalham o mesmo nucleo de identificacao.
- O endereco principal e a referencia territorial estao bem presentes.
- O profissional e o negocio estao semanticamente conectados.

### Inconsistencias encontradas

- O schema `Person` da pagina `sobre` usa CEP `29060-630`.
- O restante do site e da entidade local usa `29060-500`.

### Julgamento consultivo

Esse nao e um problema grave isoladamente, mas e exatamente o tipo de detalhe que erode consistencia de entidade com o tempo. NAP so funciona como sinal forte quando o projeto e obsessivamente coerente.

### Melhorias recomendadas

- Consolidar NAP em uma unica fonte de dados reutilizavel.
- Revisar endereco, CEP, telefone, e-mail e horario em todos os schemas e componentes.
- Tratar qualquer divergencia de NAP como bug de alta disciplina, mesmo quando o impacto imediato parecer pequeno.

## 6. Editorial

### Panorama atual

O corpus editorial atual tem **37 posts distribuidos em 6 silos**:

- Saude Mental: 14
- Abordagem Centrada na Pessoa: 8
- Psicoterapia: 6
- Terapia para Homens: 4
- Jardim da Penha: 3
- Vitoria ES: 2

Indicadores relevantes:

- 37 posts com FAQ
- 11 posts com referencias
- 0 posts com `lastReviewed`
- 3 posts com `schemaType: "Article"`

### O que esta funcionando bem

- O site nao depende apenas de paginas transacionais; ha sustentacao editorial real.
- Os silos fazem sentido estrategico e clinico.
- O conteudo conecta dores, linguagem acessivel e posicionamento profissional.
- Ha boa integracao entre editorial, servicos, experiencias e localizacao.
- O tema "psicologo em Vitoria / Jardim da Penha" nao depende so da home; ele tambem recebe apoio do conteudo.

### Pontos fracos

- A cobertura local fora do centro principal ainda e curta.
- O volume de referencias ainda e limitado para um projeto que quer sustentar alta autoridade clinica.
- Nao ha rotina visivel de revisao editorial/clinica.
- O uso de `Article` esta subaproveitado para materiais mais tecnicos.
- O projeto tem potencial para ser visto como muito autoral e pouco formalizado em alguns temas sensiveis.

### Julgamento consultivo

Editorialmente, o site esta melhor em **qualidade de direcao** do que em **maturidade de governanca**. O caminho estrategico e bom. O que falta e transformar esse acervo em um sistema editorial mais auditavel, atualizado e consistente.

### Melhorias recomendadas

- Criar trilha de atualizacao editorial trimestral.
- Priorizar revisao de artigos evergreen e de alta intencao.
- Aumentar a proporcao de posts com referencias em temas clinicos, tecnicos ou sensiveis.
- Marcar revisao clinica sempre que houver atualizacao.
- Expandir os clusters locais com profundidade, nao apenas com variacoes de localidade.

## 7. EEAT

### Experience

Muito forte. O site comunica pratica real, contexto de atendimento, consultorio concreto, bairro, experiencia profissional, linguagem clinica consistente e sinais de vida profissional legitima.

### Expertise

Boa. A pagina `sobre`, os servicos, o CRP e a coerencia tematica sustentam expertise. O repertorio editorial tambem mostra dominio de abordagem e de problemas clinicos recorrentes.

### Authoritativeness

Boa, mas ainda com espaco para formalizacao. A autoridade esta presente no conjunto do projeto, mas ainda nao foi totalmente convertida em evidencias editoriais padronizadas. Referencias bibliograficas, revisao clinica e maior consistencia de schema elevariam esse nivel.

### Trust

Forte no front institucional, mas com uma fissura importante: a politica de privacidade promete uma implementacao de analytics/cookies que nao aparece no projeto. Esse tipo de desalinhamento pesa porque atinge exatamente a camada de confianca declarada.

### Julgamento consultivo

O site transmite EEAT de forma convincente para o usuario humano. Para buscadores e sistemas generativos, ele ainda precisa transformar essa confianca percebida em confianca documentada e tecnicamente consistente.

### Melhorias recomendadas

- Formalizar processo de revisao clinica e atualizacao de conteudo.
- Ampliar uso de referencias onde o tema exigir maior lastro.
- Tornar completamente coerentes politica, implementacao e coleta real de dados.
- Padronizar schemas e sinais de autoria/entidade em paginas estrategicas.

## Matriz de prioridades

| Prioridade | Acao | Impacto | Esforco |
| --- | --- | --- | --- |
| P1 | Corrigir falha do `npm run check` ligada a `schemaIds.serviceOnline` | Alto | Baixo |
| P1 | Alinhar politica de privacidade com a implementacao real de analytics/cookies | Alto | Medio |
| P1 | Atualizar links internos `/blog/...` para URLs canonicas dos silos | Alto | Baixo/medio |
| P1 | Remover do sitemap paginas com `noindex` ou revisar essa politica | Medio/alto | Baixo |
| P2 | Corrigir mismatch entre `/_app` e `/app` em `_headers` | Medio | Baixo |
| P2 | Corrigir icones ausentes no `site.webmanifest` | Medio | Baixo |
| P2 | Unificar CEP e NAP em todos os schemas/componentes | Medio | Baixo |
| P2 | Definir padrao editorial para `Article`, `BlogPosting`, referencias e `lastReviewed` | Alto | Medio |
| P3 | Evoluir schema e copy das paginas de area atendida (`Vila Velha`, `Serra`) | Medio | Medio |
| P3 | Expandir profundidade do cluster local e rotinas de revisao editorial | Alto | Medio/alto |

## Plano recomendado de melhorias

## Curto prazo - 0 a 30 dias

- Fechar as inconsistencias tecnicas que afetam confiabilidade: type-check, sitemap, headers, manifest e NAP.
- Eliminar links internos legados que geram redirects desnecessarios.
- Revisar a politica de privacidade para refletir a coleta real de dados, ou implementar de fato o que hoje e declarado.
- Definir uma lista de paginas e artigos prioritarios para revisao de schema e metadata.

## Medio prazo - 30 a 90 dias

- Padronizar toda a governanca de JSON-LD.
- Revisar paginas locais para reforcar autenticidade, area atendida e intencao real do usuario.
- Criar politica editorial objetiva para:
  - artigos clinicos
  - artigos opinativos
  - data de revisao
  - referencias
  - autoria
- Atualizar os principais evergreen posts com bloco de revisao e bibliografia.

## Longo prazo - 90 dias ou mais

- Transformar o editorial em um ativo de autoridade sistemica, nao apenas de publicacao.
- Consolidar o cluster local com profundidade geografica autentica.
- Revisar recorrentemente prova social, ratings, entidades e consistencia institucional.
- Tratar governanca tecnica e editorial como rotina operacional permanente.

## Conclusao

O site esta em um patamar competitivo para um profissional local: boa fundacao tecnica, narrativa clara, forte ancora local e editorial coerente. O que impede um salto de maturidade nao e falta de presenca; e falta de fechamento operacional.

Minha leitura final e direta: **o ativo ja parece serio; agora precisa passar a operar com rigor de ativo serio**. Se o projeto corrigir os pontos tecnicos pendentes, elevar a disciplina de schema/NAP e criar uma rotina real de revisao editorial, ele tende a ganhar consistencia organica, melhorar a elegibilidade para respostas sintetizadas e aumentar a robustez da sua autoridade percebida.

## Evidencias locais validadas

Arquivos e pontos checados nesta auditoria:

- `src/lib/data/siteProfile.ts`
- `src/routes/servicos/terapia-online/+page.svelte`
- `src/routes/localizacao/*`
- `src/routes/sobre/+page.svelte`
- `src/routes/politica-privacidade/+page.svelte`
- `static/site.webmanifest`
- `static/_headers`
- `build/sitemap.xml`
- `build/politica-privacidade/index.html`
- `build/termos-uso/index.html`
- `src/lib/data/blog.ts`
- `src/lib/data/blogContent.ts`

Validacoes locais consideradas:

- `npm run check`: falha
- `npm run build`: sucesso
