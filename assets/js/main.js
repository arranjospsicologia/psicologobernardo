// ========== MENU MOBILE ==========
function initializeMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');

  // Abrir menu
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  // Fechar menu
  if (navClose && navMenu) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  // Fechar menu ao clicar em link
  if (navMenu) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    });
  }
}

// Inicializa menu mobile quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeMobileMenu);

// ========== HEADER SCROLL ==========
function scrollHeader() {
  const header = document.getElementById('header');
  if (window.scrollY >= 50) {
    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
  }
}
window.addEventListener('scroll', scrollHeader);

// ========== ACTIVE LINK ==========
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  // Remove active de todos os links primeiro
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Mapeamento de seções para links do menu
  // Define quais seções ativam qual link do menu
  const sectionToLinkMap = {
    'home': 'home',
    'sobre': 'sobre',
    'avaliacoes': 'sobre',
    'credenciais': 'sobre',
    'rodape-sobre': 'sobre',
    'consultorio': 'sobre',
    'servicos': 'servicos',
    'projetos': 'projetos',
    'faq': 'projetos',
    'contato': 'contato'
  };

  let activeSection = null;

  // Encontra a seção ativa atual
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      activeSection = sectionId;
    }
  });

  // Ativa o link correspondente baseado no mapeamento
  if (activeSection && sectionToLinkMap[activeSection]) {
    const targetLink = sectionToLinkMap[activeSection];
    const linkElement = document.querySelector(`.nav-link[href*="${targetLink}"]`);
    if (linkElement) {
      linkElement.classList.add('active');
    }
  }
}
window.addEventListener('scroll', scrollActive);

// Ativa o link correto quando a página carrega
document.addEventListener('DOMContentLoaded', scrollActive);

// ========== FAQ ACCORDION ==========
function initializeFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Fecha todos os itens
        faqItems.forEach(faq => faq.classList.remove('active'));

        // Abre o item clicado se não estava ativo
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// Inicializa FAQ quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeFAQ);

// ========== SMOOTH SCROLL ==========
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Inicializa smooth scroll quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeSmoothScroll);

// ========== SCROLL REVEAL ANIMATION ==========
function initializeScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Elementos para animar
  const animatedElements = document.querySelectorAll('.feature-card, .servico-card, .projeto-card, .faq-item, .info-card');

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Inicializa scroll reveal quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeScrollReveal);

// ========== PAGE TRANSITIONS ==========
// DESABILITADO: Transições de página removidas para evitar fade-in indesejado
// As transições estavam causando problemas de UX em navegações internas

// ========== SCROLL RESTORATION ==========
// Garante que páginas sempre comecem no topo (previne restauração automática do navegador)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Force scroll to top on page load
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// Also on DOMContentLoaded for faster response
document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});

// ========== FORM VALIDATION (se necessário) ==========
function initializeForms() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      console.log('Form data:', data);
      // Aqui você pode adicionar lógica para enviar o formulário
    });
  });
}

// Inicializa forms quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeForms);

// ========== WHATSAPP ANALYTICS ==========
function initializeWhatsAppTracking() {
  const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');

  whatsappButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Google Analytics tracking (se configurado)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          'event_category': 'WhatsApp',
          'event_label': 'Contato via WhatsApp'
        });
      }
      console.log('WhatsApp click tracked');
    });
  });
}

// Inicializa WhatsApp tracking quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeWhatsAppTracking);

// ========== LAZY LOADING IMAGES ==========
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

// Inicializa lazy loading quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// ========== COPYRIGHT YEAR ==========
function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  const copyrightElements = document.querySelectorAll('.footer-bottom p');
  copyrightElements.forEach(el => {
    el.innerHTML = el.innerHTML.replace('2025', currentYear);
  });
}

// Atualiza copyright quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', updateCopyrightYear);

// ========== SOCIAL SHARE LINKS ==========
function initializeSocialShare() {
  // Pega a URL atual e o título da página
  const currentUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  // Seleciona os botões de compartilhamento
  const shareContainer = document.querySelector('.post-share');

  if (shareContainer) {
    const facebookBtn = shareContainer.querySelector('a[aria-label*="Facebook"]');
    const twitterBtn = shareContainer.querySelector('a[aria-label*="Twitter"]');
    const linkedinBtn = shareContainer.querySelector('a[aria-label*="LinkedIn"]');
    const whatsappBtn = shareContainer.querySelector('a[aria-label*="WhatsApp"]');

    // Atualiza os links dinamicamente
    if (facebookBtn) {
      facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    }

    if (twitterBtn) {
      twitterBtn.href = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${pageTitle}`;
    }

    if (linkedinBtn) {
      linkedinBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
    }

    if (whatsappBtn) {
      whatsappBtn.href = `https://wa.me/?text=${pageTitle}%20-%20${currentUrl}`;
    }
  }
}

