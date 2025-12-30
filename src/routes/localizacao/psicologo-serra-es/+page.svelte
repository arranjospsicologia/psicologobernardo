<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, MapPin, Home, Monitor } from "lucide-svelte";

    // FAQPage Schema for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Tem psicólogo para moradores de Serra ES?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim. Atendo moradores de Serra no meu consultório em Jardim da Penha (Vitória), com fácil acesso pela Fernando Ferrari. Também ofereço atendimento online.",
                },
            },
            {
                "@type": "Question",
                name: "Quanto tempo leva para ir de Laranjeiras até o consultório?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "O trajeto de Laranjeiras ou Colina de Laranjeiras até o consultório leva entre 20 e 35 minutos de carro, dependendo do horário.",
                },
            },
            {
                "@type": "Question",
                name: "O psicólogo atende moradores de Jacaraípe e Manguinhos?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim. Atendo moradores de todas as regiões de Serra, incluindo o litoral (Jacaraípe, Manguinhos, Nova Almeida) e regiões centrais (Laranjeiras, Civit, Serra Sede).",
                },
            },
            {
                "@type": "Question",
                name: "Para quem mora em Serra, vale mais a pena terapia online ou presencial?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depende da sua rotina. Muitos pacientes de Serra optam pela terapia online pela praticidade. Outros preferem reservar um momento presencial fora da rotina. Ambas as modalidades funcionam bem.",
                },
            },
            {
                "@type": "Question",
                name: "O consultório tem fácil acesso para quem vem da Fernando Ferrari?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim. O consultório fica em Jardim da Penha, próximo à Av. Fernando Ferrari, com fácil acesso para quem vem de Serra. Há bastante estacionamento nas ruas ao redor do prédio.",
                },
            },
        ],
    };

    const serraSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Bernardo Carielo Psicólogo",
        description:
            "Atendimento psicológico presencial e online com base na Abordagem Centrada na Pessoa. Acesso fácil para moradores de Serra ES.",
        telephone: "+55-27-99833-1228",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Darcy Grijó, 50 - Sala 409",
            addressLocality: "Jardim da Penha",
            addressRegion: "ES",
            postalCode: "29060-500",
            addressCountry: "BR",
        },
        areaServed: { "@type": "City", name: "Serra" },
    };
</script>

<SEO
    title="Psicólogo para Serra ES – Atendimento Presencial e Online | Bernardo Carielo"
    description="Atendimento psicológico para moradores de Serra ES. Consultório em Jardim da Penha, Vitória, com fácil acesso. Também atendo online. Psicoterapia pela Abordagem Centrada na Pessoa."
    canonical="https://psicologobernardo.com.br/localizacao/psicologo-serra-es/"
    jsonLd={serraSchema}
    preloadImage="/images/consultorio/fachada-madison.webp"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[{ name: "Início", href: "/" }, { name: "Psicólogo para Serra ES" }]}
/>

<section class="location-hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1>Psicólogo para moradores de Serra ES</h1>
                <p class="hero-description">
                    Atendimento psicológico presencial e online para moradores
                    de Serra. Meu consultório fica em Jardim da Penha (Vitória),
                    próximo à Fernando Ferrari, com fácil acesso. Trabalho com a
                    Abordagem Centrada na Pessoa, oferecendo um espaço de escuta
                    e acolhimento.
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
        <h2>Atendimento acessível para Serra</h2>
    </div>
    <div class="location-content">
        <p>
            Se você mora em Serra e está buscando atendimento psicológico, meu
            consultório em Jardim da Penha (Vitória) é uma opção de fácil
            acesso. Fico próximo à <strong>Fernando Ferrari</strong>, com acesso
            rápido pela Reta da Penha, com bastante estacionamento nas ruas ao
            redor.
        </p>
        <p>
            Atendo presencialmente pessoas de diversos bairros de Serra, como
            Laranjeiras, Colina de Laranjeiras, Jacaraípe, Manguinhos e outros.
            Também ofereço
            <strong>atendimento online</strong> para quem prefere o conforto de casa
            ou tem dificuldade de deslocamento.
        </p>
    </div>
