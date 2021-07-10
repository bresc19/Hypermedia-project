<template>
  <div class="container">
    <br>
    <h1 class="title-topic-single">Contact</h1>
    <hr>
    <div class="image-contact" id="text">
      <img class="img-class" src="../assets/img/Contact-Us-Header.jpg" width=80% height=80%>
      <p class="font-italic" style="font-size: 28px;">Get in touch with us!</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="container">
            <div class="row margin-grid">
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
            <div class="row">
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
        <div class="col"></div>
        <div class="col">
          <form v-on:submit.prevent="submitForm" method="post">
            <h3 style="text-align: center">Contact Us!</h3>

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
                <textarea type="text" required="required" placeholder="message" rows="4"></textarea>
              </li>
              <li class="button">
                <button  class="btn btn-primary">Submit</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div id="alert_message" style="text-align: center; visibility: hidden" class="alert alert-primary" role="alert">
        Message sent correctly!
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
    submitForm() {

      axios.post(process.env.BASE_URL+'/api/contact', this.formAttr)
      .then((result)=>
        console.log("the response is: " + result.data)
      )
        var report = document.getElementById("alert_message")
        report.style.visibility= 'visible'
      setTimeout(function() {
        report.style.visibility = 'hidden'
        location.reload()

      }, 3000)


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
.text-contact{
  left: 40%;
  font-size: 100%;
  bottom: 35px;
  text-align: center;
}
a{
  color: black;
  text-decoration: none;
}
form {
  margin: 0 auto;
  width: 100%;
  padding: 1em;
  border: 3px solid #CCC;
  border-radius: 1em;
  background-color: #bee5eb;
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

.margin-grid{
  margin-bottom: 10px;

}
</style>
