<script lang="ts">
    import { Section, Button, Breadcrumb } from "$lib";
    import {
        Phone,
        Shield,
        Lock,
        Mail,
        List,
        ChevronRight,
        AlertTriangle,
    } from "lucide-svelte";
</script>

<svelte:head>
    <title
        >Política de Privacidade | Psicólogo Bernardo - Bernardo Carielo</title
    >
    <meta
        name="description"
        content="Política de Privacidade - Como coletamos, usamos e protegemos seus dados pessoais conforme a LGPD"
    />
    <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- Breadcrumb -->
<Breadcrumb
    items={[{ name: "Início", href: "/" }, { name: "Política de Privacidade" }]}
/>

<section class="legal-hero">
    <div class="container">
        <h1>Política de Privacidade</h1>
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
                    <a href="#intro"><ChevronRight size={16} /> 1. Introdução</a
                    >
                </li>
                <li>
                    <a href="#responsavel"
                        ><ChevronRight size={16} /> 2. Responsável pelo Tratamento</a
                    >
                </li>
                <li>
                    <a href="#dados-coletados"
                        ><ChevronRight size={16} /> 3. Dados Coletados</a
                    >
                </li>
                <li>
                    <a href="#finalidade"
                        ><ChevronRight size={16} /> 4. Finalidade do Uso</a
                    >
                </li>
                <li>
                    <a href="#base-legal"
                        ><ChevronRight size={16} /> 5. Base Legal</a
                    >
                </li>
                <li>
                    <a href="#compartilhamento"
                        ><ChevronRight size={16} /> 6. Compartilhamento</a
                    >
                </li>
                <li>
                    <a href="#cookies"><ChevronRight size={16} /> 7. Cookies</a>
                </li>
                <li>
                    <a href="#seguranca"
                        ><ChevronRight size={16} /> 8. Segurança</a
                    >
                </li>
                <li>
                    <a href="#direitos"
                        ><ChevronRight size={16} /> 9. Seus Direitos</a
                    >
                </li>
                <li>
                    <a href="#retencao"
                        ><ChevronRight size={16} /> 10. Retenção de Dados</a
                    >
                </li>
                <li>
                    <a href="#contato"><ChevronRight size={16} /> 11. Contato</a
                    >
                </li>
            </ul>
        </nav>

        <section id="intro" class="legal-section">
            <h2>1. Introdução</h2>
            <p>
                A presente Política de Privacidade tem por finalidade demonstrar
                o compromisso de <strong>Bernardo Carielo</strong>, psicólogo
                inscrito no CRP 16/5527, com a privacidade e a proteção dos
                dados pessoais coletados de seus usuários e pacientes.
            </p>
            <p>
                Esta política está em conformidade com a Lei Geral de Proteção
                de Dados Pessoais (LGPD - Lei 13.709/2018) e se aplica a todos
                os dados coletados através do site <strong
                    >psicologobernardo.com.br</strong
                > e demais canais de comunicação.
            </p>
        </section>

        <section id="responsavel" class="legal-section">
            <h2>2. Responsável pelo Tratamento de Dados</h2>
            <div class="legal-contact-box">
                <h3><Shield size={20} /> Dados do Controlador</h3>
                <p><strong>Nome:</strong> Bernardo Carielo</p>
                <p><strong>CRP:</strong> 16/5527</p>
                <p>
                    <strong>Endereço:</strong> Rua Darcy Grijó, 50 - Sala 409, Jardim
                    da Penha, Vitória - ES
                </p>
                <p>
                    <strong>E-mail:</strong> contato@arranjospsicologia.com.br
                </p>
                <p><strong>Telefone:</strong> (27) 99833-1228</p>
            </div>
        </section>

        <section id="dados-coletados" class="legal-section">
            <h2>3. Dados Coletados</h2>
            <h3>3.1. Dados fornecidos voluntariamente</h3>
            <p>
                Ao entrar em contato através dos formulários do site, WhatsApp
                ou e-mail, podemos coletar:
            </p>
            <ul>
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Mensagem/motivo do contato</li>
            </ul>

            <h3>3.2. Dados coletados automaticamente</h3>
            <p>
                Durante a navegação no site, coletamos automaticamente através
                do Google Analytics:
            </p>
            <ul>
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Origem do acesso (referência)</li>
                <li>Cookies de navegação</li>
            </ul>

            <h3>3.3. Dados clínicos (pacientes em atendimento)</h3>
            <div class="legal-highlight">
                <p>
                    Os dados clínicos de pacientes são coletados durante o
                    processo terapêutico e armazenados de forma segura e
                    confidencial, em conformidade com o <strong
                        >Código de Ética Profissional do Psicólogo</strong
                    >
                    e a <strong>Resolução CFP nº 01/2009</strong>.
                </p>
            </div>
        </section>

        <section id="finalidade" class="legal-section">
            <h2>4. Finalidade do Uso dos Dados</h2>
            <h3>4.1. Dados de contato do site</h3>
            <ul>
                <li>Responder a solicitações de informações</li>
                <li>Agendar consultas e sessões</li>
                <li>Enviar informações sobre serviços prestados</li>
                <li>Melhorar a experiência de navegação no site</li>
            </ul>

            <h3>4.2. Dados de navegação (Analytics)</h3>
            <ul>
                <li>Análise estatística de tráfego do site</li>
                <li>
                    Compreensão de como os usuários interagem com o conteúdo
                </li>
                <li>Melhorias na estrutura e usabilidade do site</li>
            </ul>

            <h3>4.3. Dados clínicos</h3>
            <ul>
                <li>Prestação de serviços de psicoterapia</li>
                <li>
                    Elaboração de relatórios e documentos, quando solicitados
                </li>
                <li>Cumprimento de obrigações legais e éticas profissionais</li>
            </ul>
        </section>

        <section id="base-legal" class="legal-section">
            <h2>5. Base Legal para o Tratamento</h2>
            <p>
                O tratamento dos dados pessoais é realizado com base nas
                seguintes hipóteses legais previstas na LGPD:
            </p>
            <ul>
                <li>
                    <strong>Consentimento:</strong> ao utilizar os formulários de
                    contato ou navegar no site
                </li>
                <li>
                    <strong>Execução de contrato:</strong> para prestação de serviços
                    psicológicos
                </li>
                <li>
                    <strong>Legítimo interesse:</strong> para análise de tráfego
                    e melhorias no site
                </li>
                <li>
                    <strong>Cumprimento de obrigação legal:</strong> quando exigido
                    por lei ou regulamentação profissional
                </li>
            </ul>
        </section>

        <section id="compartilhamento" class="legal-section">
            <h2>6. Compartilhamento de Dados</h2>
            <p>
                <strong
                    >Não compartilhamos seus dados pessoais com terceiros</strong
                >, exceto nas seguintes situações:
            </p>
            <ul>
                <li>Quando exigido por lei ou ordem judicial</li>
                <li>Para proteção de direitos, propriedade ou segurança</li>
                <li>
                    Com provedores de serviços essenciais (Google Analytics),
                    que atuam como processadores de dados sob nossas instruções
                </li>
            </ul>

            <div class="legal-highlight">
                <h3><Lock size={20} /> Sigilo Profissional</h3>
                <p>
                    Todos os dados clínicos são mantidos em <strong
                        >absoluto sigilo</strong
                    >, conforme determina o Código de Ética Profissional do
                    Psicólogo.
                </p>
            </div>
        </section>

        <section id="cookies" class="legal-section">
            <h2>7. Cookies e Tecnologias Similares</h2>
            <p>O site utiliza cookies para:</p>
            <ul>
                <li>Análise de tráfego (Google Analytics)</li>
                <li>Melhorar a experiência de navegação</li>
                <li>Lembrar preferências do usuário</li>
            </ul>
            <p>
                Você pode desabilitar os cookies nas configurações do seu
                navegador, mas isso pode afetar a funcionalidade de algumas
                áreas do site.
            </p>
        </section>

        <section id="seguranca" class="legal-section">
            <h2>8. Segurança dos Dados</h2>
            <p>
                Adotamos medidas de segurança técnicas e organizacionais para
                proteger seus dados contra acesso não autorizado, perda ou
                destruição:
            </p>
            <ul>
                <li>Uso de protocolo HTTPS em todo o site</li>
                <li>Armazenamento seguro de dados clínicos</li>
                <li>Acesso restrito a informações sensíveis</li>
                <li>Backups regulares</li>
                <li>
                    Cumprimento das normas do CFP sobre armazenamento de
                    documentos
                </li>
            </ul>
        </section>

        <section id="direitos" class="legal-section">
            <h2>9. Direitos do Titular dos Dados</h2>
            <p>De acordo com a LGPD, você tem os seguintes direitos:</p>
            <ul>
                <li>
                    <strong>Confirmação:</strong> saber se tratamos dados seus
                </li>
                <li>
                    <strong>Acesso:</strong> solicitar acesso aos seus dados pessoais
                </li>
                <li>
                    <strong>Correção:</strong> solicitar correção de dados incompletos,
                    inexatos ou desatualizados
                </li>
                <li>
                    <strong>Anonimização, bloqueio ou eliminação:</strong> de dados
                    desnecessários ou tratados em desconformidade
                </li>
                <li>
                    <strong>Portabilidade:</strong> solicitar dados em formato estruturado
                    e interoperável
                </li>
                <li>
                    <strong>Eliminação:</strong> dos dados tratados com base no consentimento
                </li>
                <li>
                    <strong>Informação:</strong> sobre compartilhamento de dados
                    com terceiros
                </li>
                <li>
                    <strong>Revogação do consentimento:</strong> a qualquer momento
                </li>
            </ul>
            <p>
                Para exercer seus direitos, entre em contato através do e-mail: <strong
                    >contato@arranjospsicologia.com.br</strong
                >
            </p>

            <div class="legal-warning">
                <h3><AlertTriangle size={20} /> Importante - Dados Clínicos</h3>
                <p>
                    Dados clínicos devem ser mantidos por pelo menos <strong
                        >5 anos</strong
                    > conforme Resolução CFP nº 01/2009, mesmo após solicitação de
                    exclusão.
                </p>
            </div>
        </section>

        <section id="retencao" class="legal-section">
            <h2>10. Retenção de Dados</h2>
            <ul>
                <li>
                    <strong>Dados de contato:</strong> mantidos enquanto houver finalidade
                    legítima ou até solicitação de exclusão
                </li>
                <li>
                    <strong>Dados de navegação:</strong> armazenados pelo Google
                    Analytics conforme política da plataforma
                </li>
                <li>
                    <strong>Dados clínicos:</strong> mínimo de 5 anos após o término
                    do atendimento (Resolução CFP nº 01/2009)
                </li>
            </ul>
        </section>

        <section id="contato" class="legal-section">
            <h2>11. Contato e Dúvidas</h2>
            <p>
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o
                tratamento de seus dados pessoais, entre em contato:
            </p>
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
                    <Shield size={20} />
                    Esta Política de Privacidade foi elaborada em conformidade com
                    a
                    <strong
                        >Lei Geral de Proteção de Dados Pessoais (LGPD)</strong
                    >
                    e as normas do
                    <strong>Conselho Federal de Psicologia</strong>.
                </p>
            </div>
        </section>
    </div>
</Section>

<Section variant="gradient">
    <div class="cta-content">
        <h2>Alguma dúvida sobre nossa política de privacidade?</h2>
        <p>Entre em contato e teremos prazer em esclarecer</p>
        <Button
            href="https://wa.me/5527998331228?text=Olá,%20tenho%20dúvidas%20sobre%20a%20política%20de%20privacidade"
            variant="secondary"
            size="lg"
        >
            <Phone size={20} />
            Falar no WhatsApp
        </Button>
    </div>
</Section>

<style>
    @import "../../lib/styles/legal.css";
</style>
