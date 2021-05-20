<template>
  <div class="col-sm-4 person-container">
    <div class="bg-white rounded shadow-sm py-5 px-4"><img :src="require(`~/assets/img${url}`)" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
      <h5 class="mb-0">{{ name }} {{ surname }}</h5><span class="small text-uppercase text-muted">{{role}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    name: { type: String, default: () => '' },
    surname: { type: String, default: () => '' },
    role: { type: String, default: () => '' },
    url: { type: String, default: () => '' },
  },}
</script>

<style scoped>
.social-link {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  border-radius: 50%;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.social-link:hover, .social-link:focus {
  background: #ddd;
  text-decoration: none;
  color: #555;
}

.person-container {
  width: 250px;
  margin: 0 auto;
  text-align: center;

}
</style>