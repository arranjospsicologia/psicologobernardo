<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, TrustPanel, buildWhatsAppUrl, getFullStreetAddress, siteProfile } from "$lib";
    import {
        Calendar,
        ChevronDown,
        Clock,
        Mail,
        Monitor,
        Phone,
        Shield,
    } from "lucide-svelte";

    // Dynamic import to prevent CSS from being bundled in shared chunks
    const LazyDoctoraliaWidgetPromise = import(
        "$lib/components/LazyDoctoraliaWidget.svelte"
    );

    let faqItems = [
        {
            question: "Como funciona o agendamento online?",
            answer: "O agendamento é feito pela plataforma Doctoralia, integrada nesta página. Você escolhe uma data e horário disponível no calendário, preenche seus dados de contato e recebe confirmação por e-mail.",
            open: false,
        },
        {
            question: "Posso cancelar ou remarcar minha consulta?",
            answer: `Sim. Você pode cancelar ou remarcar pela plataforma Doctoralia ou entrando em contato pelo WhatsApp ${siteProfile.phoneDisplay}. O ideal é avisar com pelo menos 24 horas de antecedência. Quando o cancelamento é realizado com menos de 24 horas de antecedência, a sessão é cobrada integralmente.`,
            open: false,
        },
        {
            question: "O atendimento é presencial ou online?",
            answer: "Ofereço as duas modalidades. No momento do agendamento, você pode escolher entre atendimento presencial no consultório em Jardim da Penha, Vitória, ou atendimento online via videochamada.",
            open: false,
        },
        {
            question: "Quanto tempo dura cada sessão?",
            answer: `Cada sessão individual tem duração média de ${siteProfile.sessionMinutes.individual} minutos. A frequência costuma ser semanal, mas pode ser ajustada conforme a necessidade.`,
            open: false,
        },
    ];

    function toggleFaq(index: number) {
        faqItems = faqItems.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false,
        }));
    }

    const agendarSchema = [
        {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: siteProfile.clinicalBrandName,
            image: "https://psicologobernardo.com.br/images/bernardo-avatar.jpg",
            telephone: siteProfile.phoneHref.replace("tel:", ""),
            priceRange: "$$",
            address: {
                "@type": "PostalAddress",
                streetAddress: getFullStreetAddress(),
                addressLocality: siteProfile.address.city,
                addressRegion: siteProfile.address.state,
                postalCode: siteProfile.address.postalCode,
                addressCountry: "BR",
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
                    opens: siteProfile.hours.opens,
                    closes: siteProfile.hours.closes,
                },
            ],
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: siteProfile.reviews.ratingValue,
                reviewCount: siteProfile.reviews.reviewCount,
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                },
            })),
        },
    ];
</script>

<SEO
    title="Agendar consulta | Bernardo Carielo Psicólogo em Vitória ES"
    description="Agende sua consulta com psicólogo em Vitória ES. Atendimento presencial e online com Bernardo Carielo, com agenda online e WhatsApp para tirar dúvidas antes da primeira sessão."
    canonical="https://psicologobernardo.com.br/agendar/"
    jsonLd={agendarSchema}
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Agendar" },
    ]}
/>

<!-- Hero -->
<section class="agendar-hero">
    <div class="container agendar-hero__content">
        <span class="agendar-hero__eyebrow">Agenda e primeiro passo</span>
        <h1>Escolha o horário com mais clareza</h1>
        <p class="hero-subtitle">
            Atendimento presencial em Jardim da Penha, Vitória, e modalidade online.
            Se você já sabe que quer avançar, a agenda online encurta o caminho.
            Se ainda estiver em dúvida, o WhatsApp continua sendo o melhor ponto de partida.
        </p>
        <div class="agendar-hero__actions">
            <Button
                href="#agendar"
                variant="primary"
                size="lg"
            >
                <Calendar size={20} />
                Ver horários
            </Button>
            <Button
                href={buildWhatsAppUrl("Olá, gostaria de tirar uma dúvida antes de agendar.")}
                variant="outline"
                size="lg"
            >
                <Phone size={20} />
                Tirar dúvidas
            </Button>
        </div>
    </div>
</section>

