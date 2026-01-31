<script lang="ts">
    import "$lib/styles/blog.css";
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import {
        Phone,
        Calendar,
        Clock,
        ArrowRight,
        Facebook,
        Twitter,
        Linkedin,
        MessageCircle,
    } from "lucide-svelte";
    import { blogPosts } from "$lib/data/blog";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    const post = $derived(data.post);
    const content = $derived(data.content);
    const category = $derived(data.category);

    // Get related posts (same category)
    const relatedPosts = $derived(
        blogPosts
            .filter(
                (p) =>
                    p.slug !== data.slug &&
                    p.categorySlug === post.categorySlug,
            )
            .slice(0, 3),
    );

    const postSchema = $derived({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                headline: post.title,
                description: post.description,
                image: `https://psicologobernardo.com.br${post.image}`,
                author: {
                    "@type": "Person",
                    name: "Bernardo Carielo",
                },
                publisher: {
                    "@type": "Organization",
                    name: "Psicólogo Bernardo",
                },
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://psicologobernardo.com.br/${post.categorySlug}/${post.slug}/`,
                },
            },
            ...(content.faq
                ? [
                      {
                          "@type": "FAQPage",
                          mainEntity: content.faq.map((item) => ({
                              "@type": "Question",
                              name: item.question,
                              acceptedAnswer: {
                                  "@type": "Answer",
                                  text: item.answer,
                              },
                          })),
                      },
                  ]
                : []),
        ],
    });
</script>

<SEO
    title={`${post.title} - Psicólogo Bernardo`}
    description={post.description}
    canonical={`https://psicologobernardo.com.br/${post.categorySlug}/${post.slug}/`}
    type="article"
    image={`https://psicologobernardo.com.br${post.image}`}
    jsonLd={postSchema}
/>

<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: category.label, href: `/${post.categorySlug}` },
        {
            name:
                post.title.length > 40
                    ? post.title.substring(0, 40) + "..."
                    : post.title,
        },
    ]}
/>

<section class="post-hero">
    <div class="container">
        <div class="post-header">
            <span class="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div class="post-meta">
                <span><Calendar size={16} /> {post.date}</span>
                <span><Clock size={16} /> {post.readTime}</span>
            </div>
        </div>
        <div class="post-image">
            <img
                src={post.image}
                alt={post.altText || post.title}
                loading="eager"
                fetchpriority="high"
                width="800"
                height="450"
            />
        </div>
    </div>
</section>

<Section variant="white">
    <div class="post-content">
        {@html content.htmlContent}

        {#if content.faq && content.faq.length > 0}
            <section id="faq">
                <h2>Perguntas Frequentes</h2>
                {#each content.faq as item}
                    <div class="faq-item">
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                {/each}
            </section>
        {/if}
    </div>

    <div class="post-footer">
        <div class="post-tags">
            <strong>Tags:</strong>
            {#each content.tags as tag}
                <span class="tag">{tag}</span>
            {/each}
        </div>

        <div class="post-share">
            <strong>Compartilhar:</strong>
            <a
                href="https://api.whatsapp.com/send?text={encodeURIComponent(
                    post.title +
                        ' - ' +
                        'https://psicologobernardo.com.br/' +
                        post.categorySlug +
                        '/' +
                        post.slug +
                        '/',
                )}"
                target="_blank"
                rel="noopener"
                aria-label="Compartilhar no WhatsApp"
                class="share-whatsapp"
            >
                <MessageCircle size={18} />
            </a>
            <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://psicologobernardo.com.br/{post.categorySlug}/{post.slug}/"
                target="_blank"
                rel="noopener"
                aria-label="Compartilhar no Facebook"
            >
                <Facebook size={18} />
            </a>
            <a
                href="https://twitter.com/intent/tweet?url=https://psicologobernardo.com.br/{post.categorySlug}/{post.slug}/&text={encodeURIComponent(
                    post.title,
                )}"
                target="_blank"
                rel="noopener"
                aria-label="Compartilhar no Twitter"
            >
                <Twitter size={18} />
            </a>
            <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=https://psicologobernardo.com.br/{post.categorySlug}/{post.slug}/"
                target="_blank"
                rel="noopener"
                aria-label="Compartilhar no LinkedIn"
            >
                <Linkedin size={18} />
            </a>
        </div>
    </div>

    <div class="author-bio">
        <img
            src="/images/bernardo-avatar.jpg"
            alt="Bernardo Carielo"
            class="author-avatar"
            width="100"
            height="100"
        />
        <div class="author-info">
            <div class="author-header">
                <h3>Bernardo Carielo</h3>
                <span class="author-crp">CRP 16/5527</span>
            </div>
            <p class="author-description">
                Psicólogo com mais de 8 anos de experiência em psicoterapia com
                a Abordagem Centrada na Pessoa. Atendo em Vitória/ES, oferecendo
                um espaço acolhedor para você cuidar da sua saúde mental.
            </p>
            <Button
                href="https://wa.me/5527998331228?text=Olá,%20vi%20seu%20artigo%20e%20gostaria%20de%20conversar"
                variant="primary"
            >
                <Phone size={20} />
                Conversar
            </Button>
        </div>
    </div>
