<template>
  <div class="card col-md-3 mx-3 my-3 p-0 d-inline-block">
    <img
      class="card-image img-fluid w-100"
      :src="require('../assets/imgs/credentials.png')"
      alt="ok"
    />
    <div class="card-body text-center">
      <h5 class="card-title font-weight-bold">{{ service.nome}}</h5>
      <h6 class="text-center">
        {{ service.classification }}
        <i class="fa fa-star text-warning" aria-hidden="true"></i> -
        <span class="text-muted text-center">{{ service.location.description }}</span>
      </h6>

      <h6 class="text-center text-success">
        <i class="fa fa-money" aria-hidden="true"></i>
        {{ service.price.toLocaleString() }} ,00 AOA
      </h6>
      <!--hr-->
      <p class="card-text text-muted text-justify"></p>
      <!--{{service.description}}-->
    </div>
    <div class="card-footer">
      <router-link
        @click.native="setService"
        class="list-button btn btn-raised btn-dark btn-block"
        :to="{name:'serviceProfile',params:{id:service._id}}"
      >Ver</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: Object
  },
  methods: {
    setService() {
      console.log(this.service);
      this.$store.dispatch("setService", this.service);
    }
  }
};
</script>
    
<style lang="scss">
.card {
  .card-image {
    height: 20vh;
    object-fit: cover;
  }
  .card-body {
  }
  .card-text {
    font-size: 1rem;
  }
}
</style>