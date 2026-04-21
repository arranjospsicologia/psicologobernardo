<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, buildWhatsAppUrl, schemaIds } from "$lib";
    import { Phone, ChevronDown } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "Como a terapia pode me ajudar com a ansiedade?",
            answer: "A terapia oferece um espaço seguro para você compreender a raiz da sua ansiedade, desenvolver recursos internos para lidar com ela e fazer escolhas mais conscientes no dia a dia. Na Abordagem Centrada na Pessoa, trabalhamos com escuta empática para ajudar você a se reconectar consigo mesmo.",
            open: false,
        },
        {
            question: "Quantas sessões são necessárias para tratar ansiedade?",
            answer: "Não existe um número fixo de sessões, pois cada pessoa é única. O processo terapêutico se desenvolve no seu ritmo. Algumas pessoas percebem mudanças ao longo das primeiras semanas, enquanto outras se beneficiam de um acompanhamento mais longo. O mais importante é respeitar o tempo que o seu processo precisa.",
            open: false,
        },
        {
            question: "A terapia pode substituir medicação para ansiedade?",
            answer: "A psicoterapia e a medicação são recursos complementares. Em alguns casos, a terapia pode ser suficiente; em outros, pode ser necessário o acompanhamento conjunto com um psiquiatra. Isso depende da intensidade do que você vive e da sua história.",
            open: false,
        },
        {
            question: "Posso fazer o atendimento online?",
            answer: "Sim! O atendimento online é autorizado pelo Conselho Federal de Psicologia e mantém a mesma qualidade e ética do atendimento presencial. É uma ótima opção para quem tem dificuldade de deslocamento ou prefere o conforto de casa.",
            open: false,
        },
    ]);

    function toggleFaq(index: number) {
        faqItems = faqItems.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false,
        }));
    }

    let anxietySchema = $derived({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://psicologobernardo.com.br/experiencia/ansiedade/#webpage",
                url: "https://psicologobernardo.com.br/experiencia/ansiedade/",
                name: "Psicólogo para Ansiedade em Vitória ES - Acolhimento Humanizado",
                isPartOf: {
                    "@id": schemaIds.website,
                },
                mainEntity: {
                    "@id": "https://psicologobernardo.com.br/experiencia/ansiedade/#article",
                },
            },
            {
                "@type": "Article",
                "@id": "https://psicologobernardo.com.br/experiencia/ansiedade/#article",
                headline:
                    "Psicólogo para Ansiedade em Vitória ES – Acolhimento Humanizado",
                name: "Ansiedade: Como a Psicoterapia pode ajudar?",
                description:
                    "Psicólogo para ansiedade em Vitória ES. Acolhimento humanizado com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online.",
                author: {
                    "@id": schemaIds.person,
                },
                publisher: {
                    "@id": schemaIds.organization,
                },
                image: {
                    "@type": "ImageObject",
                    url: "https://psicologobernardo.com.br/images/experiencia/ansiedade-350.avif",
                    width: 350,
                    height: 350,
                },
                inLanguage: "pt-BR",
                mentions: {
                    "@type": "Service",
                    "@id": schemaIds.serviceIndividual,
                    name: "Psicoterapia Individual",
                },
            },
            {
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
        ],
    });
</script>

<SEO
    title="Psicólogo para Ansiedade em Vitória ES – Acolhimento Humanizado"
    description="Psicólogo para ansiedade em Vitória ES. Acolhimento humanizado com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online."
    canonical="https://psicologobernardo.com.br/experiencia/ansiedade/"
    jsonLd={anxietySchema}
    preloadImage="/images/experiencia/ansiedade-350.avif"
/>

<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Experiência", href: "/experiencia/" },
        { name: "Ansiedade" },
    ]}
/>

<section class="experience-hero">
    <div class="container">
        <h1>Psicólogo para Ansiedade em Vitória ES</h1>
        <p class="hero-subtitle">
            Acolhimento humanizado em <strong
                >Jardim da Penha, Vitória ES</strong
            >, para quem convive com a ansiedade.
        </p>
        <div class="hero-buttons">
            <Button
                href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre ansiedade.")}
                variant="primary"
                size="lg"
            >
                <Phone size={20} />
                Agendar primeira conversa
            </Button>
            <Button href="/servicos/psicoterapia-individual/" variant="outline" size="lg">
                Ver psicoterapia individual
            </Button>
        </div>
        <div class="hero-image">
            <picture>
                <source
                    srcset="/images/experiencia/ansiedade-200.avif 200w,
                            /images/experiencia/ansiedade-350.avif 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/avif"
                />
                <source
                    srcset="/images/experiencia/ansiedade-200.webp 200w,
                            /images/experiencia/ansiedade-350.webp 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/webp"
                />
                <img
                    src="/images/experiencia/ansiedade-350.webp"
                    alt="Acolhimento para ansiedade - Psicólogo em Vitória ES"
                    width="350"
                    height="350"
                    loading="eager"
                    fetchpriority="high"
                />
            </picture>
        </div>
    </div>
</section>

