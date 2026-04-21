<script lang="ts">
    import { Section, Button, Breadcrumb, SEO, TrustPanel, buildWhatsAppUrl, schemaIds, siteProfile } from "$lib";
    import { Phone, ChevronDown } from "lucide-svelte";

    // Dynamic import to prevent CSS from being bundled in shared chunks
    const LazyDoctoraliaWidgetPromise = import(
        "$lib/components/LazyDoctoraliaWidget.svelte"
    );

    let faqItems = $state([
        {
            question: "Quando a terapia de casal costuma fazer sentido?",
            answer: "Ela costuma fazer sentido quando o casal percebe conflitos recorrentes, dificuldade de diálogo, afastamento emocional, quebra de confiança ou decisões importantes que não conseguem atravessar sozinhos.",
            open: false,
        },
        {
            question: "É preciso que os dois estejam convencidos?",
            answer: "Nem sempre. O ideal é que ambos estejam minimamente disponíveis para o processo, mas é comum que um chegue mais convencido que o outro no início.",
            open: false,
        },
        {
            question: "A terapia de casal serve para evitar separação?",
            answer: "O objetivo não é manter a relação a qualquer custo. O foco é ajudar o casal a enxergar melhor sua dinâmica e tomar decisões mais conscientes e respeitosas.",
            open: false,
        },
        {
            question: "Existe atendimento online?",
            answer: "Sim. Casais que preferem mais flexibilidade ou vivem em cidades diferentes também podem fazer terapia de casal online para todo o Brasil e brasileiros no exterior.",
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
                "@id": "https://psicologobernardo.com.br/servicos/terapia-de-casal/#webpage",
                url: "https://psicologobernardo.com.br/servicos/terapia-de-casal/",
                name: "Terapia de casal em Vitória ES",
                isPartOf: {
                    "@id": schemaIds.website,
                },
                about: {
                    "@id": schemaIds.serviceCouple,
                },
            },
            {
                "@type": "Service",
                "@id": schemaIds.serviceCouple,
                serviceType: "Terapia de Casal",
                name: "Terapia de casal em Vitória",
                description:
                    "Atendimento para casais em Vitória ES e online, com foco em diálogo, conflitos recorrentes e reconstrução de vínculo.",
                provider: {
                    "@id": schemaIds.organization,
                },
                areaServed: [
                    {
                        "@type": "City",
                        name: "Vitória",
                        containedInPlace: {
                            "@type": "State",
                            name: "ES",
                        },
                    },
                    {
                        "@type": "Country",
                        name: "Brasil",
                    },
                ],
                offers: {
                    "@type": "Offer",
                    url: "https://psicologobernardo.com.br/agendar/",
                    priceCurrency: "BRL",
                },
            },
            {
                "@type": "FAQPage",
                "@id": "https://psicologobernardo.com.br/servicos/terapia-de-casal/#faq",
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
    title="Terapia de Casal em Vitória ES | Bernardo Carielo"
    description="Terapia de casal em Vitória ES e online. Entenda quando procurar, como funciona e o que esperar das primeiras sessões."
    canonical="https://psicologobernardo.com.br/servicos/terapia-de-casal/"
    jsonLd={serviceSchema}
    preloadImage="/images/servicos/terapia-casal-hero.webp"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/servicos/" },
        { name: "Terapia de Casal" },
    ]}
/>

<!-- Hero -->
<section class="service-hero">
    <div class="container">
        <h1>Terapia de Casal em Vitória</h1>
        <p class="hero-subtitle">
            Um lugar para fortalecer o diálogo, lidar com conflitos e
            reconstruir o vínculo entre vocês, no ritmo de cada um.
        </p>
        <div class="service-hero-actions">
            <Button
                href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre terapia de casal.")}
                variant="primary"
            >
                <Phone size={20} />
                Conversar pelo WhatsApp
            </Button>
            <Button href="/psicologo-vitoria-es/" variant="outline">
                Ver atendimento em Vitória
            </Button>
        </div>
        <div class="hero-image">
            <img
                src="/images/servicos/terapia-casal-hero.webp"
                srcset="/images/servicos/terapia-casal-hero-400w.webp 400w,
                        /images/servicos/terapia-casal-hero-800w.webp 800w,
                        /images/servicos/terapia-casal-hero.webp 1600w"
                sizes="(max-width: 480px) 400px,
                       (max-width: 768px) 800px,
                       900px"
                alt="Terapia de casal em ambiente acolhedor - Vitória ES"
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
        title="O que precisa estar claro nesta etapa"
        intro="Informações objetivas para reduzir hesitação e mostrar como o trabalho acontece no dia a dia."
        primaryHref={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre terapia de casal.")}
        primaryLabel="Agendar conversa inicial"
        secondaryHref="/agendar/"
        secondaryLabel="Ver agenda online"
        sessionLabel={`Sessões de ${siteProfile.sessionMinutes.couple} minutos para encontros de casal`}
    />
</Section>

<!-- Content -->
<Section variant="beige">
    <article class="service-content">
        <!-- Answer Box -->
        <div class="answer-box">
            <p>
                A terapia de casal em Vitória pode fazer sentido quando a relação entra em ciclos de
                conflito, silêncio, afastamento, desgaste ou dúvida importante. O objetivo não é provar
                quem está certo, mas criar um espaço em que o casal possa compreender melhor sua dinâmica
                e tomar decisões mais conscientes através de sessões de {siteProfile.sessionMinutes.couple} minutos.
            </p>
        </div>

        <!-- Decision Grid -->
        <div class="decision-grid">
            <article class="decision-card">
                <h3>Quando procurar</h3>
                <p>Quando as conversas travam, os mesmos conflitos voltam e o casal começa a se perder na própria dinâmica.</p>
            </article>
            <article class="decision-card">
                <h3>Como funciona</h3>
                <p>Um enquadre para falar e ouvir de forma menos reativa, sem arbitragem simplista nem busca de culpados.</p>
            </article>
            <article class="decision-card">
                <h3>Quando pode não bastar sozinho</h3>
                <p>Em alguns casos, uma das pessoas também precisa de cuidado individual para sustentar o processo.</p>
            </article>
        </div>

        <h2>Quando a terapia de casal costuma fazer sentido</h2>
        <p>
            A terapia de casal é um espaço para escutar e ser escutado dentro da
            relação. Muitas vezes, o conflito não é sinal de fracasso, mas um
            pedido de reconexão. Costuma ser procurada em casos de:
        </p>
        <ul>
            <li><strong>Dificuldades de comunicação e discussões recorrentes</strong></li>
            <li><strong>Crises de confiança, ciúmes ou distanciamento afetivo</strong></li>
            <li><strong>Questões de intimidade e sexualidade</strong></li>
            <li><strong>Descompasso em decisões importantes (filhos, carreira, moradia)</strong></li>
            <li><strong>Desejo de reconstruir a relação com mais clareza e respeito</strong></li>
        </ul>

        <h2>Como funciona, na prática</h2>
        <p>
            A terapia de casal pela <strong>Abordagem Centrada na Pessoa</strong>
            parte do princípio de que cada pessoa traz uma verdade legítima. O papel do terapeuta
            não é julgar quem está certo ou errado, mas atuar como facilitador do diálogo, ajudando cada 
            pessoa a se expressar de forma autêntica e a compreender a perspectiva do outro com empatia.
        </p>
        <p>
            Meu papel é sustentar um ambiente seguro para que a comunicação possa sair do impasse habitual. 
            As sessões duram aproximadamente <strong>{siteProfile.sessionMinutes.couple} minutos</strong> e podem acontecer
            presencialmente em Vitória ou online.
        </p>

        <!-- Mid-CTA -->
        <div class="mid-cta-box">
            <h3>Se um dos dois ainda está em dúvida, isso não impede a primeira conversa.</h3>
            <p>
                O primeiro passo pode ser uma mensagem curta descrevendo o momento da relação. A ideia é
                avaliar se a terapia de casal é o melhor caminho agora, sem promessas artificiais.
            </p>
            <div class="mid-cta-actions">
                <Button
                    href={buildWhatsAppUrl("Olá, gostaria de entender se a terapia de casal faz sentido para nós agora.")}
                    variant="primary"
                >
                    Tirar dúvidas
                </Button>
                <Button href="/servicos/psicoterapia-individual/" variant="outline">
                    Ver psicoterapia individual
                </Button>
            </div>
        </div>

        <h2>O que esperar das sessões</h2>
        <p>
            No início, o mais comum é que cada pessoa chegue com sua própria leitura do problema. 
            Isso faz parte. O trabalho é justamente começar a enxergar como a dinâmica se organiza entre os
            dois, e não apenas no argumento individual de cada um. Vocês terão espaço para:
        </p>
        <ul>
            <li>
                <strong>Falar e ser ouvido</strong> — sem medo de julgamento imediato
            </li>
            <li>
                <strong>Compreender a perspectiva do outro</strong> — mesmo que não
                concordem plenamente
            </li>
            <li>
                <strong>Identificar padrões</strong> — dinâmicas de comportamento que se repetem e geram impasse
            </li>
            <li>
                <strong>Reconstruir a conexão</strong> — restabelecer o vínculo emocional e a confiança
            </li>
        </ul>

        <h2>Quando a terapia de casal pode não ser suficiente sozinha</h2>
        <p>
            Em alguns cenários, pode ser importante considerar também acompanhamento individual, seja
            porque uma das pessoas está muito sobrecarregada emocionalmente, seja porque parte da questão
            ultrapassa a relação em si. Nesses casos, a
            <a href="/servicos/psicoterapia-individual/">psicoterapia individual</a> pode entrar como
            apoio complementar indispensável.
        </p>

        <h2>Atendimento em Vitória e online</h2>
        <p>
            O consultório fica em <strong
                ><a href="/psicologo-vitoria-es/psicologo-jardim-da-penha/">Jardim da Penha (Vitória - ES)</a></strong>
            e também ofereço terapia de casal
            <a href="/servicos/terapia-online/">online</a> para casais que precisam de mais flexibilidade 
            ou que vivem em diferentes localidades.
        </p>
        <p>
            Se vocês chegaram até aqui por uma dificuldade específica em lidar com o outro, também 
            podem explorar a página sobre <a href="/experiencia/relacionamento/">demandas de relacionamento</a>.
        </p>
    </article>
</Section>

<!-- CTA Box -->
<Section variant="white">
    <div class="cta-box">
        <h3>Agende uma primeira conversa</h3>
        <p>
            Se vocês quiserem, podem me escrever resumindo o momento da relação. A partir daí, alinhamos se este é
            o melhor formato para vocês neste momento.
        </p>
        <div class="widget-container">
            {#await LazyDoctoraliaWidgetPromise then module}
                <module.default />
            {:catch}
                <a
                    href={siteProfile.externalLinks.doctoralia}
                    rel="nofollow"
                >
                    Agendar consulta via Doctoralia
                </a>
            {/await}
        </div>
        <p>Ou falem comigo diretamente pelo WhatsApp:</p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre terapia de casal.")}
            variant="primary"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
    </div>
</Section>

<!-- Related Links -->
<Section variant="beige">
    <div class="related-links">
        <h3>Veja também</h3>
        <ul>
            <li><a href="/servicos/psicoterapia-individual/">→ Psicoterapia individual</a></li>
            <li><a href="/servicos/terapia-online/">→ Terapia online</a></li>
            <li><a href="/experiencia/relacionamento/">→ Dificuldades nos relacionamentos</a></li>
            <li><a href="/psicologo-vitoria-es/">→ Psicólogo em Vitória ES</a></li>
        </ul>
    </div>
</Section>

<!-- FAQ -->
<Section variant="white" id="faq">
    <div class="section-header">
        <h2>Perguntas frequentes sobre terapia de casal</h2>
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
        <h2>Quando fizer sentido, o primeiro passo pode ser simples</h2>
        <p>
            Uma mensagem curta já basta para começarmos a entender o momento da relação.
        </p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma primeira conversa sobre terapia de casal.")}
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Agendar Consulta
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
