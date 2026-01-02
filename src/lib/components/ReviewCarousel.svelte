<script lang="ts">
    import { ChevronLeft, ChevronRight, Star } from "lucide-svelte";

    export let platform: "google" | "doctoralia" = "google";
    export let reviews: Array<{
        name: string;
        photo?: string;
        initial?: string;
        rating: number;
        date: string;
        text: string;
    }> = [];

    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    // Truncate length for mobile-first approach
    const MAX_LENGTH = 150;

    // Track expanded state for each review
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

    // Platform-specific styling
    $: isGoogle = platform === "google";
    $: isDoctoralia = platform === "doctoralia";

    // Helper to check if text needs truncating
    function needsTruncation(text: string): boolean {
        return text.length > MAX_LENGTH;
    }

    // Helper to get truncated text
    function getTruncatedText(text: string): string {
        return text.substring(0, MAX_LENGTH).trim() + "...";
    }
</script>

<div
    class="review-carousel"
    class:google={isGoogle}
    class:doctoralia={isDoctoralia}
    role="region"
    aria-label="Avaliações de pacientes"
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
    style="position: relative;"
>
    <!-- Header -->
    <div class="carousel-header">
        {#if isGoogle}
            <img
                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                alt="Google"
                class="platform-logo"
            />
        {:else}
            <img
                src="/images/doctoralia-logo.png"
                alt="Doctoralia"
                class="platform-logo doctoralia-logo"
                width="120"
                height="24"
            />
        {/if}
        <div class="header-info">
            <span class="header-title">Avaliações</span>
            <div class="rating-summary">
                <span class="rating-number">5.0</span>
                <div class="rating-stars">
                    {#each Array(5) as _}
                        <Star size={14} fill="currentColor" />
                    {/each}
                </div>
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
                    {#if isGoogle && review.photo}
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
                                target.src = "https://via.placeholder.com/40";
                            }}
                        />
                    {:else if isDoctoralia}
                        <div class="avatar-initial">
                            {review.initial || review.name.charAt(0)}
                        </div>
                    {/if}
                    <div class="author-info">
                        <span class="author-name">{review.name}</span>
                        <span class="review-date">{review.date}</span>
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

    <!-- Navigation -->
    <button
        class="nav-btn nav-prev"
        on:click={prevSlide}
        disabled={currentIndex === 0}
        aria-label="Review anterior"
    >
        <ChevronLeft size={20} />
    </button>

    <button
        class="nav-btn nav-next"
        on:click={nextSlide}
        disabled={currentIndex === reviews.length - 1}
        aria-label="Próximo review"
    >
        <ChevronRight size={20} />
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

    <!-- CTA Link -->
    <a
        href={isGoogle
            ? "https://www.google.com/maps/place/Psic%C3%B3logo+-+Bernardo+Carielo+Macedo+de+Oliveira+Pinto/@-20.2796937,-40.3010992,17z/data=!4m17!1m8!3m7!1s0xb8171b61b8e13b:0x5bab77942d3119e5!2sPsic%C3%B3logo+-+Bernardo+Carielo+Macedo+de+Oliveira+Pinto!8m2!3d-20.2798925!4d-40.3009252!10e5!16s%2Fg%2F11hdqw304k!3m7!1s0xb8171b61b8e13b:0x5bab77942d3119e5!8m2!3d-20.2798925!4d-40.3009252!9m1!1b1!16s%2Fg%2F11hdqw304k?entry=ttu"
            : "https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria#profile-reviews"}
        class="cta-link"
        target="_blank"
        rel="noopener"
    >
        {isGoogle
            ? "Ver todas as 20+ avaliações"
            : "Ver todas as 60+ avaliações"}
    </a>
</div>
