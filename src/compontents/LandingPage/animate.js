import gsap, { Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function pin() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  gsap.to(".hero", {
    x: "-25%",
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      scrub: 0.5,
      start: "top 29%",
      end: "bottom 38%",
      //   markers: true,
    },
  });
}
export function revealText() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  tl.from(".reveal", { y: 100, stagger: 0.2 });
}
export function revealTextOnScroll(el) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(el, { y: 100, opacity: 0, scrollTrigger: el });
}
