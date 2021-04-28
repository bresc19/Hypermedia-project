<template>
  <div class="list">
    <div
        class="post"
        v-for="(post, postIndex) of postsList"
        :key="'post-'+ postIndex"
    >
      <router-link :to="'/posts/'+post.id">
        <blog-post
          :id = "post.id"
          :title = "post.title"
          :content = "post.content"
        ></blog-post>
      </router-link>
      <router-link to="/">
      <div class="go-bakc">Go Home</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";

export default {
  components: {
    BlogPost,
  },
  data(){
    return {
      postsList: [],
    }
  },
  mounted(){
    this.postsList = this.$store.state.posts
  }
}
</script>

<style scoped>

</style>