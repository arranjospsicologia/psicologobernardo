<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, Card } from "$lib";
    import {
        Phone,
        MapPin,
        Home,
        Monitor,
        ExternalLink,
        Route,
        Car,
        Bus,
    } from "lucide-svelte";

    // FAQPage Schema for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Onde fica o consultório do psicólogo em Vitória ES?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "O consultório está localizado em Jardim da Penha, em frente à UFES, no Edifício Madison Office Tower, Sala 409. Endereço: Rua Darcy Grijó, 50 - Jardim da Penha, Vitória - ES.",
                },
            },
            {
                "@type": "Question",
                name: "O psicólogo atende plano de saúde em Vitória?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Os atendimentos são particulares. Não atendo diretamente por convênios, mas forneço recibo para reembolso caso seu plano ofereça essa opção.",
                },
            },
            {
                "@type": "Question",
                name: "Quais bairros de Vitória o psicólogo atende?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Atendo presencialmente pacientes de todos os bairros de Vitória, incluindo Jardim da Penha, Praia do Canto, Mata da Praia, Jardim Camburi, Goiabeiras, Bento Ferreira, Centro, entre outros.",
                },
            },
            {
                "@type": "Question",
                name: "O psicólogo em Vitória também atende online?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim. Além do atendimento presencial em Jardim da Penha, ofereço terapia online por videochamada para pessoas de Vitória e de qualquer lugar do Brasil.",
                },
            },
            {
                "@type": "Question",
                name: "Como funciona a primeira consulta com o psicólogo?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A primeira consulta é um momento de acolhimento e escuta sem julgamentos. Conversamos sobre suas demandas, expectativas e como a terapia pode te ajudar. Não há compromisso de continuidade.",
                },
            },
            {
                "@type": "Question",
                name: "Qual abordagem o psicólogo em Vitória utiliza?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Trabalho com a Abordagem Centrada na Pessoa (ACP), desenvolvida por Carl Rogers. É uma abordagem humanista que valoriza a empatia, a autenticidade e o respeito incondicional.",
                },
            },
        ],
    };

    const vitoriaSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://psicologobernardo.com.br/localizacao/psicologo-vitoria-es/#organization",
        name: "Bernardo Carielo Psicólogo - Vitória ES",
        description:
            "Psicólogo em Vitória ES specializing in Abordagem Centrada na Pessoa. Atendimento clínico presencial em Jardim da Penha e online para toda a Grande Vitória.",
        url: "https://psicologobernardo.com.br/localizacao/psicologo-vitoria-es/",
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
        areaServed: [
            { "@type": "City", name: "Vitória" },
            { "@type": "City", name: "Vila Velha" },
            { "@type": "City", name: "Serra" },
            { "@type": "City", name: "Cariacica" },
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços de Psicologia em Vitória",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Psicoterapia Individual",
                        description: "Atendimento presencial e online.",
                    },
                },
            ],
        },
    };
</script>

<SEO
    title="Psicólogo em Vitória ES – Atendimento Presencial e Online | Bernardo Carielo"
    description="Atendimento psicológico em Vitória ES. Psicoterapia pela Abordagem Centrada na Pessoa em consultório localizado em Jardim da Penha. Atendimento presencial e online para toda a Grande Vitória."
    canonical="https://psicologobernardo.com.br/localizacao/psicologo-vitoria-es/"
    jsonLd={vitoriaSchema}
    preloadImage="/images/consultorio/fachada-madison.webp"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[{ name: "Início", href: "/" }, { name: "Psicólogo em Vitória ES" }]}
/>

<section class="location-hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1>Psicólogo em Vitória ES - Bernardo Carielo</h1>
                <p class="hero-description">
                    Atendimento psicológico presencial e online em Vitória ES.
                    Psicoterapia pela Abordagem Centrada na Pessoa para
                    moradores de toda a capital e região metropolitana.
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
        <h2>Atendimento em todos os bairros de Vitória</h2>
        <p style="color: var(--text-light); margin-top: 0.5rem;">
            Consultório em localização central, de fácil acesso para moradores
            de toda Vitória
        </p>
    </div>
    <div class="bairros-grid">
        <div class="bairro-card">
            <h3><MapPin size={20} /> Zona Norte</h3>
            <ul>
                <li>
                    • <a href="/localizacao/psicologo-jardim-da-penha/"
                        >Jardim da Penha</a
                    >
                </li>
                <li>
                    • <a href="/localizacao/psicologo-praia-do-canto/"
                        >Praia do Canto</a
                    >
                </li>
                <li>• Mata da Praia</li>
                <li>• Santa Lúcia</li>
                <li>• Bento Ferreira</li>
                <li>• Jucutuquara</li>
            </ul>
        </div>
        <div class="bairro-card">
            <h3><MapPin size={20} /> Zona Leste</h3>
            <ul>
                <li>• Jardim Camburi</li>
                <li>• República</li>
                <li>• Jardim da Penha</li>
                <li>• Enseada do Suá</li>
                <li>• Ilha do Boi</li>
                <li>• Ilha do Frade</li>
            </ul>
        </div>
        <div class="bairro-card">
            <h3><MapPin size={20} /> Centro e outras regiões</h3>
            <ul>
                <li>• Centro</li>
                <li>• Praia do Canto</li>
                <li>• Santa Helena</li>
                <li>• Goiabeiras</li>
                <li>• Maruípe</li>
                <li>• Todos os bairros</li>
            </ul>
        </div>
    </div>
</Section>

