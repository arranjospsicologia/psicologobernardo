<script lang="ts">
    import "$lib/styles/blog.css";
    import { Section, Button, Breadcrumb, SEO, Pagination, buildWhatsAppUrl } from "$lib";
    import { Phone, Calendar, Clock, ArrowRight } from "lucide-svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    const category = $derived(data.category);
    const posts = $derived(data.posts);
    const pagination = $derived(data.pagination);

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
                            alt={post.altText || post.title}
                            loading="lazy"
                            width="350"
                            height="233"
                        />
                        <div class="blog-category">{post.categoryLabel}</div>
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span><Calendar size={14} /> {post.dateLabel}</span>
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

    <Pagination {pagination} />
</Section>

<Section variant="gradient">
    <div class="cta-content">
        <h2>Se algo fez sentido, o próximo passo pode ser uma conversa</h2>
        <p>
            Escreva em poucas linhas o que está vivendo. A partir daí, alinhamos formato e próximo passo.
        </p>
        <Button
            href={buildWhatsAppUrl("Olá, vi seus artigos e gostaria de conversar.")}
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Falar pelo WhatsApp
        </Button>
    </div>
</Section>

<style>
</style>
