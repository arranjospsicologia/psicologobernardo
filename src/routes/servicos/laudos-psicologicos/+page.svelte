<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, TrustPanel, buildWhatsAppUrl, schemaIds, siteProfile } from "$lib";
    import { Phone, ChevronDown, FileText, Check, ShieldAlert, Clock, ClipboardCheck } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "Quando é necessário um laudo psicológico?",
            answer: "Os laudos são exigidos por planos de saúde e equipes médicas para garantir que o paciente compreende as implicações de procedimentos irreversíveis ou de grande impacto, como cirurgias bariátricas, vasectomias e laqueaduras.",
            open: false,
        },
        {
            question: "Qual o prazo para a entrega do documento?",
            answer: "O prazo médio é de 5 a 10 dias úteis após a última sessão de avaliação. Esse tempo é necessário para a análise técnica dos dados colhidos e a redação cuidadosa do documento conforme as normas do CFP.",
            open: false,
        },
        {
            question: "A avaliação pode ser feita online?",
            answer: "Não. Por exigência ética para a emissão deste tipo de laudo, a avaliação deve ser realizada presencialmente no consultório em Vitória/ES, garantindo a profundidade necessária da escuta e o rigor do processo clínico.",
            open: false,
        },
        {
            question: "Como funciona o pagamento da avaliação?",
            answer: "O valor refere-se ao processo completo de avaliação (entrevistas + testes + elaboração do laudo). O pagamento pode ser feito via PIX, dinheiro ou cartão, conforme combinado no agendamento.",
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
                "@id": "https://psicologobernardo.com.br/servicos/laudos-psicologicos/#webpage",
                url: "https://psicologobernardo.com.br/servicos/laudos-psicologicos/",
                name: "Laudos Psicológicos e Avaliações em Vitória ES",
                isPartOf: {
                    "@id": schemaIds.website,
                },
                about: {
                    "@id": "https://psicologobernardo.com.br/servicos/laudos-psicologicos/#service",
                },
            },
            {
                "@type": "Service",
                "@id": "https://psicologobernardo.com.br/servicos/laudos-psicologicos/#service",
                serviceType: "Avaliação Psicológica",
                name: "Laudos e Avaliações Psicológicas",
                description:
                    "Avaliação psicológica ética para cirurgia bariátrica, vasectomia, laqueadura e outros procedimentos. Atendimento presencial em Vitória.",
                provider: {
                    "@id": schemaIds.organization,
                },
                areaServed: {
                    "@type": "City",
                    name: "Vitória",
                },
            },
            {
                "@type": "FAQPage",
                "@id": "https://psicologobernardo.com.br/servicos/laudos-psicologicos/#faq",
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
    title="Laudos Psicológicos em Vitória | Avaliações Éticas e Seguras"
    description="Emissão de laudos psicológicos para cirurgia bariátrica, vasectomia e laqueadura. Avaliação técnica e ética conduzida por psicólogo em Vitória - ES."
    canonical="https://psicologobernardo.com.br/servicos/laudos-psicologicos/"
    jsonLd={serviceSchema}
    preloadImage="/images/servicos/laudos-psicologicos-hero.webp"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/servicos/" },
        { name: "Laudos Psicológicos" },
    ]}
/>

<!-- Hero -->
<section class="service-hero">
    <div class="container">
        <h1>Laudos Psicológicos e Avaliações</h1>
        <p class="hero-subtitle">
            Avaliação técnica fundamentada na ética profissional para 
            cirurgias e procedimentos específicos, com foco na sua segurança.
        </p>
        <div class="service-hero-actions">
            <Button
                href={buildWhatsAppUrl("Olá, gostaria de agendar uma avaliação para emissão de laudo psicológico.")}
                variant="primary"
            >
                <Phone size={20} />
                Agendar Avaliação
            </Button>
            <Button href="/agendar/" variant="outline">
                Ver agenda em Vitória
            </Button>
        </div>
        <div class="hero-image">
            <img
                src="/images/servicos/laudos-psicologicos-hero.webp"
                srcset="/images/servicos/laudos-psicologicos-hero-400w.webp 400w,
                        /images/servicos/laudos-psicologicos-hero-800w.webp 800w,
                        /images/servicos/laudos-psicologicos-hero.webp 1600w"
                sizes="(max-width: 480px) 400px,
                       (max-width: 768px) 800px,
                       900px"
                alt="Avaliação psicológica e laudos para cirurgias em Vitória"
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
        title="Documentos oficiais com rigor ético"
        intro="Todo laudo psicológico é um documento sério. Minha prática segue rigorosamente as resoluções do CFP, garantindo um processo transparente para você e para sua equipe médica."
        primaryHref={buildWhatsAppUrl("Olá, preciso de um laudo e gostaria de tirar uma dúvida técnica.")}
        primaryLabel="Tirar dúvida técnica"
        secondaryHref="/servicos/psicoterapia-individual/"
        secondaryLabel="Sou de fora de Vitória"
    />
