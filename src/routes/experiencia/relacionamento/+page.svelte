<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, buildWhatsAppUrl, schemaIds } from "$lib";
    import { Phone, ChevronDown } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "Preciso vir com meu parceiro(a)?",
            answer: "Não necessariamente. A terapia individual é um espaço para você trabalhar suas questões, padrões e vivências. Se você deseja trabalhar questões do casal em conjunto, também ofereço terapia de casal. Às vezes, começar pela terapia individual ajuda a clarear suas próprias questões.",
            open: false,
        },
        {
            question: "A terapia pode me ajudar a decidir se devo terminar?",
            answer: "A terapia não vai te dizer o que fazer, mas pode ajudar você a clarear seus sentimentos, entender o que é importante para você e fazer uma escolha mais consciente. O objetivo é que você se sinta mais seguro para tomar suas próprias decisões.",
            open: false,
        },
        {
            question: "E se eu acabei de terminar um relacionamento?",
            answer: "O fim de um relacionamento é um momento importante que merece atenção. A terapia pode ajudar você a processar esse luto, compreender o que aconteceu e se preparar para novas possibilidades quando se sentir pronto.",
            open: false,
        },
        {
            question: "Posso fazer a terapia online?",
            answer: "Sim! O atendimento online é regulamentado pelo Conselho Federal de Psicologia e mantém a mesma qualidade do atendimento presencial.",
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
                "@id": "https://psicologobernardo.com.br/experiencia/relacionamento/#webpage",
                url: "https://psicologobernardo.com.br/experiencia/relacionamento/",
                name: "Psicólogo para Relacionamentos em Vitória ES",
                isPartOf: {
                    "@id": schemaIds.website,
                },
                mainEntity: {
                    "@id": "https://psicologobernardo.com.br/experiencia/relacionamento/#article",
                },
            },
            {
                "@type": "Article",
                "@id": "https://psicologobernardo.com.br/experiencia/relacionamento/#article",
                headline: "Psicólogo para Relacionamentos em Vitória ES",
                name: "Relacionamentos: Como a Psicoterapia pode ajudar?",
                description:
                    "Psicólogo para dificuldades de relacionamento em Vitória ES. Terapia para conflitos, comunicação e padrões que se repetem. Atendimento presencial em Jardim da Penha e online.",
                author: {
                    "@id": schemaIds.person,
                },
                publisher: {
                    "@id": schemaIds.organization,
                },
                image: {
                    "@type": "ImageObject",
                    url: "https://psicologobernardo.com.br/images/experiencia/relacionamento-350.avif",
                    width: 350,
                    height: 350,
                },
                inLanguage: "pt-BR",
                mentions: {
                    "@type": "Service",
                    "@id": schemaIds.serviceCouple,
                    name: "Terapia de Casal",
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
    title="Psicólogo para Dificuldades de Relacionamento em Vitória ES"
    description="Psicólogo para dificuldades de relacionamento em Vitória ES. Terapia para conflitos, comunicação e padrões que se repetem. Atendimento presencial em Jardim da Penha e online."
    canonical="https://psicologobernardo.com.br/experiencia/relacionamento/"
    jsonLd={experienceSchema}
    preloadImage="/images/experiencia/relacionamento-350.avif"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Experiência", href: "/experiencia/" },
        { name: "Relacionamento" },
    ]}
/>

