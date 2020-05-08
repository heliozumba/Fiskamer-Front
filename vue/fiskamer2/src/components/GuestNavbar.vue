<template>
  <nav id="home-nav" class="navbar navbar-expand-sm fixed-top">
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
          <a class="nav-link" href="#">Inicio</a>
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
      <router-link to="/credentials/register" class="btn btn-outline-dark signUp_button">Criar Conta</router-link>
      <router-link to="/credentials/login" class="btn btn-raised btn-warning signIn_button">Entrar</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>