// Executa quando a página carregar
document.addEventListener('DOMContentLoaded', initializeSocialShare);

// ========== CONSULTORIO CAROUSEL ==========
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

  // Função para atualizar o carousel
  function updateCarousel() {
    // Remove active de todos os slides e dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Adiciona active ao slide e dot atual
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  // Próximo slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  // Slide anterior
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Ir para slide específico
  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
  }

  // Event listeners para botões
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }

  // Event listeners para dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });

  // IMPORTANTE: Inicializa o primeiro slide
  updateCarousel();

  // Navegação por teclado
  document.addEventListener('keydown', (e) => {
    // Só funciona se o carousel estiver visível na viewport
    const carouselRect = carousel.getBoundingClientRect();
    const isVisible = carouselRect.top < window.innerHeight && carouselRect.bottom > 0;

    if (isVisible) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    }
  });

  // Suporte a touch/swipe em dispositivos móveis
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50; // Mínimo de pixels para considerar um swipe

    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe para esquerda - próximo slide
      nextSlide();
    }

    if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe para direita - slide anterior
      prevSlide();
    }
  }

  // Auto-avançar (opcional - descomentado por padrão, mas pode ser ativado)
  // let autoplayInterval;
  // function startAutoplay() {
  //   autoplayInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
  // }
  // function stopAutoplay() {
  //   clearInterval(autoplayInterval);
  // }
  //
  // // Inicia autoplay
  // startAutoplay();
  //
  // // Para autoplay quando usuário interage
  // carousel.addEventListener('mouseenter', stopAutoplay);
  // carousel.addEventListener('mouseleave', startAutoplay);
  // prevBtn?.addEventListener('click', stopAutoplay);
  // nextBtn?.addEventListener('click', stopAutoplay);
  // dots.forEach(dot => dot.addEventListener('click', stopAutoplay));
}

// Inicializa o carousel quando a página carregar
document.addEventListener('DOMContentLoaded', initializeConsultorioCarousel);

// ========== COOKIE CONSENT BANNER ==========
function initCookieBanner() {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');

  if (!cookieBanner || !acceptBtn) return;

  // Verifica se o usuário já aceitou os cookies
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (!cookiesAccepted) {
    // Mostra o banner após um pequeno delay
    setTimeout(() => {
      cookieBanner.classList.add('show');
    }, 1000);
  }

  // Ao clicar em aceitar
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.remove('show');

    // Remove o banner do DOM após a animação
    setTimeout(() => {
      cookieBanner.style.display = 'none';
    }, 300);
  });
}

// Inicializa o banner de cookies quando a página carregar
document.addEventListener('DOMContentLoaded', initCookieBanner);

