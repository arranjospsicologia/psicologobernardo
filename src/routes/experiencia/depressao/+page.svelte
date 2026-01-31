<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, ChevronDown } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "Como sei se preciso de ajuda profissional?",
            answer: "Se os sintomas de tristeza, desânimo ou perda de interesse persistem por semanas e afetam sua vida cotidiana, é um sinal de que buscar ajuda pode ser benéfico. Não é preciso esperar que as coisas fiquem 'muito ruins' — quanto antes você buscar apoio, melhor.",
            open: false,
        },
        {
            question: "A terapia substitui a medicação?",
            answer: "A psicoterapia e a medicação são tratamentos complementares. Em muitos casos, a combinação de ambos traz os melhores resultados. Dependendo da intensidade dos sintomas, pode ser indicado também o acompanhamento com um psiquiatra.",
            open: false,
        },
        {
            question: "Quanto tempo leva para melhorar?",
            answer: "Cada pessoa é única, e o tempo de melhora varia. Algumas pessoas sentem diferença em poucas semanas, enquanto outras precisam de mais tempo. O importante é respeitar seu ritmo e saber que o processo terapêutico é uma construção gradual.",
            open: false,
        },
        {
            question: "Posso fazer o tratamento online?",
            answer: "Sim! O atendimento online é regulamentado pelo Conselho Federal de Psicologia e é uma opção eficaz para quem tem dificuldade de deslocamento ou prefere o conforto de casa.",
            open: false,
        },
    ]);

    function toggleFaq(index: number) {
        faqItems = faqItems.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false,
        }));
    }

    let depressionSchema = $derived({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://psicologobernardo.com.br/experiencia/depressao/#webpage",
                url: "https://psicologobernardo.com.br/experiencia/depressao/",
                name: "Psicólogo para Depressão em Vitória ES – Acolhimento e Escuta",
                isPartOf: {
                    "@id": "https://psicologobernardo.com.br/#website",
                },
                mainEntity: {
                    "@id": "https://psicologobernardo.com.br/experiencia/depressao/#article",
                },
            },
            {
                "@type": "Article",
                "@id": "https://psicologobernardo.com.br/experiencia/depressao/#article",
                headline:
                    "Psicólogo para Depressão em Vitória ES – Acolhimento e Escuta",
                name: "Depressão: Como a Psicoterapia pode ajudar?",
                description:
                    "Psicólogo para depressão em Vitória ES. Tratamento humanizado com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online.",
                author: {
                    "@id": "https://psicologobernardo.com.br/sobre/#person",
                },
                publisher: {
                    "@id": "https://psicologobernardo.com.br/#organization",
                },
                image: {
                    "@type": "ImageObject",
                    url: "https://psicologobernardo.com.br/images/experiencia/depressao-350.avif",
                    width: 350,
                    height: 350,
                },
                inLanguage: "pt-BR",
                mentions: {
                    "@type": "Service",
                    "@id": "https://psicologobernardo.com.br/servicos/psicoterapia-individual/#service",
                    name: "Psicoterapia Individual",
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
    title="Psicólogo para Depressão em Vitória ES – Acolhimento e Escuta"
    description="Psicólogo para depressão em Vitória ES. Tratamento humanizado com a Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online."
    canonical="https://psicologobernardo.com.br/experiencia/depressao/"
    jsonLd={depressionSchema}
    preloadImage="/images/experiencia/depressao-350.avif"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Experiência", href: "/#experiencia" },
        { name: "Depressão" },
    ]}
/>

<section class="experience-hero">
    <div class="container">
        <h1>Psicólogo para Depressão em Vitória ES</h1>
        <p class="hero-subtitle">
            Psicoterapia em <strong>Jardim da Penha, Vitória ES</strong>. Um
            espaço seguro para atravessar momentos de tristeza profunda e falta
            de sentido.
        </p>
        <div class="hero-image">
            <picture>
                <source
                    srcset="/images/experiencia/depressao-200.avif 200w,
                            /images/experiencia/depressao-350.avif 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/avif"
                />
                <source
                    srcset="/images/experiencia/depressao-200.webp 200w,
                            /images/experiencia/depressao-350.webp 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/webp"
                />
                <img
                    src="/images/experiencia/depressao-350.webp"
                    alt="Tratamento para depressão - Psicólogo em Vitória ES"
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
        <h2>Você está passando por um momento difícil?</h2>
        <p>
            Sentir-se triste às vezes é normal. Faz parte da vida. Mas quando a
            tristeza se torna persistente, quando as coisas que antes traziam
            alegria perdem o sentido, quando levantar da cama se torna um
            esforço enorme, pode ser sinal de que algo precisa de atenção.
        </p>
        <p>
            A depressão é mais do que tristeza passageira. Ela afeta como você
            se sente, como pensa e como age. Se você se identifica com isso,
            quero que saiba:
            <strong>você não está sozinho</strong>. E existe ajuda.
        </p>

        <h2>Sinais que merecem atenção</h2>
        <ul>
            <li>
                <strong>Tristeza persistente</strong> — sensação de vazio que não
                passa
            </li>
            <li>
                <strong>Perda de interesse</strong> — dificuldade em sentir prazer
                nas coisas que antes gostava
            </li>
            <li>
                <strong>Cansaço extremo</strong> — falta de energia mesmo para atividades
                simples
            </li>
            <li>
                <strong>Alterações no sono</strong> — dormir demais ou ter insônia
            </li>
            <li>
                <strong>Mudanças no apetite</strong> — comer muito ou perder a fome
            </li>
            <li>
                <strong>Dificuldade de concentração</strong> — mente nublada, esquecimentos
            </li>
            <li>
                <strong>Isolamento social</strong> — evitar pessoas e situações
            </li>
            <li>
                <strong>Pensamentos negativos</strong> — autocrítica excessiva, sensação
                de inutilidade
            </li>
            <li>
                <strong>Falta de esperança</strong> — sentir que nada vai melhorar
            </li>
        </ul>

        <h2>Como a psicoterapia pode ajudar?</h2>
        <p>
            Na <strong>Abordagem Centrada na Pessoa</strong>, eu ofereço um
            espaço de escuta genuína e acolhimento. Não há julgamentos. Não há
            pressa. O processo terapêutico acontece no seu ritmo.
        </p>
        <p>A terapia pode ajudar você a:</p>
        <ul>
            <li>
                <strong>Compreender</strong> o que está por trás dos sentimentos
                de tristeza e desânimo
            </li>
            <li>
                <strong>Expressar</strong> emoções que talvez você tenha guardado
                por muito tempo
            </li>
            <li>
                <strong>Reconectar-se</strong> consigo mesmo e com o que tem significado
                para você
            </li>
            <li>
                <strong>Desenvolver</strong> recursos internos para lidar com os
                desafios
            </li>
            <li>
                <strong>Encontrar</strong> caminhos que façam sentido para você
            </li>
        </ul>
    </article>
</Section>

<Section variant="beige">
    <div class="cta-box">
        <h3>Agende uma conversa</h3>
        <p>
            Se você está passando por um momento difícil, saiba que não precisa
            enfrentar isso sozinho.
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
            <li><a href="/servicos/terapia-online/">→ Terapia Online</a></li>
            <li>
                <a href="/experiencia/ansiedade/">→ Psicólogo para Ansiedade</a>
            </li>
            <li>
                <a href="/experiencia/burnout/">→ Psicólogo para Burnout</a>
            </li>
        </ul>
    </div>
</Section>

<Section variant="beige" id="faq">
    <div class="section-header">
        <h2>Perguntas Frequentes sobre Depressão e Psicoterapia</h2>
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
        <h2>Pronto para dar o primeiro passo?</h2>
        <p>
            Você não precisa enfrentar isso sozinho. Entre em contato para
            conversarmos.
        </p>
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
