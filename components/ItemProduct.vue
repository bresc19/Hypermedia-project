<template>
  <mdb-card wide ecommerce>
    <mdb-view cascade>
      <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(2).jpg" top alt="sample photo" />
      <mdb-mask overlay="white-slight" waves />
    </mdb-view>
    <mdb-card-body class="text-center" cascade>
      <a href="" class="text-muted">
        <h5>Shoes</h5>
      </a>
      <mdb-card-title>
        <strong><a href="">Product name</a></strong>
      </mdb-card-title>
      <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</mdb-card-text>
      <mdb-card-footer color="white" textColor="black" class="px-1">
      <span class="float-left">
        49$
      </span>
        <span class="float-right">
        <a>
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">
              Share
            </div>
            <mdb-icon slot="reference" icon="eye" class="ml-3"></mdb-icon>
          </mdb-tooltip>
        </a>
        <a class="active">
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">
              Added to watchlist
            </div>
            <mdb-icon slot="reference" icon="heart" class="ml-3"></mdb-icon>
          </mdb-tooltip>
        </a>
      </span>
      </mdb-card-footer>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
export default {
  name: "Item-Product"
}
</script>

<style scoped>

</style>