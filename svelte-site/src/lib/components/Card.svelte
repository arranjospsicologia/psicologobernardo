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

<style>
	.card {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		border-radius: var(--radius-md);
		text-decoration: none;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.card-default {
		background: var(--white);
		box-shadow: var(--shadow-md);
	}

	.card-default:hover {
		box-shadow: var(--shadow-hover);
	}

	.card-dark {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		color: var(--white);
	}

	.card-dark:hover {
		background: rgba(255, 255, 255, 0.15);
	}

	.card-feature {
		background: var(--white);
		box-shadow: var(--shadow-lg);
		padding: 2rem;
	}

	.card-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 56px;
		height: 56px;
		border-radius: var(--radius-md);
		background: linear-gradient(
			135deg,
			var(--primary-color),
			var(--primary-light)
		);
		color: var(--white);
		margin-bottom: 1rem;
	}

	.card-dark .card-icon {
		background: rgba(255, 255, 255, 0.2);
	}

	.card-title {
		font-size: var(--text-lg);
		font-weight: 600;
		margin-bottom: 0.5rem;
		color: var(--black);
	}

	.card-dark .card-title {
		color: var(--white);
	}

	.card-content {
		color: var(--text-light);
		font-size: var(--text-sm);
		line-height: 1.6;
	}

	.card-dark .card-content {
		color: rgba(255, 255, 255, 0.8);
	}
</style>
