<template>
  <a class="btn" @click="goToPerson(`/people/${id}`)">
  <div class="person-container">
    <div class="bg-white rounded shadow-sm py-5 px-4">
      <img :src="require(`~/assets/img${url}`)"  width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
      <h5 class="mb-0" role="button" >{{ name }} {{ surname }}</h5><span class="small text-uppercase text-muted">{{role}}</span>
    </div>
  </div>
  </a>
</template>

<script>
/* eslint-disable */
export default {
  name: "Person",
  props: {
    name: {type: String, default: () => ''},
    surname: {type: String, default: () => ''},
    role: {type: String, default: () => ''},
    url: {type: String, default: () => ''},
    id: {type: Number, default: () => 0}
  },
  methods: {
    goToPerson(path) {
      this.$router.push({ path })
    },
  },
}

</script>

<style scoped>
/* eslint-disable */
.person-container {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.person-container:hover{
  border: cornflowerblue;
  border-style: solid;
}

</style>
