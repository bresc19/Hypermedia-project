<template>
  <!-- card of the single person: This component is used in the page of group of people  -->
  <a class="btn" @click="goToPerson(`/people/${id}`)">
    <div style="  box-shadow: 0 0 10px white;">
      <div class="person-container bg-white rounded shadow-sm py-5 px-4" style="background-color: #bee5eb;">
        <img style="border: 2px double #0071CE;" :src="require(`~/assets/img${url}`)" class="align-self-start img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
        <h5 class="mb-0" role="button" >{{ name }} </h5>
        <span class="small text-uppercase text-muted align-self-end">{{role}}</span>
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
    role: {type: String, default: () => ''},
    url: {type: String, default: () => ''},
    id: {type: Number, default: () => 0}
  },
  methods: {
    //The following methods is used to rederict user to the page of the single topic (single person) of each through this card. the path pushed correspond to the id number of each product. Id corresponds to the primary key in the DB.
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
  border: 0.5px solid #000000;
}



</style>
