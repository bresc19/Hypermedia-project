<template>
  <div class="container">
    <br>
    <p class="h2">Latest updates</p>
    <hr>
    <br>
    <div class="jumbotron text-center" id="jumbotron-img" :style="{
      'backgroundImage': 'url(' + require(`~/assets/img${product_data.large_image}`) + ')'
  }">
      <div class="container">
        <div style="background-color: #cffcff;" >
        <h1 class="text-center">{{ product_data.name }}</h1>
        <p class="lead ">{{product_data.brief_description}}</p>
        </div>
        <p>
          <button  @click="goToProduct(`/products/${product_data.id}`)" type="button" class="btn btn-primary ">See details</button>

        </p>
      </div>
    </div>
    <br>
    <br>
    <div class="container">
      <div class="row" style="display: flex; align-items: center;" >
        <div class="col-lg-6">
          <p class="h3">Built for Change</p>
            <p>Discover how businesses embrace change to drive value in each areas.</p>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <img class="rounded mx-auto d-block" src="~/assets/img/areas11.jpg" width="100%">
              <div class="d-flex justify-content-between align-items-center">
                <br>
                <br>
                <a href="/areas">
                <button type="button" class="btn btn-sm btn-outline-secondary">Go to our Areas</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <br>
      <br>
      <div class="row">
        <div class="col text-center">
          <div class="card">
            <img  class="rounded mx-auto d-block" src="~/assets/img/contact-us.png" width="80%">
            <a href="/contact">
              <button type="button" class="btn btn-primary btn-lg btn-block">Contact Us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'HomePage',
  layout: 'default',


async asyncData ({ $axios }){
  const {data} = await $axios.get(`/api/products/8`)
  const product_data = data.product
 console.log(product_data.large_image)
  return {
    product_data,
  }
},
  methods: {

    goToProduct(path) {
      this.$router.push({path})
    }
  }

}
</script>

<style>
/*eslint-disable*/

#jumbotron-img{
  back: 50%;
}
</style>
