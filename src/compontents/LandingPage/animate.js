import gsap, { Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function pin(el) {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  gsap.to(el, {
    opacity: 0,
    scrollTrigger: {
      trigger: ".pin",
      scrub: 2,
      pin: true,
      start: "top 25%",
      end: "bottom 38%",
      markers: true,
    },
  });
  gsap.to("#hero", {
    x: "-25%",
    ease: "none",
    scrollTrigger: {
      trigger: ".pin",
      scrub: 2,
      pin: true,
      start: "top 25%",
      end: "bottom 38%",
      markers: true,
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
  const tl = gsap.timeline();
  tl.from(".reveal", { y: 100, stagger: 0.2 });
}
