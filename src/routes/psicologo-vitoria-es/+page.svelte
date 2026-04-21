<script lang="ts">
    import "$lib/styles/location.css";
    import { Section, Button, Breadcrumb, SEO, TrustPanel } from "$lib";
    import { ChevronDown, MapPin, Phone } from "lucide-svelte";
    import { buildWhatsAppUrl, siteProfile } from "$lib/data/siteProfile";

    const whatsappUrl = buildWhatsAppUrl(
        "Olá, vi a página de psicólogo em Vitória e gostaria de conversar.",
    );

    const faqContent = [
        {
            question: "Você atende online / remotamente?",
            answer: "Sim. Além do atendimento presencial em Jardim da Penha, faço atendimento online por videochamada — especialmente para quem mora longe, viaja com frequência ou precisa de mais flexibilidade na rotina.",
        },
        {
            question: "Você atende convênios?",
            answer: "O atendimento é particular. Emito recibo com CRP para reembolso em planos que oferecem essa possibilidade; vale consultar diretamente com o seu convênio como funciona o reembolso de psicoterapia.",
        },
        {
            question: "Posso alternar presencial e online?",
            answer: "Sim. Em semanas com viagem ou agenda imprevisível, é possível combinar uma sessão online para não perder continuidade.",
        },
        {
            question: "Atende terapia de casal em Vitória?",
            answer: "Sim. O consultório em Jardim da Penha atende terapia de casal presencialmente.",
        },
        {
            question: "Como faço para começar?",
            answer: "O caminho mais direto é uma mensagem pelo WhatsApp. Você escreve em poucas linhas o que está vivendo e, a partir daí, alinhamos formato, horário e disponibilidade.",
        },
    ];

    let faqItems = $state(faqContent.map((item) => ({ ...item, open: false })));

    function toggleFaq(index: number) {
        faqItems = faqItems.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false,
        }));
    }

    const pageUrl = `${siteProfile.siteUrl}/psicologo-vitoria-es/`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${siteProfile.siteUrl}/psicologo-vitoria-es/#webpage`,
                url: pageUrl,
                name: "Psicólogo em Vitória ES | Consultório em Jardim da Penha",
                description:
                    "Psicólogo em Vitória ES com consultório em Jardim da Penha, em frente à UFES. Psicoterapia individual e terapia de casal com escuta ética e humana.",
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
                "@type": "ProfessionalService",
                "@id": `${siteProfile.siteUrl}/psicologo-vitoria-es/#professionalservice`,
                name: siteProfile.clinicalBrandName,
                url: pageUrl,
                telephone: siteProfile.phoneHref.replace("tel:", ""),
                areaServed: [
                    {
                        "@type": "City",
                        name: "Vitória",
                        containedInPlace: {
                            "@type": "State",
                            name: "Espírito Santo",
                            alternateName: "ES",
                        },
                    },
                ],
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
            },
        ],
    };
</script>

<SEO
    title="Psicólogo em Vitória ES | Consultório em Jardim da Penha"
    description="Psicólogo em Vitória ES com consultório em Jardim da Penha, em frente à UFES. Psicoterapia individual e terapia de casal com escuta ética e humana."
    canonical={pageUrl}
    {jsonLd}
    preloadImage="/images/consultorio/espaco-privado-600w.webp"
/>

<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Psicólogo em Vitória ES" },
    ]}
/>

<!-- Hero -->
<section class="location-hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1>Psicólogo em Vitória ES</h1>
                <p class="hero-description">
                    Consultório em Vitória, no bairro Jardim da Penha, em frente à UFES. Atendimento presencial
                    para pessoas de diferentes bairros de Vitória, com escuta acolhedora e
                    sem pressa. A principal porta de entrada é a
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
                    <span>Vitória ES</span>
                    <span>Jardim da Penha</span>
                    <span>Em frente à UFES</span>
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
                        alt="Consultório em Jardim da Penha, Vitória ES — ambiente privado e acolhedor para atendimento psicológico"
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

