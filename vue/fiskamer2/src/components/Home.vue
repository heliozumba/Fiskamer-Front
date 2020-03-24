<template>
  <div class="main-main">
    <header>
      <nav class="navbar navbar-expanded-sm fixed-top">
        <a href="#" class="navbar-brand">
          <img class="fiskamer-logo" src="@/assets/imgs/logo2.png" alt="fiskamer-logo" />
        </a>
        <button
          class="navbar-toogler d-block d-sm-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapseNavbar"
        >
          <span class="navbar-toggler-icon d-block d-sm-none"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapseNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Serviços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Fornecedores</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Categorias</a>
            </li>
          </ul>
        </div>
        <div class="navbar-buttons">
          <router-link
            to="/credentials/register"
            class="btn btn-outline-dark signUp_button"
          >Criar Conta</router-link>
          <router-link
            to="/credentials/login"
            class="btn btn-raised btn-warning signIn_button"
          >Entrar</router-link>
        </div>
      </nav>
    </header>
    <div class="container-fluid col-12">
      <div class="row">
        <div
          id="carouselExampleIndicators"
          class="carousel slide carousel-fade col-12"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="@/assets/imgs/wedding3.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="@/assets/imgs/dj-3.jpeg" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="@/assets/imgs/salao.jpg" alt="Third slide" />
            </div>
          </div>
        </div>
        <div class="home-background col-12">
          <section class="home-film col-12">
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
            <section class="home-text">
              <article class="text-main">
                <h1 class="display-4">Encontre tudo o que procura para o seu evento</h1>
              </article>
              <article class="text-secondary">
                <h3>
                  Diga-nos o serviço de que precisa, receba orçamentos contrate
                  os fornecedores adequados e organize o seu evento sem precisar
                  sair de casa.
                </h3>
              </article>
            </section>
            <div class="search-bar-container col-sm-6">
              <div class="search-bar">
                <form class="form-inline" action>
                  <input type="text" class="form-control" placeholder="O que está a procura?" />
                  <input type="text" class="form-control" placeholder="Onde?" />
                  <button class="btn btn-raised btn-dark">
                    <span class="fa fa-search" aria-hidden="true"></span> &nbsp;
                    Pesquisar
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="services w-100 col-sm-12">
          <!--a
            class="carousel-control-next"
            href="#bm-2"
            role="button"
            data-slide="next"
            id="nextMaster"
          >
            <span
              class="fa fa-angle-right fa-5x text-dark"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </a-->
          <div class="background-fisk services-background"></div>
          <div class="main-text text-center mt-5">
            <h1 class="font-weight-bold">Serviços Destacados</h1>
          </div>
          <section class="container-fluid container">
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span class="fa fa-angle-right fa-5x text-dark" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
            <!--div
              id="myCarousel"
              class="carousel slide carousel-fade col-12"
              data-ride="carousel"
            >
              <div class="carousel-inner row w-100 mx-auto">
                <div class="carousel-item active col-sm-4 col-xs-12">
                  
                <div class="carousel-item  col-sm-4 col-xs-12">
                  
                </div>
                <div class="carousel-item col-sm-4 col-xs-12">
                  
              </div>
               <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
            </div>
                </div>
              </div>
            </div-->
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner row w-100 mx-auto">
                <div class="carousel-item col-md-4 active">
                  <div id="box1" class="box text-center rounded" data-aos="zoom-in">
                    <div class="image-container">
                      <img class="image w-100" src="@/assets/imgs/71462.jpg" alt="service-image" />
                      <div class="overlay">
                        <a href="#" class="show-details">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>

                    <div class="details-container">
                      <p class="type text-uppercase">Salão de Festas</p>
                      <p class="name">São João</p>
                      <p class="location">Luanda, Maianga</p>
                      <p class="price">250.000 AKZ</p>
                    </div>
                    <div class="description-container">
                      <p class="text text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime numquam, mollitia dicta harum voluptas incidunt
                        voluptatum voluptate, dolores est, magni magnam quasi
                        maiores!
                      </p>
                    </div>
                    <div class="button-container">
                      <button class="button btn btn-block btn-raised btn-dark">Ver Pacote</button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item col-md-4">
                  <div id="box2" class="box text-center rounded" data-aos="zoom-in">
                    <div class="image-container">
                      <img
                        class="image w-100"
                        src="@/assets/imgs/woman-4081760_1920.jpg"
                        alt="service-image"
                      />
                      <div class="overlay">
                        <a href="#" class="show-details">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>

                    <div class="details-container">
                      <p class="type text-uppercase">Salão de Festas</p>
                      <p class="name">São João</p>
                      <p class="location">Luanda, Maianga</p>
                      <p class="price">250.000 AKZ</p>
                    </div>
                    <div class="description-container">
                      <p class="text text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime numquam, mollitia dicta harum voluptas incidunt
                        voluptatum voluptate, dolores est, magni magnam quasi
                        maiores!
                      </p>
                    </div>
                    <div class="button-container">
                      <button class="button btn btn-block btn-raised btn-dark">Ver Pacote</button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item col-md-4">
                  <div id="box3" class="box text-center rounded" data-aos="zoom-in">
                    <div class="image-container">
                      <img class="image w-100" src="@/assets/imgs/wedding3.jpg" alt="service-image" />
                      <div class="overlay">
                        <a href="#" class="show-details">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>

                    <div class="details-container">
                      <p class="type text-uppercase">Salão de Festas</p>
                      <p class="name">São João</p>
                      <p class="location">Luanda, Maianga</p>
                      <p class="price">250.000 AKZ</p>
                    </div>
                    <div class="description-container">
                      <p class="text text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime numquam, mollitia dicta harum voluptas incidunt
                        voluptatum voluptate, dolores est, magni magnam quasi
                        maiores!
                      </p>
                    </div>
                    <div class="button-container">
                      <button class="button btn btn-block btn-raised btn-dark">Ver Pacote</button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item col-md-4">
                  <div id="box4" class="box text-center rounded" data-aos="zoom-in">
                    <div class="image-container">
                      <img class="image w-100" src="@/assets/imgs/dj-3.jpeg" alt="service-image" />
                      <div class="overlay">
                        <a href="#" class="show-details">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>

                    <div class="details-container">
                      <p class="type text-uppercase">Salão de Festas</p>
                      <p class="name">São João</p>
                      <p class="location">Luanda, Maianga</p>
                      <p class="price">250.000 AKZ</p>
                    </div>
                    <div class="description-container">
                      <p class="text text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime numquam, mollitia dicta harum voluptas incidunt
                        voluptatum voluptate, dolores est, magni magnam quasi
                        maiores!
                      </p>
                    </div>
                    <div class="button-container">
                      <button class="button btn btn-block btn-raised btn-dark">Ver Pacote</button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item col-md-4">
                  <div id="box5" class="box text-center rounded" data-aos="zoom-in">
                    <div class="image-container">
                      <img class="image w-100" src="@/assets/imgs/wedding2.jpg" alt="service-image" />
                      <div class="overlay">
                        <a href="#" class="show-details">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>

                    <div class="details-container">
                      <p class="type text-uppercase">Salão de Festas</p>
                      <p class="name">São João</p>
                      <p class="location">Luanda, Maianga</p>
                      <p class="price">250.000 AKZ</p>
                    </div>
                    <div class="description-container">
                      <p class="text text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime numquam, mollitia dicta harum voluptas incidunt
                        voluptatum voluptate, dolores est, magni magnam quasi
                        maiores!
                      </p>
                    </div>
                    <div class="button-container">
                      <button class="button btn btn-block btn-raised btn-dark">Ver Pacote</button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item col-md-4">
                  <div id="box6" class="box text-center rounded" data-aos="zoom-in">
                    <div class="image-container">
                      <img
                        class="image w-100"
                        src="./../assets/imgs/wedding.jpg"
                        alt="service-image"
                      />
                      <div class="overlay">
                        <a href="#" class="show-details">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>

                    <div class="details-container">
                      <p class="type text-uppercase">Salão de Festas</p>
                      <p class="name">São João</p>
                      <p class="location">Luanda, Maianga</p>
                      <p class="price">250.000 AKZ</p>
                    </div>
                    <div class="description-container">
                      <p class="text text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime numquam, mollitia dicta harum voluptas incidunt
                        voluptatum voluptate, dolores est, magni magnam quasi
                        maiores!
                      </p>
                    </div>
                    <div class="button-container">
                      <button class="button btn btn-block btn-raised btn-dark">Ver Pacote</button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item col-md-4">
                  <div id="box6" class="box text-center rounded" data-aos="zoom-in">
                    <div class="image-container">
                      <img class="image w-100" src="@/assets/imgs/wedding.jpg" alt="service-image" />
                      <div class="overlay">
                        <a href="#" class="show-details">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>

                    <div class="details-container">
                      <p class="type text-uppercase">Salão de Festas</p>
                      <p class="name">São João</p>
                      <p class="location">Luanda, Maianga</p>
                      <p class="price">250.000 AKZ</p>
                    </div>
                    <div class="description-container">
                      <p class="text text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime numquam, mollitia dicta harum voluptas incidunt
                        voluptatum voluptate, dolores est, magni magnam quasi
                        maiores!
                      </p>
                    </div>
                    <div class="button-container">
                      <button class="button btn btn-block btn-raised btn-dark">Ver Pacote</button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item col-md-4">
                  <div id="box6" class="box text-center rounded" data-aos="zoom-in">
                    <div class="image-container">
                      <img class="image w-100" src="@/assets/imgs/wedding.jpg" alt="service-image" />
                      <div class="overlay">
                        <a href="#" class="show-details">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>

                    <div class="details-container">
                      <p class="type text-uppercase">Salão de Festas</p>
                      <p class="name">São João</p>
                      <p class="location">Luanda, Maianga</p>
                      <p class="price">250.000 AKZ</p>
                    </div>
                    <div class="description-container">
                      <p class="text text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime numquam, mollitia dicta harum voluptas incidunt
                        voluptatum voluptate, dolores est, magni magnam quasi
                        maiores!
                      </p>
                    </div>
                    <div class="button-container">
                      <button class="button btn btn-block btn-raised btn-dark">Ver Pacote</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--div id="bm-2" class="box-master2">
              
              
              
              </div>
            </div-->
          </section>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <section class="additional-info">
          <div class="background-fisk info-background"></div>
          <div class="jumbotron supplies col-sm-6 col-xs-12" data-aos="fade-down-right">
            <h1>É um fornecedor competente?</h1>
            <p class="lead text-justify">
              O Site Fiskamer é uma plataforma de divulgação de serviços para
              eventos que ajuda profissionais autónomos e empresas que prestam
              serviços nesta área, a ter mais presença online, alcançar o maior
              número de clientes a nível nacional e posteriormente aumentar
            </p>
            <p class="lead">
              <button class="btn btn-raised btn-dark">Comece a divulgar</button>
            </p>
          </div>
          <div class="jumbotron events col-sm-6 col-xs-12" data-aos="fade-down-left">
            <h1>O Site de divulgação de serviços para Eventos</h1>
            <p class="lead text-justify">
              Pesquise no nosso site para se conectar instantaneamente com
              fornecedores locais, favorite os seus serviços. Diga-nos o serviço
              de que precisa, receba orçamentos gratuítos contrate os
              fornecedores adequados e organize o seu evento sem precisar sair
              de casa
            </p>
          </div>
        </section>
      </div>
    </div>
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
      <div class="menu col-sm-4 col-xs-12">
        <ul>
          <li class="title">Faça Download do Nosso App</li>
          <hr />
          <li class="options">
            <a href="#">
              <i class="fa fa-android fa-3x"></i>
            </a>
          </li>
          <li class="options mt-100">
            <a href="#">
              <i class="fa fa-apple fa-3x"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="social menu col-sm-2 col-xs-12">
        <ul>
          <li class="title">Siga-nos em:</li>
          <hr />
          <ul class="options-inline">
            <li>
              <a href="#">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <div class="copyrights text-center">
        <p class="text-center">Fiskamer &copy;</p>
        <p class="text-center">All Rights Reserved | uByte - 2020</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
