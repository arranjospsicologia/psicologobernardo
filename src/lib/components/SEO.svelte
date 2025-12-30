<script lang="ts">
    export let title: string;
    export let description: string;
    export let canonical: string = "";
    export let type: "website" | "article" | "profile" = "website";
    export let image: string =
        "https://psicologobernardo.com.br/images/og-image.png";
    export let jsonLd: Record<string, any> | undefined = undefined;
    export let preloadImage: string | undefined = undefined;

    // Default canonical domain if relative path provided (optional enhancement, but keeping simple for now)
    const siteUrl = "https://psicologobernardo.com.br";

    // Ensure canonical is absolute if provided
    $: effectiveCanonical = canonical.startsWith("http")
        ? canonical
        : canonical
          ? `${siteUrl}${canonical}`
          : "";
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />

    {#if preloadImage}
        <link
            rel="preload"
            as="image"
            href={preloadImage}
            fetchpriority="high"
        />
    {/if}

    {#if effectiveCanonical}
        <link rel="canonical" href={effectiveCanonical} />
        <meta property="og:url" content={effectiveCanonical} />
    {/if}

    <!-- Open Graph -->
    <meta property="og:type" content={type} />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Psicólogo Bernardo" />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />

    <meta property="og:image" content={image} />

    <!-- Twitter (Falls back to OG often, but good to be explicit) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {#if jsonLd}
        {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
    {/if}
</svelte:head>
