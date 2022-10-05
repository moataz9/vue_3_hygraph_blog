<script setup lang="ts">
import { RouterView } from 'vue-router'
import { AppHeader, FeaturedPosts } from './components'
</script>

<template>
  <div class="container mx-auto px-10 mb-8">
    <AppHeader />
    <FeaturedPosts />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>
