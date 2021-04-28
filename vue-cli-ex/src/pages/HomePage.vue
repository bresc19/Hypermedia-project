<template>
<div class="homepage">
  <h1>This is the homepage</h1>
  <p> More will be later on</p>
  <button @click="goToPostList">Go to posts</button>
</div>
</template>

<script>
export default {
  methods: {
    goToPostList(){
      window.location.href = "/posts";
    },
  },
};
</script>

<style scoped>

</style>