<template>
    <div>
      <div class="menu-container">
        <div class="menu-item">
            <router-link v-if="idadmin" :to="`/${idadmin}/quanly`" class="menu-link">Quản lý phòng</router-link>
        </div>
        <div class="menu-item">
          <router-link :to="`/${idadmin}/dichvunhahang`" class="menu-link">Dịch vụ nhà hàng</router-link>
        </div>
        <div class="menu-item">
          <router-link :to="`/${idadmin}/question`" class="menu-link">Hỏi & Đáp</router-link>
        </div>
        <div class="menu-item">
          <router-link :to="`/${idadmin}/config`" class="menu-link">Khác</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    computed: {
        idadmin() {
        return this.$route.params.idadmin;
        }
    }
  };
  </script>
  
  <style scoped>
  .menu-container {
    display: flex;
  }
  
  .menu-item {
    margin-right: 10px;
  }
  
  .menu-link {
    background-color: #f0f0f0;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-decoration: none;
    color: #333;
  }
  
  .menu-link:hover {
    background-color: #ccc;
    color: #fff;
  }
  </style>
  