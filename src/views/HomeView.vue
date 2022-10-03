<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import type { post } from '@/types';
// import { ref } from 'vue'

import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { ref, watch } from 'vue'

// const posts = ref([
//   {
//     author: { name: 'maotaz', bio: 'main', id: 'indexed', photo: { url: 'url' } },
//     excerpt: 'coentoeno',
//   },
// ])

const { result } = useQuery(gql`
  query MyQuery {
    postsConnection {
      edges {
        node {
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`)

const posts = ref<post[]>([])

watch(result, () => {
  posts.value = result.value.postsConnection.edges
})


</script>

<template>
  <main>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="lg:col-span-8 col-span-1">
        <hr />
        <template v-for="(post, index) in posts" :key="index">
          <PostCard :post="(post.node as post)" />
        </template>
      </div>
    </div>
  </main>
</template>