// ========== BLOG FILTER DROPDOWN ==========
function initializeBlogFilterDropdown() {
  const dropdownBtn = document.getElementById('filter-dropdown-btn');
  const dropdownMenu = document.getElementById('filter-dropdown-menu');
  const filterOptions = document.querySelectorAll('.filter-option');
  const currentFilterLabel = document.getElementById('current-filter-label');
  const blogCards = document.querySelectorAll('.blog-card');

  if (!dropdownBtn || !dropdownMenu || !filterOptions.length) return;

  // Toggle dropdown
  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownBtn.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownBtn.classList.remove('active');
      dropdownMenu.classList.remove('active');
    }
  });

  // Filter options click
  filterOptions.forEach(option => {
    option.addEventListener('click', () => {
      const selectedTag = option.getAttribute('data-tag');
      const selectedLabel = option.querySelector('span').textContent;

      // Update active state
      filterOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');

      // Update dropdown label
      currentFilterLabel.textContent = selectedLabel;

      // Close dropdown
      dropdownBtn.classList.remove('active');
      dropdownMenu.classList.remove('active');

      // Filter cards
      blogCards.forEach(card => {
        const cardTags = card.getAttribute('data-tags');

        if (selectedTag === 'todos') {
          card.style.display = 'block';
        } else {
          if (cardTags && cardTags.includes(selectedTag)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });

      // Animate card transitions
      setTimeout(() => {
        blogCards.forEach(card => {
          if (card.style.display === 'block') {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
        });
      }, 50);

      // Smooth scroll to blog grid
      const blogGrid = document.querySelector('.blog-grid');
      if (blogGrid) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = blogGrid.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }

      // Reset pagination to page 1
      if (typeof window.blogPagination !== 'undefined') {
        window.blogPagination.refresh();
      }
    });
  });

  // Configure CSS transitions for cards
  blogCards.forEach(card => {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  });

  // Expose globally for compatibility
  window.getActiveFilter = () => {
    const activeOption = document.querySelector('.filter-option.active');
    return activeOption ? activeOption.getAttribute('data-tag') : 'todos';
  };
}

// Initialize filter dropdown when page loads
document.addEventListener('DOMContentLoaded', initializeBlogFilterDropdown);

// ========== BLOG SEARCH ==========
function initializeBlogSearch() {
  const searchInput = document.getElementById('blog-search-input');
  const clearSearchBtn = document.getElementById('clear-search');
  const searchResultsCount = document.getElementById('search-results-count');
  const blogCards = document.querySelectorAll('.blog-card');

  if (!searchInput || !clearSearchBtn || !searchResultsCount) return;

  let searchTerm = '';

  // Função para buscar posts
  function performSearch() {
    searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
      // Limpa busca
      clearSearchBtn.style.display = 'none';
      searchResultsCount.style.display = 'none';

      // Reseta filtros para "todos"
      const allPostsOption = document.querySelector('.filter-option[data-tag="todos"]');
      if (allPostsOption) {
        allPostsOption.click();
      }
      return;
    }

    // Mostra botão de limpar
    clearSearchBtn.style.display = 'flex';

    // Filtra posts por título
    let matchCount = 0;
    blogCards.forEach(card => {
      const title = card.getAttribute('data-title') || '';
      const matches = title.includes(searchTerm);

      if (matches) {
        card.setAttribute('data-search-match', 'true');
        matchCount++;
      } else {
        card.setAttribute('data-search-match', 'false');
      }
    });

    // Mostra contagem de resultados
    searchResultsCount.style.display = 'block';
    searchResultsCount.textContent = matchCount === 0
      ? 'Nenhum post encontrado'
      : `${matchCount} post${matchCount > 1 ? 's' : ''} encontrado${matchCount > 1 ? 's' : ''}`;

    // Atualiza paginação
    if (window.blogPagination) {
      window.blogPagination.refresh();
    }
  }

  // Event listeners
  searchInput.addEventListener('input', performSearch);
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      clearSearch();
    }
  });

  clearSearchBtn.addEventListener('click', clearSearch);

  function clearSearch() {
    searchInput.value = '';
    searchTerm = '';
    clearSearchBtn.style.display = 'none';
    searchResultsCount.style.display = 'none';

    // Remove atributo de busca
    blogCards.forEach(card => {
      card.removeAttribute('data-search-match');
    });

    // Atualiza paginação
    if (window.blogPagination) {
      window.blogPagination.refresh();
    }
  }

  // Expõe função globalmente
  window.blogSearch = {
    isActive: () => searchTerm !== '',
    getTerm: () => searchTerm
  };
}

document.addEventListener('DOMContentLoaded', initializeBlogSearch);

