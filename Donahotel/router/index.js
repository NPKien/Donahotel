import Home from '@/components/Home.vue'
import Introduce from '@/components/Introduce.vue'
import Phongloai1a from '@/components/Loaiphong/Phongloai1a.vue'
import Phongloai1b from '@/components/Loaiphong/Phongloai1b.vue'
import Phongloai2a from '@/components/Loaiphong/Phongloai2a.vue'
import Phongloai2b from '@/components/Loaiphong/Phongloai2b.vue'
import Phongvip1 from '@/components/Loaiphong/Phongvip1.vue'
import Phongvip2 from '@/components/Loaiphong/Phongvip2.vue'
import Dichvunhahang from "@/components/Dichvu/Dichvunhahang.vue"
import { createRouter, createWebHistory } from 'vue-router'
import Chinhsach from '@/components/chinhsach/chinhsach.vue'
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
      path: '/1a', 
      name: 'Phongloai1a',
      component: Phongloai1a
    },
    {
      path: '/1b', 
      name: 'Phongloai1b',
      component: Phongloai1b
    },
    {
      path: '/2a', 
      name: 'Phongloai2a',
      component: Phongloai2a
    },
    {
      path: '/2b', 
      name: 'Phongloai2b',
      component: Phongloai2b
    },
    {
      path: '/vip1', 
      name: 'Vip1',
      component: Phongvip1
    },
    {
      path: '/vip2', 
      name: 'Vip2',
      component: Phongvip2
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