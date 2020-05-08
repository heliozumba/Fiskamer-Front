<template>
  <div class="consult-service-container">
    <b-row>
      <b-col md="12" class="mb-4">
        <h3 class="text-center">Os seus Serviços</h3>
      </b-col>
    </b-row>
    <b-row class>
      <b-col md="6">
        <b-button v-b-toggle.collapse-filter class="mr-4">
          <i class="fa fa-filter" aria-hidden="true"></i> Filtrar
        </b-button>
      </b-col>
      <b-col md="6">
        <b-form>
          <b-form-group>
            <b-form-input v-model="search" type="search" placeholder="Pesquisar"></b-form-input>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
    <b-collapse id="collapse-filter">
      <b-form-group class="mx-auto my-4">
        <b-form-radio-group
          id="filter-radios"
          v-model="selected"
          :options="options"
          buttons
          name="filter-radios"
        ></b-form-radio-group>
      </b-form-group>
    </b-collapse>
    <b-row class>
      <b-list-group class="w-100">
        <b-list-group-item v-for="service in filtered" :key="service._id" class="p-2 mt-1">
          <b-row>
            <b-col md="3" class>
              <b-img
                class="img-fluid rounded w-100"
                :src="/*require('../assets/imgs/106418_3.jpg')*/ service.coverImage"
                alt="service-img"
              ></b-img>
            </b-col>
            <b-col md="8">
              <h5 class="mb-2 font-weight-bold">
                <router-link
                  :to="{name:'serviceProfile', params:{id:service._id}}"
                  @click.native="setService(service)"
                >{{service.nome}}</router-link>
              </h5>
              <p>
                <span class="text-muted">Estado:</span>
                <span
                  v-if="service.estado.estado == 'Activo'"
                  class="font-italic success"
                >{{ service.estado.estado}}</span>
              </p>
              <p class="text-muted font-italic mb-2">{{service.location.description}}</p>
              <div class="service-actions">
                <b-row>
                  <b-col md="8">
                    <p class="mb-2">
                      <i class="fa fa-money text-success" aria-hidden="true"></i>
                      <span class="text-success">{{ service.price}} ,00 AOA</span>
                      <span class="text-danger ml-4">
                        <b-icon-heart-fill v-if="service.like > 0"></b-icon-heart-fill>
                        <b-icon-heart v-else></b-icon-heart>
                        <span class="font-weight-bold">{{ service.like}}</span>
                      </span>
                    </p>
                  </b-col>
                  <b-col md="4" class="align-content-end">
                    <span class="text-warning">
                      <router-link @click.native="sendEdit(service)" to="/main/supply/add">
                        <b-icon-pencil></b-icon-pencil>Editar
                      </router-link>
                    </span>
                    <a href="#" @click="callDeleteModal(service.nome, service._id)">
                      <span class="text-danger ml-2">
                        <b-icon-exclude></b-icon-exclude>Eliminar
                      </span>
                    </a>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
import { bus } from "../main";
export default {
  data() {
    return {
      user: this.$store.state.user,
      selected: "Nome",
      options: [
        {
          text: "Nome",
          value: "nome"
        },
        {
          text: "Localização",
          value: "location.description"
        },
        {
          text: "Preço",
          value: "price"
        },
        {
          text: "Favoritos",
          value: "Favoritos"
        }
      ],
      services: {},
      search: ""
    };
  },
  methods: {
    sendEdit(service) {
      bus.$emit("toedit", service);
    },
    notClient() {
      bus.$emit("notclient");
    },
    callDeleteModal(name, id) {
      this.$bvModal
        .msgBoxConfirm("Tem a certeza que deseja eliminar " + name + " ?", {
          title: "Eliminação de Serviço",
          size: "md",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "Eliminar",
          cancelTitle: "Cancelar",
          footerClass: "p-2",
          hideHeaderClose: "false",
          centered: true
        })
        .then(value => {
          value ? this.deleteService(id) : "";
        });
    },
    deleteService(id) {
      axios
        .delete("http://localhost:3000/api/v1/services/" + id)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    setService(service) {
      alert("here");
      console.log("in");
      console.log(service);
      this.notClient();
      this.$store.dispatch("setService", service);
    }
  },
  computed: {
    filtered() {
      return Object.values(this.services).filter(item => {
        return item.nome.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    getServices() {
      axios
        .get(
          "http://localhost:3000/api/v1/users/" + this.user._id + "/services"
        )
        .then(response => {
          console.log(this.services);
          this.services = response.data.data.docs;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getServices;
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 15vh;
  object-fit: cover;
}
</style>