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
          <div class="col-sm container-menu-item" >
            <a class="menu-item" href="/">Home</a>
          </div>
          <div class="col-sm container-menu-item">
            <a class="menu-item" href="/products">Products</a>
          </div>
          <div class="col-sm container-menu-item">
            <a class="menu-item" href="/areas">Areas</a>
          </div>
          <div class="col-sm container-menu-item">
            <a class="menu-item" href="people">People</a>
          </div>
          <div class="col-sm container-menu-item">
            <a class="menu-item" href="/aboutus">About Us</a>
          </div>
          <div class="col-sm container-menu-item">
            <a class="menu-item" href="/contact">Contact</a>
          </div>
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
