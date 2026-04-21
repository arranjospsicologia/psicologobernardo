<script lang="ts">
    import "$lib/styles/location.css";
    import {
        Section,
        Button,
        Breadcrumb,
        SEO,
        Card,
        TrustPanel,
        JourneyShortcuts,
    } from "$lib";
    import {
        Bus,
        Car,
        ChevronDown,
        Heart,
        MapPin,
        Monitor,
        Phone,
        Route,
        Users,
    } from "lucide-svelte";
    import { buildWhatsAppUrl, siteProfile } from "$lib/data/siteProfile";

    const whatsappUrl = buildWhatsAppUrl(
        "Olá, vi a página de psicólogo em Vitória e gostaria de conversar.",
    );

    const localJourneyItems = [
        {
            label: "Serviço principal",
            title: "Ver psicoterapia individual",
            description:
                "A principal porta de entrada para quem procura um psicólogo em Vitória por questões individuais.",
            href: "/servicos/psicoterapia-individual/",
        },
        {
            label: "Relação",
            title: "Ver terapia de casal",
            description:
                "Quando a principal demanda está na relação, no diálogo ou em ciclos de conflito.",
            href: "/servicos/terapia-de-casal/",
        },
        {
            label: "Hiperlocal",
            title: "Ver Jardim da Penha",
            description:
                "Página específica para quem quer avaliar proximidade, bairro e logística de deslocamento.",
            href: "/localizacao/psicologo-jardim-da-penha/",
        },
        {
            label: "Contato",
            title: "Falar pelo WhatsApp",
            description:
                "Mensagem curta para entender se o formato presencial ou online faz mais sentido agora.",
            href: "/contato/",
        },
    ];

    const blogArticles = [
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
    ];

    const crossLinks = [
        {
            href: "/localizacao/psicologo-jardim-da-penha/",
            label: "Jardim da Penha",
            description: "Consultório em frente à UFES",
        },
    ];

    const faqContent = [
        {
            question: "Você atende pessoas de qualquer bairro de Vitória?",
            answer: "Sim. O consultório fica em Jardim da Penha e costuma ser acessível a partir de diferentes regiões da cidade.",
        },
        {
            question:
                "Não moro perto de Jardim da Penha. Ainda faz sentido marcar presencial?",
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
    ];

    let faqItems = $state(faqContent.map((item) => ({ ...item, open: false })));

    function toggleFaq(index: number) {
        faqItems = faqItems.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false,
        }));
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://psicologobernardo.com.br/localizacao/psicologo-vitoria-es/#webpage",
                url: "https://psicologobernardo.com.br/localizacao/psicologo-vitoria-es/",
                name: "Psicólogo em Vitória ES — Acesso, Bairros e Consultório | Bernardo Carielo",
                description:
                    "Consultório em Jardim da Penha, Vitória, em frente à UFES. Veja como chegar, bairros atendidos e como funciona o atendimento presencial e online.",
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
        ],
    };
</script>

<SEO
    title="Psicólogo em Vitória ES — Acesso, Bairros e Consultório | Bernardo Carielo"
    description="Consultório em Jardim da Penha, Vitória, em frente à UFES. Veja como chegar, bairros atendidos e como funciona o atendimento presencial e online."
    canonical="https://psicologobernardo.com.br/localizacao/psicologo-vitoria-es/"
    {jsonLd}
    preloadImage="/images/consultorio/espaco-privado-600w.webp"
/>

<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Localização", href: "/localizacao/" },
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
                    Consultório em Jardim da Penha, em frente à UFES, com acesso fácil a partir
                    de diferentes bairros de Vitória. Atendimento presencial e online. Veja se a
                    logística faz sentido para a sua rotina — a principal porta de entrada é a
                    <a href="/servicos/psicoterapia-individual/">psicoterapia individual</a>.
                </p>
                <div class="hero-buttons">
                    <Button href={whatsappUrl} variant="primary">
                        <Phone size={20} /> Agendar conversa
                    </Button>
                    <Button href="/servicos/psicoterapia-individual/" variant="outline">
                        Ver psicoterapia individual
                    </Button>
                </div>
                <div class="hero-local-facts">
                    <span>Jardim da Penha</span>
                    <span>Em frente à UFES</span>
                    <span>Presencial e online</span>
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

