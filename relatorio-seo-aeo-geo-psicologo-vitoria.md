# Relatorio SEO / AEO / GEO v2 - Padrao-Ouro

Data da revisao: 11/03/2026
Projeto: psicologobernardo.com.br
Objetivo principal: consolidar a presenca organica para `psicologo em Vitoria`
Objetivo comercial principal: `psicoterapia individual`
Objetivo comercial secundario: `terapia de casal`
Escopo desta versao: transformar o relatorio anterior em um plano de execucao de padrao-ouro, cobrindo SEO tecnico, SEO local, AEO, GEO, conteudo, autoridade externa, medicao e governanca.

---

## 1. Definicao de padrao-ouro para este projeto

Para este site, padrao-ouro nao significa apenas "boas praticas onsite". Significa desempenho consistente em 8 camadas ao mesmo tempo:

1. Entidade clara e coerente em todo o ecossistema.
2. Arquitetura de informacao sem ambiguidade entre pagina local, pagina de servico e conteudo de apoio.
3. HTML rastreavel, indexavel e sem sinais contraditorios.
4. Melhor experiencia local possivel para a busca `psicologo em Vitoria`.
5. Conteudo comercial e editorial cobrindo intencao local, informacional e transacional.
6. Estrutura AEO preparada para featured snippets, people also ask e respostas sintetizadas por modelos generativos.
7. GEO forte, com grafo semantico consistente, autoria, revisao e sinais de confianca reforcados.
8. Medicao, manutencao e revisao continuada, com criterios objetivos de sucesso.

Se qualquer uma dessas camadas ficar fraca, o site pode ser bom, mas nao sera padrao-ouro.

---

## 2. Diagnostico consolidado do estado atual

### 2.1 Ativos fortes ja existentes

- Site com SSG/SSR estavel e checagem tecnica passando com `npm run check`.
- Home, paginas de servico, paginas locais e blog com title, description, canonical e JSON-LD.
- Boa base de conteudo original, com voz autoral e alinhamento claro com ACP.
- Existencia de cluster local: Vitoria, Jardim da Penha, Praia do Canto, Mata da Praia, Vila Velha e Serra.
- Sinais de confianca visiveis: CRP, endereco, consultorio, UFES, experiencia, avaliacoes, FAQ.
- Blog com estrutura aproveitavel para AEO: perguntas, respostas, bio autoral, artigos relacionados, referencias em parte do acervo.

### 2.2 Principais limitadores atuais

- Nao ha hub indexavel real para `/servicos/`.
- Nao ha hub indexavel real para `/experiencia/`.
- Existe confusao de entidade entre `Bernardo Carielo` e `Arranjos Psicologia`.
- NAP, horario, email, CEP, duracao de sessao e contagem de reviews aparecem com variacoes.
- A landing local mais forte (`/localizacao/psicologo-vitoria-es/`) ainda nao transfere autoridade suficiente para a principal money page (`/servicos/psicoterapia-individual/`).
- O blog ainda esta mais forte em topo/meio de funil do que em fundo de funil comercial local.
- Ha perdas de eficiencia por links internos que disparam redirecionamentos.
- O schema atual e bom, mas ainda nao forma um grafo de entidade e servicos tao consistente quanto poderia.

### 2.3 Veredito honesto

Se o relatorio v1 fosse executado integralmente, o site ficaria forte. Para padrao-ouro, porem, ainda faltariam:

- camada tecnica de indexacao/performance mais formalizada;
- camada offsite/local mais robusta;
- camada de medicao e governanca;
- especificacao operacional por template;
- criterios de aceite que comprovem que a implementacao ficou correta.

---

## 3. Posicionamento estrategico recomendado

### 3.1 Hierarquia de intencao

O site precisa comunicar a seguinte estrutura sem ambiguidade:

