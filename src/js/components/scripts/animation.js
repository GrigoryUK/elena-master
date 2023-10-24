import { animationScroll } from '../utils/animationScroll'

export default function animationJs() {
  animationScrollFooter()



}

export const animationScrollFooter = () => {
  animationScroll('.footer--secondary')
  animationScroll('.footer--primary')
}
