<script lang="ts">
    import { Section, Button, Card, Breadcrumb, SEO } from "$lib";
    import {
        Heart,
        Clock,
        Users,
        User,
        Award,
        MapPin,
        Video,
        GraduationCap,
        Briefcase,
        ExternalLink,
        FileText,
        MessageCircle,
        Languages,
        ShieldCheck,
        Globe,
        Brain,
        Handshake,
        BadgeCheck,
        CheckCircle2,
    } from "lucide-svelte";

    const aboutSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://psicologobernardo.com.br/sobre/#webpage",
                url: "https://psicologobernardo.com.br/sobre/",
                name: "Sobre Bernardo Carielo – Psicólogo em Vitória ES | Abordagem Centrada na Pessoa",
                isPartOf: {
                    "@id": "https://psicologobernardo.com.br/#website",
                },
                mainEntity: {
                    "@id": "https://psicologobernardo.com.br/sobre/#person",
                },
            },
            {
                "@type": "Person",
                "@id": "https://psicologobernardo.com.br/sobre/#person",
                name: "Bernardo Carielo Macedo de Oliveira Pinto",
                alternateName: "Bernardo Carielo",
                identifier: "CRP 16/5527",
                url: "https://psicologobernardo.com.br/sobre/",
                image: "https://psicologobernardo.com.br/images/bernardo-avatar.jpg",
                jobTitle: "Psicólogo Clínico",
                worksFor: [
                    {
                        "@id": "https://psicologobernardo.com.br/#organization",
                    },
                    {
                        "@type": "Organization",
                        name: "Arranjos Psicologia",
                        url: "https://arranjospsicologia.com.br",
                    },
                ],
                alumniOf: [
                    {
                        "@type": "EducationalOrganization",
                        name: "Universidade Federal do Espírito Santo",
                        alternateName: "UFES",
                        url: "https://ufes.br",
                    },
                    {
                        "@type": "EducationalOrganization",
                        name: "EncontroACP",
                    },
                ],
                knowsAbout: [
                    "Abordagem Centrada na Pessoa",
                    "Psicoterapia Humanista",
                    "Terapia de Casal",
                    "Supervisão Clínica",
                    "Saúde Mental",
                    "Ansiedade",
                    "Depressão",
                ],
                address: {
                    "@type": "PostalAddress",
                    streetAddress:
                        "Rua Darcy Grijó, 50, Sala 409, Ed. Madison Office Tower",
                    addressLocality: "Vitória",
                    addressRegion: "ES",
                    postalCode: "29060-630",
                    addressCountry: "BR",
                },
                telephone: "+5527998331228",
                sameAs: [
                    "https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria",
                    "https://www.instagram.com/bcarielo",
                    "https://www.facebook.com/bcarielo",
                ],
            },
        ],
    };

    const approachItems = [
        {
            title: "Relação em primeiro lugar",
            desc: "Vínculo, presença e autenticidade como bases do cuidado.",
        },
        {
            title: "Não-diretividade responsável",
            desc: 'Não prescrevo "quem você deve ser"; apoio você a reconhecer necessidades, valores e limites.',
        },
        {
            title: "Respeito ao ritmo",
            desc: "Acolho o que está vivo agora — inclusive a vontade de não sentir certas coisas.",
        },
        {
            title: "Atenção ao corpo e à experiência",
            desc: "Emoções, sensações e contexto importam.",
        },
        {
            title: "Autonomia com apoio",
            desc: "Decisões práticas coerentes com o que faz sentido para você.",
        },
        {
            title: "Linguagem simples",
            desc: "Sem jargões técnicos desnecessários.",
        },
        {
            title: "Ética e realismo",
            desc: "Sem promessas fáceis; confiança no seu potencial de mudança.",
        },
    ];
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

<!-- Page Hero - Upgraded with gradient and shapes -->
<section class="sobre-hero gradient-hero">
    <div class="sobre-hero-shapes">
        <div class="sobre-shape sobre-shape--1"></div>
        <div class="sobre-shape sobre-shape--2"></div>
        <div class="sobre-shape sobre-shape--3"></div>
    </div>
    <div class="container hero-grid">
        <div class="hero-content">
            <span class="sobre-eyebrow">Psicólogo em Vitória - ES</span>
            <h1>Sobre Bernardo Carielo</h1>
            <p class="hero-subtitle">
                Psicólogo clínico orientado pela <strong
                    >Abordagem Centrada na Pessoa</strong
                > — escuta genuína, empatia e respeito à experiência singular de
                cada pessoa.
            </p>
            <div class="hero-badges">
                <span class="badge badge--primary">CRP 16/5527</span>
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

