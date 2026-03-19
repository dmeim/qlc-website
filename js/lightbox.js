// ---- Lightbox / Fullscreen Image Viewer ----
(function () {
  // Inject lightbox markup
  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.innerHTML =
    '<button class="lightbox__close" aria-label="Close">&times;</button>' +
    '<button class="lightbox__arrow lightbox__arrow--prev" aria-label="Previous">&#8249;</button>' +
    '<button class="lightbox__arrow lightbox__arrow--next" aria-label="Next">&#8250;</button>' +
    '<div class="lightbox__content">' +
      '<img class="lightbox__img" src="" alt="">' +
      '<p class="lightbox__caption"></p>' +
    '</div>';
  document.body.appendChild(overlay);

  var img = overlay.querySelector('.lightbox__img');
  var caption = overlay.querySelector('.lightbox__caption');
  var btnClose = overlay.querySelector('.lightbox__close');
  var btnPrev = overlay.querySelector('.lightbox__arrow--prev');
  var btnNext = overlay.querySelector('.lightbox__arrow--next');

  var items = [];   // [{src, alt, caption}]
  var index = 0;

  function show(i) {
    index = i;
    var item = items[index];
    img.src = item.src;
    img.alt = item.alt;
    if (item.caption) {
      caption.textContent = item.caption;
      caption.style.display = '';
    } else {
      caption.textContent = '';
      caption.style.display = 'none';
    }
    btnPrev.style.display = items.length > 1 ? '' : 'none';
    btnNext.style.display = items.length > 1 ? '' : 'none';
  }

  function open(itemList, startIndex) {
    items = itemList;
    show(startIndex);
    overlay.classList.add('lightbox--open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('lightbox--open');
    document.body.style.overflow = '';
    img.src = '';
  }

  function prev() {
    show((index - 1 + items.length) % items.length);
  }

  function next() {
    show((index + 1) % items.length);
  }

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('lightbox--open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  // Expose globally so page scripts can call it
  window.lightbox = { open: open };
})();