- Entidade principal: Bernardo Carielo, psicologo clinico em Vitoria ES.
- Busca local principal: `psicologo em Vitoria`.
- Servico principal: `psicoterapia individual em Vitoria`.
- Servico secundario: `terapia de casal em Vitoria`.
- Modalidade de apoio: `terapia online`.
- Paginas de experiencia: entradas por dor e necessidade.
- Blog: sustentacao editorial, autoridade, AEO e apoio a conversao.

### 3.2 Mapa de paginas-alvo

- Home `/`: autoridade de marca + localidade + confianca.
- `/localizacao/psicologo-vitoria-es/`: landing principal para `psicologo em Vitoria`.
- `/servicos/psicoterapia-individual/`: principal money page para `psicoterapia individual em Vitoria`.
- `/servicos/terapia-de-casal/`: segunda money page.
- `/localizacao/psicologo-jardim-da-penha/`: reforco geo-local forte.
- `/experiencia/...`: paginas de necessidade clinica.
- `/artigos/` + categorias + posts: cluster de autoridade e apoio.

### 3.3 Regra anti-canibalizacao

Cada uma dessas paginas precisa ter papel proprio:

- Home: ampla, institucional e local.
- Vitoria: local, acesso, contexto urbano, bairros, consultorio.
- Psicoterapia individual: servico, processo, adequacao, objecoes, conversao.
- Terapia de casal: servico, dinamica relacional, indicacoes, objecoes, conversao.
- Jardim da Penha: localidade hiper-especifica e prova de proximidade.
- Experiencia: dores e sintomas.
- Blog: explicacao, educacao, objecoes e long-tail.

---

## 4. Padrao-ouro de SEO tecnico

## 4.1 Indexacao e rastreabilidade

Obrigatorio:

- Todas as paginas indexaveis devem ter canonical absoluto e coerente.
- Nenhuma pagina importante deve depender de ancora da home para existir semanticamente.
- Criar hubs reais e indexaveis para `/servicos/` e `/experiencia/`.
- Eliminar links internos que passam por redirecionamentos desnecessarios.
- Garantir que todas as rotas indexaveis estejam no sitemap e todas as URLs do sitemap retornem 200.
- Manter apenas URLs canonicas com trailing slash, sem duplicidade.
- Validar que paginas legais nao estejam recebendo destaque excessivo em linkagem interna.

Checklist tecnico:

- sitemap sem URLs quebradas
- robots coerente
- canonicals corretos
- breadcrumbs em paginas importantes
- nenhum orphan page relevante
- profundidade maxima de clique reduzida para paginas comerciais
- links internos sempre apontando para URL final

## 4.2 Renderizacao e HTML final

Obrigatorio:

- Validar o HTML final entregue para bots nas paginas-chave.
- Confirmar que o conteudo principal, FAQs, links e blocos semanticos existem no HTML inicial e nao dependem de JS para aparecer.
- Confirmar que JSON-LD relevante esta no HTML final das paginas.

Paginas para validacao manual recorrente:

- home
- psicologo em Vitoria
- psicoterapia individual
- terapia de casal
- ansiedade
- contato
- um post de categoria local
- um post de categoria psicoterapia

## 4.3 Core Web Vitals e performance

Padrao-ouro exige metas objetivas:

- LCP em mobile: ideal abaixo de 2,5s
- INP em mobile: ideal abaixo de 200ms
- CLS: abaixo de 0,1

Acoes obrigatorias:

- revisar imagens acima da dobra
- revisar prioridades de preload
- revisar peso do hero da home e heroes das money pages
- revisar iframes de mapa e widgets externos para nao degradarem CWV das paginas comerciais
- limitar scripts de terceiros nas paginas mais importantes
- revisar fontes e preconnects

Ferramentas de acompanhamento:

- PageSpeed Insights
- Search Console Core Web Vitals
- Lighthouse mobile
- WebPageTest quando necessario

## 4.4 Estrutura semantica e headings

Padrao minimo por pagina comercial:

- 1 H1 unico e alinhado com a intencao principal
- H2s por bloco semantico claro
- bloco-resposta curta no topo
- FAQs relevantes de fato
- CTA intermediario e CTA final
- linkagem interna orientada por funil

