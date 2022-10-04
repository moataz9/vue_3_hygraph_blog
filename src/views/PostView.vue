<script setup lang="ts">
import { useRoute } from 'vue-router'
import { PostContent, PostWidget, CategoriesWidget, Author, CommentsForm } from '@/components'
import { getPostContent } from '@/serives'
import { onMounted, ref, watch } from 'vue'
import type { post } from '@/types'

const route = useRoute()
const currentSlug = route.params.slug as string

const post = ref<post | undefined>(undefined)

onMounted(() => {
  getPostContent(currentSlug).then(({ result }) => {
    watch(result, () => {
      post.value = result.value?.post
    })
    post.value = result.value?.post
  })
})
</script>

<template>
  <div class="container mx-auto only:sm:px-10 mb-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="col-span-1 lg:col-span-8">
        <PostContent :post="post" />
        <Author :author="post?.author" />
        <CommentsForm />
      </div>
      <div class="col-span-1 lg:col-span-4">
        <div class="relative lg:sticky top-8">
          <PostWidget :slug="post?.slug" :categoriesNames="post?.categories.map(({ slug }) => slug)" />
          <CategoriesWidget />
        </div>
      </div>
    </div>
  </div>
</template>
