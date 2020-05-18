<template>
  <div>
    <div class="row p-2">
      <div class="col-md-3">
        <div class="list-image-container d-inline">
          <img
            class="img-fluid img-thumbnail w-100 rounded"
            :src="require('../assets/imgs/credentials.png')"
            alt="test"
          />
        </div>
      </div>
      <div class="col-md-9">
        <h4>{{ service.name}}</h4>
        <p>
          {{service.classification}}
          <i class="fa fa-star text-warning" aria-hidden="true"></i>
          -
          <span class="text-muted">{{ service.location.description}}</span>
        </p>
        <p class="lead text-justify">{{}}</p>
        <!--service.description-->

        <div class="service-list-footer">
          <b-row>
            <b-col md="9">
              <span class="text-success font-weight-bold">
                <i class="fa fa-money" aria-hidden="true"></i>
                {{ service.price.toLocaleString()}} ,00 AOA
              </span>
            </b-col>
            <b-col md="3">
              <router-link
                :to="{name:'serviceProfile',params:{id:service._id}}"
                class="list-button btn btn-raised btn-warning px-5 mt-"
                @click.native="setService"
              >Ver</router-link>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: Object
  },
  data() {
    return {};
  },
  methods: {
    setService() {
      this.$store.dispatch("setService", this.service);
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 25vh;
  object-fit: cover;
}
.row {
  border-bottom: 0.5px solid #00000030;
  padding: 0;

  .col-md-3 {
  }
}
.lead {
  font-size: 1rem;
}

.list-button {
}
</style>