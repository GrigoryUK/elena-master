import { default as $, default as jQuery } from 'jquery'

export default function tabsToDropdown() {


  (function( $ ) {
    $.fn.tabConvert = function(options) {

      const settings = $.extend({
        activeClass: "mixitup-control-active",
        screenSize: 667,
      }, options );



      return this.each(function(i) {
        const wrap = $(this).wrap('<div class="tab-to-dropdown"></div>'),
          currentItem = $(this),
          container = $(this).closest('.tab-to-dropdown'),
          value = $(this).find('.'+settings.activeClass).text(),
          toggler = '<div class="selected-tab">'+ '<span class="selected-tab-span">' + value + '</span>' +'<svg class="selected-tab-arrow" width="10" height="6" viewBox="0 0 10 6"><use xlink:href="img/sprite.svg#icon-arrow-dropdown"></use></svg>' +'</div>';
        currentItem.addClass('converted-tab');
        container.prepend(toggler);

        // function to slide dropdown
        function tabConvert_toggle(){
          currentItem.parent().find('.converted-tab').slideToggle();
        }

        container.find('.selected-tab').click(function(){
          tabConvert_toggle();
          container.toggleClass('active');
          $('.selected-tab-arrow').toggleClass('active')
        });

        container.find('.converted-tab').click(function () {
          container.toggleClass('active');
          $('.selected-tab-arrow').toggleClass('active')
        })





        currentItem.find('button').click(function(e){
          const windowWidth = window.innerWidth;

          if( settings.screenSize >= windowWidth){
            tabConvert_toggle();
            const selected_text = $(this).text();
            $(this).closest('.tab-to-dropdown').find('.selected-tab-span').text(selected_text);
          }
        });

        // Remove toggle if screen size is bigger than defined screen size
        function resize_function(){
          const windowWidth = window.innerWidth;
          if( settings.screenSize >= windowWidth){
            currentItem.css('display','none');
            currentItem.parent().find('.selected-tab').css('display','');
          }else{
            currentItem.css('display','');
            currentItem.parent().find('.selected-tab').css('display','none');
          }
        }
        resize_function();

        // $(window).resize(function(){
        //   resize_function();
        // });

      });
    };





  }( jQuery ));


  (function tabsToDropdown() {
    $('.filter__nav-to-dropdown').tabConvert({
      activeClass: "tabs__nav-btn--active",
      screenSize: 667,
    });
  })();
}
