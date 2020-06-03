<template>
  <footer class="col-12 container-fluid">
    <div class="menu col-sm-2 col-xs-12">
      <ul>
        <li class="title">Menu</li>
        <hr />
        <li class="options">
          <a href="#">Inicio</a>
        </li>
        <li class="options">
          <a href="#">Serviços</a>
        </li>
        <li class="options">
          <a href="#">Categorias</a>
        </li>
        <li class="options">
          <a href="#">Eventos Locais</a>
        </li>
      </ul>
    </div>
    <div class="menu col-sm-2 col-xs-12">
      <ul>
        <li class="title">Informação</li>
        <hr />
        <li class="options">
          <a href="#">Contactos</a>
        </li>
        <li class="options">
          <a href="#">Quem Somos?</a>
        </li>
        <li class="options">
          <a href="#">Políticas de Privacidade</a>
        </li>
      </ul>
    </div>
    <div class="menu col-sm-2 col-xs-12">
      <ul>
        <li class="title">Ajuda</li>
        <hr />
        <li class="options">
          <a href="#">Recuperação de Senha</a>
        </li>
        <li class="options">
          <a href="#"></a>
        </li>
        <li class="options">
          <a href="#"></a>
        </li>
      </ul>
    </div>
    <div class="menu col-sm-2 col-xs-12">
      <ul>
        <li class="title">Faça Download do Nosso App</li>
        <hr />
        <li class="options">
          <a href="#">
            <i class="fab fa-google-play fa-3x"></i>
          </a>
        </li>
        <li class="options mt-3">
          <a href="#">
            <i class="fab fa-app-store-ios fa-3x"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="social menu col-sm-3 col-xs-12">
      <ul>
        <li class="title">Siga-nos em:</li>
        <hr />
        <ul class="options-inline">
          <li>
            <a href="#">
              <i class="fab fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </ul>
    </div>
    <div class="copyrights text-center">
      <p class="text-center">Fiskamer &copy;</p>
      <p class="text-center">All Rights Reserved | uByte - 2020</p>
    </div>
    <br />
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: #474645;
  position: static;
  padding-top: 3%;
  padding-left: 10%;
  padding-right: 10%;

  .menu {
    display: inline-block;

    ul {
      list-style-type: none;
    }

    li a {
      text-transform: none;
      text-decoration: none;
      font-weight: normal;
      color: white;
      &:hover {
        color: #ffcd03;
      }
    }

    hr {
      background-color: white;
      border-width: 1px;
      width: 30%;
      margin-left: 0px;
    }

    .title {
      font-weight: bold;
      color: white;
      margin-bottom: 9%;
    }

    .options {
      text-transform: none;
    }

    .options-inline {
      padding: 0;
    }
  }

  .copyrights {
    color: white;
    margin-top: 2%;
  }
}

ul ul li {
  display: inline;
  font-size: 30pt;
}
</style>