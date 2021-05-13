<template>
  <div class="container item-area">

    <h3>Area</h3>
    <div class="card" style="max-height: 400px; max-width: 250px;">

      <img class="card-img-top"  src="../assets/img/setting.png" alt="the image alt text here">

      <div class="card-body text-center">

        <h5 class="card-title">Product</h5>


        <a href="#" class="btn btn-warning btn-dimension">Go</a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemsArea",
}
</script>

<style scoped>
.item-area{
  width: 60%;
  height: 40%;
}

.btn-dimension{
  font-size: 12px;
}

</style>