import { createRouter, createWebHistory } from 'vue-router'
import byMyself from '../views/ByMyself.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: byMyself,
    },
    {
      path: '/gemini',
      name: 'gemini',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Gemini.vue'),
    },
  ],
})

export default router
