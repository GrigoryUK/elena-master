import { animationScroll } from '../utils/animationScroll'

export default function animationJs() {
  animationScrollFooter()
  animationScrollBlock();


}

export const animationScrollFooter = () => {
  animationScroll('.footer--secondary')
  animationScroll('.footer--primary')
}

export const animationScrollBlock = () => {
  animationScroll('.aboutBlock__container');
}
