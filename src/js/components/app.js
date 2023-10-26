import { accordionsJs } from './scripts/accordions'
import animationJs from './scripts/animation'
import filtersJs from './scripts/filters'
import linksHoverJs from './scripts/linksHover'
import { MenuFunction } from './scripts/menu'
import { modalJs } from './scripts/modal'
import parallaxJs from './scripts/parallax'
import preloaderJs from './scripts/preloader'
import showMoreJs from './scripts/showMore'
import slidersJs from './scripts/sliders'
import { cookieClose, getMinHeight, linksRelocation, smoothScroll } from './utils/mini'
import tabsToDropdown from './utils/tabsToDropdown'

getMinHeight();

document.addEventListener('DOMContentLoaded', (event) => {
  preloaderJs();
  accordionsJs()
  filtersJs()
  smoothScroll()
  MenuFunction()
  tabsToDropdown()
  parallaxJs()
  slidersJs()
  cookieClose()
  linksHoverJs()
  linksRelocation('exit-page-opacity');
  animationJs()
  modalJs()
  showMoreJs();
});


