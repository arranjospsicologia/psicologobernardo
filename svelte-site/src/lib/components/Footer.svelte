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
