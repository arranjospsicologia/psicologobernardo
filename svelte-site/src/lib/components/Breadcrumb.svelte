<script lang="ts">
    interface BreadcrumbItem {
        name: string;
        href?: string;
    }

    let { items = [] }: { items?: BreadcrumbItem[] } = $props();

    // Ensure Home is always first?? No, let's keep it flexible and explicit from parent?
    // Actually, nearly all pages have Home > Section > Page.
    // Let's rely on the parent sending the full list including Home to be safe and flexible.

    // Generate Schema JSON-LD
    const schemaItems = items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.href
            ? `https://psicologobernardo.com.br${item.href}`
            : undefined,
    }));

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: schemaItems,
    };
</script>

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
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

<style>
    .breadcrumb {
        background: var(--secondary-light);
        /* Critical fix for fixed header overlap */
        padding: calc(var(--header-height) + 1rem) 0 1rem;
    }

    .breadcrumb ol {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        font-size: var(--text-sm);
        list-style: none; /* Ensure no default bullets */
        margin: 0;
        padding: 0;
    }

    .breadcrumb li {
        display: flex;
        align-items: center;
    }

    .breadcrumb li:not(:last-child)::after {
        content: "/";
        margin-left: 0.5rem;
        color: var(--text-lighter);
        font-size: 0.9em;
    }

    .breadcrumb a {
        color: var(--primary-color);
        text-decoration: none;
        transition: color 0.2s;
    }

    .breadcrumb a:hover {
        color: var(--primary-dark);
        text-decoration: underline;
    }

    .breadcrumb li[aria-current="page"] {
        color: var(--text-light);
    }
</style>
