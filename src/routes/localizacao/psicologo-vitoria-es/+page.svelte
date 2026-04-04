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

    const neighborhoodGroups = [
        {
            label: "Perto do consultório",
            items: ["Jardim da Penha", "Mata da Praia", "Goiabeiras", "República"],
        },
        {
            label: "Acesso rápido pela Reta da Penha",
            items: [
                "Praia do Canto",
                "Enseada do Suá",
                "Bento Ferreira",
                "Santa Lúcia",
            ],
        },
        {
            label: "Outros bairros frequentes",
            items: ["Jardim Camburi", "Centro", "Maruípe", "Santa Martha"],
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
    preloadImage="/images/hero/hero-600x800.webp"
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
                <img
                    src="/images/hero/hero-600x800.webp"
                    srcset="/images/hero/hero-600x800-300w.webp 300w, /images/hero/hero-600x800-450w.webp 450w, /images/hero/hero-600x800.webp 600w"
                    sizes="(max-width: 480px) 300px, (max-width: 768px) 450px, 450px"
                    alt="Bernardo Carielo, psicólogo em Vitória ES"
                    width="450"
                    height="600"
                    loading="eager"
                    fetchpriority="high"
                />
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
            Jardim da Penha é central, o acesso é simples e o consultório fica em frente à UFES
        </p>

        <div class="answer-box">
            <p>
                Se você procura um psicólogo em Vitória, o consultório fica em Jardim da
                Penha e atende pessoas de diferentes bairros da capital e da região
                metropolitana. A principal porta de entrada para demandas individuais é a
                <a href="/servicos/psicoterapia-individual/">psicoterapia individual</a>; a
                <a href="/servicos/terapia-de-casal/">terapia de casal</a> aparece como eixo
                secundário quando a demanda central é relacional.
            </p>
        </div>

        <img
            src="/images/localizacao/psicologo-vitoria-es.webp"
            alt="Ilustração abstrata para Vitória ES"
            class="editorial-image"
            width="800"
            height="1066"
            loading="lazy"
        />

        <p>
            Vitória é uma cidade compacta e cheia de vida. Quem vive aqui conhece as vantagens
            das distâncias curtas: a praia fica perto, o trabalho fica perto, e o cuidado com
            a saúde mental também pode ficar. Ter um consultório acessível na capital é uma
            facilidade que muitos moradores aproveitam.
        </p>
        <p>
            O consultório em Jardim da Penha fica numa das regiões mais centrais de Vitória,
            acessível para quem vem de diferentes bairros — de Bento Ferreira a Jardim Camburi,
            de Santa Lúcia a Goiabeiras. A localização em frente à UFES torna a referência fácil.
        </p>
        <p>
            Terapia pode ser um espaço para ampliar o autoconhecimento, refletir sobre escolhas,
            ou simplesmente ter uma hora semanal dedicada a você. Seja qual for o seu momento, o
            processo começa com uma conversa.
        </p>
        <p>
            Conheça mais sobre como funciona a
            <a href="/servicos/psicoterapia-individual/">psicoterapia individual</a>
            e o que esperar dos primeiros encontros.
        </p>
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
    <div class="section-header">
        <span class="section-kicker">Serviços</span>
        <h2>Serviços em destaque para quem busca psicólogo em Vitória</h2>
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

<!-- Micro-seção prática -->
<Section variant="white">
    <div class="practical-section">
        <h2>Como chegar ao consultório</h2>
        <p>
            O consultório fica na <strong>Rua Darcy Grijó, 50 - Sala 409</strong>, Jardim da
            Penha, Vitória — em frente à UFES, com acesso pela Av. Fernando Ferrari (Reta da
            Penha). Há vagas nas ruas ao redor do prédio.
        </p>
        <p>
            Para quem mora em bairros mais distantes ou prefere praticidade, ofereço
            <a href="/servicos/terapia-online/">terapia online</a> com a mesma qualidade e
            presença terapêutica.
        </p>
    </div>
</Section>

<!-- Bairros e acesso -->
<Section variant="beige">
    <div class="section-header">
        <h2>De onde vêm as pessoas que atendo</h2>
        <p style="color: var(--text-light); margin-top: 0.5rem;">
            O consultório fica em Jardim da Penha, mas recebe pessoas de toda Vitória
        </p>
    </div>
    <div class="bairros-grid">
        {#each neighborhoodGroups as group}
            <div class="bairro-card">
                <h3><MapPin size={20} /> {group.label}</h3>
                <ul>
                    {#each group.items as item}<li>• {item}</li>{/each}
                </ul>
            </div>
        {/each}
    </div>
</Section>

<!-- Localização / Mapa -->
<Section variant="white">
    <div class="section-header">
        <span class="section-kicker">Localização</span>
        <h2>Consultório em Jardim da Penha, com acesso para toda Vitória</h2>
    </div>
    <div class="location-content">
        <p>
            O consultório está em <strong>Jardim da Penha</strong>, em frente à UFES, com
            acesso facilitado pela Reta da Penha e pela Av. Fernando Ferrari. Isso ajuda quem
            vem de bairros como Jardim Camburi, Praia do Canto, Bento Ferreira, Mata da Praia
            e Santa Lúcia.
        </p>
        <div class="cards-grid access-grid">
            <Card icon={Route} title="Vias principais">
                <p>
                    Próximo à <strong>Reta da Penha</strong> e Av. Fernando Ferrari. Chegada
                    fácil pelas rotas centrais de Vitória.
                </p>
            </Card>
            <Card icon={Car} title="Ponte da Passagem">
                <p>
                    Rota natural para quem vem de Praia do Canto, Enseada do Suá e bairros
                    do centro-sul de Vitória — a ponte desemboca direto na Reta da Penha.
                </p>
            </Card>
            <Card icon={Bus} title="Transporte Público">
                <p>
                    Diversos pontos de ônibus nas proximidades — UFES e arredores como ponto
                    de referência para linhas urbanas e intermunicipais.
                </p>
            </Card>
        </div>
        <div class="location-process">
            <div>
                <h3>Como a busca local vira decisão</h3>
                <p>
                    Primeiro você confirma se a logística faz sentido. Depois avalia se a
                    <a href="/servicos/psicoterapia-individual/">psicoterapia individual</a> é
                    o melhor formato para sua demanda. Se ainda estiver em dúvida, o contato
                    inicial pode ser breve.
                </p>
            </div>
            <div class="map-container">
                <iframe
                    src={siteProfile.externalLinks.googleMapsEmbed}
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Localização do consultório em Vitória"
                ></iframe>
            </div>
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

<!-- Sobre mim + CRP -->
<Section variant="beige">
    <div class="about-grid">
        <img
            src="/images/sobre/bernardo-profissional.webp"
            alt="Bernardo Carielo Psicólogo em Vitória ES"
            width="250"
            height="333"
            loading="lazy"
        />
        <div>
            <h3>Bernardo Carielo</h3>
            <p class="crp-badge">CRP-16/5527 · Psicólogo Humanista</p>
            <p>
                Uma escuta centrada na pessoa, para que a conversa seja um lugar seguro e
                honesto — sem pressa e sem julgamento. O seu processo é seu, e meu papel é
                estar presente enquanto você encontra seus próprios caminhos.
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
                <strong>Primeira conversa</strong> sem compromisso de continuidade — é um momento
                para nos conhecermos
            </li>
        </ol>
        <p>
            Não há pressa. O primeiro passo mais importante é o que você se sentir pronto para
            dar.
        </p>
    </div>
</Section>

<!-- FAQ -->
<Section variant="beige" id="faq">
    <div class="section-header">
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

<!-- Artigos -->
<Section variant="white">
    <div class="section-header"><h2>Da nossa biblioteca</h2></div>
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

<!-- Outras regiões -->
<Section variant="beige">
    <div class="section-header"><h2>Outras regiões atendidas</h2></div>
    <div class="links-grid">
        {#each crossLinks as link}
            <a href={link.href} class="link-card">
                <h3>{link.label}</h3>
                <p>{link.description}</p>
            </a>
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

    .location-process {
        display: grid;
        grid-template-columns: 0.8fr 1.2fr;
        gap: 2rem;
        align-items: center;
        margin-top: 2rem;
    }

    .location-process h3 {
        margin-bottom: 0.8rem;
    }

    .location-process p {
        text-align: left;
        margin-bottom: 0;
    }

    .map-action {
        text-align: center;
        margin-top: 1rem;
    }

    @media (max-width: 900px) {
        .location-process {
            grid-template-columns: 1fr;
        }
    }
</style>