<Section variant="white">
    <div class="section-header">
        <h2>Localização estratégica e fácil acesso</h2>
    </div>
    <div class="location-content">
        <p>
            O consultório está localizado em <strong>Jardim da Penha</strong>,
            em frente à UFES, uma das áreas mais bem conectadas de Vitória. O
            acesso é simples tanto para quem vem de carro quanto para quem
            utiliza transporte público.
        </p>

        <div
            class="cards-grid"
            style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2rem;"
        >
            <Card icon={Route} title="Principais Vias" variant="default">
                <p>
                    Próximo à <strong>Reta da Penha</strong> e Av. Fernando Ferrari,
                    facilitando a chegada de qualquer ponto da cidade.
                </p>
            </Card>
            <Card icon={Car} title="Ponte da Passagem" variant="default">
                <p>
                    Acesso rápido para quem vem da Zona Norte ou de outros
                    municípios pela Ponte da Passagem.
                </p>
            </Card>
            <Card icon={Bus} title="Transporte Público" variant="default">
                <p>
                    Diversos pontos de ônibus nas proximidades (UFES e Rua da
                    Lama) conectam o consultório a todos os terminais.
                </p>
            </Card>
        </div>

        <p style="margin-top: 2rem;">
            Além de atender pessoas de toda Vitória, essa localização permite
            receber pacientes de
            <a
                href="/localizacao/psicologo-vila-velha/"
                style="color: var(--primary-color)">Vila Velha</a
            >,
            <a
                href="/localizacao/psicologo-serra-es/"
                style="color: var(--primary-color)">Serra</a
            >, Cariacica e outras cidades da região metropolitana com agilidade.
        </p>
        <div class="approach-card" style="margin-top: 2rem;">
            <h3>Abordagem Centrada na Pessoa</h3>
            <p>
                Trabalho com a Abordagem Centrada na Pessoa (ACP), desenvolvida
                por Carl Rogers. É uma abordagem humanista que valoriza a
                autenticidade, a empatia e o respeito incondicional. Você é o
                protagonista do seu processo, e meu papel é oferecer um espaço
                seguro para que você se compreenda melhor e encontre seus
                próprios caminhos.
            </p>
        </div>
    </div>
</Section>

<Section variant="beige">
    <div class="section-header">
        <h2>Atendimento presencial e online</h2>
        <p style="color: var(--text-light); margin-top: 0.5rem;">
            Você escolhe a modalidade que melhor se adequa ao seu momento
        </p>
    </div>
    <div class="modalities-grid">
        <div class="modality-card">
            <div class="modality-icon">
                <Home size={28} />
            </div>
            <h3>Presencial em Vitória</h3>
            <p>
                Consultório em Jardim da Penha, um espaço acolhedor e reservado.
                Localização central em Vitória, de fácil acesso para moradores
                de todos os bairros da capital e região metropolitana.
            </p>
        </div>
        <div class="modality-card">
            <div class="modality-icon">
                <Monitor size={28} />
            </div>
            <h3>Online</h3>
            <p>
                Atendimento por videochamada com a mesma qualidade e presença
                terapêutica. Ideal para quem mora longe, viaja com frequência ou
                prefere o conforto de casa.
            </p>
        </div>
    </div>
</Section>

<Section variant="white">
    <div class="section-header">
        <h2>Outras regiões atendidas</h2>
        <p style="color: var(--text-light); margin-top: 0.5rem;">
            Conheça mais sobre nosso atendimento em outras localidades
        </p>
    </div>
    <div class="links-grid">
        <a href="/localizacao/psicologo-jardim-da-penha/" class="link-card">
            <h3>Jardim da Penha</h3>
            <p>Consultório em frente à UFES</p>
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
        <h2>Perguntas frequentes – Psicólogo em Vitória ES</h2>
    </div>
    <div class="faq-container">
        <details class="faq-item">
            <summary
                >Onde fica o consultório do psicólogo em Vitória ES?</summary
            >
            <div class="faq-answer">
                <p>
                    O consultório está localizado em Jardim da Penha, em frente
                    à UFES, no Edifício Madison Office Tower, Sala 409.
                    Endereço: Rua Darcy Grijó, 50 - Jardim da Penha, Vitória -
                    ES.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary>O psicólogo atende plano de saúde em Vitória?</summary>
            <div class="faq-answer">
                <p>
                    Os atendimentos são particulares. Não atendo diretamente por
                    convênios, mas forneço recibo para reembolso caso seu plano
                    ofereça essa opção.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary>Quais bairros de Vitória o psicólogo atende?</summary>
            <div class="faq-answer">
                <p>
                    Atendo presencialmente pacientes de todos os bairros de
                    Vitória, incluindo Jardim da Penha, Praia do Canto, Mata da
                    Praia, Jardim Camburi, Goiabeiras, Bento Ferreira, Centro,
                    entre outros.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary>O psicólogo em Vitória também atende online?</summary>
            <div class="faq-answer">
                <p>
                    Sim. Além do atendimento presencial em Jardim da Penha,
                    ofereço terapia online por videochamada para pessoas de
                    Vitória e de qualquer lugar do Brasil.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary>Como funciona a primeira consulta com o psicólogo?</summary
            >
            <div class="faq-answer">
                <p>
                    A primeira consulta é um momento de acolhimento e escuta sem
                    julgamentos. Conversamos sobre suas demandas, expectativas e
                    como a terapia pode te ajudar. Não há compromisso de
                    continuidade.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary>Qual abordagem o psicólogo em Vitória utiliza?</summary>
            <div class="faq-answer">
                <p>
                    Trabalho com a Abordagem Centrada na Pessoa (ACP),
                    desenvolvida por Carl Rogers. É uma abordagem humanista que
                    valoriza a empatia, a autenticidade e o respeito
                    incondicional.
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
