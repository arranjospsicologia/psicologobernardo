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
                name: "Tem psicólogo para moradores de Vila Velha?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim. Atendo moradores de Vila Velha no meu consultório em Jardim da Penha (Vitória), a poucos minutos da Terceira Ponte. Também ofereço atendimento online.",
                },
            },
            {
                "@type": "Question",
                name: "Quanto tempo leva para ir de Vila Velha até o consultório?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "O trajeto de bairros como Praia da Costa, Itapuã ou Glória leva entre 15 e 25 minutos de carro, dependendo do trânsito na Terceira Ponte.",
                },
            },
            {
                "@type": "Question",
                name: "Onde posso estacionar para ir ao consultório vindo de Vila Velha?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "O Edifício Madison não possui estacionamento próprio, mas há bastante estacionamento nas ruas ao redor: Rua Darcy Grijó, Rua da Lama, Rua Arthur Czartoryski, R. Des. Vicente Caetano e Av. Alziro Zarur.",
                },
            },
            {
                "@type": "Question",
                name: "Vale a pena ir presencialmente ou é melhor terapia online morando em Vila Velha?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depende da sua preferência e rotina. Muitos pacientes de Vila Velha optam pelo presencial pela experiência diferenciada. Outros preferem online pela praticidade. Ambas as modalidades são eficazes.",
                },
            },
            {
                "@type": "Question",
                name: "Quais bairros de Vila Velha você atende?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Atendo moradores de todos os bairros de Vila Velha, incluindo Praia da Costa, Itapuã, Centro, Glória, Boa Vista, Coqueiral de Itaparica, entre outros.",
                },
            },
        ],
    };

    const vilaVelhaSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Bernardo Carielo Psicólogo",
        description:
            "Atendimento psicológico presencial e online com base na Abordagem Centrada na Pessoa. Acesso fácil para moradores de Vila Velha.",
        telephone: "+55-27-99833-1228",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Darcy Grijó, 50 - Sala 409",
            addressLocality: "Jardim da Penha",
            addressRegion: "ES",
            postalCode: "29060-500",
            addressCountry: "BR",
        },
        areaServed: { "@type": "City", name: "Vila Velha" },
    };
</script>

<SEO
    title="Psicólogo para Vila Velha – Atendimento Presencial e Online | Bernardo Carielo"
    description="Atendimento psicológico para moradores de Vila Velha. Consultório em Jardim da Penha, Vitória, a poucos minutos da Terceira Ponte. Também atendo online. Psicoterapia pela Abordagem Centrada na Pessoa."
    canonical="https://psicologobernardo.com.br/localizacao/psicologo-vila-velha/"
    jsonLd={vilaVelhaSchema}
    preloadImage="/images/consultorio/fachada-madison.webp"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Psicólogo para Vila Velha" },
    ]}
/>

<section class="location-hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1>Psicólogo para moradores de Vila Velha</h1>
                <p class="hero-description">
                    Atendimento psicológico presencial e online para moradores
                    de Vila Velha. Meu consultório fica em Jardim da Penha
                    (Vitória), a poucos minutos da Terceira Ponte. Trabalho com
                    a Abordagem Centrada na Pessoa, oferecendo um espaço de
                    escuta e acolhimento.
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
        <h2>Atendimento acessível para Vila Velha</h2>
    </div>
    <div class="location-content">
        <p>
            Se você mora em Vila Velha e está buscando atendimento psicológico,
            meu consultório em Jardim da Penha (Vitória) é uma opção de fácil
            acesso. Fico a poucos minutos da
            <strong>Terceira Ponte</strong>, próximo à UFES, com estacionamento
            no prédio.
        </p>
        <p>
            Atendo presencialmente pessoas de diversos bairros de Vila Velha,
            como Praia da Costa, Itapuã, Centro, Glória, Boa Vista e outros.
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
                Consultório em Jardim da Penha, a poucos minutos da Terceira
                Ponte. Um espaço acolhedor e reservado para o seu processo
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
        <h2>Bairros de Vila Velha atendidos</h2>
        <p style="color: var(--text-light); margin-top: 0.5rem;">
            Atendo presencialmente e online pessoas de todos os bairros de Vila
            Velha
        </p>
    </div>
    <div class="bairros-grid">
        <div class="bairro-card">
            <h3><MapPin size={20} /> Orla e Centro</h3>
            <ul>
                <li>• Praia da Costa</li>
                <li>• Itapuã</li>
                <li>• Centro de Vila Velha</li>
                <li>• Praia de Itaparica</li>
            </ul>
        </div>
        <div class="bairro-card">
            <h3><MapPin size={20} /> Região Central</h3>
            <ul>
                <li>• Glória</li>
                <li>• Boa Vista</li>
                <li>• Divino Espírito Santo</li>
                <li>• Coqueiral de Itaparica</li>
            </ul>
        </div>
        <div class="bairro-card">
            <h3><MapPin size={20} /> Outros bairros</h3>
            <ul>
                <li>• Jardim Guadalajara</li>
                <li>• Cobilândia</li>
                <li>• Santa Mônica</li>
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
        <h2>Perguntas frequentes – Psicólogo para Vila Velha</h2>
    </div>
    <div class="faq-container">
        <details class="faq-item">
            <summary>Tem psicólogo para moradores de Vila Velha?</summary>
            <div class="faq-answer">
                <p>
                    Sim. Atendo moradores de Vila Velha no meu consultório em
                    Jardim da Penha (Vitória), a poucos minutos da Terceira
                    Ponte. Também ofereço atendimento online.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary
                >Quanto tempo leva para ir de Vila Velha até o consultório?</summary
            >
            <div class="faq-answer">
                <p>
                    O trajeto de bairros como Praia da Costa, Itapuã ou Glória
                    leva entre 15 e 25 minutos de carro, dependendo do trânsito
                    na Terceira Ponte.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary
                >Onde posso estacionar para ir ao consultório vindo de Vila
                Velha?</summary
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
                >Vale a pena ir presencialmente ou é melhor terapia online
                morando em Vila Velha?</summary
            >
            <div class="faq-answer">
                <p>
                    Depende da sua preferência e rotina. Muitos pacientes de
                    Vila Velha optam pelo presencial pela experiência
                    diferenciada. Outros preferem online pela praticidade. Ambas
                    as modalidades são eficazes.
                </p>
            </div>
        </details>
        <details class="faq-item">
            <summary>Quais bairros de Vila Velha você atende?</summary>
            <div class="faq-answer">
                <p>
                    Atendo moradores de todos os bairros de Vila Velha,
                    incluindo Praia da Costa, Itapuã, Centro, Glória, Boa Vista,
                    Coqueiral de Itaparica, entre outros.
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
            href="https://wa.me/5527998331228?text=Olá,%20moro%20em%20Vila%20Velha%20e%20gostaria%20de%20agendar%20uma%20consulta."
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
