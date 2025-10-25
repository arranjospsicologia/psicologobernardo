# Alterações no PRD - Otimizações SEO Avançadas

**Data:** 25 de outubro de 2025
**Baseado em:** Análise competitiva do site ceciliafreytas.com.br
**Objetivo:** Incorporar melhores práticas de SEO YMYL (Your Money Your Life)

---

## Resumo Executivo

Com base na análise do concorrente bem-posicionado para "psicólogo online", identificamos 9 elementos críticos de SEO que devem ser incorporados ao PRD existente. Estas alterações são essenciais para sites de saúde mental devido aos critérios E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) do Google.

**Impacto estimado:** +40-60% no ranqueamento orgânico em 6 meses

---

## 1. CONTEÚDO SUBSTANTIVO (Implementação: ALTA PRIORIDADE)

### Adicionar ao PRD na Seção 6 (Templates de Página)

```markdown
### 6.X Requisitos de Densidade de Conteúdo

**OBRIGATÓRIO para todas as páginas programáticas:**

Extensão mínima por tipo de página:
- Páginas de Localização: 800-1000 palavras
- Páginas Problema + Localização: 1000-1200 palavras
- Páginas de Modalidade Online: 900-1100 palavras
- Páginas de Serviço: 800-1000 palavras

**Estrutura de conteúdo obrigatória:**

1. **Introdução (150-200 palavras)**
   - Keyword principal no primeiro parágrafo
   - Contextualização do problema/serviço/localização
   - Call-to-action inicial

2. **Seção Principal (300-400 palavras)**
   - Explicação detalhada do serviço/problema
   - Como a Abordagem Centrada na Pessoa trata isso
   - Benefícios específicos

3. **Seção de Localização/Contexto (200-250 palavras)**
   - Informações sobre a região (se aplicável)
   - Por que escolher atendimento local/online
   - Facilidades de acesso

4. **Seção "Como Funciona" (150-200 palavras)**
   - Processo de agendamento
   - O que esperar da primeira sessão
   - Duração e formato das sessões

5. **FAQ (300-400 palavras)**
   - Mínimo 5 perguntas
   - Ver seção específica de FAQ abaixo

6. **CTA Final (50 palavras)**
   - Botão de agendamento
   - Informações de contato
```

**Exemplo de distribuição para "Psicólogo para Ansiedade em Vitória":**
- O que é ansiedade e como se manifesta (200 palavras)
- Como a ACP trata ansiedade (250 palavras)
- Por que tratar ansiedade em Vitória com Bernardo (200 palavras)
- Tipos de ansiedade tratados (150 palavras)
- FAQ sobre tratamento de ansiedade (350 palavras)
- **Total:** ~1150 palavras

---

## 2. SISTEMA DE AVALIAÇÕES (Implementação: CRÍTICA)

### Adicionar ao PRD na Seção 5 (Especificações Técnicas)

```markdown
### 5.X Integração de Avaliações e Social Proof

**Componentes obrigatórios:**

#### 2.1 Schema Markup de Avaliações
Todas as páginas DEVEM incluir:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Bernardo Carielo - Psicólogo",
  "image": "https://psicologobernardo.com.br/assets/images/bernardo-avatar.jpg",
  "priceRange": "$$",
  "telephone": "+5527998331228",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Darcy Grijó, 50 - Sala 409",
    "addressLocality": "Vitória",
    "addressRegion": "ES",
    "postalCode": "29060-630",
    "addressCountry": "BR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  }
}
</script>
```

#### 2.2 Widget de Avaliações Google

**Localização:** Após seção "Sobre" ou antes do FAQ

**Implementação:**
- Usar Google Places API ou embed direto
- Exibir 3-5 avaliações mais recentes
- Link "Ver todas as avaliações" → Google My Business

**HTML Exemplo:**
```html
<section class="avaliacoes section">
  <div class="container">
    <h2 class="section-title">O que dizem meus pacientes</h2>
    <div class="avaliacoes-badge">
      <span class="rating-number">5.0</span>
      <span class="rating-stars">★★★★★</span>
      <span class="rating-count">Baseado em 50+ avaliações no Google</span>
    </div>
    <div class="avaliacoes-carousel">
      <!-- Integração com Google Reviews -->
    </div>
  </div>
</section>
```

