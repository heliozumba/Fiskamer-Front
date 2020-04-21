<template>
  <div class="state-service">
    <b-row>
      <b-col md="6" class="text-white bg-info">
        <b-icon-building font-scale="2"></b-icon-building>
        <h4>Registrados</h4>
      </b-col>
      <b-col md="6" class="text-white bg-warning">
        <b-icon-people-fill font-scale="2"></b-icon-people-fill>
        <h4>Clientes</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" class="text-white bg-success">
        <b-icon-building font-scale="2"></b-icon-building>
        <h4>Vendas</h4>
      </b-col>
      <b-col md="6" class="text-white bg-danger">
        <b-icon-heart-fill font-scale="2"></b-icon-heart-fill>
        <h4>Wishlists</h4>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.col-md-6 {
  height: 50vh;
}
</style>