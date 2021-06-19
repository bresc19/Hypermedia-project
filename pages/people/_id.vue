
<template>
<div>
<Breadcumb
:group="groupTopic"
:topic="singleTopic">

</Breadcumb>
  <p class="secondary-title">Anagafic</p>
  <hr>
  <div class="grid-container">
    <div>
      <img src="../../assets/img/aboutus1.jpg">
    </div>
    <div class="grid-cell-left">
      <a class="aboutus-text">Name:...<br>Surname:...<br>Role:...<br>Area:...<br>Years of collaboration:...</a>
    </div>
  </div>
  <p class="secondary-title">Contribution</p>
  <hr>
  <div class="grid-container">
    <P ALIGN="CENTER">Italy - Milan<br>Via reggio, 23<br>20158 Milano<br>T: +39 22222222</P>
    <div class="classe_img_con_didascalia">
      <img src="../../assets/img/aboutus2.jpg"/>
      <p>We believe that science and engineering need to be seen as one. It is for this reason that we continuously focus on research, emerging ideas, and new technologies, routinely partnering with top academic and engineering research institutions.

      </p>
    </div>
  </div>
  <p class="secondary-title">Developed products</p>
  <hr>
  <div class="bd-example">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../assets/img/aboutus2.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/img/aboutus2.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/img/aboutus2.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesen t commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/img/aboutus2.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import Breadcumb from "../../components/Breadcumb";
export default {
  name: 'Person',
  components: {Breadcumb},
  layout: 'default"',
  props: {
    groupTopic: 'People' ,
    singleTopic: '' ,
  },
  async asyncData ({ $axios, route }) {
    const { id } = route.params
    console.log('this url', process.env.BASE_URL)
    const { data } = await $axios.get(`/api/people/${id}`)
    // eslint-disable-next-line camelcase
    const person_data = data
    return {
      person_data
    }
  }

}
</script>

<style scoped>

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

</style>
