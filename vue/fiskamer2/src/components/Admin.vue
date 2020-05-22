<template>
  <div class="div-main">
    <navbar></navbar>
    <b-row>
      <sidebar></sidebar>

      <b-col md="8" offset="1">
        <div class="div text-center mt-5">
          <h1>Admin</h1>
          <h3>Teste de Rotas Administrativas</h3>
          <div class="my-4">Stats</div>
          <hr />
          <b-row>
            <b-card-group deck>
              <b-card text-variant="white" bg-variant="primary" header="Users" class="text-center">
                <b-card-text>
                  <p>Quantidade: {{stats.user.data.qtUserTotal}}</p>
                  <p>Fornecedores: {{stats.user.data.qtUserTotalFornecedor}}</p>
                  <p>Clientes: {{stats.user.data.qtUserTotalCliente}}</p>
                </b-card-text>
              </b-card>
              <b-card
                text-variant="white"
                bg-variant="warning"
                header="Solicitações"
                class="text-center"
              >
                <b-card-text>
                  <p>Quantidade: {{stats.solicitacao.data.qtSolicitacaoTotal}}</p>
                  <p>Concluidas: {{stats.solicitacao.data.qtSolicitacaoConcluida}}</p>
                  <p>Pendentes: {{stats.solicitacao.data.qtSolicitacaoPendente}}</p>
                  <p>Canceladas: {{stats.solicitacao.data.qtSolicitacaoCancelada}}</p>
                </b-card-text>
              </b-card>
              <b-card
                text-variant="white"
                bg-variant="success"
                header="Serviços"
                class="text-center"
              >
                <b-card-text>
                  <p>Quantidade: {{stats.service.data.qtServiceTotal}}</p>
                  <p>Activos: {{stats.service.data.qtServiceActivo}}</p>
                  <p>Pendentes: {{stats.service.data.qtServicePendente}}</p>
                  <p>Vencidos: {{stats.service.data.qtServiceVencido}}</p>
                </b-card-text>
              </b-card>
              <b-card
                text-variant="white"
                bg-variant="danger"
                header="Favoritos"
                class="text-center"
              >
                <b-card-text></b-card-text>
              </b-card>
              <b-card
                text-variant="white"
                bg-variant="dark"
                header="Fornecedores"
                class="text-center"
              >
                <b-card-text>
                  <p>Quantidade: {{stats.service.data.qtServiceTotal}}</p>
                  <p>Activos: {{stats.service.data.qtServiceActivo}}</p>
                  <p>Pendentes: {{stats.service.data.qtServicePendente}}</p>
                  <p>Vencidos: {{stats.service.data.qtServiceVencido}}</p>
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-row>
          <div>
            <h3 class="my-4">Users</h3>
            <hr />
            <b-form-group class="py-1">
              <b-form-input
                v-model="filter"
                type="search"
                id="filter-table"
                placeholder="Pesquisar"
              ></b-form-input>
            </b-form-group>

            <b-table
              responsive
              :items="items"
              :fields="fields"
              striped
              :tbody-transition-props="transProps"
              :filter="filter"
              @filtered="onFiltered"
              :current-page="currentPage"
              :per-page="perPage"
            >
              <template v-slot:cell(acções)="row">
                <b-form-group v-model="row.detailsShowing">
                  <a href="#" @click="deleteUser(row.item.id)">
                    <b-icon-x
                      scale="2"
                      variant="danger"
                      v-b-tooltip.hover
                      title="Eliminar"
                      class="mx-1"
                    ></b-icon-x>
                  </a>
                  <a href="#" @click="sendUser(row.item.user)">
                    <b-icon-pencil
                      scale="1.5"
                      variant="warning"
                      v-b-tooltip.hover
                      v-b-modal.editUser
                      title="Editar"
                      class="mx-1"
                    ></b-icon-pencil>
                  </a>
                  <a href="#" @click="blockUser(row.item.user)">
                    <b-icon-lock-fill
                      scale="1.5"
                      variant="danger"
                      v-b-tooltip.hover
                      title="Bloquear"
                      class="mx-1"
                    ></b-icon-lock-fill>
                  </a>
                </b-form-group>
              </template>
            </b-table>
            <edit-user></edit-user>
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              size="sm"
              align="fill"
              pills
            ></b-pagination>
            <div class="text-center">
              <b-button size="lg" variant="success" v-b-modal.register>Adicionar</b-button>
              <register-modal></register-modal>
            </div>
          </div>
        </div>
        <div>
          <h3 class="my-4">Services</h3>
          <hr />
          <consult-service></consult-service>
        </div>
      </b-col>
      <b-row>
        <b-col md="9"></b-col>
      </b-row>
    </b-row>
  </div>
</template>

<script>
import { bus } from "../main";
import { general } from "../mixins/general";
import axios from "axios";
axios.defaults.credentials = true;
export default {
  data() {
    return {
      stats: {
        user: {},
        service: {},
        solicitacao: {},
        favoritesService: {},
        fornecedor: {}
      },
      users: {},
      services: {},
      baseUrl: "http://localhost:3000/api/v1/",
      requests: {},
      sortBy: "cliente",
      sortDesc: false,
      fields: [
        { key: "nome", sortable: true },
        { key: "email", sortable: true },
        { key: "telemovel", sortable: true },
        { key: "perfil", sortable: true },

        "acções"
      ],
      items: [],
      transProps: {
        name: "flip-list"
      },
      totalRows: 0,
      perPage: 10,
      currentPage: 1,
      filter: null,
      filterOn: []
    };
  },
  computed: {
    getUsers() {
      /*  axios
        .get(this.baseUrl + "users")
        .then(response => {
          this.users = response.data.data.docs;

          this.setItems(this.users);
        })
        .catch(error => {
          console.log(error);
        }); */

      this.generalGet("users", this.users);
      this.setItems(this.users);
    }
  },
  methods: {
    blockUser(user) {
      console.log(user);
      /* this.user.active = false;
      axios
        .patch(this.baseUrl + "users/" + user._id, user)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        }); */
    },
    deleteUser(userId) {
      axios
        .delete(this.baseUrl + "users/" + userId)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getServices() {
      axios
        .get(this.baseUrl + "services")
        .then(response => {
          this.services = response.data.data.docs;
        })
        .catch(error => {
          console.log(error);
        });
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    setItems(users) {
      for (var i = 0; i < users.length; i++) {
        this.items.push({
          id: users[i]._id,
          nome: users[i].name,
          email: users[i].email,
          telemovel: users[i].telemovel,
          perfil: users[i].role.perfil,
          estado: users[i].active,
          user: users[i]
        });
      }
    },
    sendUser(user) {
      console.log("sender");
      alert("here");
      bus.$emit("senduser", user);
    },
    getStats(entity) {
      axios
        .get("http://localhost:3000/api/v1/statistics/" + entity + "/")
        .then(response => {
          this.stats[entity] = response.data.data;
        })
        .catch(error => console.log(error));
    },

    setStats() {
      this.getStats("solicitacao");

      this.getStats("service");
      this.getStats("favoritesService");
      this.getStats("fornecedor");
      this.getStats("user");
    }
  },

  beforeMount() {
    this.getUsers;
    /* this.getServices; */
    this.generalGet("services", this.services);
    this.setStats();
  },

  mounted() {
    console.log("stats:");
    console.log(this.stats);
  }
};
</script>

<style>
.div-main {
  width: 99.99vw;
  height: 91.8vh;
  margin-top: 8.2vh;
}
</style>