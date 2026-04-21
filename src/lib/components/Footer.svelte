<script lang="ts">
    import { ExternalLink, Mail, MapPin, Phone } from "lucide-svelte";
    import { buildWhatsAppUrl, getFullStreetAddress, siteProfile } from "$lib/data/siteProfile";
    import {
        experienceNavItems,
        primaryServiceItems,
    } from "$lib/data/siteNavigation";
</script>

<footer class="footer">
    <div class="container footer-quick-actions">
        <a href="/servicos/psicoterapia-individual/" class="footer-action-card">
            <strong>Quero atendimento individual</strong>
            <span>Veja como funciona o processo, o ritmo das sessões e o que pode ser trabalhado em terapia.</span>
        </a>
        <a href="/psicologo-vitoria-es/" class="footer-action-card">
            <strong>Quero ver localização e acesso</strong>
            <span>Confira fotos do consultório, endereço e a logística para encaixar o cuidado na sua rotina.</span>
        </a>
        <a
            href={buildWhatsAppUrl("Olá, vi seu site e gostaria de conversar.")}
            class="footer-action-card footer-action-card--primary"
        >
            <strong>Quero iniciar pelo WhatsApp</strong>
            <span>Escreva em poucas linhas o que está vivendo e receba orientação sobre o melhor próximo passo.</span>
        </a>
    </div>

    <div class="container footer-grid">
        <!-- Column 1: Logo & About -->
        <div class="footer-col">
            <a href="/" class="footer-logo">
                <img
                    src="/images/logo.svg"
                    alt="Psicólogo Bernardo"
                    width="150"
                    height="60"
                />
            </a>
            <p class="footer-about">
                Atendimento psicológico com base na Abordagem Centrada na Pessoa.
                Um espaço de acolhimento e autoconhecimento em Vitória e online.
            </p>
            <p class="footer-note">
                Atendimento preferencial por WhatsApp, com consultório em frente à UFES
                e horários de {siteProfile.hours.displayDays.toLowerCase()}, {siteProfile.hours.displayTime}.
            </p>
        </div>

        <!-- Column 2: Serviços -->
        <div class="footer-col">
            <h3 class="footer-title">Serviços</h3>
            <ul class="footer-list footer-list--links">
                <li class="footer-item"><a href="/servicos/">Visão geral dos serviços</a></li>
                {#each primaryServiceItems as item}
                    <li class="footer-item"><a href={item.href}>{item.name}</a></li>
                {/each}
            </ul>
        </div>

        <!-- Column 3: Como posso ajudar -->
        <div class="footer-col">
            <h3 class="footer-title">Como posso ajudar</h3>
            <ul class="footer-list footer-list--links">
                <li class="footer-item"><a href="/experiencia/">Ver todas as demandas</a></li>
                {#each experienceNavItems as item}
                    <li class="footer-item"><a href={item.href}>{item.name}</a></li>
                {/each}
            </ul>
        </div>

        <!-- Column 4: Localização e conteúdo -->
        <div class="footer-col">
            <h3 class="footer-title">Localização e conteúdo</h3>
            <ul class="footer-list footer-list--links">
                <li class="footer-item"><a href="/psicologo-vitoria-es/">Psicólogo em Vitória ES</a></li>
                <li class="footer-item"><a href="/psicologo-vitoria-es/psicologo-jardim-da-penha/">Jardim da Penha</a></li>
                <li class="footer-item"><a href="/artigos/">Artigos</a></li>
                <li class="footer-item"><a href="/contato/">Contato</a></li>
            </ul>
        </div>

        <!-- Column 5: Contato e CRP -->
        <div class="footer-col">
            <h3 class="footer-title">Contato e CRP</h3>
            <ul class="footer-list">
                <li class="footer-item">
                    <MapPin size={18} />
                    <span>
                        {getFullStreetAddress()}<br />
                        <a
                            href="/psicologo-vitoria-es/"
                            class="address-link"
                            >{siteProfile.address.neighborhood}, {siteProfile.address.city} - {siteProfile.address.state}</a
                        ><br />
                        CEP {siteProfile.address.postalCode}
                    </span>
                </li>
                <li class="footer-item">
                    <Phone size={18} />
                    <a href={siteProfile.phoneHref}>{siteProfile.phoneDisplay}</a>
                </li>
                <li class="footer-item">
                    <Mail size={18} />
                    <a href={`mailto:${siteProfile.officialEmail}`}>{siteProfile.officialEmail}</a>
                </li>
            </ul>

            <p class="crp-text">
                <a
                    href="https://cadastro.cfp.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong>{siteProfile.crp}</strong>
                </a>
            </p>

            <div class="regulation-links">
                <a
                    href="https://crp16.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="reg-link"
                >
                    Conselho Regional de Psicologia - 16ª Região
                </a>
                <a
                    href="https://site.cfp.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="reg-link"
                >
                    Conselho Federal de Psicologia
                </a>
                <a
                    href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo_etica.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="reg-link"
                >
                    Código de Ética <ExternalLink size={11} />
                </a>
                <a
                    href="https://site.cfp.org.br/wp-content/uploads/2018/05/RESOLU%C3%87%C3%83O-N%C2%BA-11-DE-11-DE-MAIO-DE-2018.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="reg-link"
                >
                    Resolução 11/2018 <ExternalLink size={11} />
                </a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="container footer-bottom-content">
            <p>
                &copy; {new Date().getFullYear()} Bernardo Carielo. Todos os direitos
                reservados.
            </p>
            <div class="legal-links">
                <a href="/politica-editorial/">Política Editorial</a>
                <span class="separator">•</span>
                <a href="/politica-privacidade/">Privacidade</a>
                <span class="separator">•</span>
                <a href="/termos-uso/">Termos</a>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer-quick-actions {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .footer-action-card {
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
        padding: 1.2rem 1.25rem;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.82);
        border: 1px solid rgba(8, 186, 156, 0.12);
        box-shadow: var(--shadow-sm);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .footer-action-card:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-hover);
    }

    .footer-action-card--primary {
        background: linear-gradient(135deg, rgba(8, 186, 156, 0.14), rgba(255, 255, 255, 0.92));
        border-color: rgba(8, 186, 156, 0.22);
    }

    .footer-action-card strong {
        font-size: 1rem;
        color: var(--black);
    }

    .footer-action-card span {
        color: var(--text-light);
        font-size: 0.92rem;
        line-height: 1.55;
    }

    .footer-note {
        margin-top: 1rem;
        color: var(--text-light);
        font-size: 0.88rem;
        line-height: 1.7;
        max-width: 320px;
    }

    @media (max-width: 900px) {
        .footer-quick-actions {
            grid-template-columns: 1fr;
        }
    }
</style>
