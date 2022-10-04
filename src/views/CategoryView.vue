<script setup lang='ts'>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <div>
    {{ route.params.slug }}
  </div>
</template>

<style lang="scss" scoped>

</style>