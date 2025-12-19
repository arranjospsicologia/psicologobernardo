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
            {
                "@type": "Organization",
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
        <div class="approach-card">
            <h4>Ética e realismo</h4>
            <p>Sem promessas fáceis; confiança no seu potencial de mudança.</p>
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

<!-- Como Funcionam os Atendimentos -->
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

    <div class="info-cards-grid">
        <div class="info-card">
            <MapPin size={24} />
            <div>
                <h4>Formatos</h4>
                <p>
                    Presencial (Jardim da Penha, Vitória-ES) e online (Brasil e
                    exterior).
                </p>
            </div>
        </div>
        <div class="info-card">
            <Users size={24} />
            <div>
                <h4>Públicos atendidos</h4>
                <p>Adultos, idosos, casais e famílias.</p>
            </div>
        </div>
        <div class="info-card">
            <FileText size={24} />
            <div>
                <h4>Documentos e reembolso</h4>
                <p>
                    Emito nota fiscal; confirme com seu plano o que é necessário
                    (geralmente encaminhamento médico).
                </p>
            </div>
        </div>
        <div class="info-card">
            <MessageCircle size={24} />
            <div>
                <h4>Contato</h4>
                <p>
                    Preferencialmente WhatsApp. Por sigilo e organização, não
                    retorno ligações de números desconhecidos.
                </p>
            </div>
        </div>
        <div class="info-card">
            <Languages size={24} />
            <div>
                <h4>Idiomas</h4>
                <p>Português e Inglês.</p>
            </div>
        </div>
    </div>
</Section>

<!-- Compromissos Éticos -->
<Section variant="beige" id="compromissos-eticos">
    <div class="section-header">
        <h2>Compromissos éticos</h2>
    </div>

    <div class="compromissos-grid">
        <div class="compromisso-card">
            <ShieldCheck size={24} />
            <p>Sigilo, respeito à autonomia e consentimento informado.</p>
        </div>
        <div class="compromisso-card">
            <Handshake size={24} />
            <p>
                Comunicação clara sobre limites do trabalho e encaminhamentos
                quando necessário.
            </p>
        </div>
        <div class="compromisso-card">
            <Globe size={24} />
            <p>
                Integração com outras redes/profissionais de saúde quando fizer
                sentido.
            </p>
        </div>
        <div class="compromisso-card">
            <BadgeCheck size={24} />
            <p>Conteúdos do site com finalidade educativa/informativa.</p>
        </div>
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

    /* Info cards grid for "Como funcionam" */
    .info-cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
    }

    .info-card {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        background: var(--secondary-color);
        padding: 1.75rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
    }

    .info-card :global(svg) {
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 0.25rem;
    }

    .info-card h4 {
        margin: 0 0 0.5rem 0;
        color: var(--text-color);
        font-size: 1.0625rem;
    }

    .info-card p {
        margin: 0;
        line-height: 1.6;
        color: var(--text-color);
    }

    /* Compromissos grid */
    .compromissos-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
    }

    .compromisso-card {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        background: var(--white);
        padding: 1.75rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        border-left: 4px solid var(--primary-color);
    }

    .compromisso-card :global(svg) {
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 0.125rem;
    }

    .compromisso-card p {
        margin: 0;
        line-height: 1.7;
        color: var(--text-color);
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
        .info-cards-grid,
        .compromissos-grid {
            grid-template-columns: 1fr;
        }

        .redes-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
