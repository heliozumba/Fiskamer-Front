<template>
  <header>
    <nav class="navbar navbar-expand-sm fixed-top bg-dark">
      <a href="/" class="navbar-brand">
        <img
          class="fiskamer-logo"
          src="@/assets/imgs/logo2.png"
          alt="fiskamer-logo"
          style="width:15%; "
        />
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/main/explorer">Explorar</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/main/feed">Fornecedores</router-link>
        </li>
        <li class="nav-item">
          <a href class="nav-link">Espaços</a>
        </li>
        <li class="nav-item">
          <a href class="nav-link">Comunidade</a>
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

<style lang="scss" scoped>
.navbar-image {
}
</style>