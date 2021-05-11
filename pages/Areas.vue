<template>
  <div>
    <div id="container-carousel">
      <div>
      <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          style="display: inline-block"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
            text="Whether you're looking for compute power, database storage, content delivery, or other functionality, TopTech has the services to help you build sophisticated applications with increased flexibility, scalability and reliability"
            :img-src="require('~/assets/img/areas11.jpg')">
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>
    </div>
    </div>



    <div id="cont-area-link">
      <b-card
          title="Data Base"
          :img-src="require('~/assets/img/Database/db-logo.png')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 200px;
                max-height: 600px;"
          class="mb-2 card-area"
      >
        <b-card-text>
          Toptech databases, you don’t need to worry about database management tasks such as server provisioning, patching, configuration, or backups.
        </b-card-text>

        <b-button class="link-area" href="#" variant="primary">
          <b-icon-arrow-up rotate="90"></b-icon-arrow-up>
        </b-button>
      </b-card>


      <b-card
          title="IoT"
          :img-src="require('~/assets/img/IoT/IOT.png')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 200px;
                max-height: 600px;"
          class="mb-2"
      >
        <b-card-text>
          With the proliferation of devices, you increasingly need solutions to connect them, and collect, store, and analyze device data.        </b-card-text>

        <b-button class="link-area" href="#" variant="primary">
          <b-icon-arrow-up rotate="90"></b-icon-arrow-up>
        </b-button>
      </b-card>



      <b-card
          title="Security"
          :img-src="require('~/assets/img/Security/security-logo.png')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 200px;
                max-height: 600px;"
          class="mb-2"
      >
        <b-card-text>
          Security concerns dominate how we outsource computation. Emerging security technology will fundamentally change future IT systems.
        </b-card-text>

        <b-button class="link-area" href="#" variant="primary">
          <b-icon-arrow-up rotate="90"></b-icon-arrow-up>
        </b-button>
      </b-card>



      <b-card
          title="Machine Learning"
          :img-src="require('~/assets/img/MachineLearning/ml-logo.png')"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 200px;
                max-height: 600px;"
          class="mb-2"
      >
        <b-card-text>
          Explore machine learning services that fit your business needs, and learn how to get started.
        </b-card-text>

        <b-button class="link-area" href="#" variant="primary">
          <b-icon-arrow-up rotate="90"></b-icon-arrow-up>
        </b-button>
      </b-card>


    </div>



</div>











    <!--
        <div class="flex-container">
          <div>
            <img class="area-logo-image" src="../assets/img/Database/db-logo.png">
            <button class="btn-1 title-area-areas">Data Base</button>
            <p class="description-area-areas">With
              Toptech databases, you don’t need to worry about database management tasks such as server provisioning, patching, configuration, or backups.
            </p>
          </div>
          <div>
            <img class="area-logo-image" src="../assets/img/IoT/IOT.png">
            <button class="btn-1 title-area-areas">IoT</button>
            <p class="description-area-areas">With the proliferation of devices, you increasingly need solutions to connect them, and collect, store, and analyze device data.</p>
          </div>
          <div>
            <img class="area-logo-image" src="../assets/img/Security/security-logo.png">
            <button class="btn-1 title-area-areas">Security</button>
            <p class="description-area-areas">Security concerns dominate how we outsource computation. Emerging security technology will fundamentally change future IT systems.</p>
          </div>
          <div>
            <img class="area-logo-image" src="../assets/img/MachineLearning/ml-logo.png">
            <button class="btn-1 title-area-areas">Machine Learning</button>
            <p class="description-area-areas">Explore machine learning services that fit your business needs, and learn how to get started.</p>
          </div>
        </div>
      </div>
-->
  </template>
  <script>

  import Vue from 'vue'

  import { CarouselPlugin } from 'bootstrap-vue'
  Vue.use(CarouselPlugin)


  export default {
    name: 'Areas',
    layout: 'default',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }


  </script>
  <style scoped>
  .flex-container {
    margin: inherit;
    horiz-align: center;
    display: flex;
    align-items: baseline;
    justify-content: center;
    height: 100%;
  }
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
  /* On screens that are 600px or less, set the background color to olive */
  @media screen and (max-width: 500px) {
    .flex-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      vertical-align: middle;
      horiz-align: center;
      align-items: center;
      background-color: white;
      height: 100%;
    }
  }
  #areas-image {
    position: relative;
    padding: 10px;
    width: 50%;
    height: 50%;
    opacity: 0.6;
  }
  #container-areas-contents {
    position: relative;
    text-align: center;
  }
  #text-description-areas{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  .title-area-areas {
    font-size: 18px;
    position: relative;
  }
  .area-logo-image{
    height: 100px;
    width: 100%;
    position: relative;
  }
  .description-area-areas {
    font-size: 12px;
  }
  .btn-1 {
    background: #0F0F6D;
    color: #ffffff;
    cursor: pointer;
    border: 0;
    transition: all 0.5s;
    border-radius: 10px;
    width: auto;
    position: relative;
  }
  #container-carousel{
    margin: 0 auto;
    width: 50%;
    height: 50%;
    padding: 15px;
  }

  #cont-area-link{
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 85%;
    padding: 10px;
    height: 50%;
    text-align: center;
    justify-content: space-between;
    position: relative;
  }

  .card-area{
    padding: 10px;
  }

  .link-area{
    bottom: 5px;
    position: absolute;
  }
  </style>