#### 2.3 Ação Pré-Lançamento
- [ ] Migrar avaliações do Doctoralia para Google My Business
- [ ] Solicitar avaliações de pacientes atuais
- [ ] Meta: 20+ avaliações no Google antes do lançamento das páginas programáticas
```

---

## 3. LINKS EXTERNOS DE AUTORIDADE (Implementação: CRÍTICA)

### Adicionar ao PRD na Seção 6 (Templates de Página)

```markdown
### 6.X Footer com Links de Conformidade Regulatória

**OBRIGATÓRIO em todas as páginas (footer):**

```html
<div class="footer-column footer-compliance">
  <h3>Regulamentação Profissional</h3>
  <ul class="compliance-links">
    <li>
      <a href="https://crp16.org.br/"
         target="_blank"
         rel="noopener">
        <i class="fas fa-certificate"></i> CRP 16 (ES/RO)
      </a>
    </li>
    <li>
      <a href="https://site.cfp.org.br/"
         target="_blank"
         rel="noopener">
        <i class="fas fa-landmark"></i> Conselho Federal de Psicologia
      </a>
    </li>
    <li>
      <a href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo_etica.pdf"
         target="_blank"
         rel="noopener">
        <i class="fas fa-book"></i> Código de Ética Profissional
      </a>
    </li>
    <li>
      <a href="https://site.cfp.org.br/wp-content/uploads/2018/05/RESOLU%C3%87%C3%83O-N%C2%BA-11-DE-11-DE-MAIO-DE-2018.pdf"
         target="_blank"
         rel="noopener">
        <i class="fas fa-file-alt"></i> Resolução 11/2018 (Atendimento Online)
      </a>
    </li>
    <li>
      <a href="/politica-privacidade.html">
        <i class="fas fa-shield-alt"></i> Política de Privacidade (LGPD)
      </a>
    </li>
    <li>
      <a href="/contrato-prestacao-servicos.pdf" target="_blank">
        <i class="fas fa-file-contract"></i> Contrato de Prestação de Serviços
      </a>
    </li>
  </ul>
</div>
```

**Justificativa SEO:**
- Sites YMYL (Your Money Your Life) DEVEM demonstrar conformidade regulatória
- Google valoriza links para autoridades oficiais (E-E-A-T)
- Reduz risco de penalizações por "low-quality medical content"

**Ações Pré-Lançamento:**
- [ ] Criar contrato de prestação de serviços em PDF
- [ ] Criar declaração de regularidade CRP
- [ ] Verificar validade de todos os links externos
```

---

## 4. ESTRATÉGIA DE LINKS INTERNOS (Implementação: ALTA PRIORIDADE)

### Adicionar ao PRD na Seção 6 (Templates de Página)

```markdown
### 6.X Arquitetura de Links Internos

**Objetivo:** Distribuir PageRank e criar rede semântica forte

#### 4.1 Regras de Link Interno por Tipo de Página

**Páginas de Localização** (ex: "Psicólogo Jardim da Penha")
DEVEM linkar para:
- 2-3 bairros vizinhos (ex: Jardim Camburi, Mata da Praia)
- 2-3 problemas mais comuns naquela região (ex: Ansiedade, Burnout)
- 1-2 posts do blog relacionados
- Página "Terapia Online" (para quem não pode ir presencial)
- Página "Contato" e "Sobre"

**Páginas de Problema** (ex: "Psicólogo para Ansiedade Vitória")
DEVEM linkar para:
- 2-3 localizações próximas
- Modalidade online correspondente (ex: "Tratamento Ansiedade Online")
- Serviço correspondente (ex: "Terapia Individual")
- Posts do blog sobre o problema
- FAQ geral
- Outros problemas relacionados (ex: Ansiedade → Síndrome do Pânico)

**Páginas de Modalidade Online** (ex: "Terapia de Casal Online")
DEVEM linkar para:
- Versão presencial (ex: "Terapia de Casal Vitória")
- 2-3 localizações (para quem preferir presencial)
- Posts do blog sobre o serviço
- Página sobre atendimento online
- Resolução CFP 11/2018 (link externo)

