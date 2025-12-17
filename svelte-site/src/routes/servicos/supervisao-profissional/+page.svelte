<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import {
        Phone,
        ChevronDown,
        GraduationCap,
        Lightbulb,
        Heart,
        Scale,
    } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "A supervisão é apenas para psicólogos?",
            answer: "A supervisão clínica é voltada para psicólogos formados ou estudantes de psicologia em estágio clínico. É importante ter algum contato prévio com a Abordagem Centrada na Pessoa.",
            open: false,
        },
        {
            question: "Posso participar em grupo?",
            answer: "Sim! Ofereço supervisão individual e em grupo. A supervisão em grupo oferece a riqueza da troca entre pares. Os grupos têm entre 4 e 8 participantes e se encontram quinzenalmente.",
            open: false,
        },
        {
            question: "Qual a duração e frequência?",
            answer: "A supervisão individual dura 60 minutos e pode ser semanal ou quinzenal. A supervisão em grupo tem 90 a 120 minutos e geralmente é quinzenal.",
            open: false,
        },
        {
            question: "Trabalham casos clínicos ou questões pessoais?",
            answer: "Ambos. Trabalhamos casos clínicos, mas também acolhemos questões pessoais enquanto terapeuta - como seus processos internos influenciam o atendimento. Na ACP, não separamos técnica de pessoa.",
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
        serviceType: "Supervisão Profissional em ACP",
        provider: {
            "@type": "ProfessionalService",
            name: "Bernardo Carielo Psicólogo",
        },
    };
</script>

<SEO
    title="Supervisão Profissional em ACP – Cuidado com quem cuida"
    description="Supervisão Profissional em ACP em Vitória e online. Espaço de reflexão sobre a prática clínica para psicólogos da Abordagem Centrada na Pessoa."
    canonical="https://psicologobernardo.com.br/servicos/supervisao-profissional/"
    jsonLd={serviceSchema}
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/#servicos" },
        { name: "Supervisão Profissional" },
    ]}
/>

<section class="service-hero">
    <div class="container">
        <h1>Supervisão Profissional em ACP</h1>
        <p class="hero-subtitle">
            Espaço de reflexão sobre a prática clínica, direcionado a psicólogos
            da Abordagem Centrada na Pessoa
        </p>
        <div class="hero-image">
            <img
                src="/images/servicos/supervisao-profissional-hero.jpg"
                alt="Supervisão clínica para psicólogos - Desenvolvimento profissional"
                loading="eager"
                width="900"
                height="600"
            />
        </div>
    </div>
</section>

<Section variant="white">
    <article class="service-content">
        <h2>O que é a supervisão profissional?</h2>
        <p>
            A supervisão é um espaço de reflexão sobre a prática clínica,
            direcionado a
            <strong
                >psicólogos e estudantes da Abordagem Centrada na Pessoa</strong
            >. Mais do que discutir casos, é um lugar de troca e cuidado com
            quem cuida.
        </p>
        <p>
            Atendimentos individuais ou em grupo,
            <strong>presencialmente em Vitória</strong> e
            <strong>online para todo o Brasil</strong>.
        </p>

        <h2>Para quem é a supervisão?</h2>
        <ul>
            <li>
                <strong>Psicólogos recém-formados</strong> - iniciando a prática
                clínica
            </li>
            <li>
                <strong>Psicólogos experientes</strong> - aprofundando a reflexão
            </li>
            <li>
                <strong>Estudantes de psicologia</strong> - em estágio clínico
            </li>
            <li>
                <strong>Profissionais de outras abordagens</strong> - transitando
                para a ACP
            </li>
        </ul>
    </article>
</Section>

<Section variant="beige">
    <div class="theme-cards">
        <div class="theme-card">
            <Heart size={40} />
            <h3>Presença e Autenticidade</h3>
            <p>Como estar genuinamente presente no encontro terapêutico?</p>
        </div>
        <div class="theme-card">
            <Lightbulb size={40} />
            <h3>Empatia e Aceitação</h3>
            <p>Desenvolvendo escuta empática e aceitação incondicional</p>
        </div>
        <div class="theme-card">
            <Scale size={40} />
            <h3>Dilemas Éticos</h3>
            <p>Questões sobre sigilo, limites e conduta profissional</p>
        </div>
        <div class="theme-card">
            <GraduationCap size={40} />
            <h3>Desenvolvimento</h3>
            <p>Reflexões sobre sua identidade como terapeuta</p>
        </div>
    </div>
</Section>

<Section variant="white">
    <article class="service-content">
        <h2>Por que escolher supervisão em ACP?</h2>
        <ul>
            <li>
                <strong>Relação horizontal:</strong> O supervisor facilita, não dá
                respostas prontas
            </li>
            <li>
                <strong>Confiança no terapeuta:</strong> Você possui recursos para
                desenvolver sua prática
            </li>
            <li>
                <strong>Foco na pessoa:</strong> Não separamos técnica de pessoa
            </li>
            <li>
                <strong>Ética e humanização:</strong> Cuidado ético e dimensão humana
            </li>
        </ul>
    </article>
</Section>

<Section variant="beige">
    <div class="related-links">
        <h3>Veja também</h3>
        <ul>
            <li>
                <a href="/servicos/grupos-e-rodas/"
                    >→ Grupos e Rodas de Conversa</a
                >
            </li>
            <li><a href="/servicos/terapia-online/">→ Terapia Online</a></li>
            <li>
                <a href="/sobre/">→ Conheça a Abordagem Centrada na Pessoa</a>
            </li>
            <li>
                <a
                    href="https://arranjospsicologia.com.br"
                    target="_blank"
                    rel="noopener">→ Arranjos Psicologia - Formação em ACP</a
                >
            </li>
        </ul>
    </div>
</Section>

<Section variant="white" id="faq">
    <div class="section-header">
        <h2>Perguntas Frequentes sobre Supervisão</h2>
    </div>
    <div class="faq-container">
        {#each faqItems as item, index}
            <details class="faq-item" bind:open={item.open}>
                <summary class="faq-question" onclick={() => toggleFaq(index)}>
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
        <h2>Desenvolva sua prática clínica com supervisão em ACP</h2>
        <p>Entre em contato para conversarmos</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20supervisão%20profissional"
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
    </div>
</Section>

<style>
    .theme-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .theme-card {
        background: var(--white);
        padding: 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        text-align: center;
    }

    .theme-card :global(svg) {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .theme-card h3 {
        font-size: var(--text-md);
        margin-bottom: 0.5rem;
    }

    .theme-card p {
        color: var(--text-light);
        font-size: var(--text-sm);
    }
</style>
