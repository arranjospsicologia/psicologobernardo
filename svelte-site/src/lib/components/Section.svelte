<script lang="ts">
	import type { Snippet } from "svelte";

	type SectionVariant = "light" | "dark" | "beige" | "gradient" | "white";

	interface Props {
		variant?: SectionVariant;
		class?: string;
		id?: string;
		children: Snippet;
	}

	let {
		variant = "white",
		class: className = "",
		id,
		children,
	}: Props = $props();

	const variants = {
		light: "bg-secondary-light text-text",
		dark: "section-dark",
		beige: "bg-secondary text-text",
		gradient: "gradient-cta text-white",
		white: "bg-white text-text",
	};
</script>

<section {id} class="section {variants[variant]} {className}">
	<div class="container">
		{@render children()}
	</div>
</section>
