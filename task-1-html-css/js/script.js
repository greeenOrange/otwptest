const swiper = new Swiper(".practicer_swiper", {
  slidesPerView: 4,
  spaceBetween: 20,

  // Enable drag/swipe
  grabCursor: true,

  // Optional smooth feel
  freeMode: false,
  // Responsive (important)
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    }
});
