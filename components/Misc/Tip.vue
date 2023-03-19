<template>
  <div
    ref="tip"
    v-if="isOpen"
    class="absolute -left-80 top-32 z-50 bg-zinc-600 h-30 w-80 lg:flex justify-center items-center px-6 rounded-r-xl py-4 hidden"
  >
    <button class="absolute top-3 right-3" @click="closeTip">
      <span class="i-mdi-close"></span><span class="sr-only">Close tip</span>
    </button>
    <p>You should try hovering over "Frontend Developer"</p>
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp();

const tipCookie = useCookie("tipShown");

const tip = ref();

const isOpen = ref(true);

const closeTip = () => {
  isOpen.value = false;
  tipCookie.value = "true";
};

onMounted(() => {
  if (tipCookie.value) {
    isOpen.value = false;
    return;
  }

  const tipTimeline = gsap.timeline();

  tipTimeline.to(tip.value, {
    left: 0,
    duration: 1,
    ease: "ease-in-out",
  });
});
</script>
