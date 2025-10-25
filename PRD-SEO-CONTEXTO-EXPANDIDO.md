# PRD — SEO + Conteúdo Programático (expandido)
**Projeto:** psicologobernardo.com.br  
**Versão:** 1.1 (25/out/2025)  
**Responsável:** Bernardo Carielo (CRP 16/5527)  
**Escopo:** SEO técnico, páginas programáticas, UX de conversão, conformidade LGPD, conteúdo e provas sociais

---

## 0) Diretrizes-chave (decisões consolidadas)

1) **Localização única (Jardim da Penha)**
- Não usar dropdown “Localização” no menu.  
- Usar **apenas um item “Localização”** apontando para **Jardim da Penha**.  
- Outras regiões próximas serão atendidas por **landing pages de proximidade** (sem aparecer no menu), com interlinks e CTAs consistentes.

2) **“Roda de Conversa Entre Homens”**
- Deve constar como **projeto do EncontroACP (SP)**; no site do Bernardo, o texto deve dizer que ele **facilita** no EncontroACP.  
- Incluir link externo do EncontroACP e remover qualquer associação à **Arranjos Psicologia** nessa roda específica.

3) **Provas sociais + YMYL/E-E-A-T**
- Usar widgets Doctoralia (página de agendamento + social proof).  
- Migrar/estimular avaliações no **Google Meu Negócio**.  
- Footer com **links regulatórios** (CRP, CFP, Código de Ética, Res. 11/2018) e **LGPD**.

---

## 1) Objetivos (consolidados dos .md)

- **Aquisição:** crescer tráfego orgânico local e de intenção alta (serviço + problema + Vitória/ES).  
- **Conversão:** aumentar cliques em WhatsApp/Doctoralia e requisições de contato.  
- **Autoridade YMYL:** evidenciar experiência, ética e segurança (ACP, regulação, privacidade, avaliações).  
- **Escala:** criar base de **templates programáticos** (Serviço, Problema, Proximidade) com conteúdo substantivo (800–1200 palavras) e **FAQ com schema**.

---

## 2) Arquitetura de informação

### 2.1 Navegação
- **Menu:** Home | Sobre | Serviços | Blog | Localização | Contato  
- **Sem submenu** para Localização.  
- **Footer (fixo em todas):** CRP | CFP | Código de Ética | Res. 11/2018 | Política de Privacidade | Termos | Contrato (PDF).

### 2.2 URLs e tipos de página
- Localização principal: `/localizacao/psicologo-jardim-da-penha.html`  
- Proximidade (sem menu; doorway-safe):  
  - `/proximidade/psicologo-jardim-camburi.html`  
  - `/proximidade/psicologo-praia-do-canto.html`  
  - `/proximidade/psicologo-centro-vitoria.html`  
  - `/proximidade/psicologo-mata-da-praia.html`
- Problemas (ex.:):  
  - `/problemas/psicologo-ansiedade-vitoria.html`  
  - `/problemas/psicologo-depressao-vitoria.html`  
  - `/problemas/psicologo-burnout-vitoria.html`  
  - `/problemas/psicologo-panico-vitoria.html`  
  - `/problemas/psicologo-crise-existencial-vitoria.html`
- Serviços (ex.:):  
  - `/servicos/terapia-individual-vitoria.html`  
  - `/servicos/terapia-de-casal-vitoria.html`  
  - `/servicos/terapia-familiar-vitoria.html`  
  - `/servicos/terapia-online-vitoria.html`  
  - `/servicos/abordagem-centrada-na-pessoa-vitoria.html`

> **Nota sobre doorway/thin content:** páginas de proximidade **devem** ter conteúdo único (direções reais, landmarks, tempo de deslocamento, facilidades de acesso, contexto do bairro) para evitar penalidade. Use canonical correta quando houver alta sobreposição.

---

## 3) Templates de página (requisitos)

### 3.1 Estrutura textual (todas)
1. **Intro (150–200):** keyword principal no 1º parágrafo + CTA discreto.  
2. **Seção principal (300–400):** problema/serviço explicado na ACP + benefícios.  
3. **Contexto local (200–250):** Jardim da Penha ou bairro de proximidade (vias, transporte, tempo médio, estacionamento, online como alternativa).  
4. **Como funciona (150–200):** 1ª sessão, duração, formatos, valores (se optar), ética/privacidade.  
5. **FAQ (5–8 Q&As, 50–150 cada)** + **schema FAQPage**.  
6. **CTA final (≈50):** Botão WhatsApp + botão “Agendar no Doctoralia”.

### 3.2 SEO técnico (todas)
- `<title>` (55–60c) + `<meta description>` (145–160c) com a keyword e benefício.  
- Heading único H1; hierarquia H2/H3 limpa.  
- **Schema:** `ProfessionalService` + `FAQPage` + `AggregateRating` (quando aplicável).  
- `og:*` e `twitter:*`; `rel=canonical`; `lang="pt-BR"`.  
- Imagens com `alt` descritivo; lazy-loading.  
- **Internal linking padrão:**  
  - Localização → 2 “proximidades” + 2 “problemas” + 1 “serviço” + Sobre + Contato  
  - Problema → 2 “proximidades” + 1 “serviço” + 2 posts do blog + FAQ geral  
  - Serviço → 2 “problemas” + Localização + Post(s) do blog + Contato

### 3.3 Componentes reutilizáveis
- **Box “Veja também”** (4–6 cartões)  
- **Box “Regulamentação”** no footer (links oficiais)  
- **CTA duplo:** WhatsApp (pré-preenchido) + Doctoralia (widget #2 para agendamento direto)  
- **Badge de avaliação (Doctoralia/Google)** próximo a CTAs.

---

## 4) Estratégia Programática (com JS gerador)

### 4.1 O que fazer
- **Gerar HTML estático** a partir de um **template** + um **JSON de dados** (bairro, rotas, landmarks, ângulos de valor, listas de serviços, sintomas, perguntas).  
- **Compilar** em build-time (SSG) para páginas performáticas (evitar conteúdo servido 100% por JS no client).  
- Variáveis que mudam por página: `pageTitle`, `metaDescription`, `h1`, `bairrosVizinhos`, `tempoDeslocamento`, `comoChegar`, `mapIframe`, `faqItems`, `linksRelacionados`.

### 4.2 Boas práticas / riscos
- ✅ **Bom**: SSG + conteúdo exclusivo realmente útil → páginas “de proximidade” com valor real.  
- ⚠️ **Risco**: doorway/thin content se só trocar bairro e repetir o resto. **Mitigar** com:  
  - Escrever parágrafos específicos sobre cada região;  
  - Incluir rotas reais e diferenças de perfil demográfico/fluxo;  
  - Fotos/iframe do mapa focados no trajeto relevante;  
  - Interlinks personalizados (vizinhança real daquele bairro).  
- 🔁 **Manutenção**: centralize o JSON; sempre que criar nova página, rode o gerador → atualize `sitemap.xml` e links relacionados.

---

## 5) Personas de busca + brainstorming de keywords (serviços reais)
[... conteúdo continua ...]
