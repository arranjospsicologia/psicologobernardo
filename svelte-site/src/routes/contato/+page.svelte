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

<!-- Page Hero - Contato -->
<section class="contato-hero">
    <div class="container">
        <div class="contato-hero-content">
            <div class="contato-hero-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path>
                    <path d="M8 10h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M16 10h.01"></path>
                </svg>
            </div>
            <h1>Contato</h1>
            <p class="contato-hero-greeting">
                Oi! Que bom que você está considerando falar comigo.
            </p>
            <div class="contato-hero-message">
                <p>
                    Se fizer sentido, me manda uma mensagem — posso te responder
                    com calma, entender o que você está buscando e dizer como
                    posso ajudar
                    <span class="text-subtle"
                        >(ou encaminhar, quando for o melhor caminho)</span
                    >.
                </p>
            </div>
        </div>
    </div>
</section>

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