// ========== BLOG PAGINATION ==========
function initializeBlogPagination() {
  const blogCards = document.querySelectorAll('.blog-card');
  const prevButton = document.getElementById('prev-page');
  const nextButton = document.getElementById('next-page');
  const paginationNumbersContainer = document.getElementById('pagination-numbers');
  const blogPaginationContainer = document.getElementById('blog-pagination');

  if (!blogCards.length || !prevButton || !nextButton || !blogPaginationContainer) return;

  let currentPage = 1;
  const postsPerPage = 6;

  // Function to get visible cards based on current filter and search
  function getVisibleCards() {
    const selectedTag = window.getActiveFilter ? window.getActiveFilter() : 'todos';
    const isSearchActive = window.blogSearch && window.blogSearch.isActive();

    return Array.from(blogCards).filter(card => {
      // Filtra por busca primeiro
      if (isSearchActive) {
        const searchMatch = card.getAttribute('data-search-match');
        if (searchMatch !== 'true') return false;
      }

      // Depois filtra por tag
      if (selectedTag === 'todos') return true;

      const cardTags = card.getAttribute('data-tags');
      return cardTags && cardTags.includes(selectedTag);
    });
  }

  // Função para gerar botões de paginação inteligentes
  function generatePaginationButtons(totalPages) {
    if (totalPages <= 1) return [];

    const buttons = [];
    const showEllipsis = totalPages > 6;

    if (!showEllipsis) {
      // Mostra todos os botões se houver 6 ou menos páginas
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      // Paginação inteligente com "..."
      // Sempre mostra: primeira, [...], anterior, atual, próxima, [...], última

      buttons.push(1); // Primeira página

      if (currentPage > 3) {
        buttons.push('...'); // Ellipsis antes
      }

      // Páginas ao redor da atual
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        if (!buttons.includes(i)) {
          buttons.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        buttons.push('...'); // Ellipsis depois
      }

      if (totalPages > 1) {
        buttons.push(totalPages); // Última página
      }
    }

    return buttons;
  }

  // Function to show posts for a specific page
  function showPage(page) {
    const visibleCards = getVisibleCards();
    const totalPages = Math.ceil(visibleCards.length / postsPerPage);

    // Ensure page is within bounds
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    if (totalPages === 0) page = 1;

    currentPage = page;

    // Hide all cards
    blogCards.forEach(card => {
      card.style.display = 'none';
    });

    // Show cards for current page
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;

    for (let i = start; i < end && i < visibleCards.length; i++) {
      const card = visibleCards[i];
      card.style.display = 'flex';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }

    // Update pagination buttons
    updatePaginationButtons(totalPages);

    // Scroll to top of blog section
    const blogSection = document.querySelector('.blog-section');
    if (blogSection) {
      const headerHeight = document.getElementById('header').offsetHeight;
      const targetPosition = blogSection.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Function to update pagination button states
  function updatePaginationButtons(totalPages) {
    // Update prev/next buttons
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages || totalPages === 0;

    // Gera botões inteligentes
    const pageButtons = generatePaginationButtons(totalPages);

    // Limpa container
    paginationNumbersContainer.innerHTML = '';

    // Cria novos botões
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

        if (item === currentPage) {
          button.classList.add('active');
        }

        button.addEventListener('click', () => {
          showPage(item);
        });

        paginationNumbersContainer.appendChild(button);
      }
    });

    // Hide pagination if only one page or no results
    if (totalPages <= 1) {
      blogPaginationContainer.style.display = 'none';
    } else {
      blogPaginationContainer.style.display = 'flex';
    }
  }

  // Event listeners for prev/next buttons
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        showPage(currentPage - 1);
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      const visibleCards = getVisibleCards();
      const totalPages = Math.ceil(visibleCards.length / postsPerPage);
      if (currentPage < totalPages) {
        showPage(currentPage + 1);
      }
    });
  }

  // Initialize first page
  showPage(1);

  // Expose pagination controls globally for filter integration
  window.blogPagination = {
    goToPage: showPage,
    refresh: () => showPage(1),
    currentPage: () => currentPage
  };
}

// Initialize pagination when page loads
document.addEventListener('DOMContentLoaded', initializeBlogPagination);

