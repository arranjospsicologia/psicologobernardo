<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, Calendar, Clock, Search, ArrowRight } from "lucide-svelte";
    import { blogPosts, categories, filterPosts } from "$lib/data/blog";
    import { buildWhatsAppUrl } from "$lib/data/siteProfile";

    let searchTerm = $state("");
    let selectedCategory = $state("todos");

    let filteredPosts = $derived(
        filterPosts(blogPosts, selectedCategory, searchTerm),
    );

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Artigos - Psicólogo Bernardo",
        description:
            "Reflexões, dicas e conteúdos sobre saúde mental e psicologia",
        url: "https://psicologobernardo.com.br/artigos/",
        author: {
            "@type": "Person",
            name: "Bernardo Carielo",
            jobTitle: "Psicólogo",
        },
    };
</script>

<SEO
    title="Artigos - Psicólogo Bernardo | Bernardo Carielo"
    description="Artigos sobre saúde mental, psicologia e bem-estar por Bernardo Carielo, psicólogo em Vitória/ES - CRP 16/5527"
    canonical="https://psicologobernardo.com.br/artigos/"
    jsonLd={blogSchema}
/>

<!-- Breadcrumb -->
<Breadcrumb items={[{ name: "Início", href: "/" }, { name: "Artigos" }]} />

<section class="blog-hero">
    <div class="container">
        <h1>Artigos</h1>
        <p class="hero-subtitle">
            Reflexões sobre terapia, saúde emocional e vida cotidiana — escritas por 
            <strong>Bernardo Carielo</strong>, psicólogo em Vitória ES.
        </p>
    </div>
</section>

<Section variant="white">
    <div class="blog-controls">
        <div class="search-wrapper">
            <Search size={18} />
            <input
                type="text"
                placeholder="Buscar artigos por título..."
                class="search-input"
                bind:value={searchTerm}
            />
        </div>
        <select class="filter-select" bind:value={selectedCategory}>
            {#each categories as cat}
                <option value={cat.id}>{cat.label}</option>
            {/each}
        </select>
    </div>

    <div class="blog-grid">
        {#if filteredPosts.length === 0}
            <div class="no-results">
                <p>Nenhum post encontrado com os filtros selecionados.</p>
            </div>
        {:else}
            {#each filteredPosts as post}
                <a href="/{post.categorySlug}/{post.slug}" class="blog-card">
                    <div class="blog-image">
                        <img
                            src={post.image}
                            alt={post.altText || post.title}
                            loading="lazy"
                            width="350"
                            height="233"
                        />
                        <div class="blog-category">{post.category}</div>
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span><Calendar size={14} /> {post.date}</span>
                            <span><Clock size={14} /> {post.readTime}</span>
                        </div>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <span class="blog-link">
                            Ler mais <ArrowRight size={16} />
                        </span>
                    </div>
                </a>
            {/each}
        {/if}
    </div>
</Section>

<Section variant="gradient">
    <div class="cta-content">
        <h2>Quando fizer sentido, o primeiro passo pode ser simples</h2>
        <p>
            Se algum texto aqui ressoou com o que você está vivendo, você pode escrever em poucas linhas e, a partir daí, alinhamos o formato mais adequado — seja o atendimento presencial em <strong>Vitória ES</strong> ou na modalidade <strong>online</strong>.
        </p>
        <Button
            href={buildWhatsAppUrl("Olá Bernardo, li um artigo no seu site e gostaria de conversar sobre atendimento.")}
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Agendar conversa
        </Button>
    </div>
</Section>

<style>
    .blog-hero {
        padding: calc(var(--header-height) + 3rem) 0 4rem;
        background: var(--beige-light);
        text-align: center;
    }

    .hero-subtitle {
        max-width: 600px;
        margin: 1rem auto 0;
        font-size: 1.15rem;
        color: var(--text-light);
        line-height: 1.6;
    }

    .hero-subtitle strong {
        color: var(--primary-dark);
        font-weight: 700;
    }

    @media (max-width: 640px) {
        .blog-hero {
            padding-top: calc(var(--header-height) + 2rem);
        }

        .hero-subtitle {
            font-size: 1.05rem;
        }
    }
</style>