<!-- TrustPanel -->
<Section variant="white">
    <TrustPanel
        title="Antes de abrir a agenda"
        intro="A agenda online faz sentido quando você já quer olhar disponibilidade. Quando a dúvida ainda é sobre formato, localização ou se este é o melhor caminho, o WhatsApp ajuda a decidir sem pressa."
        primaryHref="#agendar"
        primaryLabel="Abrir agenda nesta página"
        primaryVariant="primary"
        secondaryHref={buildWhatsAppUrl("Olá, gostaria de tirar uma dúvida antes de agendar.")}
        secondaryLabel="Falar no WhatsApp"
        secondaryVariant="outline"
    />
</Section>

<!-- Info Cards -->
<Section variant="beige">
    <div class="info-grid">
        <article class="info-card">
            <Calendar size={42} />
            <h3>Escolha o horário</h3>
            <p>
                A agenda online mostra janelas disponíveis em tempo real para facilitar a primeira marcação.
            </p>
        </article>

        <article class="info-card">
            <Clock size={42} />
            <h3>Horários consistentes</h3>
            <p>
                Atendimento de {siteProfile.hours.displayDays.toLowerCase()}, {siteProfile.hours.displayTime}, com sessões individuais de {siteProfile.sessionMinutes.individual} minutos.
            </p>
        </article>

        <article class="info-card">
            <Monitor size={42} />
            <h3>Presencial ou online</h3>
            <p>
                Escolha entre atendimento presencial no consultório em Jardim da Penha ou online, conforme a sua rotina.
            </p>
        </article>

        <article class="info-card">
            <Shield size={42} />
            <h3>Sigilo e organização</h3>
            <p>
                Dados protegidos e processo simples, com possibilidade de tirar dúvidas antes de concluir o agendamento.
            </p>
        </article>
    </div>
</Section>

