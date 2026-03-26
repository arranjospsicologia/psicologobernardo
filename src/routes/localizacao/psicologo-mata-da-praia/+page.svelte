<script lang="ts">
    import "$lib/styles/location.css";
    import { Section, Button, Breadcrumb, SEO, Card } from "$lib";
    import {
        Phone,
        MapPin,
        ExternalLink,
        Heart,
        Monitor,
        Users,
        ChevronDown,
    } from "lucide-svelte";
    import { locations } from "$lib/data/locations";
    import { buildLocationJsonLd } from "$lib/utils/locationSchema";
    import { buildWhatsAppUrl, siteProfile } from "$lib/data/siteProfile";

    const loc = locations["mata-da-praia"];

    const jsonLd = buildLocationJsonLd({
        canonical: loc.canonical,
        pageName: loc.h1,
        pageDescription: loc.description,
        faqItems: loc.faqItems,
    });
</script>

<SEO
    title={loc.title}
    description={loc.description}
    canonical={loc.canonical}
    {jsonLd}
    preloadImage="/images/hero/hero-600x800.webp"
/>

<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Localização", href: "/localizacao/" },
        { name: "Psicólogo Mata da Praia" },
    ]}
/>

<!-- Hero -->
<section class="location-hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1>{loc.h1}</h1>
                <p class="hero-description">
                    Atendimento presencial pela Abordagem Centrada na Pessoa
                    para moradores de Mata da Praia e bairros vizinhos. Meu
                    consultório fica em Jardim da Penha, a um trajeto curto, em
                    um espaço de escuta e acolhimento.
                </p>
                <div class="hero-buttons">
                    <Button
                        href={buildWhatsAppUrl(loc.whatsappText)}
                        variant="primary"
                    >
                        <Phone size={20} /> Agendar consulta
                    </Button>
                    <Button href="/contato" variant="outline"
                        >Ver contato</Button
                    >
                </div>
            </div>
            <div class="hero-image">
                <img
                    src="/images/hero/hero-600x800.webp"
                    srcset="/images/hero/hero-600x800-300w.webp 300w, /images/hero/hero-600x800-450w.webp 450w, /images/hero/hero-600x800.webp 600w"
                    sizes="(max-width: 480px) 300px, (max-width: 768px) 450px, 450px"
                    alt={loc.heroAlt}
                    width="450"
                    height="600"
                    loading="eager"
                    fetchpriority="high"
                />
            </div>
        </div>
    </div>
</section>

<!-- Editorial local -->
<Section variant="white">
    <article class="editorial-local">
        <h2>{loc.editorialTitle}</h2>
        <p class="editorial-subtitle">{loc.editorialSubtitle}</p>

        <img
            src="/images/localizacao/psicologo-mata-da-praia.webp"
            alt="Ilustração abstrata para Mata da Praia"
            class="editorial-image"
            width="800"
            height="1066"
            loading="lazy"
        />

        <p>
            A Mata da Praia é um dos bairros com melhor qualidade de vida de
            Vitória. Ruas tranquilas, orla próxima, condomínios bem cuidados, e
            uma vizinhança que preza pelo bem-estar. Quem escolheu morar aqui
            geralmente valoriza equilíbrio — e cuidar da saúde mental é parte
            natural desse cuidado.
        </p>
        <p>
            Terapia pode ser mais um recurso dentro de uma vida que já funciona
            bem. Um espaço para pensar sobre relacionamentos, decisões de
            carreira, ou simplesmente para ter uma conversa honesta consigo
            mesmo. Não é preciso esperar por um motivo específico — às vezes o
            melhor momento para começar é quando você tem espaço para isso.
        </p>
        <p>
            O consultório fica em Jardim da Penha, bairro vizinho, numa região
            que muitos moradores de Mata da Praia já percorrem. É um lugar com
            um pouco de distância do círculo do dia a dia — o que pode ser
            confortável quando se trata de terapia.
        </p>
        <p>
            Se você está com vontade de experimentar, conheça mais sobre a
            <a href="/servicos/psicoterapia-individual/"
                >psicoterapia individual</a
            >
            e o que esperar do processo.
        </p>
    </article>
</Section>

<!-- Micro-seção prática -->
<Section variant="beige">
    <div class="practical-section">
        <h2>{loc.practicalSection.title}</h2>
        {@html loc.practicalSection.bodyHtml}
    </div>
</Section>

<!-- Mapa -->
<Section variant="white">
    <div class="section-header"><h2>Onde fica o consultório</h2></div>
    <div class="location-content">
        <p>
            Meu consultório está localizado no bairro <strong
                >Jardim da Penha</strong
            >, em Vitória – ES, em frente à UFES, próximo à Av. Fernando
            Ferrari.
        </p>
        <div class="address-card">
            <h3>
                <MapPin
                    size={20}
                    style="display: inline-block; vertical-align: middle;"
                /> Endereço completo
            </h3>
            <p>
                <strong
                    >Rua Darcy Grijó, 50 - Sala 409, Jardim da Penha, Vitória -
                    ES, CEP: 29060-500</strong
                >
            </p>
        </div>
        <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1871.2565968762556!2d-40.29407481177918!3d-20.279014427004878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8171b61b8e13b%3A0x5bab77942d3119e5!2sPsic%C3%B3logo%20-%20Bernardo%20Carielo%20Macedo%20de%20Oliveira%20Pinto!5e0!3m2!1spt-BR!2sbr!4v1763333002406!5m2!1spt-BR!2sbr"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Bernardo Carielo"
            ></iframe>
        </div>
        <div style="text-align: center; margin-top: 1rem;">
            <a
                href={siteProfile.externalLinks.googleMapsPlace}
                target="_blank"
                rel="noopener"
                class="map-link"
                ><ExternalLink size={20} /> Abrir no Google Maps</a
            >
        </div>
    </div>
