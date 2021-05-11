<template>
<div>
  <!--<div class="navbar">

     <NuxtLink to="/" id="landmark">
       <img src="../assets/img/toptech_logo.png"   width="180" height="43">
     </NuxtLink>
    <div class="dropdown">
      <button class="dropbtn">
        <RouterLink to="/aboutus">About Us</RouterLink>
      </button>
    </div>

    <div class="dropdown">
      <button class="dropbtn">
      <RouterLink to="/contact" >Contact</RouterLink>
      </button>
    </div>

    <div class="dropdown">
      <button class="dropbtn">
        <RouterLink to="/people">People</RouterLink>
      </button>
    </div>

    <div class="dropdown">
      <button class="dropbtn">
        <RouterLink to="/areas">Areas</RouterLink>
      </button>
      <div class="dropdown-content">
        <a>Data Bases</a>
        <a>Security</a>
        <a>IoT</a>
        <a>Machine Learning</a>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">
        <RouterLink to="/products">Products</RouterLink>
      </button>
    </div>

    <div class="dropdown">
      <button class="dropbtn">
        <RouterLink to="/">Home</RouterLink>
      </button>
    </div>
  </div>
--><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
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

<!--
  <b-nav align="right" id="nv_bar" pills>
    <b-nav-item href="/">
      <a class="item-nav" >Home</a>
    </b-nav-item>
    <b-nav-item href="/products"><a class="item-nav" >Products</a></b-nav-item>
    <b-nav-item-dropdown
        id="my-nav-dropdown"
        text="Areas"
        toggle-class="nav-link-custom item-nav"
        right
    >
      <b-dropdown-item href="/"><a class="item-nav" >Data Base</a></b-dropdown-item>
      <b-dropdown-item href="/"><a class="item-nav">IoT</a></b-dropdown-item>
      <b-dropdown-item href="/"><a class="item-nav">Security</a></b-dropdown-item>
      <b-dropdown-item><a class="item-nav">Machine Learning</a></b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item  href="/areas"><a class="item-nav">All Areas</a></b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item href="/aboutus">
      <a class="item-nav" >About Us</a>
    </b-nav-item>
    <b-nav-item href="/contact">
      <a class="item-nav" >Contact</a>
    </b-nav-item>
  </b-nav>
    -->

  </div>
</template>

<script>
export default {
  name: "Header"
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
