import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import postView from '@/views/PostView.vue'
import CategoryView from '@/views/CategoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/post/:slug',
      name: 'post',
      component: postView,
    },
    {
      path: '/category/:slug',
      name: 'category',
      component: CategoryView,
    },
  ],
})

export default router
