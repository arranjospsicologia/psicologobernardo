<script lang="ts">
    import { MapPin, Phone, Mail, ExternalLink } from "lucide-svelte";
</script>

<footer class="footer">
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
                Atendimento psicológico com base na Abordagem Centrada na
                Pessoa. Um espaço de acolhimento e autoconhecimento.
            </p>
        </div>

        <!-- Column 2: Services -->
        <div class="footer-col">
            <h3 class="footer-title">Serviços</h3>
            <ul class="footer-list">
                <li class="footer-item">
                    <a href="/servicos/psicoterapia-individual/"
                        >Psicoterapia Individual</a
                    >
                </li>
                <li class="footer-item">
                    <a href="/servicos/terapia-online/">Terapia Online</a>
                </li>
                <li class="footer-item">
                    <a href="/servicos/terapia-de-casal/">Terapia de Casal</a>
                </li>
                <li class="footer-item">
                    <a href="/servicos/grupos-e-rodas/">Grupos e Rodas</a>
                </li>
                <li class="footer-item">
                    <a href="/servicos/supervisao-profissional/">Supervisão</a>
                </li>
            </ul>
        </div>

        <!-- Column 2: Contact -->
        <div class="footer-col">
            <h3 class="footer-title">Contato</h3>
            <ul class="footer-list">
                <li class="footer-item">
                    <MapPin size={18} />
                    <span>
                        Rua Darcy Grijó, 50, Sala 409<br />
                        Ed. Madison Office Tower<br />
                        <a
                            href="/localizacao/psicologo-jardim-da-penha/"
                            class="address-link"
                            >Jardim da Penha, Vitória - ES</a
                        >
                    </span>
                </li>
                <li class="footer-item">
                    <Phone size={18} />
                    <a href="tel:+5527998331228">(27) 99833-1228</a>
                </li>
                <li class="footer-item">
                    <Mail size={18} />
                    <a href="mailto:contato@psicologobernardo.com.br"
                        >contato@psicologobernardo.com.br</a
                    >
                </li>
            </ul>
        </div>

        <!-- Column 3: Professional Info -->
        <div class="footer-col">
            <h3 class="footer-title">Regulamentação</h3>

            <!-- CRP Number -->
            <p class="crp-text">
                <a
                    href="https://cadastro.cfp.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong>CRP 16/5527</strong>
                </a>
            </p>

            <!-- Regulatory Links -->
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
                <a href="/politica-privacidade/">Privacidade</a>
                <span class="separator">•</span>
                <a href="/termos-uso/">Termos</a>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        background-color: var(--secondary-color);
        padding: 4rem 0 0;
    }

    .footer-grid {
        display: grid;
        grid-template-columns: 1.2fr 1fr 1fr 1fr;
        gap: 2rem;
    }

    .footer-logo img {
        height: 50px;
        width: auto;
        margin-bottom: 1rem;
    }

    .footer-about {
        color: var(--text-light);
        font-size: var(--text-sm);
        line-height: 1.7;
        max-width: 280px;
    }

    .footer-title {
        font-size: var(--text-base);
        font-weight: 600;
        color: var(--black);
        margin-bottom: 1.25rem;
    }

    .footer-list {
        list-style: none;
    }

    .footer-item {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        margin-bottom: 1rem;
        color: var(--text-light);
        font-size: var(--text-sm);
    }

    .footer-item :global(svg) {
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 0.2rem;
    }

    .footer-item a {
        color: var(--text-color);
        transition: color 0.2s;
    }

    .footer-item a:hover {
        color: var(--primary-color);
    }

    /* CRP Text */
    .crp-text {
        font-size: var(--text-sm);
        margin-bottom: 0.75rem;
    }

    .crp-text a {
        color: var(--text-color);
        transition: color 0.2s;
    }

    .crp-text a:hover {
        color: var(--primary-color);
    }

    .address-link {
        color: var(--text-light);
        transition: color 0.2s;
        text-decoration: none;
    }

    .address-link:hover {
        color: var(--primary-color);
    }

    /* Regulation Links */
    .regulation-links {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        margin-bottom: 1rem;
    }

    .reg-link {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        color: var(--text-color);
        font-size: var(--text-sm);
        padding: 0.35rem 0;
        transition: color 0.2s;
    }

    .reg-link:hover {
        color: var(--primary-color);
    }

    .reg-link :global(svg) {
        opacity: 0.6;
        flex-shrink: 0;
    }

    /* Legal Links */
    .legal-links {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .legal-links a {
        color: var(--text-light);
        font-size: var(--text-sm);
        transition: color 0.2s;
    }

    .legal-links a:hover {
        color: var(--primary-color);
    }

    .legal-links .separator {
        color: var(--text-lighter);
        font-size: var(--text-sm);
    }

    .footer-bottom {
        margin-top: 3rem;
        padding: 1.5rem 0;
        border-top: 1px solid var(--secondary-dark);
    }

    .footer-bottom-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .footer-bottom p {
        color: var(--text-light);
        font-size: var(--text-sm);
        margin: 0;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
        }

        .footer-about {
            max-width: 100%;
        }

        .footer-item {
            justify-content: center;
        }

        .regulation-links {
            align-items: center;
        }

        .footer-bottom-content {
            flex-direction: column;
            text-align: center;
        }
    }
</style>
