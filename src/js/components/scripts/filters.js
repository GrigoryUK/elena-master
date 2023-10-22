import mixitup from 'mixitup'


export default function filtersJs() {
  const containers = document.querySelectorAll('.filter__primary--products');


  if (containers) {

    const config = {
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
          console.log(scrollTrig.refresh());
        });
      });
    });
  }
}
