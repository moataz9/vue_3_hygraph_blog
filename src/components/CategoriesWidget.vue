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
  <div class="bg-white showdow-lg rounded-lg p-8 mb-8 pb-8">
    <h3 class="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
    <RouterLink
      v-for="category in categories"
      :key="category.id"
      :to="{ name: 'category', params: { slug: category.slug } }"
    >
    <span class="cursor-pointer block pb-3 mb-3">{{ category.name }}</span>
  </RouterLink>
  </div>
</template>
