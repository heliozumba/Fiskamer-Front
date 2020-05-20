<template>
  <header>
    <nav v-if="isGuest" id="home-nav" class="navbar navbar-expand-sm fixed-top">
      <a href="#" class="navbar-brand">
        <img class="fiskamer-logo" src="@/assets/imgs/logo2.png" alt="fiskamer-logo" />
      </a>
      <button
        class="navbar-toggler d-block d-sm-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapseNavbar"
        aria-controls="collapseNavbar"
        aria-expanded="false"
      >
        <span class="fa fa-bars d-block d-sm-none text-warning" aria-hidden="true"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapseNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" href="#">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/main/explorer" class="nav-link" href="#">Serviços</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Fornecedores</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Categorias</a>
          </li>
          <li class="nav-item d-block d-sm-none">
            <router-link to="/credentials/register" class>Criar Conta</router-link>
          </li>
          <li class="nav-item d-block d-sm-none">
            <router-link to="/credentials/login" class>Entrar</router-link>
          </li>
        </ul>
      </div>
      <div class="navbar-buttons d-none d-sm-block">
        <router-link
          to="/credentials/register"
          class="btn btn-outline-dark signUp_button"
        >Criar Conta</router-link>
        <router-link to="/credentials/login" class="btn btn-raised btn-warning signIn_button">Entrar</router-link>
      </div>
    </nav>
    <nav v-else class="navbar navbar-expand-sm fixed-top bg-dark main-navbar">
      <a href="/" class="navbar-brand">
        <img class="img-fluid w-100" src="@/assets/imgs/logo2.png" alt="fiskamer-logo" />
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <!--  <b-icon-compass></b-icon-compass> -->
          <router-link class="nav-link" to="/main/feed">Feed</router-link>
        </li>
        <li class="nav-item">
          <!--  <b-icon-compass></b-icon-compass> -->
          <router-link class="nav-link" to="/main/explorer">Explorar</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/main/plan">Planejamento</router-link>
        </li>
        <li class="nav-item">
          <a href class="nav-link">
            <!-- <b-icon-geo></b-icon-geo> -->
            Espaços
          </a>
        </li>
        <li class="nav-item">
          <a href class="nav-link">
            <!-- <b-icon-people></b-icon-people> -->
            Comunidade
          </a>
        </li>
      </ul>
      <!-- <div class="d-inline-flex">
        <a href="#">
          <i class="fa fa-bell fa-2x px-2" aria-hidden="true"></i>
        </a>
        <li class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-user-circle fa-2x px-2" aria-hidden="true"></i>
          </a>
          <div class="dropdown-menu bg-dark">
            <a href="#" class="dropdown-item">Perfil</a>
            <a href="#" class="dropdown-item">Sair</a>
          </div>
        </li>
      </div>-->
      <b-icon-bell scale="1.8" variant="warning" class="mx-2"></b-icon-bell>

      <b-avatar v-slot:button-content></b-avatar>
      <b-dropdown>
        <b-dropdown-item href="#">
          <router-link
            :to="{name:'userProfile',params:{id:this.$store.state.user._id}}"
            @click.native="supplierFlag"
          >
            <b-icon-person-fill></b-icon-person-fill>Perfil
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item href="#" @click="logout">
          <b-icon-arrow-bar-left></b-icon-arrow-bar-left>Sair
        </b-dropdown-item>
      </b-dropdown>
    </nav>
  </header>
</template>

<script>
import axios from "axios";
import { bus } from "../main";
export default {
  data() {
    return {
      isGuest: true
    };
  },
  methods: {
    mounted() {
      console.log("Navbar montada");
    },
    supplierFlag() {
      console.log("Aqui");

      if (this.$store.state.user.role.perfilCode == 1) {
        bus.$emit("supplierProfile");
      }
    },
    logout() {
      axios
        .get("http://localhost:3000/api/v1/users/logout")
        .then(response => {
          this.$store.dispatch("changeUser", null);
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    if (Boolean(this.$store.state.user)) {
      this.isGuest = false;
    }
  }
};
</script>

<style lang="scss">
$detailColor: #ffcd03;

.main-navbar {
  margin-bottom: 8.2vh;
}

.navbar-brand {
  width: 10%;
}
.navbar-nav {
  height: auto !important;
  margin-left: 20%;
  width: 50%;
  margin-bottom: 0;
  transition: 500ms ease;
}
nav {
  transition: 500ms ease;
}

.fiskamer-logo {
  height: 40px;
}

li {
  a {
    color: whitesmoke;
    text-transform: uppercase;
    margin-right: 5%;
    font-weight: bold;
    &:hover {
      color: $detailColor;
      text-decoration: none;
    }
  }
}
</style>