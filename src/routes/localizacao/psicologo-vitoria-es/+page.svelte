<script lang="ts">
    import "$lib/styles/location.css";
    import { Section, Button, Breadcrumb, SEO, Card } from "$lib";
    import {
        Phone,
        MapPin,
        Home,
        Monitor,
        ExternalLink,
        Route,
        Car,
        Bus,
        ChevronDown,
    } from "lucide-svelte";
    import { locations } from "$lib/data/locations";
    import { buildLocationJsonLd } from "$lib/utils/locationSchema";

    const loc = locations["vitoria-es"];

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
        { name: "Psicólogo em Vitória ES" },
    ]}
/>

<!-- Hero -->
<section class="location-hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1>{loc.h1}</h1>
                <p class="hero-description">
                    Atendimento psicológico presencial e online em Vitória ES.
                    Psicoterapia pela Abordagem Centrada na Pessoa para
                    moradores de toda a capital e região metropolitana.
                </p>
                <div class="hero-buttons">
                    <Button
                        href={`https://wa.me/5527998331228?text=${encodeURIComponent(loc.whatsappText)}`}
                        variant="primary"
                        ><Phone size={20} /> Agendar consulta</Button
                    >
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
            src="/images/localizacao/psicologo-vitoria-es.webp"
            alt="Ilustração abstrata para Vitória ES"
            class="editorial-image"
            width="800"
            height="1066"
            loading="lazy"
        />

        <p>
            Vitória é uma cidade compacta e cheia de vida. Quem vive aqui
            conhece as vantagens das distâncias curtas: a praia fica perto, o
            trabalho fica perto, e o cuidado com a saúde mental também pode
            ficar. Ter um consultório acessível na capital é uma facilidade que
            muitos moradores aproveitam.
        </p>
        <p>
            O consultório em Jardim da Penha fica numa das regiões mais centrais
            de Vitória, acessível para quem vem de diferentes bairros — de Bento
            Ferreira a Jardim Camburi, de Santa Lúcia a Goiabeiras. A
            localização em frente à UFES torna a referência fácil.
        </p>
        <p>
            Terapia pode ser um espaço para ampliar o autoconhecimento, refletir
            sobre escolhas, ou simplesmente ter uma hora semanal dedicada a
            você. Seja qual for o seu momento, o processo começa com uma
            conversa.
        </p>
        <p>
            Conheça mais sobre como funciona a
            <a href="/servicos/psicoterapia-individual/"
                >psicoterapia individual</a
            >
            e o que esperar dos primeiros encontros.
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

<!-- Bairros e acesso -->
<Section variant="white">
    <div class="section-header">
        <h2>Atendimento em todos os bairros de Vitória</h2>
        <p style="color: var(--text-light); margin-top: 0.5rem;">
            Consultório em localização central, de fácil acesso para moradores
            de toda Vitória
        </p>
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

<!-- Localização / Mapa -->
<Section variant="beige">
    <div class="section-header">
        <h2>Localização estratégica e fácil acesso</h2>
    </div>
    <div class="location-content">
        <p>
            O consultório está em <strong>Jardim da Penha</strong>, em frente à
            UFES, uma das áreas mais bem conectadas de Vitória.
        </p>
        <div class="cards-grid" style="margin-top: 2rem;">
            <Card icon={Route} title="Principais Vias" variant="default"
                ><p>
                    Próximo à <strong>Reta da Penha</strong> e Av. Fernando Ferrari.
                </p></Card
            >
            <Card icon={Car} title="Ponte da Passagem" variant="default"
                ><p>
                    Acesso para quem vem da Zona Norte ou de outros municípios.
                </p></Card
            >
            <Card icon={Bus} title="Transporte Público" variant="default"
                ><p>
                    Diversos pontos de ônibus nas proximidades (UFES e Rua da
                    Lama).
                </p></Card
            >
        </div>
        <div class="map-container" style="margin-top: 2rem;">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1871.2565968762556!2d-40.29407481177918!3d-20.279014427004878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8171b61b8e13b%3A0x5bab77942d3119e5!2sPsic%C3%B3logo%20-%20Bernardo%20Carielo%20Macedo%20de%20Oliveira%20Pinto!5e0!3m2!1spt-BR!2sbr!4v1763333002406!5m2!1spt-BR!2sbr"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Localização do consultório - Arranjos Psicologia"
            ></iframe>
        </div>
        <div style="text-align: center; margin-top: 1rem;">
            <a
                href="https://maps.google.com/?q=Rua+Darcy+Grijó,+50,+Jardim+da+Penha,+Vitória,+ES"
                target="_blank"
                rel="noopener"
                class="map-link"
                ><ExternalLink size={20} /> Abrir no Google Maps</a
            >
        </div>
    </div>
</Section>

<!-- Modalidades -->
<Section variant="white">
    <div class="section-header"><h2>Atendimento presencial e online</h2></div>
    <div class="modalities-grid">
        <div class="modality-card">
            <div class="modality-icon"><Home size={28} /></div>
            <h3>Presencial em Vitória</h3>
            <p>
                Consultório em Jardim da Penha, um espaço acolhedor e reservado.
                Localização central em Vitória, de fácil acesso para moradores
                de todos os bairros.
            </p>
        </div>
        <div class="modality-card">
            <div class="modality-icon"><Monitor size={28} /></div>
            <h3>Online</h3>
            <p>
                Atendimento por videochamada com a mesma qualidade e presença
                terapêutica. Ideal para quem mora longe, viaja com frequência ou
                prefere o conforto de casa.
            </p>
        </div>
    </div>
</Section>

<!-- Sobre mim + CRP -->
<Section variant="beige">
    <div class="about-grid">
        <img
            src="/images/sobre/bernardo-profissional.webp"
            alt="Bernardo Carielo Psicólogo em Vitória ES"
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
            <a href={`/blog/${article.slug}/`} class="loc-article-card"
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
            href={`https://wa.me/5527998331228?text=${encodeURIComponent(loc.whatsappText)}`}
            variant="secondary"
            size="lg"><Phone size={20} /> Agendar Consulta</Button
        >
        <p class="response-time">Respondo geralmente no mesmo dia útil</p>
    </div>
</Section>
