<template>
  <div class="container-fluid div-main">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="profile-container col-md-8 bg-light">
        <div class="row p-3">
          <div class="col-md-4">
            <div class="profile-image-container">
              <img
                class="profile-img img-fluid rounded-circle ml-5"
                src="../assets/imgs/wedding.jpg"
                alt
              />
            </div>
          </div>
          <div class="col-md-6 border-left border-right">
            <div class="user-info-container">
              <h5>{{ user.name}}</h5>
              <p class="text-muted font-italic mb-1">{{user.endereco}}</p>
              <p>Descrição</p>
              <button v-if="isAuthUser" class="btn btn-raised btn-dark" v-b-modal.editUser>Editar</button>
              <button v-else class="btn btn-raised btn-dark">Seguir</button>
            </div>
          </div>
          <b-col v-if="!isClient" md="2" class="text-center p-3">
            <p>Clientes</p>
            <h1>5</h1>
          </b-col>
          <edit-user></edit-user>
        </div>
        <hr />
        <div class="row">
          <div v-if="isClient" class="col-md-12 text-center">
            <h2 class>Wishlist</h2>
            <h5 class="text-muted">Serviços selecionados por Nome para a realização do seu evento</h5>
            <h5 class="text-muted">
              Avaliada em:
              <span class="text-success">75 000,00 AOA</span>
            </h5>
            <hr />
          </div>

          <div v-else class="col-md-12 text-center">
            <h2>Serviços</h2>
            <h5 class="text-muted">Veja abaixo os serviços prestados por Nome</h5>
            <span class="text-danger">
              <b-icon-heart-fill class="mr-2"></b-icon-heart-fill>10
            </span>
            <span class="text-warning ml-4">
              <b-icon-star-fill class="mr-2"></b-icon-star-fill>5.8
            </span>
            <hr />
          </div>
          <div class="service-cards" v-for="service in services" :key="service._id">
            <b-card
              :img-src="require('../assets/imgs/71462.jpg')"
              class="col-md-3 mx-4 my-3 p-0"
              no-body
            >
              <b-card-footer class="p-0 text-center">
                <p class="mb-0">
                  <small class>{{service.nome}}</small>
                </p>
                <p class="mb-0">
                  <small class="text-success">{{service.price}}</small>
                </p>
                <small class="text-muted">{{isClient? "Escolhido" : "Cadastrado"}} a XX/XX/XXXX</small>
              </b-card-footer>
            </b-card>
          </div>
          <!-- <b-card
            :img-src="require('../assets/imgs/71462.jpg')"
            class="col-md-3 mx-4 my-3 p-0"
            no-body
          >
            <b-card-footer class="p-0 text-center">
              <p class="mb-0">
                <small class>Serviço X</small>
              </p>
              <p class="mb-0">
                <small class="text-success">25 000,00 AOA</small>
              </p>
              <small class="text-muted">Escolhido a XX/XX/XXXX</small>
            </b-card-footer>
          </b-card>
          <b-card
            :img-src="require('../assets/imgs/71462.jpg')"
            class="col-md-3 mx-4 my-3 p-0"
            no-body
          >
            <b-card-footer class="p-0 text-center">
              <p class="mb-0">
                <small class>Serviço X</small>
              </p>
              <p class="mb-0">
                <small class="text-success">25 000,00 AOA</small>
              </p>
              <small class="text-muted">Escolhido a XX/XX/XXXX</small>
            </b-card-footer>
          </b-card>
          <b-card
            :img-src="require('../assets/imgs/71462.jpg')"
            class="col-md-3 mx-4 my-3 p-0"
            no-body
          >
            <b-card-footer class="p-0 text-center">
              <p class="mb-0">
                <small class>Serviço X</small>
              </p>
              <p class="mb-0">
                <small class="text-success">25 000,00 AOA</small>
              </p>
              <small class="text-muted">Escolhido a XX/XX/XXXX</small>
            </b-card-footer>
          </b-card>
          <b-card
            :img-src="require('../assets/imgs/71462.jpg')"
            class="col-md-3 mx-4 my-3 p-0"
            no-body
          >
            <b-card-footer class="p-0 text-center">
              <p class="mb-0">
                <small class>Serviço X</small>
              </p>
              <p class="mb-0">
                <small class="text-success">25 000,00 AOA</small>
              </p>
              <small class="text-muted">Escolhido a XX/XX/XXXX</small>
            </b-card-footer>
          </b-card>
          <b-card
            :img-src="require('../assets/imgs/71462.jpg')"
            class="col-md-3 mx-4 my-3 p-0"
            no-body
          >
            <b-card-footer class="p-0 text-center">
              <p class="mb-0">
                <small class>Serviço X</small>
              </p>
              <p class="mb-0">
                <small class="text-success">25 000,00 AOA</small>
              </p>
              <small class="text-muted">Escolhido a XX/XX/XXXX</small>
            </b-card-footer>
          </b-card>
          <b-card
            :img-src="require('../assets/imgs/71462.jpg')"
            class="col-md-3 mx-4 my-3 p-0"
            no-body
          >
            <b-card-footer class="p-0 text-center">
              <p class="mb-0">
                <small class>Serviço X</small>
              </p>
              <p class="mb-0">
                <small class="text-success">25 000,00 AOA</small>
              </p>
              <small class="text-muted">Escolhido a XX/XX/XXXX</small>
            </b-card-footer>
          </b-card>-->
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  data() {
    return {
      isClient: true,
      isAuthUser: true,
      services: {},
      user: {}
    };
  },
  beforeMount() {
    this.getServices();
  },
  mounted() {
    this.user = this.$store.state.user;
  },
  created() {
    bus.$on("supplierProfile", value => {
      this.isClient = false;
    });
  },
  methods: {
    getServices() {
      axios
        .get(
          "http://localhost:3000/api/v1/users/5ea7f5a4200ad642305fc732/services"
        )
        .then(response => {
          console.log(response.data.data.docs);
          this.services = response.data.data.docs;
          //console.log(this.services);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.div-main {
  width: 99.99vw;
  height: 91.8vh;
  margin-top: 8.2vh;
}

.profile-image-container {
}

.profile-img {
  object-fit: cover;
  width: 12vw;
  height: 18vh;
}

.profile-container {
  box-shadow: 1px 1px 4px #343a40ee;
}
</style>