## 4.5 Schema e grafo semantico

Padrao-ouro:

- `WebSite`
- `Organization` ou `ProfessionalService`
- `Person`
- `WebPage`
- `Service`
- `BreadcrumbList`
- `FAQPage` quando cabivel
- `BlogPosting` ou `Article`
- `LocalBusiness` ou `ProfessionalService` coerente com a entidade principal

Regras:

- cada servico principal deve ter `@id` proprio e estavel
- paginas de experiencia devem mencionar o servico correto por `@id` valido
- paginas locais devem se conectar a Organization/ProfessionalService e ao consultorio
- posts devem ligar autor, publisher, category, FAQs e referencias quando existirem
- evitar schema inflado ou promocional demais
- usar somente schema que corresponda ao conteudo real da pagina

## 4.6 NAP e consistencia institucional

Padrao-ouro exige 100% de consistencia em:

- nome principal do negocio
- nome da pessoa
- CRP
- endereco
- bairro
- cidade
- CEP
- telefone
- email
- horario
- modalidades

Inconsistencias atuais a eliminar:

- email alternando entre dominio principal e Arranjos
- CEP divergente
- horario divergente
- duracao divergente entre paginas
- volume de reviews divergente
- mapa/titulo associados a Arranjos em paginas onde a entidade principal e Bernardo

---

## 5. Padrao-ouro de SEO local e GEO

## 5.1 SEO local onsite

A landing `/localizacao/psicologo-vitoria-es/` deve ser tratada como a principal pagina para `psicologo em Vitoria`.

Ela precisa conter, de forma clara e natural:

- localidade exata
- consultorio e bairro
- acesso e bairros atendidos
- relacao com UFES e Jardim da Penha
- prova de autoridade local
- link forte para psicoterapia individual
- mencao secundaria para terapia de casal
- opcao online como apoio, nao como protagonista

## 5.2 SEO local offsite

Sem isso nao ha padrao-ouro:

- Google Business Profile totalmente alinhado ao site
- Doctoralia alinhada ao site
- CRP/CFP e perfis profissionais coerentes
- NAP identico em perfis externos relevantes
- diretorios locais e de saude selecionados, sem spam
- estrategia de captacao continua de reviews legitimas
- backlinks locais e institucionais quando possivel

Checklist offsite:

- GBP com categoria principal correta
- servicos e descricao coerentes com o site
- fotos reais do consultorio
- reviews recentes e frequentes
- Doctoralia com mesmas informacoes essenciais
- links do site para perfis externos e vice-versa quando adequado

## 5.3 GEO para modelos generativos

Padrao-ouro em GEO depende de:

- entidade estavel
- autoria forte
- semantica clara
- respostas objetivas
- paginas com resumo confiavel e factual
- dados locais repetidos sem contradicao
- experiencia documentada
- referencias e revisao em temas sensiveis

Para este projeto, GEO forte significa que um modelo consiga inferir corretamente:

- quem e Bernardo Carielo
- onde atende
- qual abordagem utiliza
- qual servico principal oferece
- qual e a cidade-alvo
- quais modalidades existem
- para quais temas ele e mais associado

---

## 6. Padrao-ouro de AEO

## 6.1 Estrutura de resposta curta

Toda pagina importante deve ter, logo no inicio, uma resposta curta de 40 a 90 palavras que responda a pergunta central da pagina.

Exemplos de perguntas centrais:

- Psicologo em Vitoria: onde atende, como trabalha e para quem.
- Psicoterapia individual: o que e, como funciona e para quem faz sentido.
- Terapia de casal: quando procurar e como funciona.
- Ansiedade: como a terapia ajuda e quais sinais merecem atencao.

## 6.2 Formatos que favorecem AEO

- paragrafo-resposta curto
- listas simples
- comparacoes diretas
- blocos "quando faz sentido" / "quando nao esperar"
- FAQs reais e nao decorativas
- definicoes objetivas no inicio do texto

