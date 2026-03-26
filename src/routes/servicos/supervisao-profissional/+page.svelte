<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, TrustPanel, buildWhatsAppUrl, schemaIds, siteProfile } from "$lib";
    import { Phone, ChevronDown, GraduationCap, Lightbulb, Heart, Scale } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "A supervisão é apenas para psicólogos?",
            answer: "A supervisão clínica é voltada para psicólogos formados ou estudantes de psicologia em estágio clínico. É um espaço de suporte para quem já está ou está prestes a iniciar a prática de atendimento.",
            open: false,
        },
        {
            question: "Como funciona a supervisão em grupo?",
            answer: "Os grupos são reduzidos (máximo 6 pessoas) para garantir que todos tenham espaço de fala. A troca entre pares enriquece muito a percepção de diferentes manejos dentro da ACP.",
            open: false,
        },
        {
            question: "A frequência deve ser semanal ou quinzenal?",
            answer: "Depende da sua demanda clínica. Para quem está começando, a frequência semanal costuma oferecer mais segurança. Para profissionais mais experientes, encontros quinzenais podem ser suficientes.",
            open: false,
        },
        {
            question: "Trabalhamos apenas casos clínicos ou também o 'ser terapeuta'?",
            answer: "Na ACP, não separamos a técnica da pessoa. Trabalhamos os casos, mas olhamos atentamente para como você se sente no encontro com o cliente e como sua pessoa influencia o processo.",
            open: false,
        },
    ]);

    function toggleFaq(index: number) {
        faqItems = faqItems.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false,
        }));
    }

    const serviceSchema = $derived({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://psicologobernardo.com.br/servicos/supervisao-profissional/#webpage",
                url: "https://psicologobernardo.com.br/servicos/supervisao-profissional/",
                name: "Supervisão Profissional em ACP em Vitória e Online",
                isPartOf: {
                    "@id": schemaIds.website,
                },
                about: {
                    "@id": "https://psicologobernardo.com.br/servicos/supervisao-profissional/#service",
                },
            },
            {
                "@type": "Service",
                "@id": "https://psicologobernardo.com.br/servicos/supervisao-profissional/#service",
                serviceType: "Supervisão Clínica",
                name: "Supervisão em Abordagem Centrada na Pessoa",
                description:
                    "Suporte clínico e desenvolvimento de identidade profissional para psicólogos e estudantes de psicologia na ACP.",
                provider: {
                    "@id": schemaIds.organization,
                },
                areaServed: [
                    { "@type": "City", name: "Vitória" },
                    { "@type": "Country", name: "Brasil" }
                ],
            },
            {
                "@type": "FAQPage",
                "@id": "https://psicologobernardo.com.br/servicos/supervisao-profissional/#faq",
                mainEntity: faqItems.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: item.answer,
                    },
                })),
            },
        ],
    });
</script>

<SEO
    title="Supervisão Profissional em ACP | Vitória e Online"
    description="Reflexão sobre a prática clínica para psicólogos e estudantes. Espaço de cuidado e desenvolvimento de identidade na Abordagem Centrada na Pessoa."
    canonical="https://psicologobernardo.com.br/servicos/supervisao-profissional/"
    jsonLd={serviceSchema}
    preloadImage="/images/servicos/supervisao-profissional-hero.webp"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/servicos/" },
        { name: "Supervisão Profissional" },
    ]}
/>

