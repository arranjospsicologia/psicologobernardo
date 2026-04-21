<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, TrustPanel, buildWhatsAppUrl, schemaIds, siteProfile } from "$lib";
    import {
        Phone,
        ChevronDown,
        Monitor,
        Shield,
        Clock,
        Globe,
    } from "lucide-svelte";

    // Dynamic import to prevent CSS from being bundled in shared chunks
    const LazyDoctoraliaWidgetPromise = import(
        "$lib/components/LazyDoctoraliaWidget.svelte"
    );

    let faqItems = $state([
        {
            question: "Como funciona a terapia online?",
            answer: "O atendimento acontece via videochamada no Google Meet ou Zoom. O processo é idêntico ao presencial: escuta ativa, sigilo e o mesmo rigor ético, mas com a praticidade de ser feito de onde você estiver.",
            open: false,
        },
        {
            question: "É tão eficaz quanto o atendimento presencial?",
            answer: "Sim. Estudos científicos e o próprio Conselho Federal de Psicologia reconhecem que o vínculo terapêutico — que é o motor da mudança — pode ser plenamente estabelecido via vídeo, sem perda de qualidade clínica.",
            open: false,
        },
        {
            question: "Quais são os requisitos para a sessão?",
            answer: "Você precisa apenas de um dispositivo com câmera e microfone, uma conexão estável e, o mais importante: um lugar privativo onde você se sinta à vontade para falar sem ser interrompido.",
            open: false,
        },
        {
            question: "Atende brasileiros no exterior?",
            answer: "Sim. Atendo brasileiros residentes em diversos países, ajustando os horários conforme o fuso horário de cada localidade. O pagamento para quem reside fora é facilitado via transferência internacional ou cartões.",
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
                "@id": "https://psicologobernardo.com.br/servicos/terapia-online/#webpage",
                url: "https://psicologobernardo.com.br/servicos/terapia-online/",
                name: "Terapia Online com Psicólogo em Vitória ES",
                isPartOf: {
                    "@id": schemaIds.website,
                },
                about: {
                    "@id": schemaIds.serviceOnline,
                },
            },
            {
                "@type": "Service",
                "@id": schemaIds.serviceOnline,
                serviceType: "Psicoterapia Online",
                name: "Terapia Online",
                description:
                    "Psicoterapia online com a mesma qualidade e ética do atendimento presencial. Atendimento para todo o Brasil e brasileiros no exterior.",
                provider: {
                    "@id": schemaIds.organization,
                },
                areaServed: [
                    {
                        "@type": "Country",
                        name: "Brasil",
                    },
                ],
                availableChannel: {
                    "@type": "ServiceChannel",
                    serviceUrl: "https://meet.google.com",
                    serviceLocation: {
                        "@type": "Place",
                        name: "Consultório Virtual",
                    },
                },
                offers: {
                    "@type": "Offer",
                    url: "https://psicologobernardo.com.br/agendar/",
                    priceCurrency: "BRL",
                },
            },
            {
                "@type": "FAQPage",
                "@id": "https://psicologobernardo.com.br/servicos/terapia-online/#faq",
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
    title="Terapia Online | Atendimento para todo o Brasil e Exterior"
    description="Psicoterapia online pela Abordagem Centrada na Pessoa. Mesma qualidade e ética do atendimento presencial, com flexibilidade e segurança. Autorizada pelo CFP."
    canonical="https://psicologobernardo.com.br/servicos/terapia-online/"
    jsonLd={serviceSchema}
    preloadImage="/images/servicos/terapia-online-hero.webp"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/servicos/" },
        { name: "Terapia Online" },
    ]}
/>

<!-- Hero -->
<section class="service-hero">
    <div class="container">
        <h1>Terapia Online para todo o Brasil e Exterior</h1>
        <p class="hero-subtitle">
            O mesmo acolhimento e ética do atendimento presencial, com
            flexibilidade para se conectar de onde estiver, no seu ritmo.
        </p>
        <div class="service-hero-actions">
            <Button
                href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre terapia online.")}
                variant="primary"
            >
                <Phone size={20} />
                Falar no WhatsApp
            </Button>
            <Button href="/servicos/psicoterapia-individual/" variant="outline">
                Ver terapia individual
            </Button>
        </div>
        <div class="hero-image">
            <img
                src="/images/servicos/terapia-online-hero.webp"
                srcset="/images/servicos/terapia-online-hero-400w.webp 400w,
                        /images/servicos/terapia-online-hero-800w.webp 800w,
                        /images/servicos/terapia-online-hero.webp 1600w"
                sizes="(max-width: 480px) 400px,
                       (max-width: 768px) 800px,
                       900px"
                alt="Terapia online - Psicoterapia por videochamada com segurança e conforto"
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
        title="O que esperar do seu consultório online"
        intro="As sessões online são reconhecidas pelo CFP e oferecem a mesma eficácia clínica do presencial, com o diferencial da praticidade."
        primaryHref={buildWhatsAppUrl("Olá, gostaria de entender como funciona a terapia online para mim.")}
        primaryLabel="Agendar primeira conversa"
        secondaryHref="/agendar/"
        secondaryLabel="Ver agenda online"
    />
</Section>

<!-- Content -->
<Section variant="beige">
    <article class="service-content">
        <!-- Answer Box -->
        <div class="answer-box">
            <p>
                A terapia online é o atendimento psicológico realizado via videochamada segura (Google Meet ou Zoom). 
                Indicada para quem reside fora de Vitória, brasileiros no exterior ou quem busca praticidade, a 
                modalidade mantém o mesmo rigor ético e clínico do consultório. As sessões duram 
                {siteProfile.sessionMinutes.individual} minutos e são autorizadas pelo Conselho Federal de Psicologia.
            </p>
        </div>

        <!-- Decision Grid -->
        <div class="decision-grid">
            <article class="decision-card">
                <h3>Para quem é</h3>
                <p>Quem viaja muito, mora longe do consultório ou prefere o conforto e a privacidade do próprio ambiente.</p>
            </article>
            <article class="decision-card">
                <h3>Como acontece</h3>
                <p>Encontros semanais por vídeo, com links criptografados e foco total na sua experiência, sem deslocamentos.</p>
            </article>
            <article class="decision-card">
                <h3>O que você precisa</h3>
                <p>Internet estável, um dispositivo com câmera e um lugar onde você não possa ser ouvido ou interrompido.</p>
            </article>
        </div>

        <h2>O que é e como funciona a terapia online</h2>
        <p>
            A terapia online oferece o mesmo acolhimento e ética do atendimento
            presencial, com a flexibilidade de se conectar de onde estiver.
            Autorizada pelo Conselho Federal de Psicologia (Resolução 11/2018),
            a modalidade permite encontros por videochamadas seguras e criptografadas.
        </p>
        <p>
            Ideal para quem mora fora de <strong>Vitória</strong>, vive em
            outros estados ou países, ou prefere a praticidade de fazer terapia
            de casa. Atendo
            <strong
                >pessoas de todo o Brasil e brasileiros vivendo no exterior</strong
            >, adaptando horários para diferentes fusos horários.
        </p>

        <h2>Vantagens reais da modalidade online</h2>
        <p>
            Diferente do que muitos pensam, o atendimento online não é uma "versão simplificada" da terapia. 
            Ele oferece benefícios práticos que muitas vezes facilitam a continuidade do processo:
        </p>
        <ul>
            <li>
                <strong>Flexibilidade de localização</strong> — sua terapia acompanha você, mesmo em viagens
            </li>
            <li><strong>Economia de tempo</strong> — elimine o estresse e os custos de deslocamento no trânsito</li>
            <li><strong>Ambiente familiar</strong> — estar no seu próprio espaço pode ajudar no relaxamento inicial</li>
            <li>
                <strong>Acessibilidade total</strong> — permite o cuidado para quem tem dificuldades de locomoção
            </li>
            <li>
                <strong>Continuidade preservada</strong> — menos cancelamentos por imprevistos de logística
            </li>
        </ul>

        <h2>Os requisitos para uma boa sessão online</h2>
        <p>
            Para que o processo flua com a mesma profundidade do presencial, recomendo alguns cuidados simples 
            no momento da sessão:
        </p>
        <ul>
            <li><strong>Conexão estável</strong> — de preferência Wi-Fi ou cabo para evitar quedas no áudio</li>
            <li><strong>Lugar privativo</strong> — garantir que ninguém entrará no cômodo durante a sessão</li>
            <li><strong>Fones de ouvido</strong> — aumentam a percepção de sigilo e melhoram o foco na fala</li>
            <li><strong>Bateria carregada</strong> — para não interromper o raciocínio clínico por problemas técnicos</li>
        </ul>

        <!-- Mid-CTA -->
        <div class="mid-cta-box">
            <h3>A dúvida de muitos é: "conseguirei criar vínculo por vídeo?"</h3>
            <p>
                A experiência clínica mostra que o vínculo se constrói na qualidade da escuta e da aceitação, 
                o que atravessa a tela com facilidade. Se quiser testar, podemos agendar uma conversa inicial.
            </p>
            <div class="mid-cta-actions">
                <Button
                    href={buildWhatsAppUrl("Olá, gostaria de testar se a terapia online funciona para mim.")}
                    variant="primary"
                >
                    Falar agora
                </Button>
                <Button href="/agendar/" variant="outline">
                    Ver horários
                </Button>
            </div>
        </div>

        <h2>Atendimento para brasileiros no exterior</h2>
        <p>
            Viver em outro país traz desafios emocionais únicos. Atendo brasileiros que precisam falar sobre 
            suas experiências na sua língua nativa, garantindo que as nuances culturais e emocionais sejam 
            plenamente compreendidas pelo terapeuta.
        </p>

        <h2>Segurança e ética digital</h2>
        <p>
            Utilizo ferramentas que respeitam a LGPD e as normas do CFP. Não há gravação de sessões e 
            os links são gerados exclusivamente para o seu horário. O sigilo profissional é 
            rigorosamente o mesmo do atendimento físico.
        </p>
    </article>
</Section>

<!-- Info Grid -->
<Section variant="white">
    <div class="info-grid">
        <div class="info-card">
            <Monitor size={42} />
            <h3>Videochamadas Seguras</h3>
            <p>Uso de Google Meet ou Zoom com criptografia de ponta a ponta para sua total privacidade.</p>
        </div>
        <div class="info-card">
            <Shield size={42} />
            <h3>Sigilo Garantido</h3>
            <p>Atendimento 100% regulamentado pelo Código de Ética do Psicólogo e normas do CFP.</p>
        </div>
        <div class="info-card">
            <Clock size={42} />
            <h3>Horários Flexíveis</h3>
            <p>Sessões organizadas para se adaptar à sua rotina e fuso horário, se você morar fora.</p>
        </div>
        <div class="info-card">
            <Globe size={42} />
            <h3>Brasil e Exterior</h3>
            <p>Acolhimento para brasileiros em qualquer lugar do mundo, sem barreiras geográficas.</p>
        </div>
    </div>
</Section>

<!-- CTA Box -->
<Section variant="beige">
    <div class="cta-box">
        <h3>Agende sua terapia online</h3>
        <p>
            Escolha um horário na agenda online ou, se preferir, me envie uma mensagem pelo WhatsApp para 
            combinarmos o melhor momento.
        </p>
        <div class="widget-container">
            {#await LazyDoctoraliaWidgetPromise then module}
                <module.default />
            {:catch}
                <a
                    href={siteProfile.externalLinks.doctoralia}
                    rel="nofollow"
                >
                    Agendar via Doctoralia
                </a>
            {/await}
        </div>
        <p>Ou fale comigo diretamente agora:</p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de agendar terapia online.")}
            variant="primary"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
    </div>
</Section>

<!-- Related Links -->
<Section variant="white">
    <div class="related-links">
        <h3>Veja também</h3>
        <ul>
            <li>
                <a href="/servicos/psicoterapia-individual/"
                    >→ Psicoterapia Individual em Vitória</a
                >
            </li>
            <li>
                <a href="/servicos/terapia-de-casal/"
                    >→ Terapia de Casal Online</a
                >
            </li>
            <li>
                <a href="/psicologo-vitoria-es/"
                    >→ Psicólogo em Vitória ES</a
                >
            </li>
            <li>
                <a href="/sobre/">→ Conheça a Abordagem Centrada na Pessoa</a>
            </li>
        </ul>
    </div>
</Section>

<!-- FAQ -->
<Section variant="beige" id="faq">
    <div class="section-header">
        <h2>Dúvidas comuns sobre o atendimento online</h2>
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
        <h2>Pronto para começar sua jornada online?</h2>
        <p>Basta um clique para agendarmos a sua primeira sessão.</p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de agendar terapia online.")}
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Agendar Agora
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
