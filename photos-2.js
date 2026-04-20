const carousels = document.querySelectorAll('.map-placeholder');

carousels.forEach(container => {
  const slides = container.querySelectorAll('.carousel-slide');
  const prevBtn = container.querySelector('.carousel-btn.prev');
  const nextBtn = container.querySelector('.carousel-btn.next');

  let current = 0;

  function show(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
  }

  show(current);

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    show(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    show(current);
  });
});