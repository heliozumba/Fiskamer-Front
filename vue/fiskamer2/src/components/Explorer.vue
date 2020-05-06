<template>
  <div class="div-main">
    <div class="container-fluid landing-container">
      <div class="row landing-row">
        <div class="landing-images col-12"></div>
        <div class=".col-md-1"></div>
        <div class="landing-text text-center col-md-10 m-auto">
          <!--h1 class="display-3 text-warning">Explore</h1>
          <h4 class="display-4 text-warning">Encontre tudo que precisa, em alguns cliques.</h4-->
          <img
            class="explorer-logo img-fluid w-50"
            src="@/assets/imgs/logo2.png"
            alt="fiskamer-logo"
          />
          <search-bar></search-bar>
        </div>

        <div class=".col-md-1"></div>
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
          class="collapse search-filters-container col-md-2 bg-light rounded position-sticky mr-1 p-4"
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
              <ul class="navbar-nav">
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
              </ul>
            </div>
            <div class="row">
              <div class="search-filters-dropdown"></div>
            </div>
          </div>
          <transition>
            <div v-if="cardView" class="results-container">
              <service-card v-for="service in services" :key="service._id" :service="service" />
            </div>
            <div v-else class="results-container">
              <service-list v-for="service in services" :key="service._id" :service="service" />
            </div>
          </transition>
          <hr />
          <nav aria-label="page-nav">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <span class="page-link text-dark">Anterior</span>
              </li>
              <li v-for="i in pages" :key="i" class="page-item">
                <button class="page-link text-dark" @click="paginate(i,services2)">{{ i }}</button>
              </li>
              <li class="page-item">
                <span class="page-link text-dark">Próximo</span>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";
axios.defaults.withCredentials = true;
var aux = -1;
var globalServices;
var globalCategories;
export default {
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
      categories3: []
    };
  },
  methods: {
    viewToogle(flag) {
      this.cardView = flag;
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
    getCategories() {
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
    },
    mountArray(array) {
      /* var copyArray = this.services2;
      console.log(copyArray); */
      console.log(array);
      this.services2 = array;
      this.pages = Math.ceil(array.length / 9);
      this.services = array.slice(0, 9);
    }
  },
  beforeMount() {
    this.setServices();
    this.getCategories();
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
  height: 60vh;
}
.landing-row {
  height: 60vh;
}

.landing-images {
  background: url("../assets/imgs/wedding-landing.jpg");
  height: 60vh;
  z-index: -1;
  opacity: 0.7;
  filter: blur(1px) brightness(60%);

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
  padding-left: 10%;
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
}

.nav-item button {
  border: 0;
}
</style>