<template>
  <header class="h-24 bg-darkBg flex items-center relative z-50">
    <div class="container mx-auto flex justify-between items-center gap-x-14">
      <NuxtLink to="/"><h2 class="text-2xl font-bold">Ethan Hill</h2></NuxtLink>

      <nav
        class="fixed top-[96px] lg:top-0 left-0 lg:relative hidden bg-zinc-700 lg:bg-inherit w-full overflow-y-hidden transition-height duration-300 lg:h-auto lg:w-auto"
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
      <a class="btn hidden lg:block" target="_blank" href="/cv.pdf">CV</a>
    </div>
  </header>
</template>
