<template>
  <div>
    <Breadcumb
      :group="'Areas'"
    ></Breadcumb>
    <div class="container-fluid" >
      <br>
      <div class="row">
        <div class="col align-self-md-center"><h1 class="text-right">OUR AREAS OF INTEREST</h1></div>
        <div class="col align-self-md-center">
          <h6 class="text-left">TopTech announcing new services and tools that help clients with rapid, secure application modernization and containerization helping clients build applications once and deploy anywhere.
          </h6></div>
        <br>
      </div>
      <br>
    </div>
    <div class="justify-content-md-center d-flex" id="text">
    </div>
    <div >
      <br>
      <div style="background-color: #0071CE">
        <br>
        <div class="container" style="width: 100%;">
          <div class="row  text-center">
            <div class="col-lg-6 align-bottom col-sm-12 mx-auto" style = "padding: 20px; "  v-for="item in info_area" v-bind:key="item.id">
              <ItemArea
                :id = "item.id"
                :name="item.name_area"
                :description="item.initial_description"
                :url = "item.area_logo"
              ></ItemArea>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <br>
          <br>
          <br>
          <img class="large_img rounded" src="~/assets/img/areas_index.jpeg" width = 100%>
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
  //method used to retrieve information regarding each area with an axios request
  async asyncData({$axios}) {
    const {data} = await $axios.get(process.env.BASE_URL+'/api/areas')
    const info_area = data.areaInfo


    return {
      info_area,
    }
  },

}


</script>
<style scoped>
/* eslint-disable */



</style>