#### 4.2 Anchor Text Natural

**Boas práticas:**
✅ "Também atendo pacientes do [Jardim Camburi](link)"
✅ "Saiba mais sobre [tratamento para ansiedade](link)"
✅ "Conheça minha [abordagem terapêutica](link)"

**Evitar:**
❌ "Clique aqui"
❌ Over-optimization ("psicólogo jardim da penha vitória es crp")
❌ Mesma anchor text repetida

#### 4.3 Localização dos Links

- **No corpo do texto:** 3-5 links contextuais
- **Sidebar/Box "Serviços Relacionados":** 3-4 links
- **Seção "Veja Também":** 4-6 links no final da página
- **Breadcrumbs:** Sempre presentes

**Exemplo de seção "Veja Também":**
```html
<section class="related-pages">
  <h3>Serviços Relacionados</h3>
  <div class="related-grid">
    <a href="/psicologo-jardim-camburi/" class="related-card">
      <h4>Psicólogo no Jardim Camburi</h4>
      <p>Atendimento próximo ao Jardim Camburi</p>
    </a>
    <a href="/tratamento-ansiedade-online/" class="related-card">
      <h4>Tratamento de Ansiedade Online</h4>
      <p>Terapia para ansiedade no conforto de casa</p>
    </a>
    <!-- Mais 2-4 cards -->
  </div>
</section>
```

#### 4.4 Atualização Automática de Links

Quando criar nova página, atualizar links em:
- Páginas geograficamente próximas
- Páginas do mesmo problema/serviço
- Homepage (se P0)
- Sitemap XML
```

---

## 5. FAQ ESTRUTURADO COM SCHEMA (Implementação: CRÍTICA)

### Adicionar ao PRD na Seção 6 (Templates de Página)

```markdown
### 6.X FAQ Obrigatório com Schema Markup

**Objetivo:** Capturar featured snippets e long-tail keywords

#### 5.1 Requisitos Gerais

Todas as páginas programáticas DEVEM incluir:
- Mínimo 5 perguntas
- Máximo 10 perguntas
- Perguntas específicas para o contexto da página
- Respostas de 50-150 palavras cada
- Schema markup FAQPage

#### 5.2 Template de Implementação

```html
<section class="faq section">
  <div class="container">
    <h2 class="section-title">Perguntas Frequentes</h2>
    <div class="faq-container">
      <!-- FAQ items aqui -->
    </div>
  </div>
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como funciona a terapia para ansiedade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A terapia para ansiedade com a Abordagem Centrada na Pessoa foca em criar um espaço seguro onde você possa explorar as raízes da sua ansiedade. Através da escuta empática e sem julgamentos, ajudo você a compreender os gatilhos emocionais e desenvolver recursos internos para lidar com a ansiedade de forma saudável."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo dura o tratamento para ansiedade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O tempo de tratamento varia de pessoa para pessoa. Alguns pacientes relatam melhora significativa nos sintomas após 3-6 meses de terapia semanal, enquanto outros preferem continuar por mais tempo para um trabalho mais profundo. Na primeira sessão, conversaremos sobre suas expectativas e avaliaremos juntos o andamento ao longo do processo."
      }
    }
    // ... mais perguntas
  ]
}
</script>
```

#### 5.3 Banco de Perguntas por Tipo de Página

**Para Páginas de Localização** (ex: "Psicólogo Jardim da Penha"):
- Onde fica o consultório no [Bairro]?
- Atende moradores de [Bairro] online?
- Como chegar ao consultório a partir de [Bairro]?
- Tem estacionamento próximo ao consultório?
- Quanto custa a sessão para moradores de [Bairro]?
- Quais horários disponíveis para [Bairro]?

**Para Páginas de Problema** (ex: "Psicólogo para Ansiedade"):
- Como funciona a terapia para [Problema]?
- Quanto tempo dura o tratamento para [Problema]?
- [Problema] tem cura?
- Quando procurar psicólogo para [Problema]?
- Qual a diferença entre psicólogo e psiquiatra para [Problema]?
- Atende [Problema] online?
- Quanto custa tratamento para [Problema] em Vitória?

