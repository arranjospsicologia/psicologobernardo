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
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Fecha todos os itens
    faqItems.forEach(faq => faq.classList.remove('active'));
    
    // Abre o item clicado se não estava ativo
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// ========== SMOOTH SCROLL ==========
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

// ========== SCROLL REVEAL ANIMATION ==========
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

// ========== WHATSAPP ANALYTICS ==========
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

// ========== LAZY LOADING IMAGES ==========
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

// ========== COPYRIGHT YEAR ==========
const currentYear = new Date().getFullYear();
const copyrightElements = document.querySelectorAll('.footer-bottom p');
copyrightElements.forEach(el => {
  el.innerHTML = el.innerHTML.replace('2025', currentYear);
});