<template>
  <div class="col-container">

    <div class="col">
      <h2>TopTech</h2>
      <a class="footer-link" id="footer-left">© 2021 TopTech S.p.A. <br>
        Via Schiaffino 11
        20158 Milano, Italy <br>
        P. IVA IT13187610152</a>

    </div>

    <div class="col">
      <h2>Explore</h2>
      <NuxtLink class="footer-link" to="/">Home</NuxtLink>
      <NuxtLink class="footer-link" to="/products">Products</NuxtLink>
      <NuxtLink class="footer-link" to="/people"> People </NuxtLink>
      <NuxtLink class="footer-link" to="/aboutus">About Us</NuxtLink>
      <NuxtLink class="footer-link" to="/contact">Contact</NuxtLink>
    </div>

    <div class="col">
      <h2>Areas</h2>
      <NuxtLink class="footer-link" to="#">Data Bases</NuxtLink>
      <NuxtLink class="footer-link" to="#">IoT</NuxtLink>
      <NuxtLink class="footer-link" to="#">Security</NuxtLink>
      <NuxtLink class="footer-link" to="#">Machine Learning</NuxtLink>
    </div>

    <div class="col">
      <h2>Social</h2>
      <NuxtLink href="#" class="fa fa-facebook"></NuxtLink>
      <NuxtLink href="#" class="fa fa-instagram"></NuxtLink>
      <NuxtLink href="#" class="fa fa-linkedin"></NuxtLink>
      <NuxtLink href="#" class="fa fa-twitter"></NuxtLink>
    </div>


  </div>

</template>

<script>
export default {
  name: "Footer"
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
