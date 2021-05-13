<template>
  <div class="container item-area">

    <h3>Area</h3>

    <div class="row">

      <div class="col-sm-4">

        <div class="card">

          <img class="card-img-top" src="../assets/img/MachineLearning/processing-imge.jpg" alt="the image alt text here">

          <div class="card-body text-center">

            <h5 class="card-title">Data <br> processing</h5>


            <a href="#" class="btn btn-warning btn-dimension">Read More</a>

          </div>

        </div>

      </div>

      <div class="col-sm-4">

        <div class="card">

          <img class="card-img-top" src="../assets/img/MachineLearning/processing-imge.jpg" alt="the image alt text here">

          <div class="card-body text-center">

            <h5 class="card-title">Improved <br> analytics</h5>


            <a href="#" class="btn btn-dimension btn-warning">Read More</a>

          </div>

        </div>

      </div>

      <div class="col-sm-4">

        <div class="card">

          <img class="card-img-top" src="../assets/img/MachineLearning/processing-imge.jpg" alt="the image alt text here">

          <div class="card-body text-center">

            <h5 class="card-title text-center">Naturalized
              communication</h5>


            <a href="#" class="btn btn-warning text-right btn-dimension">Read More</a>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "ItemsArea"
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