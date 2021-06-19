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
  <div class="grid-people">
    <div class="responsive">
      <div class="gallery">
        <a target="_blank" href="#">
          <img src="../assets/img/people/CEOfabrizio-venditti.jpg"  width="600" height="400">
        </a>
        <div class="name-surname"><a class="no-signature" href="#">Fabrizio Venditti</a></div>
        <div class="desc"><a class="no-signature" href="#" >CEO</a></div>
      </div>
    </div>
    <div class="responsive">
      <div class="gallery">
        <a target="_blank" href="#">
          <img src="../assets/img/people/paola-falcone.jpg"  width="600" height="400">
        </a>
        <div class="name-surname"> <a class="no-signature" href="#">Paola Falcone</a> </div>
        <div class="desc"><a class="no-signature" href="#">General Manager</a></div>
      </div>
    </div>
    <div class="responsive">
      <div class="gallery">
        <a target="_blank" href="#">
          <img src="../assets/img/people/roberto-clemente.jpg"  width="600" height="400">
        </a>
        <div class="name-surname"><a class="no-signature" href="#" >Roberto Clemente</a></div>
        <div class="desc"><a class="no-signature" href="#" >Chief research officer</a></div>
      </div>
    </div>
    <div class="responsive">
      <div class="gallery">
        <a target="_blank" href="#">
          <img src="../assets/img/people/antonella-barberisHR.jpg" width="600" height="400">
        </a>
        <div class="name-surname"><a class="no-signature" href="#">Antonella Barberis</a></div>
        <div class="desc"><a class="no-signature" href="#">HR manager</a></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */

export default {
  name: "AboutUs",
  layout: "default",

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

a{
  color: black;
  text-decoration: none;
}

.scroll-container {
  height: 100vh;
  min-height: 450px;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.scroll-container:nth-of-type(1) {
  background-color: #bdd0c4;
}
.scroll-container:nth-of-type(2) {
  background-color: #f5d2d3;
}
.scroll-container:nth-of-type(3) {
  background-color: #9ab7d3;
}
.scroll-container:nth-of-type(4) {
  background-color: #dfccf1;
}

.scroll-container:nth-of-type(even) {
  flex-direction: row-reverse;
}

.scroll-element,
.scroll-caption {
}

.scroll-element {
  min-height: 300px;
  height: 100%;
}

.scroll-caption {
  margin: 1rem;
}
@media screen and (max-width: 650px) {
  .scroll-container,
  .scroll-container:nth-of-type(even) {
    flex-direction: column;
    align-content: inherit;
  }

  .scroll-element {
    height: 100%;
  }

  .scroll-element,
  .scroll-caption {
    width: 100%;
  }
}
/**Styling scrollable elements*/

.js-scroll {
  opacity: 0;
  transition: opacity 500ms;
}

.js-scroll.scrolled {
  opacity: 1;
}

.scrolled.fade-in {
  animation: fade-in 1s ease-in-out both;
}

.scrolled.fade-in-bottom {
  animation: fade-in-bottom 1s ease-in-out both;
}

.scrolled.slide-left {
  animation: slide-in-left 1s ease-in-out both;
}

.scrolled.slide-right {
  animation: slide-in-right 1s ease-in-out both;
}

</style>