<Section variant="white">
    <article class="experience-content">
        <div class="answer-box">
            <p>Se você procura um psicólogo para ansiedade em Vitória, o atendimento acontece em consultório em Jardim da Penha, presencial, e também online. A Abordagem Centrada na Pessoa acolhe o que você está vivendo sem rótulos, buscando entender o que a ansiedade está tentando comunicar. O primeiro passo é uma conversa inicial, sem compromisso de continuidade.</p>
        </div>
        <h2>Você convive com ansiedade?</h2>
        <p>
            A ansiedade faz parte da vida. Ela nos ajuda a reagir diante de
            situações importantes, nos prepara para desafios. Porém, quando a
            ansiedade se torna intensa demais, frequente demais ou aparece sem
            motivo aparente, ela pode começar a atrapalhar a sua vida, seus
            relacionamentos e sua saúde.
        </p>
        <p>
            Se você convive com <strong>pensamentos acelerados</strong>,
            <strong>preocupação constante</strong>,
            <strong>dificuldade para relaxar</strong>,
            <strong>tensão muscular</strong>, <strong>insônia</strong> ou
            <strong>sensação de que algo ruim vai acontecer</strong>, você não
            está sozinho.
        </p>

        <h2>Como a psicoterapia ajuda a ansiedade?</h2>
        <p>
            Na <strong>Abordagem Centrada na Pessoa</strong> (ACP), eu trabalho com
            a escuta empática e genuína. Isso significa que você terá um espaço seguro
            para falar sobre o que sente, sem julgamentos. O objetivo não é simplesmente
            "eliminar" a ansiedade, mas compreender o que ela está tentando te dizer.
        </p>
        <p>No processo terapêutico, você pode desenvolver:</p>
        <ul class="benefit-list">
            <li>
                <strong>Maior consciência</strong> sobre os gatilhos e situações
                que intensificam sua ansiedade
            </li>
            <li>
                <strong>Autocompreensão</strong> sobre como você reage ao estresse
                e à pressão
            </li>
            <li>
                <strong>Recursos internos</strong> para lidar com os sinais e sintomas
                de forma mais saudável
            </li>
            <li>
                <strong>Escolhas mais conscientes</strong> em relação ao seu estilo
                de vida e relacionamentos
            </li>
            <li>
                <strong>Aceitação</strong> de si mesmo, diminuindo a autocrítica
                excessiva
            </li>
        </ul>

        <h2>Sinais de que a ansiedade pode precisar de atenção</h2>
        <p>
            Esses sinais não precisam estar todos presentes ao mesmo tempo, e
            nenhum deles define quem você é. Eles são formas que o corpo e a
            mente encontram de sinalizar que algo precisa de atenção. Reconhecer
            esse movimento em si mesmo já é um primeiro passo importante.
        </p>
        <ul>
            <li>
                Preocupação excessiva ou constante, mesmo por coisas pequenas
            </li>
            <li>
                Dificuldade para dormir ou acordar várias vezes durante a noite
            </li>
            <li>
                Sensação de coração acelerado, falta de ar ou tensão muscular
                frequente
            </li>
            <li>Evitar situações por medo ou desconforto</li>
            <li>Irritabilidade ou dificuldade de concentração</li>
            <li>Crises de pânico ou sensação de perda de controle</li>
        </ul>
    </article>
</Section>

<Section variant="beige">
    <div class="cta-box">
        <h3>Se você sente que é hora de cuidar disso</h3>
        <p>
            Escreva em poucas linhas o que está vivendo. Respondo com calma
            e sem compromisso de continuidade.
        </p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma consulta sobre ansiedade")}
            variant="primary"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
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
            <li><a href="/servicos/terapia-online/">→ Terapia Online</a></li>
            <li>
                <a href="/experiencia/depressao/">→ Psicólogo para Depressão</a>
            </li>
            <li>
                <a href="/experiencia/burnout/">→ Psicólogo para Burnout</a>
            </li>
            <li>
                <a href="/psicologo-vitoria-es/">→ Atendimento presencial em Vitória</a>
            </li>
            <li>
                <a href="/psicologo-vitoria-es/psicologo-jardim-da-penha/">→ Consultório em Jardim da Penha</a>
            </li>
        </ul>
    </div>
</Section>

<Section variant="beige" id="faq">
    <div class="section-header">
        <h2>Perguntas Frequentes sobre Ansiedade e Psicoterapia</h2>
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
        <h2>Quando fizer sentido, o primeiro passo pode ser simples</h2>
        <p>
            Você pode escrever em poucas linhas o que está vivendo. A partir daí,
            alinhamos o formato mais adequado, presencial em Vitória ou online.
        </p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre ansiedade.")}
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
    </div>
</Section>

<style>
    /* Hero buttons */
    .hero-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin: 1.5rem 0 2rem;
    }

    /* Answer box */
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

    /* Lista com marcadores visuais (padrão — sinais) */
    .experience-content ul {
        list-style: none;
        margin: 1rem 0 1.5rem 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .experience-content li {
        position: relative;
        padding: 0.75rem 1rem 0.75rem 1.25rem;
        background: var(--secondary-light);
        border-radius: var(--radius-sm);
        line-height: 1.65;
        border-left: 3px solid var(--primary-color);
    }

    /* Lista turquesa — benefícios da psicoterapia */
    .benefit-list {
        padding: 1.5rem 1.75rem;
        background: rgba(8, 186, 156, 0.07);
        border-radius: var(--radius-md);
        border: 1px solid rgba(8, 186, 156, 0.2);
    }

    .benefit-list li {
        background: transparent;
        border-left: none;
        padding: 0.5rem 0 0.5rem 2.25rem;
        border-radius: 0;
    }

    .benefit-list li::before {
        content: "✓";
        position: absolute;
        left: 0.5rem;
        color: var(--primary-color);
        font-weight: 700;
        font-size: 1rem;
    }

    /* FAQ */
    .faq-item {
        background: var(--white);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
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

    @media (max-width: 560px) {
        .hero-buttons {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