## 6.3 Politica editorial para AEO

- cada pagina precisa responder a principal pergunta sem obrigar o usuario a ler o texto inteiro
- FAQs devem ser escritas com linguagem natural de busca
- evitar respostas vagas demais
- respostas devem ser clinicamente prudentes e sem promessas absolutas

---

## 7. Arquitetura recomendada do site

## 7.1 Navegacao principal

Recomendacao:

- Inicio
- Sobre
- Servicos
- Como posso ajudar
- Localizacao
- Artigos
- Contato

Substituir `Experiencia` por `Como posso ajudar` ou equivalente mais claro.

## 7.2 Hubs obrigatorios

### `/servicos/`

Deve existir e ser indexavel.

Funcao:

- consolidar o cluster comercial
- transmitir hierarquia de servicos
- empurrar `psicoterapia individual`
- sustentar `terapia de casal`
- organizar servicos secundarios sem competir com o principal

### `/experiencia/` ou `/como-posso-ajudar/`

Deve existir e ser indexavel.

Funcao:

- agrupar entradas por demanda
- explicar o que costuma levar alguem a buscar terapia
- ligar dores aos servicos corretos

## 7.3 Hierarquia interna recomendada

Home -> Vitoria -> Psicoterapia Individual
Home -> Servicos -> Psicoterapia Individual
Home -> Servicos -> Terapia de Casal
Home -> Como posso ajudar -> Ansiedade -> Psicoterapia Individual
Home -> Como posso ajudar -> Relacionamentos -> Terapia de Casal
Home -> Artigos -> Categoria -> Post -> Servico / Localizacao / Contato

---

## 8. Especificacao por template

## 8.1 Home

Objetivo:

- autoridade geral
- prova de confianca
- consolidacao de entidade
- distribuicao de autoridade interna

Blocos obrigatorios:

- hero com promessa comercial clara
- prova rapida de quem atende, onde atende e como atende
- destaque de psicoterapia individual
- destaque secundario de terapia de casal
- prova local
- prova social
- FAQ basica
- links para Vitoria, Jardim da Penha, psicoterapia individual e terapia de casal

## 8.2 Pagina `psicologo em Vitoria`

Objetivo:

- principal landing local

Blocos obrigatorios:

- resposta curta inicial
- consultorio e localidade
- para quais bairros e perfis atende
- acesso e deslocamento
- prova local
- servicos em destaque com psicoterapia individual em primeiro lugar
- FAQ local
- CTA para WhatsApp

## 8.3 Pagina `psicoterapia individual`

Objetivo:

- principal money page

Blocos obrigatorios:

- resposta curta inicial
- o que e
- para quem costuma fazer sentido
- como funciona
- o que esperar da primeira sessao
- duvidas comuns e objecoes
- prova local e online
- links para ansiedade, depressao, burnout, Vitoria e contato
- CTA intermediario e final

## 8.4 Pagina `terapia de casal`

Objetivo:

- segunda money page

Blocos obrigatorios:

- resposta curta inicial
- quando procurar
- como funciona
- objecoes comuns
- quando pode nao ser o melhor caminho isoladamente
- FAQ
- CTA

## 8.5 Paginas de experiencia

Objetivo:

- entrada por dor
- apoio sem canibalizar a money page

Blocos obrigatorios:

- definicao curta do problema
- sinais e contexto
- como a terapia ajuda
- quando buscar atendimento
- CTA para o servico principal correto

## 8.6 Template de post

Blocos recomendados:

- resposta curta ou lead forte
- sumario curto nos posts mais estrategicos
- conteudo principal
- FAQ quando fizer sentido
- referencias quando fizer sentido
- bio com entidade consistente
- links para servico principal e localidade
- artigos relacionados da mesma intencao

## 8.7 Contato e Agendar

Objetivo:

- conversao sem ruido institucional

Devem repetir exatamente:

- nome
- CRP
- endereco
- bairro
- cidade
- telefone
- horario
- modalidade
- email oficial escolhido