**Para Páginas de Modalidade Online** (ex: "Terapia Online"):
- Como funciona a terapia online?
- Terapia online é tão eficaz quanto presencial?
- Quais plataformas você usa para atendimento online?
- É seguro fazer terapia online?
- Como agendar primeira sessão online?
- Precisa ter boa internet para terapia online?
- Atendimento online é regulamentado?

#### 5.4 Otimização de Perguntas

**Usar variações long-tail reais:**
- "psicólogo para ansiedade em vitória quanto custa"
- "quanto tempo dura terapia ansiedade"
- "ansiedade tem cura psicólogo"
- "diferença psicólogo psiquiatra ansiedade"

**Fontes para perguntas:**
- Google "People Also Ask"
- Answer the Public (answerthepublic.com)
- Perguntas recebidas via WhatsApp
- Comentários em redes sociais
```

---

## 6. POLÍTICA DE PRIVACIDADE E CONFORMIDADE LGPD (Implementação: OBRIGATÓRIA)

### Adicionar ao PRD na Seção 9 (Roadmap de Implementação)

```markdown
### 9.X Páginas de Conformidade Legal (Pré-requisito para lançamento)

#### 6.1 Política de Privacidade

**Arquivo:** `/politica-privacidade.html`

**Conteúdo mínimo obrigatório:**

1. **Identificação do Responsável**
   - Nome completo: Bernardo Carielo
   - CRP: 16/5527
   - CNPJ (se aplicável)
   - Endereço do consultório
   - Contato: email e telefone

2. **Dados Coletados**
   - Formulários de contato (nome, email, telefone, mensagem)
   - Google Analytics (cookies, IP, comportamento de navegação)
   - WhatsApp (ao clicar nos botões)
   - Dados de agendamento (se implementar sistema)

3. **Finalidade do Uso**
   - Agendamento de consultas
   - Resposta a dúvidas
   - Análise de tráfego do site
   - Melhorias na experiência do usuário

4. **Base Legal (LGPD)**
   - Consentimento (ao usar o site)
   - Legítimo interesse (analytics)
   - Execução de contrato (agendamento)

5. **Direitos do Titular**
   - Confirmação de tratamento de dados
   - Acesso aos dados
   - Correção de dados incompletos
   - Anonimização, bloqueio ou eliminação
   - Portabilidade dos dados
   - Eliminação dos dados tratados com consentimento
   - Informação sobre compartilhamento
   - Revogação do consentimento

6. **Cookies e Tecnologias**
   - Google Analytics
   - Cookies de sessão
   - Como desabilitar cookies

7. **Compartilhamento de Dados**
   - NÃO compartilhamos dados pessoais com terceiros
   - Exceções: obrigações legais, proteção de direitos

8. **Segurança**
   - Medidas técnicas e administrativas
   - HTTPS em todo o site
   - Armazenamento seguro

9. **Contato DPO/Encarregado**
   - Email: privacidade@arranjospsicologia.com.br (ou contato principal)

10. **Alterações na Política**
    - Data da última atualização
    - Como comunicaremos alterações

#### 6.2 Termos de Uso (Opcional mas recomendado)

**Arquivo:** `/termos-de-uso.html`

Conteúdo:
- Uso adequado do site
- Propriedade intelectual
- Isenção de responsabilidades
- Lei aplicável (Brasil/ES)

#### 6.3 Contrato de Prestação de Serviços

**Arquivo:** `/contrato-prestacao-servicos.pdf`

Disponível para download, incluindo:
- Descrição dos serviços
- Valores e forma de pagamento
- Cancelamento e faltas
- Confidencialidade
- Duração do contrato

#### 6.4 Links no Footer

Adicionar em TODAS as páginas:
```html
<div class="footer-bottom">
  <div class="footer-legal">
    <a href="/politica-privacidade.html">Política de Privacidade</a>
    <span class="separator">|</span>
    <a href="/termos-de-uso.html">Termos de Uso</a>
    <span class="separator">|</span>
    <a href="/contrato-prestacao-servicos.pdf" target="_blank">Contrato de Serviços</a>
  </div>
  <p>&copy; 2025 Bernardo Carielo (CRP 16/5527). Todos os direitos reservados.</p>
</div>
```

