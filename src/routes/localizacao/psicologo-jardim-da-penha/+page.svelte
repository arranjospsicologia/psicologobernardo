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
        "Olá, gostaria de agendar uma consulta em Jardim da Penha.",
    );

    const localJourneyItems = [
        {
            label: "Serviço principal",
            title: "Ver psicoterapia individual",
            description:
                "A principal porta de entrada para quem procura atendimento no consultório de Jardim da Penha.",
            href: "/servicos/psicoterapia-individual/",
        },
        {
            label: "Relação",
            title: "Ver terapia de casal",
            description:
                "Quando a demanda central está na relação, no diálogo ou em ciclos de conflito.",
            href: "/servicos/terapia-de-casal/",
        },
        {
            label: "Região",
            title: "Ver psicólogo em Vitória",
            description:
                "Página mais ampla, com bairros atendidos e opções para toda a capital.",
            href: "/localizacao/psicologo-vitoria-es/",
        },
        {
            label: "Contato",
            title: "Falar pelo WhatsApp",
            description:
                "Mensagem curta para alinhar horário, formato e disponibilidade.",
            href: "/contato/",
        },
    ];

    const blogArticles = [
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
    ];

    const crossLinks = [
        {
            href: "/localizacao/psicologo-vitoria-es/",
            label: "Vitória ES",
            description: "Todos os bairros de Vitória",
        },
    ];

    const faqContent = [
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
                "@id": "https://psicologobernardo.com.br/localizacao/psicologo-jardim-da-penha/#webpage",
                url: "https://psicologobernardo.com.br/localizacao/psicologo-jardim-da-penha/",
                name: "Psicólogo em Jardim da Penha | Bernardo Carielo",
                description:
                    "Psicólogo em Jardim da Penha, Vitória (ES). Consultório em frente à UFES. Atendimento presencial e online para ansiedade, depressão e relacionamentos.",
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
    title="Psicólogo em Jardim da Penha — Em Frente à UFES, Vitória ES"
    description="Consultório de psicologia em Jardim da Penha, em frente à UFES. Atendimento presencial com fácil acesso e possibilidade de sessões online. Agende pelo WhatsApp."
    canonical="https://psicologobernardo.com.br/localizacao/psicologo-jardim-da-penha/"
    {jsonLd}
    preloadImage="/images/consultorio/espaco-privado-600w.webp"
/>

<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Localização", href: "/localizacao/" },
        { name: "Psicólogo Jardim da Penha" },
    ]}
/>

<!-- Hero -->
<section class="location-hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1>Psicólogo em Jardim da Penha</h1>
                <p class="hero-description">
                    Consultório no Ed. Madison, Sala 409, em frente à UFES — um ponto
                    fácil de encontrar no bairro. Atendimento presencial e online.
                    A principal porta de entrada é a
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
                    <span>Em frente à UFES</span>
                    <span>Ed. Madison, Sala 409</span>
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
                        alt="Consultório em Jardim da Penha, Vitória ES — espaço privado e acolhedor, em frente à UFES"
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
        <h2>Jardim da Penha: um bairro vivo, com espaço para pausar</h2>
        <p class="editorial-subtitle">
            Entre a UFES e a Reta da Penha, um lugar para se ouvir com calma
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
                    alt="Bernardo Carielo, psicólogo em Jardim da Penha"
                    class="editorial-image-sm"
                    width="180"
                    height="240"
                    loading="lazy"
                />
            </picture>
            <div class="answer-box">
                <p>
                    Se você procura um psicólogo em Jardim da Penha, o consultório fica aqui
                    mesmo no bairro — na Rua Darcy Grijó, 50, em frente à UFES. A maioria das
                    pessoas começa pela <a href="/servicos/psicoterapia-individual/">psicoterapia individual</a>,
                    mas se a demanda for de casal, isso também é possível.
                </p>
            </div>
        </div>
    </article>
</Section>

<!-- JourneyShortcuts -->
<Section variant="white">
    <JourneyShortcuts
        title="Atalhos a partir da busca no bairro"
        intro="Se a sua busca começou por Jardim da Penha ou UFES, estes caminhos ajudam a decidir sem perder tempo."
        items={localJourneyItems}
    />
</Section>

