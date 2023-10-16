import { accordionsJs } from './scripts/accordions'
import { MenuFunction } from './scripts/menu'
import { getMinHeight, smoothScroll } from './utils/mini'

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  accordionsJs()
  smoothScroll()
  MenuFunction()
});

getMinHeight();
