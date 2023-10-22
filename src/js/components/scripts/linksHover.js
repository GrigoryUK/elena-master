import $ from 'jquery'
import { isDesktop } from '../../functions/check-viewport'

export default function linksHoverJs() {
  HoverProjects();


}


const HoverProjects = () => {
  if (isDesktop()) {
    const container = document.querySelector('.projectsBlock');

    if (container) {
      const main = $('.projectsBlock__container')
      const links = main.find('.linkC')
      const linksImages = main.find('.itemC')

      links
      .on( "mouseenter", function() {

        $(this).addClass('active')
        const attr = $(this).attr('data-link');
        $('.itemC[data-link-img="' + attr + '"]').addClass('active');
      })
      .on( "mouseleave", function() {
        $(this).removeClass('active')
        const attr = $(this).attr('data-link');
        $('.itemC[data-link-img="' + attr + '"]').removeClass('active');
      });

      linksImages
      .on( "mouseenter", function() {

        $(this).addClass('active')
        const attr = $(this).attr('data-link-img');
        $('.linkC[data-link="' + attr + '"]').addClass('active');
      })
      .on( "mouseleave", function() {
        $(this).removeClass('active')
        const attr = $(this).attr('data-link-img');
        $('.linkC[data-link="' + attr + '"]').removeClass('active');
      });
    }
  }
}