<!-- Serviços em destaque -->
<Section variant="beige">
    <div class="section-header section-header--left">
        <span class="section-kicker">Serviços</span>
        <h2>Serviços disponíveis no consultório</h2>
    </div>
    <div class="cards-grid">
        <Card
            icon={Heart}
            title="Psicoterapia Individual"
            href="/servicos/psicoterapia-individual/"
        >
            <p>
                Acolhimento para ansiedade, desânimo, conflitos, transições e
                autoconhecimento.
            </p>
        </Card>
        <Card icon={Users} title="Terapia de Casal" href="/servicos/terapia-de-casal/">
            <p>Espaço de mediação e diálogo quando a demanda principal está na relação.</p>
        </Card>
        <Card icon={Monitor} title="Terapia Online" href="/servicos/terapia-online/">
            <p>
                Atendimento por videochamada com a mesma presença terapêutica, para semanas
                mais corridas.
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
            Jardim da Penha, Vitória ES · Ed. Madison · Em frente à UFES
        </p>
        <div class="cards-grid access-grid">
            <Card icon={Route} title="Vias principais">
                <p>
                    Acesso fácil pela <strong>Reta da Penha</strong> (Av. Fernando Ferrari)
                    ou pela Rua da Lama, a partir de qualquer direção.
                </p>
            </Card>
            <Card icon={Car} title="Estacionamento">
                <p>
                    O edifício não tem estacionamento próprio. Há vagas nas ruas ao redor,
                    com disponibilidade variável por horário.
                </p>
            </Card>
            <Card icon={Bus} title="Transporte público">
                <p>
                    Diversos pontos de ônibus nas proximidades — UFES e arredores como
                    referência para linhas urbanas e intermunicipais.
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

<!-- Vitória ES -->
<Section variant="beige">
    <div class="section-header section-header--left">
        <span class="section-kicker">Região</span>
        <h2>Página mais ampla: psicólogo em Vitória ES</h2>
        <p class="section-subtitle">
            Para quem quer ver bairros atendidos e opções para toda a capital.
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

<!-- Quem vai te atender -->
<Section variant="white" id="quem-atende">
    <div class="section-header section-header--left">
        <span class="section-kicker">Quem sou</span>
        <h2>Quem vai te atender</h2>
    </div>
    <div class="about-grid">
        <picture>
            <source
                type="image/avif"
                srcset="/images/sobre/foto-profissional-psicologo-bernardo1-225w.avif 225w,
                        /images/sobre/foto-profissional-psicologo-bernardo1-450w.avif 450w"
                sizes="(max-width: 768px) 200px, 250px"
            />
            <img
                src="/images/sobre/foto-profissional-psicologo-bernardo1-225w.webp"
                srcset="/images/sobre/foto-profissional-psicologo-bernardo1-225w.webp 225w,
                        /images/sobre/foto-profissional-psicologo-bernardo1-450w.webp 450w"
                sizes="(max-width: 768px) 200px, 250px"
                alt="Bernardo Carielo, psicólogo clínico (CRP 16/5527) em Jardim da Penha, Vitória ES"
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
                Atendo em Jardim da Penha há 8 anos, tendo acompanhado mais de 100 moradores
                do bairro em diferentes momentos da vida. Me considero morador inseparável
                deste bairro e com frequência escrevo neste site sobre rotinas e cuidados de
                saúde mental possíveis com a infraestrutura presente.
            </p>
            <p>
                Conheço de perto o ritmo do bairro, a convivência com a UFES e os pequenos e
                grandes desafios da vizinhança, o que costuma facilitar o primeiro contato e a
                construção do vínculo terapêutico. A proximidade geográfica também significa
                horários mais acessíveis, deslocamento curto e um espaço reservado pensado
                para a privacidade do atendimento.
            </p>
            <a href="/sobre/">Conheça minha abordagem e formação →</a>
        </div>
    </div>
</Section>

<!-- Próximos passos -->
<Section variant="beige">
    <div class="contact-steps">
        <h2>Como funciona o primeiro contato</h2>
        <ol>
            <li><strong>Envie uma mensagem</strong> pelo WhatsApp</li>
            <li>
                <strong>Eu respondo</strong> geralmente no mesmo dia útil para combinarmos um
                horário
            </li>
            <li>
                <strong>Primeira conversa</strong> sem compromisso de continuidade — é um momento
                para nos conhecermos
            </li>
        </ol>
        <p>
            Não há pressa. O primeiro passo mais importante é o que você se sentir pronto
            para dar.
        </p>
    </div>
</Section>

<!-- Leituras -->
<Section variant="white">
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

<!-- FAQ -->
<Section variant="beige" id="faq">
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
        <h2>O consultório fica aqui no bairro — o próximo passo é uma mensagem</h2>
        <p>
            Escreva pelo WhatsApp o que está vivendo. A partir daí, alinhamos horário e formato.
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
        border-left: 3px solid var(--primary-color);
        padding: 1.25rem 1.5rem;
        border-radius: 0 8px 8px 0;
        margin-bottom: 0;
    }

    .answer-box p {
        margin: 0;
        font-size: 1.05rem;
        line-height: 1.7;
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

    .about-name {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
        line-height: 1.2;
        color: var(--primary-color);
    }
</style>
