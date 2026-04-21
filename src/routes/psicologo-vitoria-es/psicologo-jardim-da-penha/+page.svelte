<script lang="ts">
    import "$lib/styles/location.css";
    import { Section, Button, Breadcrumb, SEO, TrustPanel } from "$lib";
    import {
        ChevronDown,
        MapPin,
        Phone,
        Trees,
        Users,
    } from "lucide-svelte";
    import { buildWhatsAppUrl, siteProfile } from "$lib/data/siteProfile";

    const whatsappUrl = buildWhatsAppUrl(
        "Olá, vi a página do consultório em Jardim da Penha e gostaria de conversar.",
    );

    const faqContent = [
        {
            question: "Onde fica o consultório em Jardim da Penha?",
            answer: "Fica na Rua Darcy Grijó, 50, Sala 409, em Jardim da Penha, Vitória ES. A entrada fica em frente à UFES, de fácil referência para quem já circula pela região.",
        },
        {
            question: "O consultório fica perto da UFES?",
            answer: "Sim, fica em frente à UFES, o que costuma facilitar para quem estuda, trabalha ou mora nas proximidades da universidade.",
        },
        {
            question: "Atende quem estuda ou trabalha na região?",
            answer: "Sim. Muitas pessoas que atendo estudam ou trabalham na UFES ou no entorno. A proximidade costuma facilitar encaixar a sessão na rotina da semana, antes ou depois de compromissos na região.",
        },
        {
            question: "É possível fazer online mesmo morando perto?",
            answer: "Em semanas específicas, quando houver necessidade, o formato online pode ser conversado. Mas o foco aqui é o atendimento presencial no bairro.",
        },
        {
            question: "Como faço para marcar uma primeira conversa?",
            answer: "O caminho mais direto é uma mensagem pelo WhatsApp. Você escreve em poucas linhas o que está vivendo e, a partir daí, alinhamos horário, formato e disponibilidade.",
        },
    ];

    let faqItems = $state(faqContent.map((item) => ({ ...item, open: false })));

    function toggleFaq(index: number) {
        faqItems = faqItems.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false,
        }));
    }

    const pageUrl = `${siteProfile.siteUrl}/psicologo-vitoria-es/psicologo-jardim-da-penha/`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${siteProfile.siteUrl}/psicologo-vitoria-es/psicologo-jardim-da-penha/#webpage`,
                url: pageUrl,
                name: "Psicólogo em Jardim da Penha | Consultório perto da UFES",
                description:
                    "Psicólogo em Jardim da Penha, Vitória ES, com consultório perto da UFES. Atendimento presencial em psicoterapia individual e terapia de casal.",
                breadcrumb: {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        {
                            "@type": "ListItem",
                            position: 1,
                            name: "Início",
                            item: siteProfile.siteUrl + "/",
                        },
                        {
                            "@type": "ListItem",
                            position: 2,
                            name: "Psicólogo em Vitória ES",
                            item: `${siteProfile.siteUrl}/psicologo-vitoria-es/`,
                        },
                        {
                            "@type": "ListItem",
                            position: 3,
                            name: "Psicólogo em Jardim da Penha",
                            item: pageUrl,
                        },
                    ],
                },
            },
            {
                "@type": "FAQPage",
                mainEntity: faqContent.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: item.answer,
                    },
                })),
            },
            {
                "@type": ["LocalBusiness", "ProfessionalService"],
                "@id": `${siteProfile.siteUrl}/psicologo-vitoria-es/psicologo-jardim-da-penha/#localbusiness`,
                name: `${siteProfile.clinicalBrandName} — Jardim da Penha`,
                url: pageUrl,
                telephone: siteProfile.phoneHref.replace("tel:", ""),
                address: {
                    "@type": "PostalAddress",
                    streetAddress: `${siteProfile.address.streetAddress}, ${siteProfile.address.extendedAddress}`,
                    addressLocality: siteProfile.address.city,
                    addressRegion: siteProfile.address.state,
                    postalCode: siteProfile.address.postalCode,
                    addressCountry: siteProfile.address.country,
                },
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: siteProfile.coordinates.latitude,
                    longitude: siteProfile.coordinates.longitude,
                },
                openingHours: "Mo-Fr 13:30-21:00",
                openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: siteProfile.hours.opens,
                    closes: siteProfile.hours.closes,
                },
                hasMap: siteProfile.externalLinks.googleMapsPlace,
                areaServed: {
                    "@type": "Place",
                    name: "Jardim da Penha, Vitória, ES",
                },
            },
        ],
    };
