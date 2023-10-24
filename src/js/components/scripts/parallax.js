import $ from 'jquery'
import { isDesktop } from '../../functions/check-viewport'
import ScrollSmoother from "../../vendor/gsap/ScrollSmoother.min"
import ScrollTrigger from "../../vendor/gsap/ScrollTrigger.min"
import { gsap } from '../../vendor/gsap/gsap.min'
import { isInViewport } from '../utils/mini'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);



export default function parallaxJs() {
  // parallaxMain()
  // parallaxMainScroll()
  // ClickRefresh();

  ScrollSmootherJs();
  parallaxMainScrollGsap();
  parallaxMainGsap();
}

export const ScrollSmootherJs = () => {

  if (isDesktop()) {
   const scroll = ScrollSmoother.create({
    wrapper: '.wrapper--home',
    content: '.content--home'
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



const parallaxMainGsap = () => {

  const container = document.querySelector('.anim-parallax-item');

  if (container) {
    gsap.to('.anim-parallax-item', {
      scrollTrigger: {
        trigger: '.anim-parallax-trigger',
        start: 'top top',
        end: 'bottom top',
        // markers:true,
        scrub: true,
      },
      y: '10%',
      scale: '1.2',
    });
  }
}

const parallaxMainScrollGsap = () => {

  const container = document.querySelector('.hero-bg');

  function scrollBySections() {
    const scrollIndicator = document.querySelector(".parallaxBlock__main");

    gsap.to(window, {
      scrollTo: {
        y: '.hero',
        offsetY: window.innerHeight * 0.5
      },
      duration: 1
    });

    gsap.to(scrollIndicator, {
      autoAlpha: 0,
      duration: 1
    });
  }

  // ScrollTrigger.create({
  //   start: "top 50%",
  //   end: "bottom 50%",
  //   onEnter: scrollBySections
  // });



  if (container) {


    gsap.to('.hero-bg', {
      scrollTrigger: {
        trigger: '.parallaxBlock__main',
        start: 'top 70%',
        end: 'bottom 100%',
        // markers:true,
        scrub: 2
      },
      scale: '1.05',
      y: '70%'
    });

    gsap.to('.hero', {
      scrollTrigger: {
        trigger: '.parallaxBlock__main',
        start: 'top 50%',
        end: 'bottom 100%',
        markers:true,
        scrub: 3,
        pin: true,
      },
      y: '-100%',
    });


  }
}



const parallaxMain = () => {

  const parallaxContainer = $(document);
  const parallaxImage = $('.anim-parallax-item');
  const triggerElement = $('.anim-parallax-trigger');



  const startParallaxAnimation = function() {
    const scrollTop = parallaxContainer.scrollTop();
    const parallaxOffset = scrollTop / 4;
    const scale = 1 + (scrollTop / 3000);
    parallaxImage.css({ transform: 'scale(' + (scale) + ')'});
    triggerElement.css({ transform: 'translateY(' + parallaxOffset + 'px)'});
  };

  parallaxContainer.on('scroll', function() {
    startParallaxAnimation();
  });

}

const parallaxMainScroll = () => {

  const parallaxContainer = $(document);
  const parallaxImage = $('.anim-parallax-item-scroll');
  const triggerElement = $('.anim-parallax-trigger-scroll');
  const parallaxStart = $('.data-parallax-trigger-start');
  const parallaxEnd = $('.data-parallax-trigger-end');


  parallaxContainer.on('scroll', function() {
    const scrollTop = parallaxContainer.scrollTop();
    console.log(scrollTop);
    const parallaxOffset = scrollTop / 20;
    const scale = 1.5 - (scrollTop / 1300);
    console.log(scale);

    if (isInViewport(parallaxStart)) {
      parallaxImage.css({ transform: 'scale(' + (scale) + ')'});
    triggerElement.css({ transform: 'translateY('   + parallaxOffset + 'rem)'});
    }

    if (isInViewport(parallaxEnd)) {
      parallaxImage.css({ transform: 'scale(' + (scale) + ')'});
    triggerElement.css({ transform: 'translateY('   + parallaxOffset + 'rem)'});
    }

  });




}


