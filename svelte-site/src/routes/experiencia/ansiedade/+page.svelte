<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, ChevronDown } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "Como a terapia pode me ajudar com a ansiedade?",
            answer: "A terapia oferece um espaço seguro para você compreender a raiz da sua ansiedade, desenvolver recursos internos para lidar com ela e fazer escolhas mais conscientes no dia a dia. Na Abordagem Centrada na Pessoa, trabalhamos com escuta empática para ajudar você a se reconectar consigo mesmo.",
            open: false,
        },
        {
            question: "Quantas sessões são necessárias para tratar ansiedade?",
            answer: "Não existe um número fixo de sessões, pois cada pessoa é única. O processo terapêutico se desenvolve no seu ritmo. Algumas pessoas sentem melhoras significativas em poucas sessões, enquanto outras preferem um acompanhamento mais longo.",
            open: false,
        },
        {
            question: "A terapia pode substituir medicação para ansiedade?",
            answer: "A psicoterapia e a medicação são tratamentos complementares. Em alguns casos, a terapia pode ser suficiente; em outros, pode ser necessário o acompanhamento conjunto com um psiquiatra. Isso depende da intensidade dos sintomas e da sua história.",
            open: false,
        },
        {
            question: "Posso fazer o tratamento online?",
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

    const anxietySchema = {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        name: "Transtorno de Ansiedade",
        alternateName: ["Ansiedade", "Crise de Ansiedade"],
        possibleTreatment: {
            "@type": "PsychologicalTreatment",
            name: "Psicoterapia com Abordagem Centrada na Pessoa",
            provider: {
                "@type": "Physician",
                name: "Bernardo Carielo",
                telephone: "+55 27 99833-1228",
            },
        },
    };
</script>

<SEO
    title="Psicólogo para Ansiedade em Vitória ES – Tratamento Humanizado"
    description="Psicólogo para ansiedade em Vitória ES. Tratamento humanizado com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online."
    canonical="https://psicologobernardo.com.br/experiencia/ansiedade/"
    jsonLd={anxietySchema}
/>

<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Experiência", href: "/#experiencia" },
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
        <div class="hero-image">
            <picture>
                <source
                    srcset="/images/experiencia/ansiedade-350.avif"
                    type="image/avif"
                />
                <source
                    srcset="/images/experiencia/ansiedade-350.webp"
                    type="image/webp"
                />
                <img
                    src="/images/experiencia/ansiedade-350.webp"
                    alt="Tratamento para ansiedade - Psicólogo em Vitória ES"
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
        <ul>
            <li>
                <strong>Maior consciência</strong> sobre os gatilhos e situações
                que intensificam sua ansiedade
            </li>
            <li>
                <strong>Autocompreensão</strong> sobre como você reage ao estresse
                e à pressão
            </li>
            <li>
                <strong>Recursos internos</strong> para lidar com os sintomas de
                forma mais saudável
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
        <h3>Agende sua primeira sessão</h3>
        <p>
            Entre em contato para conversarmos sobre como a psicoterapia pode te
            ajudar.
        </p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20ansiedade"
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
        <h2>Pronto para cuidar da sua saúde mental?</h2>
        <p>Entre em contato para agendarmos uma primeira conversa</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20ansiedade"
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Agendar Consulta
        </Button>
    </div>
</Section>

<style>
    @import "../../../lib/styles/experience.css";
</style>
