<script lang="ts">
    import { ChevronLeft, ChevronRight, Star } from "lucide-svelte";

    export let reviews: Array<{
        name: string;
        photo?: string;
        initial?: string;
        rating: number;
        date?: string;
        text: string;
    }> = [];
    export let reviewCount: string = "";

    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    const MAX_LENGTH = 150;

    let expandedStates: boolean[] = [];
    $: expandedStates = reviews.map(() => false);

    function toggleExpand(index: number) {
        expandedStates[index] = !expandedStates[index];
        expandedStates = [...expandedStates];
    }

    function nextSlide() {
        if (currentIndex < reviews.length - 1) {
            currentIndex++;
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        }
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

    function needsTruncation(text: string): boolean {
        return text.length > MAX_LENGTH;
    }

    function getTruncatedText(text: string): string {
        return text.substring(0, MAX_LENGTH).trim() + "...";
    }
</script>

<div
    class="review-carousel google"
    role="region"
    aria-label="Avaliações no Google"
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
>
    <!-- Header -->
    <div class="carousel-header">
        <img
            src="/images/google-logo.svg"
            alt="Google"
            class="platform-logo"
            width="24"
            height="24"
            loading="lazy"
            decoding="async"
        />
        <div class="header-info">
            <span class="header-title">Avaliação no Google</span>
            <div class="rating-summary">
                <span class="rating-number">5.0</span>
                <div class="rating-stars">
                    {#each Array(5) as _}
                        <Star size={14} fill="currentColor" />
                    {/each}
                </div>
                {#if reviewCount}
                    <span class="rating-count">({reviewCount} avaliações)</span>
                {/if}
            </div>
        </div>
    </div>

    <!-- Cards Container -->
    <div class="cards-container">
        {#each reviews as review, index}
            <div
                class="review-card"
                class:active={index === currentIndex}
                style="transform: translateX({(index - currentIndex) * 100}%)"
            >
                <div class="review-header">
                    {#if review.photo}
                        <img
                            src={review.photo}
                            alt={review.name}
                            class="avatar"
                            width="40"
                            height="40"
                            loading="lazy"
                            decoding="async"
                            on:error={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                            }}
                        />
                    {:else}
                        <div class="avatar-initial">
                            {review.initial || review.name.charAt(0)}
                        </div>
                    {/if}
                    <div class="author-info">
                        <span class="author-name">{review.name}</span>
                        {#if review.date}
                            <span class="review-date">{review.date}</span>
                        {/if}
                    </div>
                </div>

                <div class="review-stars">
                    {#each Array(review.rating) as _}
                        <Star size={16} fill="currentColor" />
                    {/each}
                </div>

                <div class="review-text-container">
                    {#if needsTruncation(review.text)}
                        <p class="review-text">
                            {expandedStates[index]
                                ? review.text
                                : getTruncatedText(review.text)}
                        </p>
                        <button
                            class="read-more-btn"
                            on:click={() => toggleExpand(index)}
                        >
                            {expandedStates[index] ? "Leia menos" : "Leia mais"}
                        </button>
                    {:else}
                        <p class="review-text">{review.text}</p>
                    {/if}
                </div>
            </div>
        {/each}
    </div>

    <!-- Navigation row: prev | dots | next -->
    <div class="review-nav">
        <button
            class="nav-btn nav-btn--inline"
            on:click={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Review anterior"
        >
            <ChevronLeft size={18} />
        </button>

        <div class="carousel-dots">
            {#each reviews as _, index}
                <button
                    class="carousel-dot"
                    class:active={index === currentIndex}
                    on:click={() => goToSlide(index)}
                    aria-label={`Ir para avaliação ${index + 1}`}
                ></button>
            {/each}
        </div>

        <button
            class="nav-btn nav-btn--inline"
            on:click={nextSlide}
            disabled={currentIndex === reviews.length - 1}
            aria-label="Próximo review"
        >
            <ChevronRight size={18} />
        </button>
    </div>
</div>

<style>
    .review-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        margin-top: 1.25rem;
    }

    :global(.review-carousel) .nav-btn--inline {
        position: static !important;
        transform: none !important;
        width: 36px !important;
        height: 36px !important;
        flex-shrink: 0;
    }

    :global(.review-carousel) .nav-btn--inline:hover {
        transform: scale(1.08) !important;
    }

    .review-nav :global(.carousel-dots) {
        margin-top: 0;
    }
</style>
