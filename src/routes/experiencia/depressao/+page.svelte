<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, buildWhatsAppUrl, schemaIds } from "$lib";
    import { Phone, ChevronDown } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "Como sei se preciso de ajuda profissional?",
            answer: "Se os sinais de tristeza, desânimo ou perda de interesse persistem por semanas e afetam sua vida cotidiana, é um sinal de que buscar ajuda pode fazer sentido. Não é preciso esperar que as coisas fiquem muito difíceis para procurar um espaço de escuta.",
            open: false,
        },
        {
            question: "A terapia substitui a medicação?",
            answer: "A psicoterapia e a medicação são caminhos complementares. Em muitos casos, os dois recursos se somam de forma significativa. Dependendo da intensidade do que você sente, pode ser indicado também o acompanhamento com um psiquiatra.",
            open: false,
        },
        {
            question: "Quanto tempo leva para melhorar?",
            answer: "Cada pessoa é única, e o tempo do processo varia. Algumas pessoas percebem mudanças ao longo das primeiras semanas, enquanto outras precisam de mais tempo. O importante é respeitar seu ritmo e saber que o processo terapêutico é uma construção gradual.",
            open: false,
        },
        {
            question: "Posso fazer o atendimento online?",
            answer: "Sim! O atendimento online é regulamentado pelo Conselho Federal de Psicologia e é uma opção eficaz para quem tem dificuldade de deslocamento ou prefere o conforto de casa.",
            open: false,
        },
    ]);

    function toggleFaq(index: number) {
        faqItems = faqItems.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false,
        }));
    }

    let depressionSchema = $derived({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://psicologobernardo.com.br/experiencia/depressao/#webpage",
                url: "https://psicologobernardo.com.br/experiencia/depressao/",
                name: "Psicólogo para Depressão em Vitória ES – Acolhimento e Escuta",
                isPartOf: {
                    "@id": schemaIds.website,
                },
                mainEntity: {
                    "@id": "https://psicologobernardo.com.br/experiencia/depressao/#article",
                },
            },
            {
                "@type": "Article",
                "@id": "https://psicologobernardo.com.br/experiencia/depressao/#article",
                headline:
                    "Psicólogo para Depressão em Vitória ES – Acolhimento e Escuta",
                name: "Depressão: Como a Psicoterapia pode ajudar?",
                description:
                    "Psicólogo para depressão em Vitória ES. Acolhimento humanizado com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online.",
                author: {
                    "@id": schemaIds.person,
                },
                publisher: {
                    "@id": schemaIds.organization,
                },
                image: {
                    "@type": "ImageObject",
                    url: "https://psicologobernardo.com.br/images/experiencia/depressao-350.avif",
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
    title="Psicólogo para Depressão em Vitória ES – Acolhimento e Escuta"
    description="Psicólogo para depressão em Vitória ES. Acolhimento humanizado com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online."
    canonical="https://psicologobernardo.com.br/experiencia/depressao/"
    jsonLd={depressionSchema}
    preloadImage="/images/experiencia/depressao-350.avif"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Experiência", href: "/experiencia/" },
        { name: "Depressão" },
    ]}
/>

<section class="experience-hero">
    <div class="container">
        <h1>Psicólogo para Depressão em Vitória ES</h1>
        <p class="hero-subtitle">
            Psicoterapia em <strong>Jardim da Penha, Vitória ES</strong>. Um
            espaço seguro para atravessar momentos de tristeza profunda e falta
            de sentido.
        </p>
        <div class="hero-buttons">
            <Button
                href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre depressão.")}
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
                    srcset="/images/experiencia/depressao-200.avif 200w,
                            /images/experiencia/depressao-350.avif 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/avif"
                />
                <source
                    srcset="/images/experiencia/depressao-200.webp 200w,
                            /images/experiencia/depressao-350.webp 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/webp"
                />
                <img
                    src="/images/experiencia/depressao-350.webp"
                    alt="Acompanhamento para depressão - Psicólogo em Vitória ES"
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
            <p>Se você busca um psicólogo para depressão em Vitória, o atendimento acontece em consultório em Jardim da Penha, presencial, e também online. A Abordagem Centrada na Pessoa oferece um espaço de escuta genuína — sem julgamentos, sem pressa. A tristeza persistente merece atenção, e o primeiro passo é uma conversa inicial, sem compromisso de continuidade.</p>
        </div>
        <h2>Você está passando por um momento difícil?</h2>
        <p>
            Sentir-se triste às vezes é normal. Faz parte da vida. Mas quando a
            tristeza se torna persistente, quando as coisas que antes traziam
            alegria perdem o sentido, quando levantar da cama se torna um
            esforço enorme, pode ser sinal de que algo precisa de atenção.
        </p>
        <p>
            A depressão é mais do que tristeza passageira. Ela afeta como você
            se sente, como pensa e como age. Se você se identifica com isso,
            quero que saiba:
            <strong>você não está sozinho</strong>. E existe ajuda.
        </p>

        <h2>Sinais que merecem atenção</h2>
        <ul>
            <li>
                <strong>Tristeza persistente</strong> — sensação de vazio que não
                passa
            </li>
            <li>
                <strong>Perda de interesse</strong> — dificuldade em sentir prazer
                nas coisas que antes gostava
            </li>
            <li>
                <strong>Cansaço extremo</strong> — falta de energia mesmo para atividades
                simples
            </li>
            <li>
                <strong>Alterações no sono</strong> — dormir demais ou ter insônia
            </li>
            <li>
                <strong>Mudanças no apetite</strong> — comer muito ou perder a fome
            </li>
            <li>
                <strong>Dificuldade de concentração</strong> — mente nublada, esquecimentos
            </li>
            <li>
                <strong>Isolamento social</strong> — evitar pessoas e situações
            </li>
            <li>
                <strong>Pensamentos negativos</strong> — autocrítica excessiva, sensação
                de inutilidade
            </li>
            <li>
                <strong>Falta de esperança</strong> — sentir que nada vai melhorar
            </li>
        </ul>

        <h2>Como a psicoterapia pode ajudar?</h2>
        <p>
            Na <strong>Abordagem Centrada na Pessoa</strong>, eu ofereço um
            espaço de escuta genuína e acolhimento. Não há julgamentos. Não há
            pressa. O processo terapêutico acontece no seu ritmo.
        </p>
        <p>A terapia pode ajudar você a:</p>
        <ul class="benefit-list">
            <li>
                <strong>Compreender</strong> o que está por trás dos sentimentos
                de tristeza e desânimo
            </li>
            <li>
                <strong>Expressar</strong> emoções que talvez você tenha guardado
                por muito tempo
            </li>
            <li>
                <strong>Reconectar-se</strong> consigo mesmo e com o que tem significado
                para você
            </li>
            <li>
                <strong>Desenvolver</strong> recursos internos para lidar com os
                desafios
            </li>
            <li>
                <strong>Encontrar</strong> caminhos que façam sentido para você
            </li>
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
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma consulta")}
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
                <a href="/experiencia/ansiedade/">→ Psicólogo para Ansiedade</a>
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
        <h2>Perguntas Frequentes sobre Depressão e Psicoterapia</h2>
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
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre depressão.")}
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
    </div>
</Section>

<style>
    .hero-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin: 1.5rem 0 2rem;
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
