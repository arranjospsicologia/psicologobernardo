# Relatório de Análise Técnica e Editorial do Site

Data da análise: 2026-03-29

## Objetivo

Avaliar o site em seu estado atual sob a ótica de SEO, AEO, GEO, arquitetura de navegação, consistência editorial e confiança percebida, com foco em alcançar um padrão ouro de posicionamento sem comprometer a experiência do usuário, a ética profissional e a clareza clínica.

## Escopo analisado

- Home, Sobre, Contato, Agendar
- Hubs de Serviços, Experiência e Localização
- Páginas comerciais e localizadas principais
- Sistema editorial do blog
- Estrutura técnica de SEO, schema, sitemap, redirects e performance de build

## Validação técnica executada

- `npm run check`: OK, sem erros e sem warnings
- `npm run build`: OK, build concluído com sucesso

## Leitura executiva

O site já está acima da média para o nicho local de psicologia. Ele tem boa arquitetura por intenção, tom majoritariamente humano, diferenciação consistente entre presencial e online, sinais de confiança reais e uma base editorial robusta. O projeto não parece um site genérico de captação, e isso é uma vantagem competitiva importante.

Hoje, o principal gargalo para chegar ao padrão ouro não é falta de páginas. É refinamento. O site já tem volume, cobertura temática e boa estrutura. O que falta é elevar a consistência entre as áreas mais fortes e as áreas apenas "boas". Em especial:

- aproximar as páginas de experiência do nível humano e editorial dos melhores artigos;
- padronizar e aprofundar a camada de schema e entidade local nas páginas transacionais;
- eliminar pequenas inconsistências técnicas de URL, dados duplicados e prova social estática;
- fortalecer ainda mais E-E-A-T nas páginas comerciais, não só no blog.

## Base observada

- 48 artigos publicados
- 48 artigos com FAQ
- 48 artigos com `lastReviewed`
- 22 artigos com `references`
- 22 artigos com `schemaType: "Article"`
- 13 artigos com `locationScope`
- 10 artigos com `neighborhood`
- Distribuição editorial atual:
  - `saude-mental`: 22
  - `psicoterapia`: 14
  - `acp`: 8
  - `homens`: 4

## Pontos fortes

### 1. Arquitetura de intenção bem resolvida

O site organiza a jornada do usuário por quatro portas de entrada muito claras:

- serviço;
- experiência vivida;
- localização;
- contato/agendamento.

Isso é forte para SEO, AEO e UX ao mesmo tempo, porque reduz atrito e não força todo mundo a entrar pelo mesmo caminho.

### 2. Tom de voz, em geral, ético e humano

Na maior parte do site, especialmente home, localização, contato, hubs e artigos mais recentes, o texto transmite:

- acolhimento;
- sobriedade;
- clareza prática;
- convite calmo para o próximo passo.

O site, no geral, passa a sensação de espaço seguro e organizado, o que é central para este projeto.

### 3. GEO local bem ancorado em sinais reais

O site trabalha bem a dimensão local sem cair em página genérica de cidade. Os melhores sinais observados:

- Jardim da Penha como eixo geográfico real;
- referência recorrente à UFES;
- endereço completo e mapa;
- bairros e rotas de acesso;
- distinção clara entre presencial em Vitória e online;
- páginas locais com contexto urbano e logístico plausível.

Há uma boa escolha estratégica em manter poucas páginas locais fortes, em vez de multiplicar páginas fracas de bairro/cidade.

### 4. Base editorial robusta e relativamente madura

O blog já cumpre um papel importante de autoridade temática e captura de buscas informacionais. Os pontos mais fortes aqui:

- boa quantidade de conteúdo já publicada;
- uso consistente de FAQ;
- revisão clínica datada (`lastReviewed`);
- presença de referências formais em parte importante da base;
- bom uso de contexto local em vários artigos;
- linkagem interna relevante para serviço, localização e contato.

Os melhores artigos já estão próximos do padrão de "answer-first + acolhimento + profundidade".

### 5. Sinais técnicos de SEO estão bem implantados

O projeto já conta com uma base técnica sólida:

- canonical;
- Open Graph e Twitter Cards;
- sitemap dinâmico;
- `robots.txt`;
- redirects 301 para estrutura antiga;
- `trailingSlash = 'always'`;
- breadcrumbs;
- JSON-LD em páginas principais;
- imagens responsivas e otimizadas;
- headers de cache e segurança básicos.

Isso dá um bom alicerce de indexação e manutenção.

### 6. Conversão ética e baixa fricção

O fluxo de CTA está bem orientado para:

- WhatsApp como primeiro contato;
- agenda online como caminho secundário;
- explicação simples do que dizer na primeira mensagem;
- redução de ruído antes do agendamento.

O site convida, não pressiona. Isso é um ativo forte de marca.

### 7. Prova social e credibilidade institucional bem distribuídas

Há boa combinação entre:

