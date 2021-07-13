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
              <img class="rounded mx-auto d-block" alt="allareas"  src="~/assets/img/areas11.jpg" width="100%">
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
        <div class="col-sm justify-content-md-center">
          <div class="card align-self-md-center" style="width: 80%;">
            <img  class="rounded mx-auto d-block" alt="contactuspage" src="~/assets/img/contact-us.png" width="50%">
            <a href="/contact">
              <button type="button" style="text-decoration: none;" class="btn btn-primary btn-block">
                Contact Us
              </button>
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

//method used to retrieve from db the 8th product which is the latest arrival
async asyncData ({ $axios }){
  const {data} = await $axios.get(`/api/products/8`)
  const product_data = data.product
  return {
    product_data,
  }
},
  //method used to redirect the page to the page of the product, given the id number
  methods: {
    goToProduct(path) {
      this.$router.push({path})
    }
  }

}
</script>

<style>
/*eslint-disable*/
html, body {
  min-width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #bee5eb;
}
#jumbotron-img{
  back: 50%;
}

</style>
