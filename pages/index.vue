<template>
  <div class="container">
    <br>
    <p class="h2">Latest updates</p>
    <hr>
    <br>
    <div class="jumbotron text-center"  :style="{
      'backgroundImage': 'url(' + require(`../assets/img${product_data.large_image}`) + ')'
  }">
      <div class="container">
        <h1 class="text-center">{{ product_data.name }}</h1>
        <p class="lead text-muted">{{product_data.brief_description}}</p>
        <p>
          <a href="#" class="btn btn-primary my-2">
            See details</a>
        </p>
      </div>
    </div>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <img class="rounded mx-auto d-block" src="~/assets/img/areas11.jpg" width="100%">
              <div class="d-flex justify-content-between align-items-center">
                <br>
                <br>
                <button type="button" class="btn btn-sm btn-outline-secondary">See details</button>
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
  layout: 'default',


async asyncData ({ $axios }){
  const {data} = await $axios.get(`/api/products/4`)
  const product_data = data.product
 console.log(product_data.large_image)
  return {
    product_data,


  }
},

}
</script>

<style>
/*eslint-disable*/
.row{ display: flex; align-items: center;}

</style>
