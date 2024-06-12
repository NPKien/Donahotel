<script >
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  document.body.style.overflowX = 'hidden';
  export default {
      name: 'App',
      components: {
        Header,
        Footer
      }
  }
</script>

<template>
  <div id="app">
    <Header></Header> <br>
    <router-view style="margin-top: 110px;"></router-view><br>
    <div ><Footer></Footer></div>
  </div>
</template>

<style scoped>


</style>