#### 6.5 Banner de Cookies (Se usar Google Analytics)

```html
<div id="cookie-banner" class="cookie-banner" style="display: none;">
  <p>
    Utilizamos cookies para melhorar sua experiência no site.
    Ao continuar navegando, você concorda com nossa
    <a href="/politica-privacidade.html">Política de Privacidade</a>.
  </p>
  <button id="accept-cookies" class="btn btn-primary">Aceitar</button>
</div>
```

**JavaScript:**
```javascript
// Exibir banner se não houver consentimento
if (!localStorage.getItem('cookieConsent')) {
  document.getElementById('cookie-banner').style.display = 'block';
}

document.getElementById('accept-cookies').addEventListener('click', function() {
  localStorage.setItem('cookieConsent', 'true');
  document.getElementById('cookie-banner').style.display = 'none';
  // Ativar Google Analytics aqui
});
```
```

---

## 7. REFERÊNCIAS EXTERNAS EM CONTEÚDO (Implementação: ALTA PRIORIDADE)

### Adicionar ao PRD na Seção 6 (Templates de Página)

```markdown
### 6.X Citações e Referências Externas

**Objetivo:** Aumentar E-E-A-T através de citações autoritativas

#### 7.1 Requisitos por Página

Cada página programática DEVE incluir:
- Mínimo 2 links externos para fontes autoritativas
- Máximo 5 links externos (para não diluir PageRank)
- Contexto natural (não forçado)

#### 7.2 Fontes Aprovadas

**Autoridades Brasileiras (Prioridade Alta):**
- ✅ Ministério da Saúde (bvsms.saude.gov.br)
- ✅ Conselho Federal de Psicologia (site.cfp.org.br)
- ✅ Fiocruz (portal.fiocruz.br)
- ✅ OPAS Brasil (paho.org/pt/brasil)
- ✅ SciELO (scielo.br) - para estudos científicos

**Autoridades Internacionais:**
- ✅ OMS/WHO (who.int)
- ✅ MSD Manuals (msdmanuals.com)
- ✅ APA - American Psychological Association (apa.org)
- ✅ PubMed (pubmed.ncbi.nlm.nih.gov) - para estudos

**Evitar:**
- ❌ Wikipédia
- ❌ Sites de notícias genéricos
- ❌ Blogs pessoais
- ❌ Sites sem HTTPS
- ❌ Conteúdo desatualizado (>5 anos)

#### 7.3 Exemplos de Implementação

**Para página "Psicólogo para Ansiedade Vitória":**

```markdown
Segundo o [Ministério da Saúde](https://bvsms.saude.gov.br/ansiedade/),
os transtornos de ansiedade afetam aproximadamente 9,3% da população brasileira,
sendo um dos problemas de saúde mental mais prevalentes no país.

A [Organização Mundial da Saúde](https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders)
estima que 264 milhões de pessoas no mundo sofrem de transtornos de ansiedade.

Na Abordagem Centrada na Pessoa, conforme descrito pelo
[Conselho Federal de Psicologia](https://site.cfp.org.br/),
o foco está no potencial de crescimento do indivíduo...
```

**Para página "Terapia Online":**

```markdown
O atendimento psicológico online é regulamentado no Brasil pela
[Resolução CFP 11/2018](https://site.cfp.org.br/wp-content/uploads/2018/05/RESOLU%C3%87%C3%83O-N%C2%BA-11-DE-11-DE-MAIO-DE-2018.pdf),
que estabelece normas para a prestação de serviços psicológicos via internet.

Estudos publicados no [PubMed](https://pubmed.ncbi.nlm.nih.gov/)
demonstram que a terapia online tem eficácia comparável ao atendimento presencial
para diversos transtornos, incluindo ansiedade e depressão.
```

#### 7.4 Formato de Citação

**HTML com boas práticas:**
```html
<p>
  Segundo o
  <a href="https://bvsms.saude.gov.br/ansiedade/"
     target="_blank"
     rel="noopener nofollow">
    Ministério da Saúde
  </a>,
  os transtornos de ansiedade...
</p>
```

**Atributos:**
- `target="_blank"` - abre em nova aba
- `rel="noopener"` - segurança (obrigatório)
- `rel="nofollow"` - opcional, mas recomendado para links externos