<!-- Answer box + Editorial local -->
<Section variant="beige">
    <article class="editorial-local">
        <h2>Um consultório em Vitória que cabe na sua rotina</h2>
        <p class="editorial-subtitle">
            O consultório fica em frente à UFES, com acesso direto pela Reta da Penha
        </p>

        <div class="editorial-body">
            <picture>
                <source
                    type="image/avif"
                    srcset="/images/sobre/foto-profissional-psicologo-bernardo2-225w.avif 225w,
                            /images/sobre/foto-profissional-psicologo-bernardo2-450w.avif 450w"
                    sizes="180px"
                />
                <img
                    src="/images/sobre/foto-profissional-psicologo-bernardo2-225w.webp"
                    srcset="/images/sobre/foto-profissional-psicologo-bernardo2-225w.webp 225w,
                            /images/sobre/foto-profissional-psicologo-bernardo2-450w.webp 450w"
                    sizes="180px"
                    alt="Bernardo Carielo, psicólogo em Vitória ES"
                    class="editorial-image-sm"
                    width="180"
                    height="240"
                    loading="lazy"
                />
            </picture>
            <div class="answer-box">
                <p>
                    Se você procura um psicólogo em Vitória, o consultório fica em Jardim da
                    Penha e atende pessoas de diferentes bairros da capital. A maioria das pessoas
                    começa pela <a href="/servicos/psicoterapia-individual/">psicoterapia individual</a>,
                    mas se a demanda for de casal, isso também é possível.
                </p>
            </div>
        </div>
    </article>
</Section>

<!-- JourneyShortcuts -->
<Section variant="white">
    <JourneyShortcuts
        title="Atalhos a partir da busca local"
        intro="Se a sua busca começou por cidade e bairro, estes caminhos ajudam a decidir sem perder tempo."
        items={localJourneyItems}
    />
</Section>

<!-- Serviços em destaque -->
<Section variant="beige">
    <div class="section-header section-header--left">
        <span class="section-kicker">Serviços</span>
        <h2>Serviços em destaque para quem busca psicólogo em Vitória</h2>
        <p class="section-subtitle">
            Os três caminhos mais comuns para quem chega ao consultório, cada
            um pensado para uma demanda diferente.
        </p>
    </div>
    <div class="cards-grid">
        <Card
            icon={Heart}
            title="Psicoterapia Individual"
            href="/servicos/psicoterapia-individual/"
        >
            <p>
                Principal caminho para ansiedade, desânimo, conflitos, transições e
                autoconhecimento.
            </p>
        </Card>
        <Card icon={Users} title="Terapia de Casal" href="/servicos/terapia-de-casal/">
            <p>
                Indicado quando a demanda principal está na relação, no diálogo ou em decisões
                do casal.
            </p>
        </Card>
        <Card icon={Monitor} title="Atendimento Online" href="/servicos/terapia-online/">
            <p>
                Alternativa consistente para quem precisa de mais flexibilidade sem sair da
                cidade.
            </p>
        </Card>
    </div>
</Section>

<!-- Endereço e como chegar -->
<Section variant="white">
    <div class="section-header section-header--left">
        <span class="section-kicker">Acesso</span>
        <h2>Endereço e como chegar</h2>
    </div>
    <div class="location-content">
        <p class="address-line">
            <strong>Rua Darcy Grijó, 50 — Sala 409</strong><br />
            Jardim da Penha, Vitória ES · Em frente à UFES
        </p>
        <div class="cards-grid access-grid">
            <Card icon={Route} title="Vias principais">
                <p>
                    Próximo à <strong>Reta da Penha</strong> e Av. Fernando Ferrari. Chegada
                    fácil pelas rotas centrais de Vitória.
                </p>
            </Card>
            <Card icon={Car} title="Estacionamento">
                <p>
                    Há vagas nas ruas ao redor do prédio. Rota natural para quem vem pela
                    Ponte da Passagem — desemboca direto na Reta da Penha.
                </p>
            </Card>
            <Card icon={Bus} title="Transporte público">
                <p>
                    Diversos pontos de ônibus nas proximidades — UFES e arredores como ponto
                    de referência para linhas urbanas e intermunicipais.
                </p>
            </Card>
        </div>
        <p class="neighborhood-note">
            A localização costuma funcionar para quem vem de Jardim Camburi, Mata da Praia,
            Goiabeiras, Praia do Canto, Bento Ferreira, Santa Lúcia e outros bairros próximos.
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
                srcset="/images/sobre/bernardo-profissional-225w.avif 225w,
                        /images/sobre/bernardo-profissional-450w.avif 450w"
                sizes="(max-width: 768px) 200px, 250px"
            />
            <img
                src="/images/sobre/bernardo-profissional-225w.webp"
                srcset="/images/sobre/bernardo-profissional-225w.webp 225w,
                        /images/sobre/bernardo-profissional-450w.webp 450w"
                sizes="(max-width: 768px) 200px, 250px"
                alt="Bernardo Carielo, psicólogo clínico (CRP 16/5527) em Vitória ES"
                width="250"
                height="333"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
            />
        </picture>
        <div>
            <h2 class="about-name">Bernardo Carielo</h2>
            <p class="crp-badge">CRP-16/5527 · Psicólogo Humanista</p>
            <p>
                Sou psicólogo clínico pela <strong>Abordagem Centrada na
                Pessoa (ACP)</strong> com base em Jardim da Penha (Vitória-ES),
                em frente à UFES. Além de atendimento individual, de casal e
                família, coordeno grupos e rodas de conversa para psicólogos e
                população em geral, remotamente ou, na cidade e voltados à
                população da Grande Vitória.
            </p>
            <p>
                Minha abordagem se baseia em uma escuta empática e sem
                julgamento. Confio que quando é verdadeiramente compreendida e
                respeitada, cada pessoa pode encontrar seu próprio caminho para
                descobrir uma maneira de ser que faça sentido para si mesma.
            </p>
            <a href="/sobre/">Conheça minha abordagem e formação →</a>
        </div>
    </div>
