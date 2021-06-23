<template>

  <div class="wrapper">
    <Breadcumb
      :topic="product_data.product.name"></Breadcumb>
    <br>
    <br>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-sm-8">{{product_data.product.large_description}}</div>
        <div class="col-sm-4">
          <img style="margin: 0 auto; padding: 10px; width: 100%;" :src="require(`~/assets/img${product_data.product.large_image}`)">
        </div>
      </div>
      <br>
      <hr class="featurette-divider">
      <br>
      <div class="row">
        <div class="col-sm">
        <h2>Functionalities</h2>
        </div>
        <div class="col-sm">
          <p>{{product_data.product.functionalities[0]}}</p>
        </div>
        <div class="col-sm">
          <p>{{product_data.product.functionalities[1]}}</p>
        </div>
        <div class="col-sm">
          <p>{{product_data.product.functionalities[2]}}</p>
        </div>
      </div>
      <div>
      </div>
      <br>
      <hr class="featurette-divider">
      <br>
      <h2>Collaborations</h2>
      <div class="row justify-content-between">
        <div class="col-sm ml-5">
          <ItemPerson
            :name="product_data.manager.name"
            :surname="product_data.manager.surname"
            :role="product_data.manager.role"
            :url="product_data.manager.id_image"
          />
        </div>
        <div class="col-sm">
          <h4>Team Members</h4>
          <hr class="featurette-divider">
          <div class="col-sm" style="">
              <p v-for="item in product_data.manager.team_members" :key="item">{{item}}</p>
          </div>
        </div>
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



  async asyncData ({ $axios, route }) {
    const { id } = route.params
    console.log('this url', process.env.BASE_URL)
    const { data } = await $axios.get(`/api/products/${id}`)
    const product_data = data
    console.log(product_data.manager)

    return {
      product_data,
    }
  },





}
</script>

<style scoped>
/* eslint-disable */
.container {
  max-width: 960px;
}

/*
 * Custom translucent site header
 */

.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #999;
  transition: ease-in-out color .15s;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

/*
 * Dummy devices (replace them with your own or something else entirely!)
 */

.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, .1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}


/*
 * Extra utilities
 */

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }

.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

.flex-equal > * {
  -ms-flex: 1;
  -webkit-box-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    -webkit-box-flex: 1;
    flex: 1;
  }
}

.overflow-hidden { overflow: hidden; }
</style>