- avaliações;
- CRP;
- links para CFP/CRP;
- página Sobre forte;
- fotos do consultório;
- identificação clara do profissional.

Esse conjunto reforça confiança local e credibilidade clínica.

## Pontos fracos

### 1. As páginas de experiência ainda estão abaixo do melhor nível editorial do site

As páginas de experiência como ansiedade e depressão ainda soam mais "keyword-first" do que "experiência-first". Elas funcionam, mas não estão no mesmo nível humano dos artigos mais fortes nem da home.

Sinais disso:

- H1s muito ancorados em fórmula de busca, como "Psicólogo para Ansiedade em Vitória ES";
- trechos mais genéricos e previsíveis;
- maior proximidade com linguagem de sintoma/lista do que com linguagem de vivência;
- menor sofisticação de AEO comparada aos melhores posts.

Isso não quebra o site, mas cria um desnível de qualidade entre áreas centrais.

### 2. A camada de schema está boa, mas não está coerente entre as páginas de maior intenção comercial

A home é a página mais completa em entidade local e organização. Já outras páginas estratégicas ficam mais rasas ou inconsistentes.

Exemplos observados:

- home com `ProfessionalService`/`LocalBusiness` bem estruturado;
- páginas de localização com schema mais simples do que poderiam ter;
- `agendar` usando outro tipo principal (`MedicalBusiness`);
- ausência de um padrão único de grafo para páginas transacionais.

Para padrão ouro, as páginas com maior intenção de contato precisam reforçar melhor a mesma entidade central do negócio.

### 3. Há inconsistência de URLs internas em relação à política de trailing slash

O projeto define `trailingSlash = 'always'`, mas parte dos links internos observados ainda aponta para URLs sem a barra final, inclusive em:

- listagens do blog;
- breadcrumbs dinâmicos;
- links internos de artigos;
- algumas páginas de hub.

Isso tende a gerar redirecionamentos internos desnecessários, dispersar um pouco os sinais e reduzir a limpeza da arquitetura indexável.

### 4. A camada GEO está parcialmente duplicada

Há um começo de centralização em `src/lib/data/locations.ts`, mas as páginas locais principais ainda mantêm muito conteúdo hardcoded diretamente nos arquivos Svelte.

Isso gera risco de:

- divergência editorial;
- manutenção mais lenta;
- inconsistência entre FAQ, artigos relacionados, bairros e mensagens de CTA.

Para um projeto que deve crescer com cuidado, isso merece correção.

### 5. Prova social relevante, mas estática
NÃO ALTERAR NADA SOBRE ESSE ITEM - SE A NOTA MUDAR, EU MESMO ALTERAREI O SITE

As avaliações e métricas de reputação dependem de dados estáticos:

- `reviewCount` fixo no código;
- nota média fixa;
- fallback da home com datas relativas hardcoded;
- componente de reviews exibindo `5.0` de forma fixa.

Isso é um ponto de fragilidade. Se as avaliações crescerem ou mudarem, o site pode transmitir um sinal desatualizado justamente em uma área sensível de confiança.

### 6. Parte das páginas comerciais faz afirmações fortes sem o mesmo suporte de referência visto no blog

O blog mais recente está melhor em referência, contexto e sustentação. Já algumas páginas comerciais e de experiência afirmam eficácia, segurança regulatória ou equivalência de modalidade sem sempre trazer apoio explícito na página.

Isso enfraquece E-E-A-T em conteúdo YMYL, especialmente para:

- terapia online;
- páginas de ansiedade/depressão;
- páginas de serviço voltadas a decisão.

### 7. Há alguma tensão entre ética editorial e copy de conversão em pontos isolados

O site, no geral, é ético. Mas alguns trechos ainda podem ser refinados para alinhar melhor com a proposta clínica.

Exemplos de linguagem que merecem suavização:

- "Pronto para começar sua jornada online?"
- "Agendar Agora"
- trechos muito orientados à lógica de benefício/facilidade sem a mesma densidade clínica do restante do site.

Não é um problema grave, mas para padrão ouro vale eliminar esse ruído.

### 8. Cobertura temática existe, mas ainda há desequilíbrio entre clusters

A cobertura de `saude-mental` e `psicoterapia` está bem mais desenvolvida do que:

- `homens`;
- algumas frentes citadas na página Sobre;
- temas relacionais e de decisão prática em páginas permanentes.

Isso não exige volume por volume, mas indica oportunidade de aprofundamento estratégico em clusters com alto potencial de autoridade e diferenciação.

## Melhorias a implementar no site

### Prioridade alta

#### 1. Reescrever as páginas de experiência no padrão dos melhores artigos

Objetivo:

- menos "página de termo";
- mais "página de reconhecimento da vivência".

Direção:

- abrir com resposta curta e humana;
- reduzir trechos genéricos de lista;
- usar mais linguagem de experiência real;
- conduzir com mais naturalidade para serviço, localização e contato.

Páginas prioritárias:

