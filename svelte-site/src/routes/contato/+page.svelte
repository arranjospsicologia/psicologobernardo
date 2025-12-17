<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import {
        Phone,
        Mail,
        MapPin,
        Clock,
        Instagram,
        Facebook,
        Youtube,
    } from "lucide-svelte";

    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contato - Psicólogo Bernardo Carielo",
        description:
            "Entre em contato para agendar sua consulta. Atendimento presencial e online.",
        mainEntity: {
            "@type": "LocalBusiness",
            name: "Bernardo Carielo Psicólogo",
            telephone: "+55 27 99833-1228",
            email: "contato@psicologobernardo.com.br",
            address: {
                "@type": "PostalAddress",
                streetAddress:
                    "Rua Darcy Grijó, 50, Sala 409, Ed. Madison Office Tower",
                addressLocality: "Vitória",
                addressRegion: "ES",
                postalCode: "29060-500",
                addressCountry: "BR",
            },
            hasMap: "https://www.google.com/maps/place/Bernardo+Carielo+Psic%C3%B3logo/@-20.2798925,-40.3009252,1019m/data=!3m2!1e3!4b1!4m6!3m5!1s0xb8171b61b8e13b:0x5bab77942d3119e5!8m2!3d-20.2798925!4d-40.3009252!16s%2Fg%2F11hdqw304k?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
        },
    };
</script>

<SEO
    title="Contato – Psicólogo Bernardo Carielo | Vitória ES e Online"
    description="Entre em contato com Bernardo Carielo, psicólogo em Vitória ES. Atendimento presencial em Jardim da Penha e online para todo o Brasil. WhatsApp (27) 99833-1228."
    canonical="https://psicologobernardo.com.br/contato/"
    jsonLd={contactSchema}
/>

<!-- Breadcrumb -->
<Breadcrumb items={[{ name: "Início", href: "/" }, { name: "Contato" }]} />

<!-- Page Hero -->
<section class="page-hero">
    <div class="container">
        <h1>Contato</h1>
        <p class="hero-subtitle">
            Oi! Que bom que você está considerando falar comigo.
        </p>
    </div>
</section>

<!-- Mensagem Acolhedora -->
<Section variant="white">
    <div class="welcome-message">
        <p>
            Se fizer sentido, me manda uma mensagem — posso te responder com
            calma, entender o que você está buscando e dizer como posso ajudar
            (ou encaminhar, quando for o melhor caminho).
        </p>
    </div>
</Section>

<!-- Formas de Contato -->
<Section variant="beige" id="formas-contato">
    <div class="section-header">
        <h2>Como entrar em contato</h2>
    </div>

    <div class="contact-grid">
        <!-- WhatsApp -->
        <div class="contact-card">
            <h3>WhatsApp (preferencial)</h3>
            <p class="contact-desc">É mais organizado e preserva o sigilo</p>
            <Button
                href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
                variant="primary"
            >
                <Phone size={20} />
                (27) 99833-1228
            </Button>
        </div>

        <!-- Email -->
        <div class="contact-card">
            <h3>Email</h3>
            <p class="contact-desc">Para contato institucional</p>
            <a
                href="mailto:contato@arranjospsicologia.com.br"
                class="email-link"
            >
                <Mail size={20} />
                contato@arranjospsicologia.com.br
            </a>
        </div>

        <!-- Redes Sociais -->
        <div class="contact-card">
            <h3>Redes Sociais</h3>
            <p class="contact-desc">Acompanhe meu trabalho</p>
            <div class="social-links">
                <a
                    href="https://instagram.com/bcarielo"
                    target="_blank"
                    rel="noopener"
                    aria-label="Instagram"
                >
                    <Instagram size={24} />
                </a>
                <a
                    href="https://facebook.com/bcarielo"
                    target="_blank"
                    rel="noopener"
                    aria-label="Facebook"
                >
                    <Facebook size={24} />
                </a>
                <a
                    href="https://youtube.com/arranjospsicologia"
                    target="_blank"
                    rel="noopener"
                    aria-label="YouTube"
                >
                    <Youtube size={24} />
                </a>
            </div>
        </div>
    </div>

    <div class="warning-box">
        <p>
            <strong>Importante:</strong> Por sigilo e organização, não retorno ligações
            de números desconhecidos — mas te respondo por mensagem com todo cuidado.
        </p>
    </div>
</Section>

<!-- Onde Atendo -->
<Section variant="white" id="onde-atendo">
    <div class="section-header">
        <h2>Onde atendo</h2>
    </div>

    <div class="locations-grid">
        <div class="location-card">
            <MapPin size={32} />
            <h3>Atendimentos Presenciais</h3>
            <p><strong>Jardim da Penha — Vitória (ES)</strong></p>
            <p>
                <strong>Endereço:</strong> Rua Darcy Grijó, 50, Sala 409, Ed. Madison
                Office Tower - Jardim da Penha, Vitória - ES
            </p>
        </div>

        <div class="location-card">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
            >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
            <h3>Atendimentos Online</h3>
            <p><strong>Para todo o Brasil</strong></p>
            <p class="address">E brasileiros vivendo no exterior</p>
        </div>
    </div>

    <div class="schedule-box">
        <Clock size={24} />
        <div>
            <h3>Horário de Atendimento</h3>
            <p><strong>Segunda a sexta</strong><br />13:30 às 21:00h</p>
        </div>
    </div>
