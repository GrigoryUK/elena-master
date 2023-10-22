  import Swiper, { EffectFade, Navigation, Pagination } from 'swiper'
  Swiper.use([Navigation, Pagination, EffectFade]);
export default function slidersJs() {
  sliderProject()
  sliderHome();
}


const sliderProject = () => {
    const container = document.querySelectorAll('.images__slider--container');

    if (container) {
      container.forEach(item => {
        const slider = item.querySelector('.images__slider');

        const swiper = new Swiper(slider, {
          slidesPerView: 'auto',
          loop: true,

          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },

          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      })

    }

}

const sliderHome = () => {
  const swiper = new Swiper('.pageHome__slider', {
    slidesPerView: '1',
    loop: true,
    effect: 'fade',
    speed: 1500,

  });
}
