<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, TrustPanel, buildWhatsAppUrl, schemaIds, siteProfile } from "$lib";
    import { Phone, ChevronDown, Users, MessageCircle, Heart, ShieldCheck } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "Quem pode participar das rodas de conversa?",
            answer: "Cada grupo tem um público-alvo. A Roda Entre Homens é aberta a qualquer homem adulto. Já a Roda Desafios da Profissão Psi é exclusiva para psicólogos que buscam diálogo sobre a prática clínica na ACP.",
            open: false,
        },
        {
            question: "Como funcionam os encontros online?",
            answer: "Os encontros acontecem por videochamada privada. O link é enviado previamente aos inscritos. Prezamos pelo sigilo absoluto: o que é dito no grupo, permanece no grupo.",
            open: false,
        },
        {
            question: "Preciso falar obrigatoriamente durante o encontro?",
            answer: "Não. Respeitamos o tempo de cada um. Você pode participar apenas para ouvir e se reconhecer na fala dos outros. A participação ativa acontece quando você se sente seguro para isso.",
            open: false,
        },
        {
            question: "Há custo para participação?",
            answer: "Sim, os grupos possuem um investimento para manutenção do espaço e facilitação. Os valores variam conforme o projeto. Entre em contato para saber sobre a próxima turma.",
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
                "@id": "https://psicologobernardo.com.br/servicos/grupos-e-rodas/#webpage",
                url: "https://psicologobernardo.com.br/servicos/grupos-e-rodas/",
                name: "Grupos e Rodas de Conversa em Vitória e Online",
                isPartOf: {
                    "@id": schemaIds.website,
                },
                about: {
                    "@id": "https://psicologobernardo.com.br/servicos/grupos-e-rodas/#service",
                },
            },
            {
                "@type": "Service",
                "@id": "https://psicologobernardo.com.br/servicos/grupos-e-rodas/#service",
                serviceType: "Grupos Terapêuticos e Rodas de Conversa",
                name: "Grupos e Rodas de Conversa",
                description:
                    "Espaços coletivos de partilha e diálogo baseados na Abordagem Centrada na Pessoa. Inclui Roda Entre Homens e grupos para psicólogos.",
                provider: {
                    "@id": schemaIds.organization,
                },
                areaServed: [
                    {
                        "@type": "City",
                        name: "Vitória",
                    },
                    {
                        "@type": "Country",
                        name: "Brasil",
                    },
                ],
            },
            {
                "@type": "FAQPage",
                "@id": "https://psicologobernardo.com.br/servicos/grupos-e-rodas/#faq",
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
    title="Grupos e Rodas de Conversa | Partilha e Diálogo em Vitória e Online"
    description="Espaços coletivos de escuta e acolhimento pela Abordagem Centrada na Pessoa. Roda Entre Homens e grupos para profissionais de psicologia. Participe."
    canonical="https://psicologobernardo.com.br/servicos/grupos-e-rodas/"
    jsonLd={serviceSchema}
    preloadImage="/images/servicos/grupos-rodas-hero.webp"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/servicos/" },
        { name: "Grupos e Rodas" },
    ]}
/>

<!-- Hero -->
<section class="service-hero">
    <div class="container">
        <h1>Grupos e Rodas de Conversa</h1>
        <p class="hero-subtitle">
            Espaços coletivos de partilha, escuta e diálogo onde cada história 
            encontra um lugar de acolhimento e ressonância.
        </p>
        <div class="service-hero-actions">
            <Button
                href={buildWhatsAppUrl("Olá, gostaria de saber mais informações sobre as próximas Rodas de Conversa e Grupos.")}
                variant="primary"
            >
                <Phone size={20} />
                Quero saber mais
            </Button>
            <Button href="/servicos/psicoterapia-individual/" variant="outline">
                Ver terapia individual
            </Button>
        </div>
        <div class="hero-image">
            <img
                src="/images/servicos/grupos-rodas-hero.webp"
                srcset="/images/servicos/grupos-rodas-hero-400w.webp 400w,
                        /images/servicos/grupos-rodas-hero-800w.webp 800w,
                        /images/servicos/grupos-rodas-hero.webp 1600w"
                sizes="(max-width: 480px) 400px,
                       (max-width: 768px) 800px,
                       900px"
                alt="Grupos e rodas de conversa - Espaços coletivos de partilha e escuta"
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
        title="O poder de não estar sozinho"
        intro="Participar de um grupo é descobrir que suas dores e desafios encontram eco em outras pessoas. Um espaço seguro para ser quem você é."
        primaryHref={buildWhatsAppUrl("Olá, gostaria de saber quando será o próximo encontro de grupo.")}
        primaryLabel="Consultar próximas datas"
        secondaryHref="/sobre/"
        secondaryLabel="Como eu facilito grupos"
    />
</Section>

