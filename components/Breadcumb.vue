<template>
  <!--Structure of Breadcumb component -->
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a id="groupOfTopic"   >{{ group }}</a></li>
      <li class="breadcrumb-item active"  aria-current="page">{{ topic }}</li>
    </ol>
  </nav>
</template>

<script>
/*eslint-disable*/
export default {
  name: "Breadcumb",
  props: {
    group: '' ,
    topic:  '' ,
  },

  //The name of the group/single topic is set. In the case of group of topics page, also the href is set in order to provide the group link
  mounted() {

    this.group= window.location.pathname
    const path = this.group.split('/')
      this.group = path[1].charAt(0).toUpperCase() + path[1].slice(1);
    const id = document.getElementById("groupOfTopic")
    if(path.length >= 3) {
      id.setAttribute("href", "/" + this.group.toLowerCase())
      console.log("ok")
    }


    if(this.group.localeCompare('Aboutus')==0) {
      console.log("that's true")
      this.group = 'About Us'
      console.log('Ok')
    }
  }
}
</script>

<style scoped>

</style>
