<script setup lang="ts">
import { useRoute } from 'vue-router'
import {
  PostContent,
  PostWidget,
  CategoriesWidget,
  Author,
  CommentsForm,
  Comments,
  Loader,
} from '@/components'
import { getPostContent, getComments } from '@/services'
import { onMounted, ref, watch } from 'vue'
import type { comment, post } from '@/types'

const route = useRoute()

const post = ref<post | undefined>(undefined)
const comments = ref<comment[]>([])

const call = async (slug: string) => {
  const { result: postData } = await getPostContent(slug)
  const { result: commentsData } = await getComments(slug)
  watch(postData, () => {
    post.value = postData.value?.post
  })
  watch(commentsData, () => {
    comments.value = commentsData.value?.comments
  })
  post.value = postData.value?.post
  comments.value = commentsData.value?.comments
}

onMounted(() => call(route.params.slug as string))

watch(route, () => call(route.params.slug as string))
</script>

<template>
  <div class="container mx-auto only:sm:px-10 mb-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="col-span-1 lg:col-span-8">
        <template v-if="post">
          <PostContent :post="post" />
          <Author :author="post?.author" />
          <CommentsForm />
          <Comments :comments="comments" />
        </template>
        <Loader v-else />
      </div>
      <div class="col-span-1 lg:col-span-4">
        <div class="relative lg:sticky top-8">
          <template v-if="post">
            <PostWidget :slug="post?.slug" :categoriesNames="post?.categories.map(({ slug }) => slug)" />
            <CategoriesWidget />
          </template>
          <Loader v-else />
        </div>
      </div>
    </div>
  </div>
</template>
