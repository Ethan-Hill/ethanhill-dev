<template>
  <div class="lg:hidden">
    <ClientOnly>
      <Swiper
        :slides-per-view="1"
        :modules="[Navigation]"
        :navigation="{
          nextEl: '.progress-button-next',
          prevEl: '.progress-button-prev'
        }"
        :space-between="0"
        :loop="true"
        class="progress-slider w-full max-w-full"
      >
        <SwiperSlide v-for="(item, index) in progressItems" :key="index">
          <ProgressItem
            :title="item.title"
            :location="item.location"
            :duration="item.duration"
            :description="item.description"
          />
        </SwiperSlide>
      </Swiper>
      
      <!-- Navigation buttons below content -->
      <div class="flex justify-between mt-6 px-4">
        <button class="progress-button-prev p-2 hover:opacity-70 transition-opacity">
          <span class="i-mdi-chevron-left text-3xl"></span>
        </button>
        <button class="progress-button-next p-2 hover:opacity-70 transition-opacity">
          <span class="i-mdi-chevron-right text-3xl"></span>
        </button>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

const progressItems = [
  {
    title: 'High School',
    location: 'Whitley Bay High School',
    duration: '3 years',
    description: 'Here I had studied Design and Technology with systems where I had studied the creation and programming circuit boards and creating a speaker with 3.5mm audio jack and working lights all synced.'
  },
  {
    title: 'College',
    location: 'Gateshead College',
    duration: '3 years',
    description: 'I originally looked into studying Cyber Secuirty but at the last minute I changed to Software Engineering and Development which I have never regreted. Near the end of my time here I studied some simple usage of HTML, CSS and some JS for some cool animations which got me hooked to Web development.'
  },
  {
    title: 'Work',
    location: 'One Utility Bill',
    duration: '2 yrs 8 mos',
    description: 'Working as a Full Stack Developer using Vue.js and Laravel in a hybrid environment. Building and maintaining web applications while collaborating with teams in Newcastle Upon Tyne.'
  },
  {
    title: 'Work',
    location: 'Drummond Central',
    duration: '2 years',
    description: 'Working as a Frontend Developer I have became familiar with agency work and working with clients in a fast changing enviornments. Working with brands like END, Nandos, Greggs and more! My main progress so far has been implementing systems to make frontend development in our team super easy and creating some kickass websites.'
  }
];
</script>

<style scoped>
.progress-slider {
  width: 100%;
  overflow: hidden;
}

.progress-slider :deep(.swiper-slide) {
  width: 100% !important;
  flex-shrink: 0;
  overflow: hidden;
}

.progress-slider :deep(.swiper-wrapper) {
  display: flex;
  align-items: stretch;
}
</style>
