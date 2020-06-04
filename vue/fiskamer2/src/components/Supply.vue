<template>
  <div class="div-main bg-light container-fluid">
    <b-jumbotron
      v-if="!firstTime"
      header="Olá Nome!"
      lead="Sê bem-vindo ao Fiskamer
      "
      class="first-time"
    >
      <p>Ainda não tens nenhum serviço registrado. Clica no botão abaixo para começar.</p>
      <b-button variant="warning" href="#" @click="firstTimeDone">Começar</b-button>
    </b-jumbotron>
    <b-row class="border">
      <sidebar></sidebar>
      <!--b-col md="2" class="supplier-sidebar border p-4">
        <b-row class="p-0">
          <b-col md="12" class="background p-0"></b-col>
        </b-row>
        <b-row class="supplier-info-container mt-5 p-1">
          <b-img
            class="rounded-circle mx-auto my-auto"
            alt="profile-img"
            fluid
            :src="require('../assets/imgs/wedding2.jpg')"
          ></b-img>
        </b-row>
        <b-row class>
        
          <p>Juca</p>
          <p>Andrade</p>
        </b-row>
        <b-row class="mt-3">
          <b-navbar class="navbar-nav d-block w-100 m-0 p-0">
            <b-nav-item class>
              <router-link class="nav-link" to="/main/supply/state">
                <b-icon-graph-up></b-icon-graph-up>Estado
              </router-link>
            </b-nav-item>
            <b-nav-item class>
              <router-link class="nav-link" to="/main/supply/add">
                <b-icon-plus-circle></b-icon-plus-circle>Adicionar
              </router-link>
            </b-nav-item>
            <b-nav-item class>
              <router-link class="nav-link" to="/main/supply/consult">
                <b-icon-eye></b-icon-eye>Consultar
              </router-link>
            </b-nav-item>
            <b-nav-item class>
              <router-link class="nav-link" to="/main/supply/request">
                <b-icon-inbox></b-icon-inbox>Solicitações
              </router-link>

              <b-badge pill variant="warning" class="ml-4">0</b-badge>
            </b-nav-item>
            <b-nav-item class>
              <b-icon-file-check></b-icon-file-check>

              <span>Orçamentos</span>
              <b-badge pill variant="warning" class="ml-4">0</b-badge>
            </b-nav-item>
          </b-navbar>
        </b-row>
      </b-col-->
      <b-col md="9" offset-md class="supplier-data border bg-white p-5">
        <!-- <b-row class="border supplier-statics-container text-center">
          <b-col md="3" class="border p-2 text-primary">
            <b-icon-building font-scale="2"></b-icon-building>
            <h4>Registrados</h4>
          </b-col>
          <b-col md="3" class="border p-2 text-warning">
            <b-icon-people font-scale="2"></b-icon-people>

            <h4>Clientes</h4>
          </b-col>
          <b-col md="3" class="border p-2 text-success">
            <i class="fa fa-money fa-2x" aria-hidden="true"></i>
            <h4>Vendas</h4>
          </b-col>
          <b-col md="3" class="border p-2 text-danger">
            <b-icon-heart-fill font-scale="2"></b-icon-heart-fill>
            <h4>Wishlists</h4>
          </b-col>
        </b-row>-->
        <b-row class="border supplier-data-container p-3">
          <b-col md="12">
            <router-view name="helper2"></router-view>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="1" offset-md class></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstTime: true
    };
  },
  methods: {
    firstTimeDone() {
      this.firstTime = false;
    },
    toEdit(service) {
      this.$store.commit("setService", service);
    }
  }
};
</script>

<style lang="scss" scoped>
.div-main {
  width: 99.99vw;

  margin-top: 8.2vh;
}
.first-time {
  margin: 15% 15% 15% 15%;
  box-shadow: 1px 1px 3px #343a40ee;
}
.supplier-sidebar {
  height: 100vh;

  top: 0;
  position: sticky;
  background-color: #343a40ff;

  .background {
    position: absolute;
    background-image: url("../assets/imgs/106418_3.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    overflow: hidden;

    filter: blur(3px) brightness(30%);
    z-index: -1;
  }
}

.supplier-statics-container {
  height: 15vh;
}

.supplier-data-container {
}

.supplier-info-container {
  img {
    width: 10rem;
    height: 10rem;
    border: 1px solid;
    border-color: linear-gradient(
      rgba(246, 218, 17, 0.5),
      rgba(123, 109, 9, 0.5)
    );
    object-fit: cover;
  }
}

.supplier-info-photo {
}
</style>