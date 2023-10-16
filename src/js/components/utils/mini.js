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

