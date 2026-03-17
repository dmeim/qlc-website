// ---- Navbar scroll effect ----
const nav = document.getElementById('nav');
const hero = document.getElementById('hero');

function updateNav() {
  if (window.scrollY > 60) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ---- Mobile menu toggle ----
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

const close = document.getElementById('nav-close');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

close.addEventListener('click', () => {
  links.classList.remove('open');
});

// Close menu when a link is clicked
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
  });
});

// ---- Hero slideshow ----
const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dot');
let current = 0;
let interval;

function goToSlide(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function nextSlide() {
  goToSlide((current + 1) % slides.length);
}

function startSlideshow() {
  interval = setInterval(nextSlide, 5000);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(interval);
    goToSlide(parseInt(dot.dataset.index));
    startSlideshow();
  });
});

startSlideshow();

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = nav.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ---- Form submission (basic) ----
const form = document.getElementById('quote-form');
form.addEventListener('submit', (e) => {
  // If no Formspree ID is configured, prevent default and show message
  if (form.action.includes('YOUR_FORM_ID')) {
    e.preventDefault();
    alert('Form backend not yet configured. Please set up Formspree or another form handler.');
  }
});
