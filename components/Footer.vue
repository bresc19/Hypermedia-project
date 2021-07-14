<template>

  <footer class="text-center text-lg-start text-muted footer" style="background: #0071CE">
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <br>
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4" style="text-align: left;">
              <p>TopTech</p>
            </h6>
            <p style="text-align: left;">
              Via Schiaffino 11
              20158 Milano, Italy <br>
              P. IVA IT13187610152
            </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style="text-align: left;">
            <h6 class="text-uppercase fw-bold mb-4">
              <p>Explore</p>
            </h6>
            <p>
              <a href="/products" class="text-reset">Products</a>
            </p>
            <p>
              <a href="/people" class="text-reset">People</a>
            </p>
            <p>
              <a href="/aboutus" class="text-reset">About Us</a>
            </p>
            <p>
              <a href="/contact" class="text-reset">Contact</a>
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style="text-align: left;">
            <h6 class="text-uppercase fw-bold mb-4">
              <p>Areas</p>
            </h6>
            <p>
              <a @click="goToArea(process.env.BASE_URL+`/areas/${1}`)" style="cursor:pointer;" class="text-reset" >Data Base</a>
            </p>
            <p>
              <a @click="goToArea(process.env.BASE_URL+`/areas/${2}`)" style="cursor:pointer;" class="text-reset" >IoT</a>
            </p>
            <p>
              <a @click="goToArea(process.env.BASE_URL+`/areas/${3}`)" style="cursor:pointer;" class="text-reset" >Security</a>
            </p>
            <p>
              <a @click="goToArea(process.env.BASE_URL+`/areas/${4}`)" style="cursor:pointer;" class="text-reset" >Machine Learning</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="text-center" style="background-color: white;">
      <p style="text-decoration: none; color: black"> Developed by <b>Bresciani Matteo & D'Ascoli Gabriele </b><br>
        Politecnico of Milan</p>
    </div>
  </footer>

</template>

<script>
/* eslint-disable */
export default {
  name: 'Footer',
  //the method is used in order to redirect the navigation on click to each area. Each area is associated to an id number (1-2-3-4). The id number is the primary key of each area in the DB
  methods: {
    goToArea(path) {
      this.$router.push({ path })
    },
  },
}
</script>

<style scoped>
/* eslint-disable */
* {
  box-sizing: border-box;
}
p{
  color: white;
}

</style>
