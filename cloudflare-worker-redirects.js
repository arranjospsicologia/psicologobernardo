// Cloudflare Worker para redirecionamentos 301
// Criado em 2026-02-04 para psicologobernardo.com.br

const redirects = {
    // Blog / Artigos - Listagem principal
    '/blog/': '/artigos',
    '/blog': '/artigos',
    '/blog.html': '/artigos',
    '/posts/blog.html': '/artigos',

    // Artigos - Categoria: Saúde Mental
    '/blog/nao-somos-maquinas': '/saude-mental/nao-somos-maquinas',
    '/blog/nao-somos-maquinas/': '/saude-mental/nao-somos-maquinas',
    '/posts/nao-somos-maquinas.html': '/saude-mental/nao-somos-maquinas',
    '/posts/obrigacao-estar-bem.html': '/saude-mental/obrigacao-estar-bem',
    '/blog/obrigacao-estar-bem': '/saude-mental/obrigacao-estar-bem',
    '/posts/quando-automatico-vira-modo-de-vida.html': '/saude-mental/quando-automatico-vira-modo-de-vida',
    '/blog/quando-automatico-vira-modo-de-vida': '/saude-mental/quando-automatico-vira-modo-de-vida',
    '/posts/estresse-desgaste-emocional.html': '/saude-mental/estresse-desgaste-emocional',
    '/blog/estresse-desgaste-emocional': '/saude-mental/estresse-desgaste-emocional',
    '/posts/corpo-e-emocoes.html': '/saude-mental/corpo-e-emocoes',
    '/blog/corpo-e-emocoes': '/saude-mental/corpo-e-emocoes',
    '/posts/vida-acelerou-demais.html': '/saude-mental/vida-acelerou-demais',
    '/blog/vida-acelerou-demais': '/saude-mental/vida-acelerou-demais',
    '/posts/crises-existenciais.html': '/saude-mental/crises-existenciais',
    '/blog/crises-existenciais': '/saude-mental/crises-existenciais',
    '/posts/ansiedade-sinais-desacelerar.html': '/saude-mental/ansiedade-sinais-desacelerar',
    '/blog/ansiedade-sinais-desacelerar': '/saude-mental/ansiedade-sinais-desacelerar',

    // Artigos - Categoria: ACP
    '/posts/autenticidade-qualidade-vida.html': '/acp/autenticidade-qualidade-vida',
    '/blog/autenticidade-qualidade-vida': '/acp/autenticidade-qualidade-vida',
    '/posts/abordagem-centrada-pessoa.html': '/acp/abordagem-centrada-pessoa',
    '/blog/abordagem-centrada-pessoa': '/acp/abordagem-centrada-pessoa',
    '/posts/terapia-centrada-pessoa-explicacao.html': '/acp/terapia-centrada-pessoa-explicacao',
    '/blog/terapia-centrada-pessoa-explicacao': '/acp/terapia-centrada-pessoa-explicacao',

    // Artigos - Categoria: Psicoterapia
    '/posts/trabalho-interno-vs-performance.html': '/psicoterapia/trabalho-interno-vs-performance',
    '/blog/trabalho-interno-vs-performance': '/psicoterapia/trabalho-interno-vs-performance',
    '/posts/terapia-online-funciona.html': '/psicoterapia/terapia-online-funciona',
    '/blog/terapia-online-funciona': '/psicoterapia/terapia-online-funciona',

    // Artigos - Categoria: Terapia para Homens
    '/posts/terapia-para-homens.html': '/homens/terapia-para-homens',

    // Artigos - Categoria: Jardim da Penha
    '/blog/onde-cuidar-saude-mental-jardim-da-penha': '/jardim-da-penha/onde-cuidar-saude-mental-jardim-da-penha',
    '/blog/terapia-para-estudantes-ufes-vitoria': '/jardim-da-penha/terapia-para-estudantes-ufes-vitoria',

    // Serviços (.html → sem extensão)
    '/servicos/psicoterapia-individual.html': '/servicos/psicoterapia-individual',
    '/servicos/terapia-online.html': '/servicos/terapia-online',
    '/servicos/laudos-psicologicos.html': '/servicos/laudos-psicologicos',
    '/servicos/supervisao-profissional.html': '/servicos/supervisao-profissional',
    '/servicos/grupos-e-rodas.html': '/servicos/grupos-e-rodas',
    '/servicos/terapia-de-casal.html': '/servicos/terapia-de-casal',
    '/servicos/terapia-individual-vitoria.html': '/servicos/psicoterapia-individual',
    '/servicos/terapia-de-casal-vitoria.html': '/servicos/terapia-de-casal',
    '/servicos/terapia-online-vitoria.html': '/servicos/terapia-online',

    // Localização (.html → sem extensão)
    '/localizacao/psicologo-jardim-da-penha.html': '/localizacao/psicologo-jardim-da-penha',
    '/localizacao/psicologo-vitoria-es.html': '/localizacao/psicologo-vitoria-es',
    '/localizacao/psicologo-praia-do-canto.html': '/localizacao/psicologo-praia-do-canto',
    '/localizacao/psicologo-serra-es.html': '/localizacao/psicologo-serra-es',
    '/localizacao/psicologo-vila-velha.html': '/localizacao/psicologo-vila-velha',
    '/localizacao/termos-uso.html': '/termos-uso',

    // Páginas institucionais (.html → sem extensão)
    '/agendar-consulta.html': '/agendar',
    '/contato.html': '/contato',
    '/sobre.html': '/sobre',

    // Demandas → Experiência / Artigos
    '/demandas/psicologo-ansiedade-vitoria.html': '/experiencia/ansiedade',
    '/demandas/psicologo-depressao-vitoria.html': '/experiencia/depressao',
    '/demandas/psicologo-burnout-vitoria.html': '/experiencia/burnout',
    '/demandas/psicologo-crise-existencial-vitoria.html': '/saude-mental/crises-existenciais',

    // Páginas removidas → melhor destino disponível
    '/proximidade/psicologo-jardim-camburi.html': '/localizacao/psicologo-jardim-da-penha',
};

export default {
    async fetch(request) {
        const url = new URL(request.url);
        const path = url.pathname;

        // Verifica se há um redirect configurado para este path
        if (redirects[path]) {
            const newUrl = `${url.origin}${redirects[path]}`;
            return Response.redirect(newUrl, 301);
        }

        // Se não há redirect, deixa a requisição passar para o origin (GitHub Pages)
        return fetch(request);
    },
};
