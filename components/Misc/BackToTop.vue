<template>
  <transition-fade appear>
    <button
      role="button"
      class="flex justify-center items-center fixed bottom-3 right-3 w-10 h-10 bg-darkBg border-zinc-500 border z-50"
      @click="scrollTop"
      v-if="y > 100"
    >
      <span class="i-mdi-arrow-up"></span>
      <span class="sr-only">Back to top</span>
    </button></transition-fade
  >
</template>

<script setup lang="ts">
const { y } = useWindowScroll();

const scrollTop = () => {
  window.scrollTo({ top: 0 });
};
</script>
