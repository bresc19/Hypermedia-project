<template>

  <footer class="text-center text-lg-start text-muted footer" style="background: #0071CE">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4" style="text-align: left;">
              <p>TopTech</p>
            </h6>
            <p style="text-align: left;">
              Via Schiaffino 11<br>
              20158 Milano, Italy <br>
              P. IVA IT13187610152
            </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style="text-align: left;">
            <h6 class="text-uppercase fw-bold mb-4">
              <p>Explore</p>
            </h6>
              <a href="/products" class=""><p class="text-footer">Products</p></a>
              <a href="/people" class=""><p class="text-footer">People</p></a>
              <a href="/aboutus" class=""><p class="text-footer">About Us</p></a>
              <a href="/contact" class=""><p class="text-footer">Contact</p></a>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style="text-align: left;">
            <h6 class="text-uppercase fw-bold mb-4">
              <p>Areas</p>
            </h6>
              <a @click="goToArea(process.env.BASE_URL+`/areas/${1}`)" style="cursor:pointer;" class="text-reset" ><p class="text-footer">Data Base</p></a>
              <a @click="goToArea(process.env.BASE_URL+`/areas/${2}`)" style="cursor:pointer;" class="text-reset" ><p class="text-footer">IoT</p></a>
              <a @click="goToArea(process.env.BASE_URL+`/areas/${3}`)" style="cursor:pointer;" class="text-reset" ><p class="text-footer">Security</p></a>
              <a @click="goToArea(process.env.BASE_URL+`/areas/${4}`)" style="cursor:pointer;" class="text-reset" ><p class="text-footer">Machine Learning</p></a>
          </div>
        </div>
      </div>
    <div class="text-center" style="background-color: white;">
      <p class="text-footer" style="text-decoration: none; color: black"> Developed by <b>Bresciani Matteo & D'Ascoli Gabriele </b><br>
        Politecnico of Milan</p>
      <br>
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
.text-footer{
  color: white;
}
.text-footer:hover{
  text-decoration: underline white;
  text-underline-offset: 2px;
}
.text-center{
  transform: translate(0, 15%);

}

</style>
