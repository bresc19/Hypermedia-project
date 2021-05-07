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

  <div class="grid2x2">
    <div class="box box1">

      <a class="title-city">Italy - Milan</a>
      <br>
      <a class="address">
        Via Schiaffino, 11 <br>
        20158 MILANO <br>
        T: +39 02 4951 7001

      </a></div>
    <div class="box box2">
      <a class="title-city">USA - Boston</a>
      <br>
      <a class="address">
        211 Congress Street <br>
        Boston, MA 02110 <br>
        T: +1 617 936 0212</a></div>
    <div class="box box3">
      <a class="title-city">
        USA - Los Angeles
      </a>
      <br>
      <a class="address">
        12130 Millennium Drive <br>
        Los Angeles, CA 90094 <br>
        T: +1 323 524 0524
      </a>
    </div>
    <div class="box box4">
      <a class="title-city">
        Singapore
      </a>
      <br>
      <a class="address">5 Temasek Blvd,<br>
        Singapore 03898</a></div>
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

.grid2x2 {
  max-width: 50%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
}
.grid2x2 > div {
  display: flex;
  flex-basis: calc(50% - 40px);
  justify-content: center;
  flex-direction: column;
}
.grid2x2 > div > div {
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
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

.text-block {
  position: absolute;
  bottom: 20%;
  right: 5%;
  left: 40%;
  color: black;
  font-size: 24px;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
