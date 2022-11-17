import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirct: 'message',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: 'message',
        component: () => import('@/views/wall/message.vue'),
      },
      {
        path: 'image',
        component: () => import('@/views/wall/image.vue'),
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
