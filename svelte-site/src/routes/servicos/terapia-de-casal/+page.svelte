<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, ChevronDown } from "lucide-svelte";
    import { onMount } from "svelte";

    let faqItems = $state([
        {
            question: "Como funciona a terapia de casal?",
            answer: "A terapia de casal é um espaço onde ambos podem falar e ser ouvidos. O terapeuta atua como facilitador, criando um ambiente seguro para expressarem sentimentos e trabalharem questões como comunicação, confiança e intimidade. As sessões duram aproximadamente 75 minutos.",
            open: false,
        },
        {
            question: "Qual é o papel do psicólogo nesse tipo de atendimento?",
            answer: "O papel do psicólogo não é julgar quem está certo ou errado. Atuo como facilitador do diálogo, ajudando cada pessoa a se expressar de forma autêntica e a compreender a perspectiva do outro com empatia.",
            open: false,
        },
        {
            question: "A terapia pode evitar separações?",
            answer: "A terapia de casal não tem como objetivo manter a relação a qualquer custo. O foco é ajudar vocês a tomarem decisões mais conscientes. Para alguns casais fortalece a relação; para outros, traz clareza de que a separação é o caminho mais respeitoso.",
            open: false,
        },
        {
            question: "Atende casais online?",
            answer: "Sim! Ofereço terapia de casal online para todo o Brasil e brasileiros no exterior. A modalidade online mantém a mesma qualidade, ética e confidencialidade do atendimento presencial.",
            open: false,
        },
    ]);

    function toggleFaq(index: number) {
        faqItems = faqItems.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false,
        }));
    }

    onMount(() => {
        const script = document.createElement("script");
        script.id = "zl-widget-s";
        script.src = "//platform.docplanner.com/js/widget.js";
        document.body.appendChild(script);
    });

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Terapia de Casal",
        provider: {
            "@type": "ProfessionalService",
            name: "Bernardo Carielo Psicólogo",
            telephone: "+55 27 99833-1228",
        },
    };
</script>

<SEO
    title="Terapia de Casal em Vitória – Espaço de escuta e reconexão"
    description="Terapia de Casal em Vitória - ES. Espaço de escuta e reconexão para casais pela Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online."
    canonical="https://psicologobernardo.com.br/servicos/terapia-de-casal/"
    jsonLd={serviceSchema}
    preloadImage="/images/servicos/terapia-casal-hero.webp"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/#servicos" },
        { name: "Terapia de Casal" },
    ]}
/>

<section class="service-hero">
    <div class="container">
        <h1>Terapia de Casal em Vitória</h1>
        <p class="hero-subtitle">
            Um lugar para fortalecer o diálogo, lidar com conflitos e
            reconstruir o vínculo entre vocês
        </p>
        <div class="hero-image">
            <img
                src="/images/servicos/terapia-casal-hero.webp"
                alt="Terapia de casal em ambiente acolhedor - Vitória ES"
                loading="eager"
                fetchpriority="high"
                width="900"
                height="600"
            />
        </div>
    </div>
</section>

<Section variant="white">
    <article class="service-content">
        <h2>O que é a terapia de casal?</h2>
        <p>
            A terapia de casal é um espaço para escutar e ser escutado dentro da
            relação. Muitas vezes, o conflito não é sinal de fracasso, mas um
            pedido de reconexão. Trabalhamos temas como <strong
                >confiança, comunicação, sexualidade, rotina e decisões
                compartilhadas</strong
            >.
        </p>

        <h2>Como funciona?</h2>
        <p>
            A terapia de casal pela <strong>Abordagem Centrada na Pessoa</strong
            >
            parte do princípio de que cada pessoa traz uma verdade. O papel do terapeuta
            é criar um ambiente onde ambos possam se expressar de forma genuína.
            As sessões duram aproximadamente
            <strong>75 minutos</strong>.
        </p>

        <h3>Durante as sessões, vocês terão espaço para:</h3>
        <ul>
            <li>
                <strong>Falar e ser ouvido</strong> - sem medo de julgamento
            </li>
            <li>
                <strong>Compreender a perspectiva do outro</strong> - mesmo que não
                concordem
            </li>
            <li>
                <strong>Identificar padrões</strong> - dinâmicas que se repetem
            </li>
            <li>
                <strong>Reconstruir a conexão</strong> - restabelecer o vínculo emocional
            </li>
        </ul>

        <h2>Quando procurar terapia de casal?</h2>
        <ul>
            <li><strong>Dificuldades de comunicação</strong></li>
            <li><strong>Conflitos recorrentes</strong></li>
            <li><strong>Crise de confiança</strong> - traições, mentiras</li>
            <li><strong>Distanciamento afetivo</strong></li>
            <li>
                <strong>Mudanças importantes</strong> - filhos, mudança de cidade
            </li>
            <li><strong>Questões de intimidade</strong></li>
        </ul>
    </article>
</Section>

<Section variant="beige">
    <div class="cta-box">
        <h3>Agende a primeira sessão de terapia de casal</h3>
        <div class="widget-container">
            <a
                id="zl-url"
                class="zl-url"
                href="https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria"
                rel="nofollow"
                data-zlw-doctor="bernardo-carielo-macedo-de-oliveira-pinto"
                data-zlw-type="big_with_calendar"
                data-zlw-opinion="false"
                data-zlw-hide-branding="true"
            >
                Agendar consulta via Doctoralia
            </a>
        </div>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20terapia%20de%20casal"
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
                <a href="/sobre/">→ Conheça a Abordagem Centrada na Pessoa</a>
            </li>
        </ul>
    </div>
</Section>

<Section variant="beige" id="faq">
    <div class="section-header">
        <h2>Perguntas Frequentes sobre Terapia de Casal</h2>
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
        <h2>Prontos para fortalecer a relação de vocês?</h2>
        <p>Entre em contato para agendarmos a primeira sessão</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20terapia%20de%20casal"
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
