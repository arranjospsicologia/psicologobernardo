<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, ChevronDown } from "lucide-svelte";

    // Dynamic import to prevent CSS from being bundled in shared chunks
    const LazyDoctoraliaWidgetPromise = import(
        "$lib/components/LazyDoctoraliaWidget.svelte"
    );

    let faqItems = $state([
        {
            question: "Como funciona a psicoterapia individual?",
            answer: "A psicoterapia individual é um espaço onde você pode falar livremente sobre seus sentimentos, pensamentos e experiências. Na Abordagem Centrada na Pessoa, o processo acontece através da escuta empática e genuína, sem julgamentos. As sessões duram aproximadamente 60 minutos e acontecem geralmente uma vez por semana.",
            open: false,
        },
        {
            question: "Qual a duração e frequência das sessões?",
            answer: "Cada sessão de psicoterapia individual dura aproximadamente 60 minutos. A frequência mais comum é semanal, pois permite estabelecer continuidade no processo terapêutico. No entanto, a periodicidade pode ser ajustada conforme suas necessidades.",
            open: false,
        },
        {
            question: "A terapia ajuda em crises de ansiedade ou desmotivação?",
            answer: "Sim. A psicoterapia individual oferece um espaço para você compreender melhor suas emoções e vivências. A Abordagem Centrada na Pessoa ajuda você a se reconectar consigo mesmo e encontrar seus próprios recursos internos para enfrentar esses desafios.",
            open: false,
        },
        {
            question: "Posso fazer psicoterapia online?",
            answer: "Sim! Além do atendimento presencial em Jardim da Penha (Vitória/ES), ofereço psicoterapia individual online para todo o Brasil e para brasileiros vivendo no exterior. A modalidade online mantém a mesma qualidade, ética e confidencialidade do atendimento presencial.",
            open: false,
        },
        {
            question: "O que esperar da primeira sessão?",
            answer: "A primeira sessão é um momento de conhecimento mútuo. Você terá espaço para falar sobre o que te trouxe à terapia e tirar suas dúvidas sobre o processo. É também uma oportunidade para avaliarmos se há identificação entre nós.",
            open: false,
        },
    ]);

    function toggleFaq(index: number) {
        faqItems = faqItems.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false,
        }));
    }

    let serviceSchema = $derived({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://psicologobernardo.com.br/servicos/psicoterapia-individual/#webpage",
                url: "https://psicologobernardo.com.br/servicos/psicoterapia-individual/",
                name: "Psicoterapia Individual em Vitória – Espaço de escuta e autoconhecimento",
                isPartOf: {
                    "@id": "https://psicologobernardo.com.br/#website",
                },
            },
            {
                "@type": "Service",
                serviceType: "Psicoterapia Individual",
                name: "Psicoterapia Individual em Vitória",
                description:
                    "A psicoterapia individual é um espaço de escuta e autoconhecimento...",
                provider: {
                    "@id": "https://psicologobernardo.com.br/#organization",
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
                    url: "https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria",
                    priceCurrency: "BRL",
                },
                potentialAction: {
                    "@type": "ReserveAction",
                    target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                            "https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria",
                        actionPlatform: [
                            "http://schema.org/DesktopWebPlatform",
                            "http://schema.org/MobileWebPlatform",
                        ],
                    },
                    result: {
                        "@type": "Reservation",
                        name: "Agendar Consulta",
                    },
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
    title="Psicoterapia Individual em Vitória – Espaço de escuta e autoconhecimento"
    description="Psicoterapia Individual em Vitória - ES. Espaço de escuta empática e autoconhecimento pela Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online."
    canonical="https://psicologobernardo.com.br/servicos/psicoterapia-individual/"
    jsonLd={serviceSchema}
    preloadImage="/images/servicos/psicoterapia-individual-hero.webp"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/#servicos" },
        { name: "Psicoterapia Individual" },
    ]}
/>

<!-- Hero -->
<section class="service-hero">
    <div class="container">
        <h1>Psicoterapia Individual em Vitória</h1>
        <p class="hero-subtitle">
            Um espaço acolhedor para compreender melhor suas emoções, relações e
            escolhas, no seu próprio ritmo
        </p>
        <div class="hero-image">
            <img
                src="/images/servicos/psicoterapia-individual-hero.webp"
                srcset="/images/servicos/psicoterapia-individual-hero-400w.webp 400w,
                        /images/servicos/psicoterapia-individual-hero-800w.webp 800w,
                        /images/servicos/psicoterapia-individual-hero.webp 1600w"
                sizes="(max-width: 400px) 400px,
                       (max-width: 800px) 800px,
                       900px"
                alt="Atendimento de psicoterapia individual em consultório acolhedor - Vitória ES"
                loading="eager"
                fetchpriority="high"
                width="900"
                height="600"
            />
        </div>
    </div>
</section>

