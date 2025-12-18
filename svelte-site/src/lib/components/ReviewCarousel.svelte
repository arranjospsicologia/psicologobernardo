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
    <div class="carousel-nav">
        <button
            class="nav-btn"
            on:click={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Review anterior"
        >
            <ChevronLeft size={20} />
        </button>

        <div class="nav-dots">
            {#each reviews as _, index}
                <button
                    class="nav-dot"
                    class:active={index === currentIndex}
                    on:click={() => goToSlide(index)}
                    aria-label={`Ir para avaliação ${index + 1}`}
                ></button>
            {/each}
        </div>

        <button
            class="nav-btn"
            on:click={nextSlide}
            disabled={currentIndex === reviews.length - 1}
            aria-label="Próximo review"
        >
            <ChevronRight size={20} />
        </button>
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

<style>
    .review-carousel {
        background: var(--white, #fff);
        border-radius: var(--radius-lg, 16px);
        padding: 1.5rem;
        box-shadow: var(--shadow-md, 0 4px 12px rgba(0, 0, 0, 0.1));
        overflow: hidden;
        position: relative;
    }

    /* Header */
    .carousel-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }

    .platform-logo {
        width: 32px;
        height: 32px;
        object-fit: contain;
    }

    .doctoralia-logo {
        width: 100px;
        height: auto;
    }

    .header-info {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .header-title {
        font-size: 0.875rem;
        color: var(--text-light, #666);
        font-weight: 500;
    }

    .rating-summary {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .rating-number {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-color, #333);
    }

    .rating-stars {
        display: flex;
        gap: 2px;
    }

    .google .rating-stars {
        color: #fbbc04;
    }

    .doctoralia .rating-stars {
        color: #0fac81;
    }

    /* Cards Container */
    .cards-container {
        position: relative;
        overflow: hidden;
        min-height: 200px;
    }

    .review-card {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        visibility: hidden;
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;
    }

    .review-card.active {
        position: relative;
        opacity: 1;
        visibility: visible;
    }

    .review-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }

    .avatar-initial {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(
            135deg,
            var(--primary-color, #08ba9c),
            var(--primary-dark, #047c82)
        );
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 1.125rem;
    }

    .author-info {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
    }

    .author-name {
        font-weight: 600;
        color: var(--text-color, #333);
        font-size: 0.9375rem;
    }

    .review-date {
        font-size: 0.75rem;
        color: var(--text-light, #666);
    }

    .review-stars {
        display: flex;
        gap: 2px;
        margin-bottom: 0.75rem;
    }

    .google .review-stars {
        color: #fbbc04;
    }

    .doctoralia .review-stars {
        color: #0fac81;
    }

    .review-text-container {
        line-height: 1.6;
    }

    .review-text {
        font-size: 0.9375rem;
        color: var(--text-color, #333);
        margin: 0;
    }

    .read-more-btn {
        background: none;
        border: none;
        color: var(--primary-color, #08ba9c);
        font-weight: 600;
        cursor: pointer;
        padding: 0;
        margin-top: 0.5rem;
        font-size: 0.875rem;
        transition: color 0.2s ease;
    }

    .read-more-btn:hover {
        color: var(--primary-dark, #047c82);
    }

    /* Navigation */
    .carousel-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(0, 0, 0, 0.08);
    }

    .nav-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 1px solid var(--primary-color, #08ba9c);
        background: transparent;
        color: var(--primary-color, #08ba9c);
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .nav-btn:hover:not(:disabled) {
        background: var(--primary-color, #08ba9c);
        color: white;
    }

    .nav-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    .nav-dots {
        display: flex;
        gap: 0.5rem;
    }

    .nav-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: none;
        background: rgba(0, 0, 0, 0.2);
        cursor: pointer;
        padding: 0;
        transition: all 0.2s ease;
    }

    .nav-dot.active {
        background: var(--primary-color, #08ba9c);
        transform: scale(1.25);
    }

    .nav-dot:hover:not(.active) {
        background: rgba(0, 0, 0, 0.4);
    }

    /* CTA Link */
    .cta-link {
        display: block;
        text-align: center;
        margin-top: 1rem;
        padding: 0.75rem 1rem;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--primary-color, #08ba9c);
        text-decoration: none;
        border-radius: var(--radius-md, 8px);
        transition: all 0.2s ease;
    }

    .cta-link:hover {
        background: rgba(8, 186, 156, 0.1);
    }

    /* Mobile-first responsive */
    @media (min-width: 768px) {
        .review-carousel {
            padding: 2rem;
        }

        .cards-container {
            min-height: 180px;
        }
    }
</style>
