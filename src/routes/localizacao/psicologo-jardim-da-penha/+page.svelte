<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, Card } from "$lib";
    import {
        Phone,
        MapPin,
        Home,
        Monitor,
        ExternalLink,
        Heart,
        Video,
        Users,
        MessageCircle,
    } from "lucide-svelte";

    // FAQPage Schema for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Onde posso estacionar para ir ao consultório em Jardim da Penha?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "O Edifício Madison não possui estacionamento próprio, mas há bastante estacionamento nas ruas ao redor: Rua Darcy Grijó, Rua da Lama, Rua Arthur Czartoryski, R. Des. Vicente Caetano e Av. Alziro Zarur.",
                },
            },
            {
                "@type": "Question",
                name: "Como chegar ao consultório de ônibus vindo da UFES?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "O consultório fica em frente à UFES, na Rua Darcy Grijó. Se você está na universidade, basta atravessar a Fernando Ferrari. O trajeto a pé leva menos de 5 minutos.",
                },
            },
            {
                "@type": "Question",
                name: "Você atende plano de saúde ou Unimed em Jardim da Penha?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não atendo diretamente por convênios. Os atendimentos são particulares, mas forneço recibo para reembolso, caso seu plano ofereça essa opção.",
                },
            },
            {
                "@type": "Question",
                name: "Qual o valor da consulta com psicólogo em Jardim da Penha?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Os valores são informados diretamente pelo WhatsApp, pois podem variar conforme a modalidade (presencial ou online) e frequência.",
                },
            },
            {
                "@type": "Question",
                name: "Quanto tempo dura uma sessão de terapia?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cada sessão tem duração de aproximadamente 50 minutos. A frequência semanal é o mais indicado para manter a continuidade do processo terapêutico.",
                },
            },
            {
                "@type": "Question",
                name: "Atende estudantes da UFES?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim, atendo estudantes universitários e a proximidade com a UFES facilita o acesso. Questões como ansiedade acadêmica, pressão por desempenho e transições de vida são temas frequentes nos atendimentos.",
                },
            },
        ],
    };

    const jardimDaPenhaSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://psicologobernardo.com.br/localizacao/psicologo-jardim-da-penha/#organization",
        name: "Bernardo Carielo Psicólogo - Jardim da Penha",
        description:
            "Psicólogo Clínico em Jardim da Penha, Vitória (ES). Atendimento presencial e online pela Abordagem Centrada na Pessoa. Especialista em ansiedade, depressão e autoconhecimento.",
        url: "https://psicologobernardo.com.br/localizacao/psicologo-jardim-da-penha/",
        telephone: "+55-27-99833-1228",
        priceRange: "$$",
        currenciesAccepted: "BRL",
        paymentAccepted: "Dinheiro, Transferência Bancária, PIX",
        address: {
            "@type": "PostalAddress",
            streetAddress:
                "Rua Darcy Grijó, 50 - Sala 409, Ed. Madison Office Tower",
            addressLocality: "Jardim da Penha",
            addressRegion: "ES",
            postalCode: "29060-500",
            addressCountry: "BR",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: "-20.2798925",
            longitude: "-40.3009252",
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                ],
                opens: "13:30",
                closes: "21:00",
            },
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "11",
            bestRating: "5",
            worstRating: "1",
        },
        areaServed: {
            "@type": "Neighborhood",
            name: "Jardim da Penha",
            containedInPlace: {
                "@type": "City",
                name: "Vitória",
                containedInPlace: {
                    "@type": "State",
                    name: "Espírito Santo",
                },
            },
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços de Psicologia em Jardim da Penha",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Psicoterapia Individual Presencial",
                        description:
                            "Atendimento psicológico presencial no Jardim da Penha.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Terapia Online",
                        description:
                            "Atendimento psicológico também disponível online.",
                    },
                },
            ],
        },
    };
</script>

