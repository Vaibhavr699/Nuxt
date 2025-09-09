<template>
  <section v-if="post" class="mx-auto w-full max-w-7xl px-4 py-12">
    <SectionHeader :title="post.title" action-label="Back" action-to="/blog" />
    <p class="text-sm text-slate-500 mb-6">
      {{ new Date(post.date).toLocaleDateString() }} · {{ post.tags.join(', ') }}
    </p>
    <div class="prose max-w-none">
      <p v-for="(para, idx) in post.content" :key="idx">{{ para }}</p>
    </div>
  </section>

  <section v-else class="mx-auto w-full max-w-7xl px-4 py-12">
    <SectionHeader title="Post not found" action-label="Back" action-to="/blog" />
    <p class="text-slate-600">The requested article does not exist.</p>
  </section>
</template>

<script setup>
import { posts } from '~/data/posts'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const postId = computed(() => route.params.id)
const post = computed(() => posts.find(p => p.id === postId.value))
</script>