<!-- Hero -->
<section class="service-hero">
    <div class="container">
        <h1>Supervisão Profissional em ACP</h1>
        <p class="hero-subtitle">
            Cuidado com quem cuida. Um espaço seguro para refletir sobre sua clínica, 
            seus desafios e o desenvolvimento da sua identidade como terapeuta.
        </p>
        <div class="service-hero-actions">
            <Button
                href={buildWhatsAppUrl("Olá Bernardo, gostaria de informações sobre supervisão clínica (individual ou grupo).")}
                variant="primary"
            >
                <Phone size={20} />
                Agendar Supervisão
            </Button>
            <Button href="/servicos/grupos-e-rodas/" variant="outline">
                Ver grupos de conversa
            </Button>
        </div>
        <div class="hero-image">
            <img
                src="/images/servicos/supervisao-profissional-hero.webp"
                srcset="/images/servicos/supervisao-profissional-hero-400w.webp 400w,
                        /images/servicos/supervisao-profissional-hero-800w.webp 800w,
                        /images/servicos/supervisao-profissional-hero.webp 1600w"
                sizes="(max-width: 480px) 400px,
                       (max-width: 768px) 800px,
                       900px"
                alt="Supervisão clínica para psicólogos em Vitória e Online"
                loading="eager"
                fetchpriority="high"
                width="900"
                height="600"
            />
        </div>
    </div>
</section>

<!-- TrustPanel -->
<Section variant="white">
    <TrustPanel
        title="O suporte que sua clínica precisa"
        intro="Como facilitador na rede Arranjos Psicologia, auxilio outros profissionais a encontrarem sua própria voz dentro da ACP, com ética e segurança."
        primaryHref={buildWhatsAppUrl("Olá, gostaria de saber sobre valores e horários para supervisão.")}
        primaryLabel="Consultar horários"
        secondaryHref="https://arranjospsicologia.com.br"
        secondaryLabel="Conhecer a Arranjos"
    />
</Section>

<!-- Content -->
<Section variant="beige">
    <article class="service-content">
        <!-- Answer Box -->
        <div class="answer-box">
            <p>
                A supervisão profissional é o tripé fundamental (junto com a terapia pessoal e o estudo teórico) 
                para uma prática clínica ética e segura. Ofereço supervisão <strong>individual</strong> e em 
                <strong>grupo</strong>, atendendo presencialmente em <strong>Vitória (ES)</strong> e no formato 
                <strong>online</strong> para psicólogos de todo o Brasil.
            </p>
        </div>

        <!-- Decision Grid -->
        <div class="decision-grid">
            <article class="decision-card">
                <h3>Identidade Profissional</h3>
                <p>Descubra seu estilo de ser terapeuta, para além das técnicas, focando na sua autenticidade.</p>
            </article>
            <article class="decision-card">
                <h3>Manejo Clínico ACP</h3>
                <p>Aprofundamento na escuta empática, aceitação incondicional e congruência nos casos reais.</p>
            </article>
            <article class="decision-card">
                <h3>Ética e Suporte</h3>
                <p>Espaço para acolher as dúvidas e angústias que a prática clínica desperta no profissional.</p>
            </article>
        </div>

        <h2>Para quem é a supervisão?</h2>
        <p>
            A supervisão é voltada tanto para <strong>psicólogos recém-formados</strong>, que sentem a insegurança 
            natural do início da carreira, quanto para <strong>profissionais experientes</strong> que desejam 
            um olhar externo e acolhedor sobre seus atendimentos. Tambem é aberta a estudantes que já 
            iniciaram seus estágios clínicos.
        </p>

        <!-- Mid-CTA -->
        <div class="mid-cta-box">
            <h3>"Sinto que travei com um cliente específico..."</h3>
            <p>
                Isso acontece com todos nós. A supervisão não serve para apontar falhas, mas para 
                criar recursos internos que destravem o processo terapêutico através da relação.
            </p>
            <div class="mid-cta-actions">
                <Button
                    href={buildWhatsAppUrl("Olá Bernardo, gostaria de marcar uma supervisão pontual para um caso específico.")}
                    variant="primary"
                >
                    Falar sobre um caso
                </Button>
            </div>
        </div>

        <h2>Temas comuns na supervisão</h2>
    </article>
</Section>

