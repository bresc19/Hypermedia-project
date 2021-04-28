<template>
<div class="blog-post">
<h3> {{title}}</h3>
  <!--<p> {{content}}</p> -->
</div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    content: String


  }
}
</script>

<style>
.blog-post{
  border: 1px solid black;
  padding: 10px;
}

</style>