<!-- Content -->
<Section variant="beige">
    <article class="service-content">
        <!-- Answer Box -->
        <div class="answer-box">
            <p>
                Os grupos e rodas de conversa são espaços de escuta coletiva baseados na Abordagem Centrada na Pessoa. 
                Diferente da terapia individual, aqui o foco é a partilha de experiências entre pares, criando 
                pertencimento e novas perspectivas. Atualmente, os encontros acontecem principalmente no formato 
                <strong>online</strong>, com edições presenciais eventuais em <strong>Vitória - ES</strong>.
            </p>
        </div>

        <!-- Decision Grid -->
        <div class="decision-grid">
            <article class="decision-card">
                <h3>Roda Entre Homens</h3>
                <p>Diálogo sobre masculinidades, saúde mental e os desafios de ser homem na atualidade.</p>
            </article>
            <article class="decision-card">
                <h3>Desafios da Profissão Psi-ACP</h3>
                <p>Espaço para psicólogos discutirem a prática clínica, ética e os desafios do cotidiano profissional.</p>
            </article>
            <article class="decision-card">
                <h3>Escuta Coletiva</h3>
                <p>Oportunidade de se reconhecer na história do outro e desenvolver empatia mútua.</p>
            </article>
        </div>

        <h2>O que são grupos e rodas de conversa?</h2>
        <p>
            São espaços de partilha, criados para que cada pessoa possa se
            reconhecer em outras experiências. São encontros onde o acolhimento,
            o diálogo e a escuta autêntica criam um ambiente de segurança e
            confiança total.
        </p>
        <p>
            Diferente de uma palestra ou aula, nos grupos não há uma hierarquia rígida. Eu atuo como 
            facilitador, garantindo que o espaço seja seguro para que todos possam se expressar. Entre os 
            projetos ativos estão a <strong>Roda de Conversa Entre Homens</strong> e o grupo 
            <strong>Desafios da Profissão</strong>.
        </p>

        <h2>Benefícios da experiência grupal</h2>
        <p>
            A ciência e a prática clínica mostram que o grupo acelera certos processos de compreensão 
            que a terapia individual, às vezes, leva mais tempo para acessar:
        </p>
        <ul>
            <li>
                <strong>Fim do isolamento</strong> — perceber que seus dilemas não são exclusivos seus
            </li>
            <li>
                <strong>Pertencimento</strong> — sentir-se parte de uma comunidade que acolhe sem julgar
            </li>
            <li>
                <strong>Troca de perspectivas</strong> — ouvir como outras pessoas lidam com desafios similares aos seus
            </li>
            <li>
                <strong>Desenvolvimento de empatia</strong> — treinar a escuta profunda em um ambiente protegido
            </li>
            <li><strong>Custo acessível</strong> — uma forma potente de cuidado com investimento reduzido</li>
        </ul>

        <!-- Mid-CTA -->
        <div class="mid-cta-box">
            <h3>"Dá um pouco de vergonha de falar em grupo..."</h3>
            <p>
                Isso é perfeitamente normal. Nas rodas, ninguém é obrigado a falar. Muitas vezes, 
                apenas ouvir o que os outros trazem já gera um impacto terapêutico profundo.
            </p>
            <div class="mid-cta-actions">
                <Button
                    href={buildWhatsAppUrl("Olá, tenho interesse nos grupos mas gostaria de entender melhor como funcionam.")}
                    variant="primary"
                >
                    Tirar dúvidas no WhatsApp
                </Button>
            </div>
        </div>

        <h2>Projetos Ativos</h2>
    </article>
</Section>

<!-- Group Details -->
<Section variant="white">
    <div class="group-cards">
        <div class="group-card">
            <div class="card-icon">
                <Users size={42} />
            </div>
            <h3>Roda Entre Homens</h3>
            <p>
                Espaço para homens compartilharem vivências sobre masculinidade,
                saúde mental, relacionamentos e paternidade. Encontros mensais.
            </p>
            <Button
                href="https://encontroacp.com.br/entrehomens/"
                variant="outline"
                target="_blank"
            >
                Ver detalhes do projeto
            </Button>
        </div>
        <div class="group-card">
            <div class="card-icon">
                <MessageCircle size={42} />
            </div>
            <h3>Desafios da Profissão Psi-ACP</h3>
            <p>
                Para psicólogos discutirem as questões burocráticas, éticas e 
                existenciais da clínica. Foco em profissionais da ACP.
            </p>
            <Button
                href="https://arranjospsicologia.com.br"
                variant="outline"
                target="_blank"
            >
                Conhecer a rede Arranjos
            </Button>
        </div>
    </div>
</Section>

<!-- Related Links -->
<Section variant="beige">
    <div class="related-links">
        <h3>Você também pode se interessar por</h3>
        <ul>
            <li>
                <a href="/servicos/psicoterapia-individual/"
                    >→ Psicoterapia Individual em Vitória</a
                >
            </li>
            <li>
                <a href="/servicos/terapia-online/"
                    >→ Terapia Online</a
                >
            </li>
            <li>
                <a href="/servicos/supervisao-profissional/"
                    >→ Supervisão para Psicólogos</a
                >
            </li>
            <li>
                <a href="/sobre/">→ Minha trajetória como facilitador</a>
            </li>
        </ul>
    </div>
</Section>

<!-- FAQ -->
<Section variant="white" id="faq">
    <div class="section-header">
        <h2>Dúvidas frequentes sobre grupos</h2>
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
        <h2>Quer participar de um espaço coletivo de escuta?</h2>
        <p>Clique abaixo para saber das próximas datas e como se inscrever.</p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de saber mais sobre as datas dos próximos grupos e rodas.")}
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Consultar Próximas Datas
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
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background: var(--primary-color);
        color: var(--white);
        border-radius: var(--radius-md);
        margin: 0 auto 1.5rem;
    }

    .card-icon :global(svg) {
        color: var(--white);
    }

    .group-card h3 {
        margin-bottom: 1rem;
    }

    .group-card p {
        color: var(--text-light);
        margin-bottom: 1.5rem;
        line-height: 1.6;
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
