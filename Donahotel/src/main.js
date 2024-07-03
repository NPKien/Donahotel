import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);

app.use(router);

app.mount('#app');

app.directive('aos', {
    mounted(el, binding) {
        AOS.init(binding.value || {});
    }
});