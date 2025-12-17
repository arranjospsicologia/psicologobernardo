<script lang="ts">
    import { Menu, X, ChevronDown } from "lucide-svelte";
    import { Button } from "$lib";

    let isMenuOpen = $state(false);
    let servicesOpen = $state(false);
    let experiencesOpen = $state(false);
    let headerElement: HTMLElement;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (!isMenuOpen) {
            servicesOpen = false;
            experiencesOpen = false;
        }
    }

    function closeMenu() {
        isMenuOpen = false;
        servicesOpen = false;
        experiencesOpen = false;
    }

    function closeDropdowns() {
        servicesOpen = false;
        experiencesOpen = false;
    }

    function handleClickOutside(event: MouseEvent) {
        if (headerElement && !headerElement.contains(event.target as Node)) {
            closeDropdowns();
        }
    }

    const servicos = [
        {
            name: "Psicoterapia Individual",
            href: "/servicos/psicoterapia-individual/",
        },
        { name: "Terapia Online", href: "/servicos/terapia-online/" },
        { name: "Terapia de Casal", href: "/servicos/terapia-de-casal/" },
        { name: "Grupos e Rodas", href: "/servicos/grupos-e-rodas/" },
        { name: "Laudos Psicológicos", href: "/servicos/laudos-psicologicos/" },
        {
            name: "Supervisão Profissional",
            href: "/servicos/supervisao-profissional/",
        },
    ];

    const experiencias = [
        { name: "Ansiedade", href: "/experiencia/ansiedade/" },
        { name: "Depressão", href: "/experiencia/depressao/" },
        { name: "Burnout", href: "/experiencia/burnout/" },
        { name: "Relacionamentos", href: "/experiencia/relacionamento/" },
        { name: "Autoestima", href: "/experiencia/autoestima/" },
    ];
</script>

<svelte:window onclick={handleClickOutside} />

