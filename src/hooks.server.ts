import { redirect, type Handle } from '@sveltejs/kit';

// Map of old blog URLs to new category-based URLs
const blogRedirects: Record<string, string> = {
    // Blog index -> Artigos
    '/blog': '/artigos',
    '/blog/': '/artigos/',

    // Individual posts - redirecting to category-specific URLs
    // Jardim da Penha
    '/blog/terapia-para-estudantes-ufes-vitoria': '/jardim-da-penha/terapia-para-estudantes-ufes-vitoria',
    '/blog/onde-cuidar-saude-mental-jardim-da-penha': '/jardim-da-penha/onde-cuidar-saude-mental-jardim-da-penha',

    // Vitória ES
    '/blog/como-escolher-psicologo-em-vitoria-es': '/vitoria-es/como-escolher-psicologo-em-vitoria-es',

    // ACP
    '/blog/autenticidade-qualidade-vida': '/acp/autenticidade-qualidade-vida',
    '/blog/terapia-centrada-pessoa-explicacao': '/acp/terapia-centrada-pessoa-explicacao',
    '/blog/abordagem-centrada-pessoa': '/acp/abordagem-centrada-pessoa',

    // Saúde Mental
    '/blog/estresse-desgaste-emocional': '/saude-mental/estresse-desgaste-emocional',
    '/blog/obrigacao-estar-bem': '/saude-mental/obrigacao-estar-bem',
    '/blog/vida-acelerou-demais': '/saude-mental/vida-acelerou-demais',
    '/blog/nao-somos-maquinas': '/saude-mental/nao-somos-maquinas',
    '/blog/trabalho-interno-vs-performance': '/psicoterapia/trabalho-interno-vs-performance',
    '/saude-mental/trabalho-interno-vs-performance': '/psicoterapia/trabalho-interno-vs-performance',
    '/blog/quando-automatico-vira-modo-de-vida': '/saude-mental/quando-automatico-vira-modo-de-vida',
    '/blog/ansiedade-sinais-desacelerar': '/saude-mental/ansiedade-sinais-desacelerar',
    '/blog/corpo-e-emocoes': '/saude-mental/corpo-e-emocoes',
    '/blog/crises-existenciais': '/saude-mental/crises-existenciais',

    // Psicoterapia
    '/blog/terapia-online-funciona': '/psicoterapia/terapia-online-funciona',

    // Homens
    '/blog/terapia-para-homens': '/homens/terapia-para-homens',

    // Also redirect /artigos/slug to /categoria/slug
    '/artigos/terapia-para-estudantes-ufes-vitoria': '/jardim-da-penha/terapia-para-estudantes-ufes-vitoria',
    '/artigos/onde-cuidar-saude-mental-jardim-da-penha': '/jardim-da-penha/onde-cuidar-saude-mental-jardim-da-penha',
    '/artigos/como-escolher-psicologo-em-vitoria-es': '/vitoria-es/como-escolher-psicologo-em-vitoria-es',
    '/artigos/autenticidade-qualidade-vida': '/acp/autenticidade-qualidade-vida',
    '/artigos/terapia-centrada-pessoa-explicacao': '/acp/terapia-centrada-pessoa-explicacao',
    '/artigos/abordagem-centrada-pessoa': '/acp/abordagem-centrada-pessoa',
    '/artigos/estresse-desgaste-emocional': '/saude-mental/estresse-desgaste-emocional',
    '/artigos/obrigacao-estar-bem': '/saude-mental/obrigacao-estar-bem',
    '/artigos/vida-acelerou-demais': '/saude-mental/vida-acelerou-demais',
    '/artigos/nao-somos-maquinas': '/saude-mental/nao-somos-maquinas',
    '/artigos/trabalho-interno-vs-performance': '/psicoterapia/trabalho-interno-vs-performance',
    '/artigos/quando-automatico-vira-modo-de-vida': '/saude-mental/quando-automatico-vira-modo-de-vida',
    '/artigos/ansiedade-sinais-desacelerar': '/saude-mental/ansiedade-sinais-desacelerar',
    '/artigos/corpo-e-emocoes': '/saude-mental/corpo-e-emocoes',
    '/artigos/crises-existenciais': '/saude-mental/crises-existenciais',
    '/artigos/terapia-online-funciona': '/psicoterapia/terapia-online-funciona',
    '/artigos/terapia-para-homens': '/homens/terapia-para-homens',
};

export const handle: Handle = async ({ event, resolve }) => {
    const pathname = event.url.pathname;

    // Check for exact match first
    if (blogRedirects[pathname]) {
        throw redirect(301, blogRedirects[pathname]);
    }

    // Check for match without trailing slash
    const pathnameWithoutSlash = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    if (blogRedirects[pathnameWithoutSlash]) {
        throw redirect(301, blogRedirects[pathnameWithoutSlash] + (pathname.endsWith('/') ? '/' : ''));
    }

    // Fallback: redirect /blog to /artigos
    if (pathname.startsWith('/blog/')) {
        const newPath = pathname.replace('/blog/', '/artigos/');
        throw redirect(301, newPath);
    }
    if (pathname === '/blog') {
        throw redirect(301, '/artigos');
    }

    return resolve(event);
};
