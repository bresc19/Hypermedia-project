<template>
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
    <!-- <h1 class="title-topic-single">Products</h1>
     <hr>

     <div class="wrapper">

       <div class="cell-product">
         <div class="product-image">
           <a href="#">
             <img src="../assets/img/setting.png" width="120" height="100">
           </a>
         </div>
         <a href="#" class="no-signature product-title">
           Product</a>
       </div>

       <div class="cell-product">
         <div class="product-image">
           <a href="#">
             <img src="../assets/img/setting.png" width="120" height="100">
           </a>
         </div>
         <a href="#" class="no-signature product-title">
           Product</a>
       </div>

       <div class="cell-product">
         <div class="product-image">
           <a href="#">
             <img src="../assets/img/setting.png" width="120" height="100">
           </a>
         </div>
         <a href="#" class="no-signature product-title">
           Product</a>
       </div>

       <div class="cell-product">
         <div class="product-image">
           <a href="#">
             <img src="../assets/img/setting.png" width="120" height="100">
           </a>
         </div>
         <a href="#" class="no-signature product-title">
           Product</a>
       </div>

       <div class="cell-product">
         <div class="product-image">
           <a href="#">
             <img src="../assets/img/setting.png" width="120" height="100">
           </a>
         </div>
         <a href="#" class="no-signature product-title">
           Product</a>
       </div>

       <div class="cell-product">
         <div class="product-image">
           <a href="#">
             <img src="../assets/img/setting.png" width="120" height="100">
           </a>
         </div>
         <a href="#" class="no-signature product-title">
           Product</a>
       </div>

       <div class="cell-product">
         <div class="product-image">
           <a href="#">
             <img src="../assets/img/setting.png" width="120" height="100">
           </a>
         </div>
         <a href="#" class="no-signature product-title">
           Product</a>
       </div>

       <div class="cell-product">
         <div class="product-image">
           <a href="#">
             <img src="../assets/img/setting.png" width="120" height="100">
           </a>
         </div>
         <a href="#" class="no-signature product-title">
           Product</a>
       </div>

       <div class="cell-product">
         <div class="product-image">
           <a href="#">
             <img src="../assets/img/setting.png" width="120" height="100">
           </a>
         </div>
         <a href="#" class="no-signature product-title">
           Product</a>
       </div>

       <div class="cell-product">
         <div class="product-image">
           <a href="#">
             <img src="../assets/img/setting.png" width="120" height="100">
           </a>
         </div>
         <a href="#" class="no-signature product-title">
           Product</a>
       </div>

       <div class="cell-product">
         <div class="product-image">
           <a href="#">
             <img src="../assets/img/setting.png" width="120" height="100">
           </a>
         </div>
         <a href="#" class="no-signature product-title">
           Product</a>
       </div>

       <div class="cell-product">
         <div class="product-image">
           <a href="#">
             <img src="../assets/img/setting.png" width="120" height="100">
           </a>
         </div>
         <a href="#" class="no-signature product-title">
           Product</a>
       </div>

       <div class="cell-product">
         <div class="product-image">
           <a href="#">
             <img src="../assets/img/setting.png" width="120" height="100">
           </a>
         </div>
         <a href="#" class="no-signature product-title">
           Product</a>
       </div>
     </div> -->
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
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';


.grid-container {
  display: grid;
  grid-template-columns: auto auto ;
  grid-gap: 50px;
  background-color: white;
  padding: 120px;
  align-items: center;
  justify-content: center;
}

.grid-people{
  padding: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
}


.grid-people > div{
  horiz-align: center;
  align-items: center;
  justify-content: center;
}

.grid-container > text-right {
  background-color: #ffffff;
  text-align: right;
  font-size: 20px;
  vertical-align: middle;
}

.grid-container > text-left {
  background-color: #ffffff;
  text-align: left;
  font-size: 20px;
  vertical-align: middle;
}


img{
  max-width: 100%;
}

div.gallery {
  border: 1px solid #000000;
}

div.gallery:hover {
  border: 3px solid #000000;
  max-width: 100%;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}

* {
  box-sizing: border-box;
}

.responsive {
  horiz-align: center;
  padding: 0 6px;
  float: left;
  width: 54.99999%;
  max-width: 100%;
  display: inline-block;
}


@media only screen and (max-width: 700px) {
  .responsive {
    width: 49.99999%;
    margin: 6px 0;
  }
}

@media only screen and (max-width: 500px) {
  .responsive {
    width: 100%;
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}


div.grid-cell-right {
  vertical-align: middle;
  text-align: right;
}


div.grid-cell-left{
  vertical-align: middle;
  text-align: left;
}

.aboutus-text{
  font-size: 24px;
}

.title-topic-single {
  padding: 10px;
  margin-left: 50px;
  font-size: 18px;
  text-align: left;
}

.secondary-title{
  padding: 15px;
  text-align: left;
  font-size: 24px;
}

.desc{
  font-size: 18px;
  text-align: center;
  font-style: italic;
  text-decoration: none;
  outline: none;
}

.name-surname{
  font-size: 24px;
  text-align: center;
  text-decoration: none;
  outline: none;
}

.no-signature{
  text-decoration: none;
  outline: none;
  color: black;
}

.wrapper {
  position: relative;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  grid-auto-rows: 200px;
}

.cell-product{
  text-align: center;
  width: 150px;
  height: 150px;
}

.cell-product:hover{
  border: solid black;

}


.product-title{
  float: bottom;
  clear: left;
  padding: 4px;
}

.product-image{
  float:top;
  padding: 3px;
}
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
</style>