<!-- Content -->
<Section variant="white">
    <article class="service-content">
        <h2>O que é a psicoterapia individual?</h2>
        <p>
            A psicoterapia individual é um espaço de escuta e autoconhecimento,
            voltado a quem deseja compreender melhor suas emoções, relações e
            escolhas. Na <strong>Abordagem Centrada na Pessoa</strong>
            (ACP), o processo acontece no ritmo de cada pessoa, sem julgamentos ou
            imposições.
        </p>
        <p>
            É comum buscar terapia em momentos de ansiedade, tristeza, estresse,
            indecisão ou quando a vida parece sem sentido. A escuta empática
            ajuda a clarear o que antes parecia confuso, oferecendo um espaço
            genuíno de encontro e crescimento pessoal.
        </p>
        <p>
            Atendo presencialmente em <strong
                >Jardim da Penha (Vitória - ES)</strong
            >
            e também
            <a href="/servicos/terapia-online/">online</a>, acolhendo pessoas de
            Praia do Canto, Mata da Praia, Enseada do Suá, Barro Vermelho, Bento
            Ferreira, Vila Velha e Serra.
        </p>

        <h2>Como funciona a psicoterapia individual?</h2>
        <p>
            A terapia individual pela Abordagem Centrada na Pessoa se baseia em
            três pilares fundamentais: <strong
                >empatia, aceitação incondicional e autenticidade</strong
            >. Isso significa que você encontrará um espaço onde pode ser quem
            realmente é, sem máscaras.
        </p>
        <p>
            Cada sessão dura aproximadamente <strong>60 minutos</strong> e acontece
            semanalmente, embora a frequência possa ser ajustada. O processo terapêutico
            não segue um roteiro pré-definido — ele se desenrola naturalmente a partir
            do que você traz para o encontro.
        </p>

        <h3>Questões comumente trabalhadas:</h3>
        <ul>
            <li>
                <strong>Ansiedade e estresse</strong> - sentimentos de tensão constante,
                preocupação excessiva
            </li>
            <li>
                <strong>Tristeza e falta de sentido</strong> - sensação de vazio,
                desmotivação
            </li>
            <li>
                <strong>Dificuldades nos relacionamentos</strong> - conflitos recorrentes,
                problemas de comunicação
            </li>
            <li>
                <strong>Transições de vida</strong> - mudanças de carreira, términos,
                luto
            </li>
            <li>
                <strong>Busca por autoconhecimento</strong> - desejo de viver de
                forma mais autêntica
            </li>
        </ul>

        <h2>Por que escolher a Abordagem Centrada na Pessoa?</h2>
        <p>
            A <strong>Abordagem Centrada na Pessoa</strong> foi desenvolvida
            pelo psicólogo humanista
            <strong>Carl Rogers</strong> e se baseia em uma visão positiva do
            ser humano. Ela parte do princípio de que cada pessoa possui uma
            <strong>tendência natural ao crescimento e à autorrealização</strong
            >.
        </p>
        <p>
            Na prática, isso significa que o terapeuta não se coloca como um
            especialista que vai "consertar" você ou te dizer o que fazer. Em
            vez disso, o terapeuta oferece um ambiente seguro e acolhedor onde
            você pode explorar livremente seus pensamentos e sentimentos.
        </p>
    </article>
</Section>

<!-- CTA Box -->
<Section variant="beige">
    <div class="cta-box">
        <h3>Agende sua primeira sessão</h3>
        <p>
            Entre em contato para conversarmos sobre como a psicoterapia
            individual pode te ajudar neste momento da sua vida.
        </p>
        <div class="widget-container">
            {#await LazyDoctoraliaWidgetPromise then module}
                <module.default />
            {:catch}
                <a
                    href="https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria"
                    rel="nofollow"
                >
                    Agendar consulta via Doctoralia
                </a>
            {/await}
        </div>
        <p>Ou fale comigo diretamente pelo WhatsApp:</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20de%20psicoterapia%20individual"
            variant="primary"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
    </div>
</Section>

<!-- Related Links -->
<Section variant="white">
    <div class="related-links">
        <h3>Veja também</h3>
        <ul>
            <li><a href="/sobre/">→ Conheça mais sobre minha abordagem</a></li>
            <li>
                <a href="/localizacao/psicologo-jardim-da-penha/"
                    >→ Psicólogo em Jardim da Penha, Vitória</a
                >
            </li>
            <li>
                <a href="/servicos/terapia-online/"
                    >→ Terapia Online para todo o Brasil</a
                >
            </li>
            <li>
                <a href="/servicos/terapia-de-casal/">→ Terapia de Casal</a>
            </li>
        </ul>
    </div>
</Section>

<!-- FAQ -->
<Section variant="beige" id="faq">
    <div class="section-header">
        <h2>Perguntas Frequentes sobre Psicoterapia Individual</h2>
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
        <h2>Pronto para iniciar sua jornada de autoconhecimento?</h2>
        <p>
            Entre em contato para agendarmos uma primeira conversa sobre
            psicoterapia individual
        </p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20de%20psicoterapia%20individual"
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Agendar Consulta
        </Button>
    </div>
</Section>
