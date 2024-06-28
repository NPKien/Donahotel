import Home from '@/components/Home.vue'
import Introduce from '@/components/Introduce.vue'
import Dichvunhahang from "@/components/Dichvu/Dichvunhahang.vue"
import { createRouter, createWebHistory } from 'vue-router'
import Chinhsach from '@/components/chinhsach/chinhsach.vue'
import Roomtype from '@/components/Loaiphong/Roomtype.vue'
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
    {
      path: '/type/:type', 
      name: 'Roomtype',
      component: Roomtype
    },
    {
      path: '/dichvunhahang', 
      name: 'Dichvunhahang',
      component: Dichvunhahang
    },
    {
      path: '/chinhsach', 
      name: 'Chinhsach',
      component: Chinhsach
    },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router