<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import {
        Phone,
        ChevronDown,
        Monitor,
        Shield,
        Clock,
        Globe,
    } from "lucide-svelte";
    import "$lib/styles/services.css";

    let faqItems = $state([
        {
            question: "Como funciona a terapia online?",
            answer: "A terapia online funciona por videochamadas seguras (Google Meet ou Zoom). As sessões duram 60 minutos (individual) ou 75 minutos (casal) e acontecem geralmente uma vez por semana. Você precisa de dispositivo com câmera, conexão estável e espaço privado.",
            open: false,
        },
        {
            question: "É tão eficaz quanto presencial?",
            answer: "Sim! Estudos científicos demonstram que a terapia online é tão eficaz quanto a presencial. O que torna a terapia eficaz é a qualidade da relação terapêutica, e isso pode acontecer tanto pessoalmente quanto através de uma tela.",
            open: false,
        },
        {
            question: "É segura e confidencial?",
            answer: "Sim, completamente. A terapia online segue as mesmas normas éticas do atendimento presencial, conforme a Resolução CFP 11/2018. Utilizo plataformas com criptografia e não gravo as sessões.",
            open: false,
        },
        {
            question: "Quais plataformas são usadas?",
            answer: "Utilizo plataformas seguras como Google Meet e Zoom, que oferecem criptografia e garantem privacidade. Antes da primeira sessão, combinamos qual plataforma funciona melhor para você.",
            open: false,
        },
    ]);

    function toggleFaq(index: number) {
        faqItems = faqItems.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false,
        }));
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Terapia Online",
        provider: {
            "@type": "ProfessionalService",
            name: "Bernardo Carielo Psicólogo",
        },
        areaServed: {
            "@type": "Country",
            name: "Brasil",
        },
    };
</script>

<SEO
    title="Terapia Online em Vitória e todo o Brasil"
    description="Terapia Online para todo o Brasil. Psicoterapia pela Abordagem Centrada na Pessoa com a mesma qualidade do atendimento presencial. Autorizada pelo CFP."
    canonical="https://psicologobernardo.com.br/servicos/terapia-online/"
    jsonLd={serviceSchema}
    preloadImage="/images/servicos/terapia-online-hero.webp"
/>

<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/#servicos" },
        { name: "Terapia Online" },
    ]}
/>

<section class="service-hero">
    <div class="container">
        <h1>Terapia Online para todo o Brasil</h1>
        <p class="hero-subtitle">
            O mesmo acolhimento e ética do atendimento presencial, com
            flexibilidade para se conectar de onde estiver
        </p>
        <div class="hero-image">
            <img
                src="/images/servicos/terapia-online-hero.webp"
                srcset="/images/servicos/terapia-online-hero-400w.webp 400w,
                        /images/servicos/terapia-online-hero-800w.webp 800w,
                        /images/servicos/terapia-online-hero.webp 1600w"
                sizes="(max-width: 480px) 100vw,
                       (max-width: 768px) 90vw,
                       900px"
                alt="Terapia online - Psicoterapia por videochamada com segurança"
                loading="eager"
                fetchpriority="high"
                width="900"
                height="600"
            />
        </div>
    </div>
</section>

<Section variant="white">
    <article class="service-content">
        <h2>O que é a terapia online?</h2>
        <p>
            A terapia online oferece o mesmo acolhimento e ética do atendimento
            presencial, com a flexibilidade de se conectar de onde estiver.
            Autorizada pelo Conselho Federal de Psicologia (Resolução 11/2018),
            a modalidade permite encontros por videochamadas seguras.
        </p>
        <p>
            Ideal para quem mora fora de <strong>Vitória</strong>, vive em
            outros estados ou países, ou prefere a praticidade de fazer terapia
            de casa. Atendo
            <strong
                >pessoas de todo o Brasil e brasileiros vivendo no exterior</strong
            >.
        </p>

        <h2>Vantagens da terapia online</h2>
        <ul>
            <li>
                <strong>Flexibilidade de localização</strong> - terapia de qualquer
                lugar
            </li>
            <li><strong>Economia de tempo</strong> - sem deslocamento</li>
            <li><strong>Conforto</strong> - no seu próprio ambiente</li>
            <li>
                <strong>Continuidade</strong> - ideal para quem viaja frequentemente
            </li>
            <li>
                <strong>Acessibilidade</strong> - para pessoas com dificuldades de
                locomoção
            </li>
        </ul>

        <h2>Requisitos técnicos</h2>
        <ul>
            <li><strong>Dispositivo com câmera e microfone</strong></li>
            <li><strong>Conexão estável de internet</strong></li>
            <li><strong>Espaço privado e tranquilo</strong></li>
            <li><strong>Fones de ouvido</strong> (recomendável)</li>
        </ul>
    </article>
</Section>

<Section variant="beige">
    <div class="info-grid">
        <div class="info-card">
            <Monitor size={48} />
            <h3>Videochamadas Seguras</h3>
            <p>Google Meet ou Zoom com criptografia de ponta a ponta</p>
        </div>
        <div class="info-card">
            <Shield size={48} />
            <h3>Sigilo Garantido</h3>
            <p>Código de Ética do Psicólogo e LGPD</p>
        </div>
        <div class="info-card">
            <Clock size={48} />
            <h3>Horários Flexíveis</h3>
            <p>Sessões adaptadas ao seu fuso horário</p>
        </div>
        <div class="info-card">
            <Globe size={48} />
            <h3>Brasil e Exterior</h3>
            <p>Atendimento para brasileiros em qualquer lugar</p>
        </div>
    </div>
</Section>

<Section variant="white">
    <div class="related-links">
        <h3>Veja também</h3>
        <ul>
            <li>
                <a href="/servicos/psicoterapia-individual/"
                    >→ Psicoterapia Individual</a
                >
            </li>
            <li>
                <a href="/servicos/terapia-de-casal/"
                    >→ Terapia de Casal Online</a
                >
            </li>
            <li>
                <a href="/sobre/">→ Conheça a Abordagem Centrada na Pessoa</a>
            </li>
        </ul>
    </div>
</Section>

<Section variant="beige" id="faq">
    <div class="section-header">
        <h2>Perguntas Frequentes sobre Terapia Online</h2>
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

<Section variant="gradient">
    <div class="cta-content">
        <h2>Pronto para começar sua jornada online?</h2>
        <p>Entre em contato para agendarmos a primeira sessão</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20terapia%20online"
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Agendar Consulta
        </Button>
    </div>
</Section>

<style>
    /* Info Grid */
    .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
        max-width: 1000px;
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
        margin-bottom: 0.5rem;
    }

    .info-card p {
        color: var(--text-light);
        font-size: var(--text-sm);
    }
</style>
