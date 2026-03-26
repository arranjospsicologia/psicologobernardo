export interface NavigationItem {
    name: string;
    href: string;
    description: string;
}

export const serviceNavItems: NavigationItem[] = [
    {
        name: "Psicoterapia Individual",
        href: "/servicos/psicoterapia-individual/",
        description:
            "Atendimento principal para autoconhecimento, ansiedade, depressão e momentos de transição.",
    },
    {
        name: "Terapia de Casal",
        href: "/servicos/terapia-de-casal/",
        description:
            "Espaço para comunicação, conflitos recorrentes e decisões importantes na relação.",
    },
    {
        name: "Terapia Online",
        href: "/servicos/terapia-online/",
        description:
            "Modalidade por videochamada para quem busca cuidado com mais flexibilidade.",
    },
    {
        name: "Grupos e Rodas",
        href: "/servicos/grupos-e-rodas/",
        description:
            "Encontros coletivos de escuta e troca em contextos específicos.",
    },
    {
        name: "Laudos Psicológicos",
        href: "/servicos/laudos-psicologicos/",
        description:
            "Serviço técnico para demandas pontuais que exigem avaliação e documentação.",
    },
    {
        name: "Supervisão Profissional",
        href: "/servicos/supervisao-profissional/",
        description:
            "Acompanhamento clínico para psicólogos em formação ou em prática profissional.",
    },
];

export const primaryServiceItems = serviceNavItems.slice(0, 3);

export const experienceNavItems: NavigationItem[] = [
    {
        name: "Ansiedade",
        href: "/experiencia/ansiedade/",
        description:
            "Quando a ansiedade ocupa espaço demais e começa a afetar rotina, corpo e relações.",
    },
    {
        name: "Depressão",
        href: "/experiencia/depressao/",
        description:
            "Para momentos de tristeza persistente, esvaziamento e perda de sentido.",
    },
    {
        name: "Burnout",
        href: "/experiencia/burnout/",
        description:
            "Quando o cansaço emocional e a pressão constante começam a comprometer sua vida.",
    },
    {
        name: "Relacionamentos",
        href: "/experiencia/relacionamento/",
        description:
            "Para conflitos, términos, repetições de padrão e dúvidas importantes na vida afetiva.",
    },
    {
        name: "Autoestima",
        href: "/experiencia/autoestima/",
        description:
            "Quando a autocrítica, a insegurança e a dificuldade de se sustentar aparecem com força.",
    },
];
