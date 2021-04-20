<template>
<div class="list">
  <blog-post
      :id = "1"
      :title = "'First Post title'"
      :content = "'First Post content'"
  ></blog-post>
  <blog-post
      :id = "2"
      :title = "'Second Post title'"
      :content = "'Second Post content'"
  ></blog-post>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
export default {
  components: {
    BlogPost,
  }
}
</script>

<style scoped>

</style>