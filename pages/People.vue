<template>
  <div>
    <p>{{ p.id }}</p>
    <p>{{ p.name }}</p>
    <p>{{ p.surname }}</p>
    <p>{{ p.role }}</p>

  </div>
</template>

<script>
const axios = require('axios')


export default {
  name: 'People',
  layout: 'default',
  async asyncData({ $axios }) {
    const {data} = await $axios.get(`/api/peoples`)
    const p = data
    return{
      p,
    }
  },

}
</script>

<style scoped>

</style>
