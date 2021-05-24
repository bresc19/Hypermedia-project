<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">{{ group }}</a></li>
      <li class="breadcrumb-item active" aria-current="page">{{ topic }}</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "Breadcumb",
  props: {
    group: { type: String, default: () => '' },
    topic: { type: String, default: () => '' },
  },
}
</script>

<style scoped>

</style>
