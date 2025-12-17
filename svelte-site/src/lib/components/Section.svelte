<script lang="ts">
	import type { Snippet } from 'svelte';

	type SectionVariant = 'light' | 'dark' | 'beige' | 'gradient' | 'white';

	interface Props {
		variant?: SectionVariant;
		class?: string;
		id?: string;
		children: Snippet;
	}

	let { variant = 'white', class: className = '', id, children }: Props = $props();

	const variants = {
		light: 'bg-secondary-light text-text',
		dark: 'section-dark',
		beige: 'bg-secondary text-text',
		gradient: 'gradient-cta text-white',
		white: 'bg-white text-text'
	};
</script>

<section {id} class="section {variants[variant]} {className}">
	<div class="container">
		{@render children()}
	</div>
</section>

<style>
	.section {
		padding: var(--section-padding) 0;
	}

	@media (max-width: 768px) {
		.section {
			padding: var(--section-padding-mobile) 0;
		}
	}

	.section-dark {
		background: linear-gradient(180deg, var(--primary-dark) 0%, #035a60 100%);
		color: rgba(255, 255, 255, 0.95);
	}

	.section-dark :global(h1),
	.section-dark :global(h2),
	.section-dark :global(h3) {
		color: var(--white);
	}

	.section-dark :global(p) {
		color: rgba(255, 255, 255, 0.85);
	}

	.bg-secondary-light {
		background-color: var(--secondary-light);
	}

	.bg-secondary {
		background-color: var(--secondary-color);
	}

	.text-text {
		color: var(--text-color);
	}
</style>
