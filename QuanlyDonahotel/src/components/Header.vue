<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <div class="row w-100 align-items-center no-gutters">
          <div class="col-2 col-lg-1 d-flex justify-content-center justify-content-lg-start">
          </div>
          <div class="col-10 col-lg-7 d-flex justify-content-center justify-content-lg-start">
            <a href="">
              <img class="logo" src="./picture/logo.png" alt="Logo">
            </a>
          </div>
          <div class="col-12 col-lg-4 d-flex justify-content-end align-items-center">
            <img v-if="isLoggedIn" src="./picture/logout.png" alt="Logout" style="width: 30px; height: auto; cursor: pointer;" @click="handleLogout">
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    checkLoginStatus() {
      this.isLoggedIn = !!localStorage.getItem('idadmin');
    },
    handleLogout() {
      localStorage.removeItem('authToken');
      localStorage.removeItem('idadmin');
      this.isLoggedIn = false;
      this.$router.push('/login');
    }
  },
  created() {
    this.checkLoginStatus();
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

.logo {
  width: 260px;
  height: auto;
}

.menu {
  width: 60px;
  height: auto;
  cursor: pointer;
}

.navbar .nav-link {
  color: white;
  text-decoration: none;
  padding: 15px;
}
</style>
