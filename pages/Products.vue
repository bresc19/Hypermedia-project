<template>
  <!-- parole orfane -->
  <div>
    <div class="input-group mb-3 cont-search">
      <div class="input-group-prepend">
        <select class="custom-select" id="inputGroupSelect02">
          <option selected>Search in:</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <input type="text" class="form-control text-space" aria-label="Text input with segmented dropdown button">
      <button type="button" class="btn btn-outline-secondary">Action</button>

    </div>

    <div class="row container-products">
      <div class="col-sm-4 prod-item" ><ItemProduct></ItemProduct></div>
      <div class="col-sm-4 prod-item" ><ItemProduct></ItemProduct></div>
      <div class="col-sm-4 prod-item" ><ItemProduct></ItemProduct></div>
      <div class="col-sm-4 prod-item" ><ItemProduct></ItemProduct></div>
      <div class="col-sm-4 prod-item" ><ItemProduct></ItemProduct></div>
      <div class="col-sm-4 prod-item" ><ItemProduct></ItemProduct></div>
      <div class="col-sm-4 prod-item" ><ItemProduct></ItemProduct></div>
      <div class="col-sm-4 prod-item" ><ItemProduct></ItemProduct></div>
      <div class="col-sm-4 prod-item" ><ItemProduct></ItemProduct></div>
      <div class="col-sm-4 prod-item" ><ItemProduct></ItemProduct></div>
      <div class="col-sm-4 prod-item" ><ItemProduct></ItemProduct></div>
      <div class="col-sm-4 prod-item" ><ItemProduct></ItemProduct></div>

    </div>
    <div aria-label="Page navigation example">
      <ul class="pagination pages-class">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </div>
    <div class="row" id="cont-products-descriptions">
      <div class="card col-sm-4 item-cont-description-products" style="width: 18rem;">
        <img src="../assets/img/areas11.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <div class="card col-sm-4 item-cont-description-products" style="width: 18rem;">
        <img src="../assets/img/areas11.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>


      <div class="card col-sm-4 item-cont-description-products" style="width: 18rem;">
        <img src="../assets/img/areas11.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
import ItemProduct from "../components/ItemProduct";
export default {
  name: "Products",
  components: {ItemProduct},
  layout: 'default',
}
</script>

<style scoped>

.container-products{
  margin: 0 auto;
  width: 80%;
  padding-bottom: 10px;
}

.prod-item {
  padding-top: 20px;

}

.cont-search{
  width: 40%;
  padding: 20px;
  float: right;
}
.text-space{
  min-width: 80px;
}
.pages-class{
  justify-content: center;
}

.item-cont-description-products{
  padding: 20px;
  border: none;
}

#cont-products-descriptions{
  width: 70%;
  padding: 20px;
  margin: 0 auto;
}
</style>
