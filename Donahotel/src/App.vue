<script >
  import Header from './components/Header.vue'
  import HeroSection from './components/HeroSection.vue'
  import ContentSection from './components/ContentSection.vue'
  import Footer from './components/Footer.vue'
  document.body.style.overflowX = 'hidden';
  export default {
      name: 'App',
      components: {
        Header,
        HeroSection,
        ContentSection,
        Footer
      }
  }
</script>

<template>
  <div id="app" style="width: 100%;">
    <Header />
    <HeroSection />
    <ContentSection />
    <div style="margin-bottom: 0; margin-left: 0;"><Footer /></div>
    
  </div>
</template>

<style scoped>


</style>
