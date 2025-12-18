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
