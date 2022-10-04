<script setup lang="ts">
import { RouterView } from 'vue-router'
import { AppHeader } from './components'
</script>

<template>
  <div class="container mx-auto px-10 mb-8">
    <AppHeader />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>
