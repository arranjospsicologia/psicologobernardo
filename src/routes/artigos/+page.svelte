<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, Calendar, Clock, Search, ArrowRight } from "lucide-svelte";
    import { blogPosts, categories, filterPosts } from "$lib/data/blog";

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
        <p>Reflexões, dicas e conteúdos sobre saúde mental e psicologia</p>
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
        <h2>Gostou do que leu?</h2>
        <p>Talvez seja um bom momento pra conversar.</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostei%20do%20seu%20texto%20no%20blog%20e%20gostaria%20de%20conversar"
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
    </div>
</Section>

<style>
</style>
