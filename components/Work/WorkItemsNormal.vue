<template>
  <div class="lg:flex flex-wrap gap-12 hidden">
    <WorkItem
      :item="item"
      ref="workItems"
      v-for="(item, index) in props.recentWork"
      :id="'work-item-' + index"
    />
  </div>
</template>

<script setup lang="ts">
const workItems = ref();

const props = defineProps<{
  recentWork: {
    name: string;
    "github-link": string;
    "live-link": string;
    "project-image": string;
    description: string;
  }[];
}>();
</script>
