<template>

  <div class="wrapper">
    <Breadcumb
      :topic="product_data.name"
    ></Breadcumb>
    <br>
    <div class="container">
      <div class="row ">
        <div class="col-sm-8 text-left align-middle ">
          <br>{{product_data.large_description}}
        </div>
        <div class="col-sm-4 align-self-md-center">
          <img id="image-product" :src="require(`~/assets/img${product_data.large_image}`)">
        </div>
      </div>
      <br>
    </div>
    <div style="background: #0071CE;">
      <div class="container">
        <br>
        <h2 class="text-light">Collaborations</h2>
        <hr style="border: 1px solid white;">
        <br>
        <div class="row align-middle">
          <div class="col ">
            <ItemPerson
              :id="manager.id"
              :name="manager.name"
              :role="manager.role"
              :url="manager.id_image"
            />
          </div>
          <div class="col  text-left align-self-md-center" >
            <h4 class="text-light">Team Members</h4>
            <hr style="border: 1px solid white;">
              <p class="text-light" v-for="item in manager.team_members" :key="item">{{item}}</p>
            <br>
            <h4 class="text-light">Area</h4>
            <hr style="border: 1px solid white;">
            <div class="">
              <img style="background: white; box-shadow: 0 0 15px rgba(255,255,255,0.3);" class="area_logo" width = "40%" :src="require(`~/assets/img${area_data.area_logo}`)" role="button" @click="goToArea(`/areas/${area_data.id}`)">
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
    <div class="container">
      <br>
      <br>
      <br>
      <div class="row d-flex align-self-md-center">
        <div class="col-lg justify-content-center">
          <h2>Functionalities</h2>
          <img src="~/assets/img/functionalities.png" width="70%">
        </div>
        <div class="col-lg justify-content-center">
          <br>
          <br>
          <p>{{product_data.functionalities[0]}}</p>
        </div>
        <div class="col-lg justify-content-center">
          <br>
          <br>
          <p>{{product_data.functionalities[1]}}</p>
        </div>
        <div class="col-lg justify-content-center">
          <br>
          <br>
          <p>{{product_data.functionalities[2]}}</p>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>

</template>

<script>
/* eslint-disable */

import ItemPerson from "../../components/ItemPerson";
export default {
  name: "Product",
  components: "ItemPerson",
  props: {
    groupTopic: 'Products',
    singleTopic: '',
  },

//Method used to retrieve data regarding a product, its related area and manager.

  async asyncData ({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(process.env.BASE_URL+`/api/products/${id}`)
    const product_data = data.product
    const manager = data.manager
    const area_data = data.areaImage
    return {
      product_data,
      manager,
      area_data,
    }
  },
  methods: {
    goToArea(path) {
      this.$router.push({ path })
    },
    goToPerson(path) {
      this.$router.push({ path })
    },
  },


}
</script>

<style scoped>
/* eslint-disable */
.container {
  max-width: 960px;
}

.site-header a {
  color: #999;
  transition: ease-in-out color .15s;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

#image-product{
  margin: 0 auto;
  padding: 10px;
  width: 350px;
  height: 180px;
}

.area_logo{

}

.area_logo:hover{
border: 2px solid black;}



</style>