</script>

<SEO
    title="Psicólogo em Jardim da Penha | Consultório perto da UFES"
    description="Psicólogo em Jardim da Penha, Vitória ES, com consultório perto da UFES. Atendimento presencial em psicoterapia individual e terapia de casal."
    canonical={pageUrl}
    {jsonLd}
    preloadImage="/images/consultorio/espaco-privado-600w.webp"
/>

<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Psicólogo em Vitória ES", href: "/psicologo-vitoria-es/" },
        { name: "Psicólogo em Jardim da Penha" },
    ]}
/>

<!-- Hero -->
<section class="location-hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1>Psicólogo em Jardim da Penha</h1>
                <p class="hero-description">
                    Consultório de psicologia em Jardim da Penha, em frente à UFES, no Ed.
                    Madison Office Tower. Um espaço reservado para atendimento presencial,
                    com escuta acolhedora e sem pressa. A principal porta de entrada é a
                    <a href="/servicos/psicoterapia-individual/">psicoterapia individual</a>.
                </p>
                <div class="hero-buttons">
                    <Button href={whatsappUrl} variant="primary">
                        <Phone size={20} /> Enviar mensagem
                    </Button>
                    <Button href="/servicos/psicoterapia-individual/" variant="outline">
                        Ver psicoterapia individual
                    </Button>
                </div>
                <div class="hero-local-facts">
                    <span>Jardim da Penha</span>
                    <span>Em frente à UFES</span>
                    <span>Madison Office Tower</span>
                </div>
            </div>
            <div class="hero-image">
                <picture>
                    <source
                        type="image/avif"
                        srcset="/images/consultorio/espaco-privado-300w.avif 300w,
                                /images/consultorio/espaco-privado-400w.avif 400w,
                                /images/consultorio/espaco-privado-600w.avif 600w,
                                /images/consultorio/espaco-privado-800w.avif 800w"
                        sizes="(max-width: 480px) 300px, (max-width: 768px) 450px, 450px"
                    />
                    <img
                        src="/images/consultorio/espaco-privado-600w.webp"
                        srcset="/images/consultorio/espaco-privado-300w.webp 300w,
                                /images/consultorio/espaco-privado-400w.webp 400w,
                                /images/consultorio/espaco-privado-600w.webp 600w,
                                /images/consultorio/espaco-privado-800w.webp 800w"
                        sizes="(max-width: 480px) 300px, (max-width: 768px) 450px, 450px"
                        alt="Consultório de psicologia em Jardim da Penha, Vitória ES — espaço privado e acolhedor em frente à UFES"
                        width="600"
                        height="450"
                        loading="eager"
                        fetchpriority="high"
                    />
                </picture>
            </div>
        </div>
    </div>
</section>

<!-- TrustPanel -->
<Section variant="white">
    <TrustPanel
        primaryHref={whatsappUrl}
        primaryLabel="Iniciar pelo WhatsApp"
        secondaryHref="/contato/"
        secondaryLabel="Ver contato e endereço"
    />
</Section>