</Section>

{#if relatedPosts.length > 0}
    <Section variant="beige">
        <div class="related-posts">
            <h2 style="text-align: center; margin-bottom: 2rem;">
                Artigos Relacionados
            </h2>
            <div class="related-grid">
                {#each relatedPosts as relatedPost}
                    <a
                        href="/{relatedPost.categorySlug}/{relatedPost.slug}"
                        class="blog-card"
                    >
                        <div class="blog-image">
                            <img
                                src={relatedPost.image}
                                alt={relatedPost.altText || relatedPost.title}
                                loading="lazy"
                                width="350"
                                height="233"
                            />
                            <div class="blog-category">
                                {relatedPost.category}
                            </div>
                        </div>
                        <div class="blog-content">
                            <h3>{relatedPost.title}</h3>
                            <span class="blog-link">
                                Ler mais <ArrowRight size={16} />
                            </span>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </Section>
{/if}

<Section variant="gradient">
    <div class="cta-content">
        <h2>Gostou do que leu?</h2>
        <p>Talvez seja um bom momento pra conversar.</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20vi%20seu%20artigo%20e%20gostaria%20de%20conversar"
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
    </div>
</Section>

<style>
    .post-footer {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid var(--border-light);
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1.5rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .post-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-items: center;
    }

    .tag {
        background: var(--secondary-color);
        padding: 0.25rem 0.75rem;
        border-radius: var(--radius-sm);
        font-size: 0.875rem;
        color: var(--text-color);
    }

    .post-share {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .post-share a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--secondary-color);
        color: var(--primary-color);
        transition: var(--transition);
    }

    .post-share a:hover {
        background: var(--primary-color);
        color: var(--white);
    }

    .author-bio {
        display: flex;
        gap: 1.5rem;
        background: var(--secondary-color);
        padding: 2rem;
        border-radius: var(--radius-md);
        margin-top: 3rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .author-avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        flex-shrink: 0;
    }

    .author-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 0.75rem;
    }

    .author-info h3 {
        margin: 0;
        font-size: 1.25rem;
    }

    .author-crp {
        display: inline-flex;
        align-items: center;
        background: var(--primary-color);
        color: var(--white);
        padding: 0.25rem 0.75rem;
        border-radius: var(--radius-sm);
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.025em;
    }

    .author-description {
        color: var(--text-muted);
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    .related-grid .blog-card .blog-content h3 {
        font-size: 1.125rem;
        margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 768px) {
        .author-bio {
            flex-direction: column;
            text-align: center;
        }

        .author-header {
            justify-content: center;
        }

        .author-avatar {
            margin: 0 auto;
        }

        .post-footer {
            flex-direction: column;
        }
    }
</style>
