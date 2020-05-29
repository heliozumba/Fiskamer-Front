<template>
  <div>
    <div class="service-listed row p-2 my-3 rounded border">
      <div class="col-md-3">
        <div class="list-image-container d-inline">
          <img
            class="img-fluid w-100 rounded"
            :src="require('../assets/imgs/credentials.png')"
            alt="test"
          />
        </div>
      </div>
      <div class="col-md-9">
        <h5 class="font-weight-bold">
          {{ service.nome}} -
          <small>
            {{service.classification}}
            <i class="fa fa-star text-warning" aria-hidden="true"></i>
          </small>
        </h5>
        <p class="mt-0">
          <small class="text-muted">
            <i class="fas fa-map-marker-alt"></i>
            <span class="text-muted">{{ service.location.description}}</span>
          </small>
        </p>

        <div class="service-list-footer">
          <b-row>
            <b-col md="9">
              <span class="text-success font-weight-bold">
                <i class="fas fa-dollar-sign"></i>
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
  height: 15vh;
  object-fit: cover;
}
.row {
  padding: 0;

  .col-md-3 {
  }
}
.lead {
  font-size: 1rem;
}

.list-button {
}

.service-listed {
  box-shadow: 2px 3px 8px #00000022;
}
</style>