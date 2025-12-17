<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, ChevronDown, Users, MessageCircle } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "Quem pode participar das rodas?",
            answer: "Cada grupo tem seu público específico. A Roda Entre Homens é aberta a homens adultos. Já a Roda Desafios da Profissão Psi é voltada exclusivamente para psicólogos que trabalham com a Abordagem Centrada na Pessoa.",
            open: false,
        },
        {
            question: "Preciso ser psicólogo para participar?",
            answer: "Não necessariamente. A Roda Entre Homens está aberta a qualquer homem adulto. Já o grupo Desafios da Profissão Psi - ACP é específico para psicólogos e psicólogas.",
            open: false,
        },
        {
            question: "Como funcionam os encontros online?",
            answer: "Os encontros online acontecem por plataformas seguras (Google Meet ou Zoom). A duração varia conforme o grupo, geralmente entre 90 e 120 minutos.",
            open: false,
        },
        {
            question: "Há custo para participar?",
            answer: "Sim, há um investimento para participação. Os valores variam conforme o formato e frequência. Entre em contato para saber os valores atualizados.",
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
        serviceType: "Grupos e Rodas de Conversa",
        provider: {
            "@type": "ProfessionalService",
            name: "Bernardo Carielo Psicólogo",
        },
    };
</script>

<SEO
    title="Grupos e Rodas de Conversa – Espaços de partilha e diálogo"
    description="Grupos e Rodas de Conversa em Vitória e online. Espaços de partilha pela Abordagem Centrada na Pessoa. Roda Entre Homens e Desafios da Profissão Psi."
    canonical="https://psicologobernardo.com.br/servicos/grupos-e-rodas/"
    jsonLd={serviceSchema}
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/#servicos" },
        { name: "Grupos e Rodas" },
    ]}
/>

<section class="service-hero">
    <div class="container">
        <h1>Grupos e Rodas de Conversa</h1>
        <p class="hero-subtitle">
            Espaços coletivos de partilha, escuta e diálogo pela Abordagem
            Centrada na Pessoa
        </p>
        <div class="hero-image">
            <img
                src="/images/servicos/grupos-rodas-hero.jpg"
                alt="Grupos e rodas de conversa - Espaços coletivos de partilha"
                loading="eager"
                width="900"
                height="600"
            />
        </div>
    </div>
</section>

<Section variant="white">
    <article class="service-content">
        <h2>O que são grupos e rodas de conversa?</h2>
        <p>
            São espaços de partilha, criados para que cada pessoa possa se
            reconhecer em outras experiências. São encontros onde o acolhimento,
            o diálogo e a escuta autêntica criam um ambiente de segurança e
            confiança.
        </p>
        <p>
            Entre eles estão a <strong>Roda de Conversa Entre Homens</strong> e
            o grupo
            <strong>Desafios da Profissão</strong>, voltado a psicólogos da ACP.
            Acontecem
            <strong>online</strong>
            e, ocasionalmente, <strong>presencial em Vitória - ES</strong>.
        </p>
    </article>
</Section>

<Section variant="beige">
    <div class="group-cards">
        <div class="group-card">
            <div class="card-icon">
                <Users size={48} />
            </div>
            <h3>Roda Entre Homens</h3>
            <p>
                Espaço para homens compartilharem vivências sobre masculinidade,
                saúde mental, relacionamentos e paternidade. Encontros online
                mensais.
            </p>
            <Button
                href="https://encontroacp.com.br/entrehomens/"
                variant="outline"
                target="_blank"
            >
                Saiba mais no EncontroACP
            </Button>
        </div>
        <div class="group-card">
            <div class="card-icon">
                <MessageCircle size={48} />
            </div>
            <h3>Desafios da Profissão Psi</h3>
            <p>
                Para psicólogos da ACP discutirem questões burocráticas,
                financeiras, éticas e existenciais da profissão. Encontros
                online.
            </p>
            <Button
                href="https://arranjospsicologia.com.br"
                variant="outline"
                target="_blank"
            >
                Saiba mais na Arranjos
            </Button>
        </div>
    </div>
</Section>

<Section variant="white">
    <article class="service-content">
        <h2>Benefícios dos grupos terapêuticos</h2>
        <ul>
            <li>
                <strong>Sentimento de pertencimento</strong> - perceber que não está
                sozinho
            </li>
            <li>
                <strong>Múltiplas perspectivas</strong> - diferentes pontos de vista
            </li>
            <li>
                <strong>Aprendizado</strong> - através da experiência do outro
            </li>
            <li>
                <strong>Desenvolvimento</strong> - habilidades sociais em ambiente
                seguro
            </li>
            <li><strong>Redução do isolamento</strong> - conexões genuínas</li>
        </ul>
    </article>
</Section>

<Section variant="beige">
    <div class="related-links">
        <h3>Veja também</h3>
        <ul>
            <li>
                <a href="/servicos/psicoterapia-individual/"
                    >→ Psicoterapia Individual</a
                >
            </li>
            <li>
                <a href="/servicos/supervisao-profissional/"
                    >→ Supervisão Profissional em ACP</a
                >
            </li>
            <li>
                <a href="/sobre/">→ Conheça a Abordagem Centrada na Pessoa</a>
            </li>
        </ul>
    </div>
</Section>

<Section variant="white" id="faq">
    <div class="section-header">
        <h2>Perguntas Frequentes</h2>
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
        <h2>Quer participar de um espaço coletivo de escuta?</h2>
        <p>Entre em contato para saber mais sobre os grupos e rodas</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20grupos%20e%20rodas"
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
    </div>
</Section>

<style>
    .group-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 900px;
        margin: 0 auto;
    }

    .group-card {
        background: var(--white);
        padding: 2rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        text-align: center;
    }

    .card-icon {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .group-card h3 {
        margin-bottom: 1rem;
    }

    .group-card p {
        color: var(--text-light);
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }
</style>
