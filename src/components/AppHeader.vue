<script setup lang="ts">
import type { category } from '@/types'
import { onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { getCategories } from '@/services'

const categories = ref<category[]>([])
onMounted(() => {
  getCategories().then(({ result }) => {
    watch(result, () => {
      categories.value = result.value?.categories
    })
    categories.value = result.value?.categories
  })
})
</script>

<template>
  <div class="container mx-auto only:sm:px-10 mb-8">
    <div class="border-b w-full inline-block border-blue-400 py-8">
      <div class="md:float-left block">
        <RouterLink to="/">
          <span class="cursor-pointer font-bold text-4xl text-white"> Vue 3 Hygraph Blog </span>
        </RouterLink>
      </div>
      <div class="hidden md:float-left md:contents">
        <RouterLink
          v-for="category in categories"
          :key="category.id"
          :to="{ name: 'category', params: { slug: category.slug } }"
        >
          <span class="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
            {{ category.name }}
          </span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
