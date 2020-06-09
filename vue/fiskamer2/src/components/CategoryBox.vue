<template>
  <div class="category-box carousel-item col-md-4">
    <!--  -->
    <b-card
      overlay
      :title="category.name"
      :img-src="require('../assets/imgs/'+category.img)"
      img-alt="category"
      class="text-center rounded my-5 mx-0 d-inline-block"
      text-variant="white"
    ></b-card>
  </div>
</template>

<script>
export default {
  props: {
    category: Object
  }
};
</script>

<style lang="scss" scoped>
.card,
.card-img-overlay {
  height: 30vh;
  border: none;
}

.card-title {
  margin-top: 25%;
}
img {
  filter: brightness(60%);
  height: -webkit-fill-available;
  object-fit: cover;
}
</style>