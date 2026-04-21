<script lang="ts">
	import {
		Button,
		Section,
		Card,
		ReviewCarousel,
		ImageCarousel,
		JourneyShortcuts,
		SEO,
		buildWhatsAppUrl,
		getFullStreetAddress,
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
		Clock,
		ChevronDown,
		Zap,
		Flame,
		HeartPulse,
		UsersRound,
		SmilePlus,
		Star,
	} from "lucide-svelte";
	import { onMount } from "svelte";
	import type { HomeReview } from "$lib/data/homeReviewsFallback";

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

	// Reviews — carregamento sob intenção.
	// O conteúdo completo das avaliações só é baixado quando a seção se aproxima
	// da viewport. Até lá, mostramos apenas o badge agregado (rating + contagem)
	// e um estado mínimo, evitando custo de HTML/JS/requests abaixo da dobra.
	let googleReviews = $state<HomeReview[]>([]);
	let reviewsSection: HTMLElement | undefined = $state();
	let reviewsLoaded = false;
	let mapSection: HTMLElement | undefined = $state();
	let mapVisible = $state(false);

	async function loadHomeReviews() {
		if (reviewsLoaded) return;
		reviewsLoaded = true;
		try {
			const response = await fetch("/data/reviews.json");
			if (response.ok) {
				const payload = (await response.json()) as unknown;
				if (Array.isArray(payload) && payload.length) {
					googleReviews = (payload as HomeReview[]).slice(0, 6);
					return;
				}
			}
		} catch {
			/* silencioso: usamos fallback abaixo */
		}
		const { homeReviewsFallback } = await import("$lib/data/homeReviewsFallback");
		googleReviews = homeReviewsFallback.slice(0, 6);
	}

	onMount(() => {
		const supportsIO = typeof IntersectionObserver !== "undefined";
		if (!supportsIO) {
			loadHomeReviews();
			mapVisible = true;
			return;
		}

		const observers: IntersectionObserver[] = [];

		if (reviewsSection) {
			const io = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							loadHomeReviews();
							io.disconnect();
							break;
						}
					}
				},
				{ rootMargin: "400px 0px" },
			);
			io.observe(reviewsSection);
			observers.push(io);
		}

		if (mapSection) {
			const io = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							mapVisible = true;
							io.disconnect();
							break;
						}
					}
				},
				{ rootMargin: "300px 0px" },
			);
			io.observe(mapSection);
			observers.push(io);
		}

		return () => observers.forEach((io) => io.disconnect());
	});

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
				name: siteProfile.personName,
				alternateName: siteProfile.fullName,
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
	title="Psicólogo em Vitória ES | Consultório em Jardim da Penha | Bernardo Carielo"
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
					style="--delay: 0.1s">Bernardo Carielo · CRP-16/5527</span
				>
				<span
					class="hero-title animate-fade-in-up"
					style="--delay: 0.2s"
				>
					Psicólogo em Vitória ES
					<span>Atendimento presencial e online</span>
				</span>
			</h1>
			<p
				class="hero-description animate-fade-in-up"
				style="--delay: 0.3s"
			>
				Psicoterapia individual presencial em <strong
					><a
						href="/psicologo-vitoria-es/psicologo-jardim-da-penha/"
						class="text-primary-hover">Jardim da Penha</a
					>,
					<a
						href="/psicologo-vitoria-es/"
						class="text-primary-hover">Vitória ES</a
					></strong
				> ou online. Escuta acolhedora, sem pressa. O primeiro passo é uma conversa.
			</p>
			<div class="hero-buttons animate-fade-in-up" style="--delay: 0.4s">
				<Button
					href={buildWhatsAppUrl("Olá, vi seu site e gostaria de agendar uma primeira conversa.")}
					variant="primary"
					size="lg"
				>
					<Phone size={20} />
					Falar pelo WhatsApp
				</Button>
			</div>
			<ul class="quick-facts animate-fade-in-up" style="--delay: 0.5s">
				<li>
					<MapPin size={14} strokeWidth={2} aria-hidden="true" />
					<span>Jardim da Penha, em frente à UFES</span>
				</li>
				<li>
					<span class="quick-facts__crp" aria-hidden="true">CRP</span>
					<span>{siteProfile.crp}</span>
				</li>
				<li>
					<Video size={14} strokeWidth={2} aria-hidden="true" />
					<span>Presencial e online</span>
				</li>
			</ul>
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