<!-- Consultório + Endereço -->
<Section variant="beige">
    <div class="section-header section-header--left">
        <span class="section-kicker">Consultório</span>
        <h2>Onde fica o consultório em Jardim da Penha</h2>
    </div>
    <div class="content-block">
        <p>
            O consultório fica na <strong>Rua Darcy Grijó, 50, Sala 409</strong>, no
            Ed. Madison Office Tower, em frente à UFES. Um espaço reservado e silencioso,
            pensado para que a conversa aconteça com privacidade e calma.
        </p>
        <p>
            Atendo psicoterapia individual e terapia de casal presencialmente, de segunda
            a sexta, entre 13h30 e 21h. Use o mapa abaixo para abrir a rota.
        </p>
        <div class="map-container map-container-full">
            <iframe
                src={siteProfile.externalLinks.googleMapsEmbed}
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Localização do consultório em Jardim da Penha"
            ></iframe>
        </div>
        <div class="map-action">
            <a
                href={siteProfile.externalLinks.googleMapsPlace}
                target="_blank"
                rel="noopener"
                class="map-link"
            >
                <MapPin size={20} /> Abrir no Google Maps
            </a>
        </div>
    </div>
</Section>

<!-- Bairro: para quem mora, estuda ou trabalha perto da UFES -->
<Section variant="white">
    <div class="section-header section-header--left">
        <span class="section-kicker">Bairro</span>
        <h2>Para quem mora, estuda ou trabalha perto da UFES</h2>
        <p class="section-subtitle">
            Jardim da Penha tem um ritmo próprio: universidade, vida de bairro e espaços
            ao ar livre que também fazem parte do cuidado com a saúde mental.
        </p>
    </div>
    <div class="bairro-cards">
        <article class="bairro-card">
            <div class="bairro-icon"><Users size={22} /></div>
            <h3>Rua da Lama</h3>
            <p>
                Ponto de encontro tradicional de Jardim da Penha, com bares, cafés e uma
                convivência que mistura estudantes e moradores. Espaço de troca, descanso
                e vida social — partes importantes do bem-estar.
            </p>
        </article>
        <article class="bairro-card">
            <div class="bairro-icon"><Trees size={22} /></div>
            <h3>Parque Pedra da Cebola</h3>
            <p>
                A poucos minutos do consultório, oferece contato com árvores, trilhas e
                espaços abertos. Caminhar por ali pode ser um complemento concreto ao
                processo terapêutico: respirar, desacelerar, se reconectar.
            </p>
        </article>
        <article class="bairro-card">
            <div class="bairro-icon"><MapPin size={22} /></div>
            <h3>Praças do bairro</h3>
            <p>
                As praças de Jardim da Penha — como a Praça de Jardim da Penha e a Praça
                dos Namorados — são pontos de convivência, exercício e encontro que
                sustentam uma rotina mais saudável no dia a dia.
            </p>
        </article>
    </div>
    <p class="bairro-footer">
        Muitas pessoas que atendo estudam ou trabalham na UFES ou no entorno. A
        localização facilita encaixar a sessão antes ou depois de compromissos na região,
        sem que o cuidado precise competir com o resto da semana.
    </p>
</Section>

<!-- Quem vai te atender -->
<Section variant="beige" id="quem-atende">
    <div class="section-header section-header--left">
        <span class="section-kicker">Quem sou</span>
        <h2>Quem vai te atender</h2>
    </div>
    <div class="about-grid">
        <picture>
            <source
                type="image/avif"
                srcset="/images/sobre/foto-profissional-psicologo-bernardo2-225w.avif 225w,
                        /images/sobre/foto-profissional-psicologo-bernardo2-450w.avif 450w"
                sizes="(max-width: 768px) 200px, 250px"
            />
            <img
                src="/images/sobre/foto-profissional-psicologo-bernardo2-225w.webp"
                srcset="/images/sobre/foto-profissional-psicologo-bernardo2-225w.webp 225w,
                        /images/sobre/foto-profissional-psicologo-bernardo2-450w.webp 450w"
                sizes="(max-width: 768px) 200px, 250px"
                alt="Bernardo Carielo, psicólogo clínico (CRP 16/5527) em Jardim da Penha, Vitória ES"
                width="250"
                height="333"
                loading="lazy"
                decoding="async"
            />
        </picture>
        <div>
            <h2 class="about-name">Bernardo Carielo</h2>
            <p class="crp-badge">CRP-16/5527 · Psicólogo Humanista</p>
            <p>
                Atendo em Jardim da Penha, com consultório em frente à UFES. Sou psicólogo
                pela <strong>Abordagem Centrada na Pessoa (ACP)</strong> e acompanho
                pessoas em ansiedade, esgotamento, conflitos, transições e autoconhecimento.
            </p>
            <a href="/sobre/">Conheça minha abordagem e formação →</a>
        </div>
    </div>
