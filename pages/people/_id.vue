
<template>
  <div>
    <Breadcumb
      :topic="person_data.name">
    </Breadcumb>
    <br>
    <div class="container rounded people-card " style="  box-shadow: 10px 10px 5px #dedede; border:1px solid;">
      <div class="row w-75" style="margin: 0 auto;">
        <div class="col-md-6 justify-content-center align-self-center" style="text-align: center; vertical-align: middle;">
          <img class="img-thumbnail rounded" :src="require(`~/assets/img${person_data.id_image}`)" width="50%" height="50%">
        </div>
        <div class="col-md-6 align-self-md-center top-50">
          <ul>
            <li><p class="text-light">Name: {{person_data.name}}</p></li>
            <li><p class="text-light">Role: {{person_data.role}}</p></li>
            <li><p class="text-light">Years of collaboration: {{person_data.contribution_years}}</p></li>
            <br>
            <li style="cursor: pointer; font-weight: bold;" @click="goToArea(`/areas/${id_area.id}`)"><p class="text-light" style="text-decoration: underline; ">Area: {{person_data.area}}</p></li>
          </ul>
        </div>
      </div>
      <hr style="border: 1px solid white;">
      <div class="row p-5">
        <p class="blockquote text-light text-center display-4">"{{ person_data.cit }}" </p>
      </div>
      <h2  class="text-light" style="text-align: center;">Contribution</h2>
      <hr style="border: 1px solid white;">
      <div class="row align-self-center">
        <div class="col-lg-6 col-sm-12" style="text-align: center;" v-for="item in products_data"
             v-bind:key="item.name" >
          <ItemProduct
            :product_name="item.name" :description="item.brief_description"
            :url = "item.image_product"
            :id = "item.id">
          </ItemProduct>
        </div>
      </div>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col">
          <br>
          <img src="~/assets/img/toptech.png" width="100%">
          <div id="alert_message" style="vertical-align: center; visibility: hidden; background: #0071CE;" class="alert alert-primary" role="alert">
            <p class="text-light">Message sent correctly!</p>
          </div>
          <div id="alert_message_error" style="text-align: center; visibility: hidden; background: #0071CE" class="alert alert-primary" role="alert">
            <p class="text-light">Error. Message not sent!</p>
          </div>
        </div>
        <div class="col">
          <form id="messageForm" style="box-shadow: 10px 10px 5px #dedede;" v-on:submit.prevent="sendMessage" method="post">
            <h3 class="text-light" style="text-align: center">Send a Message!</h3>
            <br>
            <ul>
              <li>
                <label class="text-light">E-mail:</label>
                <input type="email" required="required" v-model="formAttr.email" placeholder="e-mail">
              </li>
              <li>
                <label class="text-light">Message:</label>
                <textarea  form="messageForm" type="text" required="required" v-model="formAttr.message"  placeholder="message" rows="4"></textarea>
              </li>
              <li class="button">
                <button  class="square_btn btn-primary">Submit</button>
              </li>
            </ul>
          </form>
          <br>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
import Breadcumb from "../../components/Breadcumb";
import ItemProduct from "../../components/ItemProduct";
import axios from "axios";
export default {
  name: 'Person',
  components: {ItemProduct, Breadcumb},
  layout: 'default',
  data() {
    return {
      formSent:'',
      formAttr: {

        email: '',
        message: ''
      }
    }
  },
//Method used to retrieve data regarding a person, its related products and the id of the area that belongs to (to allow its transition link)
  async asyncData({$axios, route}) {
    const {id} = route.params
    console.log('this url', process.env.BASE_URL)
    const {data} = await $axios.get(process.env.BASE_URL + `/api/people/${id}`)
    //eslint-disable-next-line camelcase
    const person_data = data.person
    const id_area = data.areaID
    let products_data = data.products
    products_data = [].concat.apply([], products_data)
    return {
      person_data,
      products_data,
      id_area
    }
  },
  methods: {
    goToArea(path) {
      this.$router.push({path})
    },

    sendMessage() {
      axios.post('/api/message', this.formAttr)
        .then((response) => {
          console.log("the response is: " + response.data);
          var report = document.getElementById("alert_message")
          report.style.visibility = 'visible'
          this.formAttr.email = ''
          this.formAttr.message = ''
          setTimeout(function () {
            report.style.visibility = 'hidden'

          }, 3000)
        }, (error) => {
          console.log(error);
          var report = document.getElementById("alert_message_error")
          report.style.visibility = 'visible'
          setTimeout(function () {
            report.style.visibility = 'hidden'

          }, 3000)
        })
    }
  },

}
</script>

<style scoped>



img{
  max-width: 100%;
}


div.gallery img {
  width: 100%;
  height: auto;
}


.secondary-title{
  padding: 15px;
  text-align: left;
  font-size: 24px;
}

a{
  color: black;
  text-decoration: none;
}
ul {
  list-style-type: none;
}
.people-card {
  background-color: #0071CE;
  padding: 10px;
}
form {
  margin: 0 auto;
  width: 100%;
  padding: 1em;
  border: 3px solid #CCC;
  border-radius: 1em;
  background-color: #0071CE;
}
input{
  width: 60%;
}
textarea{
  width: 60%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

label {
  display: inline-block;
  width: 90px;
  text-align: right;
  vertical-align: top;
}
.button {
  padding-left: 90px;
}

button {
  margin-left: .5em;
}
</style>
