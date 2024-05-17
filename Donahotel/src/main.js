import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(router);

app.mount('#app');

AOS.init({offset: 120, delay: 0, duration: 1500,easing: 'ease',once: true,});