<!-- Trust line — informação que não aparece no hero -->
<div class="trust-line">
	<div class="container">
		<p>
			<Star size={15} fill="currentColor" strokeWidth={0} aria-hidden="true" />
			<strong>5.0</strong> no Google e Doctoralia
			<span class="trust-line__sep" aria-hidden="true">·</span>
			{siteProfile.reviews.reviewCount} avaliações
			<span class="trust-line__sep" aria-hidden="true">·</span>
			{siteProfile.hours.displayDays}, {siteProfile.hours.displayTime}
		</p>
	</div>
</div>

<!-- Atalhos de jornada -->
<Section variant="white" id="caminhos">
	<JourneyShortcuts
		title="Por onde começar"
		intro="Escolha o caminho que faz mais sentido para você agora."
		items={[
			{
				label: "Demanda",
				title: "Estou passando por algo difícil",
				description: "Veja as experiências que mais trazem pessoas ao consultório e encontre a que se aproxima do que você vive.",
				href: "#como-posso-ajudar",
			},
			{
				label: "Serviço",
				title: "Quero conhecer os formatos",
				description: "Psicoterapia individual, terapia de casal ou online. Veja qual faz sentido para a sua rotina.",
				href: "#servicos",
			},
			{
				label: "Localização",
				title: "Quero ver onde fica",
				description: "Consultório em Jardim da Penha, em frente à UFES. Veja como chegar e se a logística funciona.",
				href: "/psicologo-vitoria-es/",
			},
		]}
	/>
</Section>

