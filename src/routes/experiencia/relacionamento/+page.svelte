<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, ChevronDown } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "Preciso vir com meu parceiro(a)?",
            answer: "Não necessariamente. A terapia individual é um espaço para você trabalhar suas questões, padrões e vivências. Se você deseja trabalhar questões do casal em conjunto, também ofereço terapia de casal. Às vezes, começar pela terapia individual ajuda a clarear suas próprias questões.",
            open: false,
        },
        {
            question: "A terapia pode me ajudar a decidir se devo terminar?",
            answer: "A terapia não vai te dizer o que fazer, mas pode ajudar você a clarear seus sentimentos, entender o que é importante para você e fazer uma escolha mais consciente. O objetivo é que você se sinta mais seguro para tomar suas próprias decisões.",
            open: false,
        },
        {
            question: "E se eu acabei de terminar um relacionamento?",
            answer: "O fim de um relacionamento é um momento importante que merece atenção. A terapia pode ajudar você a processar esse luto, compreender o que aconteceu e se preparar para novas possibilidades quando se sentir pronto.",
            open: false,
        },
        {
            question: "Posso fazer a terapia online?",
            answer: "Sim! O atendimento online é regulamentado pelo Conselho Federal de Psicologia e mantém a mesma qualidade do atendimento presencial.",
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
                "@id": "https://psicologobernardo.com.br/experiencia/relacionamento/#webpage",
                url: "https://psicologobernardo.com.br/experiencia/relacionamento/",
                name: "Psicólogo para Relacionamentos em Vitória ES",
                isPartOf: {
                    "@id": "https://psicologobernardo.com.br/#website",
                },
                mainEntity: {
                    "@id": "https://psicologobernardo.com.br/experiencia/relacionamento/#article",
                },
            },
            {
                "@type": "Article",
                "@id": "https://psicologobernardo.com.br/experiencia/relacionamento/#article",
                headline: "Psicólogo para Relacionamentos em Vitória ES",
                name: "Relacionamentos: Como a Psicoterapia pode ajudar?",
                description:
                    "Psicólogo para dificuldades de relacionamento em Vitória ES. Terapia para conflitos, comunicação e padrões que se repetem. Atendimento presencial em Jardim da Penha e online.",
                author: {
                    "@id": "https://psicologobernardo.com.br/sobre/#person",
                },
                publisher: {
                    "@id": "https://psicologobernardo.com.br/#organization",
                },
                image: {
                    "@type": "ImageObject",
                    url: "https://psicologobernardo.com.br/images/experiencia/relacionamento-350.avif",
                    width: 350,
                    height: 350,
                },
                inLanguage: "pt-BR",
                mentions: {
                    "@type": "Service",
                    "@id": "https://psicologobernardo.com.br/servicos/terapia-de-casal/#service",
                    name: "Terapia de Casal",
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
    title="Psicólogo para Dificuldades de Relacionamento em Vitória ES"
    description="Psicólogo para dificuldades de relacionamento em Vitória ES. Terapia para conflitos, comunicação e padrões que se repetem. Atendimento presencial em Jardim da Penha e online."
    canonical="https://psicologobernardo.com.br/experiencia/relacionamento/"
    jsonLd={experienceSchema}
    preloadImage="/images/experiencia/relacionamento-350.avif"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Experiência", href: "/#experiencia" },
        { name: "Relacionamento" },
    ]}
/>

