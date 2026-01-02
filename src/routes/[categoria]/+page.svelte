<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, Calendar, Clock, ArrowRight } from "lucide-svelte";
    import { getPostsByCategory, getCategoryBySlug } from "$lib/data/blog";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    const category = $derived(data.category);
    const posts = $derived(data.posts);

    const pageSchema = $derived({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `${category.label} - Psicólogo Bernardo`,
        description: category.description,
        url: `https://psicologobernardo.com.br/${category.slug}/`,
        author: {
            "@type": "Person",
            name: "Bernardo Carielo",
            jobTitle: "Psicólogo",
        },
    });
</script>

<SEO
    title={`${category.label} - Artigos | Psicólogo Bernardo`}
    description={category.description}
    canonical={`https://psicologobernardo.com.br/${category.slug}/`}
    jsonLd={pageSchema}
/>

<Breadcrumb items={[{ name: "Início", href: "/" }, { name: category.label }]} />

<section class="blog-hero">
    <div class="container">
        <h1>{category.label}</h1>
        <p>{category.description}</p>
    </div>
</section>

<Section variant="white">
    <div class="blog-grid">
        {#if posts.length === 0}
            <div class="no-results">
                <p>Nenhum artigo encontrado nesta categoria.</p>
            </div>
        {:else}
            {#each posts as post}
                <a href="/{post.categorySlug}/{post.slug}" class="blog-card">
                    <div class="blog-image">
                        <img
                            src={post.image}
                            alt={post.title}
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
            href="https://wa.me/5527998331228?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20conversar"
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
