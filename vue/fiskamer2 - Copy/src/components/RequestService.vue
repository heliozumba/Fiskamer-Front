<template>
  <div class="requests-container">
    <h3 class="my-4">Solicitações</h3>
    <b-form-input v-model="filter" type="search" id="filter-table" placeholder="Pesquisar"></b-form-input>
    <b-table
      responsive
      :items="requests"
      :fields="fields"
      striped
      :tbody-transition-props="transProps"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :filter="filter"
      :filterIncludedFileds="filterOn"
      @filtered="onFiltered"
      :current-page="currentPage"
      :per-page="perPage"
    >
      <template v-slot:cell(acções)="row">
        <b-form-group v-model="row.detailsShowing" v-if="row.item.estado.estadoCode == 3">
          <a href="#" @click="updateRequest(Object.assign({},row.item),1)">
            <b-icon-check
              scale="2"
              variant="success"
              class="mx-1"
              v-b-tooltip.hover
              title="Aceitar"
            ></b-icon-check>
          </a>
          <a href="#" @click="updateRequest(row.item,4)">
            <b-icon-x scale="2" variant="danger" v-b-tooltip.hover title="Cancelar" class="mx-1"></b-icon-x>
          </a>
        </b-form-group>
        <b-form-group v-model="row.detailsShowing" v-if="row.item.estado.estadoCode == 1">
          <b-button variant="warning">Pendente</b-button>
          <b-button variant="danger">Cancelar</b-button>
        </b-form-group>
        <b-form-group v-model="row.detailsShowing" v-if="row.item.estado.estadoCode == 4">
          <b-button variant="success">Activar</b-button>
          <b-button variant="danger">Pendente</b-button>
        </b-form-group>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      size="sm"
      align="fill"
      pills
    ></b-pagination>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;

export default {
  data() {
    return {
      user: this.$store.state.user,
      requests: {},
      sortBy: "cliente",
      sortDesc: false,
      fields: [
        { key: "cliente", sortable: true },
        { key: "servico", sortable: true },
        { key: "data", sortable: true },
        { key: "estado", sortable: true },
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
    getRequests() {
      axios
        .get(
          "http://localhost:3000/api/v1/users/" +
            this.user._id +
            "/solicitacaos"
        )
        .then(response => {
          console.log(response.data.data.docs);
          this.requests = response.data.data.docs;
          this.items = [this.requests];
          this.totalRows = this.requests.length;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getRequests;

    console.log(this.items);
  },

  mounted() {
    console.log(this.requests.length);
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    updateRequest(request, state) {
      console.log(request);
      request.estado.estadoCode = state;
      axios
        .patch("http://localhost:3000/api/v1/solicitacoes/" + request._id)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
table .flip-list-move {
  transition: transform 1s;
}
</style>