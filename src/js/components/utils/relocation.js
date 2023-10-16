import $ from 'jquery'

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
      return location.href = href;
    }, 500);

    return false;
  })
}
