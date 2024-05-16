<template>
  <header class="header">
    <nav class="nav-wrapper">
      <img class="logo" src="./picture/logo.png" alt="Logo">
      <button><a href="http://localhost:5173/">Trang chủ</a></button>
      <a class="nav-link" href="http://localhost:5173/">Phòng</a>
      <a class="nav-link" href="http://localhost:5173">Đặt phòng</a>
      <a class="nav-link" href="http://localhost:5173">Khuyến mãi</a>
      <a class="nav-link" href="http://localhost:5173/">Dịch vụ</a>
      <a class="nav-link" href="http://localhost:5173/">Liên hệ</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
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
}

button {
  background-color: yellowgreen;
  border: none;
  height: 90px;
  width: 90px;
  margin-left: 10cm; /* Adjust this to position the button correctly */
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
