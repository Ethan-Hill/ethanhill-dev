<template>
  <div class="lg:hidden">
    <ClientOnly>
      <Swiper
        :slides-per-view="1"
        :modules="[Navigation]"
        :navigation="{
          nextEl: '.work-button-next',
          prevEl: '.work-button-prev'
        }"
        :space-between="0"
        :loop="true"
        class="work-slider"
      >
        <SwiperSlide v-for="(item, index) in props.recentWork" :key="index">
          <WorkItem :item="item" :id="'work-item-' + index" />
        </SwiperSlide>
      </Swiper>
      
      <!-- Navigation buttons below content -->
      <div class="flex justify-between mt-6 px-4">
        <button class="work-button-prev p-2 hover:opacity-70 transition-opacity">
          <span class="i-mdi-chevron-left text-3xl"></span>
        </button>
        <button class="work-button-next p-2 hover:opacity-70 transition-opacity">
          <span class="i-mdi-chevron-right text-3xl"></span>
        </button>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

const props = defineProps<{
  recentWork: {
    name: string;
    "github-link": string;
    "live-link": string;
    "project-image": string;
    description: string;
  }[];
}>();

const { width } = useWindowSize();
</script>

<style scoped>
.work-slider {
  width: 100%;
  overflow: hidden;
}

.work-slider :deep(.swiper-slide) {
  width: 100% !important;
  flex-shrink: 0;
}

.work-slider :deep(.swiper-wrapper) {
  display: flex;
  align-items: stretch;
}
</style>
