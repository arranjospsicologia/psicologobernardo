<script lang="ts">
	import { Section, Button, Breadcrumb, SEO } from "$lib";
	import {
		Phone,
		Calendar,
		Clock,
		ArrowRight,
		Facebook,
		Twitter,
		Linkedin,
	} from "lucide-svelte";
	import { blogPosts } from "$lib/data/blog";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();

	// Data comes from +page.ts load function
	const { post, content } = data;

	// Get related posts (same category or tags)
	const relatedPosts = blogPosts
		.filter(
			(p) =>
				p.slug !== data.slug &&
				p.tags.some((tag) => post.tags.includes(tag)),
		)
		.slice(0, 3);

	const postSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.description,
		image: `https://psicologobernardo.com.br${post.image}`,
		author: {
			"@type": "Person",
			name: "Bernardo Carielo",
		},
		publisher: {
			"@type": "Organization",
			name: "Psicólogo Bernardo",
		},
	};
</script>

<SEO
	title={`${post.title} - Psicólogo Bernardo`}
	description={post.description}
	canonical={`https://psicologobernardo.com.br/blog/${post.slug}/`}
	type="article"
	image={`https://psicologobernardo.com.br${post.image}`}
	jsonLd={postSchema}
/>

<!-- Breadcrumb -->
<Breadcrumb
	items={[
		{ name: "Início", href: "/" },
		{ name: "Blog", href: "/blog" },
		{
			name:
				post.title.length > 40
					? post.title.substring(0, 40) + "..."
					: post.title,
		},
	]}
/>

<section class="post-hero">
	<div class="container">
		<div class="post-header">
			<span class="blog-category">{post.category}</span>
			<h1>{post.title}</h1>
			<div class="post-meta">
				<span><Calendar size={16} /> {post.date}</span>
				<span><Clock size={16} /> {post.readTime}</span>
			</div>
		</div>
		<div class="post-image">
			<img
				src={post.image}
				alt={post.title}
				loading="eager"
				fetchpriority="high"
				width="800"
				height="450"
			/>
		</div>
	</div>
</section>

<Section variant="white">
	<div class="post-content">
		{@html content.htmlContent}
	</div>

	<div class="post-footer">
		<div class="post-tags">
			<strong>Tags:</strong>
			{#each content.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>

		<div class="post-share">
			<strong>Compartilhar:</strong>
			<a
				href="https://www.facebook.com/sharer/sharer.php?u=https://psicologobernardo.com.br/blog/{post.slug}/"
				target="_blank"
				rel="noopener"
				aria-label="Compartilhar no Facebook"
			>
				<Facebook size={18} />
			</a>
			<a
				href="https://twitter.com/intent/tweet?url=https://psicologobernardo.com.br/blog/{post.slug}/&text={encodeURIComponent(
					post.title,
				)}"
				target="_blank"
				rel="noopener"
				aria-label="Compartilhar no Twitter"
			>
				<Twitter size={18} />
			</a>
			<a
				href="https://www.linkedin.com/sharing/share-offsite/?url=https://psicologobernardo.com.br/blog/{post.slug}/"
				target="_blank"
				rel="noopener"
				aria-label="Compartilhar no LinkedIn"
			>
				<Linkedin size={18} />
			</a>
		</div>
	</div>

	<div class="author-bio">
		<img
			src="/images/bernardo-avatar.jpg"
			alt="Bernardo Carielo"
			class="author-avatar"
			width="100"
			height="100"
		/>
		<div class="author-info">
			<h3>Bernardo Carielo</h3>
			<p class="author-title">Psicólogo CRP 16/5527</p>
			<p>
				Sou psicólogo com mais de 8 anos de experiência em psicoterapia
				com a Abordagem Centrada na Pessoa. Atendo em Vitória/ES,
				oferecendo um espaço acolhedor para você cuidar da sua saúde
				mental.
			</p>
			<Button
				href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
				variant="primary"
			>
				<Phone size={20} />
				Agendar Consulta
			</Button>
		</div>
	</div>
</Section>

{#if relatedPosts.length > 0}
	<Section variant="beige">
		<div class="related-posts">
			<h2 style="text-align: center; margin-bottom: 2rem;">
				Posts Relacionados
			</h2>
			<div class="related-grid">
				{#each relatedPosts as relatedPost}
					<a href="/blog/{relatedPost.slug}" class="blog-card">
						<div class="blog-image">
							<img
								src={relatedPost.image}
								alt={relatedPost.title}
								loading="lazy"
								width="350"
								height="233"
							/>
							<div class="blog-category">
								{relatedPost.category}
							</div>
						</div>
						<div class="blog-content">
							<h3>{relatedPost.title}</h3>
							<span class="blog-link">
								Ler mais <ArrowRight size={16} />
							</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</Section>
{/if}

<Section variant="gradient">
	<div class="cta-content">
		<h2>Gostou do que leu?</h2>
		<p>Talvez seja um bom momento pra conversar.</p>
		<Button
			href="https://wa.me/5527998331228?text=Olá,%20gostei%20do%20seu%20texto%20no%20blog%20e%20gostaria%20de%20conversar"
			variant="secondary"
			size="lg"
		>
			<Phone size={20} />
			Falar no WhatsApp
		</Button>
	</div>
</Section>

<style>
	@import "../../../lib/styles/blog.css";

	.post-footer {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid var(--border-light);
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1.5rem;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: center;
	}

	.tag {
		background: var(--secondary-color);
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius-sm);
		font-size: 0.875rem;
		color: var(--text-color);
	}

	.post-share {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.post-share a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: var(--secondary-color);
		color: var(--primary-color);
		transition: var(--transition);
	}

	.post-share a:hover {
		background: var(--primary-color);
		color: var(--white);
	}

	.author-bio {
		display: flex;
		gap: 1.5rem;
		background: var(--secondary-color);
		padding: 2rem;
		border-radius: var(--radius-md);
		margin-top: 3rem;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}

	.author-avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		object-fit: cover;
		flex-shrink: 0;
	}

	.author-info h3 {
		margin-bottom: 0.25rem;
	}

	.author-title {
		color: var(--primary-color);
		font-weight: 500;
		margin-bottom: 0.75rem;
	}

	.author-info p:last-of-type {
		margin-bottom: 1rem;
	}

	.related-grid .blog-card .blog-content h3 {
		font-size: 1.125rem;
		margin-bottom: 0.5rem;
	}

	@media screen and (max-width: 768px) {
		.author-bio {
			flex-direction: column;
			text-align: center;
		}

		.author-avatar {
			margin: 0 auto;
		}

		.post-footer {
			flex-direction: column;
		}
	}
</style>
