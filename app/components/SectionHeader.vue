<template>
  <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2 md:gap-0 items-center justify-center ">
    <div>
      <h1 class="text-2xl font-bold text-gray-900 ">{{ title }}</h1>
      <p v-if="subtitle" class="text-gray-500 mt-1 text-lg">{{ subtitle }}</p>
    </div>
    <NuxtLink
      v-if="actionLabel && actionTo"
      :to="actionTo"
      class="mt-2 md:mt-0 inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
    >
      {{ actionLabel }}
    </NuxtLink>
  </div>
</template>

<script setup lang="js">
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  actionLabel: { type: String, default: '' },
  actionTo: { type: String, default: '' },
})
</script>