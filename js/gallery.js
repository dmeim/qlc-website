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

links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
  });
});
