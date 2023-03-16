<template>
  <section
    class="scroll-m-12 md:scroll-m-0 grid items-center bg-darkBg"
    id="recent-work"
  >
    <div class="container mx-auto h-full py-24">
      <h2 class="text-white text-5xl font-bold mb-10 text-center">
        Recent Work
      </h2>

      <div class="flex flex-wrap gap-12">
        <WorkItem :item="item" v-for="item in recentWork" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const recentWork = [
  {
    name: "Test 1",
    "github-link": "https://google.co.uk",
    "live-link": "",
    "project-image": "/example.jpeg",
    description:
      "Test descriptionTest descriptionTest descriptionTest descriptionTest descriptionTest descriptionTest descriptionTest descriptionTest description",
  },
  {
    name: "Test 2",
    "github-link": "https://google.co.uk",
    "live-link": "",
    "project-image": "/example.jpeg",
    description: "Test description",
  },
  {
    name: "Test 3",
    "github-link": "https://google.co.uk",
    "live-link": "",
    "project-image": "/example.jpeg",
    description: "Test description",
  },
];
</script>
