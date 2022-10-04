<script setup lang="ts">
import type { post } from '@/types'
import { onMounted, ref, watch } from 'vue'

import { getHomePosts } from '@/serives'
import { PostCard, PostWidget, CategoriesWidget } from '@/components'

const posts = ref<post[]>([])
onMounted(() => {
  getHomePosts().then(({ result }) => {
    watch(result, () => {
      posts.value = result.value?.postsConnection.edges
    })
    posts.value = result.value?.postsConnection.edges
  })
})
</script>

<template>
  <main class="grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-8 col-span-1">
      <template v-for="post in posts" :key="post.id">
        <PostCard :post="(post.node as post)" />
      </template>
    </div>
    <div class="lg:col-span-4 col-span-1">
      <div class="lg:sticky relative top-8">
        <PostWidget />
        <CategoriesWidget />
      </div>
    </div>
  </main>
</template>