---

## 9. Estrategia editorial padrao-ouro

## 9.1 Equilibrio de funil

Hoje o site esta forte em topo/meio. O alvo e equilibrar com fundo de funil.

Distribuicao editorial recomendada para os proximos 3 meses:

- 40% conteudo comercial assistido por SEO
- 35% conteudo de apoio clinico/educacional
- 25% conteudo local e geo-contextual

## 9.2 Clusters prioritarios

### Cluster 1: psicoterapia individual em Vitoria

Pecas sugeridas:

- Psicoterapia individual em Vitoria: como funciona na pratica
- O que esperar da primeira sessao com um psicologo em Vitoria
- Quanto tempo leva a psicoterapia individual
- Terapia presencial ou online: como escolher em Vitoria
- Como saber se a psicoterapia individual faz sentido para voce

### Cluster 2: terapia de casal em Vitoria

Pecas sugeridas:

- Terapia de casal em Vitoria: quando procurar
- Brigas recorrentes: quando a terapia de casal ajuda
- Terapia de casal funciona quando so um quer mudar?
- Terapia individual ou de casal: como decidir

### Cluster 3: localidade e escolha

Pecas sugeridas:

- Como escolher um psicologo em Vitoria com seguranca
- Psicologo em Jardim da Penha: vantagens praticas de localizacao
- Primeira sessao de terapia em Vitoria: duvidas frequentes
- Como encontrar psicologo perto da UFES

## 9.3 Regras editoriais

- nenhum post estrategico sem CTA contextual
- nenhum post estrategico sem pelo menos 2 links internos para paginas comerciais ou locais
- revisao clinica em temas sensiveis
- datas de publicacao e revisao consistentes
- evitar produzir temas amplos demais sem intencao clara

---

## 10. Autoridade, E-E-A-T e confianca

Padrao-ouro exige reforcar:

- autoria clara em todas as paginas relevantes
- CRP visivel
- experiencia clinica verificavel
- alinhamento entre bio, schema e perfis externos
- referencias quando o assunto for clinicamente sensivel
- linguagem sem promessas irreais
- politica editorial para revisao e atualizacao

Blocos que ajudam:

- "revisado clinicamente em"
- bio curta do autor
- experiencia resumida
- links para perfis confiaveis
- explicacao clara de abordagem

---

## 11. SEO local offsite e autoridade externa

Padrao-ouro nao sera atingido apenas dentro do site.

## 11.1 Google Business Profile

Checklist:

- categoria principal correta
- categoria secundaria coerente, se fizer sentido
- descricao alinhada ao posicionamento principal
- servicos listados com mesma hierarquia do site
- fotos reais do consultorio
- horario identico ao site
- endereco identico ao site
- telefone identico ao site
- posts periodicos quando houver relevancia

## 11.2 Reviews

Padrao-ouro:

- captacao continua e legitima
- distribuicao natural no tempo
- respostas do perfil quando apropriado
- coerencia entre volume citado no site e volume real nas plataformas

## 11.3 Citacoes e backlinks

Prioridades:

- Doctoralia
- perfis institucionais/profissionais relevantes
- citacoes locais de qualidade
- backlinks editoriais legitimos de sites da area, universidades, projetos, parceiros e diretorios selecionados

Evitar:

- compra de links
- diretorios spam
- links em massa sem contexto

---

## 12. Analytics, Search Console e KPIs

Sem medicao nao existe padrao-ouro.

## 12.1 Ferramentas obrigatorias

- Google Search Console
- GA4 ou stack equivalente
- medicao de conversao em WhatsApp, email e agendamento
- anotacoes de alteracoes relevantes
- baseline operacional da fase 3 registrado em `search-console-fase-3-baseline.md`

## 12.2 KPIs principais

Por query:

- impressoes
- cliques
- CTR
- posicao media

Por pagina:

- sessoes organicas
- conversoes assistidas e diretas
- taxa de clique em CTA
- paginas por sessao a partir das landings principais

Por cluster:

