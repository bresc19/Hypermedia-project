<template>
  <div class="container">

    <div id="text">
      <p>Test for the Text</p>
      <img src="~/assets/img/areas11.jpg" width=100% height=100% >

    </div>

    <div class="container"  style="width: 60%; margin: 0 auto;">
      <div class="row" >
        <div class="col-lg-6 col-sm-12" style = "padding: 50px;"  v-for="item in info_area" v-bind:key="item.id">
          <ItemArea2
            :name="item.area_name" :description="item.initial_description"
            :url = "item.area_logo"
          ></ItemArea2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import ItemArea from "../../components/ItemArea";
import ItemArea2 from "../../components/ItemArea2";
export default {
  name: 'Areas',
  components: {ItemArea2, ItemArea},
  layout: 'default',
  async asyncData({$axios}) {
    const {data} = await $axios.get('/api/areas')
    const info_area = data.areaInfo
    console.log(data.descriptions)
    //const carousel2 = data.descriptions[1]
    //const carousel3 = data.descriptions[2]
    //console.log(res.text(carousel1.carouseltext))

    return {
      info_area,
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
/* eslint-disable */
@font-face

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

#text p {
  display: inline-block;
  font-size: 21px;
  text-align: center;
  position: absolute;
  animation: appear 2s;
  left: 43%;
  color: #bee5eb;
}
@keyframes appear {
  from {
    left: -100px;
  }
  to {
    left: 43%;
  }
}

</style>
