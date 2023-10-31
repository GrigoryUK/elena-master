import $ from 'jquery'
import Rellax from 'rellax'
import simpleParallax from 'simple-parallax-js'
import { isDesktop, isMobile, isTablet } from '../../functions/check-viewport'
import ScrollSmoother from "../../vendor/gsap/ScrollSmoother.min"
import ScrollTrigger from "../../vendor/gsap/ScrollTrigger.min"
import { gsap } from '../../vendor/gsap/gsap.min'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);



export default function parallaxJs() {
  // simpleParallaxJs();
  // parallaxMainGsap()
  // parallaxMainScrollGsap();
  // scrollJs()
  rellaxJs()
  ScrollSmootherJs();
  // prTablet();
}

export const rellaxJs =() => {
   if (isDesktop()) {
    const rellax = new Rellax('.rellax', {
    // center: true,
    breakpoints:[768, 1024, 1201],
      });
   }


}


export const ScrollSmootherJs = () => {

  if (isDesktop()) {
    const scroll = ScrollSmoother.create({
      wrapper: '.wrapper--anim',
      content: '.content--anim'
    })
  }
}

export const ScrollTriggerRefresh = (timer = 700) => {

  if (isDesktop()) {
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, timer)
  }
}

export const ClickRefresh = () => {
  const acButton = $('.ac-trigger');

  acButton.on('click', function() {
    ScrollTriggerRefresh(400)
  })
}

const prTablet = () => {

  if (isTablet() || isMobile()) {
    const container = document.querySelector('.pageHome');

    if (container) {
      gsap.to('.pageHome__slider--trigger', {
        scrollTrigger: {
          trigger: '.pageHome__slider--container',
          start: 'top top',
          end: 'bottom top',
          // markers:true,
          scrub: true,
        },
        y: '50%',
      });

      gsap.to('.parallaxBlock__img', {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top 100%',
          end: 'bottom 100%',
          // markers:true,
          scrub: true,
        },
        top: '0%',
      });

      gsap.to('.parallaxBlock__img', {
        scrollTrigger: {
          trigger: '.hero--new',
          start: 'top 100%',
          end: 'bottom 100%',
          // markers:true,
          scrub: true,
        },
        y: '50%',
      });

    }
  }
}



const parallaxMainGsap = () => {

  const container = document.querySelector('.amin-trigger-main');

  if (container) {
    gsap.to('.amin-trigger-anim', {
      scrollTrigger: {
        trigger: '.amin-trigger-main',
        start: 'top top',
        end: 'bottom top',
        // markers:true,
        scrub: true,
      },
      // marginTop: '-50%',
    });
  }
}

const parallaxMainScrollGsap = () => {

  const container = document.querySelector('.parallaxBlock__img');



  if (container) {

    if (isDesktop() || isTablet()) {
      gsap.to('.parallaxBlock__img', {
        scrollTrigger: {
          trigger: '.parallaxBlock__main',
          start: 'top 100%',
          end: 'bottom 100%',
          scrub: true,
        },
        top: '0%',
        scale: '1.05',
      });

      gsap.to('.parallaxBlock__img', {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          // markers:true,
          scrub: true,
        },
        y: '50%',
      });
    }

    if (isMobile()) {

      gsap.to('.hero-bg-mobile', {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top 100%',
          end: 'bottom 100%',
          // markers:true,
          scrub: 1,
        },
        top: '0%',
        scale: '1',
      });
    }







  }
}



export const simpleParallaxJs = () => {
  const images = document.querySelectorAll(".thumbnail");
  new simpleParallax(images, {
    delay: 0.75,
    transition: "cubic-bezier(0.075, 0.5, 0, 1)",
    orientation: 'down',
    scale: 1.5,
  });
}





