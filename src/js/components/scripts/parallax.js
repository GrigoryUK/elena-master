
import $ from 'jquery'


export default function parallaxJs() {

  parallaxMain()

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
