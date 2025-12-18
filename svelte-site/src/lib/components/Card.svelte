<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		icon?: any;
		title?: string;
		href?: string;
		variant?: "default" | "dark" | "feature";
		class?: string;
		children?: Snippet;
	}

	let {
		icon: Icon,
		title,
		href,
		variant = "default",
		class: className = "",
		children,
	}: Props = $props();

	const variants = {
		default: "card-default",
		dark: "card-dark",
		feature: "card-feature",
	};
</script>

{#if href}
	<a {href} class="card {variants[variant]} hover-lift {className}">
		{#if Icon}
			<div class="card-icon">
				<Icon size={28} strokeWidth={1.5} />
			</div>
		{/if}
		{#if title}
			<h3 class="card-title">{title}</h3>
		{/if}
		{#if children}
			<div class="card-content">
				{@render children()}
			</div>
		{/if}
	</a>
{:else}
	<div class="card {variants[variant]} hover-lift {className}">
		{#if Icon}
			<div class="card-icon">
				<Icon size={28} strokeWidth={1.5} />
			</div>
		{/if}
		{#if title}
			<h3 class="card-title">{title}</h3>
		{/if}
		{#if children}
			<div class="card-content">
				{@render children()}
			</div>
		{/if}
	</div>
{/if}
