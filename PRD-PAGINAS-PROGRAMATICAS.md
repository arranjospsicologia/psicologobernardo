# PRD: Sistema de Páginas Programáticas - Psicólogo Bernardo

**Versão:** 2.0
**Data:** 25 de outubro de 2025
**Autor:** Estratégia SEO Programático
**Status:** Expandido com Serviços e Modalidades de Atendimento

---

## Índice

1. [Visão Geral](#visão-geral)
2. [Objetivos e Métricas de Sucesso](#objetivos-e-métricas-de-sucesso)
3. [Priorização Estratégica](#priorização-estratégica)
4. [Modelo de Dados](#modelo-de-dados)
5. [Especificações Técnicas](#especificações-técnicas)
6. [Templates de Página](#templates-de-página)
7. [Requisitos Funcionais](#requisitos-funcionais)
8. [Requisitos Não-Funcionais](#requisitos-não-funcionais)
9. [Roadmap de Implementação](#roadmap-de-implementação)
10. [Critérios de Aceitação](#critérios-de-aceitação)

---

## 1. Visão Geral

### 1.1 Problema
O site psicologobernardo.com.br atualmente perde tráfego orgânico de alta qualidade por não ter páginas otimizadas para:
- Buscas específicas de localização ("psicólogo no Jardim da Penha")
- Problemas específicos de saúde mental ("psicólogo para ansiedade em Vitória")
- Combinações long-tail de alta intenção

### 1.2 Solução Proposta
Implementar um sistema de geração programática de páginas SEO-otimizadas baseado em 6 templates prioritários:
1. **Localização** (Fase 1)
2. **Problema + Localização** (Fase 1)
3. **Modalidade (Terapia Online)** (Fase 2)
4. **Problema + Modalidade** (Fase 2)
5. **Serviço + Localização** (Fase 3)
6. **Público + Problema + Localização** (Fase 3)

**NOVO:** Todas as páginas agora incluem dimensão de **modalidade de atendimento** (presencial/online/híbrido) para capturar buscas por "psicólogo online", "terapia online", "atendimento remoto", "teleconsulta psicológica".

### 1.3 Escopo do MVP (Fase 1)
- **5 páginas de localização** para os bairros prioritários de Vitória/ES
- **5 páginas de problema + localização** para os problemas de maior demanda
- **3 páginas de modalidade online** (Psicoterapia Online, Terapia de Casal Online, Tratamento Ansiedade Online)
- **Sistema base de templates** reutilizável para escalar para 200+ páginas
- **Integração com 67 serviços cadastrados** no Doctoralia

### 1.4 Fora do Escopo (MVP)
- Sistema de CMS automático
- Geração de conteúdo por IA sem revisão humana
- Traduções para outros idiomas
- Páginas para cidades fora de Vitória/ES

---

## 2. Objetivos e Métricas de Sucesso

### 2.1 Objetivos de Negócio
1. **Aumentar leads qualificados** vindos de busca orgânica em 200% em 6 meses
2. **Reduzir custo por aquisição (CPA)** em 40% vs Google Ads
3. **Estabelecer autoridade local** como referência em saúde mental em Vitória/ES
4. **Gerar receita adicional** de R$ 10.000-15.000/mês em 12 meses via SEO

### 2.2 Objetivos de SEO
1. **Ranquear Top 3** para 10+ keywords de alta prioridade em 6 meses
2. **Ranquear Top 10** para 30+ keywords em 6 meses
3. **Gerar 1.000+ visitas orgânicas/mês** em 6 meses
4. **CTR médio de 4%+** nas SERPs

### 2.3 KPIs Primários

| Métrica | Baseline (Mês 0) | Meta Mês 3 | Meta Mês 6 | Meta Mês 12 |
|---------|------------------|------------|------------|-------------|
| Tráfego Orgânico | 100 visitas/mês | 300/mês | 800/mês | 2.000/mês |
| Keywords Ranqueando (Top 10) | 5 | 15 | 30 | 60+ |
| Leads Orgânicos | 2/mês | 8/mês | 20/mês | 40+/mês |
| Taxa de Conversão | 2% | 3% | 4% | 5% |
| Posição Média | 35 | 20 | 12 | 7 |

### 2.4 KPIs Secundários
- Tempo médio na página: >2 minutos
- Taxa de rejeição: <60%
- Páginas por sessão: >1.5
- Velocidade de carregamento: <2 segundos

---

## 3. Priorização Estratégica

### 3.1 Framework de Priorização

Cada página/keyword recebe uma pontuação baseada em:

**Fórmula de Prioridade:**
```
Score = (Volume × 0.3) + (Proximidade × 0.4) + (Intenção × 0.2) + (Conteúdo × 0.1)
```

**Critérios:**
- **Volume (0-10):** Estimativa de buscas mensais
- **Proximidade (0-10):** Relevância geográfica e de serviço
- **Intenção (0-10):** Probabilidade de conversão
- **Conteúdo (0-10):** Capacidade de criar conteúdo sólido e único

### 3.2 Matriz de Priorização: Localização

| Bairro | População | Proximidade | Volume Est. | Score | Prioridade |
|--------|-----------|-------------|-------------|-------|------------|
| **Jardim da Penha** | 30.571 | 10 (consultório aqui) | 80/mês | 9.2 | ⭐⭐⭐⭐⭐ P0 |
| **Jardim Camburi** | 39.157 | 9 (bairro vizinho) | 100/mês | 9.0 | ⭐⭐⭐⭐⭐ P0 |
| **Praia do Canto** | 15.147 | 8 (próximo, público alto valor) | 70/mês | 8.5 | ⭐⭐⭐⭐⭐ P0 |
| **Mata da Praia** | ~10.000 | 9 (bairro vizinho) | 50/mês | 8.0 | ⭐⭐⭐⭐ P1 |
| **Centro Vitória** | Alta circulação | 7 (comercial, online) | 90/mês | 8.2 | ⭐⭐⭐⭐ P1 |
| **Enseada do Suá** | ~8.000 | 7 | 40/mês | 7.2 | ⭐⭐⭐ P2 |
| **Bento Ferreira** | ~7.000 | 8 (próximo UFES) | 35/mês | 7.0 | ⭐⭐⭐ P2 |

**Decisão MVP:** Implementar P0 (3 bairros) na Fase 1

### 3.3 Matriz de Priorização: Problemas

| Problema | Prevalência BR | Demanda | Conteúdo Existente | Score | Prioridade |
|----------|----------------|---------|-------------------|-------|------------|
| **Ansiedade** | 45% população | 141k afastamentos | ✅ Artigo blog | 9.5 | ⭐⭐⭐⭐⭐ P0 |
| **Depressão** | 19% população | 113k afastamentos | ❌ | 9.0 | ⭐⭐⭐⭐⭐ P0 |
| **Burnout** | +134% crescimento | 52k afastamentos | ❌ | 8.8 | ⭐⭐⭐⭐⭐ P0 |
| **Terapia de Casal** | Alta demanda | N/A | ❌ | 8.5 | ⭐⭐⭐⭐⭐ P0 |
| **Síndrome do Pânico** | Crescente | Alta | ❌ | 8.3 | ⭐⭐⭐⭐ P1 |
| **Crise Existencial** | Média | Média | ✅ Artigo blog | 8.0 | ⭐⭐⭐⭐ P1 |
| **Insônia/Sono** | 30% população | Alta | ❌ | 7.8 | ⭐⭐⭐⭐ P1 |
| **Baixa Autoestima** | Alta | Média | ❌ | 7.5 | ⭐⭐⭐ P2 |
| **Luto** | Média | Média alta | ❌ | 7.2 | ⭐⭐⭐ P2 |
| **Traumas** | Média | Alta | ❌ | 7.0 | ⭐⭐⭐ P2 |
| **Transição de Carreira** | Média | Média | ❌ | 6.8 | ⭐⭐ P3 |
| **Comunicação Assertiva** | Média | Média-baixa | ❌ | 6.5 | ⭐⭐ P3 |
| **Doenças Psicossomáticas** | Baixa | Média | ❌ | 6.2 | ⭐⭐ P3 |

**Decisão MVP:** Implementar top 5 (P0) na Fase 1

### 3.4 Matriz de Priorização: Modalidades de Atendimento (NOVO)

| Modalidade | Volume Est. | Tendência | Diferencial | Score | Prioridade |
|------------|-------------|-----------|-------------|-------|------------|
| **Psicoterapia Online** | 320/mês | Crescente pós-COVID | ✅ Oferecido | 9.5 | ⭐⭐⭐⭐⭐ P0 |
| **Terapia de Casal Online** | 150/mês | Crescente | ✅ Oferecido | 8.8 | ⭐⭐⭐⭐⭐ P0 |
| **Tratamento Ansiedade Online** | 180/mês | Alta | ✅ Oferecido | 8.7 | ⭐⭐⭐⭐⭐ P0 |
| **Psicólogo Online Vitória** | 200/mês | Alta | ✅ SEO local + online | 8.5 | ⭐⭐⭐⭐ P1 |
| **Teleconsulta Psicologia** | 90/mês | Crescente | ✅ Oferecido | 7.8 | ⭐⭐⭐⭐ P1 |
| **Atendimento Remoto Psicológico** | 60/mês | Média | ✅ Oferecido | 7.2 | ⭐⭐⭐ P2 |

**Decisão MVP:** Implementar top 3 (P0) na Fase 2

**Palavras-chave relacionadas:**
- "psicólogo online"
- "terapia online"
- "psicoterapia online"
- "atendimento psicológico remoto"
- "teleconsulta psicológica"
- "consulta psicólogo online"
- "sessão de terapia online"

### 3.5 Matriz de Priorização: Públicos

| Público | Diferencial Negócio | Volume | Conteúdo Existente | Score | Prioridade |
|---------|---------------------|--------|-------------------|-------|------------|
| **Homens** | ✅ Roda de conversa | Médio-Alto | ✅ Artigo blog | 9.0 | ⭐⭐⭐⭐⭐ P0 |
| **Casais** | ✅ Serviço oferecido | Alto | ❌ | 8.5 | ⭐⭐⭐⭐⭐ P0 |
| **Profissionais/Executivos** | Alta conversão | Médio-Alto | ❌ | 8.0 | ⭐⭐⭐⭐ P1 |
| **Jovens Adultos** | Alta prevalência ansiedade | Alto | ❌ | 7.8 | ⭐⭐⭐⭐ P1 |
| **Famílias** | ✅ Serviço oferecido | Médio | ❌ | 7.5 | ⭐⭐⭐ P2 |
| **Idosos** | Público-alvo declarado | Médio | ❌ | 7.2 | ⭐⭐⭐ P2 |

**Decisão MVP:** Implementar top 2 (P0) na Fase 2

### 3.6 Matriz de Priorização: Serviços Específicos (NOVO)

Baseado nos 67 serviços cadastrados no Doctoralia, priorizados por volume de busca e diferencial:

| Serviço | Volume Est. | Diferencial | Conteúdo | Score | Prioridade |
|---------|-------------|-------------|----------|-------|------------|
| **Avaliação Psicológica Bariátrica** | 120/mês | ✅ Nicho lucrativo | ❌ | 8.5 | ⭐⭐⭐⭐⭐ P0 |
| **Psicoterapia Humanista** | 90/mês | ✅ Abordagem principal | ❌ | 8.2 | ⭐⭐⭐⭐ P1 |
| **Comunicação Não Violenta** | 80/mês | ✅ Diferencial | ❌ | 7.8 | ⭐⭐⭐⭐ P1 |
| **Supervisão Clínica** | 70/mês | ✅ Público B2B | ❌ | 7.5 | ⭐⭐⭐ P2 |
| **Técnicas de Oratória** | 65/mês | ✅ Nicho corporativo | ❌ | 7.2 | ⭐⭐⭐ P2 |
| **Terapia Existencial** | 60/mês | ✅ Abordagem única | ❌ | 7.0 | ⭐⭐⭐ P2 |

**Decisão MVP:** Implementar top 3 na Fase 3

### 3.7 Combinações Long-Tail Prioritárias

| Combinação | Keyword | Score | Fase |
|------------|---------|-------|------|
| **Problema + Localização** | "Psicólogo para ansiedade em Vitória" | 9.5 | 1 |
| **Problema + Modalidade** | "Terapia para ansiedade online" | 9.3 | 1 |
| **Problema + Localização** | "Terapia para depressão em Vitória" | 9.2 | 1 |
| **Modalidade + Geral** | "Psicólogo online Vitória" | 9.1 | 1 |
| **Público + Localização** | "Psicólogo para homens em Vitória" | 9.0 | 1 |
| **Serviço + Localização** | "Terapia de casal em Vitória" | 8.8 | 1 |
| **Serviço + Modalidade** | "Terapia de casal online" | 8.8 | 2 |
| **Problema + Localização** | "Tratamento burnout Vitória" | 8.7 | 2 |
| **Problema + Modalidade** | "Tratamento para depressão online" | 8.6 | 2 |
| **Público + Problema** | "Terapia ansiedade para homens Vitória" | 8.5 | 2 |
| **Serviço + Localização** | "Avaliação psicológica bariátrica Vitória" | 8.3 | 2 |
| **Modalidade + Problema** | "Psicólogo online para burnout" | 8.2 | 3 |
| **Público + Modalidade** | "Terapia online para homens" | 8.0 | 3 |
| **Serviço + Modalidade** | "Teleconsulta psicológica" | 7.8 | 3 |
| **Público + Problema + Local** | "Terapia para executivos ansiedade Vitória" | 7.5 | 3 |

**NOVO:** Combinações com modalidade online têm alta prioridade devido ao crescimento pós-COVID e menor competição.

---

## 4. Modelo de Dados

### 4.1 Schema de Dados: Localização

```json
{
  "locations": [
    {
      "id": "jardim-da-penha",
      "name": "Jardim da Penha",
      "slug": "psicologo-jardim-da-penha",
      "population": 30571,
      "priority": "P0",
      "proximity_score": 10,
      "description": "Bairro onde está localizado o consultório",
      "neighboring_areas": [
        "Mata da Praia",
        "Jardim Camburi",
        "Bento Ferreira"
      ],
      "main_avenues": [
        "Av. Fernando Ferrari",
        "Av. Dante Michelini"
      ],
      "distance_from_office": "0 min",
      "transport_info": {
        "car": "Consultório localizado na Rua Darcy Grijó, 50",
        "bus": "Diversas linhas pela Av. Fernando Ferrari",
        "parking": "Estacionamento disponível"
      },
      "demographic": {
        "profile": "Residencial e universitário (próximo UFES)",
        "income_level": "Médio/Médio-alto",
        "main_concerns": ["ansiedade", "estresse acadêmico", "relacionamentos"]
      },
      "seo": {
        "title": "Psicólogo no Jardim da Penha - Vitória ES | Bernardo Carielo",
        "meta_description": "Psicólogo no Jardim da Penha com mais de 8 anos de experiência. Atendimento presencial e online. Agende sua consulta: (27) 99833-1228",
        "keywords": ["psicólogo jardim da penha", "psicoterapeuta jardim da penha", "terapia jardim da penha"],
        "h1": "Psicólogo no Jardim da Penha - Atendimento Presencial e Online",
        "estimated_volume": 80,
        "difficulty": 35
      },
      "geo": {
        "latitude": -20.2977,
        "longitude": -40.2925,
        "address": "Rua Darcy Grijó, 50 - Sala 409",
        "postal_code": "29060-630",
        "city": "Vitória",
        "state": "ES"
      }
    },
    {
      "id": "jardim-camburi",
      "name": "Jardim Camburi",
      "slug": "psicologo-jardim-camburi",
      "population": 39157,
      "priority": "P0",
      "proximity_score": 9,
      "description": "Bairro mais populoso de Vitória, vizinho ao consultório",
      "neighboring_areas": [
        "Jardim da Penha",
        "Mata da Praia",
        "Praia de Camburi"
      ],
      "main_avenues": [
        "Av. Dante Michelini",
        "Av. Fernando Ferrari"
      ],
      "distance_from_office": "7-10 min de carro",
      "transport_info": {
        "car": "Pela Av. Dante Michelini em direção ao Jardim da Penha",
        "bus": "Linhas que passam pela Av. Dante Michelini",
        "parking": "Estacionamento disponível no consultório"
      },
      "demographic": {
        "profile": "Residencial urbano, alta densidade",
        "income_level": "Médio",
        "main_concerns": ["ansiedade urbana", "estresse", "burnout", "relacionamentos"]
      },
      "seo": {
        "title": "Psicólogo Jardim Camburi - Vitória ES | Bernardo Carielo",
        "meta_description": "Psicólogo próximo ao Jardim Camburi. Consultório a 7 min de carro. Atendimento presencial e online. CRP 16/5527",
        "keywords": ["psicólogo jardim camburi", "psicoterapeuta camburi", "terapia jardim camburi vitória"],
        "h1": "Psicólogo para Moradores do Jardim Camburi",
        "estimated_volume": 100,
        "difficulty": 38
      },
      "geo": {
        "latitude": -20.2700,
        "longitude": -40.2800,
        "address": "Atende moradores do Jardim Camburi no consultório do Jardim da Penha",
        "city": "Vitória",
        "state": "ES"
      }
    },
    {
      "id": "praia-do-canto",
      "name": "Praia do Canto",
      "slug": "psicologo-praia-do-canto",
      "population": 15147,
      "priority": "P0",
      "proximity_score": 8,
      "description": "Bairro nobre com público de alto poder aquisitivo",
      "neighboring_areas": [
        "Enseada do Suá",
        "Ilha do Boi",
        "Santa Lúcia"
      ],
      "main_avenues": [
        "Av. Saturnino de Brito",
        "Rua Chapot Presvot"
      ],
      "distance_from_office": "10-15 min de carro",
      "transport_info": {
        "car": "Pela Av. Dante Michelini ou Terceira Ponte",
        "bus": "Linhas que conectam Praia do Canto ao Jardim da Penha",
        "parking": "Estacionamento disponível"
      },
      "demographic": {
        "profile": "Profissionais liberais, executivos, alta renda",
        "income_level": "Alto",
        "main_concerns": ["burnout", "performance", "relacionamentos", "qualidade de vida"]
      },
      "seo": {
        "title": "Psicólogo Praia do Canto - Vitória ES | Bernardo Carielo",
        "meta_description": "Psicólogo para moradores da Praia do Canto. Atendimento especializado para executivos e profissionais. CRP 16/5527",
        "keywords": ["psicólogo praia do canto", "terapia praia do canto", "psicólogo para executivos vitória"],
        "h1": "Psicólogo para Moradores da Praia do Canto",
        "estimated_volume": 70,
        "difficulty": 42
      },
      "geo": {
        "latitude": -20.2900,
        "longitude": -40.2950,
        "city": "Vitória",
        "state": "ES"
      }
    }
  ]
}
```

### 4.2 Schema de Dados: Problemas

```json
{
  "problems": [
    {
      "id": "ansiedade",
      "name": "Ansiedade",
      "slug": "ansiedade",
      "priority": "P0",
      "prevalence": {
        "percentage": 45,
        "source": "Pesquisa 2025 - Saúde Mental Brasil",
        "work_absences": 141414
      },
      "demographics": {
        "women": 55,
        "men": 35,
        "young_adults_18_24": 65
      },
      "related_problems": [
        "síndrome do pânico",
        "insônia",
        "estresse",
        "tensão muscular"
      ],
      "symptoms": [
        "Preocupação excessiva",
        "Dificuldade para relaxar",
        "Pensamentos acelerados",
        "Tensão muscular",
        "Dificuldade para dormir",
        "Irritabilidade",
        "Sintomas físicos (taquicardia, sudorese)"
      ],
      "when_to_seek_help": [
        "Quando interfere nas atividades diárias",
        "Quando impede sono adequado",
        "Quando gera sintomas físicos persistentes",
        "Quando afeta relacionamentos"
      ],
      "how_therapy_helps": "A Abordagem Centrada na Pessoa ajuda você a compreender as raízes da ansiedade e desenvolver formas mais saudáveis de lidar com as pressões da vida, sem julgamentos.",
      "blog_article": "/posts/ansiedade-sinais-desacelerar.html",
      "seo": {
        "title_template": "Psicólogo para Ansiedade em {location} | Tratamento Eficaz",
        "meta_description_template": "Psicólogo especializado em ansiedade em {location}. Mais de 8 anos ajudando pessoas a superarem ansiedade e recuperarem qualidade de vida.",
        "keywords": ["psicólogo para ansiedade", "tratamento ansiedade", "terapia ansiedade", "como lidar com ansiedade"],
        "h1_template": "Psicólogo para Ansiedade em {location}",
        "estimated_volume": 200,
        "difficulty": 45
      },
      "content_sections": {
        "intro": "A ansiedade afeta 45% dos brasileiros e é uma das principais causas de busca por psicoterapia. Se você sente preocupação constante, dificuldade para relaxar ou sintomas físicos sem causa médica aparente, a terapia pode ajudar.",
        "what_is": "A ansiedade é uma resposta natural do corpo a situações de perigo. Porém, quando se torna excessiva e constante, pode prejudicar sua qualidade de vida, relacionamentos e trabalho.",
        "approach": "Utilizo a Abordagem Centrada na Pessoa para criar um espaço seguro onde você pode explorar suas ansiedades sem julgamento, compreender seus gatilhos e desenvolver estratégias personalizadas para recuperar o equilíbrio."
      }
    },
    {
      "id": "depressao",
      "name": "Depressão",
      "slug": "depressao",
      "priority": "P0",
      "prevalence": {
        "percentage": 19,
        "source": "Pesquisa 2025 - Saúde Mental Brasil",
        "work_absences": 113604
      },
      "demographics": {
        "women": 24,
        "men": 13
      },
      "related_problems": [
        "ansiedade",
        "baixa autoestima",
        "isolamento social",
        "insônia"
      ],
      "symptoms": [
        "Tristeza persistente",
        "Perda de interesse em atividades",
        "Fadiga constante",
        "Alterações no sono",
        "Dificuldade de concentração",
        "Pensamentos negativos recorrentes",
        "Sentimento de vazio"
      ],
      "when_to_seek_help": [
        "Sintomas persistem por mais de 2 semanas",
        "Interferem no trabalho ou estudos",
        "Afetam relacionamentos importantes",
        "Pensamentos sobre morte ou suicídio"
      ],
      "how_therapy_helps": "A psicoterapia oferece um espaço para compreender as raízes da depressão, ressignificar experiências e reconstruir conexão com você mesmo e com a vida.",
      "blog_article": null,
      "seo": {
        "title_template": "Psicólogo para Depressão em {location} | Bernardo Carielo",
        "meta_description_template": "Tratamento para depressão em {location}. Psicólogo com 8+ anos de experiência. Abordagem acolhedora e sem julgamentos. CRP 16/5527",
        "keywords": ["psicólogo para depressão", "tratamento depressão", "terapia depressão", "ajuda para depressão"],
        "h1_template": "Psicólogo para Depressão em {location}",
        "estimated_volume": 150,
        "difficulty": 48
      },
      "content_sections": {
        "intro": "A depressão afeta 19% dos brasileiros e é uma das principais causas de afastamento do trabalho. Não é frescura, é uma condição séria que merece atenção e cuidado profissional.",
        "what_is": "A depressão vai além da tristeza passageira. É caracterizada por sintomas persistentes que afetam humor, energia, sono, apetite e capacidade de sentir prazer.",
        "approach": "Meu trabalho com depressão envolve criar um ambiente acolhedor onde você pode ser ouvido sem julgamentos, compreender seus padrões emocionais e, gradualmente, reconectar com aspectos de si que a depressão encobriu."
      }
    },
    {
      "id": "burnout",
      "name": "Burnout",
      "slug": "burnout",
      "priority": "P0",
      "prevalence": {
        "percentage": null,
        "source": "Crescimento de 134% em afastamentos (2024)",
        "work_absences": 52627
      },
      "demographics": {
        "professionals": "Alta prevalência",
        "age_range": "30-45 anos"
      },
      "related_problems": [
        "ansiedade",
        "depressão",
        "insônia",
        "despersonalização"
      ],
      "symptoms": [
        "Exaustão física e emocional",
        "Cinismo em relação ao trabalho",
        "Sensação de ineficácia",
        "Dificuldade de concentração",
        "Insônia",
        "Sintomas físicos (dores, problemas digestivos)",
        "Isolamento social"
      ],
      "when_to_seek_help": [
        "Exaustão que não melhora com descanso",
        "Pensamentos constantes de 'não aguento mais'",
        "Impacto na saúde física",
        "Vontade de abandonar tudo"
      ],
      "how_therapy_helps": "A terapia ajuda a identificar os limites que foram ultrapassados, ressignificar sua relação com trabalho e reconstruir um equilíbrio saudável entre vida profissional e pessoal.",
      "blog_article": null,
      "seo": {
        "title_template": "Tratamento para Burnout em {location} | Psicólogo Bernardo",
        "meta_description_template": "Psicólogo especializado em burnout em {location}. Ajudo profissionais a recuperarem equilíbrio e bem-estar. Agende sua consulta.",
        "keywords": ["burnout tratamento", "psicólogo burnout", "esgotamento profissional", "síndrome de burnout"],
        "h1_template": "Tratamento para Burnout em {location}",
        "estimated_volume": 120,
        "difficulty": 42
      },
      "content_sections": {
        "intro": "O burnout teve crescimento de 134% nos últimos anos e é reconhecido pela OMS como fenômeno ocupacional. Se você sente exaustão que não passa, cinismo e sensação de ineficácia, pode estar vivendo burnout.",
        "what_is": "Burnout não é apenas cansaço. É um estado de esgotamento físico, emocional e mental causado por estresse crônico no trabalho, caracterizado por exaustão, despersonalização e baixa realização profissional.",
        "approach": "Trabalho com burnout ajudando você a identificar os padrões que levaram ao esgotamento, estabelecer limites saudáveis e reconstruir uma relação mais equilibrada com trabalho e vida pessoal."
      }
    },
    {
      "id": "terapia-casal",
      "name": "Terapia de Casal",
      "slug": "terapia-casal",
      "priority": "P0",
      "prevalence": {
        "percentage": null,
        "source": "Alta demanda constante",
        "work_absences": null
      },
      "demographics": {
        "age_range": "25-55 anos",
        "relationship_stage": "Todos os estágios"
      },
      "related_problems": [
        "comunicação",
        "conflitos",
        "infidelidade",
        "distanciamento emocional"
      ],
      "symptoms": [
        "Conflitos frequentes",
        "Falta de comunicação",
        "Distanciamento emocional",
        "Falta de intimidade",
        "Ressentimentos acumulados",
        "Dificuldade em tomar decisões juntos",
        "Sensação de solidão dentro do relacionamento"
      ],
      "when_to_seek_help": [
        "Conflitos se tornam constantes",
        "Comunicação está prejudicada",
        "Intimidade diminuiu significativamente",
        "Consideram separação mas querem tentar",
        "Passam por transições importantes (casamento, filhos, etc)"
      ],
      "how_therapy_helps": "A terapia de casal oferece um espaço neutro onde ambos podem ser ouvidos, melhorar a comunicação e reconstruir a conexão. Não tomo lados - meu papel é facilitar o diálogo autêntico.",
      "blog_article": null,
      "seo": {
        "title_template": "Terapia de Casal em {location} | Psicólogo Bernardo Carielo",
        "meta_description_template": "Terapia de casal em {location}. Sessões de 75 min presenciais. Melhore comunicação e fortaleça seu relacionamento. CRP 16/5527",
        "keywords": ["terapia de casal", "psicólogo para casais", "terapia para casais", "conselheiro matrimonial"],
        "h1_template": "Terapia de Casal em {location}",
        "estimated_volume": 180,
        "difficulty": 40
      },
      "content_sections": {
        "intro": "Procurar terapia de casal não é sinal de fracasso, mas de compromisso com o relacionamento. Muitos casais buscam ajuda quando a comunicação está difícil, há conflitos frequentes ou o distanciamento emocional cresce.",
        "what_is": "A terapia de casal é um espaço seguro onde ambos parceiros podem expressar sentimentos, melhorar comunicação e trabalhar conflitos. Não é sobre 'consertar' alguém, mas sobre fortalecer a relação.",
        "approach": "Nas sessões de 75 minutos, crio um ambiente onde ambos podem se expressar sem julgamento. Meu papel não é tomar lados, mas facilitar o diálogo autêntico e ajudar vocês a se reconectarem."
      }
    },
    {
      "id": "sindrome-panico",
      "name": "Síndrome do Pânico",
      "slug": "sindrome-panico",
      "priority": "P1",
      "prevalence": {
        "percentage": null,
        "source": "Crescente nos últimos anos",
        "work_absences": "Incluído em transtornos de ansiedade"
      },
      "related_problems": [
        "ansiedade",
        "agorafobia",
        "depressão"
      ],
      "symptoms": [
        "Crises súbitas de medo intenso",
        "Palpitações ou taquicardia",
        "Sensação de falta de ar",
        "Tremores",
        "Medo de morrer ou perder o controle",
        "Tontura ou vertigem",
        "Evitação de lugares onde teve crises"
      ],
      "when_to_seek_help": [
        "Teve pelo menos uma crise de pânico",
        "Vive com medo de ter nova crise",
        "Evita situações ou lugares",
        "Crises afetam sua rotina"
      ],
      "how_therapy_helps": "A terapia ajuda a compreender os gatilhos das crises, desenvolver estratégias para manejá-las e, gradualmente, reduzir a frequência e intensidade dos ataques de pânico.",
      "blog_article": null,
      "seo": {
        "title_template": "Psicólogo para Síndrome do Pânico em {location} | Bernardo Carielo",
        "meta_description_template": "Tratamento para síndrome do pânico em {location}. Ajudo pessoas a superarem crises de pânico e recuperarem autonomia. CRP 16/5527",
        "keywords": ["síndrome do pânico tratamento", "psicólogo pânico", "crises de pânico", "ataque de pânico ajuda"],
        "h1_template": "Psicólogo para Síndrome do Pânico em {location}",
        "estimated_volume": 90,
        "difficulty": 44
      }
    }
  ]
}
```

### 4.3 Schema de Dados: Públicos

```json
{
  "audiences": [
    {
      "id": "homens",
      "name": "Homens",
      "slug": "homens",
      "priority": "P0",
      "differentiator": "Roda de Conversa para Homens",
      "demographics": {
        "age_range": "25-55 anos",
        "main_concerns": ["dificuldade expressar emoções", "pressão social", "relacionamentos", "trabalho"]
      },
      "barriers": [
        "Estigma social ('homem não chora')",
        "Falta de modelo de vulnerabilidade",
        "Crença que deve resolver sozinho",
        "Vergonha de buscar ajuda"
      ],
      "why_therapy": [
        "Espaço seguro para expressar emoções",
        "Sem julgamentos sobre masculinidade",
        "Compreensão das pressões sociais",
        "Desenvolvimento de inteligência emocional"
      ],
      "common_issues": [
        "Ansiedade e estresse",
        "Dificuldade em relacionamentos",
        "Pressão para prover/ter sucesso",
        "Raiva e irritabilidade",
        "Isolamento emocional"
      ],
      "blog_article": "/posts/terapia-para-homens.html",
      "special_offer": "Roda de Conversa para Homens - grupo terapêutico",
      "seo": {
        "title_template": "Psicólogo para Homens em {location} | Bernardo Carielo",
        "meta_description_template": "Psicólogo especializado em saúde mental masculina em {location}. Espaço seguro para homens cuidarem de suas emoções. Roda de conversa disponível.",
        "keywords": ["psicólogo para homens", "terapia masculina", "saúde mental masculina", "homens e emoções"],
        "h1_template": "Psicólogo para Homens em {location}",
        "estimated_volume": 85,
        "difficulty": 38
      }
    },
    {
      "id": "casais",
      "name": "Casais",
      "slug": "casais",
      "priority": "P0",
      "differentiator": "Sessões de 75 minutos presenciais",
      "demographics": {
        "age_range": "25-55 anos",
        "relationship_stage": "Namoro, casamento, união estável"
      },
      "common_issues": [
        "Comunicação prejudicada",
        "Conflitos frequentes",
        "Falta de intimidade",
        "Infidelidade",
        "Decisões importantes (filhos, mudanças)",
        "Distanciamento emocional"
      ],
      "why_therapy": [
        "Espaço neutro para diálogo",
        "Melhora na comunicação",
        "Compreensão mútua",
        "Fortalecimento do vínculo",
        "Resolução de conflitos"
      ],
      "seo": {
        "title_template": "Terapia de Casal em {location} | Psicólogo Bernardo",
        "meta_description_template": "Terapia de casal em {location}. Sessões de 75 min. Melhore comunicação e fortaleça seu relacionamento. CRP 16/5527",
        "keywords": ["terapia de casal", "terapia para casais", "psicólogo casais", "aconselhamento matrimonial"],
        "h1_template": "Terapia de Casal em {location}",
        "estimated_volume": 180,
        "difficulty": 40
      }
    }
  ]
}
```

### 4.4 Schema de Dados: Modalidades de Atendimento (NOVO)

```json
{
  "modalities": [
    {
      "id": "online",
      "name": "Terapia Online",
      "slug": "online",
      "priority": "P0",
      "description": "Atendimento psicológico remoto via videochamada",
      "platforms": [
        "Google Meet",
        "Zoom",
        "WhatsApp Video"
      ],
      "benefits": [
        "Atendimento de qualquer lugar",
        "Economia de tempo com deslocamento",
        "Maior flexibilidade de horários",
        "Conforto do seu ambiente",
        "Mesma eficácia que presencial (comprovado cientificamente)"
      ],
      "ideal_for": [
        "Pessoas com agenda apertada",
        "Quem mora longe ou em outra cidade",
        "Profissionais que viajam frequentemente",
        "Pessoas com mobilidade reduzida",
        "Quem prefere atendimento no conforto de casa"
      ],
      "requirements": [
        "Conexão estável de internet",
        "Dispositivo com câmera e microfone",
        "Ambiente privado e silencioso",
        "Fones de ouvido (recomendado)"
      ],
      "how_it_works": [
        "Agendamento via WhatsApp ou site",
        "Envio de link da sessão por e-mail",
        "Sessão de 50 minutos via videochamada",
        "Pagamento via PIX, transferência ou cartão",
        "Recibo/nota fiscal enviado por e-mail"
      ],
      "pricing": {
        "individual": "Mesmo valor do presencial",
        "couple": "Sessões de 75 min - mesmo valor do presencial"
      },
      "faq": [
        {
          "question": "Terapia online é tão eficaz quanto presencial?",
          "answer": "Sim. Estudos científicos comprovam que a terapia online tem a mesma eficácia que o atendimento presencial, desde que haja boa conexão e um ambiente adequado."
        },
        {
          "question": "Como funciona o pagamento?",
          "answer": "O pagamento pode ser feito via PIX, transferência bancária ou cartão de crédito/débito. O recibo é enviado por e-mail após a sessão."
        },
        {
          "question": "Posso fazer terapia online morando em outro estado?",
          "answer": "Sim! O atendimento online permite que você faça terapia de qualquer lugar do Brasil, mantendo continuidade mesmo se mudar de cidade."
        },
        {
          "question": "E se minha internet cair durante a sessão?",
          "answer": "Caso haja problemas técnicos, entramos em contato imediatamente para retomar a sessão. Se não for possível, remarcamos sem custos."
        }
      ],
      "seo": {
        "title_template": "{service} Online | Psicólogo Bernardo Carielo - CRP 16/5527",
        "meta_description_template": "{service} online com psicólogo experiente. Atendimento por videochamada de qualquer lugar. Agende sua consulta online.",
        "keywords": [
          "psicólogo online",
          "terapia online",
          "psicoterapia online",
          "atendimento psicológico remoto",
          "consulta psicólogo online",
          "teleconsulta psicologia",
          "terapia à distância",
          "sessão de terapia online"
        ],
        "h1_template": "{service} Online - Atendimento por Videochamada",
        "estimated_volume": 320,
        "difficulty": 52
      },
      "content_sections": {
        "intro": "A terapia online democratizou o acesso à saúde mental, permitindo que você cuide do seu bem-estar de qualquer lugar. Através de videochamadas seguras e confidenciais, você tem acesso ao mesmo atendimento humanizado e acolhedor.",
        "how_online_works": "Nas sessões online, utilizamos plataformas seguras de videochamada. Você agenda normalmente, recebe o link da sessão e, no horário marcado, nos encontramos virtualmente. A duração, frequência e abordagem são as mesmas do atendimento presencial.",
        "effectiveness": "Estudos científicos comprovam que a terapia online é tão eficaz quanto a presencial. A Abordagem Centrada na Pessoa se adapta perfeitamente ao formato online, pois o que importa é a qualidade da relação terapêutica, não o espaço físico.",
        "technology": "Utilizo plataformas confiáveis e seguras, com criptografia de ponta a ponta. Sua privacidade e confidencialidade são garantidas, seguindo todas as normas do Conselho Federal de Psicologia para atendimento online."
      },
      "regulations": {
        "cfp_resolution": "Resolução CFP 011/2018",
        "compliance": "Atendimento em conformidade com as normas do Conselho Federal de Psicologia",
        "data_privacy": "LGPD - Lei Geral de Proteção de Dados"
      }
    },
    {
      "id": "presencial",
      "name": "Atendimento Presencial",
      "slug": "presencial",
      "priority": "P1",
      "description": "Atendimento no consultório em Vitória/ES",
      "office_features": [
        "Sala privativa e climatizada",
        "Ambiente acolhedor e confortável",
        "Estacionamento disponível",
        "Acessibilidade",
        "Localização de fácil acesso"
      ],
      "ideal_for": [
        "Quem prefere contato presencial",
        "Mora em Vitória ou região metropolitana",
        "Primeira experiência com terapia",
        "Casos que se beneficiam da presença física"
      ],
      "seo": {
        "title_template": "{service} Presencial em {location} | Bernardo Carielo",
        "meta_description_template": "{service} presencial em {location}. Consultório no Jardim da Penha. Ambiente acolhedor e privativo. Agende sua consulta.",
        "keywords": [
          "psicólogo presencial",
          "consultório psicologia vitória",
          "terapia presencial",
          "psicólogo jardim da penha"
        ]
      }
    },
    {
      "id": "hibrido",
      "name": "Atendimento Híbrido",
      "slug": "hibrido",
      "priority": "P2",
      "description": "Flexibilidade para alternar entre presencial e online",
      "benefits": [
        "Flexibilidade total conforme sua necessidade",
        "Presencial quando possível, online quando necessário",
        "Continuidade do tratamento em viagens",
        "Adaptação a imprevistos"
      ],
      "ideal_for": [
        "Profissionais que viajam",
        "Pessoas com rotina variável",
        "Quem quer o melhor dos dois formatos"
      ]
    }
  ]
}
```

### 4.5 Schema de Dados: Serviços Específicos (NOVO)

Baseado nos 67 serviços cadastrados no Doctoralia:

```json
{
  "services": [
    {
      "id": "avaliacao-bariatrica",
      "name": "Avaliação Psicológica para Cirurgia Bariátrica",
      "slug": "avaliacao-psicologica-bariatrica",
      "category": "Saúde e Cirurgias",
      "priority": "P0",
      "description": "Avaliação psicológica obrigatória para cirurgia bariátrica",
      "what_includes": [
        "Entrevista clínica detalhada",
        "Aplicação de testes psicológicos",
        "Avaliação de motivação e expectativas",
        "Laudo psicológico completo",
        "Orientações pré-cirúrgicas"
      ],
      "deliverables": {
        "laudo": "Laudo psicológico em até 7 dias",
        "sessions": "2-3 sessões de avaliação",
        "validity": "Laudo válido por 6 meses"
      },
      "related_services": [
        "Acompanhamento pré-bariátrica",
        "Acompanhamento pós-bariátrica"
      ],
      "seo": {
        "title_template": "Avaliação Psicológica para Bariátrica em {location} | CRP 16/5527",
        "meta_description_template": "Laudo psicológico para cirurgia bariátrica em {location}. Psicólogo credenciado. Laudo em 7 dias. Agende sua avaliação.",
        "keywords": [
          "avaliação psicológica bariátrica",
          "laudo bariátrica vitória",
          "psicólogo bariátrica",
          "avaliação pré bariátrica"
        ],
        "estimated_volume": 120,
        "difficulty": 35
      }
    },
    {
      "id": "supervisao-clinica",
      "name": "Supervisão Clínica para Psicólogos",
      "slug": "supervisao-clinica-psicologos",
      "category": "Formação e Supervisão",
      "priority": "P1",
      "description": "Supervisão individual e em grupo para psicólogos",
      "formats": [
        "Supervisão individual (60 min)",
        "Supervisão em grupo (90 min)",
        "Online ou presencial"
      ],
      "target_audience": [
        "Psicólogos recém-formados",
        "Psicólogos em formação na ACP",
        "Psicólogos buscando aperfeiçoamento"
      ],
      "approach": "Abordagem Centrada na Pessoa e Fenomenologia",
      "seo": {
        "title_template": "Supervisão Clínica ACP em {location} | Bernardo Carielo",
        "meta_description_template": "Supervisão clínica para psicólogos em {location}. Abordagem Centrada na Pessoa. Individual ou grupo. Online e presencial.",
        "keywords": [
          "supervisão clínica",
          "supervisão ACP",
          "supervisão psicólogos",
          "formação abordagem centrada pessoa"
        ],
        "estimated_volume": 70,
        "difficulty": 28
      }
    }
  ]
}
```

---

## 5. Especificações Técnicas

### 5.1 Arquitetura de Arquivos

```
site_psicologo_bernardo/
├── index.html
├── blog.html
├── data/
│   ├── locations.json         # Dados de localização
│   ├── problems.json           # Dados de problemas
│   ├── audiences.json          # Dados de públicos
│   ├── modalities.json         # Dados de modalidades (NOVO)
│   ├── services.json           # Dados de serviços específicos (NOVO)
│   └── config.json             # Configurações globais
├── templates/
│   ├── location-page.html      # Template de localização
│   ├── problem-page.html       # Template de problema
│   ├── audience-page.html      # Template de público
│   ├── modality-page.html      # Template de modalidade (NOVO)
│   ├── service-page.html       # Template de serviço (NOVO)
│   ├── problem-modality.html   # Template problema + modalidade (NOVO)
│   └── components/
│       ├── header.html
│       ├── footer.html
│       ├── cta.html
│       ├── cta-online.html     # CTA específico para online (NOVO)
│       ├── faq.html
│       ├── faq-online.html     # FAQ específico para online (NOVO)
│       └── services-grid.html
├── localizacao/
│   ├── index.html              # Índice de todas localizações
│   ├── psicologo-jardim-da-penha.html
│   ├── psicologo-jardim-camburi.html
│   ├── psicologo-praia-do-canto.html
│   ├── psicologo-mata-da-praia.html
│   └── psicologo-centro-vitoria.html
├── problemas/
│   ├── index.html              # Índice de todos problemas
│   ├── ansiedade-vitoria.html
│   ├── depressao-vitoria.html
│   ├── burnout-vitoria.html
│   ├── terapia-casal-vitoria.html
│   └── sindrome-panico-vitoria.html
├── publicos/
│   ├── index.html              # Índice de públicos
│   ├── psicologo-para-homens-vitoria.html
│   └── terapia-casal-vitoria.html
├── online/                      # Páginas de modalidade online (NOVO)
│   ├── index.html              # Página principal de terapia online
│   ├── psicoterapia-online.html
│   ├── terapia-casal-online.html
│   ├── terapia-ansiedade-online.html
│   ├── terapia-depressao-online.html
│   ├── psicologo-online-vitoria.html
│   └── teleconsulta-psicologica.html
├── servicos/                    # Páginas de serviços específicos (NOVO)
│   ├── index.html              # Índice de todos serviços
│   ├── avaliacao-psicologica-bariatrica.html
│   ├── supervisao-clinica-psicologos.html
│   ├── comunicacao-nao-violenta.html
│   ├── psicoterapia-humanista.html
│   └── terapia-existencial.html
└── scripts/
    ├── generate-pages.js       # Script de geração
    ├── validate-data.js        # Validação de dados
    └── combine-variations.js   # Gera combinações long-tail (NOVO)
```

### 5.2 Tecnologias Recomendadas

**Opção 1: Estático (Recomendado para MVP)**
- HTML puro + JSON para dados
- JavaScript vanilla para geração
- Node.js script para build
- GitHub Pages ou Netlify para hospedagem

**Opção 2: SSG (Static Site Generator)**
- **11ty (Eleventy)** - Simples, flexível
- **Hugo** - Muito rápido
- **Next.js** - Mais robusto mas complexo

**Opção 3: Headless CMS**
- **Netlify CMS** - Gratuito, simples
- **Strapi** - Mais recursos
- **Contentful** - Profissional (pago)

**Recomendação para MVP:** Opção 1 (Estático) - Menor complexidade, mais controle

### 5.3 Script de Geração (Node.js)

```javascript
// scripts/generate-pages.js

const fs = require('fs');
const path = require('path');

// Carregar dados
const locations = JSON.parse(fs.readFileSync('./data/locations.json', 'utf8'));
const problems = JSON.parse(fs.readFileSync('./data/problems.json', 'utf8'));
const config = JSON.parse(fs.readFileSync('./data/config.json', 'utf8'));

// Carregar template
const locationTemplate = fs.readFileSync('./templates/location-page.html', 'utf8');

// Função para substituir variáveis no template
function replaceVariables(template, data) {
  let result = template;

  // Substituições simples
  Object.keys(data).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, data[key]);
  });

  // Substituições condicionais
  // {{#if variavel}}...{{/if}}
  result = result.replace(/{{#if (\w+)}}(.*?){{\/if}}/gs, (match, key, content) => {
    return data[key] ? content : '';
  });

  // Loops
  // {{#each array}}...{{/each}}
  result = result.replace(/{{#each (\w+)}}(.*?){{\/each}}/gs, (match, key, content) => {
    if (!data[key] || !Array.isArray(data[key])) return '';
    return data[key].map(item => replaceVariables(content, item)).join('');
  });

  return result;
}

// Gerar páginas de localização
locations.locations.forEach(location => {
  const pageData = {
    ...config,
    ...location,
    title: location.seo.title,
    metaDescription: location.seo.meta_description,
    h1: location.seo.h1,
    keywords: location.seo.keywords.join(', '),
    // Adicionar mais dados conforme necessário
  };

  const html = replaceVariables(locationTemplate, pageData);
  const filename = `./localizacao/${location.slug}.html`;

  fs.writeFileSync(filename, html);
  console.log(`✓ Gerado: ${filename}`);
});

console.log(`\nTotal: ${locations.locations.length} páginas de localização criadas`);
```

### 5.4 Requisitos de Performance

| Métrica | Alvo | Crítico |
|---------|------|---------|
| First Contentful Paint (FCP) | < 1.5s | < 2.5s |
| Largest Contentful Paint (LCP) | < 2.0s | < 3.0s |
| Time to Interactive (TTI) | < 3.0s | < 4.5s |
| Cumulative Layout Shift (CLS) | < 0.1 | < 0.25 |
| Total Page Size | < 500KB | < 1MB |
| Image Optimization | WebP, lazy loading | - |
| Mobile Score (PageSpeed) | > 90 | > 80 |
| Desktop Score (PageSpeed) | > 95 | > 90 |

---

## 6. Templates de Página

### 6.1 Template: Localização

**Estrutura HTML:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO Meta Tags -->
    <title>{{seo.title}}</title>
    <meta name="description" content="{{seo.meta_description}}">
    <meta name="keywords" content="{{seo.keywords}}">

    <!-- Open Graph -->
    <meta property="og:title" content="{{seo.title}}">
    <meta property="og:description" content="{{seo.meta_description}}">
    <meta property="og:image" content="{{config.og_image}}">
    <meta property="og:url" content="{{config.base_url}}/localizacao/{{slug}}.html">

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Psychologist",
      "name": "{{config.psychologist_name}}",
      "telephone": "{{config.phone}}",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "{{geo.address}}",
        "addressLocality": "{{name}}",
        "addressRegion": "{{geo.state}}",
        "postalCode": "{{geo.postal_code}}",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": {{geo.latitude}},
        "longitude": {{geo.longitude}}
      },
      "areaServed": {
        "@type": "City",
        "name": "{{name}}, {{geo.city}}"
      }
    }
    </script>

    <!-- CSS -->
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <!-- Header -->
    {{> header}}

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>{{seo.h1}}</h1>
            <p>{{hero_description}}</p>
            <div class="cta-buttons">
                <a href="{{whatsapp_link}}" class="btn btn-primary">
                    Agendar Consulta
                </a>
                <a href="#localizacao" class="btn btn-secondary">
                    Ver Localização
                </a>
            </div>
        </div>
    </section>

    <!-- Por que escolher Section -->
    <section class="why-choose">
        <div class="container">
            <h2>Por que escolher um psicólogo {{proximity_phrase}}?</h2>
            <ul>
                <li>{{benefit_1}}</li>
                <li>{{benefit_2}}</li>
                <li>{{benefit_3}}</li>
                <li>{{benefit_4}}</li>
            </ul>
        </div>
    </section>

    <!-- Serviços -->
    {{> services-grid}}

    <!-- Principais Problemas -->
    <section class="problems">
        <div class="container">
            <h2>Principais Problemas que Trato em {{name}}</h2>
            <div class="problems-grid">
                {{#each main_problems}}
                <div class="problem-card">
                    <h3>{{name}}</h3>
                    <p>{{description}}</p>
                </div>
                {{/each}}
            </div>
        </div>
    </section>

    <!-- Localização -->
    <section class="location" id="localizacao">
        <div class="container">
            <h2>Como Chegar {{from_location_phrase}}</h2>
            <div class="location-grid">
                <div class="location-info">
                    <h3>Endereço</h3>
                    <p>{{geo.address}}</p>

                    <h3>Como Chegar</h3>
                    <p><strong>De carro:</strong> {{transport_info.car}}</p>
                    <p><strong>De ônibus:</strong> {{transport_info.bus}}</p>

                    {{#if transport_info.parking}}
                    <p><strong>Estacionamento:</strong> {{transport_info.parking}}</p>
                    {{/if}}
                </div>
                <div class="map">
                    <iframe src="{{google_maps_embed}}" width="100%" height="450"></iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    {{> faq location=name}}

    <!-- CTA Final -->
    {{> cta location=name}}

    <!-- Footer -->
    {{> footer}}
</body>
</html>
```

**Campos Dinâmicos (Localização):**

| Campo | Fonte | Exemplo |
|-------|-------|---------|
| `{{seo.title}}` | `locations[].seo.title` | "Psicólogo no Jardim da Penha - Vitória ES" |
| `{{name}}` | `locations[].name` | "Jardim da Penha" |
| `{{hero_description}}` | Gerado baseado em `description` + `proximity_score` | "Consultório localizado no coração do Jardim da Penha..." |
| `{{proximity_phrase}}` | Condicional baseado em `proximity_score` | "no seu bairro" / "próximo ao Jardim Camburi" |
| `{{benefit_1}}` | Gerado baseado em `distance_from_office` | "Menos de 10 minutos de deslocamento" |
| `{{whatsapp_link}}` | Config + `name` | "https://wa.me/5527998331228?text=Olá, moro no Jardim da Penha..." |
| `{{main_problems}}` | `demographic.main_concerns` mapeado para `problems[]` | Array de problemas relevantes |

### 6.2 Template: Problema + Localização

**Estrutura de Conteúdo:**

```html
<section class="hero">
    <h1>{{problem_name}} em {{location_name}}</h1>
    <p>{{problem_intro}}</p>
</section>

<section class="what-is">
    <h2>O que é {{problem_name}}?</h2>
    <p>{{problem_definition}}</p>

    <h3>Dados sobre {{problem_name}} no Brasil</h3>
    <ul>
        <li>{{prevalence_percentage}}% da população sofre com {{problem_name}}</li>
        {{#if work_absences}}
        <li>{{work_absences}} afastamentos do trabalho em 2024</li>
        {{/if}}
    </ul>
</section>

<section class="symptoms">
    <h2>Sintomas de {{problem_name}}</h2>
    <ul>
        {{#each symptoms}}
        <li>{{this}}</li>
        {{/each}}
    </ul>
</section>

<section class="when-seek-help">
    <h2>Quando Procurar um Psicólogo para {{problem_name}}</h2>
    <ul>
        {{#each when_to_seek_help}}
        <li>{{this}}</li>
        {{/each}}
    </ul>
</section>

<section class="how-therapy-helps">
    <h2>Como a Terapia Pode Ajudar com {{problem_name}}</h2>
    <p>{{how_therapy_helps}}</p>
    <p>{{approach_description}}</p>
</section>

{{#if blog_article}}
<section class="related-content">
    <h2>Leia Mais sobre {{problem_name}}</h2>
    <a href="{{blog_article}}">Artigo completo: {{blog_article_title}}</a>
</section>
{{/if}}

<section class="location-cta">
    <h2>Atendimento para {{problem_name}} em {{location_name}}</h2>
    <p>{{location_proximity_description}}</p>
    <a href="{{whatsapp_link}}" class="btn">Agendar Consulta</a>
</section>
```

**Campos Dinâmicos (Problema):**

| Campo | Fonte | Exemplo |
|-------|-------|---------|
| `{{problem_name}}` | `problems[].name` | "Ansiedade" |
| `{{location_name}}` | `locations[].name` | "Vitória" |
| `{{problem_intro}}` | `problems[].content_sections.intro` | "A ansiedade afeta 45% dos brasileiros..." |
| `{{prevalence_percentage}}` | `problems[].prevalence.percentage` | 45 |
| `{{symptoms}}` | `problems[].symptoms[]` | Array de sintomas |

### 6.3 Template: Modalidade Online (NOVO)

**Estrutura de Conteúdo:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <title>{{service_name}} Online | Psicólogo Bernardo Carielo - CRP 16/5527</title>
    <meta name="description" content="{{meta_description}}">
    <meta name="keywords" content="{{keywords}}">

    <!-- Schema.org para Serviço Online -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "{{service_name}} Online - Bernardo Carielo",
      "description": "{{service_description}}",
      "provider": {
        "@type": "Psychologist",
        "name": "Bernardo Carielo",
        "telephone": "+55 27 99833-1228",
        "url": "https://psicologobernardo.com.br"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceType": "Online",
        "availableLanguage": "pt-BR"
      }
    }
    </script>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero hero-online">
        <div class="container">
            <h1>{{service_name}} Online - Atendimento por Videochamada</h1>
            <p class="lead">{{intro_text}}</p>
            <div class="badges">
                <span class="badge">✓ CRP 16/5527</span>
                <span class="badge">✓ 8+ anos de experiência</span>
                <span class="badge">✓ Atendimento em todo Brasil</span>
                <span class="badge">✓ Plataforma segura</span>
            </div>
            <div class="cta-buttons">
                <a href="{{whatsapp_link}}" class="btn btn-primary">
                    Agendar Sessão Online
                </a>
                <a href="#como-funciona" class="btn btn-secondary">
                    Como Funciona
                </a>
            </div>
        </div>
    </section>

    <!-- Vantagens da Terapia Online -->
    <section class="benefits">
        <div class="container">
            <h2>Vantagens da {{service_name}} Online</h2>
            <div class="benefits-grid">
                {{#each benefits}}
                <div class="benefit-card">
                    <div class="icon">{{icon}}</div>
                    <h3>{{title}}</h3>
                    <p>{{description}}</p>
                </div>
                {{/each}}
            </div>
        </div>
    </section>

    <!-- Como Funciona -->
    <section class="how-it-works" id="como-funciona">
        <div class="container">
            <h2>Como Funciona a Terapia Online</h2>
            <div class="steps">
                <div class="step">
                    <span class="step-number">1</span>
                    <h3>Agendamento</h3>
                    <p>Entre em contato via WhatsApp ou pelo site e escolha o melhor horário para você.</p>
                </div>
                <div class="step">
                    <span class="step-number">2</span>
                    <h3>Confirmação</h3>
                    <p>Você receberá um e-mail com o link da videochamada e orientações para a sessão.</p>
                </div>
                <div class="step">
                    <span class="step-number">3</span>
                    <h3>Sessão Online</h3>
                    <p>No horário marcado, acesse o link e teremos nossa sessão de 50 minutos por vídeo.</p>
                </div>
                <div class="step">
                    <span class="step-number">4</span>
                    <h3>Pagamento</h3>
                    <p>Pagamento via PIX, transferência ou cartão. Recibo enviado por e-mail.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Eficácia Comprovada -->
    <section class="effectiveness">
        <div class="container">
            <h2>Terapia Online é Eficaz?</h2>
            <p class="intro">Sim! Estudos científicos comprovam que a terapia online tem a mesma eficácia que o atendimento presencial.</p>

            <div class="evidence">
                <div class="evidence-item">
                    <h3>Estudos Científicos</h3>
                    <p>Pesquisas publicadas em revistas internacionais mostram resultados equivalentes entre terapia online e presencial para ansiedade, depressão e outros transtornos.</p>
                </div>
                <div class="evidence-item">
                    <h3>Abordagem Centrada na Pessoa</h3>
                    <p>A ACP se adapta perfeitamente ao formato online, pois o que importa é a qualidade da relação terapêutica - e isso independe do espaço físico.</p>
                </div>
                <div class="evidence-item">
                    <h3>Reconhecimento Oficial</h3>
                    <p>O Conselho Federal de Psicologia regulamenta e autoriza o atendimento online (Resolução CFP 011/2018).</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Requisitos Técnicos -->
    <section class="requirements">
        <div class="container">
            <h2>O Que Você Precisa</h2>
            <ul class="requirements-list">
                <li>✓ Conexão estável de internet</li>
                <li>✓ Computador, tablet ou celular com câmera e microfone</li>
                <li>✓ Ambiente privado e silencioso</li>
                <li>✓ Fones de ouvido (recomendado para melhor privacidade)</li>
            </ul>
            <p class="note">Não precisa instalar nenhum programa - a sessão acontece pelo navegador ou WhatsApp Video.</p>
        </div>
    </section>

    <!-- Para Quem é Ideal -->
    <section class="ideal-for">
        <div class="container">
            <h2>Para Quem é Ideal a {{service_name}} Online</h2>
            <div class="ideal-grid">
                {{#each ideal_for}}
                <div class="ideal-card">
                    <h3>{{title}}</h3>
                    <p>{{description}}</p>
                </div>
                {{/each}}
            </div>
        </div>
    </section>

    <!-- FAQ Específico para Online -->
    <section class="faq">
        <div class="container">
            <h2>Perguntas Frequentes sobre Terapia Online</h2>
            {{#each faq}}
            <div class="faq-item">
                <h3>{{question}}</h3>
                <p>{{answer}}</p>
            </div>
            {{/each}}
        </div>
    </section>

    <!-- Segurança e Privacidade -->
    <section class="security">
        <div class="container">
            <h2>Segurança e Privacidade Garantidas</h2>
            <p>Utilizo plataformas com criptografia de ponta a ponta, em conformidade com a LGPD e normas do CFP.</p>
            <div class="security-badges">
                <span>✓ Criptografia E2E</span>
                <span>✓ Conformidade LGPD</span>
                <span>✓ Sigilo Profissional</span>
                <span>✓ CFP 011/2018</span>
            </div>
        </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-final">
        <div class="container">
            <h2>Pronto para Começar Sua Terapia Online?</h2>
            <p>Agende sua primeira sessão online e dê o primeiro passo para cuidar da sua saúde mental.</p>
            <a href="{{whatsapp_link}}" class="btn btn-large">
                Agendar Primeira Sessão Online
            </a>
            <p class="reassurance">Primeira conversa sem compromisso • Cancelamento flexível</p>
        </div>
    </section>
</body>
</html>
```

**Campos Dinâmicos (Modalidade Online):**

| Campo | Fonte | Exemplo |
|-------|-------|---------|
| `{{service_name}}` | Combinação de `services[].name` | "Psicoterapia" / "Terapia de Casal" |
| `{{meta_description}}` | `modalities[].seo.meta_description_template` | "Psicoterapia online com psicólogo experiente..." |
| `{{intro_text}}` | `modalities[].content_sections.intro` | "A terapia online democratizou o acesso..." |
| `{{benefits}}` | `modalities[].benefits[]` | Array de benefícios |
| `{{ideal_for}}` | `modalities[].ideal_for[]` | Array de perfis ideais |
| `{{faq}}` | `modalities[].faq[]` | Array de perguntas e respostas |
| `{{whatsapp_link}}` | Gerado dinamicamente | "https://wa.me/5527998331228?text=Olá, gostaria de agendar uma sessão online..." |

**Variações de Conteúdo:**

Para cada serviço prioritário, gerar página online:
- `/online/psicoterapia-online.html`
- `/online/terapia-casal-online.html`
- `/online/terapia-ansiedade-online.html`
- `/online/terapia-depressao-online.html`
- `/online/psicologo-online-vitoria.html` (combinação local + online)

### 6.4 Template: Problema + Modalidade (NOVO)

**Exemplo:** "Tratamento para Ansiedade Online"

```html
<section class="hero">
    <h1>{{problem_name}} Online - Atendimento por Videochamada</h1>
    <p>{{problem_intro_online}}</p>
</section>

<section class="problem-overview">
    <h2>O que é {{problem_name}}?</h2>
    <p>{{problem_definition}}</p>
    <!-- Mesma seção de sintomas do template de problema -->
</section>

<section class="online-advantages-for-problem">
    <h2>Por Que Fazer Terapia Online para {{problem_name}}?</h2>
    <ul>
        <li><strong>Conforto:</strong> Sessões no ambiente seguro da sua casa</li>
        <li><strong>Acessibilidade:</strong> Atendimento de qualquer lugar do Brasil</li>
        <li><strong>Continuidade:</strong> Não perca sessões por viagens ou imprevistos</li>
        <li><strong>Flexibilidade:</strong> Horários adaptados à sua rotina</li>
    </ul>
</section>

<!-- Combina conteúdo de problema + modalidade online -->
```

---

## 7. Requisitos Funcionais

### 7.1 RF01: Geração de Páginas de Localização

**Descrição:** Sistema deve gerar páginas HTML para cada localização prioritária

**Critérios:**
- [x] Carregar dados de `data/locations.json`
- [x] Filtrar apenas localizações com `priority: "P0"`
- [x] Gerar HTML usando `templates/location-page.html`
- [x] Substituir todas variáveis `{{variable}}`
- [x] Salvar em `/localizacao/{slug}.html`
- [x] Validar HTML gerado (W3C)
- [x] Gerar sitemap entry para cada página

**Entrada:**
```json
{
  "id": "jardim-da-penha",
  "name": "Jardim da Penha",
  "priority": "P0",
  ...
}
```

**Saída:**
```
/localizacao/psicologo-jardim-da-penha.html (válido, otimizado, < 500KB)
```

### 7.2 RF02: Geração de Páginas de Problema

**Descrição:** Sistema deve gerar páginas combinando problema + localização

**Critérios:**
- [ ] Carregar dados de `data/problems.json` e `data/locations.json`
- [ ] Para cada problema P0, gerar variante para Vitória (cidade principal)
- [ ] Usar template `templates/problem-page.html`
- [ ] Incluir dados estatísticos de prevalência
- [ ] Linkar para artigos de blog relacionados (se existir)
- [ ] Salvar em `/problemas/{problem-slug}-{location-slug}.html`

### 7.3 RF03: Geração de Índices

**Descrição:** Criar páginas índice listando todas variações

**Critérios:**
- [ ] Gerar `/localizacao/index.html` listando todos bairros
- [ ] Gerar `/problemas/index.html` listando todos problemas
- [ ] Incluir filtros (por prioridade, por tipo)
- [ ] Mapa interativo para localizações
- [ ] Links internos para cada página

### 7.4 RF04: Schema Markup Dinâmico

**Descrição:** Cada página deve ter schema.org markup apropriado

**Critérios:**
- [ ] Páginas de localização: `LocalBusiness` + `Psychologist`
- [ ] Páginas de problema: `MedicalWebPage` + `FAQPage`
- [ ] Incluir breadcrumbs schema
- [ ] Validar com Google Rich Results Test

### 7.5 RF05: Sitemap Automático

**Descrição:** Gerar sitemap.xml incluindo todas páginas

**Critérios:**
- [ ] Listar todas páginas geradas
- [ ] Prioridade baseada em score (0.9 para P0, 0.7 para P1)
- [ ] Changefreq: "monthly" para páginas estáticas
- [ ] Incluir lastmod com data de geração
- [ ] Validar XML

### 7.6 RF06: Geração de Páginas de Modalidade Online (NOVO)

**Descrição:** Sistema deve gerar páginas para serviços online e combinações problema + online

**Critérios:**
- [ ] Carregar dados de `data/modalities.json`
- [ ] Criar páginas base: `/online/index.html`, `/online/psicoterapia-online.html`
- [ ] Gerar combinações Problema + Online (ex: ansiedade-online.html)
- [ ] Incluir FAQs específicos para atendimento online
- [ ] Schema markup para serviço online (areaServed: Brasil)
- [ ] CTA adaptado para agendamento online
- [ ] Links para páginas presenciais correspondentes

**Páginas Prioritárias (Fase 2):**
1. `/online/psicoterapia-online.html`
2. `/online/terapia-casal-online.html`
3. `/online/terapia-ansiedade-online.html`
4. `/online/terapia-depressao-online.html`
5. `/online/psicologo-online-vitoria.html`

### 7.7 RF07: Geração de Páginas de Serviços Específicos (NOVO)

**Descrição:** Criar páginas para os 67 serviços do Doctoralia priorizados

**Critérios:**
- [ ] Carregar dados de `data/services.json`
- [ ] Filtrar serviços por prioridade (P0, P1 primeiro)
- [ ] Usar template `templates/service-page.html`
- [ ] Incluir informações específicas do serviço (o que inclui, entregáveis, prazos)
- [ ] Criar internal linking com problemas e públicos relacionados
- [ ] Salvar em `/servicos/{service-slug}.html`

**Serviços Prioritários (Fase 3):**
1. Avaliação Psicológica Bariátrica
2. Psicoterapia Humanista
3. Comunicação Não Violenta
4. Supervisão Clínica
5. Terapia Existencial

### 7.8 RF08: Sistema de Combinações Long-Tail (NOVO)

**Descrição:** Gerar automaticamente combinações de alta prioridade

**Critérios:**
- [ ] Script para combinar: Problema × Localização × Modalidade
- [ ] Filtrar apenas combinações com score > 7.5
- [ ] Evitar duplicação de conteúdo (canonical URLs)
- [ ] Gerar no máximo 3 variações por conceito base
- [ ] Validar viabilidade de conteúdo único

**Exemplos de Combinações:**
- "Psicólogo para ansiedade online" (problema + modalidade)
- "Terapia de casal online Vitória" (serviço + modalidade + local)
- "Psicólogo online para homens" (modalidade + público)

---

## 8. Requisitos Não-Funcionais

### 8.1 RNF01: Performance

**Critérios:**
- PageSpeed Score > 90 (mobile e desktop)
- LCP < 2.0s
- CLS < 0.1
- Total page size < 500KB
- Imagens otimizadas (WebP, lazy loading)

### 8.2 RNF02: SEO

**Critérios:**
- Todos meta tags obrigatórios presentes
- H1 único por página
- Hierarquia de headings correta (H1 > H2 > H3)
- URLs amigáveis (sem caracteres especiais)
- Alt text em todas imagens
- Internal linking entre páginas relacionadas
- Canonical URL definido

### 8.3 RNF03: Acessibilidade

**Critérios:**
- WCAG 2.1 Level AA compliance
- Contraste de cores adequado (4.5:1 mínimo)
- Navegação por teclado funcional
- ARIA labels em elementos interativos
- Textos alternativos em imagens

### 8.4 RNF04: Manutenibilidade

**Critérios:**
- Código comentado
- Documentação clara de como adicionar novos dados
- Separação clara entre dados e apresentação
- Versionamento (Git)
- Backup automático

### 8.5 RNF05: Escalabilidade

**Critérios:**
- Suportar até 200 páginas sem degradação de performance
- Tempo de build < 30 segundos para 50 páginas
- Sistema de cache para builds incrementais

---

## 9. Roadmap de Implementação

### Fase 1: MVP - Localização (Semanas 1-2)

**Objetivo:** 5 páginas de localização no ar

**Tarefas:**
- [x] Criar estrutura de dados (`locations.json`) ✅
- [x] Criar template base (`location-page.html`) ✅
- [x] Implementar 2 páginas manualmente (prova de conceito) ✅
- [ ] Criar script de geração (`generate-pages.js`)
- [ ] Gerar 3 páginas restantes (Praia do Canto, Mata da Praia, Centro)
- [ ] Testar em dispositivos móveis
- [ ] Validar SEO (Search Console)
- [ ] Publicar

**Entregáveis:**
- 5 páginas HTML publicadas
- `locations.json` completo
- Script de geração funcional
- Documentação de uso

**Métricas de Sucesso:**
- PageSpeed > 90
- Todas páginas indexadas em 7 dias
- Primeiras impressões no Google em 14 dias

### Fase 2: Problema + Modalidade Online (Semanas 3-4)

**Objetivo:** 5 páginas de problema + 5 páginas de modalidade online

**Tarefas - Problemas:**
- [ ] Criar estrutura de dados (`problems.json`)
- [ ] Criar template (`problem-page.html`)
- [ ] Escrever conteúdo único para cada problema
- [ ] Gerar páginas programaticamente
- [ ] Criar internal links entre problemas e localizações
- [ ] Adicionar FAQs específicos
- [ ] Publicar

**Tarefas - Modalidade Online (NOVO):**
- [ ] Criar estrutura de dados (`modalities.json`)
- [ ] Criar templates (`modality-page.html`, `problem-modality.html`)
- [ ] Criar FAQ específico para terapia online
- [ ] Escrever conteúdo sobre eficácia da terapia online
- [ ] Gerar 5 páginas principais online
- [ ] Implementar schema markup para serviço online
- [ ] Adicionar badges de segurança e conformidade CFP
- [ ] Publicar

**Entregáveis:**
- 5 páginas de problema
- 5 páginas de modalidade online
- `problems.json` completo
- `modalities.json` completo
- Conteúdo editorial de qualidade (1000+ palavras/página)

**Métricas de Sucesso:**
- Ranquear para "psicólogo online" e variações em 30 dias
- CTR > 4% em páginas online
- Taxa de conversão > 3% em páginas online

### Fase 3: Serviços Específicos e Públicos (Semanas 5-8)

**Objetivo:** Adicionar 15-20 páginas de serviços e públicos

**Tarefas - Serviços Específicos (NOVO):**
- [ ] Criar estrutura de dados (`services.json`) com 67 serviços
- [ ] Priorizar top 10 serviços por volume e diferencial
- [ ] Criar template (`service-page.html`)
- [ ] Escrever conteúdo para serviços P0/P1:
  - Avaliação Psicológica Bariátrica
  - Psicoterapia Humanista
  - Comunicação Não Violenta
  - Supervisão Clínica
  - Terapia Existencial
- [ ] Gerar páginas programaticamente
- [ ] Publicar

**Tarefas - Públicos e Expansão:**
- [ ] Adicionar 3 bairros P1/P2
- [ ] Adicionar 3 problemas P1/P2 (insônia, luto, baixa autoestima)
- [ ] Criar páginas de público (homens, casais, executivos)
- [ ] Implementar breadcrumbs
- [ ] Adicionar mapas interativos
- [ ] Criar sistema de recomendação ("Veja também")
- [ ] A/B test CTAs

**Entregáveis:**
- 30-40 páginas total
- `services.json` com 67 serviços catalogados
- 5 páginas de serviços específicos
- 3 páginas de públicos
- Sistema de internal linking otimizado
- Primeiros dados de conversão

**Métricas de Sucesso:**
- Ranquear Top 10 para "avaliação bariátrica vitória"
- 5+ conversões via páginas de serviços específicos

### Fase 4: Long-Tail e Refinamento (Semanas 9-12)

**Objetivo:** Escalar para 60-80 páginas e otimizar conversão

**Tarefas - Combinações Long-Tail (NOVO):**
- [ ] Implementar script `combine-variations.js`
- [ ] Gerar combinações prioritárias (score > 7.5):
  - Problema + Modalidade (ex: "ansiedade online")
  - Serviço + Modalidade (ex: "terapia casal online")
  - Público + Modalidade (ex: "terapia online para homens")
  - Público + Problema + Local (ex: "terapia executivos burnout vitória")
  - Local + Modalidade (ex: "psicólogo online vitória")
- [ ] Garantir conteúdo único (não duplicado)
- [ ] Implementar canonical URLs onde apropriado
- [ ] Criar matrix de internal linking

**Tarefas - Otimização:**
- [ ] Implementar blog content upgrade (CTAs nos artigos)
- [ ] Criar landing pages para Google Ads
- [ ] Implementar tracking de conversão completo
- [ ] Analisar e otimizar páginas com baixo CTR
- [ ] Adicionar depoimentos (dentro das normas CFP)
- [ ] Implementar heatmaps (Hotjar/Microsoft Clarity)
- [ ] Otimizar velocidade de páginas com LCP > 2.5s

**Entregáveis:**
- 60-80 páginas total
- Sistema de combinações automáticas funcionando
- Dashboard de métricas (GA4 + Search Console)
- Relatório de otimizações implementadas

**Métricas de Sucesso:**
- 30+ keywords ranqueando Top 10
- 1.000+ visitas orgânicas/mês
- 20+ leads orgânicos/mês
- Taxa de conversão média > 3.5%

---

## 10. Critérios de Aceitação

### 10.1 Critérios de Página

Cada página gerada deve:

**Conteúdo:**
- [ ] Ter 1000+ palavras de conteúdo único
- [ ] Ter H1 único contendo keyword principal
- [ ] Ter pelo menos 3 H2 sections
- [ ] Ter CTA claro (WhatsApp + Email)
- [ ] Ter internal links para 3+ páginas relacionadas
- [ ] Ter FAQ section com 3+ perguntas

**SEO:**
- [ ] Title tag: 50-60 caracteres
- [ ] Meta description: 150-160 caracteres
- [ ] URL amigável (sem acentos, espaços)
- [ ] Schema.org markup válido
- [ ] Open Graph tags completos
- [ ] Canonical URL definido
- [ ] Sitemap entry

**Performance:**
- [ ] PageSpeed Mobile > 85
- [ ] PageSpeed Desktop > 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Imagens otimizadas (WebP)
- [ ] CSS/JS minificados

**Acessibilidade:**
- [ ] Contraste de cores adequado
- [ ] Alt text em imagens
- [ ] ARIA labels em interativos
- [ ] Navegação por teclado funcional

### 10.2 Critérios de Sistema

**Build:**
- [ ] Gerar 10 páginas em < 10 segundos
- [ ] Validar todos JSONs antes de gerar
- [ ] Reportar erros de forma clara
- [ ] Gerar sitemap automaticamente
- [ ] Criar backup antes de sobrescrever

**Dados:**
- [ ] Validação de schema JSON
- [ ] Todos campos obrigatórios preenchidos
- [ ] Sem duplicação de slugs
- [ ] Prioridades bem definidas

---

## Anexos

### Anexo A: Checklist de Lançamento

**Antes de Publicar:**
- [ ] Revisar ortografia/gramática de todas páginas
- [ ] Testar todos links (internos e externos)
- [ ] Validar HTML (W3C Validator)
- [ ] Testar formulários de contato
- [ ] Testar WhatsApp buttons
- [ ] Verificar Google Maps embeds
- [ ] Testar em Chrome, Firefox, Safari
- [ ] Testar em mobile (iOS e Android)
- [ ] Verificar PageSpeed Insights
- [ ] Configurar Google Analytics
- [ ] Configurar Google Search Console
- [ ] Submeter sitemap

**Após Publicar:**
- [ ] Solicitar indexação no GSC
- [ ] Monitorar primeiros 48h (erros de rastreamento)
- [ ] Verificar se Analytics está rastreando
- [ ] Compartilhar em redes sociais
- [ ] Atualizar Google Meu Negócio

### Anexo B: Glossário

- **P0/P1/P2:** Níveis de prioridade (P0 = máxima)
- **LSI Keywords:** Latent Semantic Indexing - keywords relacionadas semanticamente
- **Schema Markup:** Código estruturado que ajuda Google entender conteúdo
- **LCP:** Largest Contentful Paint - métrica de performance
- **CLS:** Cumulative Layout Shift - estabilidade visual
- **CTR:** Click-Through Rate - taxa de cliques
- **SERP:** Search Engine Results Page - página de resultados do Google

### Anexo C: Recursos e Ferramentas

**Validação:**
- W3C HTML Validator: https://validator.w3.org/
- Schema Validator: https://validator.schema.org/
- Google Rich Results Test: https://search.google.com/test/rich-results

**Performance:**
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/

**SEO:**
- Google Search Console
- Google Analytics 4
- Ubersuggest (keyword research)
- Answer the Public (perguntas)

**Desenvolvimento:**
- Node.js (v18+)
- VS Code
- Git
- Netlify/Vercel (hospedagem)

### Anexo D: Resumo das Mudanças - Versão 2.0 (NOVO)

**Data:** 25 de outubro de 2025

**Principais Adições:**

1. **Dimensão de Modalidade de Atendimento**
   - Adicionado foco em terapia online/atendimento remoto
   - Novo schema de dados: `modalities.json`
   - Novos templates para páginas online
   - FAQ específico para atendimento online

2. **Serviços Específicos**
   - Integração dos 67 serviços cadastrados no Doctoralia
   - Novo schema de dados: `services.json`
   - Priorização de serviços de nicho (avaliação bariátrica, supervisão clínica)
   - Template específico para páginas de serviços

3. **Expansão de Problemas**
   - Adicionados 3 novos problemas (transição de carreira, comunicação, doenças psicossomáticas)
   - Total de 13 problemas priorizados (vs 10 na v1.0)

4. **Matriz de Modalidades**
   - Nova seção 3.4 com priorização de páginas online
   - Estimativas de volume de busca para keywords online
   - Palavras-chave relacionadas catalogadas

5. **Combinações Long-Tail Expandidas**
   - De 6 para 15 combinações prioritárias
   - Incluídas combinações com modalidade online
   - Score de priorização atualizado

6. **Novos Requisitos Funcionais**
   - RF06: Geração de Páginas de Modalidade Online
   - RF07: Geração de Páginas de Serviços Específicos
   - RF08: Sistema de Combinações Long-Tail

7. **Roadmap Atualizado**
   - Fase 2 expandida: 5 páginas online + 5 problemas
   - Fase 3 redefinida: Foco em serviços específicos
   - Fase 4 ampliada: 60-80 páginas (vs 50+ na v1.0)
   - Meta final: 60-80 páginas vs 50+ páginas

8. **Arquitetura de Arquivos**
   - Nova pasta: `/online/`
   - Nova pasta: `/servicos/`
   - Novos templates: `modality-page.html`, `service-page.html`, `problem-modality.html`
   - Novos componentes: `cta-online.html`, `faq-online.html`
   - Novo script: `combine-variations.js`

9. **Templates de Página**
   - Template 6.3: Modalidade Online (completo)
   - Template 6.4: Problema + Modalidade (novo)
   - Schema markup para serviços online
   - Badges de segurança e conformidade CFP

**Impacto Esperado:**

- **Aumento de alcance:** De Vitória/ES para todo Brasil (via online)
- **Maior volume de busca:** Keywords online têm volume 150-320/mês
- **Diferencial competitivo:** Menos competição em "psicólogo online" que presencial
- **Flexibilidade:** Captura tanto público local quanto nacional
- **Receita adicional:** Ampliação de público-alvo sem limitação geográfica

**Compatibilidade:**

- Totalmente compatível com v1.0
- Schemas JSON podem ser migrados sem perda de dados
- Templates anteriores continuam funcionando
- Roadmap de v1.0 foi expandido, não substituído

---

## Aprovação e Sign-off

**Aprovado por:** _________________
**Data:** _________________
**Versão:** 2.0

**Próxima Revisão:** Após conclusão da Fase 2 (incluindo páginas online)

---

**Notas Finais:**

Este PRD é um documento vivo. Deve ser atualizado conforme:
- Aprendizados durante implementação
- Dados de performance real
- Feedback de usuários
- Mudanças em algoritmos do Google
- Novas oportunidades de keywords
- **NOVO:** Performance das páginas de modalidade online vs presencial
- **NOVO:** Taxas de conversão por tipo de página (local, online, serviço específico)

**Sobre a Versão 2.0:**

A expansão para incluir modalidade online e serviços específicos foi baseada em:
1. **Tendências pós-COVID:** Aumento de 300% em buscas por "psicólogo online" desde 2020
2. **Oportunidade de mercado:** Menor competição em keywords de terapia online vs presencial em Vitória
3. **Ampliação geográfica:** Possibilidade de atender todo Brasil sem limitação física
4. **Integração com Doctoralia:** Aproveitamento dos 67 serviços já cadastrados para SEO
5. **Diferencial competitivo:** Serviços de nicho (avaliação bariátrica, supervisão clínica) têm alta conversão e baixa competição

**Prioridades de Implementação:**

Para maximizar ROI, recomenda-se seguir esta ordem:
1. **Fase 1** (Semanas 1-2): Consolidar páginas de localização presenciais
2. **Fase 2** (Semanas 3-4): **PRIORIDADE MÁXIMA** - Páginas online (maior volume, menor competição)
3. **Fase 3** (Semanas 5-8): Serviços específicos de alto valor (bariátrica, supervisão)
4. **Fase 4** (Semanas 9-12): Combinações long-tail para captura de cauda longa

Para dúvidas ou sugestões, contate a equipe de estratégia SEO.
