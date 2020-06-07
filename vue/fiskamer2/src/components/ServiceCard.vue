<template>
  <div class="card col-md-3 mx-3 my-3 p-0 d-inline-block rounded">
    <mdb-view hover class="zoom">
      <router-link
        @click.native="setService"
        class
        :to="{name:'serviceProfile',params:{id:service._id}}"
      >
        <div class="image-box p-2">
          <img
            class="card-image img-fluid w-100"
            :src="require('../assets/imgs/credentials.png')"
            alt="ok"
          />
        </div>

        <mdb-mask flex-center waves overlay="yellow-slight"></mdb-mask>
      </router-link>
    </mdb-view>

    <div class="card-body text-center">
      <!-- <small class="my-1 text-muted font-italic">{{service.categoria.categoria}}</small> -->

      <p class="mb-1">
        <span class="card-title font-weight-bold">{{ service.nome}}</span>
        <small>
          <mdb-rating v-model="classif"></mdb-rating>
        </small>
      </p>

      <p class="text-muted text-center my-0">
        <small class="font-weight-bold">
          <i class="fas fa-map-marker-alt"></i>
          {{ service.location.description }}
        </small>
      </p>

      <p class="card-text text-success text-center my-2 font-weight-bold">
        <i class="fa fa-money" aria-hidden="true"></i>
        {{ service.price.toLocaleString() }} ,00 AOA
      </p>
    </div>
    <div class="card-footer text-center">
      <!-- <router-link
        @click.native="setService"
        class="list-button btn btn-raised btn-dark btn-block"
        :to="{name:'serviceProfile',params:{id:service._id}}"
      >Ver</router-link>-->

      <small class="text-center mr-2">
        5
        <i class="fas fa-eye"></i>
      </small>

      <small class="text-center text-success"></small>
      <small class="text-center text-danger">
        {{ service.like}}
        <i class="fa fa-heart" aria-hidden="true"></i>
      </small>
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
  mdbIcon,
  mdbRating
} from "mdbvue";

export default {
  data() {
    return {
      classif: 4
    };
  },
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
    mdbIcon,
    mdbRating
  },
  props: {
    service: Object
  },
  methods: {
    setService() {
      console.log(this.service);

      this.$store.dispatch("setService", this.service);
    }
  },
  beforeMount() {}
};
</script>
    
<style lang="scss">
.card {
  .card-image {
    height: 20vh;
    object-fit: cover;
    box-shadow: 2px 2px 5px #343a40ee;
  }
  .card-body {
  }
  .card-text {
    font-size: 1rem;
  }

  .image-box {
  }
}
</style>