<section class="experience-hero">
    <div class="container">
        <h1>Psicólogo para Relacionamentos em Vitória ES</h1>
        <p class="hero-subtitle">
            Espaço acolhedor para entender padrões, conflitos e escolhas nos
            seus relacionamentos
        </p>
        <div class="hero-image">
            <picture>
                <source
                    srcset="/images/experiencia/relacionamento-200.avif 200w,
                            /images/experiencia/relacionamento-350.avif 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/avif"
                />
                <source
                    srcset="/images/experiencia/relacionamento-200.webp 200w,
                            /images/experiencia/relacionamento-350.webp 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/webp"
                />
                <img
                    src="/images/experiencia/relacionamento-350.webp"
                    alt="Terapia para relacionamentos - Psicólogo em Vitória ES"
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
        <h2>Você está enfrentando dificuldades nos seus relacionamentos?</h2>
        <p>
            Os relacionamentos são uma parte fundamental da vida. É através
            deles que nos sentimos conectados, amados e compreendidos. Mas
            também é nos relacionamentos que surgem muitos dos nossos maiores
            desafios: conflitos, incompreensões, distanciamento, dependência
            emocional, dificuldades de comunicação.
        </p>
        <p>
            Às vezes, notamos que os mesmos padrões se repetem: escolhemos
            pessoas parecidas, caímos nas mesmas armadilhas, ou sentimos que
            algo nos impede de nos conectar de verdade.
        </p>

        <h2>Questões comuns relacionadas a relacionamentos</h2>
        <ul>
            <li>
                <strong>Conflitos recorrentes</strong> — brigas que se repetem, discussões
                que não se resolvem
            </li>
            <li>
                <strong>Dificuldade de comunicação</strong> — sentir que não consegue
                se expressar ou que o outro não te entende
            </li>
            <li>
                <strong>Padrões que se repetem</strong> — perceber que você sempre
                "cai nas mesmas" em diferentes relacionamentos
            </li>
            <li>
                <strong>Dependência emocional</strong> — dificuldade de estar bem
                sozinho, medo intenso de perder o outro
            </li>
            <li>
                <strong>Término de relacionamento</strong> — lidar com o luto de
                um fim de relação
            </li>
            <li>
                <strong>Indecisão</strong> — não saber se deve continuar ou encerrar
                um relacionamento
            </li>
            <li>
                <strong>Ciúme e insegurança</strong> — desconfiança excessiva que
                afeta a relação
            </li>
            <li>
                <strong>Distanciamento emocional</strong> — sentir-se desconectado
                do parceiro
            </li>
        </ul>

        <h2>Como a psicoterapia pode ajudar?</h2>
        <p>
            Na <strong>Abordagem Centrada na Pessoa</strong>, o foco está em
            você e na sua forma única de vivenciar os relacionamentos. Não
            existe um "modelo certo" de relacionamento — o que importa é que
            você possa se compreender melhor.
        </p>
        <p>A terapia pode ajudar você a:</p>
        <ul>
            <li>
                <strong>Reconhecer padrões</strong> — entender por que certas situações
                se repetem
            </li>
            <li>
                <strong>Compreender suas necessidades</strong> — identificar o que
                você realmente busca
            </li>
            <li>
                <strong>Desenvolver comunicação</strong> — expressar seus sentimentos
                e ouvir o outro
            </li>
            <li>
                <strong>Fortalecer sua autoestima</strong> — sentir-se mais seguro
                nas relações
            </li>
            <li>
                <strong>Fazer escolhas alinhadas</strong> — decidir com mais clareza
            </li>
        </ul>
        <p>
            É importante ressaltar que a terapia individual foca em você. Se
            você deseja trabalhar questões do casal em conjunto, também ofereço
            <a href="/servicos/terapia-de-casal/">terapia de casal</a>.
        </p>
    </article>
</Section>

<Section variant="beige">
    <div class="cta-box">
        <h3>Agende uma conversa</h3>
        <p>
            Se você está enfrentando dificuldades nos seus relacionamentos,
            entre em contato.
        </p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
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
            <li>
                <a href="/servicos/terapia-de-casal/">→ Terapia de Casal</a>
            </li>
            <li><a href="/servicos/terapia-online/">→ Terapia Online</a></li>
            <li>
                <a href="/experiencia/autoestima/"
                    >→ Psicólogo para Autoestima</a
                >
            </li>
        </ul>
    </div>
</Section>

<Section variant="beige" id="faq">
    <div class="section-header">
        <h2>Perguntas Frequentes sobre Terapia para Relacionamentos</h2>
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
        <h2>Pronto para entender melhor seus relacionamentos?</h2>
        <p>Entre em contato para agendarmos uma primeira conversa</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
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
