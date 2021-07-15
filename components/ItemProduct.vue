<template>
  <!-- card of the single product: This component is used in the page of group of products  -->
  <a class="btn" @click="goToProduct(`/products/${id}`)" >
  <div class="card profile-card-5 " >
    <div class="">
      <img width="80%" class="card-img-block rounded"  id="scaleEvent" :src="require(`~/assets/img${url}`)" alt="Card image cap">
    </div>
      <div class="card-body pt-0">
      <h5 class="card-title text-left">{{ product_name }}</h5>
      <p class="card-text text-left">{{ description }}</p>
    </div>
  </div>
  </a>
</template>

<script>
/*eslint-disable*/
export default {
  name: "ItemProduct",
  props: {
    product_name: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
    url: { type: String, default: () => '' },
    id: { type: Number, default: () => 0}
  },
  methods: {
    //The method is used in order to redirect the navigation on click to each product. Each product is associated to an id number (from 1 to 12). The id number is the primary key of each product in the DB.
    goToProduct(path) {
      this.$router.push({path})
    },
},

}
</script>

<style scoped>
/*eslint-disable*/

.card{
  width: 250px;
  height: 300px;
  overflow: hidden;
  box-shadow: 0 0 10px white;

}
.profile-card-5{
  margin-top:20px;
}
.profile-card-5 .btn{
  border-radius:2px;
  text-transform:uppercase;
  font-size:12px;
  padding:7px 20px;
}
.profile-card-5 .card-img-block {
  width: 91%;
  margin: 0 auto;
  position: relative;
  top: -20px;

}
.profile-card-5 .card-img-block img{
  border-radius:5px;
  box-shadow:0 0 10px rgba(0,0,0,0.63);
}
.profile-card-5 h5{
  color: #000000;
  font-weight:600;
}
.profile-card-5 p{
  font-size:14px;
  font-weight:300;
}
.profile-card-5 {
  background-color: white;
  border-color: white;
}
img{

  margin: 0 auto;
  width: 90%;
  top: 5px;
  height:140px;
}

.btn{
  opacity: 1.0;
}

.card:hover{
  border: solid #000000;

}

</style>
