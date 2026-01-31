<script lang="ts">
	import {
		Button,
		Section,
		Card,
		ReviewCarousel,
		ImageCarousel,
		SEO,
	} from "$lib";
	import {
		Heart,
		Video,
		Users,
		Calendar,
		Phone,
		Mail,
		MapPin,
		Award,
		Clock,
		MessageCircle,
		ChevronDown,
		GraduationCap,
		ExternalLink,
		Star,
	} from "lucide-svelte";

	let faqItems = $state([
		{
			question:
				"Como funciona a terapia pela Abordagem Centrada na Pessoa?",
			answer: "A terapia acontece em um espaço de escuta empática e genuína, onde você pode falar sobre o que sente sem julgamentos. O foco é ajudar você a se compreender e tomar decisões mais alinhadas a quem é.",
			open: false,
		},
		{
			question: "Atende presencial e online?",
			answer: "Sim. O atendimento presencial acontece em Vitória/ES, no bairro Jardim da Penha. Também realizo atendimentos online para todo o Brasil e para brasileiros que vivem no exterior.",
			open: false,
		},
		{
			question: "Aceita convênio?",
			answer: "Não trabalho com convênios. Os atendimentos são particulares, o que garante maior flexibilidade de horários e um cuidado personalizado. Emito Nota Fiscal em conformidade com a política de reembolso dos principais planos de saúde.",
			open: false,
		},
		{
			question: "Quanto custa uma sessão de psicoterapia?",
			answer: "Os valores são definidos considerando o tipo de atendimento e a duração das sessões. Entre em contato para conversar — buscaremos uma forma que caiba na sua realidade.",
			open: false,
		},
		{
			question: "Quanto tempo dura o processo terapêutico?",
			answer: "Cada pessoa tem seu tempo. Algumas vivenciam mudanças em poucas semanas, outras preferem um processo contínuo. Conversamos sobre isso ao longo do acompanhamento.",
			open: false,
		},
		{
			question: "Como agendar uma consulta?",
			answer: 'Você pode conversar diretamente comigo pelo WhatsApp. Basta clicar no botão "Conversar" ou "Falar no WhatsApp".',
			open: false,
		},
	]);

	function toggleFaq(index: number) {
		faqItems = faqItems.map((item, i) => ({
			...item,
			open: i === index ? !item.open : false,
		}));
	}

	// Google Reviews data (exact content from original site for SEO)
	const googleReviews = [
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

	// Doctoralia Reviews data (exact content from original site for SEO)
	const doctoraliaReviews = [
		{
			name: "FG",
			initial: "F",
			rating: 5,
			text: "Bernardo é um profissional ímpar. Atento e detalhista, ele é sempre pertinente em suas colocações e conduz o processo terapêutico de forma muito empática e leve. De forma bastante natural e com diálogo aberto, nos ajuda com as questões complexas que nos levam até ele. A gente fica bastante à vontade durante as sessões, sem tabus ou meias palavras.",
			date: "8 de dezembro de 2020",
		},
		{
			name: "Marina",
			initial: "M",
			rating: 5,
			text: "Bernado se mostrou empático, responsivo, paciente e claro durante a sessão. Um diferencial foi a acolhida e a educação durante os contatos por Whatsapp.",
			date: "1 de julho de 2025",
		},
		{
			name: "Gustavo",
			initial: "G",
			rating: 5,
			text: "O Bernardo tem me ajudado demais em um dos momentos mais difíceis da minha vida. Excelente psicólogo.",
			date: "1 de dezembro de 2023",
		},
		{
			name: "Mayke",
			initial: "M",
			rating: 5,
			text: "Foi uma consulta que me aliviou e me fez dormir. Primeiro dia e me sinto mais leve, muito detalhado e perguntas que fazem sentido.",
			date: "21 de setembro de 2022",
		},
		{
			name: "Kleber",
			initial: "K",
			rating: 5,
			text: "O Dr. Bernardo é extremamente atencioso e empático, me senti como se estivesse conversando com meu melhor amigo e tudo fluiu muito bem, dizem que a primeira impressão é a que fica e ela foi a melhor possível. Parabéns Dr. Bernardo você é 10, obrigado.",
			date: "23 de fevereiro de 2022",
		},
	];

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

	const homeSchema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": "https://psicologobernardo.com.br/#website",
				url: "https://psicologobernardo.com.br/",
				name: "Psicólogo Bernardo",
				inLanguage: "pt-BR",
				publisher: {
					"@id": "https://psicologobernardo.com.br/#organization",
				},
			},
			{
				"@type": "WebPage",
				"@id": "https://psicologobernardo.com.br/#webpage",
				url: "https://psicologobernardo.com.br/",
				name: "Bernardo Carielo Psicólogo",
				description:
					"Psicólogo em Vitória-ES (Jardim da Penha) e Online. Especialista na Abordagem Centrada na Pessoa. Atendimento humanizado para ansiedade, depressão, autoconhecimento e relacionamentos.",
				isPartOf: {
					"@id": "https://psicologobernardo.com.br/#website",
				},
				mainEntity: {
					"@id": "https://psicologobernardo.com.br/#organization",
				},
			},
			{
				"@type": ["LocalBusiness", "ProfessionalService"],
				"@id": "https://psicologobernardo.com.br/#organization",
				name: "Bernardo Carielo Psicólogo",
				alternateName: "Psicólogo Bernardo",
				description:
					"Psicólogo em Vitória-ES (Jardim da Penha) e Online. Especialista na Abordagem Centrada na Pessoa. Atendimento humanizado para ansiedade, depressão, autoconhecimento e relacionamentos.",
				image: [
					"https://psicologobernardo.com.br/images/hero/hero-600x800.webp",
					"https://psicologobernardo.com.br/images/consultorio/ambiente-acolhedor.jpg",
				],
				url: "https://psicologobernardo.com.br/",
				telephone: "+5527998331228",
				email: "contato@psicologobernardo.com.br",
				priceRange: "$$",
				currenciesAccepted: "BRL",
				paymentAccepted: "Dinheiro, Transferência Bancária, PIX",
				foundingDate: "2017",
				address: {
					"@type": "PostalAddress",
					streetAddress:
						"Rua Darcy Grijó, 50, Sala 409, Ed. Madison Office Tower",
					addressLocality: "Vitória",
					addressRegion: "ES",
					postalCode: "29060-500",
					addressCountry: {
						"@type": "Country",
						name: "BR",
					},
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: -20.2798925,
					longitude: -40.3009252,
				},
				hasMap: "https://www.google.com/maps/place/Bernardo+Carielo+Psic%C3%B3logo/@-20.2798925,-40.3009252,1019m/data=!3m2!1e3!4b1!4m6!3m5!1s0xb8171b61b8e13b:0x5bab77942d3119e5!8m2!3d-20.2798925!4d-40.3009252!16s%2Fg%2F11hdqw304k?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
				containedInPlace: {
					"@type": "LocalBusiness",
					name: "Arranjos Psicologia",
				},
				areaServed: [
					{
						"@type": "City",
						name: "Vitória",
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
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
						],
						opens: "13:30",
						closes: "21:00",
					},
				],
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: "5.0",
					reviewCount: "25",
					bestRating: "5",
					worstRating: "1",
				},
				review: [
					{
						"@type": "Review",
						reviewRating: {
							"@type": "Rating",
							ratingValue: "5",
							bestRating: "5",
						},
						author: { "@type": "Person", name: "Kleber do R." },
						reviewBody:
							"O Dr. Bernardo é extremamente atencioso e empático, me senti como se estivesse conversando com meu melhor amigo e tudo fluiu muito bem.",
						datePublished: "2024-12-12",
					},
					{
						"@type": "Review",
						reviewRating: {
							"@type": "Rating",
							ratingValue: "5",
							bestRating: "5",
							worstRating: "1",
						},
						author: { "@type": "Person", name: "Marina Benetti" },
						reviewBody:
							"Excelente profissional, educado, atento e empático. O espaço é acolhedor, limpo e de fácil acesso.",
						datePublished: "2024-12-12",
					},
					{
						"@type": "Review",
						reviewRating: {
							"@type": "Rating",
							ratingValue: "5",
							bestRating: "5",
						},
						author: {
							"@type": "Person",
							name: "Eder França Balbino",
						},
						reviewBody:
							"Sem palavras para descrever o quanto me ajudou num momento extremamente importante em minha vida.",
						datePublished: "2024-12-12",
					},
					{
						"@type": "Review",
						reviewRating: {
							"@type": "Rating",
							ratingValue: "5",
							bestRating: "5",
						},
						author: { "@type": "Person", name: "FG" },
						reviewBody:
							"Bernardo é um profissional ímpar. Atento e detalhista, ele é sempre pertinente em suas colocações.",
						datePublished: "2020-12-08",
					},
					{
						"@type": "Review",
						reviewRating: {
							"@type": "Rating",
							ratingValue: "5",
							bestRating: "5",
						},
						author: { "@type": "Person", name: "Gustavo" },
						reviewBody:
							"O Bernardo tem me ajudado demais em um dos momentos mais difíceis da minha vida. Excelente psicólogo.",
						datePublished: "2023-12-01",
					},
				],
				sameAs: [
					"https://www.instagram.com/bcarielo",
					"https://www.facebook.com/bcarielo",
					"https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria",
					"https://www.google.com/maps/place/Bernardo+Carielo+Psic%C3%B3logo/@-20.2798925,-40.3009252,1019m/data=!3m2!1e3!4b1!4m6!3m5!1s0xb8171b61b8e13b:0x5bab77942d3119e5!8m2!3d-20.2798925!4d-40.3009252!16s%2Fg%2F11hdqw304k?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
				],
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: "Serviços de Psicologia",
					itemListElement: [
						{
							"@type": "OfferCatalog",
							name: "Psicoterapia",
							itemListElement: [
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Psicoterapia Individual Presencial",
										description:
											"Atendimento psicológico presencial em consultório no Jardim da Penha.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Terapia Online",
										description:
											"Atendimento psicológico remoto via videochamada para todo o Brasil.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Terapia de Casal",
										description:
											"Apoio para casais melhorarem a comunicação e o relacionamento.",
									},
								},
							],
						},
						{
							"@type": "OfferCatalog",
							name: "Serviços Especializados",
							itemListElement: [
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Grupos e Rodas de Conversa",
										description:
											"Encontros coletivos para troca de experiências.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Supervisão Profissional",
										description:
											"Supervisão clínica para psicólogos em formação.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Terapia para Brasileiros no Exterior",
										description:
											"Atendimento online para brasileiros vivendo fora do país.",
									},
								},
							],
						},
					],
				},
				founder: {
					"@id": "https://psicologobernardo.com.br/sobre/#person",
				},
				potentialAction: {
					"@type": "ReserveAction",
					target: {
						"@type": "EntryPoint",
						urlTemplate:
							"https://psicologobernardo.com.br/agendar/",
						actionPlatform: [
							"http://schema.org/DesktopWebPlatform",
							"http://schema.org/MobileWebPlatform",
						],
					},
					result: {
						"@type": "Reservation",
						name: "Agendamento de Consulta",
					},
				},
			},
		],
	};