</Section>

<!-- Content -->
<Section variant="beige">
    <article class="service-content">
        <!-- Answer Box -->
        <div class="answer-box">
            <p>
                O laudo psicológico é um documento resultante de um processo de avaliação técnica e clínica. Em meu consultório 
                em Vitória, realizo avaliações para <strong>cirurgia bariátrica, vasectomia e laqueadura</strong>. 
                O atendimento é exclusivamente <strong>presencial</strong>, garantindo a profundidade necessária para a 
                condução ética de cada caso.
            </p>
        </div>

        <!-- Decision Grid -->
        <div class="decision-grid">
            <article class="decision-card">
                <h3>Cirurgias e Planos</h3>
                <p>Avaliações completas para liberação de procedimentos conforme as exigências médicas atuais.</p>
            </article>
            <article class="decision-card">
                <h3>Rigor Clínico</h3>
                <p>Uso de entrevistas clínicas detalhadas e escuta qualificada para fundamentar um laudo robusto.</p>
            </article>
            <article class="decision-card">
                <h3>Agilidade Ética</h3>
                <p>Prazos claros e entrega direta ao paciente, respeitando o tempo de análise técnica necessária.</p>
            </article>
        </div>

        <h2>O que são laudos psicológicos?</h2>
        <p>
            Os laudos psicológicos são documentos técnicos que atestam a condição emocional de uma pessoa frente 
            a um momento de vida ou procedimento específico. São usados em situações como bariátrica, vasectomia 
            ou laqueadura, servindo como suporte tanto para o paciente quanto para o médico responsável.
        </p>
        <p>
            Cada avaliação é conduzida com base na <strong>escuta empática</strong>, respeitando o seu contexto e 
            singularidade. Não se trata de uma "prova", mas de uma compreensão clínica segura sobre a sua prontidão 
            para o que virá.
        </p>

        <!-- Mid-CTA -->
        <div class="mid-cta-box">
            <h3>"Preciso do laudo com certa urgência, é possível?"</h3>
            <p>
                Muitas vezes o processo médico já está avançado. Entre em contato para verificarmos a 
                disponibilidade de agenda imediata para a primeira entrevista em Jardim da Penha.
            </p>
            <div class="mid-cta-actions">
                <Button
                    href={buildWhatsAppUrl("Olá, gostaria de saber a disponibilidade de agenda para um laudo urgente.")}
                    variant="primary"
                >
                    Consultar Disponibilidade
                </Button>
            </div>
        </div>

        <h2>Principais Avaliações Realizadas</h2>
    </article>
</Section>

<!-- Laudo Cards -->
<Section variant="white">
    <div class="laudo-cards">
        <div class="laudo-card">
            <div class="card-icon">
                <ShieldAlert size={32} />
            </div>
            <h3>Cirurgia Bariátrica</h3>
            <ul>
                <li><Check size={16} /> Motivação e metas realistas</li>
                <li><Check size={16} /> Relação com a autoimagem</li>
                <li><Check size={16} /> Rede de apoio pós-cirúrgica</li>
                <li><Check size={16} /> Estabilidade emocional</li>
            </ul>
        </div>
        <div class="laudo-card">
            <div class="card-icon">
                <ClipboardCheck size={32} />
            </div>
            <h3>Vasectomia</h3>
            <ul>
                <li><Check size={16} /> Decisão consciente e autônoma</li>
                <li><Check size={16} /> Reflexão sobre o novo ciclo</li>
                <li><Check size={16} /> Histórico familiar e pessoal</li>
                <li><Check size={16} /> Clareza sobre o procedimento</li>
            </ul>
        </div>
        <div class="laudo-card">
            <div class="card-icon">
                <FileText size={32} />
            </div>
            <h3>Laqueadura</h3>
            <ul>
                <li><Check size={16} /> Autonomia reprodutiva</li>
                <li><Check size={16} /> Respaldo legal e ético</li>
                <li><Check size={16} /> Momento de vida e projetos</li>
                <li><Check size={16} /> Segurança na decisão</li>
            </ul>
        </div>
    </div>
