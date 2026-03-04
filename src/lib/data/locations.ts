// src/lib/data/locations.ts
// Dados centrais das páginas de localização do consultório.

export interface LocationFaqItem {
    question: string;
    answer: string;
}

export interface LocationConfig {
    slug: string;
    name: string;
    preposition: string; // "em", "na", "no", "proximo a"
    title: string;       // para <title> e SEO (com "| Bernardo Carielo")
    description: string;
    canonical: string;
    h1: string;          // para WebPage.name e <h1> (sem pipe)
    heroAlt: string;
    whatsappText: string;
    ctaH2: string;
    ctaSubtitle: string;
    aboutText: string;   // ACP local, 2-3 frases com ângulo local
    faqItems: LocationFaqItem[];
    faqSectionTitle: string; // variado: "Perguntas frequentes", "Dúvidas comuns", etc.
    blogArticles: { slug: string; title: string; reason: string }[];
    neighborhoodGroups: { label: string; items: string[] }[];
    crossLinks: { href: string; label: string; description: string }[];
    editorialTitle: string;
    editorialSubtitle: string;
    practicalSection: {
        title: string;
        // bodyHtml pode conter <p> e <a> e já pode vir com múltiplos parágrafos.
        // Renderizar com {@html loc.practicalSection.bodyHtml} diretamente,
        // SEM wrapper <p> ao redor para não gerar <p> dentro de <p> (HTML inválido).
        bodyHtml: string; // html seguro (controlado pelo dev, não por usuário)
    };
    articlesSectionTitle: string; // variado por página
    cardDescription: string;      // texto curto para o card no hub
}

const SITE_URL = "https://psicologobernardo.com.br";