<!-- Consultório em Jardim da Penha -->
<Section variant="beige">
    <div class="consultorio-card">
        <div class="consultorio-media">
            <img
                src="/images/consultorio/sala-atendimento-01.webp"
                alt="Sala de atendimento do consultório em Jardim da Penha, Vitória ES"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
            />
        </div>
        <div class="consultorio-body">
            <span class="section-kicker">Consultório</span>
            <h2>Consultório em Vitória, em Jardim da Penha</h2>
            <p>
                O consultório fica na <strong>Rua Darcy Grijó, 50, Sala 409</strong>, em
                frente à UFES. A localização é acessível pela Reta da Penha e pela Av.
                Fernando Ferrari, pontos de referência para quem vem de diferentes regiões
                da capital.
            </p>
            <p>
                Se quiser ver mais sobre o bairro e contexto local, há uma
                <a
                    class="turquoise-link"
                    href="/psicologo-vitoria-es/psicologo-jardim-da-penha/"
                >página específica de Jardim da Penha →</a>.
            </p>
        </div>
    </div>
</Section>

<!-- Dupla de cards: Quando faz sentido + Quem vai te atender -->
<Section variant="white" id="quem-atende">
    <div class="duo-cards">
        <article class="duo-card duo-card--motivos">
            <span class="section-kicker">Psicoterapia</span>
            <h2>Quando faz sentido buscar psicoterapia?</h2>
            <p>
                Não é preciso estar em crise para procurar terapia. Muitas pessoas chegam
                com sensações difíceis de nomear: cansaço que não passa, irritação sem
                causa clara, dificuldade de se conectar com os outros ou consigo mesmas.
            </p>
            <ul class="motivos-list">
                <li>Ansiedade e tensão constante</li>
                <li>Esgotamento emocional</li>
                <li>Conflitos em relacionamentos ou no trabalho</li>
                <li>Mudanças, separações, transições de carreira</li>
                <li>Desejo de se entender melhor</li>
            </ul>
            <p class="motivos-note">
                E outros assuntos que você sinta necessidade de trabalhar hoje — esta
                lista é apenas um ponto de partida, não um limite do que pode ser
                cuidado em terapia.
            </p>
            <p class="motivos-footer">
                O processo começa de onde você está, no ritmo que faz sentido para você.
            </p>
        </article>

        <article class="duo-card duo-card--sobre">
            <span class="section-kicker">Quem sou</span>
            <h2>Quem vai te atender</h2>
            <div class="sobre-head">
                <picture>
                    <source
                        type="image/avif"
                        srcset="/images/sobre/bernardo-profissional-225w.avif 225w,
                                /images/sobre/bernardo-profissional-450w.avif 450w"
                        sizes="240px"
                    />
                    <img
                        src="/images/sobre/bernardo-profissional-450w.webp"
                        srcset="/images/sobre/bernardo-profissional-225w.webp 225w,
                                /images/sobre/bernardo-profissional-450w.webp 450w"
                        sizes="240px"
                        alt="Bernardo Carielo, psicólogo clínico (CRP 16/5527) em Vitória ES"
                        width="240"
                        height="320"
                        loading="lazy"
                        decoding="async"
                    />
                </picture>
                <div>
                    <p class="sobre-name">Bernardo Carielo</p>
                    <p class="crp-badge">CRP-16/5527 · Psicólogo Humanista</p>
                </div>
            </div>
            <p>
                Sou psicólogo clínico pela <strong>Abordagem Centrada na Pessoa (ACP)</strong>,
                com consultório em Jardim da Penha, em frente à UFES. Atendo psicoterapia
                individual e terapia de casal.
            </p>
            <a class="turquoise-link" href="/sobre/">Conheça minha abordagem e formação →</a>
        </article>
    </div>
</Section>

