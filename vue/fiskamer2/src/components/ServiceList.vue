<template>
  <div>
    <div class="service-listed row p-2 my-3 rounded border bg-white">
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
        <p v-if="!notClient" class="mt-0">
          <small class="text-muted">
            <i class="fas fa-map-marker-alt"></i>
            <span class="text-muted">{{ service.location.description}}</span>
          </small>
        </p>

        <div class="service-list-footer">
          <b-row>
            <b-col md="6">
              <div class="row">
                <div class="col-md-6 d-inline-block">
                  <div class="col-md-2 d-inline-block mr-2 mt-0">
                    <i class="fas fa-dollar-sign text-success"></i>
                  </div>
                  <div class="col-md-4 d-inline-block">
                    <div class="row">
                      <small class="font-weight-bold mb-2">Preço</small>
                    </div>
                    <div class="row">
                      <span class="text-success">{{ service.price.toLocaleString()}}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-inline-block">
                  <div class="col-md-2 d-inline-block mr-3 mt-0">
                    <i class="fas fa-heart text-danger"></i>
                  </div>
                  <div class="col-md-4 d-inline-block">
                    <div class="row">
                      <small class="font-weight-bold mb-2">Likes</small>
                    </div>
                    <div class="row">
                      <span class="text-danger">{{ service.price.toLocaleString()}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <span class="text-success font-weight-bold">
                <i class="fas fa-dollar-sign fa-2x"></i>
                {{ service.price.toLocaleString()}} ,00 AOA
              </span>-->
            </b-col>
            <b-col md="6">
              <div v-if="notClient" class="mt-0 text-center">
                <p>
                  <small class="font-weight-bold">Acções</small>
                </p>
                <span>
                  <router-link
                    @click.native="sendEdit(service)"
                    to="/main/supply/add"
                    class="text-warning"
                  >
                    <i class="fas fa-edit"></i>
                  </router-link>
                </span>
                <span>
                  <router-link @click.native="blockService(service)" to="/" class="text-dark">
                    <i class="fas fa-ban"></i>
                  </router-link>
                </span>
                <a href="#" @click="callDeleteModal(service.nome, service._id)">
                  <span class="text-danger ml-2">
                    <i class="fas fa-trash"></i>
                  </span>
                </a>
              </div>
              <router-link
                v-else
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
import { bus } from "../main";
export default {
  props: {
    service: Object
  },
  data() {
    return {
      notClient: false,
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
      search: "",
      server: "http://localhost:3000/public/img/"
    };
  },
  beforeMount() {
    if (
      this.$store.state.user.role.perfilCode == 0 ||
      this.$store.state.user.role.perfilCode == 1
    ) {
      this.notClient = true;
    }
  },
  methods: {
    setService() {
      this.$store.dispatch("setService", this.service);
    },
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
    setService2(service) {
      alert("here");
      console.log("in");
      console.log(service);
      this.notClient();
      this.$store.dispatch("setService", service);
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