<template>
  <main>
    <Header />
    <Nuxt />
    <Footer />
  </main>
</template>
<script>
/* eslint-disable */
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style scoped>
/* eslint-disable */
html, body {
  min-width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow:hidden;
}
</style>
