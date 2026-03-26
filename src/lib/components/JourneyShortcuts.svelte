<script lang="ts">
    import { ArrowRight } from "lucide-svelte";

    interface ShortcutItem {
        title: string;
        description: string;
        href: string;
        label?: string;
    }

    interface ShortcutFeatureImage {
        src: string;
        alt: string;
        eyebrow?: string;
        caption?: string;
    }

    interface Props {
        title?: string;
        intro?: string;
        items: ShortcutItem[];
        featuredImage?: ShortcutFeatureImage;
        highlights?: string[];
        class?: string;
    }

    let {
        title = "Escolha o caminho mais simples",
        intro = "Atalhos pensados para reduzir indecisão entre serviço, demanda, localização e contato.",
        items,
        featuredImage,
        highlights = [],
        class: className = "",
    }: Props = $props();
</script>

<div class={`journey-shortcuts ${className}`}>
    <div class:journey-shortcuts__shell={true} class:journey-shortcuts__shell--featured={!!featuredImage}>
        <div class="journey-shortcuts__content">
            <div class="journey-shortcuts__header">
                <h2>{title}</h2>
                <p>{intro}</p>
            </div>

            <div class="journey-shortcuts__grid">
                {#each items as item}
                    <a href={item.href} class="journey-card">
                        <span class="journey-card__label">{item.label || "Atalho"}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span class="journey-card__cta">
                            Abrir caminho
                            <ArrowRight size={17} />
                        </span>
                    </a>
                {/each}
            </div>
        </div>

        {#if featuredImage}
            <aside class="journey-shortcuts__aside">
                <div class="journey-shortcuts__media">
                    {#if featuredImage.eyebrow}
                        <span class="journey-shortcuts__eyebrow">{featuredImage.eyebrow}</span>
                    {/if}
                    <img src={featuredImage.src} alt={featuredImage.alt} loading="lazy" />
                    {#if featuredImage.caption}
                        <p class="journey-shortcuts__caption">{featuredImage.caption}</p>
                    {/if}
                </div>

                {#if highlights.length}
                    <ul class="journey-shortcuts__highlights">
                        {#each highlights as highlight}
                            <li>{highlight}</li>
                        {/each}
                    </ul>
                {/if}
            </aside>
        {/if}
    </div>
</div>

<style>
    .journey-shortcuts {
        max-width: 1100px;
        margin: 0 auto;
    }

    .journey-shortcuts__shell--featured {
        display: grid;
        grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
        gap: 1.5rem;
        align-items: start;
        padding: 1.5rem;
        border-radius: var(--radius-lg);
        background:
            radial-gradient(circle at top left, rgba(8, 186, 156, 0.1), transparent 30%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(253, 247, 245, 0.96));
        border: 1px solid rgba(8, 186, 156, 0.12);
        box-shadow: var(--shadow-md);
    }

    .journey-shortcuts__header {
        text-align: center;
        max-width: 720px;
        margin: 0 auto 1.8rem;
    }

    .journey-shortcuts__header p {
        color: var(--text-light);
        margin-top: 0.7rem;
    }

    .journey-shortcuts__grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1rem;
    }

    .journey-card {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        padding: 1.4rem;
        border-radius: var(--radius-md);
        background: var(--white);
        border: 1px solid rgba(8, 186, 156, 0.12);
        box-shadow: var(--shadow-sm);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .journey-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-hover);
    }

    .journey-card__label {
        display: inline-flex;
        width: fit-content;
        margin-bottom: 0.9rem;
        padding: 0.3rem 0.7rem;
        border-radius: 999px;
        background: rgba(8, 186, 156, 0.1);
        color: var(--primary-dark);
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }

    .journey-card h3 {
        margin-bottom: 0.65rem;
        font-size: 1.08rem;
    }

    .journey-card p {
        color: var(--text-light);
        line-height: 1.6;
        flex: 1;
    }

    .journey-card__cta {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        margin-top: 1.1rem;
        color: var(--primary-color);
        font-weight: 700;
    }

    .journey-shortcuts__aside {
        display: grid;
        gap: 1rem;
    }

    .journey-shortcuts__media {
        overflow: hidden;
        border-radius: calc(var(--radius-lg) - 0.25rem);
        background: linear-gradient(180deg, rgba(4, 124, 130, 0.06), rgba(8, 186, 156, 0.02));
        border: 1px solid rgba(8, 186, 156, 0.14);
        box-shadow: var(--shadow-sm);
    }

    .journey-shortcuts__media img {
        width: 100%;
        aspect-ratio: 4 / 4.8;
        object-fit: cover;
    }

    .journey-shortcuts__eyebrow {
        display: inline-flex;
        margin: 1rem 1rem 0;
        padding: 0.35rem 0.75rem;
        border-radius: 999px;
        background: rgba(8, 186, 156, 0.12);
        color: var(--primary-dark);
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }

    .journey-shortcuts__caption {
        padding: 0.95rem 1rem 1.05rem;
        color: var(--text-light);
        line-height: 1.6;
    }

    .journey-shortcuts__highlights {
        display: grid;
        gap: 0.75rem;
    }

    .journey-shortcuts__highlights li {
        position: relative;
        padding: 0.95rem 1rem 0.95rem 2.2rem;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.76);
        border: 1px solid rgba(8, 186, 156, 0.12);
        color: var(--text-light);
        line-height: 1.55;
        box-shadow: var(--shadow-sm);
    }

    .journey-shortcuts__highlights li::before {
        content: "";
        position: absolute;
        top: 1.15rem;
        left: 1rem;
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
        box-shadow: 0 0 0 6px rgba(8, 186, 156, 0.1);
    }

    @media (max-width: 960px) {
        .journey-shortcuts__shell--featured {
            grid-template-columns: 1fr;
        }

        .journey-shortcuts__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 640px) {
        .journey-shortcuts__shell--featured {
            padding: 1rem;
        }

        .journey-shortcuts__grid {
            grid-template-columns: 1fr;
        }

        .journey-card {
            padding: 1.2rem;
        }
    }
</style>
