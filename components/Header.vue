<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <a class="navbar-brand" href="/">
    <img src="~/assets/img/toptech_logo.png"  height="28" alt="CoolBrand">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto ">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Areas
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Data Base</a>
          <a class="dropdown-item" href="#">IoT</a>
          <a class="dropdown-item" href="#">Security</a>
          <a class="dropdown-item" href="#">Machine Learning</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/areas">All Areas</a>
        </div>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/products">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/people">People</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/aboutus">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>

  </div>
</template>

<script>
export default {
  name: 'Header'
}

</script>

<style scoped>

.item-nav {
  //color: #292121 !important;
  text-decoration: none;

}

#nv_bar {
  background: #4e555b;

}

</style>
