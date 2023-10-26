
export default function showMoreJs() {

  (function () {
    const containers = document.querySelectorAll('.filter__panel');

    if (containers) {

      containers.forEach(container => {
        const itemsLength = container.querySelectorAll('.mix').length;
        const button = container.querySelector('.btn--also');
        const blockGrid = container.querySelector('.pageProjects__container');
        const startCount = 9;
        const addCountPlus = 9;
        let itemsCount = 9;
        const timer = 400;

        if (itemsLength <= startCount) {
          button.style.display = 'none';
          return false;
        }

        button.addEventListener('click', el => {
          donat(button ,timer)
          itemsCount += addCountPlus;
          const array = Array.from(blockGrid.children);
          const visItems = array.slice(startCount, itemsCount);

          visItems.forEach(el => {
            setTimeout(() => {
              el.classList.add('mix--active');
            }, timer)
          });

          if (visItems.length === itemsLength - startCount) {
            setTimeout(() => {
              button.style.display = 'none';
              return true
            }, timer)
          }
        })
      })


      function donat(button,timer = 400) {
        button.classList.add('donat');
        setTimeout(() => {
          button.classList.remove('donat');
        }, timer)
      }

    }
  })()

  // (function () {
  //   const container = document.querySelector('.blockGrid--more');
  //   const numberStart = 15;
  //   if (container) {
  //     const itemLength = container.querySelectorAll('.itemC').length;
  //     const items = container.querySelectorAll('.itemC');
  //     const button = container.querySelector('.buttonC');
  //
  //     for (let i = 0; i < numberStart; i++) {
  //       items[i].classList.add('itemC--active');
  //     }
  //
  //     if (itemLength <= numberStart) {
  //       button.style.display = 'none';
  //       return;
  //     }
  //   }
  // })()




}
