<template>
  <div class="container bg-light">
    <br>
    <br>
    <br>
    <br>
    <div class="justify-content-md-center d-flex" id="text">
      <p class="text-info">TopTech announcing new services and tools that help clients with rapid, secure application modernization and containerization helping clients build applications once and deploy anywhere. These new IBM Services are being delivered by one of the world’s largest teams of Red Hat certified-consultants and practitioners to advise, move, build, and manage clients’ workloads to open, secure, hybrid multicloud environments.</p>
    </div>

    <div class="container" style="width: 60%; margin: 0 auto;">
      <div class="row" >
        <div class="col-lg-6 col-sm-12" style = "padding: 50px;"  v-for="item in info_area" v-bind:key="item.id">
          <ItemArea
            :id = "item.id"
            :name="item.name_area"
            :description="item.initial_description"
            :url = "item.area_logo"
          ></ItemArea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import ItemArea from "../../components/ItemArea";
import ItemArea2 from "../../components/ItemArea";
export default {
  name: 'Areas',
  components: {ItemArea},
  layout: 'default',
  async asyncData({$axios}) {
    const {data} = await $axios.get('/api/areas')
    const info_area = data.areaInfo
    console.log(data)


    return {
      info_area,
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

</style>
