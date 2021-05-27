<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>

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
@import '../assets/css/bootstrap.4.1.3.min.css';
@import '../assets/css/bootstrap.4.3.1.min.css';
@import '../assets/css/bootstrap.4.4.min.css';
@import '../assets/css/bootstrap5.min.css';


</style>
