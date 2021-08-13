import gsap from "gsap";
export function animateLinks(elems) {
  const tl = gsap.timeline();
  if (elems && window.innerWidth < 622) {
    tl.to(".page-links", { opacity: 1 }).to(elems, {
      opacity: 1,
      x: 0,
      duration: 0.3,
      stagger: {
        amount: 0.1,
      },
    });
  } else if (elems)
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