<SEO
    title="Psicólogo em Jardim da Penha – Vitória ES | Bernardo Carielo"
    description="Psicólogo em Jardim da Penha, Vitória (ES). Consultório em frente à UFES. Atendimento presencial humanizado para ansiedade, depressão e relacionamentos. Agende sua sessão."
    canonical="https://psicologobernardo.com.br/localizacao/psicologo-jardim-da-penha/"
    jsonLd={jardimDaPenhaSchema}
    preloadImage="/images/consultorio/fachada-madison.webp"
/>

<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Psicólogo Jardim da Penha" },
    ]}
/>

<section class="location-hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1>Psicólogo em Jardim da Penha - Bernardo Carielo</h1>
                <p class="hero-description">
                    Atendimento presencial em Jardim da Penha (Vitória – ES)
                    pela Abordagem Centrada na Pessoa, em frente à UFES, em um
                    espaço de escuta, acolhimento e autenticidade.
                </p>
                <div class="hero-buttons">
                    <Button
                        href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
                        variant="primary"
                    >
                        <Phone size={20} />
                        Agendar consulta
                    </Button>
                    <Button href="/contato" variant="outline"
                        >Ver contato</Button
                    >
                </div>
            </div>
            <div class="hero-image">
                <img
                    src="/images/consultorio/fachada-madison.webp"
                    srcset="/images/consultorio/fachada-madison-400w.webp 400w,
                            /images/consultorio/fachada-madison-800w.webp 800w,
                            /images/consultorio/fachada-madison.webp 1200w"
                    sizes="(max-width: 480px) 400px, (max-width: 768px) 800px, 450px"
                    alt="Fachada do Edifício Madison Office Tower - Consultório em Jardim da Penha, Vitória (ES)"
                    width="450"
                    height="600"
                    loading="eager"
                    fetchpriority="high"
                />
            </div>
        </div>
    </div>
</section>

<Section variant="beige">
    <div class="section-header">
        <h2>Sobre mim</h2>
    </div>
    <div class="about-grid">
        <div class="about-content">
            <p>
                Se você está buscando um atendimento próximo da sua casa ou
                trabalho, meu consultório em Jardim da Penha oferece um espaço
                acolhedor e reservado para que você possa falar de si mesmo, no
                seu ritmo, sem julgamentos.
            </p>
            <p>
                Trabalho com a <strong>Abordagem Centrada na Pessoa</strong>,
                desenvolvida por Carl Rogers, que valoriza a autenticidade, a
                empatia e o respeito incondicional. Aqui, você é o protagonista
                do seu processo, e meu papel é oferecer um espaço seguro para
                que você se compreenda melhor e encontre seus próprios caminhos.
            </p>
        </div>
        <div class="about-image">
            <img
                src="/images/hero/hero-600x800.webp"
                alt="Bernardo Carielo Psicólogo em Jardim da Penha, Vitória (ES)"
                loading="lazy"
            />
        </div>
    </div>
</Section>

<Section variant="white">
    <div class="section-header">
        <h2>Onde fica o consultório</h2>
    </div>
    <div class="location-content">
        <p>
            Meu consultório está localizado no bairro <strong
                >Jardim da Penha</strong
            >, em Vitória – ES, um dos pontos mais acessíveis da cidade. Fico
            <strong>em frente à UFES</strong>
            (Universidade Federal do Espírito Santo), perto de vias importantes como
            a Reta da Penha e a Fernando Ferrari.
        </p>
        <p>
            A localização central faz com que pessoas de diferentes bairros
            consigam chegar com facilidade, seja de carro, ônibus ou a pé.
        </p>
        <div class="address-card">
            <h3>
                <MapPin
                    size={20}
                    style="display: inline-block; vertical-align: middle;"
                /> Endereço completo
            </h3>
            <p>
                <strong
                    >Rua Darcy Grijó, 50 - Sala 409, Jardim da Penha, Vitória -
                    ES, CEP: 29060-500</strong
                >
            </p>
        </div>
        <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1871.2565968762556!2d-40.29407481177918!3d-20.279014427004878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8171b61b8e13b%3A0x5bab77942d3119e5!2sPsic%C3%B3logo%20-%20Bernardo%20Carielo%20Macedo%20de%20Oliveira%20Pinto!5e0!3m2!1spt-BR!2sbr!4v1763333002406!5m2!1spt-BR!2sbr"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Localização do consultório - Arranjos Psicologia"
            ></iframe>
        </div>
        <div style="text-align: center;">
            <a
                href="https://maps.google.com/?q=Rua+Darcy+Grijó,+50,+Jardim+da+Penha,+Vitória,+ES"
                target="_blank"
                rel="noopener"
                class="map-link"
            >
                <ExternalLink size={20} />
                Abrir no Google Maps
            </a>
        </div>
    </div>
