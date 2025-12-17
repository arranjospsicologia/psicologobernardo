<script lang="ts">
	import type { Snippet } from "svelte";
	import type {
		HTMLButtonAttributes,
		HTMLAnchorAttributes,
	} from "svelte/elements";

	type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
	type ButtonSize = "sm" | "md" | "lg";

	interface BaseProps {
		variant?: ButtonVariant;
		size?: ButtonSize;
		class?: string;
		children: Snippet;
	}

	type ButtonProps = BaseProps &
		(
			| ({ href: string } & HTMLAnchorAttributes)
			| ({ href?: never } & HTMLButtonAttributes)
		);

	let {
		variant = "primary",
		size = "md",
		class: className = "",
		href,
		children,
		...rest
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		{href}
		class="btn btn-{variant} btn-{size} {className}"
		{...rest as HTMLAnchorAttributes}
	>
		{@render children()}
	</a>
{:else}
	<button
		class="btn btn-{variant} btn-{size} {className}"
		{...rest as HTMLButtonAttributes}
	>
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-weight: 500;
		text-decoration: none;
		cursor: pointer;
		border: none;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.btn:focus-visible {
		outline: 2px solid var(--primary-color);
		outline-offset: 2px;
	}

	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	/* Sizes */
	.btn-sm {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		border-radius: 0.375rem;
	}

	.btn-md {
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		border-radius: 0.5rem;
	}

	.btn-lg {
		padding: 1rem 2rem;
		font-size: 1.125rem;
		border-radius: 0.75rem;
	}

	/* Primary Variant */
	.btn-primary {
		background: linear-gradient(
			135deg,
			var(--primary-color),
			var(--primary-dark)
		);
		color: white;
		box-shadow: 0 4px 15px rgba(8, 186, 156, 0.35);
		position: relative;
		overflow: hidden;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(8, 186, 156, 0.45);
	}

	.btn-primary::before {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(
			110deg,
			transparent 20%,
			rgba(255, 255, 255, 0.2) 40%,
			rgba(255, 255, 255, 0.3) 50%,
			rgba(255, 255, 255, 0.2) 60%,
			transparent 80%
		);
		background-size: 200% 100%;
		animation: shimmer 3s ease-in-out infinite;
	}

	@keyframes shimmer {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}

	/* Secondary Variant */
	.btn-secondary {
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(8px);
		border: 2px solid var(--primary-color);
		color: var(--primary-dark);
	}

	.btn-secondary:hover {
		background: var(--primary-color);
		color: white;
		transform: translateY(-2px);
	}

	/* Outline Variant */
	.btn-outline {
		background: transparent;
		border: 2px solid var(--primary-color);
		color: var(--primary-color);
	}

	.btn-outline:hover {
		background: var(--primary-color);
		color: white;
	}

	/* Ghost Variant */
	.btn-ghost {
		background: transparent;
		color: var(--primary-color);
	}

	.btn-ghost:hover {
		background: var(--secondary-color);
	}
</style>
