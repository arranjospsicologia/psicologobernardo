<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, buildWhatsAppUrl, schemaIds } from "$lib";
    import { Phone, ChevronDown } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "Como a terapia pode melhorar minha autoestima?",
            answer: "A terapia oferece um espaço de aceitação incondicional onde você pode explorar suas experiências, reconhecer padrões de autocrítica e desenvolver uma relação mais compassiva consigo mesmo. Na Abordagem Centrada na Pessoa, a qualidade da relação terapêutica é central para esse processo.",
            open: false,
        },
        {
            question: "Quanto tempo leva para melhorar a autoestima?",
            answer: "Não existe um prazo fixo, pois cada pessoa tem seu próprio ritmo. Algumas pessoas começam a perceber mudanças ao longo das primeiras semanas, enquanto outras se beneficiam de um processo mais longo. O importante é respeitar seu tempo e suas necessidades.",
            open: false,
        },
        {
            question: "A autoestima pode mudar com o tempo?",
            answer: "Sim. A autoestima não é fixa — ela faz parte da forma como você se relaciona consigo mesmo, e essa relação pode ser trabalhada. Com o processo terapêutico, é possível desenvolver uma autoestima mais saudável, baseada em aceitação, autocompaixão e autenticidade.",
            open: false,
        },
        {
            question: "Posso fazer terapia para autoestima online?",
            answer: "Sim! O atendimento online é autorizado pelo Conselho Federal de Psicologia e mantém a mesma qualidade do atendimento presencial. É uma ótima opção para quem prefere o conforto de casa ou tem dificuldade de deslocamento.",
            open: false,
        },
    ]);

    function toggleFaq(index: number) {
        faqItems = faqItems.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false,
        }));
    }

    let experienceSchema = $derived({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://psicologobernardo.com.br/experiencia/autoestima/#webpage",
                url: "https://psicologobernardo.com.br/experiencia/autoestima/",
                name: "Psicólogo para Autoestima em Vitória ES – Acolhimento e Autoconhecimento",
                isPartOf: {
                    "@id": schemaIds.website,
                },
                mainEntity: {
                    "@id": "https://psicologobernardo.com.br/experiencia/autoestima/#article",
                },
            },
            {
                "@type": "Article",
                "@id": "https://psicologobernardo.com.br/experiencia/autoestima/#article",
                headline:
                    "Psicólogo para Autoestima em Vitória ES – Acolhimento e Autoconhecimento",
                name: "Baixa Autoestima: Como a Psicoterapia pode ajudar?",
                description:
                    "Psicólogo para autoestima em Vitória ES. Acolhimento humanizado com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online.",
                author: {
                    "@id": schemaIds.person,
                },
                publisher: {
                    "@id": schemaIds.organization,
                },
                image: {
                    "@type": "ImageObject",
                    url: "https://psicologobernardo.com.br/images/experiencia/autoestima-350.avif",
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
    title="Psicólogo para Autoestima em Vitória ES – Acolhimento e Autoconhecimento"
    description="Psicólogo para autoestima em Vitória ES. Acolhimento humanizado com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online."
    canonical="https://psicologobernardo.com.br/experiencia/autoestima/"
    jsonLd={experienceSchema}
    preloadImage="/images/experiencia/autoestima-350.avif"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Experiência", href: "/experiencia/" },
        { name: "Autoestima" },
    ]}
/>

<section class="experience-hero">
    <div class="container">
        <h1>Psicólogo para Autoestima em Vitória ES</h1>
        <p class="hero-subtitle">
            Acolhimento humanizado em <strong
                >Jardim da Penha, Vitória ES</strong
            >, para quem busca uma relação mais gentil consigo mesmo.
        </p>
        <div class="hero-buttons">
            <Button
                href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre autoestima.")}
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
                    srcset="/images/experiencia/autoestima-200.avif 200w,
                            /images/experiencia/autoestima-350.avif 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/avif"
                />
                <source
                    srcset="/images/experiencia/autoestima-200.webp 200w,
                            /images/experiencia/autoestima-350.webp 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/webp"
                />
                <img
                    src="/images/experiencia/autoestima-350.webp"
                    alt="Cuidados da autoestima - Psicólogo em Vitória ES"
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
            <p>Se você busca trabalhar autoestima com um psicólogo em Vitória, o atendimento acontece em consultório em Jardim da Penha, presencial, e também online. A Abordagem Centrada na Pessoa cria um espaço de aceitação incondicional — onde você pode explorar sua relação consigo mesmo, sem julgamentos. O primeiro passo é uma conversa inicial.</p>
        </div>
        <h2>O que é autoestima, afinal?</h2>
        <p>
            A autoestima é a forma como você se vê, se valoriza e se relaciona
            consigo mesmo. Ela influencia diretamente suas escolhas, seus
            relacionamentos e sua qualidade de vida. Quando a autoestima está
            baixa, é comum sentir que você não é suficiente, que não merece
            coisas boas ou que precisa se esforçar demais para ser aceito.
        </p>
        <p>
            Se você convive com <strong>autocrítica constante</strong>,
            <strong>dificuldade em aceitar elogios</strong>,
            <strong>medo de ser rejeitado</strong>,
            <strong>comparação excessiva com os outros</strong> ou
            <strong>sensação de inadequação</strong>, saiba que você não está
            sozinho. E que existe um caminho possível para uma relação mais
            gentil consigo mesmo.
        </p>

        <h2>Como a psicoterapia ajuda a autoestima?</h2>
        <p>
            Na <strong>Abordagem Centrada na Pessoa</strong> (ACP), desenvolvida
            por Carl Rogers, o foco está em criar um ambiente de aceitação incondicional.
            Isso significa que você terá um espaço onde pode ser você mesmo, sem
            julgamentos.
        </p>
        <p>No processo terapêutico, você pode:</p>
        <ul class="benefit-list">
            <li>
                <strong>Reconhecer padrões de autocrítica</strong> e entender de
                onde eles vêm
            </li>
            <li>
                <strong>Desenvolver autocompaixão</strong>, tratando a si mesmo
                com mais gentileza
            </li>
            <li>
                <strong>Identificar suas qualidades e valores</strong>,
                reconhecendo seu próprio valor
            </li>
            <li>
                <strong>Aprender a estabelecer limites</strong> e priorizar suas
                necessidades
            </li>
            <li>
                <strong>Fortalecer sua autenticidade</strong>, sendo mais você
                mesmo nas relações
            </li>
            <li>
                <strong>Reduzir a necessidade de aprovação externa</strong>,
                confiando mais em si
            </li>
        </ul>

        <h2>Sinais de que a autoestima pode precisar de atenção</h2>
        <ul>
            <li>
                Autocrítica excessiva ou pensamentos negativos sobre si mesmo
            </li>
            <li>
                Dificuldade em aceitar elogios ou reconhecer suas conquistas
            </li>
            <li>Medo constante de ser rejeitado ou não ser aceito</li>
            <li>Comparação frequente com outras pessoas</li>
            <li>Dificuldade em dizer "não" ou estabelecer limites</li>
            <li>Sensação de que precisa se esforçar demais para ser amado</li>
            <li>Evitar desafios por medo de falhar</li>
            <li>
                Relacionamentos em que você se sente inferior ou desvalorizado
            </li>
        </ul>

        <h2>Por que escolher a Abordagem Centrada na Pessoa?</h2>
        <p>A ACP é especialmente eficaz para questões de autoestima porque:</p>
        <ul>
            <li>
                Oferece aceitação incondicional, ajudando você a se aceitar como
                é
            </li>
            <li>Respeita seu ritmo e suas escolhas, sem imposições</li>
            <li>
                Foca na relação terapêutica como parte central do processo
            </li>
            <li>Promove o autoconhecimento e a autenticidade</li>
            <li>Valoriza suas experiências e sentimentos sem julgamentos</li>
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
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma consulta sobre autoestima")}
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
                <a href="/experiencia/depressao/">→ Psicólogo para Depressão</a>
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
        <h2>Perguntas Frequentes sobre Autoestima e Psicoterapia</h2>
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
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre autoestima.")}
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
