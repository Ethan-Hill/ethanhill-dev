<template>
  <div class="lg:hidden">
    <Swiper
      :slides-per-view="1"
      :modules="[SwiperNavigation]"
      :navigation="true"
    >
      <SwiperSlide v-for="(item, index) in props.recentWork">
        <WorkItem :item="item" :id="'work-item-' + index" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
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
