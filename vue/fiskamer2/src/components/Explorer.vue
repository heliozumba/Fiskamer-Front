<template>
  <div class="div-main">
    <div class="container-fluid landing-container">
      <div class="row landing-row">
        <!-- <div class="landing-images col-12"></div> -->
        <mdb-carousel :interval="8000" :items="items" indicators id="explorer-carousel"></mdb-carousel>
        <div class=".col-md-2"></div>
        <div class="landing-text text-center col-md-8 m-auto">
          <!--h1 class="display-3 text-warning">Explore</h1>
          <h4 class="display-4 text-warning">Encontre tudo que precisa, em alguns cliques.</h4-->
          <img
            class="explorer-logo img-fluid w-75"
            src="@/assets/imgs/logo2.png"
            alt="fiskamer-logo"
          />
          <search-bar></search-bar>
        </div>

        <div class=".col-md-2"></div>
      </div>

      <div class="row categories-row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <h1 class="text-center pt-3">Do que está à procura?</h1>
          <div class="row">
            <div id="explorerCarousel" class="carousel slide" data-ride="carousel">
              <div id="category-carousel" class="carousel-inner row w-100 mx-auto">
                <category-box
                  v-for="category in categories"
                  :key="category.id"
                  :category="category"
                  :class="{'active': category.id === 1}"
                ></category-box>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1">
          <a class="carousel-control-next" href="#explorerCarousel" role="button" data-slide="next">
            <span class="fa fa-angle-right text-dark service-arrow" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <aside
          id="filter-div"
          class="search-filters-container col-md-2 bg-light rounded position-sticky mr-1 p-4"
        >
          <p class="font-weight-bold">Provincia</p>
          <filter-inputs :filterArray="provinces" kindOfArray="Provincia" @selected="setIndex"></filter-inputs>
          <hr />
          <p class="font-weight-bold">Distrito</p>
          <filter-inputs :filterArray="provinces[selected].counties" kindOfArray="Distrito"></filter-inputs>
          <hr />
          <p class="font-weight-bold">Categoria</p>
          <filter-inputs
            :filterArray="Object.values(categories3)"
            kindOfArray="Categoria"
            @selected="setIndex"
          ></filter-inputs>
          <hr />
          <p class="font-weight-bold">Subcategoria</p>
          <hr />
          <p class="font-weight-bold">Caracteristica</p>
          <hr />
          <p class="font-weight-bold">Classificação</p>
          <hr />
          <b-form-input variant="dark" type="range" v-model="range" min="0" max="10"></b-form-input>
          <p class="text-center text-muted">{{ range }}</p>
        </aside>
        <section class="search-results-container container-fluid col-md-8">
          <div class="navbar navbar-expand-md search-view-options-container bg-light">
            <a
              data-toggle="collapse"
              href="#filter-div"
              role="button"
              aria-expanded="false"
              class="text-dark"
              aria-controls="filter-div"
            >
              <i class="fa fa-filter" aria-hidden="true"></i>
            </a>
            <div class="float-left col-md-6">
              <span
                class="text-muted font-italic"
              >{{ services.length}} de {{services2.length}} Resultados encontrados:</span>
            </div>
            <div class="float-right col-md-6">
              <div class="text-right mr-4">
                <mdb-btn-group>
                  <mdb-btn
                    size="sm"
                    color="grey lighten-3"
                    @click="viewToogle(0)"
                    :active="active0"
                    class="rounded text-warning"
                  >
                    Lista
                    <i class="fa fa-th-list" aria-hidden="true"></i>
                  </mdb-btn>
                  <mdb-btn
                    size="sm"
                    color="grey lighten-3"
                    @click="viewToogle(1)"
                    :active="active1"
                    class="rounded text-warning"
                  >
                    Cartao
                    <i class="fa fa-th-large" aria-hidden="true"></i>
                  </mdb-btn>
                </mdb-btn-group>
              </div>

              <!--ul class="navbar-nav">
                 <li class="nav-item py-2">
                  <span class="text-muted font-italic">Modo de Exibição:</span>
                </li>
      
                <li class="nav-item">
                  <button class="nav-link p-2" @click="viewToogle(0)">
                    <i class="fa fa-th-list text-dark" aria-hidden="true"></i>
                  </button>
                </li>
                <li class="nav-item">
                  <button class="nav-link p-2" @click="viewToogle(1)">
                    <i class="fa fa-th-large text-dark" aria-hidden="true"></i>
                  </button>
                </li>
              </ul-->
            </div>
            <div class="row">
              <div class="search-filters-dropdown"></div>
            </div>
          </div>
          <transition>
            <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-10">
                <div v-if="cardView" class="results-container">
                  <service-card v-for="service in services" :key="service._id" :service="service" />
                </div>
                <div v-else class="results-container">
                  <service-list v-for="service in services" :key="service._id" :service="service" />
                </div>
              </div>
              <div class="col-md-1"></div>
            </div>
          </transition>
          <hr />
          <mdb-pagination color="dark" circle>
            <mdb-page-nav prev>Anterior</mdb-page-nav>
            <mdb-page-item v-for="i in pages" :key="i" :class="{'active': i === 1}">
              <span class="page-link" @click="paginate(i,services2)">{{ i }}</span>
            </mdb-page-item>
            <mdb-page-nav next>Próxima</mdb-page-nav>
          </mdb-pagination>
          <!-- <nav aria-label="page-nav">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <span class="page-link text-dark">Anterior</span>
              </li>
              <li v-for="i in pages" :key="i" class="page-item"></li>
              <li class="page-item">
                <span class="page-link text-dark">Próximo</span>
              </li>
            </ul>
          </nav>-->
        </section>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";

