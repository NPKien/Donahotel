<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <div class="row w-100 align-items-center no-gutters">
          <div class="col-2 col-lg-1 d-flex justify-content-center justify-content-lg-start">
            <img src="./picture/menu.png" alt="" class="menu" @click="toggleMenu">
          </div>
          <div class="col-10 col-lg-3 d-flex justify-content-center justify-content-lg-start">
            <a href="">
              <img class="logo" src="./picture/logo.png" alt="Logo">
            </a>
          </div>
          <div :class="['col-4 col-lg d-flex justify-content-center', {'d-none': !showMenu && isMobile}]">
            <a class="nav-link" style="background-color: yellowgreen;" href="">Trang chủ</a>
          </div>
          <div :class="['col-4 col-lg d-flex justify-content-center', {'d-none': !showMenu && isMobile}]">
            <a class="nav-link" @click.prevent="scrollToSection('phong')">Phòng</a>
          </div>
          <div :class="['col-4 col-lg d-flex justify-content-center', {'d-none': !showMenu && isMobile}]">
            <a class="nav-link" @click.prevent="scrollToSection('datphong')">Đặt phòng</a>
          </div>
          <div :class="['col-4 col-lg d-flex justify-content-center', {'d-none': !showMenu && isMobile}]">
            <a class="nav-link" @click.prevent="scrollToSection('phong')">Khuyến mãi</a>
          </div>
          <div :class="['col-4 col-lg d-flex justify-content-center', {'d-none': !showMenu && isMobile}]">
            <a class="nav-link" @click.prevent="scrollToSection('dichvu')">Dịch vụ</a>
          </div>
          <div :class="['col-4 col-lg d-flex justify-content-center', {'d-none': !showMenu && isMobile}]">
            <a class="nav-link" @click.prevent="scrollToSection('footer')">Liên hệ</a>
          </div>
          <div class="col-lg-2"></div>
        </div>
      </div>
    </nav>
    <div v-show="showInfo" class="info-bar">
      <div class="container">
        <span style="font-weight: bold;">Địa Chỉ :</span> Lô B, TTTM Cái Khế, Trần Phú, Ninh Kiều, TP.Cần Thơ. <br>
        <span style="font-weight: bold;">SĐT Đặt Chỗ :</span> 0292 376 3333 - 3 766 333 - 376 6666
      </div>
    </div>
    <img style="width: 60px; position: fixed; bottom: 0cm; right: 0cm; z-index: 100;" src="./picture/iconup.png" alt="" @click="scrollToTop" class="scroll-to-top" :class="{ show: isVisible }">
    <div class="guide-plugin">
      <div class="guide-icon" @click.prevent="toggleGuide">
        <img src="./picture/help.png" alt="Guide Icon" style="height: 1cm;">
      </div>
      <div v-if="showGuide">
        <div class="guide-form">
          <div v-if="qaList.length > 0">
            <div class="qa-box" v-for="qa in qaList" :key="qa.question">
              <div class="question">{{ qa.question }}</div>
              <div class="answer">{{ qa.answer }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="floating-contacts">
      <div class="contact-item" @click="openEmailComposer">
        <img src="./picture/gmail.png" alt="Gmail Icon">
      </div>
    </div>
  </header>
</template>


<script>
import axios from 'axios';
import { scrollMixin } from './mixin/scrollMixin';

export default {
  name: 'Header',
  mixins: [scrollMixin],
  data() {
    return {
      isVisible: false,
      showGuide: false,
      showInfo: true,
      showMenu: window.innerWidth >= 992,
      isMobile: window.innerWidth < 992,
      qaList: [],
      apiUrl: import.meta.env.VITE_API_URL,
      gmail: ''
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.fetchQAList();
    
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleScroll() {
      this.showInfo = window.scrollY < 90;
      this.isVisible = window.scrollY > 100;
    },
    toggleGuide() {
      this.showGuide = !this.showGuide;
    },
    async openEmailComposer() {
      try {
        const response = await axios.get(`${this.apiUrl}/gmail/`);
        this.gmail = response.data.gmail;
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${this.gmail}`);
      } catch (error) {
        console.error('Lấy địa chỉ email thất bại:', error);
        alert('Có lỗi xảy ra, vui lòng thử lại');
      }
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    handleResize() {
      this.isMobile = window.innerWidth < 992;
      if (window.innerWidth >= 992) {
        this.showMenu = true;
      }
    },
    async fetchQAList() {
      try {
        const response = await axios.get(`${this.apiUrl}/question`);
        this.qaList = response.data;
      } catch (error) {
        console.error('Lấy danh sách Q&A thất bại:', error);
        alert('Có lỗi xảy ra, vui lòng thử lại');
      }
    },
  }
}
</script>


<style scoped>
.header {
  background-color: #000000;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  transition: padding-top 0.3s; /* Thêm transition cho padding-top */
}

.no-padding-top {
  padding-top: 0 !important;
}

.info-bar {
  background-color: yellowgreen;
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 900;
  padding: 10px 0;
  box-sizing: border-box; 
}

.logo {
  width: 260px;
  height: auto;
}

.menu {
  width: 60px;
  height: auto;
  display: none;
  cursor: pointer;
}

@media (max-width: 991px) {
  .menu {
    display: block;
  }
  .navbar .nav-link {
    display: block; /* Hiển thị các mục menu có điều kiện */
  }
}

.navbar .nav-link {
  color: white;
  text-decoration: none;
  padding: 15px;
}

.floating-contacts {
  position: fixed;
  bottom: 11%;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.contact-item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-item img:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.guide-plugin {
  position: fixed;
  bottom: 20%; 
  right: 5px;
  z-index: 800;
}

.guide-icon {
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.guide-form {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  max-height: 300px;
  overflow-y: auto; 
}

.qa-box {
  margin-bottom: 20px;
}

.question {
  font-weight: bold;
  color: #333;
}

.answer {
  color: #555;
}
</style>

