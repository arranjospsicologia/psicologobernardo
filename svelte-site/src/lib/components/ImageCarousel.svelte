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

<style>
    .image-carousel {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        outline: none;
    }

    .carousel-container {
        position: relative;
        border-radius: var(--radius-lg, 16px);
        overflow: hidden;
        background: linear-gradient(
            135deg,
            rgba(8, 186, 156, 0.1),
            rgba(4, 124, 130, 0.05)
        );
        box-shadow: var(--shadow-lg, 0 8px 24px rgba(0, 0, 0, 0.12));
    }

    .carousel-container::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 3px;
        background: linear-gradient(
            135deg,
            var(--primary-color, #08ba9c),
            var(--primary-light, #5dd9c5)
        );
        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
    }

    .slides-wrapper {
        position: relative;
        aspect-ratio: 4/3;
        overflow: hidden;
    }

    .slide {
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    .slide.active {
        opacity: 1;
    }

    .slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .slide-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1.5rem;
        margin: 0;
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            transparent 100%
        );
        color: white;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    }

    /* Navigation Buttons */
    .nav-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.9);
        color: var(--primary-dark, #047c82);
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        transition: all 0.2s ease;
        z-index: 2;
    }

    .nav-btn:hover {
        background: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transform: translateY(-50%) scale(1.05);
    }

    .nav-prev {
        left: 1rem;
    }

    .nav-next {
        right: 1rem;
    }

    /* Dots Navigation */
    .carousel-dots {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 1.25rem;
    }

    .carousel-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: none;
        background: rgba(8, 186, 156, 0.3);
        cursor: pointer;
        padding: 0;
        transition: all 0.3s ease;
        position: relative;
    }

    .carousel-dot::before {
        content: "";
        position: absolute;
        inset: -4px;
        border-radius: 50%;
        border: 2px solid transparent;
        transition: border-color 0.3s ease;
    }

    .carousel-dot.active {
        background: var(--primary-color, #08ba9c);
        transform: scale(1.2);
    }

    .carousel-dot.active::before {
        border-color: rgba(8, 186, 156, 0.4);
    }

    .carousel-dot:hover:not(.active) {
        background: rgba(8, 186, 156, 0.5);
    }

    /* Mobile-first responsive */
    @media (max-width: 640px) {
        .nav-btn {
            width: 36px;
            height: 36px;
        }

        .nav-prev {
            left: 0.5rem;
        }

        .nav-next {
            right: 0.5rem;
        }

        .slide-caption {
            font-size: 0.875rem;
            padding: 1rem;
        }
    }

    @media (min-width: 768px) {
        .slides-wrapper {
            aspect-ratio: 16/10;
        }

        .slide-caption {
            font-size: 1.125rem;
        }
    }
</style>
