<script lang="ts">
    import "$lib/styles/blog.css";
    import { Section, Button, Breadcrumb, SEO, Pagination, buildWhatsAppUrl } from "$lib";
    import { Phone, Calendar, Clock, ArrowRight } from "lucide-svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    const category = $derived(data.category);
    const posts = $derived(data.posts);
    const pagination = $derived(data.pagination);
    const seo = $derived(data.seo);
    const page = $derived(pagination.currentPage);
</script>

<SEO
    title={seo.title}
    description={seo.description}
    canonical={seo.canonical}
/>

<Breadcrumb items={seo.breadcrumbs} />

<section class="blog-hero">
    <div class="container">
        <h1>{category.label} — Página {page}</h1>
        <p>{category.description}</p>
    </div>
</section>

<Section variant="white">
    <div class="blog-grid">
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
    </div>

    <Pagination {pagination} />
</Section>

<Section variant="gradient">
    <div class="cta-content">
        <h2>Gostou do que leu?</h2>
        <p>Talvez seja um bom momento pra conversar.</p>
        <Button
            href={buildWhatsAppUrl("Olá, vi seu site e gostaria de conversar")}
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
