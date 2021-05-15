import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function animateLinks(elems) {
  const tl = gsap.timeline();
  if (elems)
    tl.to(elems, {
      opacity: 1,
      x: 0,
      duration: 0.3,
      stagger: {
        amount: 0.1,
      },
    });

  return tl;
}