<header class="header glass" bind:this={headerElement}>
    <nav class="container nav">
        <a href="/" class="logo" onclick={closeMenu}>
            <img
                src="/images/logo.svg"
                alt="Psicólogo Bernardo"
                class="logo-img"
                width="120"
                height="50"
            />
        </a>

        <!-- Desktop Navigation -->
        <ul class="nav-list">
            <li><a href="/" class="nav-link">Início</a></li>
            <li><a href="/sobre/" class="nav-link">Sobre</a></li>

            <!-- Serviços Dropdown -->
            <li class="dropdown">
                <button
                    class="nav-link dropdown-trigger"
                    onclick={() => (
                        (servicesOpen = !servicesOpen),
                        servicesOpen && (experiencesOpen = false)
                    )}
                >
                    Serviços <ChevronDown
                        size={16}
                        class={servicesOpen ? "chevron open" : "chevron"}
                    />
                </button>
                <ul class="dropdown-menu" class:open={servicesOpen}>
                    {#each servicos as servico}
                        <li>
                            <a
                                href={servico.href}
                                class="dropdown-link"
                                onclick={closeDropdowns}>{servico.name}</a
                            >
                        </li>
                    {/each}
                </ul>
            </li>

            <!-- Experiências Dropdown -->
            <li class="dropdown">
                <button
                    class="nav-link dropdown-trigger"
                    onclick={() => (
                        (experiencesOpen = !experiencesOpen),
                        experiencesOpen && (servicesOpen = false)
                    )}
                >
                    Experiência <ChevronDown
                        size={16}
                        class={experiencesOpen ? "chevron open" : "chevron"}
                    />
                </button>
                <ul class="dropdown-menu" class:open={experiencesOpen}>
                    {#each experiencias as experiencia}
                        <li>
                            <a
                                href={experiencia.href}
                                class="dropdown-link"
                                onclick={closeDropdowns}>{experiencia.name}</a
                            >
                        </li>
                    {/each}
                </ul>
            </li>

            <li><a href="/blog/" class="nav-link">Blog</a></li>
            <li><a href="/contato/" class="nav-link">Contato</a></li>
        </ul>

        <div class="nav-cta">
            <Button href="/agendar/" variant="primary" size="sm"
                >Agendar Consulta</Button
            >
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="nav-toggle" onclick={toggleMenu} aria-label="Menu">
            {#if isMenuOpen}
                <X size={24} />
            {:else}
                <Menu size={24} />
            {/if}
        </button>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div
        class="mobile-overlay"
        class:open={isMenuOpen}
        onclick={closeMenu}
        onkeydown={(e) => e.key === "Escape" && closeMenu()}
        role="button"
        tabindex="-1"
        aria-label="Fechar menu"
    ></div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" class:open={isMenuOpen}>
        <div class="mobile-menu-header">
            <button
                class="mobile-close-btn"
                onclick={closeMenu}
                aria-label="Fechar menu"
            >
                <X size={24} />
            </button>
        </div>
        <nav class="mobile-nav-container">
            <ul class="mobile-nav">
                <li>
                    <a href="/" class="mobile-link" onclick={closeMenu}>
                        <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href="/sobre/" class="mobile-link" onclick={closeMenu}>
                        <span>Sobre</span>
                    </a>
                </li>

                <li class="mobile-dropdown">
                    <button
                        class="mobile-link mobile-dropdown-trigger"
                        onclick={() => {
                            servicesOpen = !servicesOpen;
                            if (servicesOpen) experiencesOpen = false;
                        }}
                        aria-expanded={servicesOpen}
                    >
                        <span>Serviços</span>
                        <ChevronDown
                            size={20}
                            class={servicesOpen ? "chevron open" : "chevron"}
                        />
                    </button>
                    <ul class="mobile-submenu" class:open={servicesOpen}>
                        {#each servicos as servico}
                            <li>
                                <a
                                    href={servico.href}
                                    class="mobile-sublink"
                                    onclick={closeMenu}
                                >
                                    {servico.name}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </li>

                <li class="mobile-dropdown">
                    <button
                        class="mobile-link mobile-dropdown-trigger"
                        onclick={() => {
                            experiencesOpen = !experiencesOpen;
                            if (experiencesOpen) servicesOpen = false;
                        }}
                        aria-expanded={experiencesOpen}
                    >
                        <span>Experiência</span>
                        <ChevronDown
                            size={20}
                            class={experiencesOpen ? "chevron open" : "chevron"}
                        />
                    </button>
                    <ul class="mobile-submenu" class:open={experiencesOpen}>
                        {#each experiencias as experiencia}
                            <li>
                                <a
                                    href={experiencia.href}
                                    class="mobile-sublink"
                                    onclick={closeMenu}
                                >
                                    {experiencia.name}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </li>

                <li>
                    <a href="/blog/" class="mobile-link" onclick={closeMenu}>
                        <span>Blog</span>
                    </a>
                </li>
                <li>
                    <a href="/contato/" class="mobile-link" onclick={closeMenu}>
                        <span>Contato</span>
                    </a>
                </li>
            </ul>
        </nav>

        <div class="mobile-cta">
            <Button href="/agendar/" variant="primary" onclick={closeMenu}
                >Agendar Consulta</Button
            >
        </div>
    </div>
</header>

<style>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        box-shadow: var(--shadow-sm);
    }

    .nav {
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-img {
        height: 50px;
        width: auto;
    }

    /* Desktop Navigation */
    .nav-list {
        display: flex;
        align-items: center;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .nav-list > li {
        display: flex;
        align-items: center;
    }

    .nav-link {
        color: var(--text-color);
        font-weight: 500;
        position: relative;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }

    .nav-link::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--primary-color);
        transition: width 0.3s ease;
    }

    .nav-link:hover::after {
        width: 100%;
    }

    :global(.chevron) {
        transition: transform 0.3s ease;
    }

    :global(.chevron.open) {
        transform: rotate(180deg);
    }

    /* Dropdown */
    .dropdown {
        position: relative;
        display: flex;
        align-items: center;
    }

    .dropdown-trigger {
        padding: 0;
        line-height: 1;
    }

    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: var(--white);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        padding: 0.5rem 0;
        min-width: 220px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        margin-top: 0.5rem;
    }

    .dropdown-menu.open {
        opacity: 1;
        visibility: visible;
    }

    .dropdown-link {
        display: block;
        padding: 0.75rem 1.25rem;
        color: var(--text-color);
        font-size: 0.95rem;
        transition: background 0.2s;
    }

    .dropdown-link:hover {
        background: var(--secondary-light);
        color: var(--primary-dark);
    }

    .nav-cta {
        display: block;
    }

    .nav-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--text-color);
    }

    /* Mobile Overlay */
    .mobile-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 98;
        opacity: 0;
        visibility: hidden;
        transition:
            opacity 0.3s ease,
            visibility 0.3s ease;
    }

    .mobile-overlay.open {
        opacity: 1;
        visibility: visible;
    }

    /* Mobile Menu */
    .mobile-menu {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        width: 85%;
        max-width: 320px;
        height: 100vh;
        height: 100dvh;
        background: var(--white);
        z-index: 99;
        transform: translateX(100%);
        transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
        overflow: hidden;
    }

    .mobile-menu.open {
        transform: translateX(0);
    }

    .mobile-menu-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--border-light);
        background: var(--white);
    }

    .mobile-close-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: none;
        border: none;
        border-radius: var(--radius-sm);
        cursor: pointer;
        color: var(--text-color);
        transition:
            background 0.2s ease,
            color 0.2s ease;
    }

    .mobile-close-btn:hover,
    .mobile-close-btn:active {
        background: var(--secondary-light);
        color: var(--primary-color);
    }

    .mobile-nav-container {
        height: calc(100% - 160px);
        overflow-y: auto;
        padding: 1rem 1.5rem;
        -webkit-overflow-scrolling: touch;
    }

    .mobile-nav {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .mobile-nav > li {
        border-bottom: 1px solid var(--border-light);
    }

    .mobile-nav > li:last-child {
        border-bottom: none;
    }

    .mobile-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.25rem 0;
        font-size: 1.15rem;
        font-weight: 600;
        color: var(--text-color);
        background: none;
        border: none;
        width: 100%;
        cursor: pointer;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .mobile-link:hover,
    .mobile-link:active {
        color: var(--primary-color);
    }

    .mobile-dropdown-trigger {
        padding-right: 0;
    }

    .mobile-dropdown-trigger :global(.chevron) {
        color: var(--text-light);
        transition:
            transform 0.3s ease,
            color 0.2s ease;
    }

    .mobile-dropdown-trigger:hover :global(.chevron) {
        color: var(--primary-color);
    }

    .mobile-submenu {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        list-style: none;
        margin: 0;
        padding: 0;
        background: var(--secondary-light);
        border-radius: var(--radius-sm);
        margin-bottom: 0.5rem;
    }

    .mobile-submenu.open {
        max-height: 500px;
    }

    .mobile-sublink {
        display: block;
        padding: 1rem 1.25rem;
        color: var(--text-color);
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
        transition:
            background 0.2s ease,
            color 0.2s ease;
        border-left: 3px solid transparent;
    }

    .mobile-sublink:hover,
    .mobile-sublink:active {
        background: rgba(0, 0, 0, 0.05);
        color: var(--primary-color);
        border-left-color: var(--primary-color);
    }

    .mobile-cta {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1.25rem 1.5rem;
        background: var(--white);
        border-top: 1px solid var(--border-light);
        box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08);
    }

    .mobile-cta :global(.btn) {
        width: 100%;
        font-size: 1rem;
        padding: 1rem 1.5rem;
    }

    /* Responsive */
    @media (max-width: 1024px) {
        .nav-list,
        .nav-cta {
            display: none;
        }

        .nav-toggle {
            display: block;
        }

        .mobile-menu,
        .mobile-overlay {
            display: block;
        }
    }
</style>
