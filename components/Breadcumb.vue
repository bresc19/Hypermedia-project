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
    this.group= window.location.pathname
    const path = this.group.split('/')
    this.group = path[1].charAt(0).toUpperCase() + path[1].slice(1);
    const id = document.getElementById("groupOfTopic")
    id.setAttribute("href", "/" + this.group)
    }
  }
</script>

<style scoped>

</style>
