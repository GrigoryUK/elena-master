import { accordionsJs } from './scripts/accordions'
import filtersJs from './scripts/filters'
import { MenuFunction } from './scripts/menu'
import parallaxJs from './scripts/parallax'
import slidersJs from './scripts/sliders'
import { getMinHeight, smoothScroll } from './utils/mini'
import tabsToDropdown from './utils/tabsToDropdown'

getMinHeight();

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  accordionsJs()
  filtersJs()
  smoothScroll()
  MenuFunction()
  tabsToDropdown()
  parallaxJs()
  slidersJs()
});


