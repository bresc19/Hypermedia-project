<template>
  <div>
    <Breadcumb
      :group="'About Us'"
    ></Breadcumb>
    <div class="container">
      <br>
      <div class="row">
        <div class="col-sm align-self-center">
          <img class="rounded img-aboutus img-fluid" src="~/assets/img/aboutus1.jpg">
        </div>
        <div class="col-sm align-self-center">
          <p>Founded in Italy in 2000, today TopTech is a multinational group that focuses its consulting offering on
            hard technology challenges with large-scale business impact in data bases, security, IoT and machine
            learning.</p>
        </div>
      </div>
      <br>
      <br>
      <br>
      <div class="row">
        <div class="col-sm align-self-center">
          <p>TopTech started as a research spinoff at Politecnico of Milan and was incubated at its startup accelerator.
            Data and experimentation are part of our DNA.</p>
        </div>
        <div class="col-sm align-self-center">
          <img class="rounded img-aboutus img-fluid" src="~/assets/img/aboutus2.jpg">
        </div>
      </div>
      <br>
      <br>
      <br>
      <!--<div class="row">
        <div class="col-sm align-self-center">
          <img class="rounded img-aboutus img-fluid" src="~/assets/img/aboutus3.jpg">
        </div>
        <div class="col-sm align-self-center">
          <p>We believe that science and engineering need to be seen as one. It is for this reason that we continuously
            focus on research, emerging ideas, and new technologies, routinely partnering with top academic and
            engineering research institutions.</p>
        </div>
      </div>-->
    </div>
    <div style="background: #0071CE">
      <br>
      <div class="container">
      <h4 class="secondary-title text-light">Leadership Team</h4>
      <hr style="border: 1px solid white;">
      <div class="container">
        <div class="row" >
          <div class="col-lg-4 col-sm-12"  v-for="item in managers"
               v-bind:key="item.id">
            <ItemPerson
              :name="item.name"
              :surname="item.surname"
              :role="item.role"
              :url = "item.id_image"
              :id="item.id"
            />
          </div>
        </div>
        <br>
        <br>
      </div>
      </div>
    </div>
    <div class="container">
      <br><br><br>
      <div class="row">
        <div class="col-sm align-self-center">
          <p>In all we do, our goal is to build trusted relationships through client proximity, providing industry and
            technology expertise to help you meet the needs of your customers and citizens. </p>
        </div>
        <div class="col-sm align-self-center">
          <img class="img-aboutus rounded img-fluid" src="~/assets/img/aboutus4.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import ItemPerson from '../components/ItemPerson';
export default {
  name: "AboutUs",
  layout: "default",
  //method used to retrieve information regarding each person that are the company leaders'. These are retrieved through an axios request

  async asyncData ({ $axios }) {
    console.log('this url', process.env.BASE_URL)
    const { data } = await $axios.get(process.env.BASE_URL+`/api/aboutus`)
    const managers = data
    return {
      managers,
    }
  },



}
</script>

<style scoped>
/* eslint-disable */
.img-aboutus{
  width: 500px;
  height:280px;
}

a{
  color: black;
  text-decoration: none;
}

</style>
