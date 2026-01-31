<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, ChevronDown } from "lucide-svelte";

    let faqItems = $state([
        {
            question: "Como a terapia pode melhorar minha autoestima?",
            answer: "A terapia oferece um espaço de aceitação incondicional onde você pode explorar suas experiências, reconhecer padrões de autocrítica e desenvolver uma relação mais compassiva consigo mesmo. Na Abordagem Centrada na Pessoa, a relação terapêutica em si é transformadora.",
            open: false,
        },
        {
            question: "Quanto tempo leva para melhorar a autoestima?",
            answer: "Não existe um prazo fixo, pois cada pessoa tem seu próprio ritmo. Algumas pessoas começam a perceber mudanças em poucas sessões, enquanto outras preferem um processo mais longo. O importante é respeitar seu tempo e suas necessidades.",
            open: false,
        },
        {
            question: "A baixa autoestima tem cura?",
            answer: "A autoestima não é uma doença, mas sim um aspecto da sua relação consigo mesmo que pode ser transformado. Com o processo terapêutico, é possível desenvolver uma autoestima mais saudável, baseada em aceitação, autocompaixão e autenticidade.",
            open: false,
        },
        {
            question: "Posso fazer terapia para autoestima online?",
            answer: "Sim! O atendimento online é autorizado pelo Conselho Federal de Psicologia e mantém a mesma qualidade do atendimento presencial. É uma ótima opção para quem prefere o conforto de casa ou tem dificuldade de deslocamento.",
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
                "@id": "https://psicologobernardo.com.br/experiencia/autoestima/#webpage",
                url: "https://psicologobernardo.com.br/experiencia/autoestima/",
                name: "Psicólogo para Autoestima em Vitória ES – Você Merece se Sentir Bem",
                isPartOf: {
                    "@id": "https://psicologobernardo.com.br/#website",
                },
                mainEntity: {
                    "@id": "https://psicologobernardo.com.br/experiencia/autoestima/#article",
                },
            },
            {
                "@type": "Article",
                "@id": "https://psicologobernardo.com.br/experiencia/autoestima/#article",
                headline:
                    "Psicólogo para Autoestima em Vitória ES – Você Merece se Sentir Bem",
                name: "Baixa Autoestima: Como a Psicoterapia pode ajudar?",
                description:
                    "Psicólogo para autoestima em Vitória ES. Você merece se sentir bem com você mesmo! Tratamento humanizado com a Abordagem Centrada na Pessoa.",
                author: {
                    "@id": "https://psicologobernardo.com.br/sobre/#person",
                },
                publisher: {
                    "@id": "https://psicologobernardo.com.br/#organization",
                },
                image: {
                    "@type": "ImageObject",
                    url: "https://psicologobernardo.com.br/images/experiencia/autoestima-350.avif",
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
    title="Psicólogo para Autoestima em Vitória ES – Você Merece se Sentir Bem"
    description="Psicólogo para autoestima em Vitória ES. Você merece se sentir bem com você mesmo! Tratamento humanizado com a Abordagem Centrada na Pessoa."
    canonical="https://psicologobernardo.com.br/experiencia/autoestima/"
    jsonLd={experienceSchema}
    preloadImage="/images/experiencia/autoestima-350.avif"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Experiência", href: "/#experiencia" },
        { name: "Autoestima" },
    ]}
/>

<section class="experience-hero">
    <div class="container">
        <h1>Psicólogo para Autoestima em Vitória ES</h1>
        <p class="hero-subtitle">
            Cuidados da autoestima na Abordagem Centrada na Pessoa: você merece
            se sentir bem com você mesmo!
        </p>
        <div class="hero-image">
            <picture>
                <source
                    srcset="/images/experiencia/autoestima-200.avif 200w,
                            /images/experiencia/autoestima-350.avif 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/avif"
                />
                <source
                    srcset="/images/experiencia/autoestima-200.webp 200w,
                            /images/experiencia/autoestima-350.webp 350w"
                    sizes="(max-width: 480px) 200px, 350px"
                    type="image/webp"
                />
                <img
                    src="/images/experiencia/autoestima-350.webp"
                    alt="Cuidados da autoestima - Psicólogo em Vitória ES"
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
        <h2>Você merece se sentir bem com você mesmo</h2>
        <p>
            A autoestima é a forma como você se vê, se valoriza e se relaciona
            consigo mesmo. Ela influencia diretamente suas escolhas, seus
            relacionamentos e sua qualidade de vida. Quando a autoestima está
            baixa, é comum sentir que você não é suficiente, que não merece
            coisas boas ou que precisa se esforçar demais para ser aceito.
        </p>
        <p>
            Se você convive com <strong>autocrítica constante</strong>,
            <strong>dificuldade em aceitar elogios</strong>,
            <strong>medo de ser rejeitado</strong>,
            <strong>comparação excessiva com os outros</strong> ou
            <strong>sensação de inadequação</strong>, saiba que você não está
            sozinho. E mais importante:
            <strong>você merece se sentir bem com você mesmo</strong>.
        </p>

        <h2>Como a psicoterapia ajuda a autoestima?</h2>
        <p>
            Na <strong>Abordagem Centrada na Pessoa</strong> (ACP), desenvolvida
            por Carl Rogers, o foco está em criar um ambiente de aceitação incondicional.
            Isso significa que você terá um espaço onde pode ser você mesmo, sem
            julgamentos.
        </p>
        <p>No processo terapêutico, você pode:</p>
        <ul>
            <li>
                <strong>Reconhecer padrões de autocrítica</strong> e entender de
                onde eles vêm
            </li>
            <li>
                <strong>Desenvolver autocompaixão</strong>, tratando a si mesmo
                com mais gentileza
            </li>
            <li>
                <strong>Identificar suas qualidades e valores</strong>,
                reconhecendo seu próprio valor
            </li>
            <li>
                <strong>Aprender a estabelecer limites</strong> e priorizar suas
                necessidades
            </li>
            <li>
                <strong>Fortalecer sua autenticidade</strong>, sendo mais você
                mesmo nas relações
            </li>
            <li>
                <strong>Reduzir a necessidade de aprovação externa</strong>,
                confiando mais em si
            </li>
        </ul>

        <h2>Sinais de que a autoestima pode precisar de atenção</h2>
        <ul>
            <li>
                Autocrítica excessiva ou pensamentos negativos sobre si mesmo
            </li>
            <li>
                Dificuldade em aceitar elogios ou reconhecer suas conquistas
            </li>
            <li>Medo constante de ser rejeitado ou não ser aceito</li>
            <li>Comparação frequente com outras pessoas</li>
            <li>Dificuldade em dizer "não" ou estabelecer limites</li>
            <li>Sensação de que precisa se esforçar demais para ser amado</li>
            <li>Evitar desafios por medo de falhar</li>
            <li>
                Relacionamentos em que você se sente inferior ou desvalorizado
            </li>
        </ul>

        <h2>Por que escolher a Abordagem Centrada na Pessoa?</h2>
        <p>A ACP é especialmente eficaz para questões de autoestima porque:</p>
        <ul>
            <li>
                Oferece aceitação incondicional, ajudando você a se aceitar como
                é
            </li>
            <li>Respeita seu ritmo e suas escolhas, sem imposições</li>
            <li>
                Foca na relação terapêutica como ferramenta de transformação
            </li>
            <li>Promove o autoconhecimento e a autenticidade</li>
            <li>Valoriza suas experiências e sentimentos sem julgamentos</li>
        </ul>
    </article>
</Section>

<Section variant="beige">
    <div class="cta-box">
        <h3>Agende sua primeira sessão</h3>
        <p>
            Entre em contato para conversarmos sobre como a psicoterapia pode te
            ajudar a desenvolver uma autoestima mais saudável.
        </p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20autoestima"
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
                <a href="/experiencia/depressao/">→ Psicólogo para Depressão</a>
            </li>
        </ul>
    </div>
</Section>

<Section variant="beige" id="faq">
    <div class="section-header">
        <h2>Perguntas Frequentes sobre Autoestima e Psicoterapia</h2>
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
        <h2>Pronto para cuidar da sua autoestima?</h2>
        <p>Entre em contato para agendarmos uma primeira conversa</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20autoestima"
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
