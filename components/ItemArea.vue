<template>
  <!-- card of the single area: This component is used in the page of group of areas  -->
  <div>
    <a class="btn" role="button" @click="goToArea(`/areas/${id}`)">
      <div class="cont" >
        <div class="card card-custom border-white bg-white card-container">
          <div class="card-custom-img" style="background: #0071CE;">
          </div>
          <div class="card-custom-avatar" >
            <img class="img-fluid" style="background-color: white;" :src="require(`~/assets/img${url}`)" />
          </div>
          <div class="card-body text-left">
            <h4 class="card-title">{{name}}</h4>
            <p>{{description}}</p>
          </div>
          <div class="card-footer" style="background: inherit; border-color: inherit;">
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'ItemArea2',
  props: {
    name: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
    url: { type: String, default: () => '' },
    id: {type: Number, default: ()=> 1 }
  },
  //The method is used in order to redirect the navigation on click to each area. Each area is associated to an id number (1-2-3-4). The id number is the primary key of each area in the DB.
  methods: {
    goToArea(path) {
      this.$router.push({ path })
    },
  },
}
</script>

<style scoped>
.card-custom {
  max-width: 300px;
  min-width: 100px;
  overflow: hidden;
  min-height: 430px;
  box-shadow: 0 0 15px rgba(10, 10, 10, 0.3);
}

.card-custom-img {
  height: 200px;
  min-height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-color: inherit;
}

/* First border-left-width setting is a fallback */
.card-custom-img::after {
  position: absolute;
  content: '';
  top: 161px;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: 40px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: calc(575px - 5vw);
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: inherit;
}

.card-custom-avatar img {
  border-radius: 50%;
  position: absolute;
  top: 100px;
  left: 1.25rem;
  width: 100px;
  height: 100px;
}

.card-container{
  height: 400px;
  width: 250px;
}

p{
  font-size: 14px;

}
.cont{
  border: 1px solid white;
}

.cont:hover{
  border: solid 2px black;
}

.card{
  background-color: #0071CE;
}
</style>
