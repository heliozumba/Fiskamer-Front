<template>
  <div class="main-div">
    <div class="container-fluid landing-container">
      <div class="row">
        <div class="landing-images col-12"></div>
        <div class="landing-text text-center">
          <h1 class="display-3 text-warning">Explore</h1>
          <h4 class="display-4 text-warning">Encontre tudo que precisa, em alguns cliques.</h4>
          <search-bar></search-bar>
        </div>
      </div>

      <div class="row">
        <div class="col-md-1"></div>
        <aside class="search-filters-container col-md-2">
          <p>Provincia</p>
          <form action>
            <div class="form-group">
              <select class="custom-select">
                <option value="Luanda">Luanda</option>
                <option value="Benguela">Benguela</option>
              </select>
            </div>
          </form>
          <p>Distrito</p>
          <p>Categoria</p>
          <p>Subcategoria</p>
          <p>Caracteristica</p>
          <p>Classificação</p>
        </aside>
        <section class="search-results-container container-fluid col-md-8">
          <div class="navbar navbar-expand-md search-view-options-container bg-light">
            <div class="float-left">
              <span class="text-muted font-italic">X de {{services.length}} Resultados encontrados:</span>
            </div>
            <div class="float-right ml-5">
              <ul class="navbar-nav">
                <li class="nav-item py-2">
                  <span class="text-muted font-italic">Modo de Exibição:</span>
                </li>
                <li class="nav-item">
                  <a role="button" class="nav-link" href="#" @click="viewToogle(0)">
                    <i class="fa fa-th-list text-dark" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a role="button" class="nav-link" href="#" @click="viewToogle(1)">
                    <i class="fa fa-th-large text-dark" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div v-if="cardView" class="results-container">
            <service-card v-for="service in services" :key="service.id" :service="service" />
          </div>
          <div v-else class="results-container">
            <service-list v-for="service in services" :key="service.id" :service="service" />
          </div>
          <hr />
          <nav aria-label="page-nav">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <span class="page-link">Anterior</span>
              </li>
              <li class="page-item">
                <a href="#" class="page-link active">1</a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">2</a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">3</a>
              </li>
              <li class="page-item">
                <span class="page-link">Próximo</span>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          image: "106418_3.jpg",
          title: "Teste",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "2500",
          location: "Talatona, Luanda",
          type: "Salao",
          classification: 5.6
        },
        {
          id: 2,
          image: "wedding3.jpg",
          title: "Teste",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "2500",
          location: "Cazenga,Luanda",
          type: "Salao",
          classification: 7
        },
        {
          id: 3,
          image: "wedding2.jpg",
          title: "Teste",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "2500",
          location: "Mutamba, Luanda",
          type: "Salao",
          classification: 10
        },
        {
          id: 4,
          image: "wedding.jpg",
          title: "Teste2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "3500",
          location: "Mutamba, Luanda",
          type: "Salao",
          classification: 2
        },
        {
          id: 5,
          image: "106418_3.jpg",
          title: "Teste",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "2500",
          location: "Talatona, Luanda",
          type: "Salao",
          classification: 7
        },
        {
          id: 6,
          image: "wedding3.jpg",
          title: "Teste",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "2500",
          location: "Cazenga,Luanda",
          type: "Salao",
          classification: 1
        },
        {
          id: 7,
          image: "wedding2.jpg",
          title: "Teste",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "2500",
          location: "Mutamba, Luanda",
          type: "Salao",
          classification: 6
        },
        {
          id: 8,
          image: "wedding.jpg",
          title: "Teste2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "3500",
          location: "Mutamba, Luanda",
          type: "Salao",
          classification: 3
        },
        {
          id: 9,
          image: "wedding.jpg",
          title: "Teste2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "3500",
          location: "Mutamba, Luanda",
          type: "Salao",
          classification: 8.5
        }
      ],
      cardView: true
    };
  },
  methods: {
    viewToogle(flag) {
      this.cardView = flag;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-div {
  width: 99.99vw;
  height: 91.8vh;
  margin-top: 8.2vh;
}
.landing-container {
  height: 60vh;

  .row {
    height: 60vh;
  }
}

.landing-images {
  background: url("../assets/imgs/wedding-landing.jpg");
  height: 60vh;
  z-index: -1;
  opacity: 0.7;
  filter: blur(2px);
  position: absolute;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.landing-text {
  margin-top: 5%;
  margin-left: 12%;
}
.search-filters-container,
.search-results-container {
  border: 1px solid red;
  margin: 0;
  padding: 0;
}

.search-filters-container {
}
.results-container {
  padding-left: 10%;
}
</style>