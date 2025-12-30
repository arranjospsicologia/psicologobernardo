<script lang="ts">
    import { ChevronLeft, ChevronRight } from "lucide-svelte";

    export let images: Array<{
        src: string;
        alt: string;
        caption: string;
    }> = [];

    let currentIndex = 0;
    let carouselElement: HTMLElement;
    let touchStartX = 0;
    let touchEndX = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    function goToSlide(index: number) {
        currentIndex = index;
    }

    function handleTouchStart(e: TouchEvent) {
        touchStartX = e.changedTouches[0].screenX;
    }

    function handleTouchEnd(e: TouchEvent) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide();
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide();
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "ArrowLeft") {
            prevSlide();
        } else if (e.key === "ArrowRight") {
            nextSlide();
        }
    }
</script>

<section
    class="image-carousel"
    bind:this={carouselElement}
    aria-label="Galeria de imagens do consultório"
>
    <!-- Main Image Container -->
    <div
        class="carousel-container"
        on:touchstart={handleTouchStart}
        on:touchend={handleTouchEnd}
        role="group"
    >
        <div class="slides-wrapper">
            {#each images as image, index}
                <div
                    class="slide"
                    class:active={index === currentIndex}
                    aria-hidden={index !== currentIndex}
                >
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <p class="slide-caption">{image.caption}</p>
                </div>
            {/each}
        </div>

        <!-- Navigation Buttons -->
        <button
            class="nav-btn nav-prev"
            on:click={prevSlide}
            aria-label="Imagem anterior"
        >
            <ChevronLeft size={24} />
        </button>

        <button
            class="nav-btn nav-next"
            on:click={nextSlide}
            aria-label="Próxima imagem"
        >
            <ChevronRight size={24} />
        </button>
    </div>

    <!-- Dots Navigation -->
    <div class="carousel-dots" aria-hidden="true">
        {#each images as _, index}
            <button
                class="carousel-dot"
                class:active={index === currentIndex}
                on:click={() => goToSlide(index)}
                aria-label={`Ir para imagem ${index + 1}`}
            ></button>
        {/each}
    </div>
</section>
