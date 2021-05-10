<template>
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
-->
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