</script>

<SEO
	title="Psicólogo em Vitória ES – Jardim da Penha | Bernardo Carielo"
	description="Psicólogo em Vitória ES, no Jardim da Penha. Atendimento presencial e online pela Abordagem Centrada na Pessoa. 8+ anos de experiência. Agende sua consulta."
	canonical="https://psicologobernardo.com.br/"
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
				Atendimento psicológico referência em <strong
					><a
						href="/localizacao/psicologo-jardim-da-penha/"
						class="text-primary-hover">Jardim da Penha</a
					>,
					<a
						href="/localizacao/psicologo-vitoria-es/"
						class="text-primary-hover">Vitória ES</a
					></strong
				> e online. Um espaço seguro, com base na Abordagem Centrada na Pessoa,
				para você se conhecer e crescer.
			</p>
			<div class="hero-buttons animate-fade-in-up" style="--delay: 0.4s">
				<Button
					href="https://wa.me/5527998331228?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20terapia."
					variant="primary"
					size="lg"
				>
					<Calendar size={20} />
					Conversar
				</Button>
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

<!-- Sobre Section (Dark) -->
<Section variant="dark" id="sobre">
	<div class="section-header">
		<h2>Sobre mim</h2>
	</div>
	<div class="sobre-content">
		<p class="sobre-intro">
			Sou psicólogo desde 2017. Atuo pela <strong
				>Abordagem Centrada na Pessoa</strong
			>, uma abordagem humanista que valoriza a escuta empática e o
			acolhimento genuíno. Acredito que cada pessoa possui recursos para
			compreender a si mesma e fazer mudanças significativas em sua vida.
		</p>
		<div class="cards-grid">
			<Card icon={Heart} title="Acolhimento" variant="dark">
				<p>Espaço seguro e sem julgamentos para você ser você mesmo.</p>
			</Card>
			<Card icon={Clock} title="8+ Anos" variant="dark">
				<p>De experiência clínica ajudando pessoas.</p>
			</Card>
			<Card icon={Users} title="8000+ Horas" variant="dark">
				<p>De atendimento clínico ao longo da carreira.</p>
			</Card>
			<Card icon={Award} title="CRP-16/5527" variant="dark">
				<p>
					Devidamente registrado no Conselho Regional de Psicologia.
				</p>
			</Card>
		</div>
	</div>