- `experiencia/ansiedade`
- `experiencia/depressao`
- `experiencia/burnout`
- `experiencia/autoestima`
- `experiencia/relacionamento`

#### 2. Padronizar o grafo de schema das páginas de alta intenção

Criar um padrão único para:

- `home`
- `servicos/*`
- `localizacao/*`
- `contato`
- `agendar`

Idealmente, essas páginas devem repetir com coerência:

- `WebPage`
- `BreadcrumbList`
- `Person`
- `ProfessionalService` ou entidade equivalente central
- `FAQPage`, quando houver
- relação explícita com organização/provedor/área atendida

#### 3. Corrigir consistência de URLs internas

Implementar revisão global para alinhar links internos com `trailingSlash = 'always'`.

Recomendado:

- corrigir os `href` sem slash final;
- revisar breadcrumbs dinâmicos;
- revisar links nos artigos;
- criar validação simples para impedir regressão futura.

#### 4. Centralizar de fato as páginas de localização

Migrar conteúdo duplicado das páginas locais principais para a camada `locations.ts` ou equivalente.

Benefícios:

- manutenção mais segura;
- escalabilidade editorial;
- menor risco de inconsistência entre FAQ, bairros, artigos relacionados e CTA.

#### 5. Tornar prova social mais confiável e sustentável

Recomendado:

- remover textos de fallback com datas relativas frágeis;
- deixar nota e contagem vindas da mesma fonte;
- atualizar `reviewCount` e rating com rotina definida;
- evitar números fixos em componente visual.

### Prioridade média

#### 6. Levar o padrão de E-E-A-T do blog para as páginas comerciais

Adicionar, onde fizer sentido:

- referência discreta a CFP, ACP ou base teórica;
- reforço de autoria e revisão;
- pequenos blocos de "quando faz sentido / o que esta página não substitui";
- maior explicitação de limites clínicos e enquadre.

#### 7. Refinar CTAs para máximo alinhamento ético

Substituir trechos mais comerciais por convites mais coerentes com a marca clínica.

Exemplo de direção:

- menos "agora", "pronto para começar";
- mais "quando fizer sentido", "se quiser", "podemos começar por uma conversa".

#### 8. Fortalecer linkagem interna por intenção, não só por categoria

Hoje a base já tem boa linkagem, mas ainda há espaço para uma malha mais estratégica:

- artigo -> serviço principal;
- artigo -> página de experiência relacionada;
- artigo -> página local, quando houver intenção GEO;
- artigo -> contato/agendar;
- páginas comerciais -> artigos de objeção e decisão.

O ideal é transformar isso em padrão editorial estável.

#### 9. Ajustar amplitude temática da página Sobre

A página Sobre hoje projeta uma abrangência clínica grande. Isso pode ser bom para autoridade, mas precisa casar com o restante da navegação.

Dois caminhos possíveis:

- reduzir levemente a amplitude declarada;
- ou criar páginas/pilares de apoio para as frentes mais importantes já mencionadas ali.

### Prioridade estratégica contínua

#### 10. Expandir clusters com maior potencial de autoridade real

Direções com boa aderência ao posicionamento do site:

- UFES, vida universitária e transição de vida;
- logística e continuidade do cuidado presencial;
- primeira sessão, dúvidas práticas e enquadre;
- terapia para homens com mais profundidade e consistência;
- relação entre rotina urbana de Vitória e sofrimento psíquico cotidiano.

Expansão recomendada:

- por artigos úteis;
- por conteúdo hipercontextual;
- sem doorway pages genéricas.

#### 11. Criar uma rotina editorial de atualização

Para sustentar padrão ouro, o site precisa de governança contínua:

- revisar páginas permanentes em ciclos fixos;
- atualizar contagem de avaliações e prova social;
- reavaliar snippets e H2 de resposta;
- acompanhar quais páginas merecem reforço de referências;
- revisar links internos quebrados ou despadronizados.

#### 12. Reforçar a camada de medição

Se o objetivo é excelência de posicionamento, a operação precisa ser guiada por dado.

Implementar rotina de leitura de:

- Search Console;
- Bing Webmaster Tools;
- páginas com maior CTR;
- páginas com boa impressão e baixo clique;
- páginas com cliques mas baixa progressão para contato.

## Conclusão

O site já tem base para performar bem e gerar confiança real. A direção editorial é correta, a estrutura é inteligente e o projeto já evita vários erros comuns do segmento.

O próximo salto não depende de fazer o site parecer mais "vendável". Depende de deixá-lo mais coerente, mais preciso e mais uniforme entre as áreas fortes e as áreas medianas.

Em resumo:

- a base já é forte;
- a home, as páginas locais e boa parte do blog estão muito bem posicionadas;
- as páginas de experiência e parte da camada técnica ainda precisam de lapidação;
- com padronização de schema, URLs, prova social e refinamento editorial, o site pode chegar a um nível realmente diferenciado no nicho.