<!-- Minha Maneira de Trabalhar - Consolidated list format -->
<Section variant="dark" id="abordagem">
    <div class="section-header">
        <h2>Minha maneira de trabalhar (ACP)</h2>
    </div>

    <div class="approach-container">
        <ul class="approach-list">
            {#each approachItems as item}
                <li class="approach-item">
                    <CheckCircle2 size={20} />
                    <div>
                        <strong>{item.title}</strong>
                        <span>{item.desc}</span>
                    </div>
                </li>
            {/each}
        </ul>
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
        <Card icon={User} title="Indivíduos">
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

<!-- O Que Posso Acompanhar -->
<Section variant="beige" id="o-que-acompanho">
    <div class="section-header">
        <h2>O que posso acompanhar</h2>
        <p>
            Abaixo, um panorama abrangente inspirado nos meus serviços e frentes
            de atuação. Não é lista limitadora; serve como mapa para o primeiro
            passo.
        </p>
    </div>

    <div class="cards-grid cards-grid--3">
        <Card icon={Brain} title="Saúde mental e emocional">
            <p>
                Ansiedade (inclui pânico e ansiedade social), depressão e
                tristeza prolongada, estresse/burnout, insônia, angústia
                existencial, processos de luto (inclusive por pet),
                sintomas/transtornos psicossomáticos, insegurança,
                procrastinação, crenças limitantes, TDA/TDAH, entre outros.
            </p>
        </Card>
        <Card icon={Heart} title="Relações, casais e família">
            <p>
                Dificuldades de relacionamento, comunicação não violenta,
                habilidades sociais, terapia de casal, terapia familiar,
                conflitos e acordos, decisões compartilhadas e reconstrução de
                vínculos.
            </p>
        </Card>
        <Card icon={Users} title="Sexualidade e gênero">
            <p>
                Terapia sexual, vaginismo, anorgasmia, impotência, questões de
                identidade/expressão de gênero e incongruência de gênero,
                diálogo sobre desejo, limites e consentimento.
            </p>
        </Card>
        <Card icon={Briefcase} title="Vida, trabalho e desempenho">
            <p>
                Transição de carreira, análise de escolhas profissionais,
                organização/planejamento, ansiedade em provas de concurso,
                insatisfação no trabalho, autenticidade profissional e
                redefinição de critérios de "resultado".
            </p>
        </Card>
        <Card icon={FileText} title="Avaliações e documentos">
            <p>
                Avaliação psicológica e laudo para cirurgia bariátrica
                (acompanhamento pré e pós), laudo para vasectomia e outras
                demandas documentais conforme critérios técnicos.
            </p>
        </Card>
        <Card icon={GraduationCap} title="Supervisão profissional">
            <p>
                Supervisão clínica (individual e em grupo) para psicólogos em
                início de carreira ou em desenvolvimento, discussão de casos e
                cuidado com a prática.
            </p>
        </Card>
    </div>

    <div class="note-box">
        <p>
            <strong>Importante:</strong> conteúdos do site/blog são informativos
            e não substituem atendimento. Em situações de risco, procure serviços
            de urgência e sua rede local de cuidado.
        </p>
    </div>
</Section>

<!-- Experiência Profissional -->
<Section variant="white" id="experiencia">
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

        <div class="timeline-item">
            <span class="timeline-badge timeline-badge--past">2016</span>
            <h3>Projetos de extensão</h3>
            <p class="timeline-org">UFES</p>
            <p>
                Treinamento de Habilidades Psicológicas em Atletas de Alto
                Desempenho; Promoção de Prática Esportiva em Estudantes.
            </p>
        </div>

        <div class="timeline-item">
            <span class="timeline-badge timeline-badge--past">2013</span>
            <h3>Oficina — Sexualidade e Prevenção às DST-Aids</h3>
            <p class="timeline-org">UFES</p>
        </div>
    </div>
</Section>

<!-- Formação -->
<Section variant="beige" id="formacao">
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

        <div class="timeline-item">
            <span class="timeline-badge timeline-badge--past">2021</span>
            <h3>Formação na ACP</h3>
            <p class="timeline-org">EncontroACP</p>
        </div>

        <div class="timeline-item">
            <span class="timeline-badge timeline-badge--past"
                >2017 – 2018 (descontinuado)</span
            >
            <h3>Formação em Psicologia Clínica na ACP</h3>
            <p class="timeline-org">Areté</p>
        </div>

        <div class="timeline-item">
            <span class="timeline-badge timeline-badge--past">2017</span>
            <h3>Curso: Introdução em Ludoterapia</h3>
            <p class="timeline-org">Areté</p>
        </div>

        <div class="timeline-item timeline-item--highlight">
            <span class="timeline-badge">2017</span>
            <h3>Bacharelado em Psicologia</h3>
            <p class="timeline-org">
                Universidade Federal do Espírito Santo (UFES)
            </p>
        </div>

        <div class="timeline-item">
            <span class="timeline-badge timeline-badge--past">2015</span>
            <h3>Formação em Terapia por Contingência de Reforçamento</h3>
            <p class="timeline-org">Instituto Interage</p>
        </div>
    </div>
</Section>

<!-- Como Funcionam os Atendimentos - Compact layout -->
<Section variant="white" id="como-funcionam">
    <div class="section-header">
        <h2>Como funcionam os atendimentos</h2>
        <p>
            Informações práticas sobre formatos de atendimento, público-alvo e
            detalhes operacionais.
        </p>
    </div>

    <div class="ambiente-image">
        <img
            src="/images/sobre/ambiente-trabalho.webp"
            alt="Consultório de psicologia em Jardim da Penha, Vitória ES - Ambiente acolhedor para atendimentos presenciais e online"
            width="800"
            height="533"
            loading="lazy"
        />
    </div>

    <div class="info-list-container">
        <ul class="info-list">
            <li class="info-list-item">
                <MapPin size={22} />
                <div>
                    <strong>Formatos</strong>
                    <span
                        >Presencial (Jardim da Penha, Vitória-ES) e online
                        (Brasil e exterior).</span
                    >
                </div>
            </li>
            <li class="info-list-item">
                <Users size={22} />
                <div>
                    <strong>Públicos atendidos</strong>
                    <span>Adultos, idosos, casais e famílias.</span>
                </div>
            </li>
            <li class="info-list-item">
                <FileText size={22} />
                <div>
                    <strong>Documentos e reembolso</strong>
                    <span
                        >Emito nota fiscal; confirme com seu plano o que é
                        necessário (geralmente encaminhamento médico).</span
                    >
                </div>
            </li>
            <li class="info-list-item">
                <MessageCircle size={22} />
                <div>
                    <strong>Contato</strong>
                    <span
                        >Preferencialmente WhatsApp. Por sigilo e organização,
                        não retorno ligações de números desconhecidos.</span
                    >
                </div>
            </li>
            <li class="info-list-item">
                <Languages size={22} />
                <div>
                    <strong>Idiomas</strong>
                    <span>Português e Inglês.</span>
                </div>
            </li>
        </ul>
    </div>
</Section>

<!-- Compromissos Éticos - Consolidated container -->
<Section variant="beige" id="compromissos-eticos">
    <div class="section-header">
        <h2>Compromissos éticos</h2>
    </div>

    <div class="commitment-container">
        <ul class="commitment-list">
            <li>
                <ShieldCheck size={22} />
                <span
                    >Sigilo, respeito à autonomia e consentimento informado.</span
                >
            </li>
            <li>
                <Handshake size={22} />
                <span
                    >Comunicação clara sobre limites do trabalho e
                    encaminhamentos quando necessário.</span
                >
            </li>
            <li>
                <Globe size={22} />
                <span
                    >Integração com outras redes/profissionais de saúde quando
                    fizer sentido.</span
                >
            </li>
            <li>
                <BadgeCheck size={22} />
                <span
                    >Conteúdos do site com finalidade educativa/informativa.</span
                >
            </li>
        </ul>
    </div>
</Section>

<!-- Redes e Projetos -->
<Section variant="white" id="redes-projetos">
    <div class="section-header">
        <h2>Redes e projetos</h2>
    </div>

    <div class="redes-grid">
        <a
            href="https://arranjospsicologia.com.br"
            target="_blank"
            rel="noopener"
            class="rede-card"
        >
            <h3>Arranjos Psicologia</h3>
            <p>
                Clínica, grupos (Entre Homens; Desafios da Profissão) e
                supervisão.
            </p>
            <span class="rede-link">
                Visitar site
                <ExternalLink size={16} />
            </span>
        </a>
        <a
            href="https://encontroacp.com.br"
            target="_blank"
            rel="noopener"
            class="rede-card"
        >
            <h3>EncontroACP</h3>
            <p>Parceria e facilitação de grupos.</p>
            <span class="rede-link">
                Visitar site
                <ExternalLink size={16} />
            </span>
        </a>
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

<style>
    /* ================================
       SOBRE PAGE HERO - Upgraded
       ================================ */
    .sobre-hero {
        padding: calc(var(--header-height) + 3rem) 0 4rem;
        position: relative;
        overflow: hidden;
    }

    .sobre-hero-shapes {
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
    }

    .sobre-shape {
        position: absolute;
        opacity: 0.12;
    }

    .sobre-shape--1 {
        top: 15%;
        right: 10%;
        width: 50px;
        height: 50px;
        background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--primary-light)
        );
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }

    .sobre-shape--2 {
        bottom: 25%;
        left: 5%;
        width: 35px;
        height: 35px;
        background: linear-gradient(
            135deg,
            var(--primary-light),
            rgba(8, 186, 156, 0.4)
        );
        border-radius: 50%;
    }

    .sobre-shape--3 {
        top: 50%;
        right: 25%;
        width: 25px;
        height: 25px;
        border: 3px solid var(--primary-light);
        border-radius: 50%;
        background: transparent;
    }

    .sobre-eyebrow {
        display: inline-block;
        background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--primary-dark)
        );
        color: var(--white);
        padding: 0.625rem 1.25rem;
        border-radius: var(--radius-full);
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 1rem;
        box-shadow: 0 4px 15px rgba(8, 186, 156, 0.3);
    }

    .sobre-hero h1 {
        font-size: var(--text-4xl);
        margin-bottom: 1rem;
        position: relative;
        padding-left: 1.25rem;
    }

    .sobre-hero h1::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background: linear-gradient(
            180deg,
            var(--primary-color),
            var(--primary-light)
        );
        border-radius: 2px;
    }

    .badge--primary {
        background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--primary-dark)
        );
        color: var(--white);
        box-shadow: 0 2px 8px rgba(8, 186, 156, 0.25);
    }

    /* ================================
       APPROACH - Consolidated List
       ================================ */
    .approach-container {
        max-width: 900px;
        margin: 0 auto;
    }

    .approach-list {
        display: grid;
        gap: 1rem;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .approach-item {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(4px);
        padding: 1.25rem 1.5rem;
        border-radius: var(--radius-md);
        border-left: 4px solid var(--primary-light);
    }

    .approach-item :global(svg) {
        color: var(--primary-light);
        flex-shrink: 0;
        margin-top: 0.125rem;
    }

    .approach-item div {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .approach-item strong {
        color: var(--white);
        font-size: 1.0625rem;
    }

    .approach-item span {
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.6;
    }

    /* ================================
       INFO LIST - Compact Layout
       ================================ */
    .info-list-container {
        max-width: 800px;
        margin: 0 auto;
    }

    .info-list {
        display: grid;
        gap: 0.75rem;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .info-list-item {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        padding: 1rem 1.25rem;
        background: var(--secondary-color);
        border-radius: var(--radius-sm);
    }

    .info-list-item :global(svg) {
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 0.125rem;
    }

    .info-list-item div {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
    }

    .info-list-item strong {
        color: var(--text-color);
        font-size: 0.9375rem;
    }

    .info-list-item span {
        color: var(--text-light);
        font-size: 0.9375rem;
        line-height: 1.5;
    }

    /* ================================
       COMMITMENT - Consolidated
       ================================ */
    .commitment-container {
        max-width: 800px;
        margin: 0 auto;
        background: var(--white);
        padding: 2rem 2.5rem;
        border-radius: var(--radius-lg);
        border-left: 5px solid var(--primary-color);
        box-shadow: var(--shadow-sm);
    }

    .commitment-list {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .commitment-list li {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
    }

    .commitment-list li :global(svg) {
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 0.125rem;
    }

    .commitment-list li span {
        color: var(--text-color);
        line-height: 1.7;
    }

    /* Ambiente de trabalho image */
    .ambiente-image {
        text-align: center;
        margin-bottom: 2.5rem;
    }

    .ambiente-image img {
        max-width: 800px;
        width: 100%;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
    }

    /* Redes grid */
    .redes-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .rede-card {
        display: block;
        background: var(--secondary-color);
        padding: 2rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        border-top: 3px solid var(--primary-color);
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .rede-card:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
    }

    .rede-card h3 {
        margin: 0 0 1rem 0;
        color: var(--text-color);
        font-size: 1.125rem;
    }

    .rede-card p {
        margin: 0 0 1rem 0;
        line-height: 1.7;
        color: var(--text-light);
    }

    .rede-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--primary-color);
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .sobre-hero {
            padding: calc(var(--header-height) + 2rem) 0 3rem;
        }

        .sobre-hero h1 {
            font-size: var(--text-3xl);
        }

        .sobre-shape--1 {
            display: none;
        }

        .approach-item {
            padding: 1rem 1.25rem;
        }

        .commitment-container {
            padding: 1.5rem;
        }

        .redes-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