#### 7.5 Seção "Referências" (Opcional)

Para páginas com múltiplas citações, adicionar ao final:

```html
<section class="referencias">
  <h3>Referências e Fontes</h3>
  <ol class="referencias-list">
    <li>
      Ministério da Saúde. "Ansiedade: sintomas e tratamento".
      Disponível em: <a href="..." target="_blank" rel="noopener">link</a>
    </li>
    <li>
      Organização Mundial da Saúde (OMS). "Transtornos de Ansiedade".
      Disponível em: <a href="..." target="_blank" rel="noopener">link</a>
    </li>
  </ol>
</section>
```
```

---

## 8. CONTEÚDO MULTIMÍDIA - VÍDEOS (Implementação: BAIXA PRIORIDADE - FASE 3)

### Adicionar ao PRD na Seção 9 (Roadmap de Implementação)

```markdown
### 9.X Fase 3: Conteúdo em Vídeo (Opcional)

**Status:** Baixa prioridade - implementar APENAS após:
- ✅ Todas as páginas programáticas publicadas
- ✅ Tráfego orgânico estabilizado
- ✅ Posicionamento Top 10 para keywords principais

**Justificativa:** Vídeos de baixa qualidade podem prejudicar mais do que ajudar.

#### 8.1 Vídeos Recomendados (Quando implementar)

**Prioridade Alta:**
1. **"O que é Abordagem Centrada na Pessoa"** (2-3 min)
   - Localização: Homepage e página "Sobre"
   - Formato: Falando diretamente para câmera
   - Roteiro: Explicação simples e autêntica

2. **"Como funciona a primeira sessão"** (2 min)
   - Localização: Todas as páginas de serviço
   - Conteúdo: O que esperar, como se preparar

3. **"Tour virtual do consultório"** (1 min)
   - Localização: Páginas de localização (Jardim da Penha)
   - Mostrar sala de atendimento, recepção, acesso

**Prioridade Média:**
4. **"Quando procurar um psicólogo"** (3 min)
5. **"Diferença entre psicólogo e psiquiatra"** (2 min)
6. **"Como funciona terapia online"** (2 min)

#### 8.2 Especificações Técnicas

**Qualidade mínima:**
- ✅ Áudio claro (microfone de lapela ou shotgun)
- ✅ Iluminação adequada (natural ou ring light)
- ✅ Fundo neutro e profissional
- ✅ Legendas em português (obrigatório para acessibilidade)
- ✅ Duração: 1-3 minutos (máximo 5 minutos)

**Hospedagem:**
- Hospedar no YouTube (canal profissional)
- Embed no site via iframe
- Thumbnail personalizada e atrativa

**Otimização YouTube:**
- Título com keyword (ex: "Como funciona Terapia para Ansiedade | Psicólogo Vitória")
- Descrição detalhada (200+ palavras)
- Tags relevantes
- Link para o site na descrição

#### 8.3 Schema Markup para Vídeo

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Como funciona a Abordagem Centrada na Pessoa",
  "description": "Psicólogo Bernardo Carielo explica os fundamentos da Abordagem Centrada na Pessoa e como ela pode ajudar no seu processo terapêutico.",
  "thumbnailUrl": "https://psicologobernardo.com.br/assets/images/video-thumbnail-acp.jpg",
  "uploadDate": "2025-06-15",
  "duration": "PT2M45S",
  "contentUrl": "https://www.youtube.com/watch?v=...",
  "embedUrl": "https://www.youtube.com/embed/...",
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": { "@type": "WatchAction" },
    "userInteractionCount": 0
  }
}
</script>
```

#### 8.4 Implementação no HTML

```html
<section class="video-section">
  <div class="container">
    <h2>Conheça a Abordagem Centrada na Pessoa</h2>
    <div class="video-wrapper">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="Como funciona a Abordagem Centrada na Pessoa"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy">
      </iframe>
    </div>
    <p class="video-description">
      Neste vídeo, explico como a Abordagem Centrada na Pessoa
      pode ajudar você em seu processo de autoconhecimento e crescimento pessoal.
    </p>
  </div>
