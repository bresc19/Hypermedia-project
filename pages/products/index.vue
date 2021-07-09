<template>
  <!-- parole orfane -->
  <div>
    <div class="container">
      <br>
      <h1 class="h2">Products</h1>
      <hr>
      <div class="row container-products">
        <div class="col-lg-4 col-sm-12"  v-for="item in productItems"
             v-bind:key="item.name" >
          <ItemProduct
            :product_name="item.name" :description="item.brief_description"
            :url = "item.image_product"
            :id = "item.id"
          />
        </div>
      </div>
      <div class="container">
        <div class="row" id="cont-products-descriptions">
          <div class="card col-lg-4 col-sm-12 item-cont-description-products" style="width: 10rem;">
            <br>
            <h4 style="text-align: center; vertical-align: top">Agile transformation</h4>
            <img src="../../assets/img/p1.png" class="card-img-top" width="80%">
            <div class="card-body">
              <p class="card-text">Drive disruption by applying Lean principles to achieve substantial performance improvements, accelerating business change.</p>
            </div>
          </div>
          <div class="card col-lg-4 col-sm-12 item-cont-description-products" style="width: 10rem;">
            <br><h4 style="text-align: center; vertical-align: top">DevOps</h4>
            <img src="../../assets/img/p2.png" class="card-img-top" width="80%" >
            <div class="card-body">
              <p class="card-text">Streamline IT by bringing business, development and operations teams together and applying automated processes.</p>
            </div>
          </div>
          <div class="card col-lg-4 col-sm-12 item-cont-description-products" style="width: 10rem;">
            <h4 style="text-align: center; vertical-align: top">Application modernization</h4>
            <img src="../../assets/img/p3.png" class="card-img-top" width="80%">
            <div class="card-body">
              <p class="card-text">Transform your legacy applications to become more agile and efficient through the power of New IT.</p>
            </div>
          </div>
        </div>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ItemProduct from "../../components/ItemProduct";
export default {
  name: "Products",
  components: {ItemProduct},
  layout: 'default',
  async asyncData({ $axios }) {
    const {data} = await $axios.get(process.env.BASE_URL+`/api/products`)

    const productItems = data

    console.log(productItems)

    return{
      productItems,
    }
  },

}
</script>

<style scoped>
/* eslint-disable */

.container-products{
  margin: 0 auto;
  width: 100%;
  padding-bottom: 20px;
}

img {
  width: auto;
  display: block;
  margin: 0 auto;
}
.item-cont-description-products{
  padding: 20px;
  border: none;
}
p{
  font-size: 12px;
}
.card {
  max-height: 400px;
}
</style>
