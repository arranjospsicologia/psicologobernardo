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
        ChevronDown,
        Heart,
        MapPin,
        Monitor,
        Phone,
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

    const neighborhoodGroups = [
        {
            label: "Vitória",
            items: ["Jardim da Penha", "Santa Luíza", "Bento Ferreira", "Jardim Camburi"],
        },
        {
            label: "Região Metropolitana",
            items: ["Vila Velha", "Serra", "Cariacica", "Fundão"],
        },
        {
            label: "Bairros próximos",
            items: ["Praia do Canto", "Mata da Praia", "Goiabeiras", "República"],
        },
    ];

    const blogArticles = [
        {
            slug: "onde-cuidar-saude-mental-jardim-da-penha",
            categorySlug: "jardim-da-penha",
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
        {
            href: "/localizacao/psicologo-praia-do-canto/",
            label: "Praia do Canto",
            description: "A poucos passos",
        },
        {
            href: "/localizacao/psicologo-mata-da-praia/",
            label: "Mata da Praia",
            description: "Bairro vizinho ao consultório",
        },
        {
            href: "/localizacao/psicologo-vila-velha/",
            label: "Vila Velha",
            description: "Presencial e online",
        },
        {
            href: "/localizacao/psicologo-serra-es/",
            label: "Serra",
            description: "Presencial e online",
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
    title="Psicólogo em Jardim da Penha | Bernardo Carielo"
    description="Psicólogo em Jardim da Penha, Vitória (ES). Consultório em frente à UFES. Atendimento presencial e online para ansiedade, depressão e relacionamentos."
    canonical="https://psicologobernardo.com.br/localizacao/psicologo-jardim-da-penha/"
    {jsonLd}
    preloadImage="/images/hero/hero-600x800.webp"
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
                    Atendimento presencial em Jardim da Penha, em frente à UFES, e
                    possibilidade de atendimento online. Para a maior parte das demandas
                    individuais, a porta principal é a
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
                <img
                    src="/images/hero/hero-600x800.webp"
                    srcset="/images/hero/hero-600x800-300w.webp 300w, /images/hero/hero-600x800-450w.webp 450w, /images/hero/hero-600x800.webp 600w"
                    sizes="(max-width: 480px) 300px, (max-width: 768px) 450px, 450px"
                    alt="Bernardo Carielo, psicólogo em Jardim da Penha, Vitória ES"
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
        <h2>Jardim da Penha: um bairro vivo, com espaço para pausar</h2>
        <p class="editorial-subtitle">
            Entre a UFES e a Reta da Penha, um lugar para se ouvir com calma
        </p>

        <div class="answer-box">
            <p>
                Se você procura um psicólogo em Jardim da Penha, o consultório fica aqui
                mesmo no bairro — na Rua Darcy Grijó, 50, em frente à UFES. A
                <a href="/servicos/psicoterapia-individual/">psicoterapia individual</a> é a
                porta de entrada principal para a maioria das demandas; a
                <a href="/servicos/terapia-de-casal/">terapia de casal</a> entra quando a
                demanda central é relacional.
            </p>
        </div>

        <img
            src="/images/localizacao/psicologo-jardim-da-penha.webp"
            alt="Ilustração abstrata para Jardim da Penha"
            class="editorial-image"
            width="800"
            height="1066"
            loading="lazy"
        />

        <p>
            Jardim da Penha é um bairro que pulsa. Tem a UFES de um lado, o comércio de
            outro, e uma energia constante de quem estuda, trabalha e constrói a vida por
            aqui. É um lugar de encontros, de movimento — e também de recomeços.
        </p>
        <p>
            Essa proximidade com a universidade faz do bairro um ponto de passagem para
            muita gente em transição: estudantes descobrindo novos caminhos, profissionais
            repensando a carreira, pessoas entre fases que merecem atenção e cuidado. É
            natural querer um espaço para organizar essas experiências.
        </p>
        <p>
            O consultório fica no Edifício Madison, em frente à UFES — um lugar que muitos
            já conhecem na paisagem do bairro. Ter terapia por perto pode ser um dos jeitos
            mais simples de incluir autocuidado na rotina que você já tem.
        </p>
        <p>
            Se você está considerando terapia em Jardim da Penha, conheça como funciona a
            <a href="/servicos/psicoterapia-individual/">psicoterapia individual</a>
            e o que esperar dos primeiros encontros.
        </p>
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
    <div class="section-header">
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

<!-- Como chegar -->
<Section variant="white">
    <div class="practical-section">
        <h2>Como chegar ao consultório</h2>
        <p>
            O consultório fica na <strong>Rua Darcy Grijó, 50 - Sala 409</strong>, no
            Edifício Madison Office Tower, em frente à UFES. O acesso é fácil pela Av.
            Fernando Ferrari (Reta da Penha) ou pela Rua da Lama. Há vagas nas ruas ao
            redor do prédio.
        </p>
        <p>
            Também ofereço <a href="/servicos/terapia-online/">terapia online</a> para quem
            prefere não se deslocar ou tem uma semana mais corrida.
        </p>
    </div>
</Section>

<!-- Onde fica / Mapa -->
<Section variant="beige">
    <div class="section-header">
        <span class="section-kicker">Localização</span>
        <h2>Endereço e mapa</h2>
    </div>
    <div class="location-content">
        <div class="address-card">
            <h3><MapPin size={20} style="display: inline-block; vertical-align: middle;" /> Endereço completo</h3>
            <p>
                <strong>Rua Darcy Grijó, 50 - Sala 409, Jardim da Penha, Vitória - ES, CEP: 29060-500</strong>
            </p>
        </div>
        <div class="map-container" style="margin-top: 1.5rem;">
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

<!-- Bairros -->
<Section variant="white">
    <div class="section-header">
        <h2>Bairros próximos – atendimentos mais frequentes</h2>
        <p style="color: var(--text-light); margin-top: 0.5rem;">
            Atendo presencialmente pessoas de toda Vitória e região metropolitana,
            especialmente dos bairros próximos a Jardim da Penha.
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

<!-- Sobre mim + CRP -->
<Section variant="beige">
    <div class="about-grid">
        <img
            src="/images/sobre/bernardo-profissional.webp"
            alt="Bernardo Carielo Psicólogo em Jardim da Penha, Vitória ES"
            width="250"
            height="333"
            loading="lazy"
        />
        <div>
            <h3>Bernardo Carielo</h3>
            <p class="crp-badge">CRP-16/5527 · Psicólogo Humanista</p>
            <p>
                Trabalho pela Abordagem Centrada na Pessoa — uma forma de escuta que cria
                espaço para você falar com liberdade, sem roteiros ou imposições. Aqui, você
                é o protagonista do seu processo, e meu papel é estar presente enquanto você
                encontra suas próprias respostas.
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
            Não há pressa. O primeiro passo mais importante é o que você se sentir pronto
            para dar.
        </p>
    </div>
</Section>

<!-- FAQ -->
<Section variant="beige" id="faq">
    <div class="section-header">
        <span class="section-kicker">Perguntas frequentes</span>
        <h2>Perguntas frequentes</h2>
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

<!-- Artigos -->
<Section variant="white">
    <div class="section-header"><h2>Para ler antes ou depois da sessão</h2></div>
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
        <h2>Em frente à UFES, um espaço para você se ouvir de verdade</h2>
        <p>
            Quando fizer sentido, basta uma mensagem para alinhar horário, formato e
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

    .map-action {
        text-align: center;
        margin-top: 1rem;
    }
</style>
