import mixitup from 'mixitup'
import GraphTabsCustom from '../utils/myTabs'

export default function filtersJs() {


  const containers = document.querySelector('.pageProjects');


  if (containers) {
    const tabsProducts = new GraphTabsCustom('filter__primary', '.filter__primary--nav', '.filter__primary--btn', '.filter__primary--panel');
  }



}


const mixTabs = () => {

  const config = {
    "animation": {
      "duration": 250,
      "nudge": false,
      "reverseOut": false,
      "effects": "fade"
  },
    controls: {
      scope: 'local'
    }
  };

  containers.forEach((container) => {
    const buttons = container.querySelectorAll('.filter__primary--btn');
    const mixer = mixitup(container, config);

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        mixer.filter(filterValue);
      });
    });
  });
}
