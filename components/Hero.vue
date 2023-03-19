<template>
  <section class="relative hero grid place-items-center overflow-hidden">
    <MiscTip />

    <div class="scrolling-image-container">
      <div ref="iconsBg" class="scrolling-image"></div>
    </div>

    <div class="container z-10">
      <div
        class="flex flex-row justify-evenly items-center w-full xl:w-3/4 mx-auto gap-x-10"
      >
        <div class="flex-1 justify-self-end hidden lg:block">
          <img
            src="/ethan.jpg"
            alt="Ethan Hill"
            class="rounded-xl lg:w-3/4 ml-10"
            width="400px"
            height="425px"
          />
        </div>
        <div class="flex-1 mb-64 lg:mb-0 w-64">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 lg:mb-8">
            Hi, I'm Ethan.
          </h1>
          <h2
            class="text-3xl md:text-4xl font-bold mb-8 w-max"
            id="job"
            ref="job"
          >
            <span class="job-part">Frontend</span>
            <span> &nbsp;</span>
            <span class="job-part">Developer</span>
          </h2>
          <NuxtLink to="/cv" class="btn block lg:hidden w-full"
            >My Details</NuxtLink
          >
        </div>
      </div>
    </div>
    <MiscScrollDown />
  </section>
</template>

<script setup lang="ts">
import { useWrapText } from "~~/composables/useWrapText";
const { $gsap: gsap } = useNuxtApp();

const iconsBg = ref();
const job = ref();

onMounted(() => {
  const test = useWrapText();
  const iconBgtimeline = gsap.timeline({ repeat: -1 });
  const nameHovertimeline = gsap.timeline({ paused: true });

  iconBgtimeline.to(iconsBg.value, {
    backgroundPosition: "-800px 0px",
    duration: 60,
    ease: "ease-in-out",
  });

  iconBgtimeline.to(iconsBg.value, {
    backgroundPosition: "0px 0px",
    duration: 60,
    ease: "ease-in-out",
  });

  const letters = document.querySelectorAll(".letter");

  letters.forEach((letter) => {
    nameHovertimeline.to(
      letter,
      {
        duration: 0.1,
        y: -3,
        ease: "ease-in-out",
      },
      "-=0.1"
    );

    nameHovertimeline.to(letter, {
      duration: 0.1,
      y: 0,
      ease: "ease-in-out",
    });
  });

  // On completion of the animation reset

  nameHovertimeline.eventCallback("onComplete", function () {
    nameHovertimeline.pause();
    nameHovertimeline.seek(0);
  });

  // Create hover effect

  job.value.addEventListener("mouseenter", () => {
    nameHovertimeline.play();
  });
});
</script>
