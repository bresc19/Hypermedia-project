<template>
  <div>
    <p>{{ p.id }}</p>
  </div>
</template>

<script>
const axios = require('axios')


export default {
  name: 'People',
  layout: 'default',
  async asyncData({ $axios }) {
    const {data} = await $axios.get(`/api/peoples`)
    const p = data[0]
    console.log(p)
    return{
      p,
    }
  },

}
</script>

<style scoped>

</style>
