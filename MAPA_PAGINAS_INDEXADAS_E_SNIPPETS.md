# Mapa de Páginas Indexadas, Snippets e Sinais Invisíveis

## Escopo

Este documento lista as páginas **indexáveis/indexadas** do site com:

- URL
- título SEO
- meta description
- sinais invisíveis que apontam relevância para a página

## Observações gerais

- As páginas legais `/politica-privacidade/` e `/termos-uso/` não entram neste inventário porque estão fora do sitemap e tratadas como páginas não prioritárias para indexação.
- Quase todas as páginas usam o componente `SEO.svelte`, que aplica por padrão:
  - `robots=index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1`
  - canonical absoluta
  - Open Graph
  - Twitter Card
- A maior parte das páginas também usa breadcrumb visual e/ou schema JSON-LD.

---

## 1. Páginas Institucionais e Comerciais

### Sinais invisíveis compartilhados nesta seção
- canonical própria
- robots index/follow
- Open Graph e Twitter Card
- dados estruturados específicos por página
- navegação principal do site apontando para estas URLs

| URL | Título SEO | Meta description | Sinais invisíveis principais |
| --- | --- | --- | --- |
| `/` | Psicólogo em Vitória ES – Jardim da Penha \| Bernardo Carielo | Psicólogo em Vitória ES, no Jardim da Penha. Atendimento presencial e online pela Abordagem Centrada na Pessoa. 8+ anos de experiência. Agende sua consulta. | `WebSite`, `WebPage`, `Person`, `ProfessionalService`, `LocalBusiness`, `FAQPage`, aggregateRating, endereço, geo, opening hours. |
| `/agendar/` | Agendar consulta \| Bernardo Carielo Psicólogo em Vitória ES | Agende sua consulta com psicólogo em Vitória ES. Atendimento presencial e online com Bernardo Carielo, com agenda online e WhatsApp para tirar dúvidas antes da primeira sessão. | `MedicalBusiness` + `FAQPage`, aggregateRating, dados de contato e endereço. |
| `/contato/` | Contato – Psicólogo Bernardo Carielo \| Vitória ES e Online | Entre em contato com Bernardo Carielo, psicólogo em Vitória ES. Atendimento presencial em Jardim da Penha e online para todo o Brasil. WhatsApp {siteProfile.phoneDisplay}. | `ContactPage`, endereço, mapa incorporado, CTA para WhatsApp e agenda. |
| `/sobre/` | Sobre Bernardo Carielo – Psicólogo em Vitória ES \| Abordagem Centrada na Pessoa | Conheça Bernardo Carielo (CRP 16/5527), psicólogo clínico em Vitória ES, especialista em Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online para todo o Brasil. | `WebPage` + `Person`, formação, alumni, sameAs, CRP, worksFor. |
| `/servicos/` | Serviços de Psicologia em Vitória ES \| Bernardo Carielo | Conheça os serviços de psicologia oferecidos por Bernardo Carielo em Vitória ES e online, com destaque para psicoterapia individual e terapia de casal. | `WebPage` + `ItemList`, hub comercial, links hierárquicos para serviços principais. |
| `/servicos/psicoterapia-individual/` | Psicoterapia Individual em Vitória ES \| Bernardo Carielo | Psicoterapia individual em Vitória ES, em Jardim da Penha, e online. Entenda como funciona, quando faz sentido e o que esperar da primeira sessão. | `WebPage` + `Service` + `FAQPage`, offer, areaServed, página principal de serviço. |
| `/servicos/terapia-de-casal/` | Terapia de Casal em Vitória ES \| Bernardo Carielo | Terapia de casal em Vitória ES e online. Entenda quando procurar, como funciona e o que esperar das primeiras sessões. | `WebPage` + `Service` + `FAQPage`, intenção relacional clara. |
| `/servicos/terapia-online/` | Terapia Online \| Atendimento para todo o Brasil e Exterior | Psicoterapia online pela Abordagem Centrada na Pessoa. Mesma qualidade e ética do atendimento presencial, com flexibilidade e segurança. Autorizada pelo CFP. | `WebPage` + `Service` + `ServiceChannel` + `FAQPage`. |
| `/servicos/grupos-e-rodas/` | Grupos e Rodas de Conversa \| Partilha e Diálogo em Vitória e Online | Espaços coletivos de escuta e acolhimento pela Abordagem Centrada na Pessoa. Roda Entre Homens e grupos para profissionais de psicologia. Participe. | `WebPage` + `Service` + `FAQPage`. |
| `/servicos/laudos-psicologicos/` | Laudos Psicológicos em Vitória \| Avaliações Éticas e Seguras | Emissão de laudos psicológicos para cirurgia bariátrica, vasectomia e laqueadura. Avaliação técnica e ética conduzida por psicólogo em Vitória - ES. | `WebPage` + `Service` + `FAQPage`. |
| `/servicos/supervisao-profissional/` | Supervisão Profissional em ACP \| Vitória e Online | Reflexão sobre a prática clínica para psicólogos e estudantes. Espaço de cuidado e desenvolvimento de identidade na Abordagem Centrada na Pessoa. | `WebPage` + `Service` + `FAQPage`. |
| `/experiencia/` | Como Posso Ajudar \| Bernardo Carielo Psicólogo em Vitória ES | Veja em quais contextos a psicoterapia pode ajudar: ansiedade, depressão, burnout, autoestima e relacionamentos. Atendimento presencial em Vitória e online. | `WebPage` + `ItemList`, hub de dores/contextos. |
| `/experiencia/ansiedade/` | Psicólogo para Ansiedade em Vitória ES – Acolhimento Humanizado | Psicólogo para ansiedade em Vitória ES. Acolhimento humanizado com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online. | `WebPage` + `Service` + `FAQPage`. |
| `/experiencia/depressao/` | Psicólogo para Depressão em Vitória ES – Acolhimento e Escuta | Psicólogo para depressão em Vitória ES. Acolhimento humanizado com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online. | `WebPage` + `Service` + `FAQPage`. |
| `/experiencia/burnout/` | Psicólogo para Burnout em Vitória ES – Síndrome de Esgotamento Profissional | Psicólogo para burnout em Vitória ES. Acompanhamento para esgotamento profissional com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online. | `WebPage` + `Service` + `FAQPage`. |
| `/experiencia/relacionamento/` | Psicólogo para Dificuldades de Relacionamento em Vitória ES | Psicólogo para dificuldades de relacionamento em Vitória ES. Terapia para conflitos, comunicação e padrões que se repetem. Atendimento presencial em Jardim da Penha e online. | `WebPage` + `Service` + `FAQPage`. |
| `/experiencia/autoestima/` | Psicólogo para Autoestima em Vitória ES – Você Merece se Sentir Bem | Psicólogo para autoestima em Vitória ES. Você merece se sentir bem com você mesmo! Acolhimento humanizado com a Abordagem Centrada na Pessoa. | `WebPage` + `Service` + `FAQPage`. |
| `/artigos/` | Artigos - Psicólogo Bernardo \| Bernardo Carielo | Artigos sobre saúde mental, psicologia e bem-estar por Bernardo Carielo, psicólogo em Vitória/ES - CRP 16/5527 | `CollectionPage`, hub editorial do blog. |

