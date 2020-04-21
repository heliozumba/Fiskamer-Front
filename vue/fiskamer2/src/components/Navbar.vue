<template>
  <header>
    <nav class="navbar navbar-expand-sm fixed-top bg-dark main-navbar">
      <a href="/" class="navbar-brand">
        <img class="img-fluid w-100" src="@/assets/imgs/logo2.png" alt="fiskamer-logo" />
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <!--  <b-icon-compass></b-icon-compass> -->
          <router-link class="nav-link" to="/main/explorer">Explorar</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/main/feed">
            <!-- <b-icon-building></b-icon-building> -->
            Fornecedores
          </router-link>
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
      <b-avatar></b-avatar>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    mounted() {
      console.log("Navbar montada");
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