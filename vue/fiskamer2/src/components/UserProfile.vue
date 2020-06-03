<template>
  <div class="container-fluid div-main grey lighten-4">
    <div class="row mt-5">
      <div class="col-md-1"></div>
      <div class="col-md-10 mt-4 rounded">
        <div class="row p-3 my-4 bg-white profile-container rounded">
          <div class="col-md-4">
            <div class="profile-image-container">
              <img
                class="profile-img img-fluid rounded-circle ml-5"
                src="../assets/imgs/profile.jpg"
                alt
              />
            </div>
          </div>
          <div class="col-md-6 p-4">
            <div class="user-info-container">
              <small class="text-muted font-weight-bold">Nome</small>
              <h5>{{ user.name}}</h5>
              <small class="text-muted font-weight-bold">Endereço</small>
              <p class="text-muted font-italic mb-1">{{user.endereco}}</p>
              <p>Descrição</p>
              <div class="text-right">
                <button
                  v-if="isAuthUser"
                  class="btn btn-raised btn-dark rounded"
                  v-b-modal.editUser
                >Editar</button>
                <button v-else class="btn btn-raised btn-dark">Seguir</button>
              </div>
            </div>
          </div>
          <b-col v-if="!isClient" md="2" class="text-center p-3">
            <p>Clientes</p>
            <h1>5</h1>
          </b-col>
          <edit-user></edit-user>
        </div>
        <div class="mt-5">
          <div class="row">
            <div class="col-md-3 border profile-container rounded bg-white p-4 mx-5">
              <div class="text-center">
                <i class="fas fa-file fa-2x"></i>
                <h1 class="font-weight-bold mt-3">5</h1>
                <p class="text-muted">Solicitações</p>
              </div>
            </div>
            <div class="col-md-3 border profile-container rounded bg-white p-4 mx-5">
              <div class="text-center">
                <i class="fas fa-hand-holding-heart fa-2x"></i>
                <h1 class="font-weight-bold mt-3">5</h1>
                <p class="text-muted">Wishlist</p>
              </div>
            </div>
            <div class="col-md-3 border profile-container rounded bg-white p-4 mx-5">
              <div class="text-center">
                <i class="fas fa-heart fa-2x"></i>
                <h1 class="font-weight-bold mt-3">5</h1>
                <p class="text-muted">Favoritos</p>
              </div>
            </div>
          </div>
        </div>
        <div class="service-table">
          <div class="row mt-5">
            <div class="col-md-9 profile-container rounded bg-white">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div class="col-md-2 ml-2">
              <div class="row">
                <!-- <h4 class="font-weight-bold border-bottom">Esta Semana</h4> -->
                <div class="profile-container rounded bg-white p-5 col-md-12">
                  <div class="text-center">
                    <h4 class="text-muted">Semanal</h4>
                    <h1 class="font-weight-bold mt-3">20%</h1>
                    <mdb-progress :height="15" :value="20" color="yellow"></mdb-progress>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <!-- <h4 class="font-weight-bold border-bottom">Este Mês</h4> -->
                <div class="profile-container rounded bg-white p-5 col-md-12">
                  <div class="text-center">
                    <h4 class="text-muted">Mensal</h4>
                    <h1 class="font-weight-bold mt-3">60%</h1>
                    <mdb-progress :height="15" :value="60" color="yellow"></mdb-progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-1"></div>
        <div class="row mt-4">
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
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
import { general } from "../mixins/general";
import { mdbProgress, mdbEdgeHeader } from "mdbvue";
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  mixins: [general],
  components: {
    mdbProgress,
    mdbEdgeHeader
  },
  data() {
    return {
      isClient: true,
      isAuthUser: true,
      services: [],
      user: {}
    };
  },
  beforeMount() {
    this.generalGet(
      "users",
      this.services,
      "5ea7f5a4200ad642305fc732",
      "services"
    );
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
    /* getServices() {
      axios
        .get(
          "http://localhost:3000/api/v1/users/5ea7f5a4200ad642305fc732/services"
        )
        .then(response => {
          console.log(response.data.data.docs);
          this.services = response.data.data.docs;
          //console.log(this.services);
        });
    } */
  }
};
</script>

<style lang="scss" scoped>
.div-main {
  width: 99.99vw;

  margin-top: 10.2vh;
}

.profile-image-container {
}

.profile-img {
  object-fit: cover;
  width: 16rem;
  height: 16rem;
}

.profile-container {
  box-shadow: 1px 1px 8px #343a4033;
}

.test-img {
  z-index: -2;
}
</style>