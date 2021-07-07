<template>
  <div class="person-container">
    <div class="bg-white rounded shadow-sm py-5 px-4">
      <img :src="require(`~/assets/img${url}`)"  width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
      <h5 class="mb-0" role="button" @click="goToPerson(`/people/${id}`)">{{ name }} {{ surname }}</h5><span class="small text-uppercase text-muted">{{role}}</span>
    </div>
  </div>
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
</style>
