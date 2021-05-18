<template>
<div>
  <h1 class="title-topic-single">Contact</h1>
  <hr>
  <div class="image-contact">
    <img src="../assets/img/Contact-Us-Header.jpg" width=70% height=70%>
    <div class="text-block">
      <a>Get in touch with us!</a>
    </div>
  </div>
  <div class="grid-container">
    <P ALIGN="CENTER">Italy - Milan<br>Via reggio, 23<br>20158 Milano<br>T: +39 22222222</P>
    <div class="classe_img_con_didascalia">
      <img src="../assets/img/aboutus2.jpg"/>
      <p>We believe that science and engineering need to be seen as one. It is for this reason that we continuously focus on research, emerging ideas, and new technologies, routinely partnering with top academic and engineering research institutions.

      </p>
    </div>
    <div class="classe_img_con_didascalia">
      <img src="../assets/img/aboutus2.jpg"/>
      <p>We believe that science and engineering need to be seen as one. It is for this reason that we continuously focus on research, emerging ideas, and new technologies, routinely partnering with top academic and engineering research institutions.

      </p>
    </div>
    <P ALIGN="CENTER">Italy - Milan<br>Via reggio, 23<br>20158 Milano<br>T: +39 22222222</P>
    <P ALIGN="CENTER">Italy - Milan<br>Via reggio, 23<br>20158 Milano<br>T: +39 22222222</P>
    <div class="classe_img_con_didascalia">
      <img src="../assets/img/aboutus2.jpg"/>
      <p>We believe that science and engineering need to be seen as one. It is for this reason that we continuously focus on research, emerging ideas, and new technologies, routinely partnering with top academic and engineering research institutions.

      </p>
    </div>
    <div class="classe_img_con_didascalia">
      <img src="../assets/img/aboutus2.jpg"/>
      <p>We believe that science and engineering need to be seen as one. It is for this reason that we continuously focus on research, emerging ideas, and new technologies, routinely partnering with top academic and engineering research institutions.

      </p>
    </div>
    <P ALIGN="CENTER">Italy - Milan<br>Via reggio, 23<br>20158 Milano<br>T: +39 22222222</P>
  </div>
</div>
  </template>

<script>
export default {
  name: "Contact",
  layout:'default'
}
</script>

<style scoped>
.image-contact{
  position: relative;
  text-align: center;
  padding: 40px;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto ;
  grid-gap: 50px;
  background-color: white;
  padding: 120px;
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

.box {
  margin: 20px;
}

.title-city{
  font-size: 25px;
  font-weight: bold;
}

.address{
  font-size: 20px;
}
p{
  font-size: 24px;
}
a{
  color: black;
  text-decoration: none;
  align: justify;
}
.classe_img_con_didascalia {
  float: left;
  position: relative;
  overflow: hidden;
}

.classe_img_con_didascalia p {
  position: absolute;
  left: 0;
  bottom: 0;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.7);
  color: #fff;
  display: none;
  width: 100%;
  padding: 10px;
}

.classe_img_con_didascalia:hover p {
  display:block;
}

</style>
