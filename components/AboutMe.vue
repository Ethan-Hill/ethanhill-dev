<template>
  <section
    class="min-h-screen scroll-m-12 md:scroll-m-0 grid items-center py-20 lg:py-0"
    id="about-me"
  >
    <div class="container mx-auto lg:h-full">
      <div
        class="flex lg:flex-row flex-col-reverse gap-20 items-start lg:items-center lg:h-full"
      >
        <div class="flex-1" ref="info">
          <h2 class="text-5xl font-bold mb-10">About Me</h2>

          <p class="text-textLight text-xl">
            I'm Ethan Hill. I'm a passionate Frontend Developer. I'm currently
            {{ age }} and I started my programming journey in 2017 when I was
            introduced to HTML. Since then I have been working on my career in
            Software Engineering and Web Development.
          </p>
          <br />
          <p class="text-textLight text-xl">
            I have spent a lot of my spare time creating projects to help myself
            learn new aspects of different programming languages and design
            methodologies. I've been studying software engineering and web
            development since 2019 and it has been awesome.
          </p>
        </div>
        <div class="flex-1" ref="img">
          <img
            src="/ethan.jpg"
            alt="Ethan Hill"
            class="rounded-xl lg:w-3/4 lg:ml-10"
            width="400px"
            height="425px"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp();

const info = ref();
const img = ref();

const age = useCalculateAge();

onMounted(() => {
  let mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", () => {
    gsap.from(info.value, {
      x: -800,
      duration: 1,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: info.value,
        start: "top-=300%",
      },
    });

    gsap.from(img.value, {
      x: 1000,
      duration: 1,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: info.value,
        start: "top-=300%",
      },
    });
  });
});
</script>
