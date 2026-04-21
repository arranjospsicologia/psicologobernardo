<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, TrustPanel } from "$lib";
    import {
        CalendarDays,
        Clock,
        Mail,
        MapPin,
        MessageCircleMore,
        Phone,
        ShieldCheck,
    } from "lucide-svelte";
    import {
        buildWhatsAppUrl,
        getFullStreetAddress,
        schemaIds,
        siteProfile,
    } from "$lib/data/siteProfile";

    const contactSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ContactPage",
                "@id": "https://psicologobernardo.com.br/contato/#webpage",
                url: "https://psicologobernardo.com.br/contato/",
                name: "Contato - Bernardo Carielo Psicólogo",
                description:
                    "Entre em contato para agendar sua consulta. Atendimento presencial em Vitória e online.",
                isPartOf: {
                    "@id": schemaIds.website,
                },
                mainEntity: {
                    "@id": schemaIds.organization,
                },
            },
        ],
    };

    const firstMessageSteps = [
        {
            title: "Escreva em poucas linhas",
            description:
                "Não precisa resumir sua história inteira. Basta dizer o que está te trazendo agora.",
        },
        {
            title: "Alinhamos formato e logística",
            description:
                "Conversamos sobre atendimento presencial em Vitória ou modalidade online, de acordo com sua rotina.",
        },
        {
            title: "Marcamos a primeira conversa",
            description:
                "Se fizer sentido, seguimos para agendamento e alinhamento inicial do processo.",
        },
    ];
</script>

<SEO
    title="Contato – Psicólogo Bernardo Carielo | Vitória ES e Online"
    description="Entre em contato com Bernardo Carielo, psicólogo em Vitória ES. Atendimento presencial em Jardim da Penha e online para todo o Brasil. WhatsApp {siteProfile.phoneDisplay}."
    canonical="https://psicologobernardo.com.br/contato/"
    jsonLd={contactSchema}
/>

<Breadcrumb items={[{ name: "Início", href: "/" }, { name: "Contato" }]} />

<!-- Page Hero - Contato -->
<section class="contact-hero gradient-hero">
    <div class="container contact-hero__content">
        <span class="contact-hero__eyebrow">Contato sem ruído</span>
        <h1>Contato</h1>
        <p>
            Oi! Que bom que você está considerando falar comigo.
            Se fizer sentido, me manda uma mensagem — posso te responder
            com calma, entender o que você está buscando e dizer como
            posso ajudar
            <span class="text-subtle"
                >(ou encaminhar, quando for o melhor caminho)</span
            >.
        </p>
        <div class="contact-hero__actions">
            <Button
                href={buildWhatsAppUrl("Olá, gostaria de conversar sobre terapia.")}
                variant="primary"
                size="lg"
            >
                <Phone size={20} />
                Falar no WhatsApp
            </Button>
            <Button href="/agendar/" variant="outline" size="lg">
                <CalendarDays size={20} />
                Ver agenda online
            </Button>
        </div>
    </div>
</section>

<!-- Trust Panel -->
<Section variant="white">
    <TrustPanel
        title="O que vale saber antes de escrever"
        intro="WhatsApp é o canal preferencial para o primeiro contato porque reduz atrito, preserva organização e ajuda a alinhar rapidamente localização, modalidade e disponibilidade."
        primaryHref={buildWhatsAppUrl("Olá, gostaria de conversar sobre terapia.")}
        primaryLabel="Começar pelo WhatsApp"
        secondaryHref="/psicologo-vitoria-es/"
        secondaryLabel="Ver localização"
    />
</Section>

