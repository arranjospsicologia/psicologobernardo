<script lang="ts">
    import { Breadcrumb, Button, Card, SEO, Section } from "$lib";
    import { Heart, Monitor, Phone, Users } from "lucide-svelte";
    import {
        buildWhatsAppUrl,
        schemaIds,
        siteProfile,
    } from "$lib/data/siteProfile";
    import {
        primaryServiceItems,
        serviceNavItems,
    } from "$lib/data/siteNavigation";

    const serviceIcons = {
        "Psicoterapia Individual": Heart,
        "Terapia de Casal": Users,
        "Terapia Online": Monitor,
    } as const;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://psicologobernardo.com.br/servicos/#webpage",
                url: "https://psicologobernardo.com.br/servicos/",
                name: "Serviços de psicologia em Vitória e online",
                isPartOf: {
                    "@id": schemaIds.website,
                },
                about: {
                    "@id": schemaIds.organization,
                },
            },
            {
                "@type": "ItemList",
                "@id": "https://psicologobernardo.com.br/servicos/#list",
                itemListElement: serviceNavItems.map((item, index) => ({
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
    title="Serviços de Psicologia em Vitória ES | Bernardo Carielo"
    description="Conheça os serviços de psicologia oferecidos por Bernardo Carielo em Vitória ES e online, com destaque para psicoterapia individual e terapia de casal."
    canonical="https://psicologobernardo.com.br/servicos/"
    {jsonLd}
/>

<Breadcrumb items={[{ name: "Início", href: "/" }, { name: "Serviços" }]} />

<section class="service-hero">
    <div class="container">
        <h1>Serviços de psicologia em Vitória e online</h1>
        <p class="hero-subtitle">
            Ofereço diferentes caminhos de cuidado clínico, todos baseados na escuta atenta e na
            presença humana. Seja na terapia individual ou de casal, o foco é construir um espaço
            seguro para o seu desenvolvimento.
        </p>
        <div class="hero-buttons hero-buttons--centered">
            <Button
                href={buildWhatsAppUrl("Olá, vim pela página de serviços e gostaria de saber qual atendimento faz mais sentido para mim.")}
                variant="primary"
            >
                <Phone size={20} />
                Conversar pelo WhatsApp
            </Button>
            <Button href="/psicologo-vitoria-es/" variant="outline">
                Ver atendimento em Vitória
            </Button>
        </div>
    </div>
</section>

<Section variant="white">
    <div class="service-content">
        <p class="lead-paragraph">
            Se você está buscando um psicólogo em Vitória, a forma mais simples de decidir por onde
            começar é pensar na natureza da sua demanda. Quando a questão é sua história, seus
            sentimentos, sua rotina ou seus relacionamentos, a porta principal costuma ser a
            <a href="/servicos/psicoterapia-individual/">psicoterapia individual</a>.
        </p>
    </div>
</Section>

<Section variant="beige">
    <div class="section-header">
        <h2>Serviços principais</h2>
        <p>Hierarquia clara para facilitar a escolha e fortalecer as páginas comerciais certas.</p>
    </div>
    <div class="cards-grid">
        {#each primaryServiceItems as item}
            <Card
                icon={serviceIcons[item.name as keyof typeof serviceIcons]}
                title={item.name}
                href={item.href}
            >
                <p>{item.description}</p>
            </Card>
        {/each}
    </div>
</Section>

<Section variant="white">
    <div class="section-header">
        <h2>Outros atendimentos</h2>
        <p>Serviços específicos, sem competir com a psicoterapia individual como eixo principal.</p>
    </div>
    <div class="hub-list">
        {#each serviceNavItems.slice(3) as item}
            <a href={item.href} class="hub-list-item">
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
                <span>Saiba mais →</span>
            </a>
        {/each}
    </div>
</Section>

<Section variant="beige">
    <div class="related-links">
        <h3>Como decidir por onde começar</h3>
        <ul>
            <li>
                <a href="/servicos/psicoterapia-individual/"
                    >→ Quero um espaço para trabalhar minhas questões de forma individual</a
                >
            </li>
            <li>
                <a href="/servicos/terapia-de-casal/"
                    >→ A principal demanda envolve a relação e precisa ser olhada em conjunto</a
                >
            </li>
            <li>
                <a href="/experiencia/"
                    >→ Ainda não sei o tipo de serviço, mas reconheço a dor ou o contexto em que estou</a
                >
            </li>
        </ul>
    </div>
</Section>

<Section variant="gradient">
    <div class="cta-content">
        <h2>Quando fizer sentido, começamos pela conversa mais simples</h2>
        <p>
            Você pode descrever brevemente o que está vivendo e eu indico qual modalidade tende a
            fazer mais sentido neste momento.
        </p>
        <Button
            href={buildWhatsAppUrl("Olá, gostaria de entender qual serviço faz mais sentido para mim.")}
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

    .hub-list {
        display: grid;
        gap: 1rem;
        max-width: 900px;
        margin: 0 auto;
    }

    .hub-list-item {
        display: flex;
        justify-content: space-between;
        gap: 1.5rem;
        padding: 1.5rem;
        border-radius: var(--radius-md);
        background: var(--secondary-light);
        border: 1px solid var(--border-light);
        align-items: center;
    }

    .hub-list-item h3 {
        font-size: 1.125rem;
        margin-bottom: 0.35rem;
    }

    .hub-list-item p {
        color: var(--text-light);
        margin: 0;
    }

    .hub-list-item span {
        color: var(--primary-color);
        font-weight: 600;
        white-space: nowrap;
    }

    @media (max-width: 768px) {
        .hub-list-item {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>
