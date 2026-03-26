<script lang="ts">
    import "$lib/styles/location.css";
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import {
        Phone,
        MapPin,
        ExternalLink,
        Home,
        Monitor,
        ChevronDown,
    } from "lucide-svelte";
    import { locations } from "$lib/data/locations";
    import { buildLocationJsonLd } from "$lib/utils/locationSchema";
    import { buildWhatsAppUrl } from "$lib/data/siteProfile";

    const hubFaqItems = [
        {
            question: "Onde fica o consultório?",
            answer: "O consultório fica em Jardim da Penha, Vitória (ES), em uma região de fácil acesso para quem vem de diferentes bairros e cidades próximas.",
        },
        {
            question: "Atende moradores de fora de Vitória?",
            answer: "Sim. Muitas pessoas vêm de Vila Velha e Serra para atendimento presencial. Se deslocamento for um obstáculo, a modalidade online também é possível.",
        },
        {
            question: "É possível fazer terapia online?",
            answer: "Sim. O atendimento pode ser por videochamada, e você pode escolher online desde o início ou alternar com presencial.",
        },
        {
            question: "Como agendar?",
            answer: "Você pode enviar mensagem pelo WhatsApp. Eu respondo geralmente no mesmo dia útil e a gente combina um horário para uma primeira conversa.",
        },
    ];

    const jsonLd = buildLocationJsonLd({
        canonical: "https://psicologobernardo.com.br/localizacao/",
        pageName: "Localização do consultório e regiões atendidas",
        pageDescription:
            "Endereço do consultório em Jardim da Penha, Vitória (ES), e regiões atendidas presencialmente e online.",
        faqItems: hubFaqItems,
        mode: "hub",
    });

    const locationCards = [
        locations["vitoria-es"],
        locations["jardim-da-penha"],
        locations["praia-do-canto"],
        locations["mata-da-praia"],
        locations["vila-velha"],
        locations["serra-es"],
    ];
</script>

<SEO
    title="Localização do Consultório e Regiões Atendidas | Bernardo Carielo"
    description="Endereço do consultório em Jardim da Penha, Vitória (ES). Atendimento presencial para toda a Grande Vitória e online para todo o Brasil. Psicólogo Bernardo Carielo."
    canonical="https://psicologobernardo.com.br/localizacao/"
    {jsonLd}
    preloadImage="/images/hero/hero-600x800.webp"
/>

<Breadcrumb items={[{ name: "Início", href: "/" }, { name: "Localização" }]} />

<!-- Hero -->
<section class="location-hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1>Localização do consultório e regiões atendidas</h1>
                <p class="hero-description">
                    O consultório fica em Jardim da Penha, Vitória (ES), em
                    frente à UFES. Atendo presencialmente pessoas de toda a
                    Grande Vitória e online para todo o Brasil.
                </p>
                <div class="hero-buttons">
                    <Button
                        href={buildWhatsAppUrl("Olá, gostaria de agendar uma consulta.")}
                        variant="primary"
                    >
                        <Phone size={20} /> Agendar consulta
                    </Button>
                    <Button href="/contato" variant="outline"
                        >Ver contato</Button
                    >
                </div>
            </div>
            <div class="hero-image">
                <img
                    src="/images/hero/hero-600x800.webp"
                    srcset="/images/hero/hero-600x800-300w.webp 300w, /images/hero/hero-600x800-450w.webp 450w, /images/hero/hero-600x800.webp 600w"
                    sizes="(max-width: 480px) 300px, (max-width: 768px) 450px, 450px"
                    alt="Bernardo Carielo - Psicólogo em Jardim da Penha, Vitória (ES)"
                    width="450"
                    height="600"
                    loading="eager"
                    fetchpriority="high"
                />
            </div>
        </div>
    </div>
</section>

