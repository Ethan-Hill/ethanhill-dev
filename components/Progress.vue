<template>
  <section
    class="scroll-m-12 md:scroll-m-0 grid items-center bg-darkBg"
    id="progress"
  >
    <div class="h-full lg:py-24">
      <h2 class="text-5xl font-bold mb-10 lg:mb-20 container mx-auto">
        Progress
      </h2>

      <div class="progress-bar relative py-10">
        <div
          class="lg:flex lg:flex-wrap lg:gap-10 justify-between container mx-auto"
        >
          <ProgressNormal />
          <ProgressSlider />
        </div>
      </div>
    </div>
  </section>
</template>