// ========== GOOGLE REVIEWS CAROUSEL ==========
function initializeReviewsCarousel() {
  // Carrega os reviews do JSON
  fetch('/assets/data/reviews.json')
    .then(res => res.json())
    .then(reviews => {
      const container = document.getElementById('reviews-container');
      if (!container) return;

      // Determina quantos reviews mostrar por vez (2 no desktop, 1 no mobile)
      const getReviewsPerPage = () => window.innerWidth > 768 ? 2 : 1;
      let currentIndex = 0;
      let reviewsPerPage = getReviewsPerPage();

      // Cria a estrutura do widget
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
            <button class="review-nav-btn" id="review-prev" aria-label="Review anterior">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="review-indicators" id="review-indicators"></div>
            <button class="review-nav-btn" id="review-next" aria-label="Próximo review">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      `;
      container.innerHTML = widgetHTML;

      const carousel = document.getElementById('reviews-carousel');
      const indicators = document.getElementById('review-indicators');
      const prevBtn = document.getElementById('review-prev');
      const nextBtn = document.getElementById('review-next');

      // Função para truncar texto
      function truncateText(text, maxLength = 150) {
        if (text.length <= maxLength) {
          return { truncated: text, isTruncated: false };
        }
        const truncated = text.substring(0, maxLength).trim() + '...';
        return { truncated, isTruncated: true, full: text };
      }

      // Função para renderizar os reviews
      function renderReviews() {
        reviewsPerPage = getReviewsPerPage();
        carousel.innerHTML = '';

        // Calcula a largura de cada card baseado no número de reviews por página
        // Considera o gap de 1.5rem entre os cards
        const gapSize = 1.5; // rem
        const cardWidth = reviewsPerPage === 1
          ? '100%'
          : `calc((100% - ${gapSize}rem) / ${reviewsPerPage})`;

        reviews.forEach((review, index) => {
          const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
          const { truncated, isTruncated, full } = truncateText(review.text);

          const reviewCard = document.createElement('div');
          reviewCard.className = 'review-card';
          // Define a largura do card dinamicamente baseado em reviewsPerPage
          reviewCard.style.flex = `0 0 ${cardWidth}`;
          reviewCard.style.maxWidth = cardWidth;
          reviewCard.innerHTML = `
            <div class="review-header">
              <img src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                   alt="Google"
                   class="review-google-icon">
              <img src="${review.photo}"
                   alt="${review.name}"
                   class="review-avatar"
                   onerror="this.src='https://via.placeholder.com/40'">
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

          // Adiciona event listener para o botão "Leia mais"
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

      // Função para atualizar a posição do carousel
      function updateCarousel() {
        // Desliza uma "página" por vez (reviewsPerPage reviews)
        // No desktop: 2 reviews por página, então offset = -100%, -200%, etc.
        // No mobile: 1 review por página, então offset = -100%, -200%, etc.
        const offset = -(currentIndex * 100);
        carousel.style.transform = `translateX(${offset}%)`;
        updateButtons();
        updateIndicators();
      }

      // Função para atualizar os botões
      function updateButtons() {
        const totalPages = Math.ceil(reviews.length / reviewsPerPage);
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= totalPages - 1;
      }

      // Função para criar e atualizar indicadores
      function updateIndicators() {
        const totalPages = Math.ceil(reviews.length / reviewsPerPage);
        indicators.innerHTML = '';

        for (let i = 0; i < totalPages; i++) {
          const dot = document.createElement('button');
          dot.className = 'review-dot' + (i === currentIndex ? ' active' : '');
          dot.setAttribute('aria-label', `Ir para página ${i + 1}`);
          dot.addEventListener('click', () => goToPage(i));
          indicators.appendChild(dot);
        }
      }

      // Função para ir para uma página específica
      function goToPage(pageIndex) {
        const totalPages = Math.ceil(reviews.length / reviewsPerPage);
        if (pageIndex >= 0 && pageIndex < totalPages) {
          currentIndex = pageIndex;
          updateCarousel();
        }
      }

      // Event listeners para os botões
      prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });

      nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(reviews.length / reviewsPerPage);
        if (currentIndex < totalPages - 1) {
          currentIndex++;
          updateCarousel();
        }
      });

      // Atualiza ao redimensionar a janela
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          const newReviewsPerPage = getReviewsPerPage();
          if (newReviewsPerPage !== reviewsPerPage) {
            currentIndex = 0; // Reset para o início ao mudar de layout
            renderReviews();
          }
        }, 250);
      });

      // Suporte para navegação por teclado
      document.addEventListener('keydown', (e) => {
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const isVisible = containerRect.top < window.innerHeight && containerRect.bottom > 0;

        if (isVisible) {
          if (e.key === 'ArrowLeft') {
            prevBtn.click();
          } else if (e.key === 'ArrowRight') {
            nextBtn.click();
          }
        }
      });

      // Suporte a touch/swipe
      let touchStartX = 0;
      let touchEndX = 0;

      carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });

      function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
          nextBtn.click();
        }
        if (touchEndX > touchStartX + swipeThreshold) {
          prevBtn.click();
        }
      }

      // Renderiza os reviews pela primeira vez
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

// Inicializa o carousel de reviews quando a página carregar
document.addEventListener('DOMContentLoaded', initializeReviewsCarousel);

// ========== BLOG IMAGE FALLBACK ==========
function initializeBlogImageFallback() {
  // Seleciona todas as imagens do blog
  const blogImages = document.querySelectorAll('.blog-image img, .post-featured-image img, .blog-card img');

  blogImages.forEach(img => {
    // Adiciona event listener para erro de carregamento
    img.addEventListener('error', function() {
      // Define imagem placeholder
      const isInPostsFolder = window.location.pathname.includes('/posts/');
      const placeholderPath = isInPostsFolder
        ? '../assets/images/blog-image-placeholder.jpg'
        : 'assets/images/blog-image-placeholder.jpg';

      // Verifica se já não é o placeholder para evitar loop infinito
      if (!this.src.includes('blog-image-placeholder.jpg')) {
        this.src = placeholderPath;
        this.alt = 'Imagem de postagem do blog';
      }
    });
  });
}

// Inicializa fallback de imagens do blog quando a página carregar
document.addEventListener('DOMContentLoaded', initializeBlogImageFallback);