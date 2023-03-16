<template>
  <div class="flex-1 flex flex-col bg-primaryBg p-8 rounded-sm">
    <div class="w-full h-80 mb-8">
      <img
        class="w-full h-full object-cover rounded-lg"
        :src="props.item['project-image']"
        alt="Project image"
      />
    </div>

    <div class="flex-grow flex flex-col">
      <h3 class="text-3xl text-white font-bold">{{ props.item.name }}</h3>
      <p class="text-white mt-4 break-normal mb-6">
        {{ props.item.description }}
      </p>
      <div class="flex-grow items-end gap-x-3 flex">
        <a
          v-if="props.item['live-link']"
          :href="props.item['live-link']"
          target="_blank"
        >
          <span class="i-mdi-link text-white text-3xl"></span>
          <span class="sr-only">Project live link</span>
        </a>

        <a
          v-if="props.item['github-link']"
          :href="props.item['github-link']"
          target="_blank"
        >
          <span class="i-mdi-github text-white text-3xl"></span>
          <span class="sr-only">Project github</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: {
    name: string;
    "github-link": string;
    "live-link": string;
    "project-image": string;
    description: string;
  };
}>();
</script>