- localizacao
- servicos
- experiencia
- blog

## 12.3 Queries prioritarias de acompanhamento

- psicologo em vitoria
- psicologo vitoria es
- psicologo jardim da penha
- psicoterapia individual vitoria
- terapia de casal vitoria
- terapia online vitoria
- psicologo ansiedade vitoria
- psicologo depressao vitoria

## 12.4 Metas de negocio e SEO

Metas de qualidade, nao promessas de ranking:

- consolidar landing principal local para `psicologo em Vitoria`
- aumentar CTR das paginas comerciais
- aumentar conversoes organicas para WhatsApp/agendamento
- reduzir dependencia de paginas informacionais amplas para gerar conversao

---

## 13. Criterios de aceite para considerar o site em nivel padrao-ouro

O projeto so deve ser considerado em padrao-ouro quando os itens abaixo estiverem verdadeiros:

### Entidade e consistencia

- 100% de consistencia entre nome, email, telefone, CEP, horario e modalidade em todo o site
- 100% de consistencia entre site, GBP e Doctoralia

### Arquitetura

- hub `/servicos/` publicado e indexavel
- hub `/experiencia/` ou equivalente publicado e indexavel
- breadcrumbs corrigidos para hubs reais
- zero links internos prioritarios passando por redirecionamento

### Semantica

- money pages com blocos-resposta curtos
- schema unificado com `@id` coerentes
- paginas de experiencia conectadas aos servicos certos

### Conteudo

- pagina de psicoterapia individual expandida e claramente dominante
- pagina de terapia de casal consolidada como secundaria
- cluster minimo de conteudo comercial/local publicado

### Medicao

- Search Console revisado quinzenalmente
- conversoes organicas rastreadas
- baseline documentado antes e depois das mudancas

### Performance

- CWV das paginas principais dentro de faixa saudavel
- HTML principal acessivel sem dependencia critica de JS

---

## 14. Plano de execucao recomendado

## Fase 1 - Correcao estrutural imediata (0 a 7 dias)

- unificar entidade, NAP, email, horario, CEP, reviews e duracao
- corrigir links internos `/blog/...`
- corrigir schema IDs quebrados
- corrigir pagina de contato e agendar para remover ruido institucional
- definir a landing principal de `psicologo em Vitoria`

## Fase 2 - Arquitetura e money pages (7 a 30 dias)

- criar `/servicos/`
- criar `/experiencia/` ou renomear o cluster
- reescrever home com hierarquia mais forte
- expandir `psicoterapia individual`
- expandir `terapia de casal`
- revisar `Vitoria` e `Jardim da Penha` como landings locais

## Fase 3 - Conteudo, AEO e distribuicao de autoridade (30 a 60 dias)

Objetivo da fase:

- transformar o blog em motor de suporte direto para `psicologo em Vitoria`, `psicoterapia individual em Vitoria` e `terapia de casal em Vitoria`;
- sair de uma logica apenas editorial e passar para uma logica de cluster com funcao comercial e local clara;
- operacionalizar AEO, E-E-A-T e GEO em cada nova publicacao.

Premissa operacional:

- a fase 2 ja entregou a base estrutural minima: hubs publicados, money pages principais no ar e landings locais prioritarias definidas;
- por isso, a fase 3 nao deve focar em "produzir conteudo em volume", mas em publicar conteudo que transfira autoridade para as paginas certas;
- os guias editoriais de `/blog-posts/` passam a fazer parte do escopo da fase 3 e devem ser tratados como manual oficial de execucao.

### Escopo editorial obrigatorio

Cada novo post estrategico desta fase deve seguir o seguinte padrao:

