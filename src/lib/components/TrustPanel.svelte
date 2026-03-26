<script lang="ts">
    import {
        BadgeCheck,
        Clock3,
        MapPin,
        MessageCircleMore,
        Monitor,
        Star,
    } from "lucide-svelte";
    import Button from "./Button.svelte";
    import { siteProfile } from "$lib/data/siteProfile";

    type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

    interface Props {
        title?: string;
        intro?: string;
        primaryHref?: string;
        primaryLabel?: string;
        primaryVariant?: ButtonVariant;
        secondaryHref?: string;
        secondaryLabel?: string;
        secondaryVariant?: ButtonVariant;
        sessionLabel?: string;
        reviewLabel?: string;
        class?: string;
    }

    let {
        title = "O que você provavelmente quer saber antes",
        intro = "Informações objetivas para decidir com mais calma antes do primeiro contato.",
        primaryHref,
        primaryLabel,
        primaryVariant = "primary",
        secondaryHref,
        secondaryLabel,
        secondaryVariant = "outline",
        sessionLabel = `Sessões de ${siteProfile.sessionMinutes.individual} minutos no atendimento individual`,
        reviewLabel = `${siteProfile.reviews.ratingValue} de avaliação média`,
        class: className = "",
    }: Props = $props();

    const signals = $derived([
        {
            icon: BadgeCheck,
            title: siteProfile.crp,
            description: "Atendimento psicológico com identidade profissional clara e referência ética.",
        },
        {
            icon: MapPin,
            title: `${siteProfile.address.neighborhood}, ${siteProfile.address.city}`,
            description: "Consultório em frente à UFES, com acesso fácil para diferentes bairros de Vitória.",
        },
        {
            icon: Monitor,
            title: "Presencial e online",
            description: "Atendimento em Vitória e opção online quando a logística pede mais flexibilidade.",
        },
        {
            icon: Clock3,
            title: sessionLabel,
            description: `${siteProfile.hours.displayDays}, ${siteProfile.hours.displayTime}.`,
        },
        {
            icon: MessageCircleMore,
            title: "WhatsApp como primeiro contato",
            description: "Um resumo breve do que você está vivendo já é suficiente para começar a conversa.",
        },
        {
            icon: Star,
            title: reviewLabel,
            description: `${siteProfile.reviews.reviewCount} avaliações públicas usadas como referência visual do site.`,
        },
    ]);
</script>

<div class={`trust-panel ${className}`}>
    <div class="trust-panel__header">
        <p class="trust-panel__eyebrow">Confiança e clareza</p>
        <h2>{title}</h2>
        <p>{intro}</p>
    </div>

    <div class="trust-panel__grid">
        {#each signals as signal}
            <article class="trust-card">
                <div class="trust-card__icon">
                    <signal.icon size={18} strokeWidth={1.8} />
                </div>
                <div>
                    <h3>{signal.title}</h3>
                    <p>{signal.description}</p>
                </div>
            </article>
        {/each}
    </div>

    {#if primaryHref || secondaryHref}
        <div class="trust-panel__actions">
            {#if primaryHref && primaryLabel}
                <Button href={primaryHref} variant={primaryVariant}>{primaryLabel}</Button>
            {/if}
            {#if secondaryHref && secondaryLabel}
                <Button href={secondaryHref} variant={secondaryVariant}>{secondaryLabel}</Button>
            {/if}
        </div>
    {/if}
</div>

<style>
    .trust-panel {
        max-width: 1100px;
        margin: 0 auto;
        padding: 2rem;
        border-radius: var(--radius-lg);
        background:
            radial-gradient(circle at top right, rgba(8, 186, 156, 0.12), transparent 28%),
            linear-gradient(180deg, rgba(253, 247, 245, 0.95), rgba(255, 255, 255, 0.98));
        border: 1px solid rgba(8, 186, 156, 0.12);
        box-shadow: var(--shadow-md);
    }

    .trust-panel__header {
        max-width: 760px;
        margin-bottom: 1.5rem;
    }

    .trust-panel__eyebrow {
        display: inline-flex;
        margin-bottom: 0.8rem;
        padding: 0.4rem 0.8rem;
        border-radius: 999px;
        background: rgba(8, 186, 156, 0.12);
        color: var(--primary-dark);
        font-size: 0.82rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }

    .trust-panel__header h2 {
        margin-bottom: 0.75rem;
        font-size: clamp(1.6rem, 2.5vw, 2.1rem);
    }

    .trust-panel__header p {
        color: var(--text-light);
        font-size: 1.02rem;
    }

    .trust-panel__grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }

    .trust-card {
        display: flex;
        gap: 0.9rem;
        padding: 1.1rem;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.88);
        border: 1px solid rgba(8, 186, 156, 0.1);
        min-height: 100%;
    }

    .trust-card__icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 0.85rem;
        color: var(--primary-dark);
        background: rgba(8, 186, 156, 0.12);
        flex-shrink: 0;
    }

    .trust-card h3 {
        font-size: 1rem;
        margin-bottom: 0.35rem;
    }

    .trust-card p {
        font-size: 0.94rem;
        line-height: 1.6;
        color: var(--text-light);
    }

    .trust-panel__actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: 1.5rem;
    }

    @media (max-width: 900px) {
        .trust-panel__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 640px) {
        .trust-panel {
            padding: 1.35rem;
        }

        .trust-panel__grid {
            grid-template-columns: 1fr;
        }

        .trust-panel__actions {
            flex-direction: column;
        }
    }
</style>