</Section>

<!-- Avaliações Section -->
<Section variant="white" id="avaliacoes">
	<div class="section-header">
		<h2>O que dizem meus pacientes</h2>
		<p>Confira as avaliações de quem já passou pelo processo terapêutico</p>
	</div>
	<div class="avaliacoes-carousels">
		<ReviewCarousel platform="doctoralia" reviews={doctoraliaReviews} />
		<ReviewCarousel platform="google" reviews={googleReviews} />
	</div>
	<div class="avaliacoes-cta">
		<p>
			Quer conhecer mais sobre meu trabalho? <a
				href="https://wa.me/5527998331228?text=Olá,%20vi%20os%20depoimentos%20no%20site%20e%20gostaria%20de%20conversar."
				>Converse comigo no WhatsApp</a
			> e comece sua jornada de autoconhecimento.
		</p>
	</div>
</Section>

<!-- Credenciais Section -->
<Section variant="beige" id="experiencia">
	<div class="section-header">
		<h2>Experiência e Formação</h2>
		<p>
			Mais de 8 anos dedicados à prática clínica e formação continuada em
			Abordagem Centrada na Pessoa
		</p>
	</div>
	<div class="credenciais-grid">
		<div class="credencial-card">
			<h3><GraduationCap size={24} /> Experiência Profissional</h3>
			<ul>
				<li>
					<strong>Facilitação da Roda de Conversa Entre Homens</strong
					><br /><span>EncontroACP • 2022 – atual</span>
				</li>
				<li>
					<strong>Psicoterapeuta e Responsável Técnico</strong><br
					/><span>Arranjos Psicologia • 2018 – atual</span>
				</li>
				<li>
					<strong>Coordenação de Grupo e Atendimento Clínico</strong
					><br /><span
						>Serviço de Atenção Psicológica ao Graduando (UFES) •
						2016 – 2017</span
					>
				</li>
			</ul>
		</div>
		<div class="credencial-card">
			<h3><Award size={24} /> Formação</h3>
			<ul>
				<li>
					<strong>Formação Continuada em Clínica na ACP</strong><br
					/><span>EncontroACP • 2023 – atual</span>
				</li>
				<li>
					<strong
						>Formação em Prática da Psicologia Clínica na ACP</strong
					><br /><span>EncontroACP • 2022</span>
				</li>
				<li>
					<strong>Bacharelado em Psicologia</strong><br /><span
						>Universidade Federal do Espírito Santo (UFES) • 2017</span
					>
				</li>
			</ul>
		</div>
	</div>
	<div class="credenciais-cta">
		<a href="/sobre/" class="btn-link">Ver mais</a>
	</div>