</Section>

<!-- Serviços -->
<Section variant="beige">
    <div class="section-header"><h2>Serviços disponíveis</h2></div>
    <div class="cards-grid" style="margin-top: 2rem;">
        <Card
            icon={Heart}
            title="Psicoterapia Individual"
            href="/servicos/psicoterapia-individual/"
            variant="default"
            ><p>
                Acolhimento para ansiedade, depressão e processos de
                autoconhecimento.
            </p></Card
        >
        <Card
            icon={Users}
            title="Terapia para Casais"
            href="/servicos/terapia-de-casal/"
            variant="default"
            ><p>Espaço de mediação e diálogo para relacionamentos.</p></Card
        >
        <Card
            icon={Monitor}
            title="Terapia Online"
            href="/servicos/terapia-online/"
            variant="default"
            ><p>
                Atendimento por videochamada com a mesma presença terapêutica.
            </p></Card
        >
    </div>
</Section>

<!-- Sobre mim + CRP -->
<Section variant="white">
    <div class="about-grid">
        <img
            src="/images/sobre/bernardo-profissional.webp"
            alt="Bernardo Carielo Psicólogo próximo a Mata da Praia, Vitória (ES)"
            width="250"
            height="333"
            loading="lazy"
        />
        <div>
            <h3>Bernardo Carielo</h3>
            <p class="crp-badge">CRP-16/5527 · Psicólogo Humanista</p>
            <p>{loc.aboutText}</p>
            <a href="/sobre/">Conheça minha abordagem e formação →</a>
        </div>
    </div>
</Section>

<!-- Bairros -->
<Section variant="beige">
    <div class="section-header">
        <h2>Mata da Praia e regiões próximas atendidas</h2>
    </div>
    <div class="bairros-grid">
        {#each loc.neighborhoodGroups as group}
            <div class="bairro-card">
                <h3><MapPin size={20} /> {group.label}</h3>
                <ul>
                    {#each group.items as item}<li>• {item}</li>{/each}
                </ul>
            </div>
        {/each}
    </div>
</Section>

<!-- Próximos passos -->
<Section variant="white">
    <div class="contact-steps">
        <h2>Como funciona o primeiro contato</h2>
        <ol>
            <li><strong>Envie uma mensagem</strong> pelo WhatsApp</li>
            <li>
                <strong>Eu respondo</strong> geralmente no mesmo dia útil para combinarmos
                um horário
            </li>
            <li>
                <strong>Primeira conversa</strong> sem compromisso de continuidade
                — é um momento para nos conhecermos
            </li>
        </ol>
        <p>
            Não há pressa. O primeiro passo mais importante é o que você se
            sentir pronto para dar.
        </p>
    </div>
</Section>

<!-- FAQ -->
<Section variant="beige" id="faq">
    <div class="section-header"><h2>{loc.faqSectionTitle}</h2></div>
    <div class="loc-faq-container">
        {#each loc.faqItems as item}
            <details class="loc-faq-item">
                <summary
                    ><span>{item.question}</span><ChevronDown
                        size={20}
                        class="loc-faq-chevron"
                    /></summary
                >
                <div class="loc-faq-answer"><p>{item.answer}</p></div>
            </details>
        {/each}
    </div>
</Section>

<!-- Artigos -->
<Section variant="white">
    <div class="section-header"><h2>{loc.articlesSectionTitle}</h2></div>
    <div class="loc-articles-grid">
        {#each loc.blogArticles as article}
            <a href={`/${article.categorySlug}/${article.slug}/`} class="loc-article-card"
                ><h3>{article.title}</h3>
                <p>{article.reason}</p>
                <span class="read-more">Ler artigo →</span></a
            >
        {/each}
    </div>
</Section>

<!-- Outras regiões -->
<Section variant="beige">
    <div class="section-header"><h2>Outras regiões atendidas</h2></div>
    <div class="links-grid">
        {#each loc.crossLinks as link}<a href={link.href} class="link-card"
                ><h3>{link.label}</h3>
                <p>{link.description}</p></a
            >{/each}
    </div>
</Section>

<!-- CTA final -->
<Section variant="gradient">
    <div class="cta-content">
        <h2>{loc.ctaH2}</h2>
        <p>{loc.ctaSubtitle}</p>
        <Button
            href={buildWhatsAppUrl(loc.whatsappText)}
            variant="secondary"
            size="lg"><Phone size={20} /> Agendar Consulta</Button
        >
        <p class="response-time">Respondo geralmente no mesmo dia útil</p>
    </div>
</Section>