- abrir com validacao da experiencia do leitor, sem patologizacao;
- trazer um bloco-resposta logo no inicio, em linguagem direta, para responder a pergunta central;
- usar H2s e H3s com perguntas reais quando fizer sentido;
- incluir 3 a 5 FAQs reais e nao decorativas;
- incluir CTA final com links internos;
- conter no minimo 3 links internos contextuais no corpo;
- conter pelo menos 1 link externo autoritativo quando houver afirmacao clinica;
- incluir referencias bibliograficas quando o tema pedir mais lastro;
- registrar `lastReviewed` nos posts estrategicos e clinicamente sensiveis;
- contextualizar Vitoria, Jardim da Penha, UFES ou a realidade local quando isso ajudar a intencao da busca.

### Regras de entidade e consistencia

Esta fase precisa corrigir uma tensao importante dos materiais editoriais existentes:

- a entidade principal do ecossistema deve continuar sendo `Bernardo Carielo`, e nao `Arranjos Psicologia`;
- referencias externas a Arranjos so devem aparecer quando agregarem valor editorial real e sem competir com a entidade principal;
- nenhum guia interno deve incentivar auto-referencia externa que reabra ambiguidade de entidade;
- a bio, o schema, a revisao clinica e os CTAs devem reforcar o mesmo nome principal.

### Backlog prioritario da fase 3

Distribuicao recomendada para 30 a 60 dias:

- 3 posts de fundo de funil comercial;
- 2 posts locais com intencao transacional assistida;
- 1 post de apoio clinico com alto potencial de AEO.

Ordem sugerida:

1. `o que falar na primeira sessao de terapia`
2. `quanto tempo dura uma terapia`
3. `terapia presencial ou online: como escolher`
4. `terapia de casal em Vitoria: quando procurar`
5. `onde encontrar psicologo perto da UFES`
6. `por que escolher um psicologo em Jardim da Penha`

Racional:

- esses temas empurram o usuario para as paginas comerciais certas;
- cobrem objecoes reais de conversao;
- reforcam localidade sem criar doorway pages;
- aproveitam drafts e planos ja existentes no projeto.

### Reaproveitamento do acervo existente

Antes de abrir novas pautas, a fase 3 deve usar o que ja existe em `/blog-posts/plan` e `/blog-posts/drafts`.

Prioridades:

- converter drafts locais ja prontos ou semi-prontos em publicacoes finais;
- retroajustar posts antigos com resposta curta, CTA mais forte e linkagem interna mais disciplinada;
- revisar posts que ja ranqueiam ou tem boa aderencia semantica para apontarem melhor para `psicoterapia individual`, `terapia de casal` e `psicologo em Vitoria`.

### Regra de linkagem interna para esta fase

Os guias editoriais ja preveem diversidade de links, mas nesta fase a diversidade nao pode diluir a estrategia.

Regra pratica:

- todo post estrategico deve apontar para pelo menos 1 money page;
- todo post estrategico deve apontar para pelo menos 1 pagina local;
- a diversidade semantica continua valendo para links secundarios;
- o link principal deve refletir a intencao dominante do post.

Hierarquia preferencial:

- se o tema for individual, priorizar `/servicos/psicoterapia-individual/`;
- se o tema for relacional, priorizar `/servicos/terapia-de-casal/`;
- se o tema for local ou de escolha do profissional, priorizar `/localizacao/psicologo-vitoria-es/` e `/localizacao/psicologo-jardim-da-penha/`;
- se o tema for dor clinica, combinar pagina de experiencia + servico principal correto.

### Politica de revisao clinica e E-E-A-T

Nesta fase, `revisao clinica` deixa de ser recomendacao vaga e passa a ser criterio de publicacao para posts estrategicos.

Obrigatorio para:

- posts `Article`;
- posts sobre ansiedade, depressao, burnout, relacionamentos, luto, autoestima e temas semelhantes;
- posts com definicao conceitual forte ou orientacao psicoeducativa;
- posts que possam servir de resposta para IA generativa ou featured snippet.

Implementacao:

- preencher `lastReviewed` em `blog.ts`;
- usar `references` em `blogContent.ts` quando o tema for clinico ou tecnico;
- incluir fontes institucionais ou cientificas quando houver afirmacoes clinicas relevantes.

### Workflow editorial oficial da fase 3

