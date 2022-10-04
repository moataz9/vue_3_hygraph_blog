<script setup lang="ts">
import type { post } from '@/types'
import { onMounted, ref, watch } from 'vue'

import { getHomePosts } from '@/serives'
import PostCard from '@/components/PostCard.vue'

const posts = ref<post[]>([])
onMounted(() => {
  getHomePosts().then(({ result, loading }) => {
    watch(loading, () => {
      posts.value = result.value.postsConnection.edges
    })
    posts.value = result.value.postsConnection.edges
  })
})
</script>

<template>
  <main>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="lg:col-span-8 col-span-1">
        <hr />
        <template v-for="post in posts" :key="post.id">
          <PostCard :post="(post.node as post)" />
        </template>
      </div>
    </div>
  </main>
</template>