<!-- Formas de Contato -->
<Section variant="beige" id="formas-contato">
    <div class="contact-list">
        <!-- WhatsApp -->
        <article class="contact-method">
            <div class="contact-method__icon">
                <MessageCircleMore size={28} />
            </div>
            <div class="contact-method__info">
                <h2>WhatsApp (preferencial)</h2>
                <p>
                    O caminho mais direto e organizado. Ideal para tirar dúvidas rápidas ou alinhar os primeiros passos.
                </p>
            </div>
            <div class="contact-method__action">
                <Button
                    href={buildWhatsAppUrl("Olá, gostaria de agendar uma consulta")}
                    variant="primary"
                >
                    <Phone size={18} />
                    {siteProfile.phoneDisplay}
                </Button>
            </div>
        </article>

        <!-- Agenda Online -->
        <article class="contact-method">
            <div class="contact-method__icon">
                <CalendarDays size={28} />
            </div>
            <div class="contact-method__info">
                <h2>Agenda online</h2>
                <p>
                    Se você já deseja ver horários disponíveis, pode acessar a agenda diretamente via Doctoralia.
                </p>
            </div>
            <div class="contact-method__action">
                <Button href="/agendar/" variant="outline">Abrir agenda</Button>
            </div>
        </article>

        <!-- Email -->
        <article class="contact-method">
            <div class="contact-method__icon">
                <Mail size={28} />
            </div>
            <div class="contact-method__info">
                <h2>Email institucional</h2>
                <p>Para contatos de parcerias, eventos ou quando preferir uma escrita mais formal e detalhada.</p>
            </div>
            <div class="contact-method__action">
                <a href={`mailto:${siteProfile.officialEmail}`} class="contact-link">
                    {siteProfile.officialEmail}
                </a>
            </div>
        </article>
    </div>

    <div class="contact-note">
        <ShieldCheck size={18} />
        <p>
            <strong>Importante:</strong> Por sigilo e organização, não retorno ligações
            de números desconhecidos — respondo a todas as mensagens com cuidado.
        </p>
    </div>
</Section>

