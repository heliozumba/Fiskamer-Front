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
                :src="require('../assets/imgs/106418_3.jpg')"
                alt="service-img"
              ></b-img>
            </b-col>
            <b-col md="8">
              <h5 class="mb-2 font-weight-bold">{{service.nome}}</h5>
              <p class="text-muted font-italic mb-2">{{service.location.description}}</p>
              <div class="service-actions">
                <b-row>
                  <b-col md="8">
                    <p class="mb-2">
                      <i class="fa fa-money text-success" aria-hidden="true"></i>
                      <span class="text-success">{{service.price}}</span>
                      <span class="text-danger ml-4">
                        <b-icon-heart-fill></b-icon-heart-fill>
                        <span class="font-weight-bold">10</span>
                      </span>
                    </p>
                  </b-col>
                  <b-col md="4" class="align-content-end">
                    <span class="text-warning">
                      <router-link @click.native="sendEdit(service)" to="/main/supply/add">
                        <b-icon-pencil></b-icon-pencil>Editar
                      </router-link>
                    </span>
                    <span class="text-danger ml-2">
                      <b-icon-exclude></b-icon-exclude>Eliminar
                    </span>
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
import { bus } from "../main";
export default {
  data() {
    return {
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
    getServices() {
      axios
        .get(
          "http://localhost:3000/api/v1/users/5ea7f5a4200ad642305fc732/services"
        )
        .then(response => {
          this.services = response.data.data.docs;
          //console.log(this.services);
        });
    },
    sendEdit(service) {
      bus.$emit("toedit", service);
    }
  },
  computed: {
    filtered() {
      return Object.values(this.services).filter(item => {
        return item.nome.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  beforeMount() {
    this.getServices();
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 15vh;
  object-fit: cover;
}
</style>