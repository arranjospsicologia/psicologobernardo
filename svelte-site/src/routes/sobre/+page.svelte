<script lang="ts">
    import { Section, Button, Card, Breadcrumb, SEO } from "$lib";
    import {
        Heart,
        Clock,
        Users,
        Award,
        MapPin,
        Video,
        GraduationCap,
        Briefcase,
        ExternalLink,
    } from "lucide-svelte";

    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://psicologobernardo.com.br/sobre#person",
        name: "Bernardo Carielo Macedo de Oliveira Pinto",
        alternateName: "Bernardo Carielo",
        url: "https://psicologobernardo.com.br/sobre",
        image: "https://psicologobernardo.com.br/images/bernardo-avatar.jpg",
        jobTitle: "Psicólogo Clínico",
        worksFor: {
            "@type": "Organization",
            name: "Arranjos Psicologia",
            url: "https://arranjospsicologia.com.br",
        },
        alumniOf: [
            {
                "@type": "EducationalOrganization",
                name: "Universidade Federal do Espírito Santo",
                url: "https://ufes.br",
            },
        ],
        knowsAbout: [
            "Abordagem Centrada na Pessoa",
            "Psicoterapia Humanista",
            "Terapia de Casal",
            "Supervisão Clínica",
        ],
        address: {
            "@type": "PostalAddress",
            streetAddress:
                "Rua Darcy Grijó, 50, Sala 409, Ed. Madison Office Tower",
            addressLocality: "Vitória",
            addressRegion: "ES",
            postalCode: "29060-500",
            addressCountry: "BR",
        },
        telephone: "+5527998331228",
    };
</script>

<SEO
    title="Sobre Bernardo Carielo – Psicólogo em Vitória ES | Abordagem Centrada na Pessoa"
    description="Conheça Bernardo Carielo (CRP 16/5527), psicólogo clínico em Vitória ES, especialista em Abordagem Centrada na Pessoa. Atendimento presencial em Jardim da Penha e online para todo o Brasil."
    canonical="https://psicologobernardo.com.br/sobre/"
    type="profile"
    image="https://psicologobernardo.com.br/images/bernardo-avatar.jpg"
    jsonLd={aboutSchema}
    preloadImage="/images/sobre/bernardo-profissional.webp"
/>

<!-- Breadcrumb -->
<Breadcrumb items={[{ name: "Início", href: "/" }, { name: "Sobre" }]} />

<!-- Page Hero -->
<section class="page-hero">
    <div class="container hero-grid">
        <div class="hero-content">
            <h1>Sobre Bernardo Carielo</h1>
            <p class="hero-subtitle">
                Psicólogo clínico orientado pela <strong
                    >Abordagem Centrada na Pessoa</strong
                > — escuta genuína, empatia e respeito à experiência singular de
                cada pessoa.
            </p>
            <div class="hero-badges">
                <span class="badge">CRP 16/5527</span>
                <span class="badge">8+ anos de experiência</span>
            </div>
        </div>
        <div class="hero-image">
            <img
                src="/images/sobre/bernardo-profissional.webp"
                srcset="/images/sobre/bernardo-profissional-225w.webp 225w,
                        /images/sobre/bernardo-profissional.webp 450w"
                sizes="(max-width: 480px) 225px, 450px"
                alt="Bernardo Carielo Psicólogo clínico em Vitória ES"
                width="450"
                height="450"
                loading="eager"
                fetchpriority="high"
            />
        </div>
    </div>
</section>

<!-- Quem Sou -->
<Section variant="white" id="quem-sou">
    <div class="section-header">
        <h2>Quem sou</h2>
        <p>
            Sou <strong>Bernardo Carielo Macedo de Oliveira Pinto</strong> (CRP
            16/5527), psicólogo clínico orientado pela
            <strong>Abordagem Centrada na Pessoa (ACP)</strong> — escuta genuína,
            empatia e respeito à experiência singular de cada pessoa.
        </p>
    </div>

    <div class="cards-grid cards-grid--3">
        <Card icon={MapPin} title="Presencial">
            <p>Jardim da Penha<br />Vitória-ES</p>
        </Card>
        <Card icon={Video} title="Online">
            <p>Todo o Brasil e<br />brasileiros no exterior</p>
        </Card>
        <Card icon={GraduationCap} title="Formação Continuada">
            <p>Aprofundamento constante<br />na prática e presença</p>
        </Card>
    </div>
</Section>

