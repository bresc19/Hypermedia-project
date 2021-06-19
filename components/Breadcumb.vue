<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a id="groupOfTopic" href="#"  >{{ group }}</a></li>
      <li class="breadcrumb-item active"  aria-current="page">{{ topic }}</li>
    </ol>
  </nav>
</template>

<script>
/*eslint-disable*/
export default {
  name: "Breadcumb",
  props: {
    group: 'qq' ,
    topic:  '' ,
  },
  mounted() {
    const id = document.getElementById("groupOfTopic")
  //  id.setAttribute("href", this.props.group)

  }

}
</script>

<style scoped>

</style>
