<template>
  <div>
    <div class="row p-2">
      <div class="col-md-3">
        <div class="list-image-container d-inline">
          <img
            class="img-fluid img-thumbnail w-100 rounded"
            :src="require('../assets/imgs/'+service.image)"
            alt="test"
          />
        </div>
      </div>
      <div class="col-md-9">
        <h4>{{ service.title}}</h4>
        <p>
          {{service.classification}}
          <i class="fa fa-star text-warning" aria-hidden="true"></i>
          -
          <span class="text-muted">{{ service.location }}</span>
        </p>
        <p class="lead text-justify">{{service.description}}</p>

        <div class="service-list-footer">
          <span class="text-success font-weight-bold">
            <i class="fa fa-money" aria-hidden="true"></i>
            {{ service.price }}, 00 AOA
          </span>
          <router-link
            :to="{name:'serviceProfile',params:{id:service.id}}"
            class="list-button btn btn-raised btn-warning px-5"
          >Ver</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: Object
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
  margin-left: 60%;
}
</style>