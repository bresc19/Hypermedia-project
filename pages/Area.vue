<template>
    <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<item-product></item-product>

<script>
import ItemProduct from 'components/ItemProduct'

export default {
  name: "Area",
  template: "default",
  components: {
    ItemProduct
  },
  data() {
    return {
      items: [
        {
          text: 'Areas',
          href: '#'
        },
        {
          text: 'Area',
          href: '#',
          active: true

        }
      ]
    }
  }

}
</script>

<style scoped>

</style>