</Section>

<!-- SEO Content Expansion: Psicoterapia em Jardim da Penha -->
<Section variant="beige">
    <div class="section-header">
        <h2>Psicoterapia no coração de Jardim da Penha</h2>
        <p style="color: var(--text-light); margin-top: 0.5rem;">
            Um espaço tranquilo e acessível para o seu cuidado
        </p>
    </div>
    <div class="location-content" style="max-width: 800px; margin: 0 auto;">
        <p>
            O bairro <strong>Jardim da Penha</strong> é conhecido por sua vida
            comunitária vibrante e facilidade de acesso. O consultório no
            <em>Edifício Madison Office Tower</em> oferece a privacidade e o silêncio
            necessários para o processo terapêutico, mesmo estando em uma região
            central.
        </p>
        <p>
            Além da proximidade com a UFES, estamos próximos à Igreja São
            Francisco de Assis e à Rua da Lama, pontos de referência conhecidos.
            Isso facilita o acesso tanto para quem vem da <strong
                >Mata da Praia</strong
            >
            e <strong>Goiabeiras</strong>, quanto para quem chega pela Ponte da
            Passagem.
        </p>

        <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1.25rem;">
            Serviços disponíveis no local
        </h3>
        <p>
            Ofereço acompanhamento especializado para diversas demandas. No
            consultório em Jardim da Penha, você encontra um ambiente preparado
            para:
        </p>

        <div class="cards-grid" style="margin-top: 2rem;">
            <Card
                icon={Heart}
                title="Ansiedade e Depressão"
                href="/servicos/psicoterapia-individual/"
                variant="default"
            >
                <p>
                    Acolhimento para momentos de crise e sofrimento emocional
                    intenso.
                </p>
            </Card>
            <Card
                icon={Users}
                title="Terapia para Casais"
                href="/servicos/terapia-de-casal/"
                variant="default"
            >
                <p>Espaço de mediação e diálogo para relacionamentos.</p>
            </Card>
        </div>

        <p
            style="margin-top: 2rem; font-size: 0.95rem; color: var(--text-light);"
        >
            Também realizo <a
                href="/servicos/terapia-online/"
                class="text-primary-hover">atendimentos online</a
            > caso você resida em outro estado ou tenha dificuldade de locomoção.
        </p>
    </div>
</Section>

<Section variant="white">
    <div class="section-header">
        <h2>Bairros próximos – atendimentos mais frequentes</h2>
        <p style="color: var(--text-light); margin-top: 0.5rem;">
            Atendo presencialmente pessoas de toda Vitória e região
            metropolitana, especialmente dos bairros próximos a Jardim da Penha.
        </p>
    </div>
    <div class="bairros-grid">
        <div class="bairro-card">
            <h3><MapPin size={20} /> Vitória</h3>
            <ul>
                <li>• Jardim da Penha</li>
                <li>• Santa Luíza</li>
                <li>• Bento Ferreira</li>
                <li>• Jardim Camburi</li>
            </ul>
        </div>
        <div class="bairro-card">
            <h3><MapPin size={20} /> Região Metropolitana</h3>
            <ul>
                <li>• Vila Velha</li>
                <li>• Serra</li>
                <li>• Cariacica</li>
                <li>• Fundão</li>
            </ul>
        </div>
        <div class="bairro-card">
            <h3><MapPin size={20} /> Bairros Próximos</h3>
            <ul>
                <li>• Praia do Canto</li>
                <li>• Mata da Praia</li>
                <li>• Goiabeiras</li>
                <li>• República</li>
            </ul>
        </div>
    </div>
