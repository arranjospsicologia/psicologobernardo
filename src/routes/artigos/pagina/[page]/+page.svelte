<script lang="ts">
    import "$lib/styles/blog.css";
    import { Section, Button, Breadcrumb, SEO, Pagination } from "$lib";
    import { Phone, Calendar, Clock, ArrowRight } from "lucide-svelte";
    import { buildWhatsAppUrl } from "$lib/data/siteProfile";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    const posts = $derived(data.posts);
    const pagination = $derived(data.pagination);
    const categories = $derived(data.categories);
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
        <h1>Artigos — Página {page}</h1>
        <p class="hero-subtitle">
            Reflexões sobre terapia, saúde emocional e vida cotidiana — escritas por
            <strong>Bernardo Carielo</strong>, psicólogo em Vitória ES.
        </p>
    </div>
</section>

<section class="category-nav">
    <div class="container">
        <h2 class="category-nav-title">Explore por tema</h2>
        <div class="category-pills">
            {#each categories as cat}
                <a href="/{cat.slug}/" class="category-pill">
                    <span class="category-pill-label">{cat.label}</span>
                    <span class="category-pill-count">{cat.postCount}</span>
                </a>
            {/each}
        </div>
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

    .category-nav {
        background: var(--white);
        padding: 2rem 0;
        border-bottom: 1px solid var(--border-light);
    }

    .category-nav-title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-light);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
        text-align: center;
    }

    .category-pills {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.625rem;
    }

    .category-pill {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        border: 1px solid var(--border-light);
        border-radius: 2rem;
        background: var(--white);
        color: var(--text-color);
        font-size: 0.9375rem;
        font-weight: 500;
        text-decoration: none;
        transition: var(--transition);
    }

    .category-pill:hover {
        border-color: var(--primary-color);
        background: var(--secondary-color);
        color: var(--primary-color);
    }

    .category-pill-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 1.5rem;
        height: 1.5rem;
        padding: 0 0.375rem;
        border-radius: 1rem;
        background: var(--secondary-color);
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--primary-color);
    }

    .category-pill:hover .category-pill-count {
        background: var(--primary-color);
        color: var(--white);
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