<!-- Widget Calendário -->
<Section variant="white" id="agendar">
    <div class="widget-shell">
        <div class="widget-shell__content">
            <h2>Agenda online</h2>
            <p>
                Se preferir, use o calendário abaixo para visualizar horários disponíveis e seguir com o agendamento.
            </p>
        </div>
        <div class="widget-container">
            {#await LazyDoctoraliaWidgetPromise then module}
                <module.default />
            {:catch}
                <a href={siteProfile.externalLinks.doctoralia} rel="nofollow">
                    Agendar consulta via Doctoralia
                </a>
            {/await}
        </div>
    </div>
</Section>

<!-- FAQ -->
<Section variant="beige" id="faq">
    <div class="section-header">
        <h2>Perguntas frequentes sobre agendamento</h2>
        <p>Respostas curtas para reduzir atrito antes da primeira sessão.</p>
    </div>

    <div class="faq-container">
        {#each faqItems as item, index}
            <details class="faq-item" bind:open={item.open}>
                <summary
                    class="faq-question"
                    onclick={(e) => {
                        e.preventDefault();
                        toggleFaq(index);
                    }}
                >
                    <span>{item.question}</span>
                    <ChevronDown
                        size={20}
                        class={item.open ? "chevron open" : "chevron"}
                    />
                </summary>
                <div class="faq-answer">
                    <p>{item.answer}</p>
                </div>
            </details>
        {/each}
    </div>
</Section>

<!-- Contato Alternativo -->
<Section variant="white">
    <div class="contact-support">
        <h2>Prefere alinhar antes de escolher um horário?</h2>
        <p>
            Isso é comum. Você pode me chamar no WhatsApp para entender se o formato presencial
            ou online faz mais sentido e como o processo começa.
        </p>
        <div class="contact-support__actions">
            <Button
                href={buildWhatsAppUrl("Olá, gostaria de tirar uma dúvida antes de agendar.")}
                variant="primary"
                size="lg"
            >
                <Phone size={20} />
                Falar no WhatsApp
            </Button>
            <Button
                href={`mailto:${siteProfile.officialEmail}`}
                variant="outline"
                size="lg"
            >
                <Mail size={20} />
                Enviar Email
            </Button>
        </div>
        <div class="support-summary">
            <p><strong>Endereço:</strong> {getFullStreetAddress()} — {siteProfile.address.neighborhood}, {siteProfile.address.city}/{siteProfile.address.state}</p>
            <p><strong>Horário:</strong> {siteProfile.hours.displayDays}, {siteProfile.hours.displayTime}</p>
            <p><strong>{siteProfile.crp}</strong> | Atendimento regulamentado pelo CFP</p>
        </div>
    </div>
</Section>

<!-- CTA Final -->
<Section variant="gradient" id="cta">
    <div class="cta-content">
        <h2>Quando fizer sentido, escolha o primeiro horário possível</h2>
        <p>
            A agenda online ajuda a transformar uma vontade vaga em um compromisso concreto com o cuidado.
        </p>
        <Button href="#agendar" variant="secondary" size="lg">
            <Calendar size={20} />
            Escolher horário
        </Button>
    </div>
</Section>

<style>
    /* Hero */
    .agendar-hero {
        background: linear-gradient(
            135deg,
            var(--primary-color) 0%,
            var(--primary-dark) 100%
        );
        padding: calc(var(--header-height) + 2.5rem) 0 4rem;
        color: var(--white);
    }

    .agendar-hero__content {
        text-align: center;
        max-width: 760px;
    }

    .agendar-hero__eyebrow {
        display: inline-flex;
        padding: 0.4rem 0.8rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.16);
        color: var(--white);
        font-size: 0.82rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    .agendar-hero h1 {
        color: var(--white);
    }

    .hero-subtitle {
        font-size: var(--text-lg);
        color: rgba(255, 255, 255, 0.9);
        max-width: 700px;
        margin: 1rem auto 0;
    }

    .agendar-hero__actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 1.5rem;
    }

    /* Fix outline button contrast in dark hero */
    .agendar-hero__actions :global(.btn-outline) {
        border-color: rgba(255, 255, 255, 0.6) !important;
        color: var(--white) !important;
    }

    .agendar-hero__actions :global(.btn-outline *) {
        color: var(--white) !important;
    }

    .agendar-hero__actions :global(.btn-outline:hover) {
        background: rgba(255, 255, 255, 0.15) !important;
        border-color: var(--white) !important;
    }

    /* Info Grid */
    .info-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1rem;
        max-width: 1100px;
        margin: 0 auto;
    }

    .info-card {
        background: var(--white);
        padding: 1.6rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        text-align: left;
    }

    .info-card :global(svg) {
        color: var(--primary-color);
        margin-bottom: 0.9rem;
    }

    .info-card h3 {
        margin-bottom: 0.75rem;
    }

    .info-card p {
        color: var(--text-light);
        line-height: 1.7;
    }

    /* FAQ */
    .faq-container {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .faq-item {
        background: var(--white);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        border: 1px solid rgba(8, 186, 156, 0.08);
        overflow: hidden;
        transition: box-shadow 0.2s ease;
    }

    .faq-item[open] {
        box-shadow: var(--shadow-md);
    }

    .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.25rem 1.5rem;
        cursor: pointer;
        font-weight: 600;
        color: var(--text-color);
        list-style: none;
    }

    .faq-question span {
        flex: 1;
        padding-right: 1.5rem;
    }

    .faq-question :global(.chevron) {
        transition: transform 0.3s ease;
        color: var(--primary-color);
    }

    .faq-question :global(.chevron.open) {
        transform: rotate(180deg);
    }

    .faq-answer {
        padding: 0 1.5rem 1.5rem;
    }

    .faq-answer p {
        color: var(--text-light);
        line-height: 1.75;
        margin: 0;
    }

    /* Widget Shell */
    .widget-shell {
        max-width: 980px;
        margin: 0 auto;
    }

    .widget-shell__content {
        text-align: center;
        max-width: 680px;
        margin: 0 auto 1.5rem;
    }

    .widget-shell__content p {
        color: var(--text-light);
        margin-top: 0.8rem;
    }

    .widget-container {
        max-width: 900px;
        margin: 0 auto;
        min-height: 500px;
    }

    /* Contact Support */
    .contact-support {
        max-width: 820px;
        margin: 0 auto;
        text-align: center;
    }

    .contact-support p {
        color: var(--text-light);
        line-height: 1.8;
    }

    .contact-support__actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin: 1.5rem 0;
    }

    .support-summary {
        padding: 1.5rem;
        border-radius: var(--radius-lg);
        background: var(--secondary-light);
    }

    .support-summary p {
        margin-bottom: 0.5rem;
    }

    .support-summary p:last-child {
        margin-bottom: 0;
    }

    /* CTA */
    .cta-content {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
    }

    .cta-content h2 {
        color: var(--white);
        margin-bottom: 1rem;
    }

    .cta-content p {
        color: rgba(255, 255, 255, 0.9);
        font-size: var(--text-lg);
        margin-bottom: 2rem;
    }

    /* Responsive */
    @media (max-width: 900px) {
        .info-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 640px) {
        .agendar-hero__actions,
        .contact-support__actions {
            flex-direction: column;
        }

        .info-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
