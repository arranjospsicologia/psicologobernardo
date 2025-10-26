// ========== MENU MOBILE ==========
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Abrir menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Fechar menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Fechar menu ao clicar em link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

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

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.add('active');
    } else {
      document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', scrollActive);

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
// Fade in na carga da página
window.addEventListener('load', () => {
  document.body.classList.remove('page-loading');
  document.body.classList.add('page-loaded');
});

// Fade out antes de navegar para outra página
document.addEventListener('DOMContentLoaded', () => {
  // Adiciona classe de loading inicialmente
  document.body.classList.add('page-loading');

  // Intercepta cliques em links internos
  const internalLinks = document.querySelectorAll('a[href]');

  internalLinks.forEach(link => {
    // Ignora links externos, âncoras (#), e links do WhatsApp
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.includes('wa.me') || href.includes('mailto:')) {
      return;
    }

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.href;

      // Adiciona classe de transição
      document.body.classList.add('page-transitioning');

      // Navega após a animação
      setTimeout(() => {
        window.location.href = target;
      }, 300); // Mesmo tempo da transição CSS
    });
  });
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

  if (!carousel) return; // Sai se o carousel não existir na página

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