<template>
  <div>
    <Breadcumb
      :group="'People'"
    ></Breadcumb>
    <div class="container" >
      <br>
      <div class="row">
        <div class="col align-self-md-center"><h1 class="text-right">DIVERSITY EMPLOYEES GUARANTEES COMPETITIVENESS</h1></div>
        <div class="col align-self-md-center">
          <h6 class="text-left">Our Group reflects the diversity of our employees. At TotalEnergies, the wide variety of talents drives our competitiveness, our ability to innovate and our attractiveness.
          </h6></div>
        <br>
      </div>
      <br>
    </div>
    <div style="background: #0071CE">
      <br>
      <br>
      <div class="container" v-for="(items, index) in peopleItems"
           v-bind:key="items.area_name">
        <p class="h4 text-light" >{{area_names[index]}}</p>
        <hr style="border: 1px solid white;">
        <br>
        <div class="row">
          <div class="col-lg-4 col-sm-12"  v-for="item in items"
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
    <div class="container">
      <br>
      <br>
      <div class="row">
        <div class="col">
          <img width="80%" class="rounded img-fluid border-4" src="../../assets/img/team-leasing-1024x700.jpg">
        </div>
        <div class="col align-self-center" >
          <p> We believe our strength lies in the diversity of our employees.
            TopTech encourages creative pursuits and passions outside of work, because when they can explore their curiosity.
            It gives all of us a new outlook on the world and its possibilities for emerging tech.</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
/*eslint-disable*/
const axios = require('axios')

import ItemPerson from '../../components/ItemPerson'


export default {
  name: 'People',
  layout: 'default',
  components: {ItemPerson},
  //method used to retrieve information regarding each person with an axios request and to place them ordered by areas
  async asyncData({ $axios }) {
    const {data} = await $axios.get(process.env.BASE_URL+`/api/people`)
    // const peopleItems = data
    var peopleItems = new Array(5); // create an empty array of length n
    for (var i = 0; i < 5; i++) {
      peopleItems[i] = new Array(3); // make each element an array
    }
    var k=0
    for(i = 0; i<5; i++ ){
      for(var j = 0; j < 3; j++){
        peopleItems[i][j]=data[k]
        k++;
      }
    }
    const  area_names = ['Database', 'Security', 'IoT', 'Machine Learning', 'Leaders']

    return{
      peopleItems,
      area_names

    }
  },


}
</script>

<style scoped>
/*eslint-disable*/


img{
  max-width: 100%;
}



a{
  color: black;
  text-decoration: none;
}
</style>
