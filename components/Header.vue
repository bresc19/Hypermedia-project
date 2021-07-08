<template>
  <div class="container-header">
    <div class="container container-menu">
      <div class="row no-gutters" >
        <div class="col-sm container-menu-item" >
          <a href="/">
          <img href="/" src="~/assets/img/toptech_logo.png" width="140" height="40">
          </a>
        </div>
        <div class="col-sm">
        </div>
        <div class="col-sm">
        </div>
        <a class="container-menu-item menu-item " href="/">
          <div class="col-sm align-middle text-center " >
            <p >Home</p>
          </div>
        </a>
        <a class="container-menu-item menu-item " href="/products">
          <div class="col-sm align-middle text-center " >
            <p >Products</p>
          </div>
        </a>
          <a class="container-menu-item menu-item " href="/areas">
        <div class="col-sm align-middle text-center " >
          <p >Areas</p>
        </div>
      </a>
        <a class="container-menu-item menu-item " href="/people">
          <div class="col-sm align-middle text-center " >
            <p >People</p>
          </div>
        </a>
        <a class="container-menu-item menu-item " href="/aboutus">
          <div class="col-sm align-middle text-center " >
            <p >About Us</p>
          </div>
        </a>
        <a class="container-menu-item menu-item " href="/contact">
          <div class="col-sm align-middle text-center " >
            <p >Contacts</p>
          </div>
        </a>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'Header'
}

</script>

<style scoped>

.no-gutters{
  margin-right: 0;
  margin-left: 0;
}

.container-header {
  background-color: #bee5eb;
}

.row {
  margin: 0 auto;
}

.menu-item{
  vertical-align: middle;
  text-decoration: none;
  color: black;
}

.container-menu-item{
  text-align: center;
}

.container-menu-item:hover {
  background-color: #9bb3b0;
}
</style>
