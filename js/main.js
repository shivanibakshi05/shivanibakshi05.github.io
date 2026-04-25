// Logo — scroll to top without adding #hero to URL
document.getElementById('logoLink').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState(null, '', '/');
});

// Nav scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

toggle.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  });
});

// Active nav highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[data-section]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// Fade-in on scroll
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-section').forEach(el => fadeObserver.observe(el));

// Scroll to top
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 500);
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Copy email
const copyBtn = document.getElementById('copyEmail');
const copyIcon = document.getElementById('copyIcon');
const checkIcon = document.getElementById('checkIcon');

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText('shivanibakshi05@gmail.com').then(() => {
    copyIcon.style.display = 'none';
    checkIcon.style.display = 'block';
    copyBtn.classList.add('copied');
    setTimeout(() => {
      copyIcon.style.display = 'block';
      checkIcon.style.display = 'none';
      copyBtn.classList.remove('copied');
    }, 2000);
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
