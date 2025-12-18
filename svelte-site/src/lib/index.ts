// Components
export { default as Button } from './components/Button.svelte';
export { default as Section } from './components/Section.svelte';
export { default as Card } from './components/Card.svelte';
export { default as Header } from './components/Header.svelte';
export { default as Footer } from './components/Footer.svelte';
export { default as ReviewCarousel } from './components/ReviewCarousel.svelte';
export { default as ImageCarousel } from './components/ImageCarousel.svelte';
export { default as Breadcrumb } from './components/Breadcrumb.svelte';
export { default as SEO } from './components/SEO.svelte';
export { default as LazyDoctoraliaWidget } from './components/LazyDoctoraliaWidget.svelte';


// GSAP utils should be imported dynamically to avoid SSR issues
// Use: const { scrollReveal } = await import('$lib/utils/gsap');
