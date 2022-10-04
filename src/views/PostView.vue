<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="about">
    <h1>{{ route.params.slug }}</h1>
  </div>
</template>