</Section>

<!-- Arranjos Banner -->
<section class="arranjos-banner">
	<div class="container">
		<p>
			<em
				>Arranjos Psicologia — um espaço de formação, pesquisa e diálogo
				sobre a prática centrada na pessoa.</em
			>
		</p>
		<a
			href="https://arranjospsicologia.com.br"
			target="_blank"
			rel="noopener"
			class="btn-arranjos"
		>
			Conheça também a Arranjos Psicologia <ExternalLink size={16} />
		</a>
	</div>
</section>

<!-- Consultório Section -->
<Section variant="white" id="consultorio">
	<div class="section-header">
		<h2>Conheça o Consultório</h2>
		<p>Um ambiente acolhedor e seguro, pensado para o seu bem-estar</p>
	</div>
	<div class="consultorio-intro">
		<p>
			O consultório fica em frente à UFES, no coração de <strong
				>Jardim da Penha</strong
			>, em Vitória/ES, em um espaço tranquilo e privativo. O ambiente foi
			cuidadosamente pensado para proporcionar conforto, acolhimento e
			confidencialidade durante as sessões.
		</p>
	</div>
	<ImageCarousel images={officeImages} />
	<div class="consultorio-cta">
		<p>
			<strong>Endereço:</strong> Rua Darcy Grijó, 50 - Sala 409, Jardim da
			Penha, Vitória - ES
		</p>
		<p>
			Atendimento presencial ou online. <a
				href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20visita%20ao%20consultório."
				class="btn-link">Entre em contato</a
			> para agendar sua primeira sessão.
		</p>
	</div>
