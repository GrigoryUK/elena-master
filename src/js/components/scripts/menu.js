import $ from 'jquery'
import scrollLock from 'scroll-lock'


export const MenuFunction = () => {
  const burger = $('.data-burger');
  const logo = $('.header__logo');
  const header = $('.header');
  const menu = $('.data-menu');
  burger.on('click', function() {


    $(this).toggleClass('open');


    if ($(this).hasClass('open')) {
      menu.fadeIn();
      scrollLock.disablePageScroll();
      logo.addClass('active')

      setTimeout(() => {
        $(this).addClass('anim')
      }, 200)
    } else {
      menu.fadeOut()
      scrollLock.enablePageScroll();
      logo.removeClass('active')

      setTimeout(() => {
        $(this).removeClass('anim')
      }, 0)
    }

    // $(this).toggleClass('active', function () {
    //   if ($(this).hasClass('active')) {

    //     //
    //
    //   } else {

    //     logo.css({background: 'red'});

    //   }
    // });
  });

  menu.find('a').on('click', function() {
    menu.fadeOut()
    scrollLock.enablePageScroll();
  })
}

