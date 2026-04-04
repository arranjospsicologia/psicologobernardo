<script lang="ts">
	import {
		Button,
		Section,
		Card,
		ReviewCarousel,
		ImageCarousel,
		SEO,
		buildWhatsAppUrl,
		schemaIds,
		siteProfile,
		siteSameAs,
		primaryServiceItems,
		experienceNavItems,
	} from "$lib";
	import {
		Heart,
		Video,
		Users,
		Phone,
		MapPin,
		ChevronDown,
		Zap,
		Flame,
		HeartPulse,
		UsersRound,
		SmilePlus,
	} from "lucide-svelte";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();

	// Service icon mapping
	const serviceIcons = {
		"Psicoterapia Individual": Heart,
		"Terapia de Casal": Users,
		"Terapia Online": Video,
	} as const;

	// Experience icon/color mapping
	const experienceIcons = {
		"/experiencia/ansiedade/": Zap,
		"/experiencia/depressao/": HeartPulse,
		"/experiencia/burnout/": Flame,
		"/experiencia/relacionamento/": UsersRound,
		"/experiencia/autoestima/": SmilePlus,
	} as const;

	const experienceAccents: Record<string, string> = {
		"/experiencia/ansiedade/": "#D4AD5A",
		"/experiencia/depressao/": "#C97A83",
		"/experiencia/burnout/": "#D4A87A",
		"/experiencia/relacionamento/": "#6BAA9A",
		"/experiencia/autoestima/": "#9B89B5",
	};

	// FAQ da home — mantém dúvidas recorrentes também no schema FAQPage
	const faqEntries = [
		{
			question: "Como funciona a primeira sessão?",
			answer: "A primeira conversa já é uma sessão de terapia. Você pode trazer o que está vivendo com liberdade, ser acolhido com atenção, e ao final avaliamos juntos se faz sentido continuar.",
		},
		{
			question: "Como funciona a terapia pela Abordagem Centrada na Pessoa?",
			answer: "A terapia acontece em um espaço de escuta empática e genuína, onde você pode falar sobre o que sente sem julgamentos. O foco é ajudar você a se compreender e tomar decisões mais alinhadas a quem é.",
		},
		{
			question: "Atende presencial e online?",
			answer: "Sim. O atendimento presencial acontece em Vitória/ES, no bairro Jardim da Penha. Também realizo atendimentos online para todo o Brasil e para brasileiros que vivem no exterior.",
		},
		{
			question: "Aceita convênio?",
			answer: "Não trabalho com convênios. Os atendimentos são particulares, o que garante maior flexibilidade de horários e um cuidado personalizado. Emito Nota Fiscal em conformidade com a política de reembolso dos principais planos de saúde.",
		},
		{
			question: "Como agendar uma consulta?",
			answer: "Você pode conversar diretamente comigo pelo WhatsApp. Basta clicar no botão \"Agendar primeira conversa\" ou \"Falar no WhatsApp\". Um resumo breve do que você está vivendo já é suficiente.",
		},
	];

	let faqItems = $state(faqEntries.map((item) => ({ ...item, open: false })));

	function toggleFaq(index: number) {
		faqItems = faqItems.map((item, i) => ({
			...item,
			open: i === index ? !item.open : false,
		}));
	}

	// Reviews — static fallback data (original content preserved)
	const googleReviewsStatic = [
		{
			name: "Kleber do R.",
			photo: "https://lh3.googleusercontent.com/a-/ALV-UjX1w6dUUZBROk9gV2ybPaKamAxETpfz2-yGu3x00BCLg_E3v0Sm=w36-h36-p-rp-mo-br100",
			rating: 5,
			date: "há 3 dias",
			text: "O Dr. Bernardo é extremamente atencioso e empático, me senti como se estivesse conversando com meu melhor amigo e tudo fluiu muito bem. Dizem que a primeira impressão é a que fica e ela foi a melhor possível. Muito, muito bom.",
		},
		{
			name: "Marina Benetti",
			photo: "https://lh3.googleusercontent.com/a-/ALV-UjWlXDdCcI86LfZ4CfwWDLQIVaG5jbdN8qW10YMzEMi-X3_8CMjv=w36-h36-p-rp-mo-br100",
			rating: 5,
			date: "há 3 dias",
			text: "Excelente profissional, educado, atento e empático. O espaço é acolhedor, limpo e de fácil acesso. E tem sempre um chazim!",
		},
		{
			name: "Eder França Balbino",
			photo: "https://lh3.googleusercontent.com/a-/ALV-UjXlRSYncjgG2LbyRWKY0JI9SrWnJ8JvPGq8APXVy7OwMPa7ChsF8w=w36-h36-p-rp-mo-br100",
			rating: 5,
			date: "há 3 dias",
			text: "Sem palavras para descrever o quanto me ajudou num momento extremamente importante em minha vida. Só tenho a agradecer por ter me ajudado a me desenvolver e prosperar num momento de turbulência.",
		},
		{
			name: "Raiça Ronchetti",
			photo: "https://lh3.googleusercontent.com/a-/ALV-UjXYgRaW7hOHBdBwK6Ht5ve6AjYGsB7YYdteCczEEopE7fO6RuhH=w36-h36-p-rp-mo-br100",
			rating: 5,
			date: "há 4 dias",
			text: "Bernardo me ajudou demais num momento em que eu estava precisando muito de suporte! Excelente profissional, empático e sensível. Sou muito grata por todo o nosso tempo juntos.",
		},
		{
			name: "Victor Raft",
			photo: "https://lh3.googleusercontent.com/a-/ALV-UjWBoEPl1mnij17O6DmWnj4ssgmu0kZg9BxbKPxxXcg8_YzvA2lP7Q=w36-h36-p-rp-mo-ba3-br100",
			rating: 5,
			date: "há 4 dias",
			text: "O Bernardo é um ótimo psicólogo e uma pessoa admirável. Inteligente, curioso e sempre atencioso, ele é muito bom em criar um ambiente de confiança e acolhimento. Um profissional que realmente se importa e faz diferença. Recomendo muito!",
		},
		{
			name: "Chander Freitas",
			photo: "https://lh3.googleusercontent.com/a-/ALV-UjV6NxHOIQHgZ_YeLCAi0o73XzCD2y2-FaK1fFksyOnenqsUwCec6A=w36-h36-p-rp-mo-ba2-br100",
			rating: 5,
			date: "há 5 dias",
			text: "Recomendo o Bernardo em todos os aspectos. Da estrutura do consultório à organização das sessões, tudo é pensado para que a psicoterapia aconteça de forma tranquila, empática, confortável e com os melhores recursos possíveis. Excelente!",
		},
	];

	// Use loader data with static fallback
	const googleReviews = $derived(
		(data.googleReviews.length ? data.googleReviews : googleReviewsStatic).slice(0, 6)
	);

	// Office images for carousel
	const officeImages = [
		{
			src: "/images/consultorio/ambiente-acolhedor.webp",
			alt: "Sala de atendimento do consultório de psicologia em Jardim da Penha, Vitória ES, com iluminação natural e decoração acolhedora",
			caption: "Sala de atendimento",
		},
		{
			src: "/images/consultorio/poltronas-terapia.webp",
			alt: "Poltronas confortáveis para sessões de psicoterapia em ambiente privativo e seguro",
			caption: "Espaço de acolhimento",
		},
		{
			src: "/images/consultorio/sala-atendimento-01.webp",
			alt: "Ambiente cuidadosamente pensado para proporcionar conforto e confidencialidade durante as sessões terapêuticas",
			caption: "Ambiente pensado para você",
		},
		{
			src: "/images/consultorio/sala-atendimento-02.webp",
			alt: "Vista completa da sala de psicoterapia com decoração neutra e acolhedora em tons suaves",
			caption: "Espaço de escuta",
		},
		{
			src: "/images/consultorio/espaco-privado.webp",
			alt: "Espaço privado e silencioso preparado para garantir total confidencialidade e segurança nas sessões de psicoterapia",
			caption: "Privacidade e confidencialidade",
		},
	];

	// Schema — using siteProfile (no hardcoded strings)
	const homeSchema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": schemaIds.website,
				url: `${siteProfile.siteUrl}/`,
				name: siteProfile.siteName,
				description: siteProfile.description,
				inLanguage: "pt-BR",
				publisher: {
					"@id": schemaIds.organization,
				},
			},
			{
				"@type": "WebPage",
				"@id": `${siteProfile.siteUrl}/#webpage`,
				url: `${siteProfile.siteUrl}/`,
				name: siteProfile.clinicalBrandName,
				description: siteProfile.description,
				isPartOf: {
					"@id": schemaIds.website,
				},
				about: {
					"@id": schemaIds.organization,
				},
				primaryImageOfPage: {
					"@type": "ImageObject",
					url: siteProfile.ogImageUrl,
				},
				mainEntity: {
					"@id": `${siteProfile.siteUrl}/#faq`,
				},
			},
			{
				"@type": "Person",
				"@id": schemaIds.person,
				name: siteProfile.fullName,
				alternateName: siteProfile.personName,
				jobTitle: "Psicólogo",
				worksFor: {
					"@id": schemaIds.organization,
				},
			},
			{
				"@type": ["ProfessionalService", "LocalBusiness"],
				"@id": schemaIds.organization,
				name: siteProfile.clinicalBrandName,
				description: siteProfile.description,
				url: `${siteProfile.siteUrl}/`,
				image: [
					siteProfile.ogImageUrl,
					`${siteProfile.siteUrl}/images/hero/hero-600x800.webp`,
				],
				logo: {
					"@type": "ImageObject",
					url: siteProfile.logoUrl,
				},
				telephone: siteProfile.phoneHref.replace("tel:", ""),
				email: siteProfile.officialEmail,
				priceRange: "$$",
				currenciesAccepted: "BRL",
				paymentAccepted: "Dinheiro, Transferência Bancária, PIX",
				hasMap: siteProfile.externalLinks.googleMapsPlace,
				geo: {
					"@type": "GeoCoordinates",
					latitude: siteProfile.coordinates.latitude,
					longitude: siteProfile.coordinates.longitude,
				},
				address: {
					"@type": "PostalAddress",
					streetAddress: `${siteProfile.address.streetAddress}, ${siteProfile.address.extendedAddress}`,
					addressLocality: siteProfile.address.city,
					addressRegion: siteProfile.address.state,
					postalCode: siteProfile.address.postalCode,
					addressCountry: siteProfile.address.country,
				},
				areaServed: [
					{
						"@type": "City",
						name: siteProfile.address.city,
						containedInPlace: {
							"@type": "State",
							name: "Espírito Santo",
						},
					},
					{
						"@type": "Country",
						name: "Brasil",
					},
				],
				openingHoursSpecification: [
					{
						"@type": "OpeningHoursSpecification",
						dayOfWeek: [
							"https://schema.org/Monday",
							"https://schema.org/Tuesday",
							"https://schema.org/Wednesday",
							"https://schema.org/Thursday",
							"https://schema.org/Friday",
						],
						opens: siteProfile.hours.opens,
						closes: siteProfile.hours.closes,
					},
				],
				contactPoint: [
					{
						"@type": "ContactPoint",
						contactType: "appointments",
						telephone: siteProfile.phoneHref.replace("tel:", ""),
						email: siteProfile.officialEmail,
						availableLanguage: ["pt-BR"],
					},
				],
				sameAs: siteSameAs,
				founder: {
					"@id": schemaIds.person,
				},
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: siteProfile.reviews.ratingValue,
					reviewCount: siteProfile.reviews.reviewCount,
					bestRating: "5",
					worstRating: "1",
				},
			},
			{
				"@type": "FAQPage",
				"@id": `${siteProfile.siteUrl}/#faq`,
				mainEntity: faqEntries.map((item) => ({
					"@type": "Question",
					name: item.question,
					acceptedAnswer: {
						"@type": "Answer",
						text: item.answer,
					},
				})),
			},
		],
	};
