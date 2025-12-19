<script lang="ts">
    import { Section, Button, Breadcrumb } from "$lib";
    import {
        Phone,
        List,
        ChevronRight,
        AlertTriangle,
        AlertCircle,
        Mail,
    } from "lucide-svelte";
</script>

<svelte:head>
    <title>Termos de Uso | Psicólogo Bernardo - Bernardo Carielo</title>
    <meta
        name="description"
        content="Termos de Uso do site psicologobernardo.com.br - Condições de utilização e regras de navegação"
    />
    <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- Breadcrumb -->
<Breadcrumb
    items={[{ name: "Início", href: "/" }, { name: "Termos de Uso" }]}
/>

<section class="legal-hero">
    <div class="container">
        <h1>Termos de Uso</h1>
        <p>Última atualização: 25 de outubro de 2025</p>
    </div>
</section>

<Section variant="white">
    <div class="legal-content">
        <!-- Índice -->
        <nav class="legal-toc">
            <h3><List size={20} /> Índice</h3>
            <ul>
                <li>
                    <a href="#aceitacao"
                        ><ChevronRight size={16} /> 1. Aceitação dos Termos</a
                    >
                </li>
                <li>
                    <a href="#descricao"
                        ><ChevronRight size={16} /> 2. Descrição do Serviço</a
                    >
                </li>
                <li>
                    <a href="#uso-apropriado"
                        ><ChevronRight size={16} /> 3. Uso Apropriado</a
                    >
                </li>
                <li>
                    <a href="#propriedade"
                        ><ChevronRight size={16} /> 4. Propriedade Intelectual</a
                    >
                </li>
                <li>
                    <a href="#isencao"
                        ><ChevronRight size={16} /> 5. Isenção de Garantias</a
                    >
                </li>
                <li>
                    <a href="#relacao-terapeutica"
                        ><ChevronRight size={16} /> 6. Relação Terapêutica</a
                    >
                </li>
                <li>
                    <a href="#emergencias"
                        ><ChevronRight size={16} /> 7. Emergências</a
                    >
                </li>
                <li>
                    <a href="#contato"><ChevronRight size={16} /> 8. Contato</a>
                </li>
            </ul>
        </nav>

        <section id="aceitacao" class="legal-section">
            <h2>1. Aceitação dos Termos</h2>
            <p>
                Ao acessar e usar o site <strong
                    >psicologobernardo.com.br</strong
                >, você concorda em cumprir e estar vinculado aos seguintes
                Termos de Uso. Se você não concordar com estes termos, não
                utilize este site.
            </p>
            <p>
                Estes termos se aplicam a todos os visitantes, usuários e outras
                pessoas que acessam ou usam o site.
            </p>
        </section>

        <section id="descricao" class="legal-section">
            <h2>2. Descrição do Serviço</h2>
            <p>
                O site <strong>psicologobernardo.com.br</strong> é um canal de
                comunicação e informação sobre os serviços de psicoterapia
                prestados por <strong>Bernardo Carielo</strong>, psicólogo
                inscrito no CRP 16/5527.
            </p>
            <p>O site oferece:</p>
            <ul>
                <li>
                    Informações sobre serviços de psicoterapia individual, de
                    casais e de família
                </li>
                <li>
                    Artigos e conteúdos informativos sobre saúde mental e
                    psicologia
                </li>
                <li>Canais de contato para agendamento de consultas</li>
                <li>Informações sobre a Abordagem Centrada na Pessoa</li>
            </ul>
        </section>

        <section id="uso-apropriado" class="legal-section">
            <h2>3. Uso Apropriado do Site</h2>
            <h3>3.1. Você concorda em:</h3>
            <ul>
                <li>Usar o site apenas para fins legais e de forma ética</li>
                <li>Fornecer informações verdadeiras ao entrar em contato</li>
                <li>Respeitar os direitos de propriedade intelectual</li>
                <li>
                    Não realizar atividades que possam prejudicar o
                    funcionamento do site
                </li>
            </ul>

            <h3>3.2. É proibido:</h3>
            <ul>
                <li>
                    Usar o site para qualquer finalidade ilegal ou não
                    autorizada
                </li>
                <li>
                    Tentar obter acesso não autorizado a qualquer parte do site
                </li>
                <li>
                    Copiar, reproduzir ou distribuir conteúdo sem autorização
                </li>
                <li>Fazer uso comercial não autorizado do conteúdo</li>
                <li>Transmitir vírus, malware ou qualquer código malicioso</li>
                <li>
                    Coletar informações de outros usuários sem consentimento
                </li>
            </ul>
        </section>

        <section id="propriedade" class="legal-section">
            <h2>4. Propriedade Intelectual</h2>
            <p>
                Todo o conteúdo presente neste site, incluindo mas não se
                limitando a textos, imagens, logotipos, gráficos, código-fonte e
                design, é de propriedade de Bernardo Carielo ou de seus
                licenciadores e está protegido pelas leis de direitos autorais
                brasileiras e internacionais.
            </p>
            <p>
                O uso não autorizado de qualquer conteúdo deste site pode violar
                direitos autorais, marcas registradas e outras leis aplicáveis.
            </p>

            <h3>4.1. Uso permitido</h3>
            <p>
                Você pode visualizar e fazer download de material do site para
                uso pessoal e não comercial, desde que mantenha todos os avisos
                de direitos autorais e propriedade.
            </p>
        </section>

        <section id="isencao" class="legal-section">
            <h2>5. Isenção de Garantias</h2>
            <p>
                O site e seu conteúdo são fornecidos "como estão" e "conforme
                disponíveis", sem garantias de qualquer tipo, expressas ou
                implícitas.
            </p>

            <h3>5.1. Não garantimos:</h3>
            <ul>
                <li>Que o site estará sempre disponível ou livre de erros</li>
                <li>
                    A precisão, completude ou atualidade de todo o conteúdo
                    informativo
                </li>
                <li>
                    Que o site estará livre de vírus ou componentes prejudiciais
                </li>
            </ul>

            <div class="legal-warning">
                <h3><AlertTriangle size={20} /> Importante</h3>
                <p>
                    O conteúdo informativo do site (artigos de blog) <strong
                        >não substitui</strong
                    > avaliação, diagnóstico ou tratamento profissional. Sempre busque
                    orientação de um profissional de saúde mental qualificado.
                </p>
            </div>
        </section>

        <section id="relacao-terapeutica" class="legal-section">
            <h2>6. Relação Terapêutica</h2>
            <div class="legal-highlight">
                <h3>
                    <AlertCircle size={20} /> Importante - Relação Terapêutica
                </h3>
                <p>
                    O uso deste site <strong>não estabelece</strong> uma relação
                    psicólogo-paciente. A relação terapêutica só é estabelecida após:
                </p>
                <ul>
                    <li>Contato direto e agendamento formal</li>
                    <li>Primeira consulta presencial ou online</li>
                    <li>Concordância mútua sobre o processo terapêutico</li>
                    <li>
                        Assinatura de contrato de prestação de serviços (quando
                        aplicável)
                    </li>
                </ul>
            </div>
        </section>

        <section id="emergencias" class="legal-section">
            <h2>7. Emergências</h2>
            <div class="legal-emergency">
                <h3>
                    <AlertCircle size={20} /> EMERGÊNCIAS - NÃO USE ESTE SITE
                </h3>
                <p>
                    <strong
                        >Em caso de emergência psiquiátrica ou pensamentos
                        suicidas, procure ajuda imediata:</strong
                    >
                </p>
                <ul>
                    <li><strong>SAMU:</strong> 192</li>
                    <li>
                        <strong>CVV (Centro de Valorização da Vida):</strong> 188
                        (24h, gratuito)
                    </li>
                    <li>
                        <strong>Emergência:</strong> Dirija-se ao pronto-socorro
                        mais próximo
                    </li>
                </ul>
            </div>
        </section>

        <section id="contato" class="legal-section">
            <h2>8. Contato e Dúvidas</h2>
            <p>Para questões sobre estes Termos de Uso, entre em contato:</p>
            <div class="legal-contact-box">
                <h3><Mail size={20} /> Entre em Contato</h3>
                <p>
                    <strong>E-mail:</strong> contato@arranjospsicologia.com.br
                </p>
                <p><strong>WhatsApp:</strong> (27) 99833-1228</p>
                <p>
                    <strong>Endereço:</strong> Rua Darcy Grijó, 50 - Sala 409, Jardim
                    da Penha, Vitória - ES, CEP 29060-500
                </p>
            </div>

            <div class="legal-footer-note">
                <p>
                    Ao utilizar este site, você declara ter lido, compreendido e
                    concordado com estes Termos de Uso e com nossa <a
                        href="/politica-privacidade"
                        style="color: var(--primary-color); font-weight: 600;"
                        >Política de Privacidade</a
                    >.
                </p>
            </div>
        </section>
    </div>
</Section>

<Section variant="gradient">
    <div class="cta-content">
        <h2>Pronto para cuidar da sua saúde mental?</h2>
        <p>
            Entre em contato e vamos conversar sobre como a psicoterapia pode te
            ajudar
        </p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
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
