
  document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.gallery-swiper', {
      // Mostrar dos slides a la vez
      slidesPerView: 2,
      spaceBetween: 20,

      // Loop continuo (elimina el espacio vacío al final)
      loop: true,
      loopFillGroupWithBlank: false,

      // Velocidad de transición (en ms)
      speed: 500,

      // Autoplay con menos delay y continúa tras interacción
      autoplay: {
        delay: 2000,            // 2 segundos entre slides
        disableOnInteraction: false
      },

      grabCursor: true,

      // Adaptación a móvil: 1 slide en pantallas < 768px
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });
  });




  document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.price-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      grabCursor: true,
      speed: 1000,         // 1 segundo de transición (antes 300ms)
      autoplay: {
        delay: 4000,       // 4 segundos entre slides (antes 1.5s)
        disableOnInteraction: false
      }
    });
  });


  