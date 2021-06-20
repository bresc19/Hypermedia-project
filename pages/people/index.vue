<template>
<!--

  people (3x1)x4
  product 3x3
  -->
<div class="container">

  <h1 class="title-topic-single">People</h1>
  <hr>
  <div class="grid-container">
    <div>
    <img src="../../assets/img/team-leasing-1024x700.jpg">
    </div>
    <div class="grid-cell-right">
    <a class="people-text"> We believe our strength lies in the diversity of our employees.
      TopTech encourages creative pursuits and passions outside of work, because when they can explore their curiosity.
      It gives all of us a new outlook on the world and its possibilities for emerging tech.</a>
    </div>
  </div>
  <p class="secondary-title">Database</p>
  <hr>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        aa
      </div>
    </div>
  </div>
  <br>
  <br>
  <p class="secondary-title">Security</p>
  <hr>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        aa
      </div>
    </div>
  </div>
  <br>
  <br>
  <p class="secondary-title">IoT</p>
  <hr>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        aa
      </div>
    </div>
  </div>
  <br>
  <br>
  <p class="secondary-title">Machine Learning</p>
  <hr>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        aa
      </div>
    </div>
  </div>
  <br>
  <br>
  <!--  dfghjghjk-->
<ItemPerson v-for="item in peopleItems"
            v-bind:key="item.id"
            :name="item.name"
            :surname="item.surname"
            :role="item.role"
            :url = "item.id_image"/>
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

  async asyncData({ $axios }) {
    const {data} = await $axios.get(`/api/people`)
    const peopleItems = data
    console.log(peopleItems)
    return{
      peopleItems,
    }
  },


}
</script>

<style scoped>
/*eslint-disable*/

.grid-container {
  display: grid;
  grid-template-columns: auto auto ;
  grid-gap: 50px;
  background-color: white;
  padding: 120px;
  align-items: center;
  justify-content: center;
}

img{
  max-width: 100%;
}

.title-topic-single {
  padding: 10px;
  margin-left: 50px;
  font-size: 24px;
  text-align: left;
}

.secondary-title{
  padding: 15px;
  text-align: left;
  font-size: 18px;
}

a{
  color: black;
  text-decoration: none;
}
</style>
