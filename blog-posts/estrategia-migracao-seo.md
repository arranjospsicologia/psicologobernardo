# Estratégia de Migração de Postagens para SEO

Este documento detalha a estratégia para reorganizar a estrutura de URLs do blog, movendo as postagens de um diretório genérico para categorias semânticas que reforçam a autoridade do domínio (Topical Authority).

## Objetivo
Melhorar o posicionamento nos buscadores (Google) organizando o conteúdo em silos temáticos (`/saude-mental/`, `/acp/`, `/homens/`, `/jardim-da-penha/`), indicando claramente ao motor de busca a especialidade do site em cada um desses tópicos.

---

## 1. Avaliação e Categorização das Postagens

Abaixo, a lista de todas as postagens atuais e sua nova localização sugerida.

### Categoria: `/jardim-da-penha/` (SEO Local)
Foco em capturar buscas de quem está fisicamente próximo ou procura serviços na região.
*   **Post:** Terapia para Estudantes e Universitários em Vitória (UFES)
    *   *Slug Atual:* `terapia-para-estudantes-ufes-vitoria`
    *   *Novo Slug:* `/jardim-da-penha/terapia-estudantes-ufes-vitoria`
*   **Post:** Onde cuidar da Saúde Mental em Jardim da Penha e Região
    *   *Slug Atual:* `onde-cuidar-saude-mental-jardim-da-penha`
    *   *Novo Slug:* `/jardim-da-penha/onde-cuidar-saude-mental`

### Categoria: `/vitoria-es/` (SEO Regional)
Foco em buscas mais amplas na cidade, para quem ainda não decidiu o bairro ou busca referência na capital.
*   **Post:** Como escolher um psicólogo em Vitória (ES)
    *   *Slug Atual:* `como-escolher-psicologo-em-vitoria-es`
    *   *Novo Slug:* `/vitoria-es/como-escolher-psicologo`

### Categoria: `/acp/` (Autoridade Técnica)
Foco em explicar a abordagem clínica, atraindo quem busca especificamente essa linha ou quer entender como funciona a terapia.
*   **Post:** O melhor jeito de viver é autêntico
    *   *Slug Atual:* `autenticidade-qualidade-vida`
    *   *Novo Slug:* `/acp/autenticidade-qualidade-vida`
*   **Post:** Terapia Centrada na Pessoa: como funciona
    *   *Slug Atual:* `terapia-centrada-pessoa-explicacao`
    *   *Novo Slug:* `/acp/como-funciona-terapia-centrada-pessoa`
*   **Post:** O que é a Abordagem Centrada na Pessoa
    *   *Slug Atual:* `abordagem-centrada-pessoa`
    *   *Novo Slug:* `/acp/o-que-e-abordagem-centrada-pessoa`

### Categoria: `/saude-mental/` (Topo de Funil / Educativo)
Foco em temas amplos, sintomas e reflexões cotidianas. É a categoria de entrada para quem sente algo mas ainda não sabe se quer terapia.
*   **Post:** Quando o estresse vira desgaste emocional
    *   *Slug Atual:* `estresse-desgaste-emocional`
    *   *Novo Slug:* `/saude-mental/estresse-desgaste-emocional`
*   **Post:** A obrigação de estar bem
    *   *Slug Atual:* `obrigacao-estar-bem`
    *   *Novo Slug:* `/saude-mental/obrigacao-estar-bem`
*   **Post:** A vida acelerou demais
    *   *Slug Atual:* `vida-acelerou-demais`
    *   *Novo Slug:* `/saude-mental/vida-acelerou-demais`
*   **Post:** Não somos máquinas
    *   *Slug Atual:* `nao-somos-maquinas`
    *   *Novo Slug:* `/saude-mental/nao-somos-maquinas-produtividade`
*   **Post:** Trabalho interno x performance
    *   *Slug Atual:* `trabalho-interno-vs-performance`
    *   *Novo Slug:* `/saude-mental/trabalho-interno-vs-performance`
*   **Post:** Quando o 'automático' vira modo de vida
    *   *Slug Atual:* `quando-automatico-vira-modo-de-vida`
    *   *Novo Slug:* `/saude-mental/quando-automatico-vira-modo-de-vida`