---

## 2. Páginas de Localização

### Sinais invisíveis compartilhados nesta seção
- canonical própria por cidade/bairro
- JSON-LD com `WebPage` e `FAQPage`
- forte presença de endereço, bairro, mapas, áreas atendidas e links cruzados
- reforço de intenção local por proximidade, deslocamento e bairros relacionados

| URL | Título SEO | Meta description | Sinais invisíveis principais |
| --- | --- | --- | --- |
| `/localizacao/` | Localização do Consultório e Regiões Atendidas \| Bernardo Carielo | Endereço do consultório em Jardim da Penha, Vitória (ES). Atendimento presencial para toda a Grande Vitória e online para todo o Brasil. Psicólogo Bernardo Carielo. | hub local; `buildLocationJsonLd`; mapa; cards de regiões atendidas. |
| `/localizacao/psicologo-vitoria-es/` | Psicólogo em Vitória ES \| Bernardo Carielo | Psicólogo em Vitória ES, com consultório em Jardim da Penha e atendimento online. Veja como funciona a psicoterapia individual e a terapia de casal. | `WebPage` + `FAQPage`; intenção cidade; mapa; bairros; links para serviços. |
| `/localizacao/psicologo-jardim-da-penha/` | Psicólogo em Jardim da Penha \| Bernardo Carielo | Psicólogo em Jardim da Penha, Vitória (ES). Consultório em frente à UFES. Atendimento presencial e online para ansiedade, depressão e relacionamentos. | `WebPage` + `FAQPage`; hiperlocal; UFES; endereço forte; mapa; bairros próximos. |
| `/localizacao/psicologo-praia-do-canto/` | Psicólogo próximo a Praia do Canto – Vitória ES \| Bernardo Carielo | Atendimento psicológico para moradores de Praia do Canto e bairros próximos. Consultório em Jardim da Penha, bairro vizinho. Psicoterapia pela Abordagem Centrada na Pessoa. | `buildLocationJsonLd`; proximidade geográfica; interlinking local; FAQ própria. |
| `/localizacao/psicologo-mata-da-praia/` | Psicólogo próximo a Mata da Praia - Vitória ES \| Bernardo Carielo | Atendimento psicológico para moradores de Mata da Praia e bairros próximos. Consultório em Jardim da Penha, bairro vizinho. Psicoterapia pela Abordagem Centrada na Pessoa. | `buildLocationJsonLd`; região vizinha; FAQ própria; mapas e links cruzados. |
| `/localizacao/psicologo-vila-velha/` | Psicólogo para Vila Velha – Atendimento Presencial e Online \| Bernardo Carielo | Atendimento psicológico para moradores de Vila Velha. Consultório em Jardim da Penha, Vitória, do outro lado da Terceira Ponte. Também atendo online. Psicoterapia pela Abordagem Centrada na Pessoa. | `buildLocationJsonLd`; deslocamento via ponte; FAQ própria; CTA híbrido presencial/online. |
| `/localizacao/psicologo-serra-es/` | Psicólogo para Serra ES – Atendimento Presencial e Online \| Bernardo Carielo | Atendimento psicológico para moradores de Serra ES. Consultório em Jardim da Penha, Vitória, com fácil acesso. Também atendo online. Psicoterapia pela Abordagem Centrada na Pessoa. | `buildLocationJsonLd`; intenção regional; FAQ própria; deslocamento e online como apoio. |

