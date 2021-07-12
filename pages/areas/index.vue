<template>
  <div class="container bg-light">
    <br>
    <h2>Areas</h2>
    <hr>
    <br>
    <br>
    <div class="justify-content-md-center d-flex" id="text">
      <p class="text-info">TopTech announcing new services and tools that help clients with rapid, secure application modernization and containerization helping clients build applications once and deploy anywhere. These new TopTech Services are being delivered by one of the world’s largest teams of Red Hat certified-consultants and practitioners to advise, move, build, and manage clients’ workloads to open, secure, hybrid multicloud environments.</p>
    </div>
    <br>
    <hr>
    <br>
    <div class="container" style="width: 100%; margin: 0 auto;">
      <div class="row justify-content-md-center align-self-center">
        <div class="col-lg-6 align-self-center col-sm-12 mx-auto" style = "padding: 20px; "  v-for="item in info_area" v-bind:key="item.id">
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
    const {data} = await $axios.get(process.env.BASE_URL+'/api/areas')
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



</style>
