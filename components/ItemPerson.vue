<template>
  <a class="btn" @click="goToPerson(`/people/${id}`)">
    <div class="person-container bg-white rounded shadow-sm py-5 px-4" style="background-color: #bee5eb">
      <img :src="require(`~/assets/img${url}`)" class="align-self-start img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
      <h5 class="mb-0" role="button" >{{ name }} </h5>
      <span class="small text-uppercase text-muted align-self-end">{{role}}</span>
    </div>
  </a>
</template>

<script>
/* eslint-disable */
export default {
  name: "Person",
  props: {
    name: {type: String, default: () => ''},
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
  background-color: #cffcff;
  width: 220px;
  height: 310px;
  margin: 0 auto;
  text-align: center;
}
.person-container:hover{
  border: cornflowerblue;
  border-style: solid;
}



</style>
