<template>
  <div class="card col-md-3 mx-4 my-3 p-0 d-inline-block">
    <mdb-view hover class="zoom">
      <a href="#!">
        <img
          class="card-image img-fluid w-100"
          :src="require('../assets/imgs/credentials.png')"
          alt="ok"
        />

        <mdb-mask flex-center waves overlay="yellow-slight"></mdb-mask>
      </a>
    </mdb-view>

    <div class="card-body text-center">
      <h6 class="card-title font-weight-bold">{{ service.nome}}</h6>
      <p class="text-muted text-center my-0">
        <small class="font-weight-bold">
          <i class="fas fa-map-marker-alt"></i>
          {{ service.location.description }}
        </small>
      </p>
      <small class="text-center">
        {{ service.classification }}
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
        -
      </small>

      <small class="text-center text-success">
        <i class="fa fa-money" aria-hidden="true"></i>
        {{ service.price.toLocaleString() }} ,00 AOA
      </small>

      <p class="card-text text-muted text-justify"></p>
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
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardHeader,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardFooter,
  mdbCardUp,
  mdbCardAvatar,
  mdbCardGroup,
  mdbBtn,
  mdbView,
  mdbMask,
  mdbIcon
} from "mdbvue";

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbIcon
  },
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