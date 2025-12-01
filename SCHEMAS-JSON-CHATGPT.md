# Relatório de Schemas JSON-LD

## Situação atual
- **Página inicial**: utiliza `LocalBusiness` + `ProfessionalService` com endereço, telefone, horário, geocoordenadas, reviews e `sameAs`; contém schema `Person` referenciando o serviço e `FAQPage` com as perguntas exibidas na seção FAQ. URLs, telefone, endereço e reviews aparecem no conteúdo visível ou em links de contato. 【F:index.html†L1727-L1833】【F:index.html†L1835-L1954】【F:index.html†L1481-L1529】
- **Página Sobre**: declara `Person` (Bernardo Carielo) com associação à Arranjos Psicologia, credenciais e contatos; breadcrumb presente. Os dados refletem o conteúdo da página (bio, contato e navegação). 【F:sobre.html†L64-L137】
- **Página Contato**: schema `ContactPage` com `ProfessionalService` incorporado, além de breadcrumb. Informações de telefone, e-mail, endereço e horários estão repetidas na página. 【F:contato.html†L64-L125】
- **Serviços individuais**: cada página de serviço usa `Service` com `ProfessionalService` como provedor e `BreadcrumbList`; dados de telefone, endereço e URLs correspondem aos botões e seções da página. Exemplo: Psicoterapia Individual. 【F:servicos/psicoterapia-individual.html†L53-L94】
- **Posts do blog**: cada post utiliza `BlogPosting` com publisher, autor e breadcrumb. Títulos, descrições, imagens e datas correspondem ao conteúdo textual e metadados. Exemplo: "Ansiedade: os sinais de que talvez seja hora de desacelerar". 【F:posts/ansiedade-sinais-desacelerar.html†L62-L102】
- **Localização**: páginas de localização incluem breadcrumbs (e schema adicional, não detalhado aqui) coerentes com navegação. 【F:localizacao/psicologo-jardim-da-penha.html†L584-L591】
- **Blog index**: página `blog.html` inclui schema `CollectionPage` com breadcrumb, adequado à listagem de artigos. 【F:blog.html†L20-L23】

## Recomendações com conteúdo já disponível
- **`Organization` separado para Arranjos Psicologia**: criar JSON-LD específico para a empresa (nome, URL, logotipo, contato) para diferenciá-la da marca pessoal, aproveitando dados já presentes (trabalha na Arranjos, e-mail institucional, canal do YouTube). 【F:sobre.html†L74-L113】【F:index.html†L1946-L1954】
- **`WebSite` + `WebPage`**: adicionar schemas globais com `potentialAction` de pesquisa interna (mesmo que sem engine, usar URL de busca do blog) e `inLanguage`, reforçando identidade do site. Basear URLs/títulos já configurados nas páginas principais. 【F:index.html†L1733-L1747】
- **`SiteNavigationElement`**: marcar menu principal e rodapé com itens existentes para ajudar rich snippets de sitelinks; links já presentes em todas as páginas. 【F:index.html†L1531-L1711】
- **`BreadcrumbList` coerente no home**: replicar breadcrumbs nas páginas que ainda não têm (ex.: home/landing) usando as estruturas já usadas em serviços e blog. 【F:index.html†L1481-L1529】
- **`FAQPage` estruturado por seção**: manter FAQ atual e replicar nas páginas de serviço onde perguntas frequentes aparecem em texto, reforçando rich results. 【F:index.html†L1481-L1529】

## Recomendações que exigem novo conteúdo
- **`MedicalWebPage`/`MedicalClinic` (ou `HealthAndBeautyBusiness`) para a empresa**: definir claramente a natureza jurídica e especialidade da Arranjos Psicologia (CNPJ, logotipo, descrição institucional, horário próprio) para criar schema empresarial separado do profissional.
- **`LocalBusiness` específico para Arranjos Psicologia**: caso o consultório seja marca da empresa, inserir dados comerciais próprios (razão social, CNPJ, formas de pagamento) distintos do perfil do profissional.
- **`VideoObject`**: publicar vídeos (por exemplo, do YouTube Arranjos Psicologia) incorporados nas páginas para marcar com título, descrição, duração e thumbnail, ampliando presença em rich snippets.
- **`Review`/`AggregateRating` verificados**: incluir fonte e URL de cada avaliação (Google/Doctoralia) ou coletar novas avaliações atribuídas à empresa, permitindo schema separado para Arranjos.
- **`Event`**: se houver grupos, rodas ou workshops, adicionar datas, local e inscrição; schemas de evento podem gerar resultados aprimorados.

## Dados pendentes para preenchimento
- Confirmação do **CNPJ** e razão social da Arranjos Psicologia para criar `Organization`/`LocalBusiness` dedicado.
- **Logotipo** oficial e cores da Arranjos para diferenciar visualmente no schema.
- **URLs de busca interna** (se houver) ou decisão de usar pesquisa externa customizada para o `WebSite`.
- **Fonte/fonte de prova das reviews** (links ou capturas) para validar `Review` e associar à empresa ou ao profissional.
- **Agenda de eventos/grupos** (títulos, datas, locais, links de inscrição) caso queira aproveitar `Event`.
- **Lista de vídeos** com título, descrição, duração e thumbnail para `VideoObject`.
