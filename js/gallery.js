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

// ---- Gallery image lightbox ----
var allItems = [];
var allElements = [];

document.querySelectorAll('.gallery-page__item').forEach(function (item) {
  var img = item.querySelector('img');
  var captionEl = item.querySelector('.gallery-page__caption');
  allItems.push({
    src: img.src,
    alt: img.alt,
    caption: captionEl ? captionEl.textContent : ''
  });
  allElements.push(item);
});

allElements.forEach(function (item, i) {
  item.style.cursor = 'pointer';
  item.addEventListener('click', function () {
    window.lightbox.open(allItems, i);
  });
});
