<template>
  <b-col md="2" class="supplier-sidebar border p-4">
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
      <p class="font-weight-bold">Nome</p>comentar
      <p class="text-muted font-italic">Fornecedor</p>
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
  </b-col>
</template>

<script>
import {
  mdbSideNav,
  mdbSideNavNav,
  mdbSideNavCat,
  mdbSideNavItem,
  mdbContainer,
  mdbIcon,
  waves
} from "mdbvue";
export default {
  name: "SideNavPage",
  components: {
    mdbSideNav,
    mdbSideNavNav,
    mdbSideNavCat,
    mdbSideNavItem,
    mdbContainer,
    mdbIcon
  },
  data() {
    return {
      toggleA: false
    };
  },
  methods: {
    toggleLeftSideNav() {
      this.toggleA = !this.toggleA;
    }
  },
  mixins: [waves]
};
</script>

<style lang="scss" scoped>
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
.container {
  height: 750px;
}
.icon-div {
  width: 49%;
  display: inline-block;
}
.icon-div .fa {
  cursor: pointer;
}
</style>