<template>
  <div class="bg-primaryBg min-h-screen text-white relative">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: "Ethan Hill | Portfolio",
  ogTitle: "Ethan Hill | Portfolio",
  description:
    "This is my new portfolio site showing off my recent work, progress and about me.",
  ogDescription:
    "This is my new portfolio site showing off my recent work, progress and about me.",
});

useCookie("tipShown", {
  default: () => "false",
});
</script>