</Section>

<!-- Process -->
<Section variant="beige">
    <div class="service-content">
        <h2>Como funciona o processo de avaliação?</h2>
        <p>
            O processo é dividido em etapas claras para que você saiba exatamente o que esperar de cada fase 
            até a entrega do documento final:
        </p>
        <div class="process-grid">
            <div class="process-step">
                <span class="step-num">01</span>
                <h4>Entrevista Inicial</h4>
                <p>Conversa para entender o histórico e o motivo da solicitação.</p>
            </div>
            <div class="process-step">
                <span class="step-num">02</span>
                <h4>Escuta Qualificada</h4>
                <p>Sessão dedicada ao aprofundamento clínico sobre o momento e a decisão do paciente.</p>
            </div>
            <div class="process-step">
                <span class="step-num">03</span>
                <h4>Fundamentação Técnica</h4>
                <p>Momento em que cruzo os dados clínicos para redigir o documento oficial.</p>
            </div>
            <div class="process-step">
                <span class="step-num">04</span>
                <h4>Devolutiva</h4>
                <p>Entrega do laudo com as devidas explicações e orientações.</p>
            </div>
        </div>
    </div>
</Section>

<!-- Related Links -->
<Section variant="white">
    <div class="related-links">
        <h3>Você também pode ter interesse em</h3>
        <ul>
            <li>
                <a href="/servicos/psicoterapia-individual/"
                    >→ Psicoterapia Individual em Vitória</a
                >
            </li>
            <li>
                <a href="/servicos/grupos-e-rodas/"
                    >→ Rodas de Conversa (ACP)</a
                >
            </li>
            <li>
                <a href="/psicologo-vitoria-es/"
                    >→ Consultório em Jardim da Penha</a
                >
            </li>
            <li>
                <a href="/sobre/">→ Minhas qualificações éticas</a>
            </li>
        </ul>
    </div>
</Section>

<!-- FAQ -->
<Section variant="beige" id="faq">
    <div class="section-header">
        <h2>Dúvidas comuns sobre Avaliação Psicológica</h2>
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
        <h2>Precisa de um laudo fundamentado e ético?</h2>
        <p>Agende sua primeira sessão de avaliação presencial em Jardim da Penha.</p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma avaliação para emissão de laudo psicológico.")}
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Agendar Agora
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

    /* Laudo Cards Customization */
    .laudo-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .laudo-card {
        background: var(--white);
        padding: 2.5rem 2rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        text-align: center;
        border: 1px solid rgba(8, 186, 156, 0.05);
    }

    .card-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        background: var(--primary-color);
        color: var(--white);
        border-radius: var(--radius-md);
        margin: 0 auto 1.5rem;
    }
    
    .card-icon :global(svg) {
        color: var(--white);
    }

    .laudo-card h3 {
        margin-bottom: 1.25rem;
    }

    .laudo-card ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .laudo-card li {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        margin-bottom: 0.75rem;
        font-size: var(--text-sm);
        color: var(--text-light);
    }

    .laudo-card li :global(svg) {
        color: var(--primary-color);
        flex-shrink: 0;
    }

    /* Process Grid */
    .process-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }

    .process-step {
        text-align: left;
        padding: 1.5rem;
        background: var(--white);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
    }

    .step-num {
        display: block;
        font-size: 1.8rem;
        font-weight: 800;
        color: var(--primary-color);
        opacity: 0.4;
        margin-bottom: 0.5rem;
    }

    .process-step h4 {
        margin-bottom: 0.5rem;
        color: var(--primary-dark);
        font-weight: 700;
    }

    .process-step p {
        margin: 0;
        font-size: 0.92rem;
        line-height: 1.6;
        color: var(--text-light);
    }

    /* FAQ */
    .faq-container {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .faq-item {
        background: var(--white);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        border: 1px solid rgba(8, 186, 156, 0.08);
        overflow: hidden;
        transition: box-shadow 0.2s ease;
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
        font-weight: 600;
        color: var(--text-color);
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