import { general } from "../mixins/general";
import {
  mdbPagination,
  mdbPageItem,
  mdbPageNav,
  mdbBtn,
  mdbBtnGroup,
  mdbCarousel
} from "mdbvue";
axios.defaults.withCredentials = true;
var aux = -1;
var globalServices;
var globalCategories;
export default {
  mixins: [general],
  components: {
    mdbPagination,
    mdbPageItem,
    mdbPageNav,
    mdbBtn,
    mdbBtnGroup,
    mdbCarousel
  },
  data() {
    return {
      selected: 0,
      categories: [
        {
          id: 1,
          name: "Salões",
          img: "salao.jpg"
        },
        {
          id: 2,
          name: "DJs",
          img: "dj-1.jpg"
        },
        {
          id: 3,
          name: "Noivos",
          img: "casal.jpg"
        },
        {
          id: 4,
          name: "Decoração",
          img: "salao.jpg"
        },
        {
          id: 5,
          name: "Consultoria",
          img: "credentials.png"
        },
        {
          id: 6,
          name: "Tecnologia",
          img: "71462.jpg"
        }
      ],
      range: 0,
      cardView: true,
      pages: 0,
      services: [],
      provinces: [
        {
          name: "Luanda",
          counties: [
            {
              name: "Cacuaco"
            },
            {
              name: "Belas"
            },
            {
              name: "Cazenga"
            },
            {
              name: "Icolo e Bengo"
            },
            {
              name: "Luanda"
            },
            {
              name: "Quissama"
            },
            {
              name: "Kilamba Kiaxi"
            },
            {
              name: "Talatona"
            },
            {
              name: "Viana"
            }
          ]
        },
        {
          name: "Bengo",
          counties: [
            {
              name: "Ambriz"
            },
            {
              name: "Bula Atumba"
            },
            {
              name: "Dande"
            },
            {
              name: "Dembos"
            },
            {
              name: "Nambuangongo"
            },
            {
              name: "Pango"
            },
            {
              name: "Aluquem"
            }
          ]
        }
      ],
      services2: [],
      categories2: [],
      categories3: [],
      active0: true,
      active1: false,
      items: [
        {
          img: true,
          src: require("../assets/imgs/wedding-landing.jpg")
        },
        {
          img: true,
          src: require("../assets/imgs/dj-1.jpg")
        },
        {
          img: true,
          src: require("../assets/imgs/woman-4081760_1920.jpg")
        }
      ]
    };
  },
  methods: {
    viewToogle(flag) {
      this.cardView = flag;
      this.active0 = !this.active0;
      this.active1 = !this.active1;
    },

    paginate(pageNum, copyArray) {
      this.services = copyArray.slice(9 * (pageNum - 1), 9 * pageNum);
    },
    setIndex(value) {
      this.selected = value;
    },
    setServices() {
      axios
        .get("http://localhost:3000/api/v1/services")
        .then(response => {
          this.mountArray(response.data.data.docs);
        })
        .catch(error => {
          console.log(error);
        });
    },
    /* getCategories() {
      axios
        .get("http://localhost:3000/api/v1/categories")
        .then(response => {
          this.categories2 = response.data.data.docs;
        })
        .catch(error => {});
    }, */
    /* getCategories() {
      axios
        .get("http://localhost:3000/api/v1/categories")
        .then(response => {
          this.categories3 = response.data.data.docs;
          console.log(Object.values(this.categories3));
        })
        .catch(error => {
          console.log(error);
        });
      //this.setCategories();
    } */

    mountArray(array) {
      /* var copyArray = this.services2;
      console.log(copyArray); */
      console.log(array);
      this.services2 = array;
      this.pages = Math.ceil(array.length / 9);
      this.services = array.slice(0, 9);
    },

    getFavourites() {
      axios
        .get("http://localhost:3000/api/v1/favoriteServices/MyFavorites")
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.setServices();
    this.generalGet("categories", this.categories3);
    this.getCategories();
    this.getFavourites();
  },

  mounted() {
    console.log(this.pages);
    console.log(this.services);
    console.log(this.services2);
  }
};

$(".test").addClass("text-warning");

$("#explorerCarousel").on("slide.bs.carousel", function(e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 3;
  var totalItems = $("#explorerCarousel > .carousel-item").length;
  var x = 1;

  if (x == 1) {
    console.log(idx, totalItems, itemsPerSlide);
    x++;
  }
  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $("#explorerCarousel > .carousel-item")
          .eq(i)
          .appendTo("#category-carousel");
      } else {
        /* $("#explorerCarousel > .carousel-item")
          .eq(0)
          .appendTo($(this).find("#category-carousel")); */
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/scss/div-carousel.scss";
.div-main {
  width: 99.99vw;
  height: 91.8vh;
  margin-top: 8.2vh;
}
.landing-container {
  height: 80vh;
  /* Chrome10+,Safari5.1+ */

  background-image: linear-gradient(315deg, #edd81277 0%, #766a6577 74%);
}
.landing-row {
  height: 80vh;
}

.landing-images {
  background: url("../assets/imgs/wedding-landing.jpg");
  height: 80vh;
  z-index: -1;
  filter: blur(1px) brightness(70%);

  position: absolute;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.landing-text {
  /* margin-top: 5%;
  margin-left: 12%; */
}
.search-filters-container,
.search-results-container {
  margin: 0;
  padding: 0;
}

.search-filters-container {
  box-shadow: 1px 1px 5px #343a40ee;
}

.results-container {
}

.search-results-container {
  box-shadow: 1px 1px 3px #343a40ee;
  background-color: transparent;
}

.categories-row {
}

.category-box {
  &:first-child {
    margin-left: 15%;
  }
}

.explorer-logo {
  margin-bottom: 2%;
}

.nav-item button {
  border: 0;
}

#explorer-carousel {
  position: absolute !important;
  z-index: -1 !important;
}

#explorer-carousel > .view {
  height: 80vh;
}

#explorer-carousel > .view img {
  object-fit: cover !important;
  filter: blur(1px) brightness(70%);
}
</style>