<!-- Como Começamos -->
<Section variant="white">
    <div class="section-header">
        <h2>Como começamos</h2>
        <p>Uma jornada curta, sem formulários longos nem orientação genérica.</p>
    </div>
    <div class="process-grid">
        {#each firstMessageSteps as step, index}
            <article class="process-card">
                <span class="process-card__number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
            </article>
        {/each}
    </div>
</Section>

<!-- Informações práticas e Mapa -->
<Section variant="beige">
    <div class="practical-grid">
        <article class="practical-card">
            <div class="practical-card__header">
                <MapPin size={20} />
                <h2>Atendimento presencial</h2>
            </div>
            <p>
                <strong
                    >{siteProfile.address.neighborhood} - {siteProfile.address.city} ({siteProfile.address.state})</strong
                >
            </p>
            <p>
                {getFullStreetAddress()} - {siteProfile.address.neighborhood}, {siteProfile.address.city} - {siteProfile.address.state}, CEP {siteProfile.address.postalCode}
            </p>
        </article>

        <article class="practical-card">
            <div class="practical-card__header">
                <Clock size={20} />
                <h2>Horário de atendimento</h2>
            </div>
            <p><strong>{siteProfile.hours.displayDays}</strong></p>
            <p>{siteProfile.hours.displayTime}</p>
            <p>Sessões individuais com {siteProfile.sessionMinutes.individual} minutos.</p>
        </article>
    </div>

    <div class="map-container">
        <iframe
            src={siteProfile.externalLinks.googleMapsEmbed}
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localização do consultório - Bernardo Carielo"
        ></iframe>
    </div>
    <p class="map-note">
        O consultório fica em frente à UFES, no coração de Jardim da Penha.
        <a
            href={siteProfile.externalLinks.googleMapsPlace}
            target="_blank"
            rel="noopener"
        >
            Ver no Google Maps
        </a>
    </p>
</Section>

<!-- CTA Final -->
<Section variant="gradient">
    <div class="cta-content">
        <h2>Ainda com dúvidas?</h2>
        <p>
            Se você chegou até aqui com alguma dúvida, pode escrever mesmo assim
            — não precisa ter tudo claro para dar o primeiro passo. Estou à
            disposição para fazer o meu melhor no que você estiver buscando.
        </p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma consulta")}
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Vamos conversar?
        </Button>
    </div>
</Section>

<style>
    /* ========================= */
    /* Contact Hero               */
    /* ========================= */
    .contact-hero {
        padding: calc(var(--header-height) + 2.5rem) 0 4rem;
    }

    .contact-hero__content {
        max-width: 760px;
        text-align: center;
    }

    .contact-hero__eyebrow {
        display: inline-flex;
        padding: 0.4rem 0.8rem;
        border-radius: 999px;
        background: rgba(8, 186, 156, 0.12);
        color: var(--primary-dark);
        font-size: 0.82rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    .contact-hero__content p {
        max-width: 640px;
        margin: 1rem auto 0;
        color: var(--text-light);
        font-size: 1.05rem;
    }

    .contact-hero__actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 1.5rem;
    }

    /* ========================= */
    /* Contact List (Vertical)   */
    /* ========================= */
    .contact-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 860px;
        margin: 0 auto;
    }

    .contact-method {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 2rem;
        border-radius: var(--radius-lg);
        background: rgba(255, 255, 255, 0.86);
        border: 1px solid rgba(8, 186, 156, 0.08);
        box-shadow: var(--shadow-sm);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .contact-method:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
        border-color: rgba(8, 186, 156, 0.15);
    }

    .contact-method__icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 1.2rem;
        background: var(--primary-color);
        color: var(--white);
        flex-shrink: 0;
    }

    .contact-method__info {
        flex: 1;
    }

    .contact-method__info h2 {
        font-size: 1.25rem;
        margin-bottom: 0.4rem;
        color: var(--secondary-dark);
    }

    .contact-method__info p {
        margin: 0;
        color: var(--text-light);
        line-height: 1.6;
    }

    .contact-method__action {
        flex-shrink: 0;
    }

    .contact-link {
        color: var(--primary-color);
        font-weight: 700;
        text-decoration: none;
        border-bottom: 1px dashed var(--primary-color);
        transition: opacity 0.2s;
    }

    .contact-link:hover {
        opacity: 0.8;
    }

    /* ========================= */
    /* Contact Note                */
    /* ========================= */
    .contact-note {
        display: flex;
        gap: 0.75rem;
        align-items: center;
        justify-content: center;
        max-width: 780px;
        margin: 1.5rem auto 0;
        padding: 1rem 1.2rem;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.7);
    }

    .contact-note p {
        margin: 0;
        color: var(--text-light);
    }

    .contact-note :global(svg) {
        color: var(--primary-color);
        flex-shrink: 0;
    }

    /* ========================= */
    /* Process Steps Grid          */
    /* ========================= */
    .process-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }

    .process-card {
        padding: 1.5rem;
        border-radius: var(--radius-lg);
        background: var(--secondary-light);
        border: 1px solid rgba(8, 186, 156, 0.1);
    }

    .process-card__number {
        display: inline-flex;
        margin-bottom: 0.9rem;
        color: var(--primary-dark);
        font-weight: 800;
        font-size: 0.95rem;
    }

    .process-card h3 {
        margin-bottom: 0.6rem;
        font-size: 1.05rem;
    }

    .process-card p {
        margin: 0;
        color: var(--text-light);
        line-height: 1.65;
    }

    /* ========================= */
    /* Practical Info Grid          */
    /* ========================= */
    .practical-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .practical-card {
        padding: 1.5rem;
        border-radius: var(--radius-lg);
        background: rgba(255, 255, 255, 0.82);
        border: 1px solid rgba(8, 186, 156, 0.1);
    }

    .practical-card__header {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        margin-bottom: 0.85rem;
    }

    .practical-card__header :global(svg) {
        color: var(--primary-color);
    }

    .practical-card__header h2 {
        font-size: 1.15rem;
    }

    .practical-card p {
        margin-bottom: 0.6rem;
        color: var(--text-light);
    }

    /* ========================= */
    /* Map                         */
    /* ========================= */
    .map-container {
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-md);
    }

    .map-container iframe {
        display: block;
    }

    .map-note {
        text-align: center;
        margin-top: 1rem;
        color: var(--text-light);
    }

    .map-note a {
        color: var(--primary-color);
        font-weight: 600;
    }

    .map-note a:hover {
        text-decoration: underline;
    }

    /* ========================= */
    /* Responsive                  */
    /* ========================= */
    @media (max-width: 900px) {
        .process-grid,
        .practical-grid {
            grid-template-columns: 1fr;
        }

        .contact-method {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
            padding: 1.5rem;
        }

        .contact-method__icon {
            margin: 0 auto;
        }
    }

    @media (max-width: 640px) {
        .contact-hero__actions {
            flex-direction: column;
        }

        .contact-note {
            align-items: flex-start;
            text-align: left;
        }
    }
</style>
