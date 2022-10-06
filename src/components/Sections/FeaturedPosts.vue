<script setup lang="ts">
import type { post } from '@/types'
import { onMounted, ref, watch } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { getFeaturedPosts } from '@/services'
import { FeaturedPostCard } from '@/components'

const featuredPosts = ref<post[]>([])

onMounted(() => {
  getFeaturedPosts().then(({ result }) => {
    watch(result, () => {
      featuredPosts.value = result.value?.posts
    })
    featuredPosts.value = result.value?.posts
  })

  const carousel__next = document.querySelector('.carousel__next')!
  const carousel__prev = document.querySelector('.carousel__prev')!

  if (carousel__next && carousel__prev) {
    carousel__next.innerHTML = ''
    carousel__prev.innerHTML = ''
  }
})

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
  breakpoints: {
    // 100px and Up
    100: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // 700px and up
    700: {
      itemsToShow: 1.5,
      snapAlign: 'center',
    },
    // 1024 and up
    1024: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
    // 1490 and up
    1490: {
      itemsToShow: 4,
      snapAlign: 'start',
    },
    // 1700 and up
    1700: {
      itemsToShow: 5,
      snapAlign: 'start',
    },
  },
})
</script>

<template>
  <Carousel :settings="settings" class="mb-8">
    <Slide v-for="post in featuredPosts" :key="post.id">
      <FeaturedPostCard :post="post" />
    </Slide>
    <template #addons>
      <Navigation v-if="featuredPosts.length > 3" />
    </template>
  </Carousel>
</template>

<style lang="scss">
@import 'vue3-carousel/dist/carousel.css';
// slider icons
.carousel__next,
.carousel__prev {
  @apply text-center p-3 cursor-pointer bg-pink-600 rounded-full;
}
.carousel__next {
  background-image: url('@/assets/icons/round-arrow-right-icon.svg') !important;
}
.carousel__prev {
  background-image: url('@/assets/icons/round-arrow-left-icon.svg') !important;
}
</style>