</Section>

<Section variant="white">
    <div class="section-header">
        <h2>Outras regiões atendidas</h2>
    </div>
    <div class="links-grid">
        <a href="/localizacao/psicologo-vitoria-es/" class="link-card">
            <h3>Vitória ES</h3>
            <p>Atendimento em todos os bairros de Vitória</p>
        </a>
        <a href="/localizacao/psicologo-praia-do-canto/" class="link-card">
            <h3>Praia do Canto</h3>
            <p>A poucos minutos de distância</p>
        </a>
        <a href="/localizacao/psicologo-vila-velha/" class="link-card">
            <h3>Vila Velha</h3>
            <p>Atendimento presencial e online</p>
        </a>
        <a href="/localizacao/psicologo-serra-es/" class="link-card">
            <h3>Serra</h3>
            <p>Atendimento presencial e online</p>
        </a>
    </div>
</Section>

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
</svelte:head>

<Section variant="white">
    <div class="section-header">
        <h2>Perguntas frequentes – Psicólogo em Jardim da Penha</h2>
    </div>
    <div class="faq-container">
        <details class="faq-item">
            <summary
                >Onde posso estacionar para ir ao consultório em Jardim da
                Penha?</summary
            >
            <div class="faq-answer">
                <p>
                    O Edifício Madison não possui estacionamento próprio, mas há
                    bastante estacionamento nas ruas ao redor: Rua Darcy Grijó,
                    Rua da Lama, Rua Arthur Czartoryski, R. Des. Vicente Caetano
                    e Av. Alziro Zarur.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary
                >Como chegar ao consultório de ônibus vindo da UFES?</summary
            >
            <div class="faq-answer">
                <p>
                    O consultório fica em frente à UFES, na Rua Darcy Grijó. Se
                    você está na universidade, basta atravessar a Fernando
                    Ferrari. O trajeto a pé leva menos de 5 minutos. Diversos
                    ônibus param nos pontos próximos à UFES e à Rua da Lama.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary
                >Você atende plano de saúde ou Unimed em Jardim da Penha?</summary
            >
            <div class="faq-answer">
                <p>
                    Não atendo diretamente por convênios. Os atendimentos são
                    particulares, mas forneço recibo para reembolso, caso seu
                    plano ofereça essa opção. Verifique com sua operadora as
                    condições de reembolso para psicoterapia.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary
                >Qual o valor da consulta com psicólogo em Jardim da Penha?</summary
            >
            <div class="faq-answer">
                <p>
                    Os valores são informados diretamente pelo WhatsApp, pois
                    podem variar conforme a modalidade (presencial ou online) e
                    frequência. Entre em contato para saber mais sobre
                    investimento e formas de pagamento (PIX, transferência).
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary>Quanto tempo dura uma sessão de terapia?</summary>
            <div class="faq-answer">
                <p>
                    Cada sessão tem duração de aproximadamente 50 minutos. A
                    frequência semanal é o mais indicado para manter a
                    continuidade do processo terapêutico.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary>Atende estudantes da UFES?</summary>
            <div class="faq-answer">
                <p>
                    Sim, atendo estudantes universitários e a proximidade com a
                    UFES facilita o acesso. Questões como ansiedade acadêmica,
                    pressão por desempenho e transições de vida são temas
                    frequentes nos atendimentos.
                </p>
            </div>
        </details>
    </div>
</Section>

<Section variant="gradient">
    <div class="cta-content">
        <h2>Pronto para agendar sua consulta?</h2>
        <p>Entre em contato e vamos conversar sobre como posso ajudar</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Agendar Consulta
        </Button>
    </div>
</Section>

<style>
</style>
