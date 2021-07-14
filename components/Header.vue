<template>
  <header class="container-header">
    <nav class="container container-menu">
      <div class="row align-self-md-center no-gutters" >
        <div class="col-sm container-menu-item" >
          <a href="/">
          <img href="/" src="~/assets/img/toptech_logo.png" width="139" height="35">
          </a>
        </div>
        <div class="col-sm">
        </div>
        <div class="col-sm">
        </div>
        <a class="menu-item align-self-md-center " href="/">
          <div class="col-sm text-center">
            <p>Home</p>
          </div>
        </a>
        <a class=" menu-item " href="/products">
          <div class="col-sm align-middle text-center " >
            <p >Products</p>
          </div>
        </a>
          <a class=" align-middle menu-item " href="/areas">
        <div class="col-sm  text-center " >
          <p >Areas</p>
        </div>
      </a>
        <a class=" menu-item " href="/people">
          <div class="col-sm align-middle text-center " >
            <p >People</p>
          </div>
        </a>
        <a class=" menu-item " href="/aboutus">
          <div class="col-sm align-middle text-center " >
            <p >About Us</p>
          </div>
        </a>
        <a class=" menu-item " href="/contact">
          <div class="col-sm align-middle text-center " >
            <p >Contacts</p>
          </div>
        </a>
        </div>
      </nav>

    </header>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'Header'
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
  border: 0.5px solid black;
}

.menu-item{
  vertical-align: middle;
  text-decoration: none;
  color: white;
}

.menu-item:hover{
color: black;
}

.container-menu-item{
  text-align: center;
  border: 1px solid white;
}
.container-menu-item:hover {
  border: solid 2px #ffffff;
}

</style>
