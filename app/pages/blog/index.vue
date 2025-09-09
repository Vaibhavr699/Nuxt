<template>
  <section class="mx-auto w-full max-w-7xl px-4 py-12">
    <SectionHeader title="Blog" subtitle="Latest articles and updates" />

    <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="post in posts" :key="post.id" class="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 class="text-xl font-semibold">{{ post.title }}</h2>
        <p class="mt-1 text-sm text-slate-500">{{ formatDate(post.date) }} · {{ post.tags.join(', ') }}</p>
        <p class="mt-3 text-slate-600">{{ post.excerpt }}</p>
        <NuxtLink :to="`/blog/${post.id}`" class="mt-4 inline-block text-indigo-700 hover:text-indigo-600">Read more →</NuxtLink>
      </div>
    </div>
  </section>
  <section class="mx-auto w-full max-w-7xl px-4 pb-12">
    <AppForm title="Subscribe to updates" email  />
  </section>
  
</template>


<script setup lang="js">
import { posts } from '~/data/posts'
const formatDate = (d) => new Date(d).toISOString().slice(0, 10)
</script>