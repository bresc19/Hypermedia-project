<template>
  <div>

    <!--Alienato a sx testo-->

    <div id="carouselExampleIndicators" class="carousel slide container-carousel" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="require(`~/assets/img${carousel1.url}`)" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <p>  {{ carousel1.carouseltext }}  </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="~/assets/img/areas11.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="~/assets/img/areas11.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div class="container"  style="width: 60%; margin: 0 auto;">
      <div class="row" >
        <div class="col-lg-6 col-sm-12" style = "padding: 50px;"  v-for="item in info_area" v-bind:key="item.id">
          <ItemArea2
            :name="item.area_name" :description="item.brief_description"
            :url = "item.url_image"
          ></ItemArea2>
        </div>
      </div>

    </div>




  </div>


</template>
<script>



import ItemArea from "../../components/ItemArea";
import ItemArea2 from "../../components/ItemArea2";
export default {
  name: 'Areas',
  components: {ItemArea2, ItemArea},
  layout: 'default',
  async asyncData({$axios}) {
    const {data} = await $axios.get('/api/areas')
    const info_area = data.areaInfo
    const carousel1 = data.descriptions[0]
    console.log(data.descriptions)
    //const carousel2 = data.descriptions[1]
    //const carousel3 = data.descriptions[2]
    // console.log(res.text(carousel1.carouseltext))

    return {
      info_area,
      carousel1
    }
  },

  data() {
    return {
      url1: require('../../assets/img/areas11.jpg'),
    }
  },

}


</script>
<style scoped>
@font-face
.flex-container {
  margin: inherit;
  horiz-align: center;
  display: flex;
  align-items: baseline;
  justify-content: center;
  height: 100%;
}
.flex-container > div {
  flex-direction: column;
  background-color: white;
  align-items: baseline;
  margin: 10px;
  horiz-align: center;
  padding: 20px;
  font-size: 30px;
  width: 130px;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  height: 100%;
}
/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 500px) {
  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    horiz-align: center;
    align-items: center;
    background-color: white;
    height: 100%;
  }
}
#areas-image {
  position: relative;
  padding: 10px;
  width: 50%;
  height: 50%;
  opacity: 0.6;
}
#container-areas-contents {
  position: relative;
  text-align: center;
}
#text-description-areas{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
.title-area-areas {
  font-size: 18px;
  position: relative;
}
.area-logo-image{
  height: 100px;
  width: 100%;
  position: relative;
}
.description-area-areas {
  font-size: 12px;
}
.btn-1 {
  background: #0F0F6D;
  color: #ffffff;
  cursor: pointer;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: auto;
  position: relative;
}
.container-carousel{
  margin: 0 auto;
  width: 70%;
  height: 50%;
  padding: 15px;
}

#cont-area-link{
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 85%;
  padding: 10px;
  height: 50%;
  text-align: center;
  justify-content: space-between;
  position: relative;
}

.card-area{
  padding: 10px;
}

.link-area{
  bottom: 5px;
  position: absolute;
}

</style>
