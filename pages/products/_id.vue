<template>

  <div class="wrapper">
    <Breadcumb
      :topic="product_data.name"
    ></Breadcumb>
    <br>
    <br>
    <div class="container">
      <div class="row ">
        <div class="col-sm-8 text-left align-middle "><br>{{product_data.large_description}}</div>
        <div class="col-sm-4 text-center  align-self-md-center">
          <img id="image-product" :src="require(`~/assets/img${product_data.large_image}`)">
        </div>
      </div>
      <br>
      <hr class="featurette-divider">
      <br>
      <div class="row">
        <div class="col-sm text-center">
          <h2>Functionalities</h2>
          <br>
          <br>
          <img src="~/assets/img/functionalities.png" width="70%">
        </div>
        <div class="col-sm">
          <br>
          <br>
          <p>{{product_data.functionalities[0]}}</p>
        </div>
        <div class="col-sm">
          <br>
          <br>
          <p>{{product_data.functionalities[1]}}</p>
        </div>
        <div class="col-sm">
          <br>
          <br>
          <p>{{product_data.functionalities[2]}}</p>
        </div>
      </div>
      <div>
      </div>
      <br>
      <hr class="featurette-divider">
      <br>
      <h2>Collaborations</h2>
      <br>
     <div class="container">
      <div class="row">
        <div class="col-sm ml-5">
          <ItemPerson
            :id="manager.id"
            :name="manager.name"
            :role="manager.role"
            :url="manager.id_image"
          />
        </div>
        <div class="col  text-left justify-content-center align-middle" >
          <h4>Team Members</h4>
          <hr class="featurette-divider">

          <p v-for="item in manager.team_members" :key="item">{{item}}</p>
        </div>
        <div class="col align-self-start">
          <img width = "60%" :src="require(`~/assets/img${area_data.area_logo}`)" role="button" @click="goToArea(`/areas/${area_data.id}`)">
        </div>      </div>
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


  async asyncData ({ $axios, route }) {
    const { id } = route.params
    console.log('this url', process.env.BASE_URL)
    const { data } = await $axios.get(process.env.BASE_URL+`/api/products/${id}`)

    const product_data = data.product
    const manager = data.manager
    const area_data = data.areaImage
    console.log(area_data)
    return {
      product_data,
      manager,
      area_data
    }
  },
  methods: {
    goToArea(path) {
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
  width: 300px;
  height: 150px;
}

</style>
