<template>
  <!-- parole orfane -->
  <div>
    <div class="row container-products">
      <div class="col-sm-4 prod-item" >
        <ItemProduct v-for="item in productItems"
                     v-bind:key="item.name"
                     :product_name="item.name" :description="item.brief_description"
                     :url = "item.image_product"
        />
      </div>
    </div>
    <div class="row" id="cont-products-descriptions">
      <div class="card col-sm-4 item-cont-description-products" style="width: 10rem;">
        <h4 style="text-align: center;">Agile transformation</h4>
        <img src="../../assets/img/p1.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Drive disruption by applying Lean principles to achieve substantial performance improvements, accelerating business change.</p>
        </div>
      </div>
      <div class="card col-sm-4 item-cont-description-products" style="width: 10rem;">
        <br><h4 style="text-align: center;">DevOps</h4>
        <img src="../../assets/img/p2.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Streamline IT by bringing business, development and operations teams together and applying automated processes.</p>
        </div>
      </div>
      <div class="card col-sm-4 item-cont-description-products" style="width: 10rem;">
        <h4 style="text-align: center;">Application modernization</h4>
        <img src="../../assets/img/p3.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Transform your legacy applications to become more agile and efficient through the power of New IT.</p>
        </div>
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
    const {data} = await $axios.get(`/api/products`)
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
  width: 80%;
  padding-bottom: 10px;
}

.prod-item {
  padding-top: 20px;

}

.cont-search{
  width: 40%;
  padding: 20px;
  float: right;
}
.text-space{
  min-width: 80px;
}
.pages-class{
  justify-content: center;
}

.item-cont-description-products{
  padding: 20px;
  border: none;
}

#cont-products-descriptions{
  width: 70%;
  padding: 20px;
  margin: 0 auto;
}
</style>
