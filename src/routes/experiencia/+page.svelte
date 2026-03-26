<script lang="ts">
    import { Breadcrumb, Button, Card, SEO, Section } from "$lib";
    import {
        CircleAlert,
        HeartPulse,
        Phone,
        SmilePlus,
        UsersRound,
        Zap,
    } from "lucide-svelte";
    import {
        buildWhatsAppUrl,
        schemaIds,
        siteProfile,
    } from "$lib/data/siteProfile";
    import { experienceNavItems } from "$lib/data/siteNavigation";

    const experienceIcons = {
        Ansiedade: Zap,
        Depressão: HeartPulse,
        Burnout: CircleAlert,
        Relacionamentos: UsersRound,
        Autoestima: SmilePlus,
    } as const;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://psicologobernardo.com.br/experiencia/#webpage",
                url: "https://psicologobernardo.com.br/experiencia/",
                name: "Como posso ajudar | Psicólogo em Vitória ES",
                isPartOf: {
                    "@id": schemaIds.website,
                },
                about: {
                    "@id": schemaIds.organization,
                },
            },
            {
                "@type": "ItemList",
                "@id": "https://psicologobernardo.com.br/experiencia/#list",
                itemListElement: experienceNavItems.map((item, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    name: item.name,
                    url: `${siteProfile.siteUrl}${item.href}`,
                })),
            },
        ],
    };
</script>

<SEO
    title="Como Posso Ajudar | Bernardo Carielo Psicólogo em Vitória ES"
    description="Veja em quais contextos a psicoterapia pode ajudar: ansiedade, depressão, burnout, autoestima e relacionamentos. Atendimento presencial em Vitória e online."
    canonical="https://psicologobernardo.com.br/experiencia/"
    {jsonLd}
/>

<Breadcrumb items={[{ name: "Início", href: "/" }, { name: "Como posso ajudar" }]} />

<section class="experience-hero">
    <div class="container">
        <h1>Como posso ajudar</h1>
        <p class="hero-subtitle">
            Esta área organiza o site pelas dores, dúvidas e contextos que costumam levar alguém a
            buscar terapia. O serviço principal continua sendo a
            <a href="/servicos/psicoterapia-individual/">psicoterapia individual</a>, mas aqui você
            encontra a porta de entrada mais parecida com o que está vivendo.
        </p>
        <div class="hero-buttons hero-buttons--centered">
            <Button
                href={buildWhatsAppUrl("Olá, estou olhando a área de como posso ajudar e gostaria de conversar sobre o que estou vivendo.")}
                variant="primary"
            >
                <Phone size={20} />
                Conversar pelo WhatsApp
            </Button>
            <Button href="/servicos/psicoterapia-individual/" variant="outline">
                Ver psicoterapia individual
            </Button>
        </div>
    </div>
</section>

<Section variant="white">
    <div class="service-content">
        <p class="lead-paragraph">
            Nem sempre a primeira busca de quem precisa de terapia é pelo nome do serviço. Muitas
            vezes a procura começa pela experiência concreta: ansiedade, cansaço extremo,
            dificuldade nos relacionamentos, tristeza que não passa ou um incômodo persistente consigo
            mesmo. É para isso que este hub existe.
        </p>
    </div>
</Section>

<Section variant="beige">
    <div class="section-header">
        <h2>Demandas mais frequentes</h2>
        <p>Cada página ajuda a entender o contexto e aponta para o cuidado mais adequado.</p>
    </div>
    <div class="cards-grid">
        {#each experienceNavItems as item}
            <Card
                icon={experienceIcons[item.name as keyof typeof experienceIcons]}
                title={item.name}
                href={item.href}
            >
                <p>{item.description}</p>
            </Card>
        {/each}
    </div>
</Section>

<Section variant="white">
    <div class="related-links">
        <h3>Como usar esta área sem se perder</h3>
        <ul>
            <li>
                <a href="/experiencia/ansiedade/"
                    >→ Se a principal sensação é urgência, aceleração ou preocupação constante</a
                >
            </li>
            <li>
                <a href="/experiencia/relacionamento/"
                    >→ Se o sofrimento aparece sobretudo nas relações, nos términos ou nos conflitos</a
                >
            </li>
            <li>
                <a href="/servicos/psicoterapia-individual/"
                    >→ Se você já sabe que quer começar a psicoterapia sem precisar passar por uma página temática</a
                >
            </li>
        </ul>
    </div>
</Section>

<Section variant="gradient">
    <div class="cta-content">
        <h2>Você não precisa chegar com tudo organizado</h2>
        <p>
            Se quiser, basta me contar em poucas linhas o que está mais difícil hoje. A partir
            disso, seguimos para a página ou para o atendimento mais adequado.
        </p>
        <Button
            href={buildWhatsAppUrl("Olá, quero conversar sobre o que estou vivendo e entender como a terapia pode ajudar.")}
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
    </div>
</Section>

<style>
    .lead-paragraph {
        font-size: 1.125rem;
        line-height: 1.9;
    }

    .hero-buttons--centered {
        justify-content: center;
    }
</style>
