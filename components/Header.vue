<template>
  <header class="h-24 bg-darkBg flex items-center relative z-50">
    <div
      class="container mx-auto flex justify-between lg:justify-evenly items-center gap-x-14"
    >
      <NuxtLink to="/"
        ><h2 class="text-2xl font-bold text-white">Ethan Hill</h2></NuxtLink
      >

      <nav
        class="fixed top-[96px] lg:top-0 left-0 lg:relative bg-zinc-700 lg:bg-inherit w-full overflow-y-hidden transition-height duration-300 lg:h-auto lg:w-auto"
        :class="isMenuOpen ? 'h-[264px]' : 'h-0'"
        id="mobile-nav"
      >
        <ul class="flex flex-col lg:flex-row lg:gap-x-12 lg:items-center">
          <li>
            <NuxtLink class="link" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="#about-me">About Me</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="#recent-work">Recent Work</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="#progress">Progress</NuxtLink>
          </li>
        </ul>
      </nav>
      <NuxtLink to="/cv" class="btn hidden lg:block">CV</NuxtLink>
      <button
        @click="toggleMenuOpen()"
        class="block lg:hidden"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-haspopup="true"
        aria-controls="mobile-nav"
        type="button"
      >
        <span class="sr-only">Toggle menu</span>
        <span
          class="text-5xl text-white"
          :class="isMenuOpen ? 'i-mdi-close' : 'i-mdi-menu'"
        ></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const [isMenuOpen, toggleMenuOpen] = useToggle();

useHead({
  htmlAttrs: {
    class: computed(() => {
      if (isMenuOpen.value) return "overflow-hidden";

      return "";
    }),
  },
});
</script>
