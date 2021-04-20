<template>
  <div id="app">
    <home-page v-if="currentPage === 'home'" />
    <post-list-page v-if="currentPage === 'posts'" />
 </div>
</template>

<script>

import HomePage from './pages/HomePage.vue';
import PostListPage from "./pages/PostListPage.vue";

export default {
  name: "App",
  components: {
    HomePage,
    PostListPage,
  },
  data(){
    return {
      currentPage: "home"
    }
  },
  mounted(){
    if(window.location.pathname === "/"){
      this.currentPage = "home"
    } else if(window.location.pathname === "/posts"){
      this.currentPage = "posts"
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