*   **Post:** Ansiedade: os sinais de que talvez seja hora de desacelerar
    *   *Slug Atual:* `ansiedade-sinais-desacelerar`
    *   *Novo Slug:* `/saude-mental/ansiedade-sinais-desacelerar`
*   **Post:** Corpo e emoções
    *   *Slug Atual:* `corpo-e-emocoes`
    *   *Novo Slug:* `/saude-mental/corpo-e-emocoes`
*   **Post:** Crises existenciais
    *   *Slug Atual:* `crises-existenciais`
    *   *Novo Slug:* `/saude-mental/crises-existenciais`

### Categoria: `/psicoterapia/` (Meio de Funil)
Foco em dúvidas sobre o processo terapêutico em si.
*   **Post:** Terapia Online Funciona?
    *   *Slug Atual:* `terapia-online-funciona`
    *   *Novo Slug:* `/psicoterapia/terapia-online-funciona`

### Categoria: `/homens/` (Niche / Público Específico)
Foco no público masculino e suas especificidades.
*   **Post:** Por que é tão difícil para muitos homens falar sobre o que sentem
    *   *Slug Atual:* `terapia-para-homens`
    *   *Novo Slug:* `/homens/dificuldade-falar-sentimentos` (ou manter `/homens/terapia-para-homens`)

---

## 2. Necessidade de Redirecionamentos (301 Redirects)

**CRÍTICO:** Ao alterar a URL de uma postagem, é obrigatório criar um redirecionamento 301 (Permanente) da URL antiga para a nova. Sem isso, perderemos qualquer indexação já conquistada no Google e links externos resultarão em erro 404.

*Lista de endereços anteriores que precisam de redirecionamento:*

1.  `/blog/terapia-para-estudantes-ufes-vitoria` -> `/jardim-da-penha/terapia-estudantes-ufes-vitoria`
2.  `/blog/onde-cuidar-saude-mental-jardim-da-penha` -> `/jardim-da-penha/onde-cuidar-saude-mental`
3.  `/blog/como-escolher-psicologo-em-vitoria-es` -> `/vitoria-es/como-escolher-psicologo`
4.  `/blog/autenticidade-qualidade-vida` -> `/acp/autenticidade-qualidade-vida`
5.  `/blog/terapia-centrada-pessoa-explicacao` -> `/acp/como-funciona-terapia-centrada-pessoa`
6.  `/blog/estresse-desgaste-emocional` -> `/saude-mental/estresse-desgaste-emocional`
7.  `/blog/terapia-online-funciona` -> `/psicoterapia/terapia-online-funciona`
8.  `/blog/obrigacao-estar-bem` -> `/saude-mental/obrigacao-estar-bem`
9.  `/blog/vida-acelerou-demais` -> `/saude-mental/vida-acelerou-demais`
10. `/blog/nao-somos-maquinas` -> `/saude-mental/nao-somos-maquinas-produtividade`
11. `/blog/trabalho-interno-vs-performance` -> `/saude-mental/trabalho-interno-vs-performance`
12. `/blog/quando-automatico-vira-modo-de-vida` -> `/saude-mental/quando-automatico-vira-modo-de-vida`
13. `/blog/ansiedade-sinais-desacelerar` -> `/saude-mental/ansiedade-sinais-desacelerar`
14. `/blog/corpo-e-emocoes` -> `/saude-mental/corpo-e-emocoes`
15. `/blog/crises-existenciais` -> `/saude-mental/crises-existenciais`
16. `/blog/abordagem-centrada-pessoa` -> `/acp/o-que-e-abordagem-centrada-pessoa`
17. `/blog/terapia-para-homens` -> `/homens/dificuldade-falar-sentimentos`

*(Nota: Assumi que as URLs atuais eram acessadas via `/blog/slug`. Se fossem na raiz ou outro caminho, o redirecionamento deve refletir a origem real).*

---

## 3. Estratégias de Organização

### Estratégia A: Estrutura Física de Diretórios (Recomendada)
Nesta abordagem, criamos rotas reais no SvelteKit para cada categoria.
*   **Estrutura:** `src/routes/[categoria]/[slug]/+page.svelte`
*   **Vantagem:** URLs extremamente limpas e hierarquia clara para o Google.
*   **Implementação:** Um único arquivo `+page.svelte` dinâmico que lê o parâmetro `categoria` e `slug`, busca o post correto e renderiza. Isso evita duplicar código.
*   **Exemplo de URL:** `dominio.com.br/saude-mental/ansiedade-sinais`

