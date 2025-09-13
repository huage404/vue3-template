import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: () => import('@/pages/Home/index.vue') },
  { path: '/about', component: () => import('@/pages/About/index.vue')  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
