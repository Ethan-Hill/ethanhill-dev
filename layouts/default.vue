<template>
  <div class="bg-primaryBg min-h-screen">
    <Header />
    <main><slot /></main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