Cada pauta deve seguir este fluxo:

1. escolher pauta no `/blog-posts/plan/`;
2. mapear 3 a 5 links internos com base em `how-to-link.md`;
3. redigir draft em `/blog-posts/drafts/` seguindo `how-to-content.md`;
4. preparar FAQ, CTA, links externos e referencias;
5. gerar imagem e `altText` coerentes com o slug;
6. publicar em `blog.ts` e `blogContent.ts`;
7. validar build, render, sitemap e integridade de encoding UTF-8;
8. mover o draft para `/blog-posts/draft-posted/`;
9. atualizar o plano de origem e o indice de linkagem.

Guardrail tecnico de publicacao:

- arquivos textuais do projeto devem ser editados e salvos em UTF-8 consistente;
- evitar regravacao de `.ts`, `.svelte` e `.md` por fluxo que possa reinterpretar UTF-8 como ANSI/Windows-1252;
- priorizar edicao via patch ou scripts que leiam e escrevam explicitamente em UTF-8;
- antes de publicar, revisar acentuacao e caracteres especiais em pelo menos: rodape, `/artigos/`, hub `/servicos/`, hub `/experiencia/`, pagina local envolvida e post novo.

### Metas operacionais da fase

Ao final da fase 3, o projeto deve ter:

- 6 novos posts estrategicos publicados;
- pelo menos 8 a 12 posts antigos retroajustados para o padrao AEO atual;
- 100% dos novos posts com FAQ, CTA e no minimo 3 links internos contextuais;
- 100% dos novos posts estrategicos apontando para money page e pagina local;
- 100% dos posts estrategicos clinicos com `lastReviewed`;
- posts tecnicos ou psicoeducativos com `references` consistentes.

### Criterios de aceite especificos da fase 3

A fase 3 so deve ser considerada concluida quando:

- o blog estiver ajudando explicitamente a empurrar autoridade para `psicoterapia individual`, `terapia de casal` e `psicologo em Vitoria`;
- os guias de `/blog-posts/` estiverem alinhados com a entidade principal do projeto;
- nao houver contradicao entre estrategia editorial, estrategia de entidade e estrategia local;
- o processo de publicacao estiver documentado e replicavel sem improviso;
- nao houver regressao de encoding, mojibake ou perda de acentuacao nas paginas atualizadas;
- houver baseline e acompanhamento das novas URLs no Search Console.

## Fase 4 - Autoridade externa e refinamento (60 a 90 dias)

- revisar GBP e Doctoralia
- padronizar citacoes externas
- estruturar processo de reviews
- acompanhar Search Console e ajustar titles/H1s/CTR

---

## 15. Riscos e armadilhas a evitar

- inflar schema sem correspondencia no conteudo
- criar muitas paginas locais sem diferenciacao real
- exagerar na repeticao de `psicologo em Vitoria` e perder naturalidade
- deixar servicos secundarios competirem com psicoterapia individual
- aumentar volume de conteudo sem reforcar links internos e intencao
- usar reviews ou contagens desatualizadas no site
- medir so ranking e ignorar conversao

---

## 16. Conclusao executiva

A versao v1 apontava a direcao correta. A versao v2 fecha o que faltava para chamar o projeto de padrao-ouro: especificacao tecnica, estrategia local completa, AEO, GEO, medicao, governanca e criterios de aceite.

O caminho de maior retorno continua o mesmo, mas agora esta operacionalizado:

1. consolidar a entidade principal;
2. eleger e fortalecer a landing de `psicologo em Vitoria`;
3. transformar `psicoterapia individual` na pagina comercial mais forte do site;
4. sustentar `terapia de casal` como segundo eixo;
5. usar paginas de experiencia e blog como cluster de apoio;
6. alinhar o ecossistema externo;
7. medir resultado com disciplina.

Se esses pontos forem executados com rigor, o site deixa de ser apenas bom em SEO e passa a operar num nivel realmente competitivo e proximo de padrao-ouro para o nicho e a geografia alvo.