### Estratégia B: Estrutura Lógica com Reespaldo Visual
Mantemos os arquivos onde estão, mas simulam-se as URLs via reescrita ou roteamento puramente lógico.
*   **Vantagem:** Menor mudança na estrutura de pastas físicas do projeto em si, se já estiver complicado.
*   **Desvantagem:** Pode ser mais confuso de manter a longo prazo.
*   **Recomendação:** A Estratégia A é superior para SEO e clareza de código no SvelteKit.

### Ação Recomendada: Implementar Estratégia A
Utilizar Roteamento Dinâmico do SvelteKit.
1.  Criar uma rota `src/routes/[category]/[slug]/+page.svelte`.
2.  No `load` dessa rota, validar se a combinação categoria+slug existe.
3.  Se não existir, retornar 404 (para evitar conteúdo duplicado em URLs erradas).
4.  Configurar o `svelte.config.js` ou `hooks.server.ts` para lidar com os redirects 301 das URLs antigas.

---

## 4. Acesso e Navegação do Usuário

Com esta nova estrutura, o acesso aos artigos (postagens) ficará mais orgânico e distribuído:

1.  **Página "Artigos" (Antigo Blog):**
    *   Continuaremos tendo uma página central (ex: `meusite.com/artigos` ou ainda `meusite.com/blog`) que lista **todas** as postagens, independente da categoria.
    *   Esta página funcionará como um índice geral, preservando a cronologia ou destaques.

2.  **Páginas de Categoria (Silos):**
    *   Criaremos páginas específicas para cada tema, como `meusite.com/saude-mental/`.
    *   Se o usuário clicar em "Saúde Mental" no menu ou em uma tag, ele verá apenas os posts relacionados a esse tema. Isso melhora muito a experiência (ele encontra o que busca) e o SEO (página temática forte).

3.  **Acesso via Google:**
    *   A maior parte dos usuários chegará diretamente na página do post (`/saude-mental/ansiedade-sinais`) vindo do Google.
    *   Ao chegar lá, o "breadcrumb" (caminho de navegação) mostrará: `Home > Saúde Mental > Ansiedade...`. Isso orienta o usuário e o convida a ler mais sobre aquele tema específico.

Portanto, **tudo continua acessível centralmente**, mas ganha caminhos "especializados". O usuário não "perde" o blog geral, ele ganha "estantes organizadas".

---

## 5. Recomendações de UX e Terminologia

### "Blog" vs "Artigos"
**Recomendação:** Alterar para **"Artigos"** ou **"Conteúdo"**.

*   **Por quê?** "Blog" remete a diário pessoal, algo datado ou informal. Para um site profissional de psicologia, "Artigos" transmite autoridade, pesquisa e cuidado técnico. Isso posiciona você como especialista que produz conhecimento, não apenas alguém que escreve opiniões.
*   **Ação:** Renomear o item no menu superior para "Artigos". A URL técnica pode mudar para `/artigos` (ideal para consistência) ou manter `/blog` (se quiser evitar mais redirects, mas recomendo mudar tudo para `/artigos` para alinhar com a nova fase).

### Botão "Agendar Consulta" vs "Conversar"
**Recomendação:** Alterar para **"Conversar"** ou **"Falar no WhatsApp"**.

*   **Por quê? (Psicologia do Consumidor):** "Agendar Consulta" é um compromisso alto ("High Friction"). O usuário pensa: "Vou ter que ver agenda, pagar, falar sério". Gera ansiedade em quem está indeciso.
*   **"Conversar"** é um compromisso baixo ("Low Friction"). É um convite. "Vou apenas tirar uma dúvida". Isso aumenta drasticamente o número de cliques (CTR).
*   **Ação Prática:** O botão deve levar diretamente para o WhatsApp (API `wa.me`).
    *   *Dica de Ouro:* Configure uma mensagem pré-definida no link. Ex: `Olá, vi seu site e gostaria de saber mais sobre a terapia.`
    *   Isso remove a barreira do "o que eu digo agora?" quando abre a janela do chat.

Esta abordagem de **"Conversa"** é muito mais alinhada com a Abordagem Centrada na Pessoa: acolhedora, acessível e menos burocrática.
