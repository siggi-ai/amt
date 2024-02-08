import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../views/Intro.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'intro',
        component: Intro
    },
    {
        path: '/first',
        name: 'first',
        component: Home
    },
  ]
})

export default router