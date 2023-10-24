import $ from 'jquery'

export function modalJs() {

  const video = $('.data-block-video');

  const videos = document.querySelectorAll('.data-block-video');

  videos.forEach(item => {
    const btn = item.querySelector('.data-video-btn');

    item.addEventListener('click', e => {
      btn.click()
    })
  })



}
