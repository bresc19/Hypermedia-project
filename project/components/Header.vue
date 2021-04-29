<template>
  <div class="navbar">

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

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}
.ul {
  background-color: #47494E;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.a {
  color: dodgerblue;
  text-decoration: none;
  display: inline-block;
  width: 200px;
  padding: 30px;
  background-color: lightgrey;
  outline: none;

}

.li {
  float: right;
}

.navbar {
  text-align: center;
  overflow: hidden;
  background-color: #333;
  white-space: nowrap;

}

.navbar a {
  float: right;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: right;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;

}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

#landmark{
  float: left;
  vertical-align: center;
}


</style>
