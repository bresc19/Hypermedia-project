<template>

  <!-- Footer -->
  <footer class="text-center text-lg-start bg-light text-muted footer">
    <!-- Section: Social media -->
    <section
        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >

    </section>

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4" style="text-align: left;">
              TopTech     <i class="fas fa-building"></i>
            </h6>
            <p style="text-align: left;">
              Via Schiaffino 11
              20158 Milano, Italy <br>
              P. IVA IT13187610152
            </p>
          </div>
          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style="text-align: left;">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Explore
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
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style="text-align: left;">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Areas
            </h6>
            <p>
              <a href="#!" class="text-reset">Data Base</a>
            </p>
            <p>
              <a href="#!" class="text-reset">IoT</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Security</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Machine Learning</a>
            </p>
          </div>
          <!-- Grid column -->
          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Social
            </h6>
            <i class="fab fa-facebook-square fa-3x" style="color: #3B5998;"></i>
            <i class="fab fa-twitter-square fa-3x" style="color: #55ACEE;"></i>
            <i class="fab fa-google-plus-square fa-3x" style="color: #dd4b39;"></i>
            <i class="fab fa-instagram-square fa-3x" style="color: #125688;"></i>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">

      <a class="text-reset" style="text-decoration: none;"> Developed by <b>Bresciani Matteo & D'Ascoli Gabriele </b><br>
        Politecnico of Milan</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->

</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "../assets/css/style.css";
* {
  box-sizing: border-box;
}

.col-container {
  position: relative;
  display: table;
  width: 100%;
  bottom: 0;
  border-top:1px solid #00F0FF;
  horiz-align: center;
}

.col {
  display: table-cell;
  flex: 1;
  padding: 16px;
  background: #7F828B;
  horiz-align: center;
}

@media only screen and (max-width: 600px) {
  .col {
    display: inline-block;
    width: 100%;
  }
}

/* Style all font awesome icons */
.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;

}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
}

.fa-instagram {
  background: #125688;
  color: white;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}

a.footer-link{
  display: block;
  text-decoration: none;
  outline: none;
  color: black;
}

#footer-left{
  color: #adc9ff;
}

</style>