export const locations: Record<string, LocationConfig> = {
    "mata-da-praia": {
        slug: "psicologo-mata-da-praia",
        name: "Mata da Praia",
        preposition: "próximo a",
        title: "Psicólogo próximo a Mata da Praia - Vitória ES | Bernardo Carielo",
        description:
            "Atendimento psicológico para moradores de Mata da Praia e bairros próximos. Consultório em Jardim da Penha, bairro vizinho. Psicoterapia pela Abordagem Centrada na Pessoa.",
        canonical: `${SITE_URL}/localizacao/psicologo-mata-da-praia/`,
        h1: "Psicólogo próximo a Mata da Praia - Bernardo Carielo",
        heroAlt:
            "Consultório de psicologia próximo a Mata da Praia - Ed. Madison, Jardim da Penha, Vitória",
        whatsappText:
            "Olá, moro na Mata da Praia e gostaria de agendar uma consulta.",
        ctaH2: "A poucos passos da Mata da Praia, um espaço de cuidado e autoconhecimento.",
        ctaSubtitle:
            "Entre em contato e vamos conversar sobre como posso ajudar",
        aboutText:
            "A Abordagem Centrada na Pessoa cria um espaço de escuta genuína, sem julgamento. Cada pessoa tem seu momento e seu ritmo — e aqui isso é respeitado.",
        editorialTitle:
            "Mata da Praia: qualidade de vida que se completa quando você cuida de si",
        editorialSubtitle:
            "Um bairro que convida a viver bem — e onde terapia é mais um passo nessa direção",
        practicalSection: {
            title: "Como chegar ao consultório saindo da Mata da Praia",
            bodyHtml: `<p>O consultório fica em Jardim da Penha, bairro vizinho à Mata da Praia. O acesso é rápido pela Av. Fernando Ferrari ou pelas ruas internas entre os dois bairros.</p><p>Se preferir não se deslocar, também ofereço <a href="/servicos/terapia-online/">terapia online</a> com a mesma qualidade e presença terapêutica.</p>`,
        },
        faqSectionTitle: "Dúvidas comuns sobre atendimento na região",
        articlesSectionTitle: "Leitura recomendada",
        cardDescription: "Bairro vizinho ao consultório, com acesso rápido",
        faqItems: [
            {
                question: "Dá para ir a pé da Mata da Praia até o consultório com tranquilidade?",
                answer: "Dá, sim — é um trajeto relativamente curto, por ruas movimentadas da região e próximo à UFES. Se preferir, você pode ir de carro ou alternar com terapia online em semanas mais corridas.",
            },
            {
                question: "Qual é o acesso mais simples saindo da Mata da Praia?",
                answer: "Em geral, dá para chegar rapidamente por vias como a Av. Fernando Ferrari ou pelas ruas internas entre os bairros. Em horário de pico, o trânsito pode mudar o melhor caminho, então vale escolher o trajeto mais confortável para você.",
            },
            {
                question: "Moro em condomínio e trabalho em home office: terapia presencial ainda faz sentido?",
                answer: "Para muita gente, sair de casa para um encontro presencial ajuda a marcar um tempo fora da rotina e facilita continuidade. Se for mais prático, dá para fazer online — ou alternar as modalidades conforme sua semana.",
            },
            {
                question: "É possível fazer terapia online morando na Mata da Praia?",
                answer: "Sim. Você pode fazer por videochamada, com a mesma presença e cuidado. Algumas pessoas preferem online em semanas cheias e presencial quando conseguem.",
            },
            {
                question: "O atendimento é por convênio?",
                answer: "Os atendimentos são particulares. Posso emitir recibo para reembolso, caso seu plano ofereça essa opção.",
            },
            {
                question: "Qual abordagem você utiliza?",
                answer: "Trabalho com a Abordagem Centrada na Pessoa: uma escuta que respeita seu ritmo e busca um espaço de confiança para você falar com liberdade.",
            },
        ],
        blogArticles: [
            {
                slug: "onde-cuidar-saude-mental-jardim-da-penha",
                title: "Onde cuidar da saúde mental em Jardim da Penha",
                reason: "Menciona a Praça da Mata da Praia",
            },
            {
                slug: "vida-dando-certo-piorando-por-dentro",
                title: "Quando a vida está dando certo, mas você está piorando por dentro",
                reason: "Tema central do editorial local",
            },
            {
                slug: "vinculos-liquidos-intimidade-digital",
                title: "Vínculos líquidos na era digital",
                reason: "Solidão em bairro residencial novo",
            },
        ],
        neighborhoodGroups: [
            {
                label: "Mata da Praia e vizinhos",
                items: [
                    "Mata da Praia",
                    "Jardim da Penha",
                    "Jardim Camburi",
                    "República",
                    "Goiabeiras",
                ],
            },
            {
                label: "Bairros litorâneos",
                items: [
                    "Praia do Canto",
                    "Enseada do Suá",
                    "Ilha do Boi",
                    "Ilha do Frade",
                ],
            },
        ],
        crossLinks: [
            {
                href: "/localizacao/psicologo-vitoria-es/",
                label: "Vitória ES",
                description: "Todos os bairros de Vitória",
            },
            {
                href: "/localizacao/psicologo-jardim-da-penha/",
                label: "Jardim da Penha",
                description: "Consultório em frente à UFES",
            },
            {
                href: "/localizacao/psicologo-praia-do-canto/",
                label: "Praia do Canto",
                description: "A poucos passos",
            },
            {
                href: "/localizacao/psicologo-vila-velha/",
                label: "Vila Velha",
                description: "Presencial e online",
            },
            {
                href: "/localizacao/psicologo-serra-es/",
                label: "Serra",
                description: "Presencial e online",
            },
        ],
    },

    "jardim-da-penha": {
        slug: "psicologo-jardim-da-penha",
        name: "Jardim da Penha",
        preposition: "em",
        title: "Psicólogo em Jardim da Penha – Vitória ES | Bernardo Carielo",
        description:
            "Psicólogo em Jardim da Penha, Vitória (ES). Consultório em frente à UFES. Atendimento presencial humanizado para ansiedade, depressão e relacionamentos. Agende sua sessão.",
        canonical: `${SITE_URL}/localizacao/psicologo-jardim-da-penha/`,
        h1: "Psicólogo em Jardim da Penha - Bernardo Carielo",
        heroAlt:
            "Fachada do Edifício Madison Office Tower - Consultório em Jardim da Penha, Vitória (ES)",
        whatsappText: "Olá, gostaria de agendar uma consulta em Jardim da Penha.",
        ctaH2: "Em frente à UFES, um espaço para você se ouvir de verdade",
        ctaSubtitle: "Entre em contato e vamos conversar sobre como posso ajudar",
        aboutText:
            "Trabalho pela Abordagem Centrada na Pessoa — uma forma de escuta que cria espaço para você falar com liberdade, sem roteiros ou imposições. Aqui, você é o protagonista do seu processo, e meu papel é estar presente enquanto você encontra suas próprias respostas.",
        editorialTitle: "Jardim da Penha: um bairro vivo, com espaço para pausar",
        editorialSubtitle: "Entre a UFES e a Reta da Penha, um lugar para se ouvir com calma",
        practicalSection: {
            title: "Como chegar ao consultório",
            bodyHtml: `<p>O consultório fica na <strong>Rua Darcy Grijó, 50 - Sala 409</strong>, no Edifício Madison Office Tower, em frente à UFES. O acesso é fácil pela Av. Fernando Ferrari (Reta da Penha) ou pela Rua da Lama. Há vagas nas ruas ao redor do prédio.</p><p>Também ofereço <a href="/servicos/terapia-online/">terapia online</a> para quem prefere não se deslocar ou tem uma semana mais corrida.</p>`,
        },
        faqSectionTitle: "Perguntas frequentes",
        articlesSectionTitle: "Para ler antes ou depois da sessão",
        cardDescription: "Consultório em frente à UFES, de fácil acesso",
        faqItems: [
            {
                question: "Onde exatamente fica o consultório em Jardim da Penha?",
                answer: "Fica na Rua Darcy Grijó, 50 - Sala 409, perto da UFES. A localização costuma ser fácil para quem já circula pela região (Reta da Penha / Fernando Ferrari).",
            },
            {
                question: "Estudo ou trabalho na UFES: dá para encaixar terapia na rotina?",
                answer: "Muitas pessoas preferem horários no fim do dia ou em momentos de menor carga. Se a semana ficar imprevisível, dá para considerar online temporariamente.",
            },
            {
                question: "O prédio tem estacionamento?",
                answer: "O edifício não possui estacionamento próprio. Em geral há vagas nas ruas ao redor, mas isso pode variar conforme horário e dia.",
            },
            {
                question: "Quanto tempo dura a sessão?",
                answer: "Em média, cerca de 60 minutos.",
            },
            {
                question: "É possível fazer online mesmo morando perto?",
                answer: "Sim. Muita gente alterna presencial e online de acordo com a semana.",
            },
            {
                question: "Qual abordagem você utiliza?",
                answer: "Abordagem Centrada na Pessoa, com foco na qualidade da relação e no respeito ao seu ritmo.",
            },
        ],
        blogArticles: [
            {
                slug: "onde-cuidar-saude-mental-jardim-da-penha",
                title: "Onde cuidar da saúde mental em Jardim da Penha",
                reason: "Principal referência de saúde mental no bairro",
            },
            {
                slug: "relacao-principal-ferramenta-terapia",
                title: "Por que a relação é a principal ferramenta da terapia?",
                reason: "Explica a essência do trabalho presencial",
            },
            {
                slug: "autonomia-vai-te-fazer-bem",
                title: "Por que a autonomia vai te fazer bem?",
                reason: "Tema recorrente com universitários da UFES",
            },
        ],
        neighborhoodGroups: [
            {
                label: "Vitória",
                items: [
                    "Jardim da Penha",
                    "Santa Luíza",
                    "Bento Ferreira",
                    "Jardim Camburi",
                ],
            },
            {
                label: "Região Metropolitana",
                items: ["Vila Velha", "Serra", "Cariacica", "Fundão"],
            },
            {
                label: "Bairros próximos",
                items: ["Praia do Canto", "Mata da Praia", "Goiabeiras", "República"],
            },
        ],
        crossLinks: [
            {
                href: "/localizacao/psicologo-vitoria-es/",
                label: "Vitória ES",
                description: "Todos os bairros de Vitória",
            },
            {
                href: "/localizacao/psicologo-praia-do-canto/",
                label: "Praia do Canto",
                description: "A poucos passos",
            },
            {
                href: "/localizacao/psicologo-mata-da-praia/",
                label: "Mata da Praia",
                description: "Bairro vizinho ao consultório",
            },
            {
                href: "/localizacao/psicologo-vila-velha/",
                label: "Vila Velha",
                description: "Presencial e online",
            },
            {
                href: "/localizacao/psicologo-serra-es/",
                label: "Serra",
                description: "Presencial e online",
            },
        ],
    },

    "praia-do-canto": {
        slug: "psicologo-praia-do-canto",
        name: "Praia do Canto",
        preposition: "próximo a",
        title: "Psicólogo próximo a Praia do Canto – Vitória ES | Bernardo Carielo",
        description:
            "Atendimento psicológico para moradores de Praia do Canto e bairros próximos. Consultório em Jardim da Penha, bairro vizinho. Psicoterapia pela Abordagem Centrada na Pessoa.",
        canonical: `${SITE_URL}/localizacao/psicologo-praia-do-canto/`,
        h1: "Psicólogo próximo a Praia do Canto - Bernardo Carielo",
        heroAlt:
            "Consultório de psicologia próximo a Praia do Canto - Ed. Madison, Jardim da Penha, Vitória",
        whatsappText:
            "Olá, moro na Praia do Canto e gostaria de agendar uma consulta.",
        ctaH2: "A poucos passos da Praia do Canto, um espaço para você se compreender melhor",
        ctaSubtitle: "Entre em contato e vamos conversar sobre como posso ajudar",
        aboutText:
            "Trabalho de um jeito que prioriza escuta real, sem fórmulas prontas. A Abordagem Centrada na Pessoa cria espaço para você falar com liberdade e construir caminhos com mais clareza.",
        editorialTitle: "Praia do Canto: cuidar de si também faz parte de viver bem",
        editorialSubtitle: "Num bairro que oferece conforto, terapia é uma escolha a mais",
        practicalSection: {
            title: "Acesso ao consultório desde a Praia do Canto",
            bodyHtml: `<p>O consultório fica em Jardim da Penha, bairro vizinho à Praia do Canto. O acesso costuma ser direto por vias internas da região litorânea ou pela Av. Dante Michelini.</p><p>Prefere não se deslocar? Ofereço <a href="/servicos/terapia-online/">terapia online</a> — você pode começar assim e migrar para presencial quando quiser.</p>`,
        },
        faqSectionTitle: "O que você pode querer saber",
        articlesSectionTitle: "Para ler com calma",
        cardDescription: "Região litorânea de Vitória, próxima ao consultório",
        faqItems: [
            {
                question: "Atende no próprio bairro Praia do Canto ou o consultório é em outro lugar?",
                answer: "O consultório fica em Jardim da Penha, bem perto. Muita gente da Praia do Canto prefere manter o atendimento em um lugar fora do circuito do dia a dia, com mais privacidade.",
            },
            {
                question: "Tenho receio de encontrar conhecidos ao chegar. Como costuma ser?",
                answer: "É uma dúvida comum. O edifício recebe pessoas por diferentes motivos, então a circulação tende a ser discreta. Se a privacidade for uma preocupação importante, a terapia online também é uma alternativa.",
            },
            {
                question: "Consigo conciliar terapia com uma rotina cheia (trabalho, academia, compromissos)?",
                answer: "Dá, sim — e às vezes é justamente quando a rotina está cheia que um horário fixo ajuda a cuidar do que fica para depois. Se deslocamento pesar em alguma semana, dá para usar a modalidade online.",
            },
            {
                question: "Atende convênio?",
                answer: "Os atendimentos são particulares. Em alguns casos é possível pedir reembolso ao plano, se ele oferecer.",
            },
            {
                question: "É possível fazer terapia online?",
                answer: "Sim. Você pode escolher online desde o início ou alternar com presencial conforme seu momento.",
            },
            {
                question: "Qual abordagem você utiliza?",
                answer: "Trabalho de um jeito que prioriza escuta real, sem fórmulas prontas — para que você possa se compreender melhor e construir caminhos com mais clareza.",
            },
        ],
        blogArticles: [
            {
                slug: "vinculos-liquidos-intimidade-digital",
                title: "Vínculos líquidos na era digital",
                reason: "Solidão em meios sociais agitados",
            },
            {
                slug: "relacao-principal-ferramenta-terapia",
                title: "Por que a relação é a principal ferramenta da terapia?",
                reason: "Essência do processo terapêutico",
            },
            {
                slug: "autonomia-vai-te-fazer-bem",
                title: "Por que a autonomia vai te fazer bem?",
                reason: "Tema relevante para quem busca autoconhecimento",
            },
        ],
        neighborhoodGroups: [
            {
                label: "Bairros litorâneos",
                items: [
                    "Praia do Canto",
                    "Mata da Praia",
                    "Ilha do Boi",
                    "Ilha do Frade",
                    "Enseada do Suá",
                ],
            },
            {
                label: "Bairros próximos",
                items: [
                    "Santa Lúcia",
                    "Bento Ferreira",
                    "Jardim da Penha",
                    "Jardim Camburi",
                ],
            },
        ],
        crossLinks: [
            {
                href: "/localizacao/psicologo-vitoria-es/",
                label: "Vitória ES",
                description: "Todos os bairros de Vitória",
            },
            {
                href: "/localizacao/psicologo-jardim-da-penha/",
                label: "Jardim da Penha",
                description: "Consultório em frente à UFES",
            },
            {
                href: "/localizacao/psicologo-mata-da-praia/",
                label: "Mata da Praia",
                description: "Bairro vizinho",
            },
            {
                href: "/localizacao/psicologo-vila-velha/",
                label: "Vila Velha",
                description: "Presencial e online",
            },
            {
                href: "/localizacao/psicologo-serra-es/",
                label: "Serra",
                description: "Presencial e online",
            },
        ],
    },

    "vitoria-es": {
        slug: "psicologo-vitoria-es",
        name: "Vitória ES",
        preposition: "em",
        title: "Psicólogo em Vitória ES – Atendimento Presencial e Online | Bernardo Carielo",
        description:
            "Atendimento psicológico em Vitória ES. Psicoterapia pela Abordagem Centrada na Pessoa em consultório localizado em Jardim da Penha. Atendimento presencial e online para toda a Grande Vitória.",
        canonical: `${SITE_URL}/localizacao/psicologo-vitoria-es/`,
        h1: "Psicólogo em Vitória ES - Bernardo Carielo",
        heroAlt:
            "Consultório de psicologia em Vitória ES - Ed. Madison, Jardim da Penha",
        whatsappText: "Olá, moro em Vitória e gostaria de agendar uma consulta.",
        ctaH2: "Em Vitória, um espaço de escuta e autoconhecimento para quem quer se cuidar",
        ctaSubtitle: "Entre em contato e vamos conversar sobre como posso ajudar",
        aboutText:
            "Uma escuta centrada na pessoa, para que a conversa seja um lugar seguro e honesto — sem pressa e sem julgamento. O seu processo é seu, e meu papel é estar presente enquanto você encontra seus próprios caminhos.",
        editorialTitle: "Vitória: uma cidade compacta com espaço para o que importa",
        editorialSubtitle: "No centro da Grande Vitória, um consultório para quem quer se conhecer melhor",
        practicalSection: {
            title: "Como chegar ao consultório",
            bodyHtml: `<p>O consultório fica na <strong>Rua Darcy Grijó, 50 - Sala 409</strong>, Jardim da Penha, Vitória — em frente à UFES, com acesso pela Av. Fernando Ferrari (Reta da Penha). Há vagas nas ruas ao redor do prédio.</p><p>Para quem mora em bairros mais distantes ou prefere praticidade, ofereço <a href="/servicos/terapia-online/">terapia online</a> com a mesma qualidade e presença terapêutica.</p>`,
        },
        faqSectionTitle: "Antes de marcar",
        articlesSectionTitle: "Da nossa biblioteca",
        cardDescription: "Atende toda Vitória, consultório em Jardim da Penha",
        faqItems: [
            {
                question: "Você atende pessoas de qualquer bairro de Vitória?",
                answer: "Sim. O consultório fica em Jardim da Penha e costuma ser acessível a partir de diferentes regiões da cidade.",
            },
            {
                question: "Não moro perto de Jardim da Penha. Ainda faz sentido marcar presencial?",
                answer: "Pode fazer, sim — especialmente se você consegue separar um horário fixo na semana. Se deslocamento virar obstáculo, você pode optar por online ou alternar modalidades.",
            },
            {
                question: "Estou em Vitória mas viajo com frequência. Isso atrapalha?",
                answer: "Não precisa atrapalhar: muitas pessoas mantêm o processo com sessões online durante viagens e presencial quando estão na cidade.",
            },
            {
                question: "Atende convênio?",
                answer: "Particular, com recibo para reembolso quando o plano oferece.",
            },
            {
                question: "Terapia online funciona mesmo?",
                answer: "Funciona para muita gente, principalmente quando há regularidade e um espaço adequado para a conversa.",
            },
            {
                question: "Qual abordagem você utiliza?",
                answer: "Uma escuta centrada na pessoa, para que a conversa seja um lugar seguro e honesto — sem pressa e sem julgamento.",
            },
        ],
        blogArticles: [
            {
                slug: "relacao-principal-ferramenta-terapia",
                title: "Por que a relação é a principal ferramenta da terapia?",
                reason: "Contexto do processo terapêutico",
            },
            {
                slug: "autonomia-vai-te-fazer-bem",
                title: "Por que a autonomia vai te fazer bem?",
                reason: "Tema central em terapia",
            },
            {
                slug: "vinculos-liquidos-intimidade-digital",
                title: "Vínculos líquidos na era digital",
                reason: "Realidade contemporânea nas cidades",
            },
        ],
        neighborhoodGroups: [
            {
                label: "Região da UFES",
                items: [
                    "Jardim da Penha",
                    "Mata da Praia",
                    "Goiabeiras",
                    "República",
                ],
            },
            {
                label: "Zona Leste",
                items: [
                    "Praia do Canto",
                    "Enseada do Suá",
                    "Jardim Camburi",
                    "Bento Ferreira",
                ],
            },
            {
                label: "Centro e outras regiões",
                items: ["Centro", "Santa Lúcia", "Maruípe", "Todos os bairros"],
            },
        ],
        crossLinks: [
            {
                href: "/localizacao/psicologo-jardim-da-penha/",
                label: "Jardim da Penha",
                description: "Consultório em frente à UFES",
            },
            {
                href: "/localizacao/psicologo-praia-do-canto/",
                label: "Praia do Canto",
                description: "Região litorânea de Vitória",
            },
            {
                href: "/localizacao/psicologo-mata-da-praia/",
                label: "Mata da Praia",
                description: "Bairro vizinho ao consultório",
            },
            {
                href: "/localizacao/psicologo-vila-velha/",
                label: "Vila Velha",
                description: "Presencial e online",
            },
            {
                href: "/localizacao/psicologo-serra-es/",
                label: "Serra",
                description: "Presencial e online",
            },
        ],
    },

    "vila-velha": {
        slug: "psicologo-vila-velha",
        name: "Vila Velha",
        preposition: "para",
        title: "Psicólogo para Vila Velha – Atendimento Presencial e Online | Bernardo Carielo",
        description:
            "Atendimento psicológico para moradores de Vila Velha. Consultório em Jardim da Penha, Vitória, do outro lado da Terceira Ponte. Também atendo online. Psicoterapia pela Abordagem Centrada na Pessoa.",
        canonical: `${SITE_URL}/localizacao/psicologo-vila-velha/`,
        h1: "Psicólogo para moradores de Vila Velha",
        heroAlt:
            "Consultório de psicologia acessível a moradores de Vila Velha - Ed. Madison, Jardim da Penha, Vitória",
        whatsappText:
            "Olá, moro em Vila Velha e gostaria de agendar uma consulta.",
        ctaH2: "Do outro lado da Terceira Ponte, um espaço para você se ouvir sem pressa",
        ctaSubtitle: "Entre em contato e vamos conversar sobre como posso ajudar",
        aboutText:
            "Trabalho com uma escuta que respeita seu ritmo e valoriza o que é importante para você. A Abordagem Centrada na Pessoa não tem fórmula pronta — acompanha o seu processo com presença e cuidado.",
        editorialTitle: "Vila Velha: do outro lado da baía, um espaço que é só seu",
        editorialSubtitle:
            "Cruzar a Terceira Ponte pode ser o começo de um tempo dedicado a você",
        practicalSection: {
            title: "Deslocamento e alternativas para quem vem de Vila Velha",
            bodyHtml: `<p>O consultório fica em Jardim da Penha, Vitória, acessível pela Terceira Ponte. Em horários de pico, o deslocamento pode ser mais trabalhoso — vale considerar um horário mais tranquilo ou usar a terapia online em semanas mais corridas.</p><p>Muitas pessoas de Vila Velha optam por <a href="/servicos/terapia-online/">terapia online</a> na maior parte das semanas e fazem presencial quando conseguem.</p>`,
        },
        faqSectionTitle: "Dúvidas comuns",
        articlesSectionTitle: "Artigos que podem ajudar",
        cardDescription: "Atende Vila Velha presencial e online",
        faqItems: [
            {
                question: "Qual é o melhor horário para atravessar a Terceira Ponte para a sessão?",
                answer: "Depende muito do seu bairro e do seu horário de trabalho. Em horários de pico, o deslocamento pode ficar bem mais cansativo — e, nesses casos, a terapia online pode ser uma alternativa prática.",
            },
            {
                question: "Preciso me preparar para ir de Vila Velha até o consultório?",
                answer: "Se você sente que o trânsito te estressa, vale considerar um tempo de chegada com folga ou escolher um horário mais confortável. A ideia é que a sessão não comece no susto do deslocamento.",
            },
            {
                question: "Dá para manter terapia mesmo com rotina de ponte e trânsito?",
                answer: "Dá. Algumas pessoas preferem presencial quando conseguem, e usam online quando a semana aperta — o importante é manter um cuidado possível.",
            },
            {
                question: "Atende convênio?",
                answer: "Particular, com recibo para reembolso se aplicável.",
            },
            {
                question: "Terapia online é opção?",
                answer: "Sim — e costuma ser a escolha de quem quer evitar deslocamento em semanas muito cheias.",
            },
            {
                question: "Qual abordagem você utiliza?",
                answer: "Trabalho com uma escuta que respeita seu ritmo e evita transformar sua vida em checklist: a ideia é criar espaço para você se ouvir de verdade.",
            },
        ],
        blogArticles: [
            {
                slug: "relacao-principal-ferramenta-terapia",
                title: "Por que a relação é a principal ferramenta da terapia?",
                reason: "Explica o que torna o processo terapêutico efetivo",
            },
            {
                slug: "vinculos-liquidos-intimidade-digital",
                title: "Vínculos líquidos na era digital",
                reason: "Relacionamentos na contemporaneidade",
            },
            {
                slug: "autonomia-vai-te-fazer-bem",
                title: "Por que a autonomia vai te fazer bem?",
                reason: "Reflexão sobre independência e escolhas",
            },
        ],
        neighborhoodGroups: [
            {
                label: "Orla e Centro",
                items: [
                    "Praia da Costa",
                    "Itapuã",
                    "Centro de Vila Velha",
                    "Praia de Itaparica",
                ],
            },
            {
                label: "Região Central",
                items: ["Glória", "Boa Vista", "Divino Espírito Santo", "Coqueiral de Itaparica"],
            },
            {
                label: "Outros bairros",
                items: ["Jardim Guadalajara", "Cobilândia", "Santa Mônica", "Todos os bairros"],
            },
        ],
        crossLinks: [
            {
                href: "/localizacao/psicologo-vitoria-es/",
                label: "Vitória ES",
                description: "Todos os bairros de Vitória",
            },
            {
                href: "/localizacao/psicologo-jardim-da-penha/",
                label: "Jardim da Penha",
                description: "Consultório em frente à UFES",
            },
            {
                href: "/localizacao/psicologo-mata-da-praia/",
                label: "Mata da Praia",
                description: "Bairro vizinho ao consultório",
            },
            {
                href: "/localizacao/psicologo-praia-do-canto/",
                label: "Praia do Canto",
                description: "Região litorânea de Vitória",
            },
            {
                href: "/localizacao/psicologo-serra-es/",
                label: "Serra",
                description: "Presencial e online",
            },
        ],
    },

    "serra-es": {
        slug: "psicologo-serra-es",
        name: "Serra ES",
        preposition: "para",
        title: "Psicólogo para Serra ES – Atendimento Presencial e Online | Bernardo Carielo",
        description:
            "Atendimento psicológico para moradores de Serra ES. Consultório em Jardim da Penha, Vitória, com fácil acesso. Também atendo online. Psicoterapia pela Abordagem Centrada na Pessoa.",
        canonical: `${SITE_URL}/localizacao/psicologo-serra-es/`,
        h1: "Psicólogo para moradores de Serra ES",
        heroAlt:
            "Consultório de psicologia acessível a moradores de Serra ES - Ed. Madison, Jardim da Penha, Vitória",
        whatsappText:
            "Olá, moro em Serra e gostaria de agendar uma consulta.",
        ctaH2: "Para quem vive em Serra: um espaço de escuta sem julgamento, presencial ou online",
        ctaSubtitle: "Entre em contato e vamos conversar sobre como posso ajudar",
        aboutText:
            "Trabalho pela Abordagem Centrada na Pessoa — uma forma de escuta que respeita o seu ritmo, sem roteiros ou imposições. Meu papel é estar presente enquanto você encontra suas próprias respostas.",
        editorialTitle: "Serra: uma cidade que cresce — e que também cuida de quem vive nela",
        editorialSubtitle: "Mesmo com a distância, ter um espaço de escuta é possível e acessível",
        practicalSection: {
            title: "Deslocamento e alternativas para quem vem de Serra",
            bodyHtml: `<p>O consultório fica em Jardim da Penha, Vitória, acessível pela Av. Fernando Ferrari (Reta da Penha). É uma rota que muitos moradores de Serra já fazem em outras rotinas.</p><p>Para quem prefere evitar o deslocamento, ofereço <a href="/servicos/terapia-online/">terapia online</a> — e dá para começar assim e migrar para presencial quando a rotina permitir.</p>`,
        },
        faqSectionTitle: "Perguntas antes de agendar",
        articlesSectionTitle: "Textos que podem interessar",
        cardDescription: "Atende Serra presencial e online",
        faqItems: [
            {
                question: "Moro na Serra: faz sentido ir presencial ou é melhor online?",
                answer: "Depende da sua rotina e de como você se sente com deslocamento. Muita gente prefere online pela praticidade, e escolhe presencial quando quer separar um tempo fora da correria.",
            },
            {
                question: "O trânsito em certos horários me deixa esgotado. Isso pesa na escolha do horário?",
                answer: "Pesa, sim — e é totalmente válido levar isso em conta. Um horário que não te desgaste antes da sessão pode fazer diferença na continuidade do processo.",
            },
            {
                question: "Dá para começar online e depois migrar para presencial?",
                answer: "Sim. Algumas pessoas começam online (para viabilizar) e depois alternam ou mudam para presencial quando a rotina permite.",
            },
            {
                question: "Atende convênio?",
                answer: "Particular, com recibo para reembolso quando o plano oferece.",
            },
            {
                question: "Como funciona o primeiro contato?",
                answer: "Você me chama no WhatsApp, eu respondo geralmente no mesmo dia útil e a gente combina um horário para uma primeira conversa.",
            },
            {
                question: "Qual abordagem você utiliza?",
                answer: "Uma abordagem humanista centrada na pessoa: sem roteiro pronto, com presença e respeito ao seu tempo.",
            },
        ],
        blogArticles: [
            {
                slug: "relacao-principal-ferramenta-terapia",
                title: "Por que a relação é a principal ferramenta da terapia?",
                reason: "Explica o que torna o processo terapêutico efetivo",
            },
            {
                slug: "autonomia-vai-te-fazer-bem",
                title: "Por que a autonomia vai te fazer bem?",
                reason: "Para quem está buscando crescimento",
            },
            {
                slug: "vinculos-liquidos-intimidade-digital",
                title: "Vínculos líquidos na era digital",
                reason: "Relacionamentos e solidão",
            },
        ],
        neighborhoodGroups: [
            {
                label: "Região de Laranjeiras",
                items: [
                    "Laranjeiras",
                    "Colina de Laranjeiras",
                    "Porto Canoa",
                    "Valparaíso",
                ],
            },
            {
                label: "Litoral",
                items: ["Jacaraípe", "Manguinhos", "Praia de Carapebus", "Nova Almeida"],
            },
            {
                label: "Outros bairros",
                items: ["Serra Sede", "Carapina", "Civit", "Todos os bairros"],
            },
        ],
        crossLinks: [
            {
                href: "/localizacao/psicologo-vitoria-es/",
                label: "Vitória ES",
                description: "Todos os bairros de Vitória",
            },
            {
                href: "/localizacao/psicologo-jardim-da-penha/",
                label: "Jardim da Penha",
                description: "Consultório em frente à UFES",
            },
            {
                href: "/localizacao/psicologo-mata-da-praia/",
                label: "Mata da Praia",
                description: "Bairro vizinho ao consultório",
            },
            {
                href: "/localizacao/psicologo-praia-do-canto/",
                label: "Praia do Canto",
                description: "Região litorânea de Vitória",
            },
            {
                href: "/localizacao/psicologo-vila-velha/",
                label: "Vila Velha",
                description: "Presencial e online",
            },
        ],
    },
};