<!-- Theme Cards -->
<Section variant="white">
    <div class="theme-cards">
        <div class="theme-card">
            <div class="card-icon">
                <Heart size={32} />
            </div>
            <h3>Presença e Autenticidade</h3>
            <p>Como estar genuinamente presente no encontro terapêutico sem se perder de si.</p>
        </div>
        <div class="theme-card">
            <div class="card-icon">
                <Lightbulb size={32} />
            </div>
            <h3>Empatia na Prática</h3>
            <p>Desenvolvendo a escuta profunda para além da técnica protocolar.</p>
        </div>
        <div class="theme-card">
            <div class="card-icon">
                <Scale size={32} />
            </div>
            <h3>Dilemas Éticos Clínicos</h3>
            <p>Manejo de questões complexas sobre sigilo, limites e postura profissional.</p>
        </div>
        <div class="theme-card">
            <div class="card-icon">
                <GraduationCap size={32} />
            </div>
            <h3>Formação Contínua</h3>
            <p>Reflexões constantes que alimentam sua identidade como terapeuta da ACP.</p>
        </div>
    </div>
</Section>

<!-- Related Links -->
<Section variant="beige">
    <div class="related-links">
        <h3>Conteúdo para profissionais</h3>
        <ul>
            <li>
                <a href="/servicos/grupos-e-rodas/"
                    >→ Grupo: Desafios da Profissão Psi-ACP</a
                >
            </li>
            <li>
                <a href="https://arranjospsicologia.com.br" target="_blank"
                    >→ Formação e cursos pela rede Arranjos</a
                >
            </li>
            <li>
                <a href="/servicos/terapia-online/"
                    >→ Terapia Online</a
                >
            </li>
            <li>
                <a href="/sobre/">→ Minha trajetória como supervisor</a>
            </li>
        </ul>
    </div>
</Section>

<!-- FAQ -->
<Section variant="white" id="faq">
    <div class="section-header">
        <h2>Perguntas frequentes de profissionais</h2>
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

<!-- CTA Final -->
<Section variant="gradient">
    <div class="cta-content">
        <h2>Vamos desenvolver sua clínica juntos?</h2>
        <p>Entre em contato para saber sobre vagas em grupos ou horários individuais.</p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de saber mais sobre as vagas para supervisão profissional.")}
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Consultar Vagas
        </Button>
    </div>
</Section>

<style>
    .service-hero-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 2rem;
    }

    .answer-box {
        margin-bottom: 2rem;
        padding: 1.4rem 1.6rem;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.92);
        border-left: 4px solid var(--primary-color);
        box-shadow: var(--shadow-sm);
    }

    .answer-box p {
        margin: 0;
        line-height: 1.75;
        color: var(--text-color);
    }

    .decision-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .decision-card {
        padding: 1.25rem;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(8, 186, 156, 0.1);
        box-shadow: var(--shadow-sm);
    }

    .decision-card h3 {
        margin-bottom: 0.5rem;
        font-size: 1.02rem;
    }

    .decision-card p {
        margin: 0;
        color: var(--text-light);
        line-height: 1.65;
    }

    .mid-cta-box {
        margin: 2rem 0;
        padding: 1.6rem;
        border-radius: var(--radius-lg);
        background: linear-gradient(135deg, rgba(8, 186, 156, 0.08), rgba(249, 236, 232, 0.7));
        border: 1px solid rgba(8, 186, 156, 0.14);
    }

    .mid-cta-box h3 {
        margin-bottom: 0.75rem;
    }

    .mid-cta-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: 1rem;
    }

    /* theme cards */
    .theme-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .theme-card {
        background: var(--white);
        padding: 2.5rem 2rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        text-align: center;
        border: 1px solid rgba(8, 186, 156, 0.05);
    }

    .card-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background: var(--primary-color);
        color: var(--white);
        border-radius: var(--radius-md);
        margin: 0 auto 1.5rem;
    }

    .card-icon :global(svg) {
        color: var(--white);
    }

    .theme-card h3 {
        margin-bottom: 1rem;
    }

    .theme-card p {
        color: var(--text-light);
        line-height: 1.65;
        margin: 0;
        font-size: 0.95rem;
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

    @media (max-width: 900px) {
        .decision-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 640px) {
        .service-hero-actions,
        .mid-cta-actions {
            flex-direction: column;
        }
    }
</style>
