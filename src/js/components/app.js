import { accordionsJs } from './scripts/accordions'
import { smoothScroll } from './utils/mini'

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  accordionsJs()
  smoothScroll()
});