</Section>

<Section variant="white">
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
                Consultório em Jardim da Penha, com acesso rápido pela Fernando
                Ferrari. Um espaço acolhedor e reservado para o seu processo
                terapêutico.
            </p>
        </div>
        <div class="modality-card">
            <div class="modality-icon">
                <Monitor size={28} />
            </div>
            <h3>Online</h3>
            <p>
                Atendimento por videochamada com a mesma qualidade e presença
                terapêutica. Ideal para quem prefere não se deslocar ou tem uma
                rotina corrida.
            </p>
        </div>
    </div>
</Section>

<Section variant="beige">
    <div class="section-header">
        <h2>Bairros de Serra atendidos</h2>
        <p style="color: var(--text-light); margin-top: 0.5rem;">
            Atendo presencialmente e online pessoas de todos os bairros de Serra
        </p>
    </div>
    <div class="bairros-grid">
        <div class="bairro-card">
            <h3><MapPin size={20} /> Região de Laranjeiras</h3>
            <ul>
                <li>• Laranjeiras</li>
                <li>• Colina de Laranjeiras</li>
                <li>• Porto Canoa</li>
                <li>• Valparaíso</li>
            </ul>
        </div>
        <div class="bairro-card">
            <h3><MapPin size={20} /> Litoral</h3>
            <ul>
                <li>• Jacaraípe</li>
                <li>• Manguinhos</li>
                <li>• Praia de Carapebus</li>
                <li>• Nova Almeida</li>
            </ul>
        </div>
        <div class="bairro-card">
            <h3><MapPin size={20} /> Outros bairros</h3>
            <ul>
                <li>• Serra Sede</li>
                <li>• Carapina</li>
                <li>• Civit</li>
                <li>• Todos os bairros</li>
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
    </div>
</Section>

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
</svelte:head>

<Section variant="white">
    <div class="section-header">
        <h2>Perguntas frequentes – Psicólogo para Serra ES</h2>
    </div>
    <div class="faq-container">
        <details class="faq-item">
            <summary>Tem psicólogo para moradores de Serra ES?</summary>
            <div class="faq-answer">
                <p>
                    Sim. Atendo moradores de Serra no meu consultório em Jardim
                    da Penha (Vitória), com fácil acesso pela Fernando Ferrari.
                    Também ofereço atendimento online.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary
                >Quanto tempo leva para ir de Laranjeiras até o consultório?</summary
            >
            <div class="faq-answer">
                <p>
                    O trajeto de Laranjeiras ou Colina de Laranjeiras até o
                    consultório leva entre 20 e 35 minutos de carro, dependendo
                    do horário.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary
                >O psicólogo atende moradores de Jacaraípe e Manguinhos?</summary
            >
            <div class="faq-answer">
                <p>
                    Sim. Atendo moradores de todas as regiões de Serra,
                    incluindo o litoral (Jacaraípe, Manguinhos, Nova Almeida) e
                    regiões centrais (Laranjeiras, Civit, Serra Sede).
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary
                >Para quem mora em Serra, vale mais a pena terapia online ou
                presencial?</summary
            >
            <div class="faq-answer">
                <p>
                    Depende da sua rotina. Muitos pacientes de Serra optam pela
                    terapia online pela praticidade. Outros preferem reservar um
                    momento presencial fora da rotina. Ambas as modalidades
                    funcionam bem.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary
                >O consultório tem fácil acesso para quem vem da Fernando
                Ferrari?</summary
            >
            <div class="faq-answer">
                <p>
                    Sim. O consultório fica em Jardim da Penha, próximo à Av.
                    Fernando Ferrari, com fácil acesso para quem vem de Serra.
                    Há bastante estacionamento nas ruas ao redor: Rua Darcy
                    Grijó, Rua da Lama e Av. Alziro Zarur.
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
            href="https://wa.me/5527998331228?text=Olá,%20moro%20em%20Serra%20e%20gostaria%20de%20agendar%20uma%20consulta."
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