</Section>

<!-- Mapa -->
<Section variant="beige" id="mapa">
    <div class="section-header">
        <h2>Como chegar</h2>
    </div>

    <div class="map-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1871.2565968762556!2d-40.29407481177918!3d-20.279014427004878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8171b61b8e13b%3A0x5bab77942d3119e5!2sPsic%C3%B3logo%20-%20Bernardo%20Carielo%20Macedo%20de%20Oliveira%20Pinto!5e0!3m2!1spt-BR!2sbr!4v1763333002406!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localização do consultório - Arranjos Psicologia"
        ></iframe>
    </div>
    <p class="map-note">
        O consultório fica em frente à UFES, no coração de Jardim da Penha.
        <a
            href="https://www.google.com/maps/place/Arranjos+Psicologia/"
            target="_blank"
            rel="noopener"
        >
            Ver no Google Maps
        </a>
    </p>
</Section>

<!-- CTA Final -->
<Section variant="white">
    <div class="final-cta">
        <h2>Ainda com dúvidas?</h2>
        <p>
            Se você chegou até aqui com alguma dúvida, pode escrever mesmo assim
            — não precisa ter tudo claro para dar o primeiro passo. Estou à
            disposição para fazer o meu melhor no que você estiver buscando.
        </p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
            variant="primary"
            size="lg"
        >
            <Phone size={20} />
            Vamos conversar?
        </Button>
    </div>
</Section>

<style>
    /* Page Hero */
    .page-hero {
        padding: 4rem 0;
        background: var(--secondary-color);
        text-align: center;
    }

    .page-hero h1 {
        margin-bottom: 1rem;
    }

    .hero-subtitle {
        font-size: var(--text-lg);
        color: var(--text-light);
    }

    /* Welcome Message */
    .welcome-message {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
    }

    .welcome-message p {
        font-size: var(--text-lg);
        line-height: 1.8;
    }

    /* Section Header */
    .section-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    /* Contact Grid */
    .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 1100px;
        margin: 0 auto 3rem;
    }

    .contact-card {
        background: var(--white);
        padding: 2.5rem 2rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        text-align: center;
    }

    .contact-card h3 {
        margin-bottom: 0.75rem;
        font-size: var(--text-xl);
    }

    .contact-desc {
        color: var(--text-light);
        margin-bottom: 1.5rem;
    }

    .email-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--primary-color);
        font-weight: 600;
        word-break: break-word;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
    }

    .social-links a {
        color: var(--text-light);
        transition: color 0.3s;
    }

    .social-links a:hover {
        color: var(--primary-color);
    }

    /* Warning Box */
    .warning-box {
        background: #fff3cd;
        border-left: 4px solid #ffc107;
        padding: 1.5rem;
        border-radius: var(--radius-sm);
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
    }

    .warning-box p {
        margin: 0;
        color: #856404;
        font-size: var(--text-sm);
    }

    /* Locations Grid */
    .locations-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto 3rem;
    }

    .location-card {
        text-align: center;
    }

    .location-card :global(svg) {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .location-card h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .location-card .address {
        color: var(--text-light);
        margin-top: 0.5rem;
    }

    /* Schedule Box */
    .schedule-box {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background: var(--secondary-color);
        padding: 2rem;
        border-radius: var(--radius-md);
        max-width: 500px;
        margin: 0 auto;
        text-align: center;
    }

    .schedule-box :global(svg) {
        color: var(--primary-color);
        flex-shrink: 0;
    }

    .schedule-box h3 {
        margin-bottom: 0.5rem;
        font-size: var(--text-lg);
    }

    .schedule-box p {
        margin: 0;
    }

    /* Map */
    .map-container {
        max-width: 1000px;
        margin: 0 auto;
        border-radius: var(--radius-md);
        overflow: hidden;
        box-shadow: var(--shadow-md);
    }

    .map-note {
        text-align: center;
        margin-top: 1.5rem;
        color: var(--text-light);
    }

    .map-note a {
        color: var(--primary-color);
        font-weight: 500;
    }

    /* Final CTA */
    .final-cta {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
    }

    .final-cta h2 {
        margin-bottom: 1.5rem;
    }

    .final-cta p {
        font-size: var(--text-lg);
        line-height: 1.8;
        margin-bottom: 2rem;
    }

    /* Mobile */
    @media (max-width: 768px) {
        .contact-grid {
            grid-template-columns: 1fr;
        }

        .locations-grid {
            grid-template-columns: 1fr;
        }

        .schedule-box {
            flex-direction: column;
            text-align: center;
        }
    }
</style>