</section>
```

**CSS para responsividade:**
```css
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

#### 8.5 Métricas de Sucesso para Vídeos

Implementar APENAS se:
- Tempo médio na página aumentar >30%
- Taxa de conversão não diminuir
- Comentários/feedback positivos

**Monitorar:**
- Taxa de reprodução (play rate)
- Tempo médio assistido
- Drop-off points (onde pessoas param de assistir)
```

---

## 9. RESUMO DE PRIORIDADES

### Implementação Obrigatória ANTES do Lançamento (Fase 0)

1. ✅ **Política de Privacidade** (LGPD obrigatório)
2. ✅ **Links de conformidade no footer** (CFP, CRP, Código de Ética)
3. ✅ **Schema markup básico** (LocalBusiness, ProfessionalService)

### Implementação Simultânea à Fase 1 (Páginas Programáticas)

4. ✅ **Conteúdo substantivo** (800-1200 palavras por página)
5. ✅ **FAQ estruturado com schema** (5+ perguntas por página)
6. ✅ **Links internos estratégicos** (3-5 por página)
7. ✅ **Referências externas** (2-4 links autoritativos)

### Implementação Paralela (Urgente)

8. ✅ **Sistema de avaliações** (migrar Doctoralia → Google)
9. ✅ **Widget de avaliações** (integrar no site)

### Implementação Futura (Fase 3)

10. ⏸️ **Conteúdo em vídeo** (APENAS com qualidade alta)

---

## 10. CHECKLIST DE AÇÕES IMEDIATAS

### Para o Desenvolvedor/Implementador

- [ ] Criar `/politica-privacidade.html` baseado em template LGPD
- [ ] Adicionar footer com links de conformidade em todas as páginas
- [ ] Implementar schema markup FAQPage em todas as páginas
- [ ] Adicionar schema AggregateRating em todas as páginas
- [ ] Criar componente de "Páginas Relacionadas" para links internos
- [ ] Atualizar PRD com todas as seções acima

### Para Bernardo (Ações de Negócio)

- [ ] Solicitar avaliações de pacientes atuais no Google My Business
- [ ] Baixar/compilar avaliações do Doctoralia
- [ ] Criar contrato de prestação de serviços em PDF
- [ ] Verificar regularidade no CRP e baixar declaração
- [ ] (Opcional) Planejar roteiros de vídeo para Fase 3

### Para Estratégia de Conteúdo

- [ ] Expandir banco de FAQs para cada tipo de página (localização, problema, modalidade)
- [ ] Mapear links internos entre páginas (criar matriz de relacionamento)
- [ ] Identificar fontes autoritativas para citar em cada tipo de página
- [ ] Criar guidelines de densidade de keywords para redatores

---

## 11. IMPACTO ESTIMADO

**Com todas as implementações:**

| Métrica | Sem implementações | Com implementações | Ganho |
|---------|-------------------|-------------------|-------|
| Posicionamento médio | Posição 35 | Posição 8-12 | +66% |
| CTR nas SERPs | 1-2% | 4-6% | +200% |
| Featured Snippets | 0 | 5-10 keywords | ∞ |
| Tráfego orgânico (6 meses) | 300 visitas/mês | 800-1200 visitas/mês | +166% |
| Taxa de conversão | 2% | 4-5% | +100% |

**Tempo estimado de implementação:**
- Fase 0 (conformidade): 1-2 semanas
- Fase 1 (estruturas SEO): 2-3 semanas
- Sistema de avaliações: 1 semana
- **Total:** 4-6 semanas para implementação completa

---

## 12. PRÓXIMOS PASSOS

1. **Revisar este documento** com equipe técnica
2. **Atualizar PRD principal** incorporando todas as seções
3. **Priorizar implementações** (Fase 0 → Fase 1 → Paralelas)
4. **Criar templates HTML** com todas as estruturas obrigatórias
5. **Validar conformidade LGPD** (consultar advogado se necessário)
6. **Lançar páginas programáticas** apenas após Fase 0 completa

---

**Dúvidas ou clarificações:** Este documento deve ser lido em conjunto com o PRD principal. Em caso de conflito, as diretrizes deste documento prevalecem para questões de SEO e conformidade.