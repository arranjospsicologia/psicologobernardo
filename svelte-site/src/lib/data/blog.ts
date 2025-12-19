// Blog posts data
export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    date: string;
    readTime: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "terapia-para-estudantes-ufes-vitoria",
        title: "Terapia para Estudantes e Universitários em Vitória (UFES)",
        description: "Psicoterapia para estudantes e universitários em Vitória (UFES). Ansiedade acadêmica, pressão, futuro profissional e um consultório em frente à universidade, em Jardim da Penha.",
        category: "Estudantes",
        tags: ["UFES", "Estudantes", "Ansiedade Acadêmica", "Jardim da Penha", "Carreira", "saude-mental"],
        date: "19 Dez 2025",
        readTime: "6 min de leitura",
        image: "/images/blog/terapia-estudantes-ufes.png"
    },
    {
        slug: "onde-cuidar-saude-mental-jardim-da-penha",
        title: "Onde cuidar da Saúde Mental em Jardim da Penha e Região (Vitória – ES)",
        description: "Guia local de saúde mental em Jardim da Penha e região: praças, parques, orla de Camburi, UFES, UBS e rede de apoio. Dicas práticas para descompressão em Vitória (ES).",
        category: "Saúde Mental",
        tags: ["Jardim da Penha", "Saúde Mental", "Vitória ES", "Natureza", "Autocuidado", "saude-mental"],
        date: "19 Dez 2025",
        readTime: "6 min de leitura",
        image: "/images/blog/saude-mental-jardim-da-penha.png"
    },
    {
        slug: "como-escolher-psicologo-em-vitoria-es",
        title: "Como escolher um psicólogo em Vitória (ES): guia prático e seguro",
        description: "Aprenda como escolher um psicólogo em Vitória (ES) com critérios éticos e práticos: CRP, abordagem, localização (Jardim da Penha, UFES) e relação terapêutica.",
        category: "Saúde Mental",
        tags: ["Psicólogo Vitória", "Jardim da Penha", "CRP", "Abordagem", "Relação Terapêutica", "saude-mental"],
        date: "19 Dez 2025",
        readTime: "7 min de leitura",
        image: "/images/blog/como-escolher-psicologo-vitoria.png"
    },
    {
        slug: "autenticidade-qualidade-vida",
        title: "O melhor jeito de viver é autêntico: por que a autenticidade melhora a qualidade de vida",
        description: "Como a Abordagem Centrada na Pessoa entende a autorrealização e a tendência atualizante — e por que isso importa para você.",
        category: "Autoconhecimento",
        tags: ["autoconhecimento", "acp"],
        date: "17 Nov 2025",
        readTime: "7 min de leitura",
        image: "/images/blog/autenticidade-qualidade-vida.webp"
    },
    {
        slug: "terapia-centrada-pessoa-explicacao",
        title: "Terapia Centrada na Pessoa: como funciona — explicado de um jeito simples e humano",
        description: "Como a ACP cria um ambiente seguro para que você possa existir sem precisar performar.",
        category: "ACP",
        tags: ["acp", "terapia-humanista"],
        date: "16 Nov 2025",
        readTime: "7 min de leitura",
        image: "/images/blog/terapia-centrada-pessoa-explicacao.webp"
    },
    {
        slug: "estresse-desgaste-emocional",
        title: "Quando o estresse vira desgaste emocional: por que estamos tão cansados?",
        description: "Diferenciando o estresse saudável do estresse contínuo — e o impacto no corpo e na mente.",
        category: "Saúde Mental",
        tags: ["saude-mental", "ansiedade"],
        date: "13 Nov 2025",
        readTime: "8 min de leitura",
        image: "/images/blog/estresse-desgaste-emocional.webp"
    },
    {
        slug: "terapia-online-funciona",
        title: "Terapia Online Funciona? Evidências e experiência clínica explicadas de forma simples",
        description: "O que a prática e a ciência mostram sobre os atendimentos online — e como saber se é para você.",
        category: "Terapia Online",
        tags: ["acp", "terapia-online"],
        date: "10 Nov 2025",
        readTime: "8 min de leitura",
        image: "/images/blog/terapia-online-funciona.webp"
    },
    {
        slug: "obrigacao-estar-bem",
        title: "A obrigação de estar bem: como o capitalismo transforma emoções em produtos",
        description: "Por que acreditar que precisamos ser felizes o tempo todo adoece — e o que a ACP mostra sobre isso.",
        category: "Saúde Mental",
        tags: ["saude-mental", "autoconhecimento"],
        date: "07 Nov 2025",
        readTime: "7 min de leitura",
        image: "/images/blog/obrigacao-estar-bem.webp"
    },
    {
        slug: "vida-acelerou-demais",
        title: "A vida acelerou demais: o que perdemos quando não temos tempo para sentir",
        description: "Um olhar sobre a aceleração social e a perda de presença no cotidiano.",
        category: "Saúde Mental",
        tags: ["saude-mental", "ansiedade", "acp"],
        date: "05 Nov 2025",
        readTime: "7 min de leitura",
        image: "/images/blog/vida-acelerou-demais.webp"
    },
    {
        slug: "nao-somos-maquinas",
        title: "Não somos máquinas: o mito da produtividade infinita e o esgotamento do humano",
        description: "Por que tentar render cada vez mais nos desconecta de quem realmente somos.",
        category: "Saúde Mental",
        tags: ["saude-mental", "autoconhecimento", "acp"],
        date: "02 Nov 2025",
        readTime: "7 min de leitura",
        image: "/images/blog/nao-somos-maquinas.webp"
    },
    {
        slug: "trabalho-interno-vs-performance",
        title: "Trabalho interno x performance: como medir 'resultado'?",
        description: "Em saúde mental, 'resultado' raramente cabe em números. Às vezes, é poder dizer 'não', dormir melhor, ou chorar sem se punir.",
        category: "Saúde Mental",
        tags: ["saude-mental", "acp"],
        date: "31 Out 2025",
        readTime: "12 min de leitura",
        image: "/images/blog/trabalho-interno-vs-performance.webp"
    },
    {
        slug: "quando-automatico-vira-modo-de-vida",
        title: "Quando o 'automático' vira modo de vida",
        description: "Viver no automático economiza energia — até que custa caro. O convite aqui é desacelerar o olhar e reaprender preferências.",
        category: "Saúde Mental",
        tags: ["autoconhecimento", "saude-mental", "acp"],
        date: "30 Out 2025",
        readTime: "10 min de leitura",
        image: "/images/blog/quando-automatico-vira-modo-de-vida.webp"
    },
    {
        slug: "ansiedade-sinais-desacelerar",
        title: "Ansiedade: os sinais de que talvez seja hora de desacelerar",
        description: "Saiba como reconhecer os sinais de ansiedade e o que o corpo tenta comunicar quando o ritmo de vida se torna insustentável.",
        category: "Saúde Mental",
        tags: ["ansiedade", "saude-mental"],
        date: "5 Mar 2025",
        readTime: "11 min de leitura",
        image: "/images/blog/ansiedade-sinais-desacelerar.webp"
    },
    {
        slug: "corpo-e-emocoes",
        title: "Corpo e emoções: o que o corpo revela quando a mente cala",
        description: "Uma reflexão sobre como o corpo expressa o que muitas vezes não conseguimos dizer em palavras e sobre o papel da terapia na reconexão entre corpo e emoção.",
        category: "Saúde Mental",
        tags: ["saude-mental", "acp"],
        date: "20 Fev 2025",
        readTime: "11 min de leitura",
        image: "/images/blog/corpo-e-emocoes.webp"
    },
    {
        slug: "crises-existenciais",
        title: "Crises existenciais: quando a vida parece perder o sentido",
        description: "Reflexões sobre o que acontece quando antigas certezas deixam de fazer sentido e a importância de acolher os momentos de crise como oportunidades de transformação.",
        category: "Saúde Mental",
        tags: ["saude-mental", "autoconhecimento"],
        date: "5 Fev 2025",
        readTime: "12 min de leitura",
        image: "/images/blog/crises-existenciais.webp"
    },
    {
        slug: "abordagem-centrada-pessoa",
        title: "O que é a Abordagem Centrada na Pessoa e por que ela continua tão atual",
        description: "Conheça os princípios da Abordagem Centrada na Pessoa, desenvolvida por Carl Rogers, e entenda por que essa forma de fazer psicologia permanece viva e necessária.",
        category: "ACP",
        tags: ["acp"],
        date: "22 Jan 2025",
        readTime: "14 min de leitura",
        image: "/images/blog/abordagem-centrada-pessoa.webp"
    },
    {
        slug: "terapia-para-homens",
        title: "Por que é tão difícil para muitos homens falar sobre o que sentem",
        description: "Entenda como a terapia pode ajudar homens a lidarem com emoções, relacionamentos e pressões sem precisar dar conta de tudo sozinho.",
        category: "Masculinidades",
        tags: ["masculinidades"],
        date: "22 Jan 2025",
        readTime: "10 min de leitura",
        image: "/images/blog/terapia-para-homens.webp"
    }
];

export const categories = [
    { id: "todos", label: "Todos os posts" },
    { id: "acp", label: "ACP" },
    { id: "saude-mental", label: "Saúde Mental" },
    { id: "autoconhecimento", label: "Autoconhecimento" },
    { id: "ansiedade", label: "Ansiedade" },
    { id: "masculinidades", label: "Masculinidades" }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function filterPosts(posts: BlogPost[], category: string, search: string): BlogPost[] {
    return posts.filter(post => {
        const matchesCategory = category === "todos" || post.tags.includes(category);
        const matchesSearch = search === "" ||
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.description.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}
