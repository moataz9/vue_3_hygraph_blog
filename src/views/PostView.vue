<script setup lang="ts">
import { useRoute } from 'vue-router'

const router = useRoute()
</script>

<template>
  <div class="about">
    <h1>{{ router.params.slug }}</h1>
  </div>
</template>
