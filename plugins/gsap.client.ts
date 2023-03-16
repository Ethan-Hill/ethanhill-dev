import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { Observer } from "gsap/Observer";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(Observer, ScrollTrigger, CSSRulePlugin);

  if (process.client) {
    gsap.registerPlugin(Draggable);
  }

  return {
    provide: {
      gsap,
      Observer,
      ScrollTrigger,
      Draggable,
    },
  };
});
