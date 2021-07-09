<template>
  <a class="btn " @click="goToProduct(`/products/${id}`)" >
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

    goToProduct(path) {
      this.$router.push({path})
    },
/*    mouseEnter: function(){
      var img = document.getElementById("scaleEvent");
        img.style.width = '113%'
        img.style.height = '113%'
      console.log("in")
    },
    mouseOver: function(){
      var img=document.getElementById("scaleEvent");
      img.style.width = '100%'
      img.style.height = '100%'
      console.log("out")

    }*/


},

}
</script>

<style scoped>
/*eslint-disable*/
*:hover{
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

.card{
  width: 250px;
  height: 300px;
  overflow: hidden
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
  background-color: #dcded8;
  border-color: #b7b8b4;
}
img{

  margin: 0 auto;
  width: 90%;
  top: 5px;
  height:140px;
}
/*
.card:hover{
  border-style: inset ;
  border-width:1px;}
*/
</style>
