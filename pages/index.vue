<template>
  <div>
    <div>
      <div class>
          <div class>
            <img class="img-fluid" width="100%" src="~/assets/img/toptech_homepage.png" alt="Responsive image" >
          </div>
        </div>
    </div>
    <div style="background-color: #0071CE; ">
      <br>
      <div class="container">
        <div class="row" style="display: flex; align-items: center;" >
          <div class="col-lg-6 text-center">
            <div class="card div-border " style="width: 50%; margin: 0 auto;">
              <div class="card-body">
                <img class="rounded mx-auto d-block" alt="allareas"  src="~/assets/img/areas11.jpg" width="100%">
                <br>
                <div class="d-flex justify-content-center  align-items-center">
                  <br>
                  <br>
                  <a href="/areas">
                    <button type="button" class="btn square_btn ">Go to our Areas</button>
                  </a>
                </div>
              </div>
          </div>
          </div>
          <div class="col-lg-6 ">
            <p class="h3 text-light">Built for Change</p>
            <p class="h5 text-light"> Discover how businesses embrace change to drive value in each areas.</p>
          </div>

        </div>
        <br>
        <br>
        <div class="row">
          <div class="col align-self-center">
            <div class="text-center card div-border" style="width: 200px; margin: 0 auto;">
              <img  class="rounded mx-auto d-block" alt="contactuspage" src="~/assets/img/contact-us.png" width="100%">
              <a href="/contact">
                <button type="button" style="text-decoration: none; user-select: none;" class="btn square_btn">
                  Contact Us
                </button>
                <br>
                <br>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br>
    </div>
    <div>
      <div class="container">
        <div>
        </div>
        <br>
        <br>
        <p class="h2 text-center">Latest updates</p>
        <hr>
        <br>
        <div class="jumbotron text-center div-border" id="jumbotron-img" :style="{
      'backgroundImage': 'url(' + require(`~/assets/img${product_data.large_image}`) + ')'
  }">
          <div class="container">
            <div style="background-color: #0071CE;" >
              <h1 class="text-center text-light">{{ product_data.name }}</h1>
              <p class=" text-light ">{{product_data.brief_description}}</p>
            </div>
            <p>
              <button  @click="goToProduct(`/products/${product_data.id}`)" type="button" class="btn square_btn btn-primary ">See details</button>
            </p>
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
//background-color: #bee5eb;
}
#jumbotron-img{
  back: 50%;
}

.div-border{
  border: 2px solid #0071CE;
}

a:hover
{
  text-decoration: none;
}
.btn:active {
  border-bottom: solid 2px #fd9535;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}


html, body {
  min-width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}


</style>
