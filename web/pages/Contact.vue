<template>
  <div>
    <Breadcumb
      :group="'Contact'"
    ></Breadcumb>
    <div class="container">
      <div class="image-contact" id="text">
        <img style="box-shadow: 10px 10px 5px #dedede;" class="img-thumbnail img-class small_img img-responsive" src="../assets/img/Contact-Us-Header.jpg" width=80% height=80%>
      </div>
      <div class="container" >
        <div class="row">
          <div class="col-8" >
            <div class="container rounded" style="background: #0071CE; border:1px solid; box-shadow: 10px 10px 5px #dedede;">
              <div class="row margin-grid text-center"  >
                <div class="col-md-6 px-2"><a class="title-city">Italy - Milan</a>
                  <br>
                  <a class="address">
                    Via Schiaffino, 11 <br>
                    20158 MILANO <br>
                    T: +39 02 4951 7001</a></div>
                <div class="col-md-6 px-2 ">
                  <a class="title-city">USA - Boston</a>
                  <br>
                  <a class="address">
                    211 Congress Street <br>
                    Boston, MA 02110 <br>
                    T: +1 617 936 0212</a>
                </div>
              </div>
              <div class="row text-center">
                <div class="col-md-6 px-2 "><a class="title-city">
                  USA - Los Angeles
                </a>
                  <br>
                  <a class="address">
                    12130 Millennium Drive <br>
                    Los Angeles, CA 90094 <br>
                    T: +1 323 524 0524
                  </a></div>
                <div class="col-md-6 px-2 "><a class="title-city">
                  Singapore
                </a>
                  <br>
                  <a class="address">5 Temasek Blvd,<br>
                    Singapore 03898</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
      <br>
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
            <form id="contactform" style="box-shadow: 10px 10px 5px #dedede;" v-on:submit.prevent="submitForm" method="post">
              <h3 class="text-light" style="text-align: center">Contact Us!</h3>

              <ul>
                <li>
                  <label>Name:</label>
                  <input type="text" required="required" v-model="formAttr.name" placeholder="name">
                </li>
                <li>
                  <label>Surname:</label>
                  <input type="text" required="required" v-model="formAttr.surname" placeholder="surname">
                </li>
                <li>
                  <label>E-mail:</label>
                  <input type="email" required="required" v-model="formAttr.email" placeholder="e-mail">
                </li>
                <li>
                  <label>Message:</label>
                  <textarea form="contactform" type="text" required="required" v-model="formAttr.message"  placeholder="message" rows="4"></textarea>
                </li>
                <li class="button">
                  <button  class="square_btn btn-primary">Submit</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import axios from "axios";
import * as result from "core-js";

export default {
  name: "Contact",
  layout:'default',
  data() {
    return {
      formSent:'',
      formAttr: {
        name: '',
        surname: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    //method used to send with a POST request form data to the server. if the server replies ok a banner is displayed with a successful message. Otherwise the banner will have an error message
    submitForm() {

      axios.post('/api/contact', this.formAttr)
        .then((response) => {
          console.log("the response is: " + response.data);
          var report = document.getElementById("alert_message")
          report.style.visibility= 'visible'
          this.formAttr.email = ''
          this.formAttr.name = ''
          this.formAttr.message = ''
          this.formAttr.surname = ''
          setTimeout(function() {
            report.style.visibility = 'hidden'

          }, 3000)
        }, (error) => {
          console.log(error);
          var report = document.getElementById("alert_message_error")
          report.style.visibility= 'visible'
          setTimeout(function() {
            report.style.visibility = 'hidden'

          }, 3000)

        })
    }
  }
}
</script>

<style scoped>
/* eslint-disable */

.image-contact{
  position: relative;
  text-align: center;
  padding: 40px;
}

.img-class{
  max-width: 100%;
  position: relative;
}

.title-city{
  font-size: 100%;
  font-weight: bold;
}


.address{
  font-size: 100%;
}

a{
  color: white;
  text-decoration: none;
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
  color: white;
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

.margin-grid{
  margin-bottom: 10px;

}
</style>
