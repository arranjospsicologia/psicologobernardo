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
    blogArticles: { slug: string; categorySlug: string; title: string; reason: string }[];
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
                categorySlug: "saude-mental",
                title: "Onde cuidar da saúde mental em Jardim da Penha",
                reason: "Principal referência de saúde mental no bairro",
            },
            {
                slug: "relacao-principal-ferramenta-terapia",
                categorySlug: "acp",
                title: "Por que a relação é a principal ferramenta da terapia?",
                reason: "Explica a essência do trabalho presencial",
            },
            {
                slug: "autonomia-vai-te-fazer-bem",
                categorySlug: "acp",
                title: "Por que a autonomia vai te fazer bem?",
                reason: "Tema recorrente com universitários da UFES",
            },
        ],
        neighborhoodGroups: [
            {
                label: "Bairros próximos",
                items: [
                    "Jardim da Penha",
                    "Goiabeiras",
                    "República",
                    "Mata da Praia",
                ],
            },
            {
                label: "Outros bairros de Vitória",
                items: [
                    "Praia do Canto",
                    "Jardim Camburi",
                    "Santa Luíza",
                    "Bento Ferreira",
                ],
            },
        ],
        crossLinks: [
            {
                href: "/localizacao/psicologo-vitoria-es/",
                label: "Vitória ES",
                description: "Todos os bairros de Vitória",
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
                categorySlug: "acp",
                title: "Por que a relação é a principal ferramenta da terapia?",
                reason: "Contexto do processo terapêutico",
            },
            {
                slug: "autonomia-vai-te-fazer-bem",
                categorySlug: "acp",
                title: "Por que a autonomia vai te fazer bem?",
                reason: "Tema central em terapia",
            },
            {
                slug: "vinculos-liquidos-intimidade-digital",
                categorySlug: "saude-mental",
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
        ],
    },
};