</script>

<SEO
	title="Psicólogo em Vitória ES — Consultório em Jardim da Penha | Bernardo Carielo"
	description="Psicólogo em Vitória com consultório em Jardim da Penha, em frente à UFES. Atendimento presencial e online. Agende uma primeira conversa sem compromisso pelo WhatsApp."
	canonical="https://psicologobernardo.com.br/"
	image={siteProfile.ogImageUrl}
	imageAlt="Bernardo Carielo, psicólogo em Vitória ES"
	jsonLd={homeSchema}
/>

<svelte:head>
	<link
		rel="preload"
		as="image"
		href="/images/hero/hero-380x507.avif"
		imagesrcset="/images/hero/hero-380x507.avif 380w, /images/hero/hero-600x800-450w.avif 450w, /images/hero/hero-600x800.avif 600w"
		imagesizes="(max-width: 480px) 380px, (max-width: 768px) 450px, 600px"
		type="image/avif"
		fetchpriority="high"
	/>
</svelte:head>

<!-- Hero Section -->
<section class="hero gradient-hero hero-animated">
	<div class="hero-shapes">
		<div class="hero-shape hero-shape--1"></div>
		<div class="hero-shape hero-shape--2"></div>
		<div class="hero-shape hero-shape--3"></div>
		<div class="hero-shape hero-shape--4"></div>
	</div>
	<div class="container hero-container">
		<div class="hero-content">
			<h1 class="hero-h1-wrapper">
				<span
					class="hero-eyebrow animate-fade-in-up"
					style="--delay: 0.1s">Psicólogo em Vitória - ES</span
				>
				<span
					class="hero-title animate-fade-in-up"
					style="--delay: 0.2s"
				>
					Bernardo Carielo
					<span>CRP-16/5527 • Psicólogo Humanista</span>
				</span>
			</h1>
			<p
				class="hero-description animate-fade-in-up"
				style="--delay: 0.3s"
			>
				Psicoterapia individual presencial em <strong
					><a
						href="/localizacao/psicologo-jardim-da-penha/"
						class="text-primary-hover">Jardim da Penha</a
					>,
					<a
						href="/localizacao/psicologo-vitoria-es/"
						class="text-primary-hover">Vitória ES</a
					></strong
				> ou online. Escuta acolhedora, sem pressa — o primeiro passo é uma conversa.
			</p>
			<div class="hero-buttons animate-fade-in-up" style="--delay: 0.4s">
				<Button
					href={buildWhatsAppUrl("Olá, vi seu site e gostaria de agendar uma primeira conversa.")}
					variant="primary"
					size="lg"
				>
					<Phone size={20} />
					Agendar primeira conversa
				</Button>
				<Button href="/localizacao/psicologo-vitoria-es/" variant="outline" size="lg">
					<MapPin size={20} />
					Ver atendimento em Vitória
				</Button>
			</div>
			<div class="quick-facts animate-fade-in-up" style="--delay: 0.5s">
				<span>Jardim da Penha, em frente à UFES</span>
				<span>{siteProfile.crp}</span>
				<span>Presencial e online</span>
			</div>
		</div>
		<div class="hero-image">
			<picture>
				<source
					srcset="/images/hero/hero-380x507.avif 380w,
					        /images/hero/hero-600x800-450w.avif 450w,
					        /images/hero/hero-600x800.avif 600w"
					sizes="(max-width: 480px) 380px, (max-width: 768px) 450px, 600px"
					type="image/avif"
				/>
				<source
					srcset="/images/hero/hero-380x507.webp 380w,
					        /images/hero/hero-600x800-450w.webp 450w,
					        /images/hero/hero-600x800.webp 600w"
					sizes="(max-width: 480px) 380px, (max-width: 768px) 450px, 600px"
					type="image/webp"
				/>
				<img
					src="/images/hero/hero-600x800.webp"
					alt="Bernardo Carielo Psicólogo em Vitória ES"
					width="600"
					height="800"
					loading="eager"
					fetchpriority="high"
				/>
			</picture>
		</div>
	</div>
