<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, ChevronDown } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "Como sei se tenho burnout ou apenas estresse?",
            answer: "O estresse geralmente é temporário e melhora quando a situação estressante passa. O burnout é um estado crônico de esgotamento que persiste e afeta várias áreas da vida. Se você sente exaustão constante, distanciamento emocional do trabalho e queda de produtividade há semanas ou meses, pode ser burnout.",
            open: false,
        },
        {
            question: "Preciso me afastar do trabalho para tratar o burnout?",
            answer: "Depende da gravidade. Em alguns casos, o afastamento pode ser necessário para recuperação. Em outros, é possível trabalhar o burnout na terapia enquanto mantém suas atividades. Cada caso é avaliado individualmente.",
            open: false,
        },
        {
            question: "A terapia para burnout é diferente?",
            answer: "A abordagem terapêutica é a mesma — escuta empática, acolhimento e respeito ao seu ritmo. No entanto, trabalhamos questões específicas relacionadas ao ambiente de trabalho, limites pessoais, expectativas e o que é significativo para você.",
            open: false,
        },
        {
            question: "Posso fazer o tratamento online?",
            answer: "Sim! O atendimento online é especialmente indicado para quem tem uma rotina agitada. A qualidade do atendimento é a mesma, e você pode fazer a terapia do conforto da sua casa.",
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
                "@id": "https://psicologobernardo.com.br/experiencia/burnout/#webpage",
                url: "https://psicologobernardo.com.br/experiencia/burnout/",
                name: "Psicólogo para Burnout em Vitória ES – Síndrome de Esgotamento Profissional",
                isPartOf: {
                    "@id": "https://psicologobernardo.com.br/#website",
                },
                mainEntity: {
                    "@id": "https://psicologobernardo.com.br/experiencia/burnout/#article",
                },
            },
            {
                "@type": "Article",
                "@id": "https://psicologobernardo.com.br/experiencia/burnout/#article",
                headline:
                    "Psicólogo para Burnout em Vitória ES – Síndrome de Esgotamento Profissional",
                name: "Burnout: Como a Psicoterapia pode ajudar?",
                description:
                    "Psicólogo para burnout em Vitória ES. Tratamento para esgotamento profissional com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online.",
                author: {
                    "@id": "https://psicologobernardo.com.br/sobre/#person",
                },
                publisher: {
                    "@id": "https://psicologobernardo.com.br/#organization",
                },
                image: {
                    "@type": "ImageObject",
                    url: "https://psicologobernardo.com.br/images/experiencia/burnout-350.avif",
                    width: 350,
                    height: 350,
                },
                inLanguage: "pt-BR",
                mentions: {
                    "@type": "Service",
                    "@id": "https://psicologobernardo.com.br/servicos/psicoterapia-individual/#service",
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
    title="Psicólogo para Burnout em Vitória ES – Síndrome de Esgotamento Profissional"
    description="Psicólogo para burnout em Vitória ES. Tratamento para esgotamento profissional com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online."
    canonical="https://psicologobernardo.com.br/experiencia/burnout/"
    jsonLd={experienceSchema}
    preloadImage="/images/experiencia/burnout-350.avif"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Experiência", href: "/#experiencia" },
        { name: "Burnout" },
    ]}
/>

<section class="experience-hero">
    <div class="container">
        <h1>Psicólogo para Burnout em Vitória ES</h1>
        <p class="hero-subtitle">
            Apoio especializado para quem enfrenta esgotamento profissional e
            emocional
        </p>
        <div class="hero-image">
            <picture>
                <source
                    srcset="/images/experiencia/burnout-200.avif 200w,
                            /images/experiencia/burnout-350.avif 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/avif"
                />
                <source
                    srcset="/images/experiencia/burnout-200.webp 200w,
                            /images/experiencia/burnout-350.webp 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/webp"
                />
                <img
                    src="/images/experiencia/burnout-350.webp"
                    alt="Tratamento para burnout - Psicólogo em Vitória ES"
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
        <h2>Você está se sentindo esgotado pelo trabalho?</h2>
        <p>
            Acordar já cansado. Sentir que o trabalho consome toda sua energia.
            Ter dificuldade para se desligar mesmo nos finais de semana. Perder
            o sentido naquilo que antes era significativo. Esses são sinais que
            não devem ser ignorados.
        </p>
        <p>
            A <strong>Síndrome de Burnout</strong> — ou Síndrome do Esgotamento Profissional
            — é reconhecida pela OMS como um fenômeno ocupacional. Ela acontece quando
            o estresse crônico no trabalho não é adequadamente gerenciado.
        </p>

        <h2>Sinais de Burnout</h2>
        <p>O burnout se manifesta em três dimensões principais:</p>
        <ul>
            <li>
                <strong>Exaustão emocional</strong> — sensação de estar emocionalmente
                esgotado, sem energia para as demandas do dia a dia
            </li>
            <li>
                <strong>Despersonalização/Cinismo</strong> — distanciamento emocional,
                sentimento de indiferença em relação ao trabalho
            </li>
            <li>
                <strong>Redução da realização pessoal</strong> — sensação de incompetência,
                queda na produtividade
            </li>
        </ul>
        <p>Outros sinais comuns incluem:</p>
        <ul>
            <li>Cansaço constante, mesmo após descansar</li>
            <li>Dores de cabeça, musculares ou problemas de sono</li>
            <li>Irritabilidade e mudanças de humor</li>
            <li>Dificuldade de concentração</li>
            <li>Sensação de fracasso ou inadequação</li>
            <li>Isolamento social</li>
        </ul>

        <h2>Como a psicoterapia pode ajudar?</h2>
        <p>
            Na <strong>Abordagem Centrada na Pessoa</strong>, eu ofereço um
            espaço acolhedor para você poder falar sobre suas experiências,
            pressões e frustrações relacionadas ao trabalho.
        </p>
        <p>A terapia pode ajudar você a:</p>
        <ul>
            <li>
                <strong>Reconhecer</strong> os limites do seu corpo e da sua mente
            </li>
            <li>
                <strong>Compreender</strong> os fatores que contribuem para o esgotamento
            </li>
            <li>
                <strong>Resgatar</strong> o que é importante e significativo para
                você
            </li>
            <li>
                <strong>Desenvolver</strong> recursos para lidar com o estresse de
                forma mais saudável
            </li>
            <li>
                <strong>Fazer escolhas</strong> mais alinhadas com suas necessidades
                e valores
            </li>
        </ul>
    </article>
</Section>

<Section variant="beige">
    <div class="cta-box">
        <h3>Agende uma conversa</h3>
        <p>Se você está se sentindo esgotado, não precisa continuar sozinho.</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20burnout"
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
        </ul>
    </div>
</Section>

<Section variant="beige" id="faq">
    <div class="section-header">
        <h2>Perguntas Frequentes sobre Burnout</h2>
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
        <h2>Você não precisa continuar esgotado</h2>
        <p>Entre em contato para conversarmos sobre como posso ajudar</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20burnout"
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Agendar Consulta
        </Button>
    </div>
</Section>

<style>
</style>
