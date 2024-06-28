import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import Quanlyphong from '@/components/Quanlyphong.vue';
import EditTyperoom from '@/components/EditTyperoom.vue';
import AddTyperoom from '@/components/AddTyperoom.vue';
import Dichvunhahang from '@/components/Dichvunhahang.vue';
import QuestionList from '@/components/QuestionList.vue';
import Config from '@/components/Config.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:idadmin',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '/:idadmin/quanly',
          name: 'QuanLyphong',
          component: Quanlyphong,
          meta: { requiresAuth: true },
        },
        {
          path: '/:idadmin/quanly/edit/:type',
          name: 'EditTyperoom',
          component: EditTyperoom
        },
        {
          path: '/:idadmin/quanly/add',
          name: 'AddTyperoom',
          component: AddTyperoom,
          meta: { requiresAuth: true }
        },
        {
          path: '/:idadmin/dichvunhahang',
          name: 'Dichvunhahang',
          component: Dichvunhahang,
          meta: { requiresAuth: true },
        },
        {
          path: '/:idadmin/question',
          name: 'Question',
          component: QuestionList,
          meta: { requiresAuth: true },
        },
        {
          path: '/:idadmin/config',
          name: 'Config',
          component: Config,
          meta: { requiresAuth: true },
        },
      ]
    },
    {
      path: '/',
      redirect: '/login' 
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    
  ]
});

// Middleware kiểm tra xác thực và tính hợp lệ của idadmin
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('authToken');
  const idadmin = to.params.idadmin;

  // Kiểm tra nếu route yêu cầu xác thực và chưa đăng nhập
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login'); // Chuyển hướng đến trang login khi không có token xác thực
  } else if (idadmin && idadmin !== localStorage.getItem('idadmin')) {
    next('/login'); // Chuyển hướng đến trang login khi idadmin không hợp lệ
  } else {
    next(); // Tiếp tục điều hướng
  }
});

export { router };
