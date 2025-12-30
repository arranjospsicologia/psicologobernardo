<script lang="ts">
    import { Section, Button, SEO } from "$lib";
    import {
        Calendar,
        Clock,
        Monitor,
        Shield,
        Phone,
        Mail,
        ChevronDown,
    } from "lucide-svelte";
    import { onMount } from "svelte";

    // Dynamic import to prevent CSS from being bundled in shared chunks
    const LazyDoctoraliaWidgetPromise = import(
        "$lib/components/LazyDoctoraliaWidget.svelte"
    );

    let faqItems = [
        {
            question: "Como funciona o agendamento online?",
            answer: "O agendamento é feito pela plataforma Doctoralia, integrada nesta página. Você escolhe uma data e horário disponível no calendário, preenche seus dados de contato e recebe confirmação por email. Todo o processo é simples, rápido e seguro.",
            open: false,
        },
        {
            question: "Quanto tempo antes posso agendar minha consulta?",
            answer: "Você pode agendar sua consulta com até 30 dias de antecedência através da plataforma. Recomendo agendar com pelo menos 48 horas de antecedência para garantir o horário de sua preferência.",
            open: false,
        },
        {
            question: "Posso cancelar ou remarcar minha consulta?",
            answer: "Sim, você pode cancelar ou remarcar através da plataforma Doctoralia ou entrando em contato direto pelo WhatsApp (27) 99833-1228. Peço que avise com no mínimo 24 horas de antecedência.",
            open: false,
        },
        {
            question: "O atendimento é presencial ou online?",
            answer: "Ofereço as duas modalidades. No momento do agendamento, você pode escolher entre atendimento presencial no consultório em Jardim da Penha, Vitória/ES, ou atendimento online via videochamada segura.",
            open: false,
        },
        {
            question: "Qual o valor da consulta?",
            answer: "Os valores são informados no momento do agendamento através da plataforma Doctoralia. Você também pode entrar em contato pelo WhatsApp para consultar valores e formas de pagamento.",
            open: false,
        },
        {
            question: "Quanto tempo dura cada sessão?",
            answer: "Cada sessão tem duração de 50 minutos, seguindo o padrão estabelecido pela psicologia. A frequência geralmente é semanal, mas pode ser ajustada conforme suas necessidades.",
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
            name: "Bernardo Carielo Psicólogo",
            image: "https://psicologobernardo.com.br/images/bernardo-avatar.jpg",
            telephone: "+5527998331228",
            priceRange: "$$",
            address: {
                "@type": "PostalAddress",
                streetAddress:
                    "Rua Darcy Grijó, 50, Sala 409, Ed. Madison Office Tower",
                addressLocality: "Vitória",
                addressRegion: "ES",
                postalCode: "29060-500",
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
                    opens: "08:00",
                    closes: "20:00",
                },
            ],
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "65",
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Como funciona o agendamento online?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "O agendamento é feito pela plataforma Doctoralia. Você escolhe uma data e horário disponível no calendário, preenche seus dados e recebe confirmação por email.",
                    },
                },
                {
                    "@type": "Question",
                    name: "O atendimento é presencial ou online?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Ofereço as duas modalidades. Você pode escolher entre atendimento presencial no consultório em Vitória/ES ou atendimento online via videochamada segura.",
                    },
                },
            ],
        },
    ];
</script>

<SEO
    title="Agendar Consulta com Psicólogo em Vitória/ES | Bernardo Carielo (CRP 16/5527)"
    description="Agende sua consulta com psicólogo em Vitória/ES. Atendimento presencial e online com Bernardo Carielo (CRP 16/5527). Horários flexíveis e agendamento fácil pela plataforma Doctoralia."
    canonical="https://psicologobernardo.com.br/agendar/"
    jsonLd={agendarSchema}
/>

<!-- Hero Section -->
<section class="agendar-hero">
    <div class="container">
        <h1>Agende sua Consulta com Psicólogo em Vitória/ES</h1>
        <p class="hero-subtitle">
            Atendimento presencial e online com horários flexíveis. Escolha o
            melhor dia e horário para sua primeira sessão.
        </p>
    </div>
</section>