---

## 3. Páginas de Categoria Editorial

### Sinais invisíveis compartilhados nesta seção
- template dinâmico de categoria
- `CollectionPage`
- canonical própria por categoria
- breadcrumb simples
- lista de artigos da categoria

| URL | Título SEO | Meta description | Sinais invisíveis principais |
| --- | --- | --- | --- |
| `/saude-mental/` | Saúde Mental - Artigos \| Psicólogo Bernardo | Artigos sobre ansiedade, estresse, emoções e bem-estar psicológico | `CollectionPage`; categoria temática. |
| `/acp/` | Abordagem Centrada na Pessoa - Artigos \| Psicólogo Bernardo | Artigos sobre a ACP, Carl Rogers e psicoterapia humanista | `CollectionPage`; cluster de abordagem. |
| `/homens/` | Terapia para Homens - Artigos \| Psicólogo Bernardo | Artigos sobre masculinidades, emoções e saúde mental masculina | `CollectionPage`; cluster de público. |
| `/psicoterapia/` | Psicoterapia - Artigos \| Psicólogo Bernardo | Artigos sobre o processo terapêutico, modalidades e dúvidas comuns | `CollectionPage`; cluster de intenção terapêutica. |
| `/jardim-da-penha/` | Jardim da Penha - Artigos \| Psicólogo Bernardo | Artigos sobre saúde mental em Jardim da Penha, UFES e região | `CollectionPage`; cluster hiperlocal. |
| `/vitoria-es/` | Vitória ES - Artigos \| Psicólogo Bernardo | Artigos sobre psicologia e saúde mental em Vitória, Espírito Santo | `CollectionPage`; cluster local amplo. |

