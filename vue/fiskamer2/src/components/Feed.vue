<template>
  <div class="main-div">
    <b-row>
      <b-col md="1"></b-col>
      <b-col md="10">
        <h3>Favoritos</h3>
        <hr />
        <b-table responsive></b-table>

        <h3>Solicitações</h3>
        <hr />
        <b-table responsive></b-table>
      </b-col>
      <b-col md="1"></b-col>
    </b-row>

    <!-- :items="" -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("");
  },
  methods: {
    getFavorites() {
      axios
        .get("http://localhost:3000/api/v1/favoriteServices/MyFavorites")
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getRequests() {
      axios
        .get("http://localhost:3000/api/v1/solicitacoes/MySolicitacoes")
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getFavorites();
    this.getRequests();
  }
};
</script>
<style lang="scss" scoped>
.main-div {
  width: 99.99vw;
  height: 91.8vh;
  margin-top: 8.2vh;
}
</style>