<template>
  <header class="header">
    <nav class="nav-wrapper">
      <a href="http://localhost:5173/"><img class="logo" src="./picture/logo.png" alt="Logo"></a>
      <button><a href="http://localhost:5173/">Trang chủ</a></button>
      <a class="nav-link" @click.prevent="scrollToSection('section1')">Phòng</a>
      <a class="nav-link" @click.prevent="scrollToSection('section2')">Đặt phòng</a>
      <a class="nav-link" @click.prevent="scrollToSection('section3')">Khuyến mãi</a>
      <a class="nav-link" @click.prevent="scrollToSection('section4')">Dịch vụ</a>
      <a class="nav-link" @click.prevent="scrollToSection('section5')">Liên hệ</a>
    </nav>
    <img style="width: 60px; position: fixed; bottom: 0cm; right: 0cm; z-index: 100;" src="./picture/iconup.png" alt="" @click="scrollToTop" class="scroll-to-top" :class="{ show: isVisible }">
  </header>
</template>

<script>
import { scrollMixin } from './mixin/scrollMixin';

export default {
  name: 'Header',
  mixins: [scrollMixin],
  data() {
    return {
      isVisible: false
    };
  }
};
</script>

<style scoped>
.header {
  background-color: #000000;
  color: white;
  width: 100vw;
  height: 90px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.logo {
  width: 260px;
  height: auto;
  margin-left: 2cm;
  position: relative;
  top: 0.5cm;
}

button {
  background-color: yellowgreen;
  border: none;
  height: 90px;
  width: 90px;
}

a {
  color: white;
  text-decoration: none;
  line-height: 90px;
}

button a {
  line-height: 90px;
}

.nav-link {
  width: 90px;
  text-align: center;
}
</style>
