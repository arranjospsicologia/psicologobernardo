<script lang="ts">
    interface BreadcrumbItem {
        name: string;
        href?: string;
    }

    let {
        items = [],
        generateSchema = true,
    }: { items?: BreadcrumbItem[]; generateSchema?: boolean } = $props();

    // Ensure Home is always first?? No, let's keep it flexible and explicit from parent?
    // Actually, nearly all pages have Home > Section > Page.
    // Let's rely on the parent sending the full list including Home to be safe and flexible.

    // Generate Schema JSON-LD (using $derived for reactivity)
    const schemaItems = $derived(
        items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.href
                ? `https://psicologobernardo.com.br${item.href}`
                : undefined,
        })),
    );

    const schema = $derived({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: schemaItems,
    });
</script>

<svelte:head>
    {#if generateSchema}
        {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
    {/if}
</svelte:head>

<nav class="breadcrumb" aria-label="Breadcrumb">
    <div class="container">
        <ol>
            {#each items as item, i}
                <li aria-current={i === items.length - 1 ? "page" : undefined}>
                    {#if item.href && i < items.length - 1}
                        <a href={item.href}>{item.name}</a>
                    {:else}
                        {item.name}
                    {/if}
                </li>
            {/each}
        </ol>
    </div>
</nav>
