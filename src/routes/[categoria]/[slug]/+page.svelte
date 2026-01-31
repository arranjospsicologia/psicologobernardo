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
        MapPin,
        BookOpen,
    } from "lucide-svelte";
    import { blogPosts, type BlogPost } from "$lib/data/blog";
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

    // Determines if the post is "local" based on category or tags
    const isLocalContent = $derived(
        post.categorySlug === "jardim-da-penha" ||
            post.categorySlug === "vitoria-es" ||
            post.tags.some(
                (t) =>
                    t.toLowerCase().includes("vitória") ||
                    t.toLowerCase().includes("jardim da penha"),
            ),
    );

    // Schema Generator
    const postSchema = $derived({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Início",
                        item: "https://psicologobernardo.com.br/",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: category.label,
                        item: `https://psicologobernardo.com.br/${post.categorySlug}`,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: post.title,
                        item: `https://psicologobernardo.com.br/${post.categorySlug}/${post.slug}/`,
                    },
                ],
            },
            {
                "@type": post.schemaType || "Article",
                "@id": `https://psicologobernardo.com.br/${post.categorySlug}/${post.slug}/#article`,
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://psicologobernardo.com.br/${post.categorySlug}/${post.slug}/#webpage`,
                },
                headline: post.title,
                description: post.description,
                image: {
                    "@type": "ImageObject",
                    url: `https://psicologobernardo.com.br${post.image}`,
                    width: 1200,
                    height: 630,
                },
                datePublished: convertToISO(post.date),
                dateModified: post.lastReviewed || convertToISO(post.date),
                isAccessibleForFree: true,
                inLanguage: "pt-BR",
                articleSection: post.category,
                keywords: post.tags ? post.tags.join(", ") : undefined,
                author: {
                    "@id": "https://psicologobernardo.com.br/sobre/#person",
                },
                publisher: {
                    "@id": "https://psicologobernardo.com.br/#organization",
                },
                audience: {
                    "@type": "Audience",
                    audienceType: "General public",
                },
                ...(isLocalContent
                    ? {
                          contentLocation: {
                              "@type": "Place",
                              name: "Jardim da Penha, Vitória - ES",
                          },
                      }
                    : {}),
                ...(post.tags
                    ? {
                          about: post.tags
                              .filter(
                                  (t) =>
                                      !t
                                          .toLowerCase()
                                          .includes("saúde mental") &&
                                      !t
                                          .toLowerCase()
                                          .includes("saude mental") &&
                                      !t.toLowerCase().includes("vitória") &&
                                      !t.toLowerCase().includes("vitoria") &&
                                      !t
                                          .toLowerCase()
                                          .includes("jardim da penha") &&
                                      !t.toLowerCase().includes("es") &&
                                      !t
                                          .toLowerCase()
                                          .includes("espírito santo"),
                              )
                              .map((tag) => ({
                                  "@type": "Thing",
                                  name: tag,
                              })),
                      }
                    : {}),
                ...(content.references
                    ? {
                          citation: content.references,
                      }
                    : {}),
            },
            ...(content.faq
                ? [
                      {
                          "@type": "FAQPage",
                          "@id": `https://psicologobernardo.com.br/${post.categorySlug}/${post.slug}/#faq`,
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

    function convertToISO(dateStr: string): string {
        // Simple parser for "DD MMM YYYY" to "YYYY-MM-DD"
        // Portuguese months map
        const months: Record<string, string> = {
            Jan: "01",
            Fev: "02",
            Mar: "03",
            Abr: "04",
            Mai: "05",
            Jun: "06",
            Jul: "07",
            Ago: "08",
            Set: "09",
            Out: "10",
            Nov: "11",
            Dez: "12",
        };
        const parts = dateStr.split(" ");
        if (parts.length !== 3) return new Date().toISOString().split("T")[0]; // Fallback

        const day = parts[0].padStart(2, "0");
        const month = months[parts[1]] || "01";
        const year = parts[2];

        return `${year}-${month}-${day}`;
    }
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
                {#if post.lastReviewed}
                    <span title="Revisão Clínica"
                        ><BookOpen size={16} /> Revisado: {convertToISO(
                            post.lastReviewed,
                        )}</span
                    >
                {/if}
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

        {#if content.references && content.references.length > 0}
            <section id="referencias" class="references-section">
                <h3>Referências Bibliográficas</h3>
                <ul>
                    {#each content.references as ref}
                        <li>{ref}</li>
                    {/each}
                </ul>
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
                Psicólogo Clínico pela UFES desde 2017 e especialista na
                Abordagem Centrada na Pessoa pelo <a
                    href="https://encontroacp.com.br"
                    target="_blank"
                    rel="noopener noreferrer">EncontroACP</a
                >, sempre em formação continuada. Coordenador da Roda de
                Conversa Terapêutica Entre Homens EncontroACP e fundador da
                <a
                    href="https://arranjospsicologia.com.br"
                    target="_blank"
                    rel="noopener noreferrer">Arranjos Psicologia</a
                >. Atende em Vitória (Jardim da Penha) e Online, oferecendo um
                espaço de acolhimento ético e humanizado.
            </p>
            <div class="author-actions">
                <Button
                    href="https://wa.me/5527998331228?text=Olá,%20vi%20seu%20artigo%20e%20gostaria%20de%20conversar"
                    variant="primary"
                    size="sm"
                >
                    <Phone size={18} />
                    Conversar
                </Button>
                {#if isLocalContent}
                    <Button
                        href="https://maps.app.goo.gl/seu-link-google-maps"
                        variant="outline"
                        size="sm"
                        target="_blank"
                    >
                        <MapPin size={18} />
                        Como Chegar
                    </Button>
                {/if}
            </div>
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

    .author-description a {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 500;
        transition: var(--transition);
    }

    .author-description a:hover {
        text-decoration: underline;
        color: var(--primary-color-dark, #069b82);
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
