<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, TrustPanel, buildWhatsAppUrl, schemaIds, siteProfile } from "$lib";
    import { Phone, ChevronDown } from "lucide-svelte";

    // Dynamic import to prevent CSS from being bundled in shared chunks
    const LazyDoctoraliaWidgetPromise = import(
        "$lib/components/LazyDoctoraliaWidget.svelte"
    );

    let faqItems = $state([
        {
            question: "Como funciona a psicoterapia individual?",
            answer: "A psicoterapia individual é um espaço de escuta e elaboração da sua experiência. As sessões costumam acontecer uma vez por semana, com cerca de 60 minutos, e o processo é construído a partir do que faz sentido para você.",
            open: false,
        },
        {
            question: "Preciso estar em crise para começar?",
            answer: "Não. Muitas pessoas procuram terapia antes de uma crise mais aguda, quando percebem ansiedade frequente, cansaço emocional, conflitos recorrentes ou dificuldade de sustentar decisões importantes.",
            open: false,
        },
        {
            question: "O que esperar da primeira sessão?",
            answer: "A primeira sessão, às vezes, é uma conversa inicial para entender o que está te trazendo, esclarecer dúvidas e perceber se esse espaço faz sentido para você. Ela pode ser também um ambiente terapêutico muito profundo. Não há obrigação de continuidade se você não se sentir à vontade.",
            open: false,
        },
        {
            question: "Atende presencial e online?",
            answer: "Sim. O atendimento pode acontecer presencialmente em Jardim da Penha, Vitória, ou online. A escolha depende da sua rotina, deslocamento e preferência.",
            open: false,
        },
        {
            question: "A terapia dá respostas prontas?",
            answer: "Não. O trabalho não é oferecer fórmulas, mas construir um espaço de compreensão mais profunda do que você vive, para que suas escolhas fiquem mais claras e sustentáveis.",
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
                "@id": "https://psicologobernardo.com.br/servicos/psicoterapia-individual/#webpage",
                url: "https://psicologobernardo.com.br/servicos/psicoterapia-individual/",
                name: "Psicoterapia Individual em Vitória — Quando Faz Sentido e Como Começar",
                isPartOf: {
                    "@id": schemaIds.website,
                },
                about: {
                    "@id": schemaIds.serviceIndividual,
                },
            },
            {
                "@type": "Service",
                "@id": schemaIds.serviceIndividual,
                serviceType: "Psicoterapia Individual",
                name: "Psicoterapia individual em Vitória",
                description:
                    "Atendimento psicológico individual em Vitória ES e online, com base na Abordagem Centrada na Pessoa.",
                provider: {
                    "@id": schemaIds.organization,
                },
                areaServed: [
                    {
                        "@type": "City",
                        name: "Vitória",
                        containedInPlace: {
                            "@type": "State",
                            name: "ES",
                        },
                    },
                    {
                        "@type": "Country",
                        name: "Brasil",
                    },
                ],
                offers: {
                    "@type": "Offer",
                    url: "https://psicologobernardo.com.br/agendar/",
                    priceCurrency: "BRL",
                },
            },
            {
                "@type": "FAQPage",
                "@id": "https://psicologobernardo.com.br/servicos/psicoterapia-individual/#faq",
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
    title="Psicoterapia Individual em Vitória — Quando Faz Sentido e Como Começar"
    description="Entenda quando a psicoterapia individual faz sentido, o que esperar da primeira sessão e como agendar. Consultório em Jardim da Penha, Vitória, e online."
    canonical="https://psicologobernardo.com.br/servicos/psicoterapia-individual/"
    jsonLd={serviceSchema}
    preloadImage="/images/servicos/psicoterapia-individual-hero.webp"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/servicos/" },
        { name: "Psicoterapia Individual" },
    ]}
/>

<!-- Hero -->
<section class="service-hero">
    <div class="container">
        <h1>Psicoterapia Individual em Vitória</h1>
        <p class="hero-subtitle">
            Quando ansiedade, desânimo ou conflitos começam a pesar demais, a terapia pode
            ser o espaço para entender o que está acontecendo e decidir o próximo passo.
        </p>
        <div class="service-hero-actions">
            <Button
                href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre psicoterapia individual.")}
                variant="primary"
            >
                <Phone size={20} />
                Iniciar pelo WhatsApp
            </Button>
            <Button href="/psicologo-vitoria-es/" variant="outline">
                Ver consultório em Vitória
            </Button>
        </div>
        <div class="hero-image">
            <img
                src="/images/servicos/psicoterapia-individual-hero.webp"
                srcset="/images/servicos/psicoterapia-individual-hero-400w.webp 400w,
                        /images/servicos/psicoterapia-individual-hero-800w.webp 800w,
                        /images/servicos/psicoterapia-individual-hero.webp 1600w"
                sizes="(max-width: 400px) 400px,
                       (max-width: 800px) 800px,
                       900px"
                alt="Atendimento de psicoterapia individual em consultório acolhedor - Vitória ES"
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
        title="Informações práticas para decidir com calma"
        intro="Tudo o que vale saber antes de entrar em contato."
        primaryHref={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre psicoterapia individual.")}
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
                Se você procura psicoterapia individual em Vitória, o atendimento pode fazer sentido
                quando ansiedade, desânimo, conflitos recorrentes, dúvidas importantes ou sensação de
                esgotamento começam a ocupar espaço demais. O processo acontece em Jardim da Penha,
                Vitória, ou online, com sessões de {siteProfile.sessionMinutes.individual} minutos e uma
                condução centrada na sua experiência real.
            </p>
        </div>

        <!-- Decision Grid -->
        <div class="decision-grid">
            <article class="decision-card">
                <h3>Quando costuma ajudar</h3>
                <p>Quando algo pesa demais, se repete demais ou fica difícil demais de sustentar sozinho.</p>
            </article>
            <article class="decision-card">
                <h3>Como começa</h3>
                <p>Primeiro contato breve, primeira sessão para entender a demanda e alinhamento honesto sobre formato e frequência.</p>
            </article>
            <article class="decision-card">
                <h3>O que não precisa acontecer antes</h3>
                <p>Você não precisa chegar em crise extrema, nem saber explicar tudo com clareza perfeita.</p>
            </article>
        </div>

        <h2>Quando a psicoterapia individual costuma fazer sentido</h2>
        <p>
            A psicoterapia individual é um espaço de escuta e autoconhecimento,
            voltado a quem deseja compreender melhor suas emoções, relações e
            escolhas. É comum buscar terapia em momentos de ansiedade, tristeza, estresse,
            indecisão ou quando a vida parece sem sentido.
        </p>
        <ul>
            <li>
                <strong>Ansiedade e estresse</strong> — sentimentos de tensão constante,
                preocupação excessiva
            </li>
            <li>
                <strong>Tristeza e falta de sentido</strong> — sensação de vazio,
                desmotivação
            </li>
            <li>
                <strong>Dificuldades nos relacionamentos</strong> — conflitos recorrentes,
                problemas de comunicação
            </li>
            <li>
                <strong>Transições de vida</strong> — mudanças de carreira, términos,
                luto
            </li>
            <li>
                <strong>Busca por autoconhecimento</strong> — desejo de viver de
                forma mais autêntica
            </li>
        </ul>

        <h2>Como funciona, na prática</h2>
        <p>
            Na <strong>Abordagem Centrada na Pessoa</strong> (ACP), o processo acontece
            no ritmo de cada pessoa, sem julgamentos ou imposições. A terapia se baseia em
            três pilares fundamentais: <strong>empatia, aceitação incondicional e autenticidade</strong>.
            Isso significa que você encontrará um espaço onde pode ser quem realmente é, sem máscaras.
        </p>
        <p>
            Cada sessão dura aproximadamente <strong>{siteProfile.sessionMinutes.individual} minutos</strong> e acontece
            semanalmente, embora a frequência possa ser ajustada. O processo terapêutico
            não segue um roteiro pré-definido — ele se desenrola naturalmente a partir
            do que você traz para o encontro.
        </p>

        <!-- Mid-CTA -->
        <div class="mid-cta-box">
            <h3>Não tem certeza se é o momento certo? Começamos por essa conversa.</h3>
            <p>
                Basta resumir em poucas linhas o que está vivendo. A partir daí, alinhamos se
                faz sentido, qual formato e como funciona.
            </p>
            <div class="mid-cta-actions">
                <Button
                    href={buildWhatsAppUrl("Olá, gostaria de entender se a psicoterapia individual faz sentido para mim agora.")}
                    variant="primary"
                >
                    Falar pelo WhatsApp
                </Button>
                <Button href="/psicologo-vitoria-es/" variant="outline">
                    Ver consultório em Vitória
                </Button>
            </div>
        </div>

        <h2>O que esperar da primeira sessão</h2>
        <p>
            A primeira sessão, às vezes, é uma conversa inicial para entender o que está te trazendo, 
            esclarecer dúvidas e perceber se esse espaço faz sentido para você. Ela pode ser também 
            um ambiente terapêutico muito profundo. Não há obrigação de continuidade se você não se sentir à vontade.
        </p>
        <p>
            Não é uma prova de que você precisa "falar certo" ou chegar
            sabendo exatamente o que quer dizer.
        </p>
        <p>
            Também é o momento de alinhar aspectos práticos, como frequência, modalidade
            presencial ou online e expectativas iniciais sobre o acompanhamento.
        </p>

        <h2>Dúvidas comuns e objeções honestas</h2>
        <ul>
            <li><strong>Não preciso estar em crise</strong> para começar.</li>
            <li><strong>Não é necessário saber se expressar perfeitamente</strong> para a terapia fazer sentido.</li>
            <li><strong>O processo não acelera por obrigação</strong>; ele precisa respeitar o seu tempo.</li>
            <li><strong>A terapia não substitui decisões por você</strong>, mas pode tornar essas decisões mais claras.</li>
        </ul>

        <h2>Por que escolher a Abordagem Centrada na Pessoa?</h2>
        <p>
            A <strong>Abordagem Centrada na Pessoa</strong> foi desenvolvida
            pelo psicólogo humanista
            <strong>Carl Rogers</strong> e se baseia em uma visão positiva do
            ser humano. Ela parte do princípio de que cada pessoa possui uma
            <strong>tendência natural ao crescimento e à autorrealização</strong>.
        </p>
        <p>
            Na prática, isso significa que o terapeuta não se coloca como um
            especialista que vai "consertar" você ou te dizer o que fazer. Em
            vez disso, o terapeuta oferece um ambiente seguro e acolhedor onde
            você pode explorar livremente seus pensamentos e sentimentos.
        </p>

        <h2>Atendimento em Vitória e online</h2>
        <p>
            Atendo presencialmente em <strong
                ><a href="/psicologo-vitoria-es/psicologo-jardim-da-penha/">Jardim da Penha (Vitória - ES)</a></strong>
            e também
            <a href="/servicos/terapia-online/">online</a>, acolhendo pessoas de
            Praia do Canto, Mata da Praia, Enseada do Suá, Barro Vermelho, Bento
            Ferreira, Vila Velha e Serra.
        </p>
        <p>
            Se a sua busca começou por uma dor específica, você também pode explorar páginas como
            <a href="/experiencia/ansiedade/">ansiedade</a>,
            <a href="/experiencia/depressao/">depressão</a> e
            <a href="/experiencia/burnout/">burnout</a>.
        </p>
    </article>
</Section>

<!-- CTA Box -->
<Section variant="white">
    <div class="cta-box">
        <h3>Agende sua primeira conversa</h3>
        <p>
            Se quiser, me escreva brevemente o que está te trazendo. A partir daí, alinhamos se este é
            o melhor formato para você neste momento.
        </p>
        <div class="widget-container">
            {#await LazyDoctoraliaWidgetPromise then module}
                <module.default />
            {:catch}
                <a
                    href={siteProfile.externalLinks.doctoralia}
                    rel="nofollow"
                >
                    Agendar consulta via Doctoralia
                </a>
            {/await}
        </div>
        <p>Ou fale comigo diretamente pelo WhatsApp:</p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre psicoterapia individual.")}
            variant="primary"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
    </div>
</Section>

<!-- Related Links -->
<Section variant="beige">
    <div class="related-links">
        <h3>Veja também</h3>
        <ul>
            <li><a href="/psicologo-vitoria-es/">→ Psicólogo em Vitória ES</a></li>
            <li>
                <a href="/psicologo-vitoria-es/psicologo-jardim-da-penha/"
                    >→ Consultório em Jardim da Penha</a
                >
            </li>
            <li>
                <a href="/servicos/terapia-online/"
                    >→ Terapia Online para todo o Brasil</a
                >
            </li>
            <li>
                <a href="/servicos/terapia-de-casal/">→ Terapia de Casal</a>
            </li>
        </ul>
    </div>
</Section>

<!-- FAQ -->
<Section variant="white" id="faq">
    <div class="section-header">
        <h2>Perguntas frequentes sobre psicoterapia individual</h2>
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
        <h2>Se chegou até aqui, talvez o próximo passo seja uma conversa</h2>
        <p>
            Você não precisa ter certeza de tudo para começar. Uma mensagem curta já é suficiente.
        </p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre psicoterapia individual.")}
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Agendar Consulta
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
