<template>
  <div class="cont">
    <Breadcumb
      :topic="area_data.name_area">
    </Breadcumb>
    <br>
    <div class="container">
      <div class="row featurette">
        <div class="col-md-7" style="display: flex; align-items: center;">
          <p class="lead">{{area_data.large_description[0]}}</p>
        </div>
        <div class="col-md-5" style="display: flex; align-items: center;">
          <img class="large_img rounded" :src="require(`~/assets/img${area_data.large_image[0]}`)" >
        </div>
      </div>
    </div>
    <br>
    <div style="background-color: #0071CE;">
      <br>
      <br>
      <div class="container">
        <div class="row justify-content-center">
          <div  class="col-lg-4 col-sm-12 align-self-md-start ">
            <div class="text-left">
            <img class="img-thumbnail small_img img-responsive" :src="require(`~/assets/img${area_data.small_image[0]}`)" width="200" height="50" >
            </div>
            <p style="color: white;"><br>{{area_data.small_description[0]}}</p>
          </div>
          <div class="col-lg-4 col-sm-12 align-self-md-start ">
            <div class="text-left">
            <img class="img-thumbnail small_img img-responsive" :src="require(`~/assets/img${area_data.small_image[1]}`)" width="200" height="50">
            </div>
            <p style="color: white;"><br>{{area_data.small_description[1]}}</p>
          </div>
          <div class="col-lg-4 col-sm-12 align-self-md-start ">
            <div class="text-left">
            <img class="img-thumbnail small_img img-responsive " :src="require(`~/assets/img${area_data.small_image[2]}`)" width="200" height="50">
            </div>
            <p style="color: white;"><br>{{area_data.small_description[2]}}</p>
          </div>
        </div>
        <br>
      </div>
    </div>
    <div class="container">
      <br><br>
    <div class="row featurette">
      <div class="col-md-7 order-md-2" style="display: flex; align-items: center;">
        <p class="lead">{{area_data.large_description[1]}}</p>
      </div>
      <div class="col-md-5 order-md-1" style="display: flex; align-items: center;">
        <img class="large_img rounded" :src="require(`~/assets/img${area_data.large_image[1]}`)" >
      </div>
    </div>
      <br><br>
    </div>
    <div style="background-color: #0071CE;">
      <br><br>
      <div class="container">
        <div class="row align-self-md-center">
          <div class="col text-center justify-content-center">
            <h2 class="text-light">Bestselling</h2>
            <ItemProduct
              :product_name="product_data.name" :description="product_data.brief_description"
              :url = "product_data.image_product"
              :id = "product_data.id"
            />
          </div>
          <div class="col text-center justify-content-center">
            <h2 class="text-light">Supervisor</h2>
            <br>
            <ItemPerson
              :name="supervisor_data.name"
              :surname="supervisor_data.surname"
              :role="supervisor_data.role"
              :url = "supervisor_data.id_image"
              :id="supervisor_data.id"
            />
          </div>
        </div>
      </div>
      <br><br>
    </div>
    <div class="container">
      <br><br>
      <div class="row ">
        <div class="col-md-7" style="display: flex; align-items: center;">
          <p  class="lead">{{area_data.large_description[2]}}</p>
        </div>
        <div class="col-md-5" style="display: flex; align-items: center;">
          <img class="large_img rounded" :src="require(`~/assets/img${area_data.large_image[2]}`)" >
        </div>
      </div>
      <br>
    </div>
    <br>
  </div>
</template>
<script>
/*eslint-disable*/

import ItemPerson from '../../components/ItemPerson';
import ItemProduct from '../../components/ItemProduct';


export default {
  name: 'Area',
  components: {ItemPerson, ItemProduct},
  template: 'default',
  props: {
    groupTopic: 'Areas',
    singleTopic: '',
  },
//Method used to retrieve data regarding an area, and its related supervisor and product best selling through an axios request
  async asyncData ({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/areas/${id}`, { headers: { 'Access-Control-Allow-Origin': '*' }})
    const area_data = data.area
    const supervisor_data= data.manager
    const product_data = data.topProduct
    return {
      area_data,
      supervisor_data,
      product_data
    }
  },


}
</script>

<style scoped>
.image-area img {
  width: auto;
  height: auto;
}



.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.small_img {
  width: 250px;
  height: 150px;
}
.large_img{
  width: 400px;
  height: 200px;
}
.cont{
  height : 100%
}
</style>
