<script lang="ts">
    import { Section, Breadcrumb, SEO, siteProfile } from "$lib";
    import { BookOpen, PenLine, Users, AlertTriangle, Bot, Scale } from "lucide-svelte";
</script>

<SEO
    title="Política Editorial — Como este blog é escrito e revisado | Psicólogo Bernardo"
    description="Entenda como os artigos do blog são produzidos: processo de redação, revisão clínica, uso de referências, limites éticos e política de uso de IA."
    canonical="https://psicologobernardo.com.br/politica-editorial/"
/>

<Breadcrumb
    items={[
        { name: "Início", href: "/" },
        { name: "Artigos", href: "/artigos/" },
        { name: "Política Editorial" },
    ]}
/>

<section class="editorial-hero">
    <div class="container">
        <span class="editorial-badge"><BookOpen size={16} /> Transparência editorial</span>
        <h1>Como este blog é escrito e revisado</h1>
        <p class="editorial-lead">
            Cada texto publicado aqui passa por um processo editorial com autoria humana,
            revisão clínica e cuidado com os limites éticos da psicologia.
            Esta página explica como esse processo funciona.
        </p>
        <p class="editorial-meta">
            Responsável editorial: <strong>{siteProfile.personName}</strong> — CRP 16/5527<br />
            Última revisão desta política: <time datetime="2026-04-14">14 de abril de 2026</time>
        </p>
    </div>
</section>

<Section variant="white">
    <div class="editorial-content">

        <section class="editorial-section">
            <div class="section-icon"><PenLine size={24} /></div>
            <div>
                <h2>Quem escreve</h2>
                <p>
                    Os artigos são escritos por <a href="/sobre/">Bernardo Carielo</a>,
                    psicólogo clínico (CRP 16/5527), formado pela Universidade Federal do
                    Espírito Santo (UFES) e orientado pela Abordagem Centrada na Pessoa
                    (ACP) de Carl Rogers.
                </p>
                <p>
                    O ponto de partida de cada texto é sempre uma experiência clínica real,
                    uma questão levantada em sessão ou uma reflexão sobre a prática. O
                    conteúdo não é delegado a terceiros nem gerado automaticamente sem
                    supervisão humana.
                </p>
            </div>
        </section>

        <section class="editorial-section">
            <div class="section-icon"><Bot size={24} /></div>
            <div>
                <h2>Uso de inteligência artificial</h2>
                <p>
                    Ferramentas de IA podem ser usadas como auxílio na pesquisa de
                    referências, na organização de ideias e na geração de rascunhos iniciais.
                    Todo rascunho gerado com auxílio de IA é lido, editado e discutido pelo
                    psicólogo responsável antes de qualquer publicação.
                </p>
                <p>
                    A IA não substitui o julgamento clínico, a revisão ética nem a voz
                    editorial do autor. Nenhum artigo é publicado sem revisão e aprovação
                    humana explícita.
                </p>
            </div>
        </section>

        <section class="editorial-section">
            <div class="section-icon"><BookOpen size={24} /></div>
            <div>
                <h2>Referências bibliográficas</h2>
                <p>
                    Artigos de caráter psicoeducativo (identificados como "Artigo" no
                    sistema) incluem referências bibliográficas no formato APA 7ª edição,
                    listadas ao final do texto. As fontes preferidas são periódicos
                    indexados, obras acadêmicas reconhecidas, publicações do CFP e da APA,
                    e recursos de organizações internacionais como a OMS.
                </p>
                <p>
                    Textos reflexivos e ensaios (identificados como "Post") podem não
                    incluir referências formais, mas partem da mesma base clínica e teórica
                    da ACP.
                </p>
            </div>
        </section>

        <section class="editorial-section">
            <div class="section-icon"><Users size={24} /></div>
            <div>
                <h2>Para quem este conteúdo serve</h2>
                <p>
                    Os textos são escritos para pessoas que desejam entender melhor sua
                    experiência emocional, aprender sobre psicoterapia e a Abordagem
                    Centrada na Pessoa, ou refletir sobre saúde mental de forma acessível
                    e sem julgamento.
                </p>
                <p>
                    O conteúdo é informativo e reflexivo. Não é direcionado ao tratamento
                    de condições clínicas específicas nem substitui a avaliação e o
                    acompanhamento de um psicólogo.
                </p>
            </div>
        </section>

        <section class="editorial-section editorial-section--warning">
            <div class="section-icon"><AlertTriangle size={24} /></div>
            <div>
                <h2>Limites deste conteúdo</h2>
                <ul class="editorial-limits">
                    <li>
                        <strong>Não substitui atendimento clínico.</strong> Nenhum artigo
                        equivale a uma sessão de psicoterapia ou a uma avaliação
                        psicológica individual.
                    </li>
                    <li>
                        <strong>Não realiza diagnósticos.</strong> Os textos não descrevem
                        nem sugerem diagnósticos para o leitor. Diagnósticos são atos
                        clínicos reservados ao profissional responsável.
                    </li>
                    <li>
                        <strong>Não oferece atendimento emergencial.</strong> Em situações
                        de crise ou risco, procure o CVV (ligue <strong>188</strong>) ou
                        um serviço de emergência.
                    </li>
                    <li>
                        <strong>Conteúdo datado.</strong> Cada artigo indica a data de
                        publicação e, quando aplicável, a data da última revisão clínica.
                        O campo "conhecimento" em psicologia evolui; artigos mais antigos
                        podem não refletir desenvolvimentos recentes.
                    </li>
                </ul>
            </div>
        </section>

        <section class="editorial-section">
            <div class="section-icon"><Scale size={24} /></div>
            <div>
                <h2>Ética profissional e regulação</h2>
                <p>
                    A produção de conteúdo segue o
                    <a
                        href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Código de Ética Profissional do Psicólogo</a>
                    (CFP, 2005) e a
                    <a
                        href="https://e-psi.cfp.org.br/resolucao-cfp-no-11-2018/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Resolução CFP nº 11/2018</a>
                    (regulamentação do atendimento psicológico mediado por tecnologia).
                </p>
                <p>
                    Dúvidas sobre esta política ou sobre o conteúdo publicado podem ser
                    enviadas pelo <a href="/contato/">formulário de contato</a>.
                </p>
            </div>
        </section>

    </div>
