<template>

  <div class="card"  style="width: 18rem;">
    <img class="card-img-top" :src="require(`~/assets/img${url}`)" alt="Card image cap">
    <div  class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <p class="card-text">{{description}}</p>
      <a href="#" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
      </svg></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemArea",
  props: {
    name: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
    url: { type: String, default: () => '' },
  },
}
</script>

<style scoped>

</style>