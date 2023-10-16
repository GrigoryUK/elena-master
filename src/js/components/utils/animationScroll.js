

export const animationScroll = (cls, threshold = 0.15, clsActive = "animate") => {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {

        change.target.classList.add(clsActive);
      } else {
      }
    });
  }

  let options = {
    threshold: [threshold],
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(cls);

  for (let elm of elements) {
    observer.observe(elm);
  }
}