<!-- Minha Maneira de Trabalhar -->
<Section variant="beige" id="abordagem">
    <div class="section-header">
        <h2>Minha maneira de trabalhar (ACP)</h2>
    </div>

    <div class="approach-grid">
        <div class="approach-card">
            <h4>Relação em primeiro lugar</h4>
            <p>Vínculo, presença e autenticidade como bases do cuidado.</p>
        </div>
        <div class="approach-card">
            <h4>Não-diretividade responsável</h4>
            <p>
                Não prescrevo "quem você deve ser"; apoio você a reconhecer
                necessidades, valores e limites.
            </p>
        </div>
        <div class="approach-card">
            <h4>Respeito ao ritmo</h4>
            <p>
                Acolho o que está vivo agora — inclusive a vontade de não sentir
                certas coisas.
            </p>
        </div>
        <div class="approach-card">
            <h4>Atenção ao corpo e à experiência</h4>
            <p>Emoções, sensações e contexto importam.</p>
        </div>
        <div class="approach-card">
            <h4>Autonomia com apoio</h4>
            <p>Decisões práticas coerentes com o que faz sentido para você.</p>
        </div>
        <div class="approach-card">
            <h4>Linguagem simples</h4>
            <p>Sem jargões técnicos desnecessários.</p>
        </div>
    </div>
</Section>

<!-- Para Quem -->
<Section variant="white" id="para-quem">
    <div class="section-header">
        <h2>Para quem</h2>
        <p>
            Acompanho pessoas que buscam acolhimento, reflexão e desenvolvimento
            em diferentes fases da vida e contextos — individuais, relacionais,
            familiares, profissionais ou existenciais.
        </p>
    </div>

    <div class="cards-grid cards-grid--3">
        <Card icon={Users} title="Indivíduos">
            <p>Atendimento individual para adultos</p>
        </Card>
        <Card icon={Heart} title="Casais">
            <p>Terapia de casal e relacionamentos</p>
        </Card>
        <Card icon={Users} title="Famílias">
            <p>Acompanhamento familiar</p>
        </Card>
    </div>

    <div class="note-box">
        <p>
            <strong
                >Se o que você precisa não estiver exemplificado abaixo,
                seguimos conversando:</strong
            >
            há espaço para outros temas e histórias.
        </p>
    </div>
</Section>

<!-- Experiência Profissional -->
<Section variant="beige" id="experiencia">
    <div class="section-header">
        <h2>Experiência profissional</h2>
    </div>

    <div class="timeline">
        <div class="timeline-item timeline-item--current">
            <span class="timeline-badge">2018 – atual</span>
            <h3>Psicoterapeuta e Responsável Técnico</h3>
            <p class="timeline-org">Arranjos Psicologia</p>
            <p>
                Atendimentos individuais, casais e famílias; grupos
                terapêuticos; supervisão clínica.
            </p>
            <ul>
                <li>
                    Roda de Conversa Terapêutica Entre Homens (coordenação —
                    2022 – atual)
                </li>
                <li>
                    Roda de Conversa "Desafios da Profissão" (Psi/ACP)
                    (coordenação — 2025 – atual)
                </li>
            </ul>
        </div>

        <div class="timeline-item">
            <span class="timeline-badge timeline-badge--past">2016 – 2017</span>
            <h3>Coordenação de grupo e atendimento clínico</h3>
            <p class="timeline-org">
                Serviço de Atenção Psicológica ao Graduando (UFES)
            </p>
        </div>

        <div class="timeline-item">
            <span class="timeline-badge timeline-badge--past">2016 – 2017</span>
            <h3>Estágios específicos</h3>
            <p class="timeline-org">Núcleo de Psicologia Aplicada (UFES)</p>
            <p>Clínica Humanista e Clínica Psicanalítica.</p>
        </div>
    </div>
</Section>

<!-- Formação -->
<Section variant="white" id="formacao">
    <div class="section-header">
        <h2>Formação</h2>
    </div>

    <div class="timeline">
        <div class="timeline-item timeline-item--current">
            <span class="timeline-badge">2023 – atual</span>
            <h3>Formação Continuada em Clínica na ACP</h3>
            <p class="timeline-org">EncontroACP</p>
        </div>

        <div class="timeline-item">
            <span class="timeline-badge timeline-badge--past">2022</span>
            <h3>Formação em Prática da Psicologia Clínica na ACP</h3>
            <p class="timeline-org">EncontroACP</p>
        </div>

        <div class="timeline-item timeline-item--highlight">
            <span class="timeline-badge">2017</span>
            <h3>Bacharelado em Psicologia</h3>
            <p class="timeline-org">
                Universidade Federal do Espírito Santo (UFES)
            </p>
        </div>
    </div>
</Section>

<!-- CTA -->
<Section variant="gradient" id="cta">
    <div class="cta-content">
        <h2>Vamos conversar?</h2>
        <p>
            Se você identificou alguma necessidade ou simplesmente quer saber
            mais sobre como posso te ajudar, entre em contato.
        </p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
            variant="secondary"
            size="lg"
        >
            Agendar Consulta
        </Button>
    </div>
</Section>
