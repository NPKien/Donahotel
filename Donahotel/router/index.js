import Home from '@/components/Home.vue'
import Introduce from '@/components/Introduce.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
      path: '/', 
      name: 'Home',
      component: Home
    },
    {
      path: '/introduce', 
      name: 'Introduce',
      component: Introduce
    },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router