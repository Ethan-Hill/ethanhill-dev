<template>
  <div class="flex flex-col w-full box-border overflow-hidden">
    <h3 class="text-2xl font-bold mb-6">{{ title }}</h3>
    <div class="flex-grow flex flex-col w-full box-border overflow-hidden">
      <h4 class="text-textLight mb-1">Location: {{ location }}</h4>
      <h4 class="text-textLight mb-5">Duration: {{ duration }}</h4>
      <p class="break-words overflow-wrap-anywhere">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  location: string;
  duration: string;
  description: string;
}>();
</script>