</Section>

<!-- Serviços Section -->
<Section variant="beige" id="servicos">
	<div class="section-header">
		<h2>Serviços Oferecidos</h2>
		<p>Conheça as modalidades de atendimento disponíveis</p>
	</div>
	<div class="cards-grid">
		<Card
			icon={Heart}
			title="Psicoterapia Individual"
			href="/servicos/psicoterapia-individual/"
		>
			<p>Processo terapêutico focado em suas necessidades individuais.</p>
		</Card>
		<Card
			icon={Video}
			title="Terapia Online"
			href="/servicos/terapia-online/"
		>
			<p>Atendimento de onde você estiver, com a mesma qualidade.</p>
		</Card>
		<Card
			icon={Users}
			title="Terapia de Casal"
			href="/servicos/terapia-de-casal/"
		>
			<p>Apoio para casais que desejam melhorar sua relação.</p>
		</Card>
		<Card
			icon={MessageCircle}
			title="Grupos e Rodas"
			href="/servicos/grupos-e-rodas/"
		>
			<p>Encontros coletivos para troca de experiências.</p>
		</Card>
	</div>
</Section>

<!-- Projetos Section (Dark) -->
<Section variant="dark" id="projetos">
	<div class="section-header">
		<h2>Projetos em Andamento</h2>
	</div>
	<div class="projetos-grid">
		<div class="projeto-card">
			<div class="projeto-image">
				<img
					src="/images/roda-homens.webp"
					alt="Roda de Conversa Entre Homens"
					loading="lazy"
					decoding="async"
					width="400"
					height="300"
				/>
			</div>
			<div class="projeto-content">
				<h3>Roda de Conversa Entre Homens (Online)</h3>
				<p>
					Facilito este grupo terapêutico do <a
						href="https://encontroacp.com.br"
						target="_blank"
						rel="noopener">EncontroACP</a
					>, voltado para homens que querem compartilhar suas
					vivências, desafios e emoções em um espaço seguro e livre de
					julgamentos.
				</p>
				<a
					href="https://encontroacp.com.br/entrehomens/"
					target="_blank"
					rel="noopener"
					class="projeto-link"
				>
					Saiba Mais no EncontroACP <ExternalLink size={14} />
				</a>
			</div>
		</div>
		<div class="projeto-card">
			<div class="projeto-image">
				<img
					src="/images/roda-psicologos.webp"
					alt="Roda de Conversa para Psicólogos"
					loading="lazy"
					decoding="async"
					width="400"
					height="300"
				/>
			</div>
			<div class="projeto-content">
				<h3>
					Roda de Conversa: Desafios da Profissão Psi - ACP (Online)
				</h3>
				<p>
					Espaço voltado para psicólogos da ACP discutirem questões
					burocráticas, financeiras e éticas da profissão. Um lugar de
					troca entre profissionais.
				</p>
				<a
					href="https://arranjospsicologia.com.br"
					target="_blank"
					rel="noopener"
					class="projeto-link"
				>
					Saiba Mais na Arranjos <ExternalLink size={14} />
				</a>
			</div>
		</div>
	</div>
	<div class="projetos-nota">
		<p>
			<strong>Atenção:</strong> Podem haver outros projetos e programas
			disponíveis.
			<a
				href="https://arranjospsicologia.com.br/projetos"
				target="_blank"
				rel="noopener"
				>Confira todos os projetos ativos na Arranjos Psicologia</a
			>.
		</p>
	</div>
