<template>
<div class="container">
  <h1 class="title-topic-single">About Us</h1>
  <hr>
  <div class="grid-container">
    <div >
      <img src="../assets/img/aboutus1.jpg">
    </div>
    <div class="grid-cell-left">
      <a class="aboutus-text"> Founded in Italy in 2000, today TopTech is a multinational group that focuses its consulting offering on
        hard technology challenges with large-scale business impact in data bases, security, IoT and machine
        learning.</a>
    </div>
    <div class="grid-cell-right">
      <a  class="aboutus-text">TopTech started as a research spinoff at Politecnico of Milan and was incubated at its startup accelerator.
        Data and experimentation are part of our DNA. </a>
    </div>
    <div >
      <img src="../assets/img/aboutus2.jpg">
    </div>
    <div>
      <img src="../assets/img/aboutus3.jpg">
    </div>
    <div class="grid-cell-left aboutus-text">
      <a  class="aboutus-text">We believe that science and engineering need to be seen as one. It is for this reason that we continuously
        focus on research, emerging ideas, and new technologies, routinely partnering with top academic and
        engineering research institutions.</a>
    </div>
    <div class="grid-cell-right">
      <a  class="aboutus-text">In all we do, our goal is to build trusted relationships through client proximity, providing industry and
        technology expertise to help you meet the needs of your customers and citizens. </a>
    </div>
    <div>
      <img src="../assets/img/aboutus4.jpg">
    </div>
  </div>
  <p class="secondary-title">Leadership Team</p>
  <hr>
  <div class="container">
    <div class="row" >
      <div class="col-lg-4 col-sm-12"  v-for="item in managers"
           v-bind:key="item.id">
        <ItemPerson
          :name="item.name"
          :surname="item.surname"
          :role="item.role"
          :url = "item.id_image"
          :id="item.id"
        />
      </div>
    </div>
    <br>
    <br>
  </div>

</div>
</template>

<script>
/* eslint-disable */

import ItemPerson from '../components/ItemPerson';
//TODO  aboutus links + layout fix area id + add imagesproducts + layout general
export default {
  name: "AboutUs",
  layout: "default",
  async asyncData ({ $axios }) {
    console.log('this url', process.env.BASE_URL)
    const { data } = await $axios.get(process.env.BASE_URL+`/api/aboutus`)

console.log(data)
    const managers = data
    return {
      managers,
    }
  },



}
</script>

<style scoped>
/* eslint-disable */

.grid-container {
  display: grid;
  grid-template-columns: auto auto ;
  grid-gap: 50px;
  background-color: white;
  padding: 120px;
  align-items: center;
  justify-content: center;
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

* {
  box-sizing: border-box;
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

a{
  color: black;
  text-decoration: none;
}

</style>
