
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
          <img :src="require(`~/assets/img${person_data.id_image}`)" width="50%" height="50%">
        </div>
        <div class="col-md-6 ">
          <ul>
            <li>Name: {{person_data.name}}</li>
            <li>Role: {{person_data.role}}</li>
            <li @click="goT">Area: {{person_data.area}}</li>
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

  async asyncData ({ $axios, route }) {
    const { id } = route.params
    console.log('this url', process.env.BASE_URL)
    const { data } = await $axios.get(`/api/people/${id}`)
    //eslint-disable-next-line camelcase
    const person_data = data.person


    let products_data = data.products
    products_data = [].concat.apply([], products_data)
    console.log(data.products)
    return {
      person_data,
      products_data
    }
  }

}
</script>

<style scoped>

.grid-container {
  display: grid;
  grid-template-columns: auto auto ;
  grid-gap: 50px;
  background-color: white;
  padding: 120px;
  align-items: center;
  justify-content: center;
}

.grid-people{
  padding: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-people > div{
  horiz-align: center;
  align-items: center;
  justify-content: center;
}

.grid-container > text-right {
  background-color: #ffffff;
  text-align: right;
  font-size: 20px;
  vertical-align: middle;
}

.grid-container > text-left {
  background-color: #ffffff;
  text-align: left;
  font-size: 20px;
  vertical-align: middle;
}

img{
  max-width: 100%;
}

div.gallery {
  border: 1px solid #000000;
}

div.gallery:hover {
  border: 3px solid #000000;
  max-width: 100%;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}

* {
  box-sizing: border-box;
}

.responsive {
  horiz-align: center;
  padding: 0 6px;
  float: left;
  width: 54.99999%;
  max-width: 100%;
  display: inline-block;
}


@media only screen and (max-width: 700px) {
  .responsive {
    width: 49.99999%;
    margin: 6px 0;
  }
}

@media only screen and (max-width: 500px) {
  .responsive {
    width: 100%;
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

div.grid-cell-right {
  vertical-align: middle;
  text-align: right;
}

div.grid-cell-left{
  vertical-align: middle;
  text-align: left;
}

.aboutus-text{
  font-size: 24px;
}

.title-topic-single {
  padding: 10px;
  margin-left: 50px;
  font-size: 18px;
  text-align: left;
}

.secondary-title{
  padding: 15px;
  text-align: left;
  font-size: 24px;
}

.desc{
  font-size: 18px;
  text-align: center;
  font-style: italic;
  text-decoration: none;
  outline: none;
}

.name-surname{
  font-size: 24px;
  text-align: center;
  text-decoration: none;
  outline: none;
}

.no-signature{
  text-decoration: none;
  outline: none;
  color: black;
}

.wrapper {
  position: relative;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  grid-auto-rows: 200px;
}

.cell-product{
  text-align: center;
  width: 150px;
  height: 150px;
}

.cell-product:hover{
  border: solid black;

}

.product-title{
  float: bottom;
  clear: left;
  padding: 4px;
}

.product-image{
  float:top;
  padding: 3px;
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