$(function() {
  AOS.init({
    duration: 2000
  });
  //$(".home-text").attr("data-aos", "fade-right");
  if ($("body").scrollTop() < 800) {
    $(".home-text").addClass("animated fadeInLeft");
    $(".search-bar").addClass("animated fadeInUp");
  }

  //$(".box").addClass("animated zoomIn");
  $(".box").hover(
    function(event) {
      $("#" + this.id)
        .animate({
          marginTop: "12%"
        })
        .css("box-shadow", "2px 2px 6px 0px #ffcd03");

      //$("#" + this.id + " > .description-container").show();
    },
    function() {
      $("#" + this.id)
        .animate({
          marginTop: "10%"
        })
        .css("box-shadow", "1px 2px 5px 0px gray");
      // $("#" + this.id + " > .description-container").fadeOut();
    }
  );

  //$(this).height
  $(window).scroll(function() {
    $(".navbar").toggleClass("bg-dark", $(this).scrollTop() > 10);
  });

  $("#nextMaster").click(function() {
    $("#bm-1").effect("slide");
    $();
  });

  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $("#myCarousel > .carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $("#myCarousel > .carousel-item")
            .eq(i)
            .appendTo("#myCarousel > .carousel-inner");
        } else {
          $("#myCarousel > .carousel-item")
            .eq(0)
            .appendTo($(this).find("#myCarousel > .carousel-inner"));
        }
      }
    }
  });
});
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";

.main-main {
}
</style>