
import Inputmask from "inputmask"
import SmoothScroll from 'smooth-scroll'

export const maskPhone = () => {
  let tel = document.querySelectorAll('input[type="tel"]');
  let telMask = new Inputmask("+7 (999) 999-99-99");
  telMask.mask(tel);
}



export const smoothScroll = () => {

  const scroll = new SmoothScroll('a[href*="#top"]', {
    updateURL: false,
    speed: 700,
    speedAsDuration: true,
  });
}


export const getMinHeight = () => {
  const getHeight = () => {
    const headerHeight = document?.querySelector('.header').offsetHeight;
    const headerFooter = document?.querySelector('.footer').offsetHeight;

    document.querySelector(':root').style.setProperty('--min-height', `calc(100vh - ${headerHeight}px - ${headerFooter}px)`);


  }

  getHeight();

  window.addEventListener('resize', el => {
    getHeight();
  })
}

export const isInViewport = function(element) {
  const rect = element[0].getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