---

## 4. Páginas de Artigo

### Sinais invisíveis compartilhados nesta seção
- título SEO segue o padrão: `Título do post - Psicólogo Bernardo`
- canonical própria por URL
- JSON-LD com:
  - `BreadcrumbList`
  - `WebPage`
  - `Article` ou `BlogPosting`
  - `FAQPage` quando houver FAQ
- autor e publisher estruturados
- `lastReviewed` em grande parte do acervo
- `citation` quando o conteúdo possui referências
- `contentLocation` quando o artigo é identificado como local

| URL | Título SEO | Meta description | Sinais invisíveis principais |
| --- | --- | --- | --- |
| `/jardim-da-penha/parque-pedra-cebola-terapia-natural/` | Parque Pedra da Cebola e saúde mental: como usar a natureza como apoio fora do consultório - Psicólogo Bernardo | Entenda como o Parque Pedra da Cebola pode funcionar como recurso complementar de regulação emocional, descanso cognitivo e reconexão com o corpo em Vitória. | `Article`; cluster local Jardim da Penha; breadcrumb; FAQ/referências quando houver. |
| `/jardim-da-penha/medo-urbano-seguranca-jardim-da-penha/` | Medo urbano em Jardim da Penha: como lidar com a sensação de insegurança sem deixar a vida encolher - Psicólogo Bernardo | Entenda a diferença entre prudência e evitação por medo, e veja quando a sensação de insegurança em Vitória começa a limitar deslocamentos, encontros e rotina. | `Article`; cluster local Jardim da Penha. |
| `/jardim-da-penha/barulho-rua-da-lama-insonia/` | Barulho e insônia na Rua da Lama: como proteger seu sono morando em áreas boêmias - Psicólogo Bernardo | Entenda por que o barulho noturno em Jardim da Penha pode piorar irritabilidade, cansaço e insônia, e veja medidas práticas para proteger o sono e buscar ajuda quando isso começa a pesar. | `Article`; cluster local Jardim da Penha. |
| `/jardim-da-penha/calouro-vitoria-solidao-estudante/` | Calouro em Vitória: como lidar com a solidão longe de casa - Psicólogo Bernardo | Entenda por que a adaptação a Vitória e à UFES pode vir acompanhada de solidão, saudade e não pertencimento, e veja quando a psicoterapia pode ajudar nesse começo. | `Article`; intenção local/universitária. |
| `/jardim-da-penha/sindrome-impostor-ufes/` | Síndrome do impostor na UFES: por que você sente que não merece estar lá? - Psicólogo Bernardo | Entenda como a síndrome do impostor aparece na vida universitária da UFES, por que a comparação acadêmica pesa tanto e quando a terapia pode ajudar a sustentar seu lugar. | `Article`; cluster UFES/local. |
| `/jardim-da-penha/por-que-escolher-um-psicologo-em-jardim-da-penha/` | Por que escolher um psicólogo em Jardim da Penha? A logística também influencia a continuidade - Psicólogo Bernardo | Entenda por que escolher psicólogo em Jardim da Penha pode facilitar a adesão ao processo terapêutico, especialmente para quem mora, estuda ou trabalha na região da UFES e de Vitória. | `Article`; forte intenção local/comercial. |
| `/jardim-da-penha/onde-encontrar-psicologo-perto-da-ufes/` | Onde encontrar psicólogo perto da UFES? O que faz sentido olhar além da proximidade - Psicólogo Bernardo | Se você estuda, trabalha ou circula pela UFES, entenda como procurar psicólogo perto da universidade com critérios práticos e éticos, considerando Jardim da Penha, logística e tipo de atendimento. | `Article`; cluster UFES/comercial. |
| `/jardim-da-penha/custo-vida-jardim-da-penha-ansiedade/` | Aluguel, Condomínio e Ansiedade: o peso do custo de vida em Jardim da Penha na saúde mental - Psicólogo Bernardo | O impacto da ansiedade financeira em quem mora em Jardim da Penha. Entenda como o alto custo de vida (aluguel, condomínio) afeta a saúde mental e o que fazer para se proteger. | `Article`; cluster local Jardim da Penha. |
| `/jardim-da-penha/terapia-para-estudantes-ufes-vitoria/` | Terapia para Estudantes e Universitários em Vitória (UFES) - Psicólogo Bernardo | Psicoterapia para estudantes e universitários em Vitória (UFES). Ansiedade acadêmica, pressão, futuro profissional e um consultório em frente à universidade, em Jardim da Penha. | `Article`; intenção local e comercial. |
| `/jardim-da-penha/onde-cuidar-saude-mental-jardim-da-penha/` | Onde cuidar da Saúde Mental em Jardim da Penha e Região (Vitória – ES) - Psicólogo Bernardo | Guia local de saúde mental em Jardim da Penha e região: praças, parques, orla de Camburi, UFES, UBS e rede de apoio. Dicas práticas para descompressão em Vitória (ES). | `Article`; guia local; possível `citation`/FAQ. |
| `/vitoria-es/terapia-de-casal-em-vitoria-quando-procurar/` | Terapia de casal em Vitória: quando procurar ajuda para a relação? - Psicólogo Bernardo | Entenda quando a terapia de casal faz sentido, quais sinais costumam aparecer antes de uma crise maior e como funciona esse cuidado em Vitória, com consultório em Jardim da Penha. | `Article`; cluster local Vitória. |
| `/vitoria-es/rede-apoio-saude-mental-vitoria-es/` | Rede de apoio em Vitória (ES): onde encontrar ajuda além do consultório? - Psicólogo Bernardo | Saúde mental não se faz sozinho. Conheça os espaços públicos, grupos e serviços gratuitos de atendimento psicológico disponíveis em Vitória (ES). | `Article`; cluster local Vitória; apoio comunitário. |
| `/vitoria-es/como-escolher-psicologo-em-vitoria-es/` | Como escolher um psicólogo em Vitória (ES): guia prático e seguro - Psicólogo Bernardo | Aprenda como escolher um psicólogo em Vitória (ES) com critérios éticos e práticos: CRP, abordagem, localização (Jardim da Penha, UFES) e relação terapêutica. | `Article`; cluster local/comercial. |
| `/psicoterapia/terapia-presencial-ou-online-como-escolher/` | Terapia presencial ou online: qual é melhor para mim? - Psicólogo Bernardo | Compare terapia presencial e online de um jeito prático. Entenda o que realmente pesa na escolha e como decidir o formato mais sustentável para o seu processo. | `Article`; cluster psicoterapia. |
| `/psicoterapia/o-que-falar-na-primeira-sessao-de-terapia/` | O que falar na primeira sessão de terapia? Como começar sem precisar chegar pronto - Psicólogo Bernardo | Entenda o que você pode levar para a primeira sessão de terapia, o que costuma ajudar nesse começo e por que não existe um jeito certo de falar de si no primeiro encontro. | `Article`; cluster primeira sessão. |
| `/psicoterapia/quanto-tempo-dura-uma-terapia/` | Quanto tempo dura uma terapia? O que realmente define a duração do processo - Psicólogo Bernardo | Entenda quanto tempo uma terapia costuma durar, o que influencia esse percurso e como construir expectativas realistas ao começar psicoterapia em Vitória or online. | `Article`; cluster psicoterapia. |
| `/psicoterapia/esperar-piorar-sai-mais-caro/` | Por que você não precisa esperar piorar para fazer terapia - Psicólogo Bernardo | Você não precisa estar em crise para buscar terapia. O cuidado preventivo com a saúde mental evita que o desgaste acumulado se transforme em colapso. | `Article`; cluster psicoterapia. |
| `/psicoterapia/terapia-sem-respostas-prontas/` | Por que a terapia não tem respostas prontas (e como isso pode ser frustrante e transformador) - Psicólogo Bernardo | A terapia não dá conselhos nem resolve problemas por você. Entenda por que isso acontece e como a escuta genuína transforma mais do que qualquer resposta pronta. | `Article`; cluster psicoterapia. |
| `/psicoterapia/o-silencio-na-terapia/` | O Silêncio na Terapia: Por que ele é tão importante? - Psicólogo Bernardo | Muitas vezes mal compreendido, o silêncio na terapia não é vazio. É um espaço de processamento e autonomia. Entenda por que ele é vital para o seu crescimento. | `Article`; cluster psicoterapia. |
| `/psicoterapia/como-funciona-terapia-primeira-sessao/` | Como funciona a terapia: o que esperar da primeira sessão (e das próximas) - Psicólogo Bernardo | Nunca fez terapia e não sabe o que esperar? Entenda como funciona o processo terapêutico, o que acontece na primeira sessão e por que não existe um jeito certo de fazer. | `Article`; cluster psicoterapia. |
| `/psicoterapia/terapia-online-funciona/` | Terapia Online Funciona? Evidências e experiência clínica explicadas de forma simples - Psicólogo Bernardo | O que a prática e a ciência mostram sobre os atendimentos online — e como saber se é para você. | `Article`; cluster modalidade. |
| `/psicoterapia/trabalho-interno-vs-performance/` | Trabalho interno x performance: como medir 'resultado'? - Psicólogo Bernardo | Em saúde mental, 'resultado' raramente cabe em números. Às vezes, é poder dizer 'não', dormir melhor, ou chorar sem se punir. | `Article`; cluster psicoterapia/reflexão. |
| `/homens/masculinidade-saudavel-redpill-falacias-digitais/` | Masculinidade e Redpill: Por que Discursos Fáceis Seduzem (e o que a Psicologia Real Diz) - Psicólogo Bernardo | Entenda por que discursos 'Redpill' seduzem homens em sofrimento e como a psicologia, através do memorando de Moynihan e diretrizes da APA, desmascara falácias como a 'negligência benigna'. | `Article`; cluster homens; alta densidade técnica. |
| `/homens/preco-psiquico-nunca-depender-ninguem/` | O preço psíquico de nunca depender de ninguém - Psicólogo Bernardo | Você aprendeu que homem de verdade resolve tudo sozinho. Mas a autossuficiência radical tem um custo: solidão, exaustão e a sensação de nunca ser realmente conhecido. | `Article`; cluster homens. |
| `/homens/vicio-trabalho-workaholic-burnout/` | Vício em trabalho: quando o sucesso vira prisão - Psicólogo Bernardo | O vício em trabalho (workaholism) é mais do que trabalhar muito. É uma compulsão que afeta saúde, relacionamentos e identidade. Entenda os sinais e como sair desse ciclo. | `Article`; cluster homens/burnout. |
| `/homens/terapia-para-homens/` | Por que é tão difícil para muitos homens falar sobre o que sentem - Psicólogo Bernardo | Entenda como a terapia pode ajudar homens a lidarem com emoções, relacionamentos e pressões sem precisar dar conta de tudo sozinho. | `Article`; cluster homens. |
| `/saude-mental/intelectualizar-nao-sentir/` | Intelectualizar tudo também é um jeito de não sentir - Psicólogo Bernardo | Você analisa, explica, entende tudo sobre o que sente, mas nada se move. A intelectualização é um mecanismo de defesa que substitui o sentir pelo pensar. Entenda como isso funciona e o que muda quando você se permite sentir. | `Article`; cluster saúde mental. |
| `/saude-mental/comunicacao-honesta-conversas-dificeis/` | Por que a comunicação honesta é tão difícil (e tão necessária) nas conversas que mais importam - Psicólogo Bernardo | Dizer o que sentimos com honestidade e ouvir o outro com genuinidade é raro, mas transforma relações. Entenda por que evitamos conversas difíceis e como uma comunicação mais expressiva fortalece vínculos. | `Article`; cluster saúde mental/relacionamentos. |
| `/saude-mental/contradicoes-ideologicas-capitalismo-ia/` | Quando seus valores não cabem no mundo: o sofrimento de viver contra a corrente - Psicólogo Bernardo | Viver em contradição com os próprios valores gera exaustão e solidão. Entenda o sofrimento de quem questiona o capitalismo e a IA, mas precisa sobreviver dentro deles. | `Article`; cluster saúde mental/reflexão. |
| `/saude-mental/vida-dando-certo-piorando-por-dentro/` | Quando a vida está "dando certo", mas você está piorando por dentro - Psicólogo Bernardo | Você conquistou tudo o que buscava, mas ainda se sente vazio. Entenda o paradoxo do sucesso externo e sofrimento interno - e por que isso não é ingratidão. | `Article`; cluster saúde mental/reflexão. |
| `/saude-mental/vinculos-liquidos-intimidade-digital/` | Vínculos líquidos na era digital: como recuperar a intimidade real - Psicólogo Bernardo | Você está mais conectado do que nunca, mas ainda se sente só? Entenda o que são vínculos líquidos e como cultivar relações mais profundas e autênticas. | `Article`; cluster saúde mental/relacionamentos. |
| `/saude-mental/ciumes-excessivo-cuidado-controle/` | Ciúmes excessivo: quando o cuidado vira controle e sufoca a relação - Psicólogo Bernardo | O ciúmes excessivo nasce da insegurança e pode transformar amor em controle. Entenda os sinais, a visão da ACP sobre posse e como a terapia pode ajudar. | `Article`; cluster saúde mental/relacionamentos. |
| `/saude-mental/estresse-desgaste-emocional/` | Quando o estresse vira desgaste emocional: por que estamos tão cansados? - Psicólogo Bernardo | Diferenciando o estresse saudável do estresse contínuo — e o impacto no corpo e na mente. | `Article`; cluster saúde mental. |
| `/saude-mental/obrigacao-estar-bem/` | A obrigação de estar bem: como o capitalismo transforma emoções em produtos - Psicólogo Bernardo | Por que acreditar que precisamos ser felizes o tempo todo adoece — e o que a ACP mostra sobre isso. | `Article`; cluster saúde mental/reflexão. |
| `/saude-mental/vida-acelerou-demais/` | A vida acelerou demais: o que perdemos quando não temos tempo para sentir - Psicólogo Bernardo | Um olhar sobre a aceleração social e a perda de presença no cotidiano. | `Article`; cluster saúde mental/reflexão. |
| `/saude-mental/nao-somos-maquinas/` | Não somos máquinas: o mito da produtividade infinita e o esgotamento do humano - Psicólogo Bernardo | Por que tentar render cada vez mais nos desconecta de quem realmente somos. | `Article`; cluster saúde mental/reflexão. |
| `/saude-mental/quando-automatico-vira-modo-de-vida/` | Quando o 'automático' vira modo de vida - Psicólogo Bernardo | Viver no automático economiza energia — até que custa caro. O convite aqui é desacelerar o olhar e reaprender preferências. | `Article`; cluster saúde mental. |
| `/saude-mental/ansiedade-sinais-desacelerar/` | Ansiedade: os sinais de que talvez seja hora de desacelerar - Psicólogo Bernardo | Saiba como reconhecer os sinais de ansiedade e o que o corpo tenta comunicar quando o ritmo de vida se torna insustentável. | `Article`; cluster saúde mental/ansiedade. |
| `/saude-mental/corpo-e-emocoes/` | Corpo e emoções: o que o corpo revela quando a mente cala - Psicólogo Bernardo | Uma reflexão sobre como o corpo expressa o que muitas vezes não conseguimos dizer em palavras e sobre o papel da terapia na reconexão entre corpo e emoção. | `Article`; cluster saúde mental/corpo. |
| `/saude-mental/crises-existenciais/` | Crises existenciais: quando a vida parece perder o sentido - Psicólogo Bernardo | Reflexões sobre o que acontece quando antigas certezas deixam de fazer sentido e a importância de acolher os momentos de crise como oportunidades de transformação. | `Article`; cluster saúde mental/reflexão. |
| `/acp/autonomia-vai-te-fazer-bem/` | Por que a autonomia vai te fazer bem? - Psicólogo Bernardo | Autonomia é a capacidade de se guiar pela própria experiência. Entenda por que a terapia não-diretiva devolve esse poder e como a ACP pensa a autonomia como caminho de conexão consigo. | `Article`; cluster ACP. |
| `/acp/relacao-principal-ferramenta-terapia/` | Por que a Relação é a principal ferramenta da terapia? - Psicólogo Bernardo | A técnica não é o que mais cura em terapia. Descubra por que a relação terapêutica, baseada em empatia, aceitação e autenticidade, é a principal ferramenta de mudança. | `Article`; cluster ACP. |
| `/acp/aceitacao-incondicional/` | Aceitação Incondicional: aprendendo a se acolher (mesmo com os defeitos) - Psicólogo Bernardo | A aceitação incondicional não é passividade. Entenda como aprender a se acolher, com suas luzes e sombras, transforma a relação consigo mesmo. | `Article`; cluster ACP. |
| `/acp/seis-condicoes-carl-rogers/` | As Seis Condições Necessárias e Suficientes para a Mudança Terapêutica: O Legado de Carl Rogers - Psicólogo Bernardo | Carl Rogers afirmou que são necessárias seis condições para a mudança terapêutica. Entenda o que são as condições centrais (empatia, aceitação, congruência) e as ocultas. | `Article`; cluster ACP; conteúdo técnico forte. |
| `/acp/carl-rogers-revolucao-humanista/` | Carl Rogers e a revolução humanista: colocando a pessoa no centro do cuidado - Psicólogo Bernardo | Durante muito tempo, a psicologia olhou para o ser humano como um 'paciente'. Carl Rogers mudou isso. Entenda a revolução humanista e como ela coloca você no centro do cuidado. | `Article`; cluster ACP. |
| `/acp/autenticidade-qualidade-vida/` | O melhor jeito de viver é autêntico: por que a autenticidade melhora a qualidade de vida - Psicólogo Bernardo | Como a Abordagem Centrada na Pessoa entende a autorrealização e a tendência atualizante — e por que isso importa para você. | `Article`; cluster ACP. |
| `/acp/terapia-centrada-pessoa-explicacao/` | Terapia Centrada na Pessoa: como funciona — explicado de um jeito simples e humano - Psicólogo Bernardo | Como a ACP cria um ambiente seguro para que você possa existir sem precisar performar. | `Article`; cluster ACP. |
| `/acp/abordagem-centrada-pessoa/` | O que é a Abordagem Centrada na Pessoa e por que ela continua tão atual - Psicólogo Bernardo | Conheça os princípios da Abordagem Centrada na Pessoa, desenvolvida por Carl Rogers, e entenda por que essa forma de fazer psicologia permanece viva e necessária. | `Article`; cluster ACP. |