<!-- Widget Calendário -->
<Section variant="white" id="agendar">
    <div class="widget-container">
        {#await LazyDoctoraliaWidgetPromise then module}
            <module.default />
        {:catch}
            <a
                href="https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria"
                rel="nofollow"
            >
                Agendar consulta via Doctoralia
            </a>
        {/await}
    </div>
</Section>

<!-- Informações sobre Agendamento -->
<Section variant="beige" id="info">
    <div class="info-grid">
        <div class="info-card">
            <Calendar size={48} />
            <h3>Agendamento Fácil</h3>
            <p>
                Sistema de agendamento online integrado com calendário em tempo
                real. Veja os horários disponíveis e escolha o que melhor se
                encaixa na sua rotina.
            </p>
        </div>

        <div class="info-card">
            <Clock size={48} />
            <h3>Horários Flexíveis</h3>
            <p>
                Atendimento de segunda a sexta-feira, das 8h às 20h, com
                possibilidade de horários alternativos mediante consulta.
                Sessões com duração de 50 minutos.
            </p>
        </div>

        <div class="info-card">
            <Monitor size={48} />
            <h3>Presencial ou Online</h3>
            <p>
                Escolha entre atendimento presencial no consultório em Jardim da
                Penha, Vitória/ES, ou atendimento online via videochamada com
                total sigilo e qualidade.
            </p>
        </div>

        <div class="info-card">
            <Shield size={48} />
            <h3>Segurança e Sigilo</h3>
            <p>
                Seus dados são protegidos conforme a LGPD e o Código de Ética
                Profissional do Psicólogo. Total confidencialidade garantida em
                todas as sessões.
            </p>
        </div>
    </div>
</Section>

<!-- FAQ Section -->
<Section variant="white" id="faq">
    <div class="section-header">
        <h2>Perguntas Frequentes sobre Agendamento</h2>
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
<Section variant="beige" id="contato-alternativo">
    <div class="section-header">
        <h2>Prefere agendar por WhatsApp?</h2>
        <p>Entre em contato direto comigo e tire suas dúvidas</p>
    </div>

    <div class="contact-buttons">
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
            variant="primary"
            size="lg"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
        <Button
            href="mailto:contato@arranjospsicologia.com.br"
            variant="outline"
            size="lg"
        >
            <Mail size={20} />
            Enviar Email
        </Button>
    </div>

    <div class="schedule-info">
        <h3>Horários de Atendimento</h3>
        <p><strong>Segunda a Sexta:</strong> 8h às 20h</p>
        <p>
            <strong>Localização:</strong> Rua Darcy Grijó, 50 - Sala 409, Jardim
            da Penha, Vitória/ES
        </p>
        <p class="crp">
            <strong>CRP 16/5527</strong> | Atendimento regulamentado pelo CFP
        </p>
    </div>
</Section>

<!-- CTA Final -->
<Section variant="gradient" id="cta">
    <div class="cta-content">
        <h2>Dê o primeiro passo para cuidar da sua saúde mental</h2>
        <p>
            Agende sua primeira consulta agora mesmo e comece sua jornada de
            autoconhecimento e bem-estar
        </p>
        <Button href="#agendar" variant="secondary" size="lg">
            <Calendar size={20} />
            Escolher Horário
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
        padding: 5rem 0;
        text-align: center;
        color: var(--white);
    }

    .agendar-hero h1 {
        color: var(--white);
        margin-bottom: 1rem;
    }

    .hero-subtitle {
        font-size: var(--text-lg);
        opacity: 0.95;
        max-width: 700px;
        margin: 0 auto;
    }

    /* Widget Container */
    .widget-container {
        max-width: 900px;
        margin: 0 auto;
        min-height: 500px;
    }

    /* Section Header */
    .section-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    .section-header p {
        color: var(--text-light);
        font-size: var(--text-lg);
    }

    /* Info Grid */
    .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        max-width: 1100px;
        margin: 0 auto;
    }

    .info-card {
        background: var(--white);
        padding: 2rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        text-align: center;
    }

    .info-card :global(svg) {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .info-card h3 {
        margin-bottom: 1rem;
    }

    .info-card p {
        color: var(--text-light);
        line-height: 1.7;
    }

    /* FAQ */
    .faq-container {
        max-width: 800px;
        margin: 0 auto;
    }

    .faq-item {
        border-bottom: 1px solid var(--border-light);
    }

    .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.25rem 0;
        cursor: pointer;
        font-weight: 600;
        color: var(--text-color);
        list-style: none;
    }

    .faq-question span {
        flex: 1;
    }

    .faq-question :global(.chevron) {
        transition: transform 0.3s ease;
    }

    .faq-question :global(.chevron.open) {
        transform: rotate(180deg);
    }

    .faq-answer {
        padding: 0 0 1.25rem;
    }

    .faq-answer p {
        color: var(--text-light);
        line-height: 1.7;
    }

    /* Contact Buttons */
    .contact-buttons {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 3rem;
    }

    /* Schedule Info */
    .schedule-info {
        text-align: center;
        padding: 2rem;
        background: rgba(255, 255, 255, 0.7);
        border-radius: var(--radius-md);
        max-width: 700px;
        margin: 0 auto;
    }

    .schedule-info h3 {
        margin-bottom: 1rem;
    }

    .schedule-info .crp {
        margin-top: 1rem;
        font-size: var(--text-sm);
        color: var(--text-light);
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

    /* Mobile */
    @media (max-width: 768px) {
        .info-grid {
            grid-template-columns: 1fr;
        }

        .contact-buttons {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