</Section>

<!-- Próximos passos -->
<Section variant="white">
    <div class="contact-steps">
        <h2>Como funciona o primeiro contato</h2>
        <ol>
            <li><strong>Envie uma mensagem</strong> pelo WhatsApp</li>
            <li>
                <strong>Eu respondo</strong> geralmente no mesmo dia útil para combinarmos um
                horário
            </li>
            <li>
                <strong>Primeira sessão</strong> marcada — um encontro para
                você apresentar o que te trouxe à terapia e começarmos a
                construir o trabalho no seu ritmo
            </li>
        </ol>
        <p>
            Não há pressa. O primeiro passo mais importante é o que você se sentir pronto para
            dar.
        </p>
    </div>
</Section>

<!-- Leituras -->
<Section variant="beige">
    <div class="section-header section-header--left">
        <span class="section-kicker">Leituras</span>
        <h2>Caso queira ler um pouco antes de decidir</h2>
    </div>
    <div class="loc-articles-grid">
        {#each blogArticles as article}
            <a href={`/${article.categorySlug}/${article.slug}/`} class="loc-article-card">
                <h3>{article.title}</h3>
                <p>{article.reason}</p>
                <span class="read-more">Ler artigo →</span>
            </a>
        {/each}
    </div>
</Section>

<!-- Jardim da Penha -->
<Section variant="white">
    <div class="section-header section-header--left">
        <span class="section-kicker">Bairro</span>
        <h2>Página específica do bairro: Jardim da Penha</h2>
        <p class="section-subtitle">
            Página com logística detalhada para quem quer avaliar proximidade e deslocamento.
        </p>
    </div>
    <div class="links-grid">
        {#each crossLinks as link}
            <a href={link.href} class="link-card">
                <h3>{link.label}</h3>
                <p>{link.description}</p>
            </a>
        {/each}
    </div>
</Section>

<!-- FAQ -->
<Section variant="beige" id="faq">
    <div class="section-header section-header--left">
        <span class="section-kicker">Perguntas frequentes</span>
        <h2>Antes de marcar</h2>
    </div>
    <div class="loc-faq-container">
        {#each faqItems as item, index}
            <details
                class="loc-faq-item"
                bind:open={item.open}
            >
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
        <h2>Se a localização faz sentido, o próximo passo é simples</h2>
        <p>
            Envie uma mensagem curta pelo WhatsApp para alinhar horário, formato e
            disponibilidade.
        </p>
        <Button href={whatsappUrl} variant="secondary" size="lg">
            <Phone size={20} /> Agendar conversa
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

    .editorial-body {
        display: flex;
        gap: 2rem;
        align-items: flex-start;
    }

    .editorial-body .answer-box {
        flex: 1;
    }

    .editorial-image-sm {
        width: 180px;
        height: auto;
        border-radius: var(--radius-md);
        object-fit: cover;
        flex-shrink: 0;
    }

    @media (max-width: 600px) {
        .editorial-body {
            flex-direction: column;
        }

        .editorial-image-sm {
            width: 100%;
            max-height: 200px;
            object-fit: cover;
        }
    }

    .answer-box {
        background: rgba(8, 186, 156, 0.06);
        border-left: 3px solid var(--primary);
        padding: 1.25rem 1.5rem;
        border-radius: 0 8px 8px 0;
        margin-bottom: 2rem;
    }

    .answer-box p {
        margin: 0;
        font-size: 1.05rem;
        line-height: 1.7;
    }

    .access-grid {
        margin-top: 2rem;
    }

    .map-container-full {
        margin-top: 2rem;
    }

    .map-action {
        text-align: center;
        margin-top: 1rem;
    }

    .about-name {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
        line-height: 1.2;
        color: var(--primary-color);
    }

    .section-header--left {
        text-align: left;
        max-width: 760px;
        margin-left: 0;
        margin-right: 0;
    }

    .section-header--left .section-subtitle {
        margin-left: 0;
        margin-right: 0;
    }

    :global(.location-content p.address-line),
    :global(.location-content p.neighborhood-note) {
        text-align: left;
    }

    .address-line {
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 2rem;
    }

    .neighborhood-note {
        font-size: 1rem;
        color: var(--text-light);
        margin-top: 1.5rem;
        margin-bottom: 0;
    }
</style>
