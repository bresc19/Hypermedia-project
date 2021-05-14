<template>
  <div class="container item-area">
    <div class="card" style="max-height: 400px; max-width: 250px;">

      <img class="card-img-top"  src="../assets/img/setting.png" alt="the image alt text here">

      <div class="card-body text-center">



        <a href="#" class="btn btn-secondary btn-dimension">Product</a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemProduct",
}
</script>

<style scoped>
.item-area{
  width: 60%;
  height: 40%;
  position: relative;
}

.btn-dimension{
  font-size: 12px;
}

</style>