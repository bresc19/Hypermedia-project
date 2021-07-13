
<template>
  <div>
    <Breadcumb
      :topic="person_data.name">
    </Breadcumb>
    <p class="secondary-title">Anagafic</p>
    <hr>
    <div class="container people-card ">
      <div class="row w-75" style="margin: 0 auto;">
        <div class="col-md-6 justify-content-center align-self-center" style="text-align: center; vertical-align: middle;">
          <img class="img-thumbnail rounded" :src="require(`~/assets/img${person_data.id_image}`)" width="50%" height="50%">
        </div>
        <div class="col-md-6 align-self-md-center top-50">
          <ul>
            <li>Name: {{person_data.name}}</li>
            <li>Role: {{person_data.role}}</li>
            <li @click="goToArea(`/areas/${id_area.id}`)">Area: {{person_data.area}}</li>
            <li>Years of collaboration: {{person_data.contribution_years}}</li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="row p-5">
        <p class="blockquote text-center display-4">{{ person_data.cit }} </p>
        <hr>
        <p class="display-6">{{ person_data.contribution_description }}</p>
      </div>
    </div>
    <br>
    <br>
    <div class="container">
      <h2>Contributions</h2>
      <hr>
      <div class="row">
        <div class="col" v-for="item in products_data"
             v-bind:key="item.name" >
          <ItemProduct
            :product_name="item.name" :description="item.brief_description"
            :url = "item.image_product"
            :id = "item.id">
          </ItemProduct>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
import Breadcumb from "../../components/Breadcumb";
import ItemProduct from "../../components/ItemProduct";
export default {
  name: 'Person',
  components: {ItemProduct, Breadcumb},
  layout: 'default',
//Method used to retrieve data regarding a person, its related products and the id of the area that belongs to (to allow its transition link)
  async asyncData ({ $axios, route }) {
    const { id } = route.params
    console.log('this url', process.env.BASE_URL)
    const { data } = await $axios.get(process.env.BASE_URL+`/api/people/${id}`)
    //eslint-disable-next-line camelcase
    const person_data = data.person
    const id_area = data.areaID
    let products_data = data.products
    products_data = [].concat.apply([], products_data)
    console.log(data.products)
    return {
      person_data,
      products_data,
      id_area
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



img{
  max-width: 100%;
}


div.gallery img {
  width: 100%;
  height: auto;
}


.secondary-title{
  padding: 15px;
  text-align: left;
  font-size: 24px;
}

a{
  color: black;
  text-decoration: none;
}
ul {
  list-style-type: none;
}
.people-card {
  background-color: #bee5eb;
  padding: 10px;
}
</style>
