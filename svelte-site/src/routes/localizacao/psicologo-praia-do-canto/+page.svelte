<script lang="ts">
    import { Section, Button, Breadcrumb, SEO } from "$lib";
    import { Phone, MapPin, ExternalLink } from "lucide-svelte";

    const praiaDoCantoSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Bernardo Carielo Psicólogo",
        description:
            "Atendimento psicológico presencial e online, com acesso fácil para moradores de Praia do Canto.",
        telephone: "+55-27-99833-1228",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Darcy Grijó, 50 - Sala 409",
            addressLocality: "Jardim da Penha",
            addressRegion: "ES",
            postalCode: "29060-500",
            addressCountry: "BR",
        },
    };
</script>

<SEO
    title="Psicólogo em Praia do Canto – Vitória ES | Atendimento Próximo a Você"
    description="Atendimento psicológico para moradores de Praia do Canto e bairros próximos. Consultório em Jardim da Penha, a poucos minutos de distância. Psicoterapia pela Abordagem Centrada na Pessoa."
    canonical="https://psicologobernardo.com.br/localizacao/psicologo-praia-do-canto/"
    jsonLd={praiaDoCantoSchema}
    preloadImage="/images/consultorio/fachada-madison.webp"
/>

<!-- Breadcrumb -->
<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Psicólogo Praia do Canto" },
    ]}
/>

<section class="location-hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1>Psicólogo próximo a Praia do Canto - Bernardo Carielo</h1>
                <p class="hero-description">
                    Atendimento presencial pela Abordagem Centrada na Pessoa
                    para moradores de Praia do Canto e bairros próximos. Meu
                    consultório fica em Jardim da Penha, a poucos minutos de
                    distância, em um espaço de escuta, acolhimento e
                    autenticidade.
                </p>
                <div class="hero-buttons">
                    <Button
                        href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
                        variant="primary"
                    >
                        <Phone size={20} />
                        Agendar consulta
                    </Button>
                    <Button href="/contato" variant="outline"
                        >Ver contato</Button
                    >
                </div>
            </div>
            <div class="hero-image">
                <img
                    src="/images/consultorio/fachada-madison.webp"
                    srcset="/images/consultorio/fachada-madison-400w.webp 400w,
                            /images/consultorio/fachada-madison-800w.webp 800w,
                            /images/consultorio/fachada-madison.webp 1200w"
                    sizes="(max-width: 480px) 400px, (max-width: 768px) 800px, 450px"
                    alt="Fachada do Edifício Madison Office Tower - Consultório em Jardim da Penha, Vitória (ES)"
                    width="450"
                    height="600"
                    loading="eager"
                    fetchpriority="high"
                />
            </div>
        </div>
    </div>
</section>

<Section variant="beige">
    <div class="section-header">
        <h2>Sobre mim</h2>
    </div>
    <div class="about-grid">
        <div class="about-content">
            <p>
                Se você mora em Praia do Canto e está procurando um atendimento
                psicológico próximo da sua casa, meu consultório em Jardim da
                Penha oferece um espaço acolhedor e reservado, a apenas 5-10
                minutos de carro.
            </p>
            <p>
                Trabalho com a <strong>Abordagem Centrada na Pessoa</strong>,
                desenvolvida por Carl Rogers, que valoriza a autenticidade, a
                empatia e o respeito incondicional. Aqui, você é o protagonista
                do seu processo, e meu papel é oferecer um espaço seguro para
                que você se compreenda melhor e encontre seus próprios caminhos.
            </p>
        </div>
        <div class="about-image">
            <img
                src="/images/hero/hero-600x800.jpg"
                alt="Bernardo Carielo Psicólogo em Jardim da Penha, Vitória (ES)"
                loading="lazy"
            />
        </div>
    </div>
</Section>

<Section variant="white">
    <div class="section-header">
        <h2>Onde fica o consultório</h2>
    </div>
    <div class="location-content">
        <p>
            Meu consultório está localizado no bairro <strong
                >Jardim da Penha</strong
            >, em Vitória – ES, com excelente localização e fácil acesso para
            pessoas que vêm de
            <strong>Praia do Canto</strong> e bairros próximos. Fico em frente à
            UFES (Universidade Federal do Espírito Santo), a apenas poucos minutos
            de carro.
        </p>
        <p>
            A localização central e próxima da região litorânea faz com que
            pessoas de Praia do Canto, Mata da Praia e arredores consigam chegar
            com facilidade e rapidez.
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
                title="Localização do consultório - Arranjos Psicologia"
            ></iframe>
        </div>
        <div style="text-align: center;">
            <a
                href="https://maps.google.com/?q=Rua+Darcy+Grijó,+50,+Jardim+da+Penha,+Vitória,+ES"
                target="_blank"
                rel="noopener"
                class="map-link"
            >
                <ExternalLink size={20} />
                Abrir no Google Maps
            </a>
        </div>
    </div>
</Section>

<Section variant="beige">
    <div class="section-header">
        <h2>Bairros próximos – atendimentos para Praia do Canto</h2>
        <p style="color: var(--text-light); margin-top: 0.5rem;">
            Atendo presencialmente pessoas de Praia do Canto, Mata da Praia e
            bairros próximos à região litorânea de Vitória.
        </p>
    </div>
    <div class="bairros-grid">
        <div class="bairro-card">
            <h3><MapPin size={20} /> Bairros Litorâneos</h3>
            <ul>
                <li>• Praia do Canto</li>
                <li>• Mata da Praia</li>
                <li>• Ilha do Boi</li>
                <li>• Ilha do Frade</li>
                <li>• Enseada do Suá</li>
            </ul>
        </div>
        <div class="bairro-card">
            <h3><MapPin size={20} /> Bairros Próximos</h3>
            <ul>
                <li>• Santa Lúcia</li>
                <li>• Bento Ferreira</li>
                <li>• Jardim da Penha</li>
                <li>• Jardim Camburi</li>
            </ul>
        </div>
        <div class="bairro-card">
            <h3><MapPin size={20} /> Região Metropolitana</h3>
            <ul>
                <li>• Vila Velha</li>
                <li>• Serra</li>
                <li>• Cariacica</li>
                <li>• Toda região</li>
            </ul>
        </div>
    </div>
</Section>

<Section variant="white">
    <div class="section-header">
        <h2>Outras regiões atendidas</h2>
    </div>
    <div class="links-grid">
        <a href="/localizacao/psicologo-vitoria-es/" class="link-card">
            <h3>Vitória ES</h3>
            <p>Atendimento em todos os bairros de Vitória</p>
        </a>
        <a href="/localizacao/psicologo-jardim-da-penha/" class="link-card">
            <h3>Jardim da Penha</h3>
            <p>Consultório em frente à UFES</p>
        </a>
        <a href="/localizacao/psicologo-vila-velha/" class="link-card">
            <h3>Vila Velha</h3>
            <p>Atendimento presencial e online</p>
        </a>
        <a href="/localizacao/psicologo-serra-es/" class="link-card">
            <h3>Serra</h3>
            <p>Atendimento presencial e online</p>
        </a>
    </div>
</Section>

<Section variant="gradient">
    <div class="cta-content">
        <h2>Pronto para agendar sua consulta?</h2>
        <p>Entre em contato e vamos conversar sobre como posso ajudar</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Agendar Consulta
        </Button>
    </div>
</Section>

<style>
</style>
