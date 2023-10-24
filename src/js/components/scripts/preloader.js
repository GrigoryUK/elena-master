import $ from 'jquery'
import scrollLock from 'scroll-lock'
import { delay } from '../utils/mini'


export default function preloaderJs() {
  preloaderHome()
}

// delay(1)
// .then(f1)
// .then(function() {return delay(2000)})
// .then(f2)


const preloaderHome = () => {

  const container = document.querySelector('.pageHome');



  if (container) {
    const preloader = $('.data-preloader');
    const preloaderWordOne = $('.data-word-one');
    const preloaderWordTwo = $('.data-word-two');


    function f1() {
      preloaderWordOne.addClass('in-active');
    }

    function f2() {
      preloader.addClass('in-active')
      preloaderWordOne.addClass('in-out');
      preloaderWordTwo.addClass('in-active')
    }

    function f3() {
      preloader.addClass('in-out');
      sessionStorage.setItem('preloader', 'preloader-id-1');
      scrollLock.enablePageScroll();
    }

    function f4() {
      $(".pageHome__slider").css("--delay", "3s");
      $(".header__content").css("--delay", "3s");
      $(".pageHome__slider--text").css("--delay", "4s");
    }

    function preloaderLong() {
      scrollLock.disablePageScroll();
      delay(500)
      .then(f4)
      .then(f1)
      .then(function() {return delay(1000)})
      .then(f2)
      .then(function() {return delay(1000)})
      .then(f3)
    }


    function preloaderShort() {
      delay(1)
      .then(f3)
    }




    if (sessionStorage.getItem('preloader') !== 'preloader-id-1') {
      preloaderLong()
    } else {
      preloaderShort()
    }





  }

}