---

## 5. Resumo dos Critérios Invisíveis Mais Importantes

### Critérios técnicos globais
- canonical absoluta na maioria das páginas
- robots index/follow
- Open Graph e Twitter Card
- sitemap gerado dinamicamente
- renderização estática do site

### Critérios de relevância local
- bairro e cidade no title/description
- mapas e endereço
- área atendida
- menções a UFES, Jardim da Penha, Vitória, Serra e Vila Velha
- páginas locais com FAQ própria

### Critérios de relevância comercial
- páginas de serviço com schema `Service`
- páginas de experiência ligadas a demandas reais
- CTAs recorrentes para WhatsApp/agendamento
- links internos de páginas editoriais para páginas de serviço e localização

### Critérios editoriais dos artigos
- schema de artigo
- breadcrumb estruturado
- autor definido
- `lastReviewed` em grande parte do acervo
- FAQ e referências em parte dos conteúdos

---

## Observações úteis para revisão futura

- A página `/contato/` hoje parece usar uma descrição literal com `{siteProfile.phoneDisplay}` dentro da string, o que merece validação no HTML final.
- Os artigos usam um template único de título SEO: `Título do post - Psicólogo Bernardo`.
- O conjunto de categorias editoriais em `/jardim-da-penha/` e `/vitoria-es/` cria competição potencial com páginas locais comerciais, então este inventário pode ser usado depois para análise de canibalização.
