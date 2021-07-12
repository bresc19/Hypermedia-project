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
        <a class=" menu-item " href="/">
          <div class="col-sm align-middle text-center " >
            <p >Home</p>
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
  background-color: rgba(0, 128, 128, 0.46);
  border: 0.5px solid black;
}

.row {
  margin: 0 auto;
}

.menu-item{
  vertical-align: middle;
  text-decoration: none;
  color: rgba(55, 59, 62, 0.74);
}

.menu-item:hover{
color: black;
}
.menu-item:hover{
  color: black;
}

.container-menu-item{
  text-align: center;
}
.container-menu-item:hover {
  background-color: #9bb3b0;
}

</style>
