<script lang="ts">
	import "$lib/styles/global.css";
	import "$lib/styles/animations.css";
	import { Header, Footer } from "$lib";

	let { children } = $props();
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Favicon -->
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<Header />

<main>
	{@render children()}
</main>

<Footer />
