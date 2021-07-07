<template>
  <div>
    <Breadcumb
    :group="groupTopic"
    :topic="area_data.name_area">
    </Breadcumb>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div  class="col-lg-4 col-sm-12">
          <img :src="require(`~/assets/img${area_data.small_image[0]}`)" width="50" height="50">
          <p>{{area_data.small_description[0]}}</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-lg-4 col-sm-12">
          <img :src="require(`~/assets/img${area_data.small_image[1]}`)" width="50" height="50">
          <p>{{area_data.small_description[1]}}</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-lg-4 col-sm-12">
          <img :src="require(`~/assets/img${area_data.small_image[2]}`)" width="50" height="50">
          <p>{{area_data.small_description[2]}}</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <p class="lead">{{area_data.large_description[0]}}</p>
        </div>
        <div class="col-md-5">
          <img :src="require(`~/assets/img${area_data.large_image[0]}`)" >
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <p class="lead">{{area_data.large_description[1]}}</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img :src="require(`~/assets/img${area_data.large_image[1]}`)" >
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row ">
        <div class="col-md-7">
          <p class="lead">{{area_data.large_description[2]}}</p>
        </div>
        <div class="col-md-5">
          <img :src="require(`~/assets/img${area_data.large_image[2]}`)" >
        </div>
      </div>

      <hr>
    </div>

    <div class="text-right container">
      <h5>Supervisor</h5>
      <!-- Item Person project manager + area-->
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  name: 'Area',
  components: {},
  template: 'default',
  props: {
    groupTopic: 'Areas',
    singleTopic: '',
  },

  async asyncData ({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(`/api/areas/${id}`)
    const area_data = data
    console.log(area_data)
    return {
      area_data
    }
  },


}
</script>

<style scoped>


.image-area img {
  width: auto;
  height: auto;
}
.btn{
  bottom: 0px;
  right: 0px;
}

.image-area .btn {
  position: absolute;
  padding: 5px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.image-area .btn:hover {
  background-color: black;
}

body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}

.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -.05rem;
}

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

</style>
