<template>
<div>
  <div class="card card-custom bg-white border-white border-0 card-container">
    <div class="card-custom-img" style="background: #2cd8ff;" >

    </div>
    <div class="card-custom-avatar">
      <img class="img-fluid" :src="require(`~/assets/img${url}`)" />
    </div>
    <div class="card-body" style="overflow-y: auto">
      <h4 class="card-title">{{name}}</h4>
      <p class="card-text">{{description}} <a  target="_blank">card-decks</a> to align multiple cards nicely in a row.</p>
    </div>
    <div class="card-footer" style="background: inherit; border-color: inherit;">
      <a href="#">Visit</a>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'ItemArea2',
  props: {
    name: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
    url: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Open+Sans:400,500&amp;subset=latin-ext";
.card-custom {
  overflow: hidden;
  min-height: 450px;
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
  box-shadow: 0 0 15px rgba(10, 10, 10, 0.3);
  position: absolute;
  top: 100px;
  left: 1.25rem;
  width: 100px;
  height: 100px;
}

.card-container{
  height: 400px;
  width: 250px;
  padding: 10px;
}
</style>