</Section>

<style>
    .editorial-hero {
        background: var(--secondary-color);
        padding: 4rem 0 3rem;
    }

    .editorial-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--primary-color);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 1rem;
    }

    .editorial-hero h1 {
        font-size: clamp(1.6rem, 4vw, 2.4rem);
        margin-bottom: 1rem;
        line-height: 1.25;
    }

    .editorial-lead {
        font-size: var(--text-lg);
        color: var(--text-light);
        max-width: 660px;
        line-height: 1.7;
        margin-bottom: 1.25rem;
    }

    .editorial-meta {
        font-size: 0.9rem;
        color: var(--text-lighter);
        line-height: 1.6;
    }

    .editorial-content {
        max-width: 720px;
        margin: 0 auto;
        padding: 2.5rem 0 3rem;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
    }

    .editorial-section {
        display: grid;
        grid-template-columns: 2.5rem 1fr;
        gap: 1.25rem;
        align-items: start;
    }

    .section-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background: var(--secondary-color);
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 0.15rem;
    }

    .editorial-section--warning .section-icon {
        background: #fff8e1;
        color: #b45309;
    }

    .editorial-section h2 {
        font-size: 1.2rem;
        margin: 0 0 0.6rem;
    }

    .editorial-section p {
        margin: 0 0 0.75rem;
        line-height: 1.7;
        color: var(--text-color);
    }

    .editorial-section p:last-child {
        margin-bottom: 0;
    }

    .editorial-limits {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .editorial-limits li {
        padding-left: 1.1rem;
        position: relative;
        line-height: 1.65;
        color: var(--text-color);
    }

    .editorial-limits li::before {
        content: "—";
        position: absolute;
        left: 0;
        color: var(--primary-color);
        font-weight: 700;
    }

    @media (max-width: 560px) {
        .editorial-section {
            grid-template-columns: 1fr;
        }

        .section-icon {
            display: none;
        }
    }
</style>
