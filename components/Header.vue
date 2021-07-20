<template>
  <header class="container-header">
    <nav class="container container-menu">
      <div class="row align-self-md-center no-gutters" >
        <div class="col-sm container-menu-item " >
          <a class="align-self-md-center" href="/">
            <img style="  transform: translate(0, 75%);"  src="~/assets/img/toptech_logo.png" width="135" height="30">
          </a>
        </div>
        <div class="col-sm">
        </div>
        <div class="col-sm">
        </div>
        <div class="col-sm">
        </div>
        <a class="menu-item col-sm align-self-md-center " href="/">
          <div class="text-center">
            <p>Home</p>
          </div>
        </a>
        <a class=" menu-item col-sm " href="/products">
          <div class="text-center" >
            <p >Products</p>
          </div>
        </a>
        <a class=" col-sm menu-item " href="/areas">
          <div class="text-center" >
            <p >Areas</p>
          </div>
        </a>
        <a class=" menu-item col-sm " href="/people">
          <div class="text-center" >
            <p >People</p>
          </div>
        </a>
        <a class=" menu-item col-sm" href="/aboutus">
          <div class="text-center" >
            <p >About Us</p>
          </div>
        </a>
        <a class=" menu-item col-sm" href="/contact">
          <div class="text-center" >
            <p>Contacts</p>
          </div>
        </a>
      </div>
    </nav>

  </header>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'Header',
  mounted() {
    console.log(window.location.pathname)
  }
}

</script>

<style scoped>
/*eslint-disable*/
.no-gutters{
  margin-right: 0;
  margin-left: 0;
}

.container-header {
  background-color: #0071CE;
  border: 1px solid black;
  height: 80px;
  width: 100%;
}
@media screen and (max-width: 600px) {
  .container-header {
    height: 110%;
  }
  .menu-item {
    vertical-align: middle;
    text-decoration: none;
    color: white;
    transform: translate(0, 20%);
    font-weight: bold;
  }
}


.menu-item{
  vertical-align: middle;
  text-decoration: none;
  color: white;
  transform: translate(0, 65%);
  font-weight: bold;
}

.menu-item:hover{
  text-decoration: underline white;
  text-underline-offset: 2px;

}

.container-menu-item{
  text-align: center;
}
img:hover {
  border-bottom: solid 1.5px #ffffff;
}
</style>
