<template>
<div class="post-page">
  <h3> {{title}}</h3>
  <hr />
  <p>{{content}}</p>
  <ul>
    <li v-for="(el, elIndex) of Object.keys(veryLarge)" :key="'el -'+elIndex">
      {{ veryLarge[el]}}
    </li>

  </ul>
  <button @click="goBack()">Go back</button>

</div>
</template>

<script>
export default {
  data(){
    return {
      title: "",
      id: -1,
      content: "",
      veryLarge: {
        prop1: "Test1",
        prop2: "Test2",
      },
    }
  },

  mounted(){
    console.log("param", this.$route.params.id);
    const id = +this.$route.params.id;
    const post = this.$store.state.posts.find(el => el.id === id);
    this.title = post.title;
    this.content = post.content;

  },
  methods: {
    goBack(){
      this.$router.back();

    }
  }

};
</script>

<style scoped>

</style>