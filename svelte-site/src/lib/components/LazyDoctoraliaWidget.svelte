<script lang="ts">
    import { onMount } from "svelte";

    interface Props {
        doctor?: string;
        widgetType?: string;
    }

    let {
        doctor = "bernardo-carielo-macedo-de-oliveira-pinto",
        widgetType = "big_with_calendar",
    }: Props = $props();

    let widgetContainer: HTMLDivElement;
    let isLoaded = $state(false);
    let isLoading = $state(false);

    function loadWidget() {
        if (isLoaded || isLoading) return;

        isLoading = true;

        // Check if script already exists
        if (!document.getElementById("zl-widget-s")) {
            const script = document.createElement("script");
            script.id = "zl-widget-s";
            script.src = "//platform.docplanner.com/js/widget.js";
            script.onload = () => {
                isLoaded = true;
                isLoading = false;
            };
            script.onerror = () => {
                isLoading = false;
            };
            document.body.appendChild(script);
        } else {
            isLoaded = true;
            isLoading = false;
        }
    }

    onMount(() => {
        // Use Intersection Observer to lazy-load when widget comes into view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        loadWidget();
                        observer.disconnect();
                    }
                });
            },
            { rootMargin: "200px" }, // Load 200px before entering viewport
        );

        if (widgetContainer) {
            observer.observe(widgetContainer);
        }

        return () => observer.disconnect();
    });

    let doctoraliaUrl = $derived(
        `https://www.doctoralia.com.br/${doctor}/psicologo/vitoria`,
    );
</script>

<div class="widget-wrapper" bind:this={widgetContainer}>
    {#if isLoading}
        <div class="widget-loading">
            <div class="loading-spinner"></div>
            <p>Carregando calendário...</p>
        </div>
    {/if}

    <a
        id="zl-url"
        class="zl-url"
        href={doctoraliaUrl}
        rel="nofollow"
        data-zlw-doctor={doctor}
        data-zlw-type={widgetType}
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
    >
        Agendar consulta via Doctoralia
    </a>
</div>
