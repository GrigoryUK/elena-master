import $ from 'jquery'
import scrollLock from 'scroll-lock'


export const MenuFunction = () => {

  $('.data-burger').on('click', function() {
    $('.data-menu').fadeIn()
    scrollLock.disablePageScroll();
  })
  $('.data-burger-close').on('click', function() {
    $('.data-menu').fadeOut()
    scrollLock.enablePageScroll();
  })

  $('.data-menu').find('a').on('click', function() {
    $('.data-menu').fadeOut()
    scrollLock.enablePageScroll();
  })
}

