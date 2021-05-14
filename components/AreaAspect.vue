<template>
<div>

    <div class="cont-product">
      <div class="container">
            <div class="card card_red text-center">
              <div class="title">
                <div class="fa" style="margin: 0 auto;" aria-hidden="true">
                  <img style="object-fit: contain; width: 100%; height: 100%;" src="../assets/img/MachineLearning/processing-imge.jpg">
                </div>
                <h2>Data Processing</h2>
              </div>
              <a href="#">See more</a>
            </div>
      </div>
    </div>

</div>
</template>

<script>
export default {
  name: "AreaAspect"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300');



.card {
  position: relative;
  min-width: 200px;
  height: auto;
  overflow: hidden;
  border-radius: 15px;
  margin: 0 auto;
  padding: 8px 4px;
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
  transition: .5s;
}
.card:hover {
  transform:scale(1.1);
}
.card_red, .card_red .title .fa {
  background: linear-gradient(-45deg, #61ffd2, #219ff3);
}
.card_violet, .card_violet .title .fa  {
  background: linear-gradient(-45deg, #f403d1, #64b5f6);
}
.card_three, .card_three .title .fa  {
  background: linear-gradient(-45deg, #24ff72, #9a4eff);
}

.card:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: rgba(255, 255, 255, .1);
  z-index: 1;
  transform: skewY(-5deg) scale(1.5);
}

.title .fa {
  color: #fff;
  font-size: 60px;
  width: 100px;
  height: 100px;
  border-radius: 5%;
  text-align: center;
  line-height: 100px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
}
.title h2 {
  position: relative;
  margin: 20px 0 0;
  padding: 0;
  color: #fff;
  font-size: 28px;
  z-index: 2;
}
.price {
  position: relative;
  z-index: 2;
}
.price h4 {
  margin: 0;
  padding: 20px 0;
  color: #fff;
  font-size: 60px;
}
.option {
  position: relative;
  z-index: 2;
}
.option ul {
  margin: 0;
  padding: 0;
}
.option ul li {
  margin: 0 0 10px;
  padding: 0;
  list-style: none;
  color: #fff;
  font-size: 16px;
}
.card a {
  display: block;
  position: relative;
  z-index: 2;
  background-color: #fff;
  color: #262ff;
  width: 150px;
  height: 40px;
  text-align: center;
  margin: 20px auto 0;
  line-height: 40px;
  border-radius: 40px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 5px 10px rgba(0,0,0, .1);
}
.card a:hover {

}

img{
  width: 100%;
  height: 100%;
}

.cont-product {
  width: 50px;
  height: 50px;

}
</style>