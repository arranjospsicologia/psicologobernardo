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
                fetchpriority="high"
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
