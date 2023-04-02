<template>
  <section class="lg:grid items-center bg-darkBg" id="recent-work">
    <div class="container mx-auto h-full py-24">
      <h2 class="text-5xl font-bold mb-10" ref="test">Recent Work</h2>
      <div ref="workItems">
        <WorkItemsNormal :recent-work="recentWork" />
        <WorkItemsSlider :recent-work="recentWork" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const recentWork = [
  {
    name: "Weather",
    "github-link": "https://github.com/Ethan-Hill/Vue-Weather",
    "live-link": "https://weather.ethanhill.dev",
    "project-image": "/vue-weather.jpeg",
    description:
      "A simple Vue 2 application hooked into a public API that checks the weather of the location inputted.",
  },
  {
    name: "Nuxify",
    "github-link": "https://github.com/Ethan-Hill/Nuxify",
    "live-link": "https://nuxify.vercel.app/",
    "project-image": "/nuxify.jpeg",
    description:
      "My first attempt at creating a web app using Nuxt 2 which intergrates with the spotify web API, allowing you to login, control and search your playlists and songs.",
  },
  {
    name: "Webify",
    "github-link": "https://github.com/Ethan-Hill/Webify",
    "live-link": "https://webify-six.vercel.app/",
    "project-image": "/webify.jpeg",
    description:
      "A web app using NextJS / TS which intergrates with the Spotify Web API, to view your profile and playlists.",
  },
];

const { $gsap: gsap } = useNuxtApp();

const workItems = ref();

onMounted(() => {
  let mm = gsap.matchMedia();
  const workItemsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: workItems.value,
      start: "top-=200% top",
      endTrigger: "html",
    },
  });

  mm.add("(min-width: 1024px)", () => {
    recentWork.forEach((item, index) => {
      workItemsTimeline.from(
        `#work-item-${index}`,
        {
          y: 400,
          stagger: 0.1,
          duration: 1,
        },
        "-=0.75"
      );
    });
  });
});
</script>
