<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, ChevronDown, FileText, Check } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "Quando é necessário um laudo psicológico?",
            answer: "Laudos são necessários para procedimentos como cirurgia bariátrica, vasectomia e laqueadura. Exigem avaliação psicológica prévia para garantir que a pessoa está emocionalmente preparada.",
            open: false,
        },
        {
            question: "Qual o prazo de entrega?",
            answer: "O prazo geralmente é de 5 a 10 dias úteis após a conclusão das entrevistas e eventuais testes. Em casos de urgência, podemos conversar sobre a possibilidade de agilizar.",
            open: false,
        },
        {
            question: "É possível emitir laudos online?",
            answer: "Não. A avaliação psicológica para laudos exige atendimento presencial, especialmente quando envolve aplicação de testes padronizados. Os atendimentos acontecem no consultório em Vitória/ES.",
            open: false,
        },
        {
            question: "O laudo é sigiloso?",
            answer: "Sim, completamente. Todo o processo é regido pelo Código de Ética do Psicólogo. O laudo é entregue diretamente a você, que decide como utilizá-lo.",
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
        serviceType: "Laudos Psicológicos e Avaliações",
        provider: {
            "@type": "ProfessionalService",
            name: "Bernardo Carielo Psicólogo",
        },
    };
</script>

<SEO
    title="Laudos Psicológicos e Avaliações em Vitória"
    description="Laudos Psicológicos e Avaliações em Vitória - ES. Avaliação psicológica ética para cirurgia bariátrica, vasectomia e laqueadura. Psicólogo CRP 16/5527."
    canonical="https://psicologobernardo.com.br/servicos/laudos-psicologicos/"
    jsonLd={serviceSchema}
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/#servicos" },
        { name: "Laudos Psicológicos" },
    ]}
/>

<section class="service-hero">
    <div class="container">
        <h1>Laudos Psicológicos e Avaliações</h1>
        <p class="hero-subtitle">
            Avaliação psicológica ética e cuidadosa para cirurgias e
            procedimentos específicos
        </p>
        <div class="hero-image">
            <img
                src="/images/servicos/laudos-psicologicos-hero.jpg"
                alt="Avaliação psicológica e laudos para cirurgias"
                loading="eager"
                width="900"
                height="600"
            />
        </div>
    </div>
</section>

<Section variant="white">
    <article class="service-content">
        <h2>O que são laudos psicológicos?</h2>
        <p>
            Os laudos psicológicos são instrumentos éticos e técnicos usados em
            situações específicas, como <strong>cirurgias bariátricas</strong>,
            <strong>vasectomia</strong>
            ou
            <strong>laqueadura</strong>. Avaliam as condições emocionais da
            pessoa em relação ao procedimento.
        </p>
        <p>
            Cada avaliação é conduzida com base na <strong
                >escuta empática</strong
            >, respeitando o contexto e a singularidade de cada pessoa.
            Atendimento presencial em
            <strong>Vitória (Jardim da Penha)</strong>.
        </p>
    </article>
</Section>

<Section variant="beige">
    <div class="laudo-cards">
        <div class="laudo-card">
            <FileText size={40} />
            <h3>Cirurgia Bariátrica</h3>
            <ul>
                <li><Check size={16} /> Motivação e expectativas</li>
                <li><Check size={16} /> Relação com alimentação</li>
                <li><Check size={16} /> Rede de apoio</li>
                <li><Check size={16} /> Condições emocionais</li>
            </ul>
        </div>
        <div class="laudo-card">
            <FileText size={40} />
            <h3>Vasectomia</h3>
            <ul>
                <li><Check size={16} /> Motivação para o procedimento</li>
                <li><Check size={16} /> Clareza sobre irreversibilidade</li>
                <li><Check size={16} /> Reflexão sobre paternidade</li>
                <li><Check size={16} /> Decisão consciente</li>
            </ul>
        </div>
        <div class="laudo-card">
            <FileText size={40} />
            <h3>Laqueadura</h3>
            <ul>
                <li><Check size={16} /> Motivação e reflexão</li>
                <li><Check size={16} /> Compreensão do procedimento</li>
                <li><Check size={16} /> Autonomia da decisão</li>
                <li><Check size={16} /> Condições emocionais</li>
            </ul>
        </div>
    </div>
</Section>

<Section variant="white">
    <article class="service-content">
        <h2>Como funciona o processo?</h2>
        <ol class="process-list">
            <li><strong>Agendamento e entrevista inicial</strong></li>
            <li><strong>Aplicação de testes</strong> (quando necessário)</li>
            <li><strong>Análise e elaboração do laudo</strong></li>
            <li><strong>Devolutiva e entrega</strong></li>
        </ol>

        <h2>Ética e sigilo profissional</h2>
        <ul>
            <li>Todas as informações são sigilosas</li>
            <li>O laudo é entregue diretamente a você</li>
            <li>Avaliação imparcial e técnica</li>
            <li>Sem julgamentos morais</li>
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
            <li><a href="/sobre/">→ Conheça minha abordagem</a></li>
            <li><a href="/contato/">→ Contato e localização</a></li>
        </ul>
    </div>
</Section>

<Section variant="white" id="faq">
    <div class="section-header">
        <h2>Perguntas Frequentes sobre Laudos</h2>
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
        <h2>Precisa de um laudo psicológico?</h2>
        <p>Entre em contato para agendar sua avaliação</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20solicitar%20um%20laudo%20psicológico"
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
    </div>
</Section>

<style>
    .laudo-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .laudo-card {
        background: var(--white);
        padding: 2rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
    }

    .laudo-card :global(svg:first-child) {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .laudo-card h3 {
        margin-bottom: 1rem;
    }

    .laudo-card ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .laudo-card li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: var(--text-sm);
        color: var(--text-light);
    }

    .laudo-card li :global(svg) {
        color: var(--primary-color);
        flex-shrink: 0;
    }

    .process-list {
        margin: 1rem 0 1.5rem 1.5rem;
    }

    .process-list li {
        margin-bottom: 0.75rem;
    }
</style>
