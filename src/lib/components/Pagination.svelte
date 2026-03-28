<script lang="ts">
    import { ChevronLeft, ChevronRight } from "lucide-svelte";
    import type { PaginationInfo } from "$lib/server/blog/types";

    let { pagination }: { pagination: PaginationInfo } = $props();
</script>

{#if pagination.totalPages > 1}
    <nav class="pagination" aria-label="Paginação">
        {#if pagination.hasPrev && pagination.prevUrl}
            <a href={pagination.prevUrl} class="pagination-link prev" aria-label="Página anterior">
                <ChevronLeft size={18} />
                Anterior
            </a>
        {:else}
            <span class="pagination-link prev disabled">
                <ChevronLeft size={18} />
                Anterior
            </span>
        {/if}

        <span class="pagination-info">
            Página {pagination.currentPage} de {pagination.totalPages}
        </span>

        {#if pagination.hasNext && pagination.nextUrl}
            <a href={pagination.nextUrl} class="pagination-link next" aria-label="Próxima página">
                Próxima
                <ChevronRight size={18} />
            </a>
        {:else}
            <span class="pagination-link next disabled">
                Próxima
                <ChevronRight size={18} />
            </span>
        {/if}
    </nav>
{/if}

<style>
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid var(--border-light);
    }

    .pagination-link {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.5rem 1rem;
        border-radius: var(--radius-sm);
        font-weight: 500;
        font-size: 0.9375rem;
        color: var(--primary-color);
        text-decoration: none;
        transition: var(--transition);
    }

    .pagination-link:hover:not(.disabled) {
        background: var(--secondary-color);
    }

    .pagination-link.disabled {
        color: var(--text-lighter);
        pointer-events: none;
        opacity: 0.5;
    }

    .pagination-info {
        font-size: 0.875rem;
        color: var(--text-light);
    }
</style>
