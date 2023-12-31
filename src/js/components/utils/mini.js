
import Inputmask from "inputmask"
import $ from 'jquery'
import SmoothScroll from 'smooth-scroll'
import { isMobile, isTablet } from '../../functions/check-viewport'

export const maskPhone = () => {
  let tel = document.querySelectorAll('input[type="tel"]');
  let telMask = new Inputmask("+7 (999) 999-99-99");
  telMask.mask(tel);
}



export const smoothScroll = () => {

  const scroll = new SmoothScroll('a[href*="#top"]', {
    updateURL: false,
    speed: 800,
    // speedAsDuration: true,
  });
}




export const getMinHeight = () => {
  const getHeight = () => {
    const header = document?.querySelector('.header');
    const footer = document?.querySelector('.footer');

    if (header || footer) {
      const headerHeight = header.offsetHeight;
      const headerFooter = footer.offsetHeight;

      document.querySelector(':root').style.setProperty('--min-height', `calc(100vh - ${headerHeight}px - ${headerFooter}px)`);
    }





  }

  getHeight();

  window.addEventListener('resize', el => {
    getHeight();
  })
}

export const scrollYJs = () => {
  window.addEventListener('scroll', (e) => {
    document.querySelector(':root').style.setProperty('--scrollTop', `${window.scrollY}px`)
  })
}

export const cookieClose = () => {
  const container = document.querySelector('.data-cookie');

  if (container) {
    const cookie = $('.data-cookie');
    const windowC = $(window)
    const closeBtn = $('.btn-close-cookieHome')


    closeBtn.on('click', function() {
        $(this).closest('.cookieHome').fadeOut();
        sessionStorage.setItem('cookie', 'cookie-id')
    })
    windowC.on('scroll', function(e) {
    if (sessionStorage.getItem('cookie') !== 'cookie-id') {
         cookie.fadeIn('slow');
    }
    })
  }

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



export const delay = (timeout) => {
  return new Promise(function(r) {
    setTimeout(r, timeout)
  })
}


export const linksRelocation = (cls) => {
  const links = $('a');
  const container = $('.site-container');

  links.on('click', function (e) {
    if ($(this).attr('target') === '_blank') return;
    if ($(this).attr('target') === 'download') return;
    let href = $(this).attr('href');
    if (href.includes('#')) return;
    if (href.includes('mailto:')) return ;
    if (href.includes('tel:')) return ;
    container.addClass(cls);
    setTimeout(function () {
      if (isMobile() || isTablet()) {
        setTimeout(() => {
          container.removeClass('exit-page-opacity')
        }, 600)
      }
      return location.href = href;
    }, 500);

    return false;
  })
}