</section>

<!-- Trust Strip -->
<div class="trust-strip">
	<div class="container">
		<ul class="trust-strip__items">
			<li class="trust-strip__item">
				<span class="trust-strip__value">5.0 ★</span>
				<span class="trust-strip__label">Google e Doctoralia</span>
			</li>
			<li class="trust-strip__item">
				<span class="trust-strip__value">{siteProfile.crp}</span>
				<span class="trust-strip__label">Registro profissional</span>
			</li>
			<li class="trust-strip__item">
				<span class="trust-strip__value">Jardim da Penha</span>
				<span class="trust-strip__label">Em frente à UFES</span>
			</li>
			<li class="trust-strip__item">
				<span class="trust-strip__value">{siteProfile.hours.displayDays}</span>
				<span class="trust-strip__label">{siteProfile.hours.displayTime}</span>
			</li>
		</ul>
	</div>
</div>

<!-- Serviços Section -->
<Section variant="white" class="home-services-section" id="servicos">
	<div class="section-header section-header--left">
		<span class="section-kicker">Serviços</span>
		<h2>Serviços Oferecidos</h2>
		<p>Conheça as modalidades de atendimento disponíveis</p>
	</div>
	<div class="cards-grid">
		{#each primaryServiceItems as item}
			<Card
				icon={serviceIcons[item.name as keyof typeof serviceIcons]}
				title={item.name}
				href={item.href}
			>
				<p>{item.description}</p>
			</Card>
		{/each}
	</div>
	<div class="section-link-row">
		<a href="/servicos/" class="section-link">Ver todos os serviços →</a>
	</div>
</Section>

<!-- Avaliações Section — Google Reviews -->
<Section variant="white" id="avaliacoes">
	<div class="section-header section-header--left">
		<span class="section-kicker">Avaliações</span>
		<h2>Avaliações sobre o atendimento</h2>
		<p>Depoimentos publicados no Google por pessoas que passaram pelo processo terapêutico.</p>
	</div>
	<div class="avaliacoes-carousel-single">
		<ReviewCarousel reviews={googleReviews} reviewCount={siteProfile.reviews.reviewCount} />
	</div>
	<div class="section-link-row section-link-row--left">
		<a
			href={siteProfile.externalLinks.googleReviews}
			target="_blank"
			rel="noopener"
			class="section-link"
		>Ver todas as {siteProfile.reviews.reviewCount} avaliações no Google →</a>
		<a
			href={siteProfile.externalLinks.doctoralia}
			target="_blank"
			rel="noopener"
			class="section-link section-link--secondary"
		>Ver também os comentários no Doctoralia →</a>
	</div>
</Section>

<!-- Como posso ajudar -->
<Section variant="beige" class="home-support-section" id="como-posso-ajudar">
	<div class="section-header section-header--left">
		<span class="section-kicker">Como posso ajudar</span>
		<h2>Demandas mais comuns</h2>
	</div>
	<div class="support-grid">
		{#each experienceNavItems as item}
			{@const Icon = experienceIcons[item.href as keyof typeof experienceIcons]}
			{@const accent = experienceAccents[item.href] ?? "#08BA9C"}
			<a href={item.href} class="support-card" style="border-left: 3px solid {accent};">
				<div
					class="support-card__icon"
					style="background: {accent}1a; color: {accent};"
				>
					<Icon size={19} strokeWidth={1.8} />
				</div>
				<div>
					<h3>{item.name}</h3>
					<p>{item.description}</p>
				</div>
			</a>
		{/each}
	</div>
	<div class="section-link-row">
		<a href="/experiencia/" class="section-link">Explorar todas as demandas →</a>
	</div>
</Section>

<!-- Localização Section -->
<Section variant="beige" class="home-location-section" id="localizacao">
	<div class="section-header section-header--left">
		<span class="section-kicker">Localização</span>
		<h2>Conheça o Consultório</h2>
		<p>Um ambiente acolhedor e seguro, pensado para o seu bem-estar</p>
	</div>
	<div class="local-proof-grid">
		<div>
			<p class="local-address-short">
				<strong>{siteProfile.address.streetAddress}</strong>, {siteProfile.address.extendedAddress}
			</p>
			<p class="local-reference">
				O consultório fica em frente à UFES, no coração de <strong>Jardim da Penha</strong>, em Vitória/ES, em um espaço tranquilo e privativo. O ambiente foi cuidadosamente pensado para proporcionar conforto, acolhimento e confidencialidade durante as sessões.
			</p>
			<div class="local-links">
				<a
					href={siteProfile.externalLinks.googleMapsQuery}
					target="_blank"
					rel="noopener"
					class="local-map-btn"
				>
					<MapPin size={16} />
					Abrir no Google Maps
				</a>
				<a href="/localizacao/psicologo-vitoria-es/">
					<MapPin size={16} />
					Ver como chegar
				</a>
				<a href="/localizacao/psicologo-jardim-da-penha/">
					Consultório em Jardim da Penha
				</a>
			</div>
		</div>
		<ImageCarousel images={officeImages} />
	</div>
</Section>

<!-- FAQ Section -->
<Section variant="white" class="home-faq-section" id="faq">
	<div class="section-header section-header--left">
		<span class="section-kicker">Perguntas frequentes</span>
		<h2>Dúvidas comuns antes de começar</h2>
	</div>
	<div class="faq-container">
		{#each faqItems as item, index}
			<details class="faq-item" bind:open={item.open}>
				<summary
					class="faq-question"
					onclick={(e) => {
						e.preventDefault();
						toggleFaq(index);
					}}
				>
					<span>{item.question}</span>
					<ChevronDown
						size={20}
						class={item.open ? "chevron open" : "chevron"}
					/>
				</summary>
				<div class="faq-answer">
					<p>{item.answer}</p>
				</div>
			</details>
		{/each}
	</div>
</Section>

<!-- CTA Final -->
<Section variant="gradient" id="cta">
	<div class="cta-content">
		<h2>O primeiro passo é uma conversa curta</h2>
		<p>
			Escreva em poucas linhas o que está vivendo. A partir daí, alinhamos formato,
			horário e modalidade — presencial em Vitória ou online.
		</p>
		<Button
			href={buildWhatsAppUrl("Olá, vi seu site e gostaria de agendar uma primeira conversa.")}
			variant="secondary"
			size="lg"
			class="cta-button"
		>
			<Phone size={20} />
			Agendar primeira conversa
		</Button>
	</div>
</Section>

<style>
	/* ── Section backgrounds ── */
	:global(.home-services-section) {
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(249, 252, 251, 0.98));
	}

	:global(.home-support-section) {
		background:
			radial-gradient(circle at bottom right, rgba(248, 58, 80, 0.04), transparent 24%),
			linear-gradient(180deg, rgba(249, 236, 232, 0.7), rgba(255, 255, 255, 0.95));
	}

	:global(.home-location-section) {
		background:
			radial-gradient(circle at bottom left, rgba(8, 186, 156, 0.06), transparent 24%),
			linear-gradient(180deg, rgba(249, 236, 232, 0.78) 0%, #fff 100%);
	}

	/* ── Trust Strip ── */
	.trust-strip {
		border-top: 1px solid rgba(8, 186, 156, 0.12);
		border-bottom: 1px solid rgba(8, 186, 156, 0.12);
		background: rgba(255, 255, 255, 0.96);
		padding: 1.25rem 0;
	}

	.trust-strip__items {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0;
		list-style: none;
		margin: 0;
		padding: 0;
		flex-wrap: wrap;
	}

	.trust-strip__item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.2rem;
		padding: 0.5rem 2rem;
		text-align: center;
	}

	.trust-strip__item + .trust-strip__item {
		border-left: 1px solid rgba(8, 186, 156, 0.16);
	}

	.trust-strip__value {
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--primary-dark);
		white-space: nowrap;
	}

	.trust-strip__label {
		font-size: 0.78rem;
		color: var(--text-light);
		white-space: nowrap;
	}

	/* ── Quick Facts (hero) ── */
	.quick-facts {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1.25rem;
	}

	.quick-facts span {
		padding: 0.45rem 0.9rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.82);
		border: 1px solid rgba(8, 186, 156, 0.15);
		color: var(--primary-dark);
		font-size: 0.95rem;
		font-weight: 500;
	}

	/* ── Section header left ── */
	.section-header--left {
		text-align: left;
		max-width: 760px;
		margin: 0 0 2rem;
	}

	/* ── Section kicker ── */
	.section-kicker {
		display: block;
		font-size: 0.82rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--primary-color);
		margin-bottom: 0.5rem;
	}

	/* ── Section link row ── */
	.section-link-row {
		margin-top: 1.5rem;
		text-align: center;
	}

	.section-link-row--left {
		text-align: left;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-start;
	}

	.section-link {
		color: var(--primary-color);
		font-weight: 600;
	}

	.section-link--secondary {
		color: var(--text-light, #666);
		font-weight: 500;
		font-size: 0.92rem;
	}

	/* ── Support / Demandas grid ── */
	.support-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}

	.support-card {
		display: flex;
		gap: 0.9rem;
		padding: 1.15rem 1.2rem;
		border-radius: var(--radius-md);
		background: rgba(255, 255, 255, 0.9);
		border: 1px solid rgba(0, 0, 0, 0.07);
		box-shadow: var(--shadow-sm);
		transition: transform 0.18s ease, box-shadow 0.18s ease;
	}

	.support-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-hover);
	}

	/* Adjust carousel aspect ratio for the grid view */
	:global(.home-location-section .slides-wrapper) {
		aspect-ratio: 4/3 !important;
	}

	@media (min-width: 768px) {
		:global(.home-location-section .slides-wrapper) {
			aspect-ratio: 3/2 !important;
		}
	}

    .support-card__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 0.85rem;
		flex-shrink: 0;
	}

	.support-card h3 {
		font-size: 1.02rem;
		margin-bottom: 0.35rem;
	}

	.support-card p {
		color: var(--text-light);
		line-height: 1.58;
	}

	/* ── Location grid ── */
	.local-proof-grid {
		display: grid;
		grid-template-columns: 0.95fr 1.05fr;
		gap: 2rem;
		align-items: center;
	}

	.local-address-short {
		font-size: 1.1rem;
		margin-bottom: 0.4rem;
		line-height: 1.5;
	}

	.local-reference {
		color: var(--text-light);
		margin-bottom: 1.25rem;
		line-height: 1.6;
	}

	.local-links {
		display: grid;
		gap: 0.75rem;
	}

	.local-links a {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		width: fit-content;
		color: var(--primary-color);
		font-weight: 600;
	}

	.local-map-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.6rem 1.1rem;
		border-radius: var(--radius-sm);
		background: var(--primary-color);
		color: white !important;
		font-weight: 600;
		font-size: 0.92rem;
		transition: background 0.2s;
	}

	.local-map-btn:hover {
		background: var(--primary-dark);
	}

	/* ── Responsive ── */
	@media (max-width: 900px) {
		.local-proof-grid {
			grid-template-columns: 1fr;
		}

		.support-grid {
			grid-template-columns: 1fr;
		}

		.trust-strip__item {
			padding: 0.5rem 1.25rem;
		}
	}

	@media (max-width: 640px) {
		.trust-strip__item + .trust-strip__item {
			border-left: none;
			border-top: 1px solid rgba(8, 186, 156, 0.16);
		}

		.trust-strip__items {
			flex-direction: column;
			gap: 0;
		}

		.trust-strip__item {
			width: 100%;
			padding: 0.6rem 1rem;
		}

		.support-card {
			padding: 1rem;
		}
	}
</style>