<!-- Você se reconhece -->
<Section variant="beige" class="home-support-section" id="como-posso-ajudar">
	<div class="section-header section-header--left">
		<span class="section-kicker">Demandas frequentes</span>
		<h2>Alguns temas que podem se aproximar do que você está vivendo</h2>
		<p>Não é preciso ter um diagnóstico para procurar terapia. Muitas pessoas chegam ao consultório com sensações difíceis de nomear. Veja se algo abaixo se aproxima do que você vive.</p>
	</div>
	<div class="experience-list">
		{#each experienceNavItems as item, i}
			{@const Icon = experienceIcons[item.href as keyof typeof experienceIcons]}
			<a href={item.href} class="experience-item">
				<div class="experience-item__number">
					{String(i + 1).padStart(2, '0')}
				</div>
				<div class="experience-item__body">
					<h3>
						<Icon size={17} strokeWidth={1.8} class="experience-item__icon" />
						{item.name}
					</h3>
					<p>{item.description}</p>
				</div>
				<span class="experience-item__arrow">→</span>
			</a>
		{/each}
	</div>
	<div class="section-link-row">
		<a href="/experiencia/" class="section-link">Explorar todas as demandas →</a>
	</div>
</Section>

<!-- Serviços Section -->
<Section variant="white" class="home-services-section" id="servicos">
	<div class="section-header section-header--left">
		<span class="section-kicker">Serviços</span>
		<h2>Modalidades de atendimento</h2>
		<p>Cada formato existe para responder a uma necessidade diferente. Se você não sabe qual faz mais sentido, uma conversa rápida pelo WhatsApp já é suficiente para alinhar.</p>
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

<!-- Consultório Section -->
<Section variant="beige" class="home-location-section" id="consultorio">
	<div class="section-header section-header--left">
		<span class="section-kicker">Consultório</span>
		<h2>Um espaço reservado para a sua escuta</h2>
		<p>O consultório foi preparado com cuidado para acolher cada sessão: silencioso, privativo, pensado como um ambiente onde a conversa possa acontecer com calma.</p>
	</div>
	<div class="local-proof-grid">
		<div class="consultorio-copy">
			<p>
				Cada detalhe do espaço foi escolhido com atenção: a iluminação, as poltronas, a disposição da sala. Tudo para que você se sinta à vontade para falar sobre o que importa, no seu ritmo.
			</p>
			<p>
				É um ambiente pensado para sustentar a confidencialidade e o conforto que o processo terapêutico merece.
			</p>
			<div class="local-links">
				<a href="/psicologo-vitoria-es/psicologo-jardim-da-penha/">
					Conhecer o consultório em Jardim da Penha →
				</a>
				<a href="/psicologo-vitoria-es/">
					Ver atendimento em Vitória →
				</a>
			</div>
		</div>
		<ImageCarousel images={officeImages} />
	</div>
</Section>

<!-- Sobre Bernardo -->
<Section variant="beige" class="home-about-section" id="sobre-bernardo">
	<div class="about-card">
		<div class="about-card__photo">
			<img
				src="/images/sobre/bernardo-profissional-225w.webp"
				alt="Bernardo Carielo, psicólogo em Vitória ES"
				width="225"
				height="300"
				loading="lazy"
			/>
			<span class="about-card__crp">{siteProfile.crp}</span>
		</div>
		<div class="about-card__content">
			<span class="section-kicker">Sobre mim</span>
			<h2>Bernardo Carielo</h2>
			<p class="about-card__lead">
				Sou psicólogo clínico (<strong>{siteProfile.crp}</strong>), formado pela UFES e com formação na <strong>Abordagem Centrada na Pessoa</strong> pelo EncontroACP (SP). Minha jornada começou na Física, como professor. Depois, quis me aprofundar nas questões que nos tornam pessoas.
			</p>
			<p>
				Minha abordagem é direta, sem jargões e sem roteiros prontos. Acredito que cada pessoa pode encontrar caminhos próprios quando é escutada com presença e consideração genuínas.
			</p>
			<p>
				Também coordeno rodas de conversa e supervisões, buscando tornar o conhecimento sobre psicoterapia efetiva mais acessível. Atendo presencialmente em <strong>Jardim da Penha, Vitória</strong>, e também realizo atendimentos online.
			</p>
			<div class="about-card__links">
				<a href="/sobre/">Conhecer minha trajetória completa →</a>
				<a href="/servicos/psicoterapia-individual/">Como funciona a psicoterapia individual →</a>
			</div>
			<div class="about-card__cta">
				<Button
					href={buildWhatsAppUrl("Olá, vi seu site e gostaria de agendar uma primeira conversa.")}
					variant="primary"
					size="sm"
				>
					<Phone size={18} />
					Falar pelo WhatsApp
				</Button>
				<span class="about-card__cta-note">Respondo no mesmo dia útil</span>
			</div>
		</div>
	</div>
</Section>

<!-- Avaliações Section — Google Reviews -->
<Section variant="white" class="home-reviews-section" id="avaliacoes">
	<div bind:this={reviewsSection} class="reviews-section-anchor"></div>
	<div class="reviews-intro">
		<div class="reviews-intro__text">
			<span class="section-kicker">Avaliações</span>
			<h2>Quem já passou pelo consultório</h2>
			<p>Depoimentos reais publicados no Google por pessoas que passaram pelo processo terapêutico.</p>
		</div>
		<div class="reviews-intro__badge">
			<div class="reviews-badge">
				<Star size={22} fill="currentColor" />
				<span class="reviews-badge__rating">{siteProfile.reviews.ratingValue}</span>
				<span class="reviews-badge__count">{siteProfile.reviews.reviewCount} avaliações</span>
			</div>
		</div>
	</div>
	{#if googleReviews.length}
		<ReviewCarousel reviews={googleReviews} reviewCount={siteProfile.reviews.reviewCount} />
	{:else}
		<div class="reviews-placeholder" aria-hidden="true">
			<p>Carregando avaliações reais publicadas no Google…</p>
		</div>
	{/if}
	<div class="section-link-row section-link-row--left">
		<a
			href={siteProfile.externalLinks.googleReviews}
			target="_blank"
			rel="noopener"
			class="section-link"
		>Ver todas no Google →</a>
		<a
			href={siteProfile.externalLinks.doctoralia}
			target="_blank"
			rel="noopener"
			class="section-link section-link--secondary"
		>Ver no Doctoralia →</a>
	</div>
</Section>

<!-- Artigos em destaque -->
<Section variant="white" class="home-articles-section" id="artigos">
	<div class="section-header section-header--left">
		<span class="section-kicker">Artigos</span>
		<h2>Artigos que podem ajudar</h2>
		<p>Textos curtos sobre temas que costumam aparecer antes e durante o processo terapêutico.</p>
	</div>
	<div class="featured-articles-grid">
		<a href="/psicoterapia/como-funciona-terapia-primeira-sessao/" class="featured-article">
			<img
				src="/images/blog/como-funciona-terapia-primeira-sessao.webp"
				alt="Ilustração sobre como funciona a primeira sessão de terapia"
				width="800"
				height="450"
				loading="lazy"
				decoding="async"
				class="featured-article__img"
			/>
			<div class="featured-article__body">
				<span class="featured-article__tag">Primeira sessão</span>
				<h3>Como funciona a primeira sessão de terapia?</h3>
				<p>O que esperar, o que você pode trazer e por que não precisa ter tudo pronto.</p>
			</div>
		</a>
		<a href="/acp/relacao-principal-ferramenta-terapia/" class="featured-article">
			<img
				src="/images/blog/relacao-principal-ferramenta-terapia.webp"
				alt="Ilustração abstrata representando conexão genuína e vínculo terapêutico"
				width="800"
				height="450"
				loading="lazy"
				decoding="async"
				class="featured-article__img"
			/>
			<div class="featured-article__body">
				<span class="featured-article__tag">Abordagem</span>
				<h3>Por que a relação é a principal ferramenta da terapia?</h3>
				<p>Como a qualidade do vínculo terapêutico impacta diretamente o processo de mudança.</p>
			</div>
		</a>
		<a href="/psicoterapia/terapia-presencial-ou-online-como-escolher/" class="featured-article">
			<img
				src="/images/blog/terapia-presencial-ou-online-como-escolher.webp"
				alt="Ilustração representando a escolha entre terapia presencial e online"
				width="800"
				height="450"
				loading="lazy"
				decoding="async"
				class="featured-article__img"
			/>
			<div class="featured-article__body">
				<span class="featured-article__tag">Formato</span>
				<h3>Terapia presencial ou online: como escolher?</h3>
				<p>Critérios práticos para decidir qual modalidade funciona melhor para a sua rotina.</p>
			</div>
		</a>
	</div>
	<div class="section-link-row">
		<a href="/artigos/" class="section-link">Ver todos os artigos →</a>
	</div>
</Section>

<!-- Onde encontrar -->
<Section variant="beige" class="home-map-section" id="onde-encontrar">
	<div class="section-header section-header--left">
		<span class="section-kicker">Localização</span>
		<h2>Onde me encontrar</h2>
	</div>
	<div class="map-footer-grid">
		<div class="map-footer-info">
			<div class="map-footer-item">
				<MapPin size={18} />
				<div>
					<strong>Endereço</strong>
					<p>{getFullStreetAddress()}</p>
					<p>{siteProfile.address.neighborhood}, {siteProfile.address.city} - {siteProfile.address.state}</p>
					<p>CEP {siteProfile.address.postalCode}</p>
				</div>
			</div>
			<div class="map-footer-item">
				<Clock size={18} />
				<div>
					<strong>Horário</strong>
					<p>{siteProfile.hours.displayDays}</p>
					<p>{siteProfile.hours.displayTime}</p>
				</div>
			</div>
			<div class="map-footer-item">
				<Phone size={18} />
				<div>
					<strong>Contato</strong>
					<a
						href={buildWhatsAppUrl("Olá, vi seu site e gostaria de agendar uma primeira conversa.")}
						class="map-footer-whatsapp"
					>Falar pelo WhatsApp →</a>
				</div>
			</div>
		</div>
		<div class="map-footer-embed" bind:this={mapSection}>
			{#if mapVisible}
				<iframe
					src={siteProfile.externalLinks.googleMapsEmbed}
					width="100%"
					height="100%"
					style="border:0; border-radius: var(--radius-md);"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Localização do consultório de Bernardo Carielo em Jardim da Penha, Vitória ES"
				></iframe>
			{:else}
				<button
					type="button"
					class="map-footer-placeholder"
					onclick={() => (mapVisible = true)}
					aria-label="Carregar mapa interativo do consultório"
				>
					<MapPin size={28} />
					<span>Carregar mapa</span>
				</button>
			{/if}
		</div>
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
		<h2>O primeiro passo é uma conversa</h2>
		<p>
			Você não precisa ter tudo claro para começar. Escreva em poucas linhas
			o que está vivendo. A partir daí, alinhamos formato, horário e
			modalidade, presencial em Vitória ou online.
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

	/* ── Trust line ── */
	.trust-line {
		border-bottom: 1px solid rgba(8, 186, 156, 0.12);
		background: rgba(255, 255, 255, 0.96);
		padding: 0.65rem 0;
	}

	.trust-line p {
		margin: 0;
		text-align: center;
		font-size: 0.9rem;
		color: var(--text-light, #556);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0 0.4rem;
		line-height: 1.4;
	}

	.trust-line p :global(svg) {
		color: #f5a623;
		margin-right: 0.1rem;
	}

	.trust-line strong {
		color: var(--primary-dark);
		font-weight: 700;
	}

	.trust-line__sep {
		color: rgba(8, 186, 156, 0.45);
		margin: 0 0.15rem;
	}

	/* ── Quick Facts (hero) ── */
	.quick-facts {
		list-style: none;
		padding: 0;
		margin: 1.25rem 0 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem 1.5rem;
		color: var(--text-light, #556);
		font-size: 0.9rem;
		line-height: 1.4;
	}

	.quick-facts li {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
	}

	.quick-facts li :global(svg) {
		color: var(--primary-color);
		opacity: 0.85;
		flex-shrink: 0;
	}

	.quick-facts__crp {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		color: var(--primary-color);
		opacity: 0.85;
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

	/* ── Experience list ── */
	.experience-list {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.experience-item {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		padding: 1.25rem 1.4rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.06);
		transition: background 0.2s ease, padding-left 0.2s ease;
	}

	.experience-item:first-child {
		border-top: 1px solid rgba(0, 0, 0, 0.06);
	}

	.experience-item:hover {
		background: rgba(255, 255, 255, 0.7);
		padding-left: 1.8rem;
	}

	.experience-item__number {
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--primary-color);
		opacity: 0.45;
		flex-shrink: 0;
		width: 2rem;
		font-variant-numeric: tabular-nums;
	}

	.experience-item__body {
		flex: 1;
		min-width: 0;
	}

	.experience-item__body h3 {
		font-size: 1.05rem;
		margin-bottom: 0.25rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	:global(.experience-item__icon) {
		flex-shrink: 0;
		opacity: 0.7;
	}

	.experience-item__body p {
		color: var(--text-light);
		line-height: 1.55;
		font-size: 0.93rem;
	}

	.experience-item__arrow {
		font-size: 1.2rem;
		flex-shrink: 0;
		color: var(--primary-color);
		opacity: 0;
		transform: translateX(-6px);
		transition: opacity 0.2s ease, transform 0.2s ease;
	}

	.experience-item:hover .experience-item__arrow {
		opacity: 1;
		transform: translateX(0);
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

	/* ── Location grid ── */
	.local-proof-grid {
		display: grid;
		grid-template-columns: 0.95fr 1.05fr;
		gap: 2rem;
		align-items: center;
	}

	.consultorio-copy p {
		color: var(--text-light);
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.consultorio-copy p:last-of-type {
		margin-bottom: 1.25rem;
	}

	.local-links {
		display: grid;
		gap: 0.6rem;
		padding-top: 0.5rem;
		border-top: 1px solid rgba(8, 186, 156, 0.14);
	}

	.local-links a {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		width: fit-content;
		color: var(--primary-color);
		font-weight: 600;
	}

	/* ── Home FAQ (scoped — mesmos espaçamentos de /servicos/terapia-online/) ── */
	:global(.home-faq-section) .faq-container {
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	:global(.home-faq-section) .faq-item {
		background: var(--white);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		border: 1px solid rgba(8, 186, 156, 0.08);
		overflow: hidden;
		transition: box-shadow 0.2s ease;
	}

	:global(.home-faq-section) .faq-item[open] {
		box-shadow: var(--shadow-md);
	}

	:global(.home-faq-section) .faq-question {
		padding: 1.25rem 1.5rem;
	}

	:global(.home-faq-section) .faq-question span {
		padding-right: 1.5rem;
	}

	:global(.home-faq-section) .faq-answer {
		padding: 0 1.5rem 1.5rem;
	}

	:global(.home-faq-section) .faq-answer p {
		line-height: 1.75;
		margin: 0;
	}

	/* ── Featured articles grid ── */
	.featured-articles-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.25rem;
	}

	.featured-article {
		display: flex;
		flex-direction: column;
		border-radius: var(--radius-md);
		background: #fff;
		border: 1px solid rgba(0, 0, 0, 0.08);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
		overflow: hidden;
		transition: transform 0.18s ease, box-shadow 0.18s ease;
	}

	.featured-article:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-hover);
	}

	.featured-article__img {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		display: block;
	}

	.featured-article__body {
		padding: 1rem 1.25rem 1.25rem;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.featured-article__tag {
		display: inline-flex;
		width: fit-content;
		margin-bottom: 0.7rem;
		padding: 0.25rem 0.6rem;
		border-radius: 999px;
		background: rgba(8, 186, 156, 0.1);
		color: var(--primary-dark);
		font-size: 0.76rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.featured-article h3 {
		font-size: 1.02rem;
		margin-bottom: 0.4rem;
		line-height: 1.4;
	}

	.featured-article p {
		color: var(--text-light);
		line-height: 1.55;
		flex: 1;
	}

	/* ── About card ── */
	:global(.home-about-section) {
		background:
			radial-gradient(circle at top left, rgba(8, 186, 156, 0.05), transparent 40%),
			linear-gradient(180deg, rgba(249, 236, 232, 0.6), rgba(255, 255, 255, 0.95));
	}

	.about-card {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 2.5rem;
		align-items: start;
		background: rgba(255, 255, 255, 0.85);
		border: 1px solid rgba(0, 0, 0, 0.06);
		border-radius: var(--radius-lg);
		padding: 2.5rem;
		box-shadow: var(--shadow-sm);
	}

	.about-card__photo {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.about-card__photo img {
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
	}

	.about-card__crp {
		font-size: 0.82rem;
		color: var(--primary-dark);
		font-weight: 600;
		background: rgba(8, 186, 156, 0.1);
		padding: 0.3rem 0.75rem;
		border-radius: 2rem;
	}

	.about-card__content h2 {
		font-size: 1.6rem;
		margin-bottom: 1rem;
	}

	.about-card__lead {
		font-size: 1.05rem;
		color: var(--text-color);
		line-height: 1.7;
		margin-bottom: 0.75rem;
	}

	.about-card__content p {
		color: var(--text-light);
		line-height: 1.7;
		margin-bottom: 0.75rem;
	}

	.about-card__links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(0, 0, 0, 0.06);
	}

	.about-card__links a {
		color: var(--primary-color);
		font-weight: 600;
	}

	.about-card__cta {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 1.25rem;
		flex-wrap: wrap;
	}

	.about-card__cta-note {
		font-size: 0.88rem;
		color: var(--text-light, #667);
	}

	/* ── Reviews section ── */
	:global(.home-reviews-section) {
		background: linear-gradient(180deg, #fff, rgba(249, 252, 251, 0.98));
	}

	.reviews-intro {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.reviews-intro__text {
		flex: 1;
	}

	.reviews-intro__text h2 {
		margin-bottom: 0.5rem;
	}

	.reviews-intro__text p {
		color: var(--text-light);
		line-height: 1.6;
	}

	.reviews-badge {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(8, 186, 156, 0.08);
		border: 1px solid rgba(8, 186, 156, 0.15);
		border-radius: var(--radius-md);
		padding: 0.75rem 1.25rem;
		color: var(--primary-dark);
		white-space: nowrap;
	}

	.reviews-badge__rating {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1;
	}

	.reviews-badge__count {
		font-size: 0.85rem;
		color: var(--text-light);
	}

	/* ── Map footer section ── */
	:global(.home-map-section) {
		background:
			radial-gradient(circle at bottom right, rgba(8, 186, 156, 0.06), transparent 30%),
			linear-gradient(180deg, rgba(249, 236, 232, 0.6) 0%, #fff 100%);
	}

	.map-footer-grid {
		display: grid;
		grid-template-columns: 1fr 1.4fr;
		gap: 2rem;
		align-items: stretch;
	}

	.map-footer-info {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.map-footer-item {
		display: flex;
		gap: 0.85rem;
		align-items: flex-start;
		color: var(--primary-dark);
	}

	.map-footer-item strong {
		display: block;
		font-size: 0.92rem;
		color: var(--text-color);
		margin-bottom: 0.2rem;
	}

	.map-footer-item p {
		color: var(--text-light);
		line-height: 1.55;
		font-size: 0.93rem;
	}

	.map-footer-whatsapp {
		color: var(--primary-color);
		font-weight: 600;
		font-size: 0.93rem;
	}

	.map-footer-embed {
		min-height: 280px;
		border-radius: var(--radius-md);
		overflow: hidden;
		box-shadow: var(--shadow-sm);
		border: 1px solid rgba(0, 0, 0, 0.06);
	}

	.map-footer-placeholder {
		width: 100%;
		min-height: 280px;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		background:
			linear-gradient(180deg, rgba(8, 186, 156, 0.06), rgba(8, 186, 156, 0.02)),
			#f7fbfa;
		border: 0;
		color: var(--primary-dark);
		font-weight: 600;
		font-size: 0.95rem;
		cursor: pointer;
	}

	.map-footer-placeholder:hover {
		background:
			linear-gradient(180deg, rgba(8, 186, 156, 0.1), rgba(8, 186, 156, 0.04)),
			#f3f9f8;
	}

	.reviews-section-anchor {
		height: 0;
	}

	.reviews-placeholder {
		min-height: 220px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-light);
		font-size: 0.95rem;
	}

	/* ── Responsive ── */
	@media (max-width: 900px) {
		.featured-articles-grid {
			grid-template-columns: 1fr;
		}

		.local-proof-grid {
			grid-template-columns: 1fr;
		}

		.about-card {
			grid-template-columns: 1fr;
			text-align: center;
			padding: 2rem;
		}

		.about-card__photo {
			position: static;
			margin: 0 auto;
		}

		.map-footer-grid {
			grid-template-columns: 1fr;
		}

		.map-footer-embed {
			min-height: 260px;
		}

		.reviews-intro {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	@media (max-width: 640px) {
		.experience-item {
			padding: 1rem 1.1rem;
			gap: 1rem;
		}

		.experience-item__number {
			font-size: 1.1rem;
		}

		.experience-item__arrow {
			display: none;
		}

		.about-card {
			padding: 1.5rem;
		}
	}
</style>
