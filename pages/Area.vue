<template>
<div>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/areas">Areas</a></li>
      <li class="breadcrumb-item active" aria-current="page">Area</li>
    </ol>
  </nav>
  <div class="image-area">
    <img src="../assets/img/areas11.jpg">
    <button class="btn">See all products</button>
  </div>


  <ItemsArea></ItemsArea>
</div>
</template>


<script>

import ItemsArea from "../components/ItemsProduct";
export default {
  name: "Area",
  components: {ItemsArea},
  template: "default",


}
</script>

<style scoped>

.image-area {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.image-area img {
  width: 100%;
  height: auto;
}
.btn{
  bottom: 0px;
  right: 0px;
}

.image-area .btn {
  position: absolute;
  padding: 5px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.image-area .btn:hover {
  background-color: black;
}
</style>