</Section>

<!-- FAQ Section -->
<Section variant="white" id="faq">
	<div class="section-header">
		<h2>Perguntas Frequentes</h2>
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

<!-- Contato Section -->
<Section variant="beige" id="contato">
	<div class="section-header">
		<h2>Vamos Conversar?</h2>
		<p>Entre em contato e agende sua primeira sessão</p>
	</div>
	<div class="contato-grid">
		<div class="contact-info">
			<div class="contact-item">
				<MapPin size={24} />
				<div>
					<strong>Consultório</strong>
					<p>
						Rua Darcy Grijó, 50 - Sala 409<br />Jardim da Penha,
						Vitória - ES<br />CEP 29060-500
					</p>
				</div>
			</div>
			<div class="contact-item">
				<Phone size={24} />
				<div>
					<strong>WhatsApp</strong>
					<p>
						<a
							href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
							>(27) 99833-1228</a
						>
					</p>
				</div>
			</div>
			<div class="contact-item">
				<Mail size={24} />
				<div>
					<strong>Email</strong>
					<p>
						<a href="mailto:contato@psicologobernardo.com.br"
							>contato@psicologobernardo.com.br</a
						>
					</p>
				</div>
			</div>
		</div>
		<div class="mapa-container">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1871.2565968762556!2d-40.29407481177918!3d-20.279014427004878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8171b61b8e13b%3A0x5bab77942d3119e5!2sPsic%C3%B3logo%20-%20Bernardo%20Carielo%20Macedo%20de%20Oliveira%20Pinto!5e0!3m2!1spt-BR!2sbr!4v1763333002406!5m2!1spt-BR!2sbr"
				width="100%"
				height="300"
				style="border:0; border-radius: var(--radius-md);"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				title="Localização do Consultório"
			></iframe>
		</div>
	</div>
</Section>

<!-- CTA Final -->
<Section variant="gradient" id="cta">
	<div class="cta-content">
		<h2>Pronto para dar o primeiro passo?</h2>
		<p>Agende uma consulta e comece sua jornada de autoconhecimento.</p>
		<Button
			href="https://wa.me/5527998331228?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20conversar"
			variant="secondary"
			size="lg"
			class="cta-button"
		>
			<Phone size={20} />
			Falar no WhatsApp
		</Button>
	</div>
</Section>