</Section>

<!-- FAQ -->
<Section variant="white" id="faq">
    <div class="section-header section-header--left">
        <span class="section-kicker">Perguntas frequentes</span>
        <h2>Antes de marcar</h2>
    </div>
    <div class="loc-faq-container">
        {#each faqItems as item, index}
            <details class="loc-faq-item" bind:open={item.open}>
                <summary
                    onclick={(e) => {
                        e.preventDefault();
                        toggleFaq(index);
                    }}
                >
                    <span>{item.question}</span>
                    <ChevronDown
                        size={20}
                        class={item.open ? "loc-faq-chevron open" : "loc-faq-chevron"}
                    />
                </summary>
                <div class="loc-faq-answer"><p>{item.answer}</p></div>
            </details>
        {/each}
    </div>
</Section>

<!-- CTA final -->
<Section variant="gradient">
    <div class="cta-content">
        <h2>O consultório fica aqui no bairro</h2>
        <p>
            Se o consultório em Jardim da Penha faz sentido para a sua rotina, você pode
            me enviar uma mensagem curta pelo WhatsApp. A partir daí, alinhamos horário,
            formato e disponibilidade.
        </p>
        <Button href={whatsappUrl} variant="secondary" size="lg">
            <Phone size={20} /> Enviar mensagem
        </Button>
        <p class="response-time">Respondo geralmente no mesmo dia útil</p>
    </div>
</Section>

<style>
    .hero-local-facts {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 1rem;
    }

    .hero-local-facts span {
        padding: 0.45rem 0.85rem;
        border-radius: 999px;
        background: rgba(8, 186, 156, 0.08);
        color: var(--primary-dark);
        font-weight: 600;
        font-size: 0.92rem;
    }

    .content-block {
        max-width: 760px;
    }

    .content-block p {
        font-size: 1.05rem;
        line-height: 1.75;
        margin-bottom: 1.1rem;
    }

    .content-block p:last-child {
        margin-bottom: 0;
    }

    .section-header--left {
        text-align: left;
        max-width: 760px;
        margin-left: 0;
        margin-right: 0;
    }

    .map-container-full {
        margin-top: 2rem;
    }

    .map-action {
        text-align: center;
        margin-top: 1rem;
    }

    .bairro-cards {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.25rem;
        margin-top: 1.5rem;
    }

    .bairro-card {
        background: #fff;
        border: 1px solid rgba(8, 186, 156, 0.18);
        border-radius: 14px;
        padding: 1.5rem 1.4rem;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .bairro-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.07);
    }

    .bairro-icon {
        width: 42px;
        height: 42px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background: rgba(8, 186, 156, 0.1);
        color: var(--primary-color);
        margin-bottom: 0.85rem;
    }

    .bairro-card h3 {
        font-size: 1.15rem;
        margin: 0 0 0.5rem;
        color: var(--primary-dark);
    }

    .bairro-card p {
        font-size: 0.98rem;
        line-height: 1.6;
        margin: 0;
    }

    .bairro-footer {
        margin-top: 1.75rem;
        font-size: 1rem;
        line-height: 1.7;
        color: var(--text-light, #555);
        max-width: 760px;
    }

    @media (max-width: 900px) {
        .bairro-cards {
            grid-template-columns: 1fr;
        }
    }

    .about-name {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
        line-height: 1.2;
        color: var(--primary-color);
    }
</style>