<!-- Endereço e mapa -->
<Section variant="beige">
    <div class="section-header section-header--left">
        <span class="section-kicker">Localização</span>
        <h2>Onde fica o consultório</h2>
    </div>
    <div class="location-content">
        <p class="address-line">
            O consultório fica na <strong>Rua Darcy Grijó, 50, Sala 409</strong>, em Jardim
            da Penha, Vitória ES, em frente à UFES. Use o mapa abaixo para abrir a rota.
        </p>
        <div class="map-container map-container-full">
            <iframe
                src={siteProfile.externalLinks.googleMapsEmbed}
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Localização do consultório em Vitória"
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
        <h2>Um primeiro passo pelo WhatsApp</h2>
        <p>
            Se fizer sentido conversar, você pode me enviar uma mensagem curta pelo WhatsApp.
            A partir daí, alinhamos formato, horário e disponibilidade.
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

    .turquoise-link {
        color: var(--primary-color);
        font-weight: 600;
        text-decoration: none;
        border-bottom: 1px solid rgba(8, 186, 156, 0.35);
        transition: color 0.2s ease, border-color 0.2s ease;
    }

    .turquoise-link:hover {
        color: var(--primary-dark);
        border-bottom-color: var(--primary-color);
    }

    /* Consultório card */
    .consultorio-card {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
        gap: 2.5rem;
        align-items: center;
        background: #fff;
        border-radius: var(--radius-lg, 16px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        overflow: hidden;
    }

    .consultorio-media img {
        width: 100%;
        height: 100%;
        min-height: 320px;
        max-height: 420px;
        object-fit: cover;
        display: block;
    }

    .consultorio-body {
        padding: 2rem 2.25rem 2rem 0;
    }

    .consultorio-body .section-kicker {
        display: inline-block;
        margin-bottom: 0.5rem;
    }

    .consultorio-body h2 {
        margin: 0.25rem 0 1rem;
    }

    .consultorio-body p {
        font-size: 1.05rem;
        line-height: 1.75;
        margin-bottom: 1rem;
    }

    .consultorio-body p:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 820px) {
        .consultorio-card {
            grid-template-columns: 1fr;
        }

        .consultorio-body {
            padding: 0 1.5rem 1.75rem;
        }

        .consultorio-media img {
            min-height: 220px;
            max-height: 280px;
        }
    }

    /* Duo cards: motivos + quem atende */
    .duo-cards {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
        gap: 1.75rem;
        align-items: start;
    }

    .duo-card {
        background: #fff;
        border: 1px solid rgba(8, 186, 156, 0.18);
        border-radius: var(--radius-lg, 16px);
        padding: 1.75rem 1.85rem;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
    }

    .duo-card h2 {
        margin: 0.35rem 0 0.9rem;
        font-size: 1.5rem;
        line-height: 1.25;
    }

    .duo-card p {
        font-size: 1rem;
        line-height: 1.7;
        margin-bottom: 0.9rem;
    }

    .duo-card--motivos {
        background: linear-gradient(
            180deg,
            rgba(8, 186, 156, 0.06) 0%,
            #fff 70%
        );
        border-left: 4px solid var(--primary-color);
    }

    .motivos-list {
        list-style: none;
        padding: 0;
        margin: 0.25rem 0 1rem;
        display: grid;
        gap: 0.55rem;
    }

    .motivos-list li {
        position: relative;
        padding-left: 1.4rem;
        font-size: 1rem;
        line-height: 1.55;
    }

    .motivos-list li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.55rem;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: var(--primary-color);
    }

    .motivos-footer {
        margin-top: 0.5rem;
        font-style: italic;
        color: var(--text-light, #555);
    }

    .sobre-head {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;
    }

    .sobre-head img {
        width: 220px;
        height: 293px;
        border-radius: 14px;
        object-fit: cover;
        flex-shrink: 0;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 480px) {
        .sobre-head {
            flex-direction: column;
            align-items: flex-start;
        }

        .sobre-head img {
            width: 100%;
            max-width: 260px;
            height: auto;
            aspect-ratio: 3 / 4;
        }
    }

    .motivos-note {
        margin-top: 0.25rem;
        font-size: 0.95rem;
        line-height: 1.6;
        color: var(--text-light, #555);
        background: rgba(8, 186, 156, 0.07);
        border-radius: 10px;
        padding: 0.75rem 0.9rem;
    }

    .sobre-name {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--primary-color);
        line-height: 1.2;
    }

    .crp-badge {
        margin: 0.15rem 0 0;
        font-size: 0.88rem;
        color: var(--text-light, #666);
    }

    @media (max-width: 900px) {
        .duo-cards {
            grid-template-columns: 1fr;
        }
    }

    .section-header--left {
        text-align: left;
        max-width: 760px;
        margin-left: 0;
        margin-right: 0;
    }

    :global(.location-content p.address-line) {
        text-align: left;
    }

    .address-line {
        font-size: 1.05rem;
        line-height: 1.75;
        margin-bottom: 2rem;
    }

    .map-container-full {
        margin-top: 2rem;
    }

    .map-action {
        text-align: center;
        margin-top: 1rem;
    }

</style>