<section class="experience-hero">
    <div class="container">
        <h1>Psicólogo para Relacionamentos em Vitória ES</h1>
        <p class="hero-subtitle">
            Espaço acolhedor para entender padrões, conflitos e escolhas nos
            seus relacionamentos
        </p>
        <div class="hero-buttons">
            <Button
                href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre relacionamentos.")}
                variant="primary"
                size="lg"
            >
                <Phone size={20} />
                Agendar primeira conversa
            </Button>
            <Button href="/servicos/terapia-de-casal/" variant="outline" size="lg">
                Ver terapia de casal
            </Button>
        </div>
        <div class="hero-image">
            <picture>
                <source
                    srcset="/images/experiencia/relacionamento-200.avif 200w,
                            /images/experiencia/relacionamento-350.avif 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/avif"
                />
                <source
                    srcset="/images/experiencia/relacionamento-200.webp 200w,
                            /images/experiencia/relacionamento-350.webp 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/webp"
                />
                <img
                    src="/images/experiencia/relacionamento-350.webp"
                    alt="Terapia para relacionamentos - Psicólogo em Vitória ES"
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
            <p>Se você busca apoio para dificuldades de relacionamento em Vitória, o atendimento acontece em consultório em Jardim da Penha, presencial, e também online. A Abordagem Centrada na Pessoa ajuda a compreender padrões, necessidades e formas de se relacionar — a partir de você, no seu ritmo. Para trabalho conjunto com o(a) parceiro(a), também ofereço <a href="/servicos/terapia-de-casal/">terapia de casal</a>.</p>
        </div>
        <h2>Você está enfrentando dificuldades nos seus relacionamentos?</h2>
        <p>
            Os relacionamentos são uma parte fundamental da vida. É através
            deles que nos sentimos conectados, amados e compreendidos. Mas
            também é nos relacionamentos que surgem muitos dos nossos maiores
            desafios: conflitos, incompreensões, distanciamento, dependência
            emocional, dificuldades de comunicação.
        </p>
        <p>
            Às vezes, notamos que os mesmos padrões se repetem: escolhemos
            pessoas parecidas, caímos nas mesmas armadilhas, ou sentimos que
            algo nos impede de nos conectar de verdade.
        </p>

        <h2>Questões comuns relacionadas a relacionamentos</h2>
        <ul>
            <li>
                <strong>Conflitos recorrentes</strong> — brigas que se repetem, discussões
                que não se resolvem
            </li>
            <li>
                <strong>Dificuldade de comunicação</strong> — sentir que não consegue
                se expressar ou que o outro não te entende
            </li>
            <li>
                <strong>Padrões que se repetem</strong> — perceber que você sempre
                "cai nas mesmas" em diferentes relacionamentos
            </li>
            <li>
                <strong>Dependência emocional</strong> — dificuldade de estar bem
                sozinho, medo intenso de perder o outro
            </li>
            <li>
                <strong>Término de relacionamento</strong> — lidar com o luto de
                um fim de relação
            </li>
            <li>
                <strong>Indecisão</strong> — não saber se deve continuar ou encerrar
                um relacionamento
            </li>
            <li>
                <strong>Ciúme e insegurança</strong> — desconfiança excessiva que
                afeta a relação
            </li>
            <li>
                <strong>Distanciamento emocional</strong> — sentir-se desconectado
                do parceiro
            </li>
        </ul>

        <h2>Como a psicoterapia pode ajudar?</h2>
        <p>
            Na <strong>Abordagem Centrada na Pessoa</strong>, o foco está em
            você e na sua forma única de vivenciar os relacionamentos. Não
            existe um "modelo certo" de relacionamento — o que importa é que
            você possa se compreender melhor.
        </p>
        <p>A terapia pode ajudar você a:</p>
        <ul class="benefit-list">
            <li>
                <strong>Reconhecer padrões</strong> — entender por que certas situações
                se repetem
            </li>
            <li>
                <strong>Compreender suas necessidades</strong> — identificar o que
                você realmente busca
            </li>
            <li>
                <strong>Desenvolver comunicação</strong> — expressar seus sentimentos
                e ouvir o outro
            </li>
            <li>
                <strong>Fortalecer sua autoestima</strong> — sentir-se mais seguro
                nas relações
            </li>
            <li>
                <strong>Fazer escolhas alinhadas</strong> — decidir com mais clareza
            </li>
        </ul>
        <p>
            É importante ressaltar que a terapia individual foca em você. Se
            você deseja trabalhar questões do casal em conjunto, também ofereço
            <a href="/servicos/terapia-de-casal/">terapia de casal</a>.
        </p>
    </article>
</Section>

<Section variant="beige">
    <div class="cta-box">
        <h3>Agende uma conversa</h3>
        <p>
            Se você está enfrentando dificuldades nos seus relacionamentos,
            entre em contato.
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
            <li>
                <a href="/servicos/terapia-de-casal/">→ Terapia de Casal</a>
            </li>
            <li><a href="/servicos/terapia-online/">→ Terapia Online</a></li>
            <li>
                <a href="/experiencia/autoestima/"
                    >→ Psicólogo para Autoestima</a
                >
            </li>
        </ul>
    </div>
</Section>

<Section variant="beige" id="faq">
    <div class="section-header">
        <h2>Perguntas Frequentes sobre Terapia para Relacionamentos</h2>
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
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre relacionamentos.")}
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