<!-- Endereço e mapa -->
<Section variant="white">
    <div class="section-header"><h2>Onde fica o consultório</h2></div>
    <div class="location-content">
        <p>
            O consultório está em <strong>Jardim da Penha</strong>, em frente à
            UFES, numa região central de Vitória com fácil acesso pela Av.
            Fernando Ferrari (Reta da Penha).
        </p>
        <div class="address-card">
            <h3>
                <MapPin
                    size={20}
                    style="display: inline-block; vertical-align: middle;"
                /> Endereço
            </h3>
            <p>
                <strong
                    >Rua Darcy Grijó, 50 - Sala 409, Ed. Madison Office Tower</strong
                ><br />Jardim da Penha, Vitória - ES, CEP: 29060-500
            </p>
        </div>
        <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1871.2565968762556!2d-40.29407481177918!3d-20.279014427004878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8171b61b8e13b%3A0x5bab77942d3119e5!2sPsic%C3%B3logo%20-%20Bernardo%20Carielo%20Macedo%20de%20Oliveira%20Pinto!5e0!3m2!1spt-BR!2sbr!4v1763333002406!5m2!1spt-BR!2sbr"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Localização do consultório - Jardim da Penha, Vitória"
            ></iframe>
        </div>
        <div style="text-align: center; margin-top: 1rem;">
            <a
                href="https://maps.google.com/?q=Rua+Darcy+Grijó,+50,+Jardim+da+Penha,+Vitória,+ES"
                target="_blank"
                rel="noopener"
                class="map-link"
                ><ExternalLink size={20} /> Abrir no Google Maps</a
            >
        </div>
    </div>
</Section>

<!-- Grid de cards das regiões -->
<Section variant="beige">
    <div class="section-header">
        <h2>Regiões atendidas</h2>
        <p style="color: var(--text-light); margin-top: 0.5rem;">
            Saiba mais sobre atendimento presencial e online na sua região
        </p>
    </div>
    <div class="links-grid">
        {#each locationCards as loc}
            <a href={`/localizacao/${loc.slug}/`} class="link-card">
                <h3>{loc.name}</h3>
                <p>{loc.cardDescription}</p>
            </a>
        {/each}
    </div>
</Section>

<!-- Modalidades -->
<Section variant="white">
    <div class="section-header"><h2>Modalidades de atendimento</h2></div>
    <div class="modalities-grid">
        <div class="modality-card">
            <div class="modality-icon"><Home size={28} /></div>
            <h3>Presencial</h3>
            <p>
                Consultório em Jardim da Penha, Vitória (ES). Um espaço
                reservado e acolhedor, com acesso para moradores de toda a
                Grande Vitória.
            </p>
        </div>
        <div class="modality-card">
            <div class="modality-icon"><Monitor size={28} /></div>
            <h3>Online — todo o Brasil</h3>
            <p>
                Atendimento por videochamada com a mesma presença terapêutica.
                Saiba mais sobre <a href="/servicos/terapia-online/"
                    >terapia online</a
                >.
            </p>
        </div>
    </div>
</Section>

<!-- FAQ geral -->
<Section variant="beige" id="faq">
    <div class="section-header">
        <h2>Perguntas frequentes sobre localização</h2>
    </div>
    <div class="loc-faq-container">
        {#each hubFaqItems as item}
            <details class="loc-faq-item">
                <summary
                    ><span>{item.question}</span><ChevronDown
                        size={20}
                        class="loc-faq-chevron"
                    /></summary
                >
                <div class="loc-faq-answer"><p>{item.answer}</p></div>
            </details>
        {/each}
    </div>
</Section>

<!-- CTA final -->
<Section variant="gradient">
    <div class="cta-content">
        <h2>Quando fizer sentido, me chame no WhatsApp</h2>
        <p>Sem pressa. O primeiro passo é o que você puder dar.</p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma consulta.")}
            variant="secondary"
            size="lg"
        >
            <Phone size={20} /> Agendar Consulta
        </Button>
        <p class="response-time">Respondo geralmente no mesmo dia útil</p>
    </div>
</Section>
