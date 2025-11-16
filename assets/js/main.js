// main.min.js (readable version; minify in your build step)
(function () {
  'use strict';

  /* =======================
     MOBILE MENU
  ======================= */
  function initializeMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      }, { passive: true });
    }

    if (navClose && navMenu) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      }, { passive: true });
    }

    if (navMenu) {
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
        }, { passive: true });
      });
    }
  }
  document.addEventListener('DOMContentLoaded', initializeMobileMenu);

  /* =======================
     HEADER SHADOW (Zero forced reflows)
  ======================= */
  const headerEl = document.getElementById('header');
  let headerShadowOn = null;

  function updateHeaderShadow(scrollY) {
    if (!headerEl) return;
    const shouldShadow = scrollY >= 50;
    if (headerShadowOn !== shouldShadow) {
      headerShadowOn = shouldShadow;
      headerEl.style.boxShadow = shouldShadow
        ? '0 4px 12px rgba(0, 0, 0, 0.1)'
        : '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
  }

  // Throttled scroll listener only for header shadow
  let ticking = false;
  let lastScrollY = 0;
  function onScroll() {
    lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        updateHeaderShadow(lastScrollY);
        ticking = false;
      });
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* =======================
     ACTIVE LINK ON CLICK (No scroll spy)
  ======================= */
  function initializeNavLinkHighlight() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Remove active from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active to clicked link
        this.classList.add('active');
      }, { passive: true });
    });
  }
  document.addEventListener('DOMContentLoaded', initializeNavLinkHighlight);

  /* =======================
     FAQ ACCORDION
  ======================= */
  function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          faqItems.forEach(faq => faq.classList.remove('active'));
          if (!isActive) item.classList.add('active');
        });
      }
    });
  }
  document.addEventListener('DOMContentLoaded', initializeFAQ);

  /* =======================
     SMOOTH SCROLL (click-time only, OK)
  ======================= */
  // Use fixed header height (4.5rem = 72px) to avoid forced reflow on load
  let cachedHeaderHeight = 72;
  function initializeSmoothScroll() {
    const header = document.getElementById('header');

    let smoothScrollResizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(smoothScrollResizeTimer);
      smoothScrollResizeTimer = setTimeout(() => {
        requestAnimationFrame(() => {
          if (header) cachedHeaderHeight = header.offsetHeight;
        });
      }, 250);
    }, { passive: true });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          requestAnimationFrame(() => {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - cachedHeaderHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          });
          return; // prevent double scroll
        }
      });
    });
  }
  document.addEventListener('DOMContentLoaded', initializeSmoothScroll);

  /* =======================
     SCROLL REVEAL (IO - OK)
  ======================= */
  function initializeScrollReveal() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.feature-card, .servico-card, .projeto-card, .faq-item, .info-card');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
  document.addEventListener('DOMContentLoaded', initializeScrollReveal);

  /* =======================
     WHATSAPP TRACKING
  ======================= */
  function initializeWhatsAppTracking() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'click', {
            'event_category': 'WhatsApp',
            'event_label': 'Contato via WhatsApp'
          });
        }
        try { console.log('WhatsApp click tracked'); } catch (e) {}
      }, { passive: true });
    });
  }
  document.addEventListener('DOMContentLoaded', initializeWhatsAppTracking);

  /* =======================
     LAZY LOADING (IO)
  ======================= */
  function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => imageObserver.observe(img));
    }
  }
  document.addEventListener('DOMContentLoaded', initializeLazyLoading);

  /* =======================
     HERO IMAGE FADE-IN (LCP optimization)
  ======================= */
  function initializeHeroImageFadeIn() {
    const heroImg = document.querySelector('.hero-img-lazy');
    if (heroImg) {
      if (heroImg.complete) {
        heroImg.classList.add('loaded');
      } else {
        heroImg.addEventListener('load', function() {
          heroImg.classList.add('loaded');
        });
      }
    }
  }
  document.addEventListener('DOMContentLoaded', initializeHeroImageFadeIn);

  /* =======================
     COPYRIGHT YEAR
  ======================= */
  function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.footer-bottom p');
    copyrightElements.forEach(el => {
      el.innerHTML = el.innerHTML.replace(/\b20\d{2}\b/, currentYear.toString());
    });
  }
  document.addEventListener('DOMContentLoaded', updateCopyrightYear);

  /* =======================
     SOCIAL SHARE
  ======================= */
  function initializeSocialShare() {
    const currentUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    const shareContainer = document.querySelector('.post-share');
    if (!shareContainer) return;

    const facebookBtn = shareContainer.querySelector('a[aria-label*="Facebook"]');
    const twitterBtn = shareContainer.querySelector('a[aria-label*="Twitter"]');
    const linkedinBtn = shareContainer.querySelector('a[aria-label*="LinkedIn"]');
    const whatsappBtn = shareContainer.querySelector('a[aria-label*="WhatsApp"]');

    if (facebookBtn) facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    if (twitterBtn)  twitterBtn.href  = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${pageTitle}`;
    if (linkedinBtn) linkedinBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
    if (whatsappBtn) whatsappBtn.href = `https://wa.me/?text=${pageTitle}%20-%20${currentUrl}`;
  }
  document.addEventListener('DOMContentLoaded', initializeSocialShare);

  /* =======================
     CONSULTÓRIO CAROUSEL
  ======================= */
  function initializeConsultorioCarousel() {
    const carousel = document.querySelector('.consultorio-carousel');
    if (!carousel) return;
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const dots = carousel.querySelectorAll('.carousel-dot');

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }
    function nextSlide() { currentSlide = (currentSlide + 1) % totalSlides; updateCarousel(); }
    function prevSlide() { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateCarousel(); }
    function goToSlide(index) { currentSlide = index; updateCarousel(); }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide, { passive: true });
    if (prevBtn) prevBtn.addEventListener('click', prevSlide, { passive: true });
    dots.forEach((dot, index) => dot.addEventListener('click', () => goToSlide(index), { passive: true }));

    updateCarousel();

    document.addEventListener('keydown', (e) => {
      const rect = carousel.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        if (e.key === 'ArrowLeft') prevSlide();
        else if (e.key === 'ArrowRight') nextSlide();
      }
    });

    let touchStartX = 0, touchEndX = 0;
    carousel.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    carousel.addEventListener('touchend',   (e) => { touchEndX   = e.changedTouches[0].screenX; handleSwipe(); }, { passive: true });
    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) nextSlide();
      if (touchEndX > touchStartX + swipeThreshold) prevSlide();
    }
  }
  document.addEventListener('DOMContentLoaded', initializeConsultorioCarousel);

  /* =======================
     COOKIE BANNER
  ======================= */
  function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    if (!banner || !acceptBtn) return;

    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setTimeout(() => { banner.classList.add('show'); }, 1000);
    }

    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.classList.remove('show');
      setTimeout(() => { banner.style.display = 'none'; }, 300);
    }, { passive: true });
  }
  document.addEventListener('DOMContentLoaded', initCookieBanner);

  /* =======================
     BLOG FILTER DROPDOWN
  ======================= */
  function initializeBlogFilterDropdown() {
    const dropdownBtn = document.getElementById('filter-dropdown-btn');
    const dropdownMenu = document.getElementById('filter-dropdown-menu');
    const filterOptions = document.querySelectorAll('.filter-option');
    const currentFilterLabel = document.getElementById('current-filter-label');
    const blogCards = document.querySelectorAll('.blog-card');
    if (!dropdownBtn || !dropdownMenu || !filterOptions.length) return;

    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownBtn.classList.toggle('active');
      dropdownMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownBtn.classList.remove('active');
        dropdownMenu.classList.remove('active');
      }
    });

    filterOptions.forEach(option => {
      option.addEventListener('click', () => {
        const selectedTag = option.getAttribute('data-tag');
        const selectedLabel = option.querySelector('span').textContent;

        filterOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        currentFilterLabel.textContent = selectedLabel;
        dropdownBtn.classList.remove('active');
        dropdownMenu.classList.remove('active');

        blogCards.forEach(card => {
          const cardTags = card.getAttribute('data-tags');
          if (selectedTag === 'todos') {
            card.style.display = 'block';
          } else {
            card.style.display = (cardTags && cardTags.includes(selectedTag)) ? 'block' : 'none';
          }
        });

        setTimeout(() => {
          blogCards.forEach(card => {
            if (card.style.display === 'block') {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }
          });
        }, 50);

        const blogGrid = document.querySelector('.blog-grid');
        if (blogGrid) {
          requestAnimationFrame(() => {
            const headerHeight = cachedHeaderHeight || (document.getElementById('header') ? document.getElementById('header').offsetHeight : 0);
            const targetPosition = blogGrid.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          });
        }

        if (typeof window.blogPagination !== 'undefined') {
          window.blogPagination.refresh();
        }
      });
    });

    blogCards.forEach(card => {
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });

    window.getActiveFilter = () => {
      const activeOption = document.querySelector('.filter-option.active');
      return activeOption ? activeOption.getAttribute('data-tag') : 'todos';
    };
  }
  document.addEventListener('DOMContentLoaded', initializeBlogFilterDropdown);

  /* =======================
     BLOG SEARCH
  ======================= */
  function initializeBlogSearch() {
    const searchInput = document.getElementById('blog-search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    const searchResultsCount = document.getElementById('search-results-count');
    const blogCards = document.querySelectorAll('.blog-card');
    if (!searchInput || !clearSearchBtn || !searchResultsCount) return;

    let searchTerm = '';

    function performSearch() {
      searchTerm = searchInput.value.toLowerCase().trim();
      if (searchTerm === '') {
        clearSearchBtn.style.display = 'none';
        searchResultsCount.style.display = 'none';
        const allPostsOption = document.querySelector('.filter-option[data-tag="todos"]');
        if (allPostsOption) allPostsOption.click();
        return;
      }

      clearSearchBtn.style.display = 'flex';
      let matchCount = 0;

      blogCards.forEach(card => {
        const title = (card.getAttribute('data-title') || '').toLowerCase();
        const matches = title.includes(searchTerm);
        if (matches) {
          card.setAttribute('data-search-match', 'true');
          matchCount++;
        } else {
          card.setAttribute('data-search-match', 'false');
        }
      });

      searchResultsCount.style.display = 'block';
      searchResultsCount.textContent = matchCount === 0
        ? 'Nenhum post encontrado'
        : `${matchCount} post${matchCount > 1 ? 's' : ''} encontrado${matchCount > 1 ? 's' : ''}`;

      if (window.blogPagination) window.blogPagination.refresh();
    }

    function clearSearch() {
      searchInput.value = '';
      searchTerm = '';
      clearSearchBtn.style.display = 'none';
      searchResultsCount.style.display = 'none';
      blogCards.forEach(card => { card.removeAttribute('data-search-match'); });
      if (window.blogPagination) window.blogPagination.refresh();
    }

    searchInput.addEventListener('input', performSearch);
    searchInput.addEventListener('keyup', (e) => { if (e.key === 'Escape') clearSearch(); });
    clearSearchBtn.addEventListener('click', clearSearch);

    window.blogSearch = {
      isActive: () => searchTerm !== '',
      getTerm: () => searchTerm
    };
  }
  document.addEventListener('DOMContentLoaded', initializeBlogSearch);

  /* =======================
     BLOG PAGINATION
  ======================= */
  function initializeBlogPagination() {
    const blogCards = document.querySelectorAll('.blog-card');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    const paginationNumbersContainer = document.getElementById('pagination-numbers');
    const blogPaginationContainer = document.getElementById('blog-pagination');

    if (!blogCards.length || !prevButton || !nextButton || !blogPaginationContainer) return;

    let currentPage = 1;
    const postsPerPage = 6;

    function getVisibleCards() {
      const selectedTag = window.getActiveFilter ? window.getActiveFilter() : 'todos';
      const isSearchActive = window.blogSearch && window.blogSearch.isActive();

      return Array.from(blogCards).filter(card => {
        if (isSearchActive) {
          const searchMatch = card.getAttribute('data-search-match');
          if (searchMatch !== 'true') return false;
        }
        if (selectedTag === 'todos') return true;
        const cardTags = card.getAttribute('data-tags');
        return cardTags && cardTags.includes(selectedTag);
      });
    }

    function generatePaginationButtons(totalPages) {
      if (totalPages <= 1) return [];
      const buttons = [];
      const showEllipsis = totalPages > 6;

      if (!showEllipsis) {
        for (let i = 1; i <= totalPages; i++) buttons.push(i);
      } else {
        buttons.push(1);
        if (currentPage > 3) buttons.push('...');
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
          if (!buttons.includes(i)) buttons.push(i);
        }
        if (currentPage < totalPages - 2) buttons.push('...');
        if (totalPages > 1) buttons.push(totalPages);
      }
      return buttons;
    }

    function updatePaginationButtons(totalPages) {
      prevButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage === totalPages || totalPages === 0;

      const pageButtons = generatePaginationButtons(totalPages);
      paginationNumbersContainer.innerHTML = '';

      pageButtons.forEach(item => {
        if (item === '...') {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'pagination-ellipsis';
          ellipsis.textContent = '...';
          paginationNumbersContainer.appendChild(ellipsis);
        } else {
          const button = document.createElement('button');
          button.className = 'pagination-number';
          button.setAttribute('data-page', item);
          button.textContent = item;
          if (item === currentPage) button.classList.add('active');
          button.addEventListener('click', () => showPage(item), { passive: true });
          paginationNumbersContainer.appendChild(button);
        }
      });

      blogPaginationContainer.style.display = (totalPages <= 1) ? 'none' : 'flex';
    }

    function showPage(page, shouldScroll = true) {
      const visibleCards = getVisibleCards();
      const totalPages = Math.ceil(visibleCards.length / postsPerPage);

      if (page < 1) page = 1;
      if (page > totalPages) page = totalPages;
      if (totalPages === 0) page = 1;
      currentPage = page;

      blogCards.forEach(card => { card.style.display = 'none'; });

      const start = (page - 1) * postsPerPage;
      const end = start + postsPerPage;

      for (let i = start; i < end && i < visibleCards.length; i++) {
        const card = visibleCards[i];
        card.style.display = 'flex';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }

      updatePaginationButtons(totalPages);

      if (shouldScroll) {
        const blogSection = document.querySelector('.blog-section');
        if (blogSection) {
          requestAnimationFrame(() => {
            const headerHeight = cachedHeaderHeight || (document.getElementById('header') ? document.getElementById('header').offsetHeight : 0);
            const targetPosition = blogSection.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          });
        }
      }
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => { if (currentPage > 1) showPage(currentPage - 1); }, { passive: true });
    }
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        const visibleCards = getVisibleCards();
        const totalPages = Math.ceil(visibleCards.length / postsPerPage);
        if (currentPage < totalPages) showPage(currentPage + 1);
      }, { passive: true });
    }

    showPage(1, false);

    window.blogPagination = {
      goToPage: showPage,
      refresh: () => showPage(1, false),
      currentPage: () => currentPage
    };
  }
  document.addEventListener('DOMContentLoaded', initializeBlogPagination);

  /* =======================
     REVIEWS (lazy via IO)
  ======================= */
  function initializeReviewsCarousel() {
    fetch('assets/data/reviews.json')
      .then(res => res.json())
      .then(reviews => {
        const container = document.getElementById('reviews-container');
        if (!container) return;

        const getReviewsPerPage = () => window.innerWidth > 768 ? 2 : 1;
        let currentIndex = 0;
        let reviewsPerPage = getReviewsPerPage();

        const widgetHTML = `
          <div class="reviews-widget">
            <div class="reviews-widget-header">
              <img src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="Google" class="google-logo">
              <span class="reviews-title">Avaliações</span>
              <div class="reviews-rating">
                <span class="rating-number">5.0</span>
                <div class="rating-stars">★★★★★</div>
              </div>
            </div>
            <div class="reviews-carousel" id="reviews-carousel"></div>
            <div class="reviews-nav">
              <button class="review-nav-btn" id="review-prev" aria-label="Review anterior"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></button>
              <div class="review-indicators" id="review-indicators"></div>
              <button class="review-nav-btn" id="review-next" aria-label="Próximo review"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg></button>
            </div>
            <a href="https://www.google.com/maps/place/Psic%C3%B3logo+-+Bernardo+Carielo+Macedo+de+Oliveira+Pinto/@-20.2796937,-40.3010992,17z/data=!4m17!1m8!3m7!1s0xb8171b61b8e13b:0x5bab77942d3119e5!2sPsic%C3%B3logo+-+Bernardo+Carielo+Macedo+de+Oliveira+Pinto!8m2!3d-20.2798925!4d-40.3009252!10e5!16s%2Fg%2F11hdqw304k!3m7!1s0xb8171b61b8e13b:0x5bab77942d3119e5!8m2!3d-20.2798925!4d-40.3009252!9m1!1b1!16s%2Fg%2F11hdqw304k?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
               class="reviews-cta-link" target="_blank" rel="noopener">Ver todas as 20+ avaliações</a>
          </div>
        `;
        container.innerHTML = widgetHTML;

        const carousel = document.getElementById('reviews-carousel');
        const indicators = document.getElementById('review-indicators');
        const prevBtn = document.getElementById('review-prev');
        const nextBtn = document.getElementById('review-next');

        function truncateText(text, maxLength = 150) {
          if (text.length <= maxLength) return { truncated: text, isTruncated: false };
          const truncated = text.substring(0, maxLength).trim() + '...';
          return { truncated, isTruncated: true, full: text };
        }

        function renderReviews() {
          reviewsPerPage = getReviewsPerPage();
          carousel.innerHTML = '';
          const gapSize = 1.5; // rem
          const cardWidth = reviewsPerPage === 1 ? '100%' : `calc((100% - ${gapSize}rem) / ${reviewsPerPage})`;

          reviews.forEach((review, index) => {
            const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
            const { truncated, isTruncated, full } = truncateText(review.text);
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';
            reviewCard.style.flex = `0 0 ${cardWidth}`;
            reviewCard.style.maxWidth = cardWidth;
            reviewCard.innerHTML = `
              <div class="review-header">
                <img src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="Google" class="review-google-icon">
                <img src="${review.photo}" alt="${review.name}" class="review-avatar" onerror="this.src='https://via.placeholder.com/40'">
                <div class="review-author">
                  <div class="review-name">${review.name}</div>
                  <div class="review-date">${review.date}</div>
                </div>
              </div>
              <div class="review-stars">${stars}</div>
              <div class="review-text-container">
                <p class="review-text">${truncated}</p>
                ${isTruncated ? '<button class="read-more-btn" data-expanded="false">Leia mais</button>' : ''}
              </div>
            `;
            if (isTruncated) {
              const readMoreBtn = reviewCard.querySelector('.read-more-btn');
              const textElement = reviewCard.querySelector('.review-text');
              readMoreBtn.addEventListener('click', () => {
                const isExpanded = readMoreBtn.getAttribute('data-expanded') === 'true';
                if (isExpanded) {
                  textElement.textContent = truncated;
                  readMoreBtn.textContent = 'Leia mais';
                  readMoreBtn.setAttribute('data-expanded', 'false');
                } else {
                  textElement.textContent = full;
                  readMoreBtn.textContent = 'Leia menos';
                  readMoreBtn.setAttribute('data-expanded', 'true');
                }
              });
            }
            carousel.appendChild(reviewCard);
          });
          updateCarousel();
        }

        function updateCarousel() {
          const offset = -(currentIndex * 100);
          carousel.style.transform = `translateX(${offset}%)`;
          updateButtons();
          updateIndicators();
        }

        function updateButtons() {
          const totalPages = Math.ceil(reviews.length / reviewsPerPage);
          prevBtn.disabled = currentIndex === 0;
          nextBtn.disabled = currentIndex >= totalPages - 1;
        }

        function updateIndicators() {
          const totalPages = Math.ceil(reviews.length / reviewsPerPage);
          indicators.innerHTML = '';
          for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('span');
            dot.className = 'review-dot' + (i === currentIndex ? ' active' : '');
            dot.setAttribute('aria-label', `Página ${i + 1}`);
            indicators.appendChild(dot);
          }
        }

        function goToPage(pageIndex) {
          const totalPages = Math.ceil(reviews.length / reviewsPerPage);
          if (pageIndex >= 0 && pageIndex < totalPages) {
            currentIndex = pageIndex;
            updateCarousel();
          }
        }

        prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; updateCarousel(); } }, { passive: true });
        nextBtn.addEventListener('click', () => {
          const totalPages = Math.ceil(reviews.length / reviewsPerPage);
          if (currentIndex < totalPages - 1) { currentIndex++; updateCarousel(); }
        }, { passive: true });

        let resizeTimeout;
        window.addEventListener('resize', () => {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            const newPerPage = getReviewsPerPage();
            if (newPerPage !== reviewsPerPage) {
              currentIndex = 0;
              renderReviews();
            }
          }, 250);
        }, { passive: true });

        document.addEventListener('keydown', (e) => {
          if (!container) return;
          const rect = container.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            if (e.key === 'ArrowLeft') prevBtn.click();
            else if (e.key === 'ArrowRight') nextBtn.click();
          }
        });

        let touchStartX = 0, touchEndX = 0;
        carousel.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        carousel.addEventListener('touchend',   (e) => { touchEndX   = e.changedTouches[0].screenX; handleSwipe(); }, { passive: true });
        function handleSwipe() {
          const swipeThreshold = 50;
          if (touchEndX < touchStartX - swipeThreshold) nextBtn.click();
          if (touchEndX > touchStartX + swipeThreshold) prevBtn.click();
        }

        renderReviews();
      })
      .catch(err => {
        console.error('Erro ao carregar avaliações:', err);
        const container = document.getElementById('reviews-container');
        if (container) {
          container.innerHTML = '<p style="text-align: center; color: #666;">Erro ao carregar avaliações. Tente novamente mais tarde.</p>';
        }
      });
  }
  document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.getElementById('reviews-container');
    if (!reviewsContainer) return;
    const reviewsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initializeReviewsCarousel();
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px' });
    reviewsObserver.observe(reviewsContainer);
  });

  /* =======================
     DOCTORALIA (lazy via IO)
  ======================= */
  function initializeDoctorialiaCarousel() {
    fetch('assets/data/doctoralia-reviews.json')
      .then(res => res.json())
      .then(reviews => {
        const container = document.getElementById('doctoralia-reviews-container');
        if (!container) return;

        let currentIndex = 0;
        const reviewsPerPage = 1;

        const widgetHTML = `
          <div class="doctoralia-widget">
            <div class="doctoralia-widget-header">
              <img src="assets/images/doctoralia-logo.png" alt="Doctoralia" class="doctoralia-logo-small" width="100" height="100">
              <div class="doctoralia-header-info">
                <span class="doctoralia-title">Avaliações</span>
                <div class="doctoralia-rating-summary">
                  <span class="rating-number">5.0</span>
                  <div class="rating-stars-green">★★★★★</div>
                </div>
              </div>
            </div>
            <div class="doctoralia-carousel" id="doctoralia-carousel"></div>
            <div class="doctoralia-nav">
              <button class="doctoralia-nav-btn" id="doctoralia-prev" aria-label="Review anterior"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></button>
              <div class="doctoralia-indicators" id="doctoralia-indicators"></div>
              <button class="doctoralia-nav-btn" id="doctoralia-next" aria-label="Próximo review"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg></button>
            </div>
            <a href="https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria?utm_id=379142&utm_source=widget-doctor-379142&utm_medium=big-with-opinion&utm_campaign=&utm_content=#profile-reviews"
               class="doctoralia-cta-link" target="_blank" rel="noopener">Ver todas as 60+ avaliações</a>
          </div>
        `;
        container.innerHTML = widgetHTML;

        const carousel = document.getElementById('doctoralia-carousel');
        const indicators = document.getElementById('doctoralia-indicators');
        const prevBtn = document.getElementById('doctoralia-prev');
        const nextBtn = document.getElementById('doctoralia-next');

        function truncateText(text, maxLength = 150) {
          if (text.length <= maxLength) return { truncated: text, isTruncated: false };
          const truncated = text.substring(0, maxLength).trim() + '...';
          return { truncated, isTruncated: true, full: text };
        }

        function renderReviews() {
          carousel.innerHTML = '';
          reviews.forEach((review, index) => {
            const stars = '★'.repeat(review.rating);
            const { truncated, isTruncated, full } = truncateText(review.text);
            const reviewCard = document.createElement('div');
            reviewCard.className = 'doctoralia-review-card';
            reviewCard.style.display = index === 0 ? 'flex' : 'none';
            reviewCard.innerHTML = `
              <div class="doctoralia-review-header">
                <div class="doctoralia-avatar">${review.initial}</div>
                <div class="doctoralia-author">
                  <div class="doctoralia-name">${review.name}</div>
                  <div class="doctoralia-date">${review.date}</div>
                </div>
              </div>
              <div class="doctoralia-stars-green">${stars}</div>
              <div class="doctoralia-text-container">
                <p class="doctoralia-text">${truncated}</p>
                ${isTruncated ? '<button class="doctoralia-read-more-btn" data-expanded="false">Leia mais</button>' : ''}
              </div>
            `;
            if (isTruncated) {
              const readMoreBtn = reviewCard.querySelector('.doctoralia-read-more-btn');
              const textElement = reviewCard.querySelector('.doctoralia-text');
              readMoreBtn.addEventListener('click', () => {
                const isExpanded = readMoreBtn.getAttribute('data-expanded') === 'true';
                if (isExpanded) {
                  textElement.textContent = truncated;
                  readMoreBtn.textContent = 'Leia mais';
                  readMoreBtn.setAttribute('data-expanded', 'false');
                } else {
                  textElement.textContent = full;
                  readMoreBtn.textContent = 'Leia menos';
                  readMoreBtn.setAttribute('data-expanded', 'true');
                }
              });
            }
            carousel.appendChild(reviewCard);
          });
          updateCarousel();
        }

        function updateCarousel() {
          const cards = carousel.querySelectorAll('.doctoralia-review-card');
          cards.forEach((card, index) => { card.style.display = index === currentIndex ? 'flex' : 'none'; });
          updateButtons();
          updateIndicators();
        }

        function updateButtons() {
          const totalPages = Math.ceil(reviews.length / reviewsPerPage);
          prevBtn.disabled = currentIndex === 0;
          nextBtn.disabled = currentIndex >= totalPages - 1;
        }

        function updateIndicators() {
          const totalPages = Math.ceil(reviews.length / reviewsPerPage);
          indicators.innerHTML = '';
          for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('span');
            dot.className = 'doctoralia-dot' + (i === currentIndex ? ' active' : '');
            dot.setAttribute('aria-label', `Página ${i + 1}`);
            indicators.appendChild(dot);
          }
        }

        prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; updateCarousel(); } }, { passive: true });
        nextBtn.addEventListener('click', () => {
          const totalPages = Math.ceil(reviews.length / reviewsPerPage);
          if (currentIndex < totalPages - 1) { currentIndex++; updateCarousel(); }
        }, { passive: true });

        document.addEventListener('keydown', (e) => {
          if (!container) return;
          const rect = container.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            if (e.key === 'ArrowLeft') prevBtn.click();
            else if (e.key === 'ArrowRight') nextBtn.click();
          }
        });

        let touchStartX = 0, touchEndX = 0;
        carousel.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        carousel.addEventListener('touchend',   (e) => { touchEndX   = e.changedTouches[0].screenX; handleSwipe(); }, { passive: true });
        function handleSwipe() {
          const swipeThreshold = 50;
          if (touchEndX < touchStartX - swipeThreshold) nextBtn.click();
          if (touchEndX > touchStartX + swipeThreshold) prevBtn.click();
        }

        renderReviews();
      })
      .catch(err => {
        console.error('Erro ao carregar avaliações do Doctoralia:', err);
        const container = document.getElementById('doctoralia-reviews-container');
        if (container) {
          container.innerHTML = '<p style="text-align: center; color: #666;">Erro ao carregar avaliações. Tente novamente mais tarde.</p>';
        }
      });
  }
  document.addEventListener('DOMContentLoaded', () => {
    const doctorialiaContainer = document.getElementById('doctoralia-reviews-container');
    if (!doctorialiaContainer) return;
    const doctorialiaObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initializeDoctorialiaCarousel();
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px' });
    doctorialiaObserver.observe(doctorialiaContainer);
  });

  /* =======================
     BLOG IMAGE FALLBACK
  ======================= */
  function initializeBlogImageFallback() {
    const blogImages = document.querySelectorAll('.blog-image img, .post-featured-image img, .blog-card img');
    blogImages.forEach(img => {
      img.addEventListener('error', function () {
        const isInPostsFolder = window.location.pathname.includes('/posts/');
        const placeholderPath = isInPostsFolder
          ? '../assets/images/blog-image-placeholder.jpg'
          : 'assets/images/blog-image-placeholder.jpg';
        if (!this.src.includes('blog-image-placeholder.jpg')) {
          this.src = placeholderPath;
          this.alt = 'Imagem de postagem do blog';
        }
      });
    });
  }
  document.addEventListener('DOMContentLoaded', initializeBlogImageFallback);

})();
