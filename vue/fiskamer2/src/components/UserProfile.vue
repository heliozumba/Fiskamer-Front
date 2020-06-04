<template>
  <div class="container-fluid div-main grey lighten-4">
    <div class="row mt-5">
      <div class="col-md-1"></div>
      <div class="col-md-10 mt-4 rounded">
        <div class="row p-5 my-4 bg-white profile-container rounded">
          <div class="col-md-4">
            <div class="profile-image-container">
              <img
                class="profile-img img-fluid rounded-circle ml-5"
                src="../assets/imgs/profile.jpg"
                alt
              />
            </div>
          </div>
          <div class="col-md-3 p-4 mt-5">
            <div class="user-info-container">
              <small class="text-muted font-weight-bold">Nome</small>
              <h5>{{ user.name}}</h5>
              <small class="text-muted font-weight-bold">Endereço</small>
              <p class="text-muted font-italic mb-1">
                <i class="fas fa-map-marker-alt"></i>
                {{user.endereco}}
              </p>
            </div>
          </div>
          <div class="col-md-5 mt-5 p-3">
            <div class="row">
              <small class="text-muted font-weight-bold">Descrição</small>
              <p
                class="text-justify"
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam placeat reprehenderit dignissimos magnam aperiam quis numquam consectetur aliquam cumque nostrum,</p>
            </div>
            <div class="row float-right">
              <div class>
                <div class="p-1 mt-3">
                  <edit-user></edit-user>
                  <!-- <button v-else class="btn btn-raised btn-dark rounded">Seguir</button> -->
                </div>
              </div>
            </div>
          </div>

          <!-- <b-col v-if="!isClient" md="2" class="text-center p-3">
            <p>Clientes</p>
            <h1>5</h1>
          </b-col>-->

          <!-- <div class="col-md-3 mt-5 border profile-container rounded p-4 mx-5">
            <div
              class="card-icons float-left text-center text-white p-4 border mb-5 position-absolute profile-container blue-gradient"
            >
              <i class="fas fa-file fa-2x"></i>
            </div>
            <div class="text-center">
              <h1 class="font-weight-bold mt-3">5</h1>
              <p class="text-muted">Solicitações</p>
            </div>
          </div>
          <div class="col-md-3 mt-5 border profile-container rounded bg-white p-4 mx-5">
            <div
              class="card-icons float-left text-center text-white p-4 border mb-5 position-absolute profile-container purple-gradient"
            >
              <i class="fas fa-hand-holding-heart fa-2x"></i>
            </div>
            <div class="text-center">
              <h1 class="font-weight-bold mt-3">5</h1>
              <p class="text-muted">Wishlist</p>
            </div>
          </div>
          <div class="col-md-3 mt-5 border profile-container rounded bg-white p-4 mx-5">
            <div
              class="card-icons float-left text-center text-white p-4 border mb-5 position-absolute profile-container young-passion-gradient"
            >
              <i class="fas fa-heart fa-2x"></i>
            </div>
            <div class="text-center">
              <h1 class="font-weight-bold mt-3">5</h1>
              <p class="text-muted">Favoritos</p>
            </div>
          </div>-->
        </div>
        <div class="mt-5">
          <div class="row">
            <div class="col-md-3 border profile-container rounded p-4 mx-5">
              <div
                class="card-icons float-left text-center text-white p-4 border mb-5 position-absolute profile-container blue-gradient"
              >
                <i class="fas fa-file fa-2x"></i>
              </div>
              <div class="text-center">
                <h1 class="font-weight-bold mt-3">5</h1>
                <p class="text-muted">Solicitações</p>
              </div>
            </div>
            <div class="col-md-3 border profile-container rounded bg-white p-4 mx-5">
              <div
                class="card-icons float-left text-center text-white p-4 border mb-5 position-absolute profile-container purple-gradient"
              >
                <i class="fas fa-hand-holding-heart fa-2x"></i>
              </div>
              <div class="text-center">
                <h1 class="font-weight-bold mt-3">5</h1>
                <p class="text-muted">Wishlist</p>
              </div>
            </div>
            <div class="col-md-3 border profile-container rounded bg-white p-4 mx-5">
              <div
                class="card-icons float-left text-center text-white p-4 border mb-5 position-absolute profile-container warm-flame-gradient"
              >
                <i class="fas fa-heart fa-2x"></i>
              </div>
              <div class="text-center">
                <h1 class="font-weight-bold mt-3">5</h1>
                <p class="text-muted">Favoritos</p>
              </div>
            </div>
          </div>
        </div>
        <div class="service-table">
          <div class="row mt-5">
            <div class="col-md-9 profile-container rounded bg-white p-4">
              <mdb-card class="mt-2 aqua-gradient text-center text-white font-weight-bold">
                <mdb-card-body>
                  <h4>Solicitações</h4>
                </mdb-card-body>
              </mdb-card>
              <mdb-datatable-2 v-model="data" bordered reactive :time="5000" />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div class="col-md-2 ml-2">
              <div class="row">
                <!-- <h4 class="font-weight-bold border-bottom">Esta Semana</h4> -->
                <div class="profile-container rounded bg-white p-5 col-md-12">
                  <div class="text-center">
                    <h4 class="text-muted">Semanal</h4>
                    <h1 class="font-weight-bold mt-3">20%</h1>
                    <mdb-progress :height="10" :value="20" color="sunny-morning-gradient"></mdb-progress>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <!-- <h4 class="font-weight-bold border-bottom">Este Mês</h4> -->
                <div class="profile-container rounded bg-white p-5 col-md-12">
                  <div class="text-center">
                    <h4 class="text-muted">Mensal</h4>
                    <h1 class="font-weight-bold mt-3">60%</h1>
                    <mdb-progress :height="10" :value="60" color="sunny-morning-gradient"></mdb-progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-1"></div>
        <div class="row mt-4">
          <div v-if="isClient" class="col-md-12 text-center">
            <h2 class>Wishlist</h2>
            <h5 class="text-muted">Serviços selecionados por Nome para a realização do seu evento</h5>
            <h5 class="text-muted">
              Avaliada em:
              <span class="text-success">75 000,00 AOA</span>
            </h5>
            <hr />
          </div>

          <div v-else class="col-md-12 text-center">
            <h2>Serviços</h2>
            <h5 class="text-muted">Veja abaixo os serviços prestados por Nome</h5>
            <span class="text-danger">
              <b-icon-heart-fill class="mr-2"></b-icon-heart-fill>10
            </span>
            <span class="text-warning ml-4">
              <b-icon-star-fill class="mr-2"></b-icon-star-fill>5.8
            </span>
            <hr />
          </div>
          <div class="service-cards" v-for="service in services" :key="service._id">
            <b-card
              :img-src="require('../assets/imgs/71462.jpg')"
              class="col-md-3 mx-4 my-3 p-0"
              no-body
            >
              <b-card-footer class="p-0 text-center">
                <p class="mb-0">
                  <small class>{{service.nome}}</small>
                </p>
                <p class="mb-0">
                  <small class="text-success">{{service.price}}</small>
                </p>
                <small class="text-muted">{{isClient? "Escolhido" : "Cadastrado"}} a XX/XX/XXXX</small>
              </b-card-footer>
            </b-card>
          </div>
          <!-- <b-card
            :img-src="require('../assets/imgs/71462.jpg')"
            class="col-md-3 mx-4 my-3 p-0"
            no-body
          >
            <b-card-footer class="p-0 text-center">
              <p class="mb-0">
                <small class>Serviço X</small>
              </p>
              <p class="mb-0">
                <small class="text-success">25 000,00 AOA</small>
              </p>
              <small class="text-muted">Escolhido a XX/XX/XXXX</small>
            </b-card-footer>
          </b-card>
          <b-card
            :img-src="require('../assets/imgs/71462.jpg')"
            class="col-md-3 mx-4 my-3 p-0"
            no-body
          >
            <b-card-footer class="p-0 text-center">
              <p class="mb-0">
                <small class>Serviço X</small>
              </p>
              <p class="mb-0">
                <small class="text-success">25 000,00 AOA</small>
              </p>
              <small class="text-muted">Escolhido a XX/XX/XXXX</small>
            </b-card-footer>
          </b-card>
          <b-card
            :img-src="require('../assets/imgs/71462.jpg')"
            class="col-md-3 mx-4 my-3 p-0"
            no-body
          >
            <b-card-footer class="p-0 text-center">
              <p class="mb-0">
                <small class>Serviço X</small>
              </p>
              <p class="mb-0">
                <small class="text-success">25 000,00 AOA</small>
              </p>
              <small class="text-muted">Escolhido a XX/XX/XXXX</small>
            </b-card-footer>
          </b-card>
          <b-card
            :img-src="require('../assets/imgs/71462.jpg')"
            class="col-md-3 mx-4 my-3 p-0"
            no-body
          >
            <b-card-footer class="p-0 text-center">
              <p class="mb-0">
                <small class>Serviço X</small>
              </p>
              <p class="mb-0">
                <small class="text-success">25 000,00 AOA</small>
              </p>
              <small class="text-muted">Escolhido a XX/XX/XXXX</small>
            </b-card-footer>
          </b-card>
          <b-card
            :img-src="require('../assets/imgs/71462.jpg')"
            class="col-md-3 mx-4 my-3 p-0"
            no-body
          >
            <b-card-footer class="p-0 text-center">
              <p class="mb-0">
                <small class>Serviço X</small>
              </p>
              <p class="mb-0">
                <small class="text-success">25 000,00 AOA</small>
              </p>
              <small class="text-muted">Escolhido a XX/XX/XXXX</small>
            </b-card-footer>
          </b-card>
          <b-card
            :img-src="require('../assets/imgs/71462.jpg')"
            class="col-md-3 mx-4 my-3 p-0"
            no-body
          >
            <b-card-footer class="p-0 text-center">
              <p class="mb-0">
                <small class>Serviço X</small>
              </p>
              <p class="mb-0">
                <small class="text-success">25 000,00 AOA</small>
              </p>
              <small class="text-muted">Escolhido a XX/XX/XXXX</small>
            </b-card-footer>
          </b-card>-->
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
import { general } from "../mixins/general";
import {
  mdbProgress,
  mdbEdgeHeader,
  mdbDatatable2,
  mdbCard,
  mdbCardBody
} from "mdbvue";
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  mixins: [general],
  components: {
    mdbProgress,
    mdbEdgeHeader,
    mdbDatatable2,
    mdbCard,
    mdbCardBody
  },
  data() {
    return {
      isClient: true,
      isAuthUser: true,
      services: [],
      user: {},
      data: {
        columns: [
          {
            label: "Name",
            field: "name",
            sort: true
          },
          {
            label: "Position",
            field: "position",
            sort: true
          },
          {
            label: "Office",
            field: "office",
            sort: true
          },
          {
            label: "Age",
            field: "age",
            sort: true
          },
          {
            label: "Start date",
            field: "date",
            sort: true
          },
          {
            label: "Salary",
            field: "salary",
            sort: false,
            format: value => "£" + value
          }
        ],
        rows: [
          {
            name: "Tiger Nixon",
            position: "System Architect",
            office: "Edinburgh",
            age: "61",
            date: "2011/04/25",
            salary: "320"
          },
          {
            name: "Garrett Winters",
            position: "Accountant",
            office: "Tokyo",
            age: "63",
            date: "2011/07/25",
            salary: "170"
          },
          {
            name: "Ashton Cox",
            position: "Junior Technical Author",
            office: "San Francisco",
            age: "66",
            date: "2009/01/12",
            salary: "86"
          },
          {
            name: "Cedric Kelly",
            position: "Senior Javascript Developer",
            office: "Edinburgh",
            age: "22",
            date: "2012/03/29",
            salary: "433"
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            date: "2008/11/28",
            salary: "162"
          },
          {
            name: "Brielle Williamson",
            position: "Integration Specialist",
            office: "New York",
            age: "61",
            date: "2012/12/02",
            salary: "372"
          },
          {
            name: "Herrod Chandler",
            position: "Sales Assistant",
            office: "San Francisco",
            age: "59",
            date: "2012/08/06",
            salary: "137"
          },
          {
            name: "Rhona Davidson",
            position: "Integration Specialist",
            office: "Tokyo",
            age: "55",
            date: "2010/10/14",
            salary: "327"
          },
          {
            name: "Colleen Hurst",
            position: "Javascript Developer",
            office: "San Francisco",
            age: "39",
            date: "2009/09/15",
            salary: "205"
          },
          {
            name: "Sonya Frost",
            position: "Software Engineer",
            office: "Edinburgh",
            age: "23",
            date: "2008/12/13",
            salary: "103"
          },
          {
            name: "Jena Gaines",
            position: "Office Manager",
            office: "London",
            age: "30",
            date: "2008/12/19",
            salary: "90"
          },
          {
            name: "Quinn Flynn",
            position: "Support Lead",
            office: "Edinburgh",
            age: "22",
            date: "2013/03/03",
            salary: "342"
          },
          {
            name: "Charde Marshall",
            position: "Regional Director",
            office: "San Francisco",
            age: "36",
            date: "2008/10/16",
            salary: "470"
          },
          {
            name: "Haley Kennedy",
            position: "Senior Marketing Designer",
            office: "London",
            age: "43",
            date: "2012/12/18",
            salary: "313"
          },
          {
            name: "Tatyana Fitzpatrick",
            position: "Regional Director",
            office: "London",
            age: "19",
            date: "2010/03/17",
            salary: "385"
          },
          {
            name: "Michael Silva",
            position: "Marketing Designer",
            office: "London",
            age: "66",
            date: "2012/11/27",
            salary: "198"
          },
          {
            name: "Paul Byrd",
            position: "Chief Financial Officer (CFO)",
            office: "New York",
            age: "64",
            date: "2010/06/09",
            salary: "725"
          },
          {
            name: "Gloria Little",
            position: "Systems Administrator",
            office: "New York",
            age: "59",
            date: "2009/04/10",
            salary: "237"
          },
          {
            name: "Bradley Greer",
            position: "Software Engineer",
            office: "London",
            age: "41",
            date: "2012/10/13",
            salary: "132"
          },
          {
            name: "Dai Rios",
            position: "Personnel Lead",
            office: "Edinburgh",
            age: "35",
            date: "2012/09/26",
            salary: "217"
          },
          {
            name: "Jenette Caldwell",
            position: "Development Lead",
            office: "New York",
            age: "30",
            date: "2011/09/03",
            salary: "345"
          },
          {
            name: "Yuri Berry",
            position: "Chief Marketing Officer (CMO)",
            office: "New York",
            age: "40",
            date: "2009/06/25",
            salary: "675"
          },
          {
            name: "Caesar Vance",
            position: "Pre-Sales Support",
            office: "New York",
            age: "21",
            date: "2011/12/12",
            salary: "106"
          },
          {
            name: "Doris Wilder",
            position: "Sales Assistant",
            office: "Sidney",
            age: "23",
            date: "2010/09/20",
            salary: "85"
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "47",
            date: "2009/10/09",
            salary: "1"
          },
          {
            name: "Gavin Joyce",
            position: "Developer",
            office: "Edinburgh",
            age: "42",
            date: "2010/12/22",
            salary: "92"
          },
          {
            name: "Jennifer Chang",
            position: "Regional Director",
            office: "Singapore",
            age: "28",
            date: "2010/11/14",
            salary: "357"
          },
          {
            name: "Brenden Wagner",
            position: "Software Engineer",
            office: "San Francisco",
            age: "28",
            date: "2011/06/07",
            salary: "206"
          },
          {
            name: "Fiona Green",
            position: "Chief Operating Officer (COO)",
            office: "San Francisco",
            age: "48",
            date: "2010/03/11",
            salary: "850"
          },
          {
            name: "Shou Itou",
            position: "Regional Marketing",
            office: "Tokyo",
            age: "20",
            date: "2011/08/14",
            salary: "163"
          },
          {
            name: "Michelle House",
            position: "Integration Specialist",
            office: "Sidney",
            age: "37",
            date: "2011/06/02",
            salary: "95"
          },
          {
            name: "Suki Burks",
            position: "Developer",
            office: "London",
            age: "53",
            date: "2009/10/22",
            salary: "114"
          },
          {
            name: "Prescott Bartlett",
            position: "Technical Author",
            office: "London",
            age: "27",
            date: "2011/05/07",
            salary: "145"
          },
          {
            name: "Gavin Cortez",
            position: "Team Leader",
            office: "San Francisco",
            age: "22",
            date: "2008/10/26",
            salary: "235"
          },
          {
            name: "Martena Mccray",
            position: "Post-Sales support",
            office: "Edinburgh",
            age: "46",
            date: "2011/03/09",
            salary: "324"
          },
          {
            name: "Unity Butler",
            position: "Marketing Designer",
            office: "San Francisco",
            age: "47",
            date: "2009/12/09",
            salary: "85"
          },
          {
            name: "Howard Hatfield",
            position: "Office Manager",
            office: "San Francisco",
            age: "51",
            date: "2008/12/16",
            salary: "164"
          },
          {
            name: "Hope Fuentes",
            position: "Secretary",
            office: "San Francisco",
            age: "41",
            date: "2010/02/12",
            salary: "109"
          },
          {
            name: "Vivian Harrell",
            position: "Financial Controller",
            office: "San Francisco",
            age: "62",
            date: "2009/02/14",
            salary: "452"
          },
          {
            name: "Timothy Mooney",
            position: "Office Manager",
            office: "London",
            age: "37",
            date: "2008/12/11",
            salary: "136"
          },
          {
            name: "Jackson Bradshaw",
            position: "Director",
            office: "New York",
            age: "65",
            date: "2008/09/26",
            salary: "645"
          },
          {
            name: "Olivia Liang",
            position: "Support Engineer",
            office: "Singapore",
            age: "64",
            date: "2011/02/03",
            salary: "234"
          },
          {
            name: "Bruno Nash",
            position: "Software Engineer",
            office: "London",
            age: "38",
            date: "2011/05/03",
            salary: "163"
          },
          {
            name: "Sakura Yamamoto",
            position: "Support Engineer",
            office: "Tokyo",
            age: "37",
            date: "2009/08/19",
            salary: "139"
          },
          {
            name: "Thor Walton",
            position: "Developer",
            office: "New York",
            age: "61",
            date: "2013/08/11",
            salary: "98"
          },
          {
            name: "Finn Camacho",
            position: "Support Engineer",
            office: "San Francisco",
            age: "47",
            date: "2009/07/07",
            salary: "87"
          },
          {
            name: "Serge Baldwin",
            position: "Data Coordinator",
            office: "Singapore",
            age: "64",
            date: "2012/04/09",
            salary: "138"
          },
          {
            name: "Zenaida Frank",
            position: "Software Engineer",
            office: "New York",
            age: "63",
            date: "2010/01/04",
            salary: "125"
          },
          {
            name: "Zorita Serrano",
            position: "Software Engineer",
            office: "San Francisco",
            age: "56",
            date: "2012/06/01",
            salary: "115"
          },
          {
            name: "Jennifer Acosta",
            position: "Junior Javascript Developer",
            office: "Edinburgh",
            age: "43",
            date: "2013/02/01",
            salary: "75"
          },
          {
            name: "Cara Stevens",
            position: "Sales Assistant",
            office: "New York",
            age: "46",
            date: "2011/12/06",
            salary: "145"
          },
          {
            name: "Hermione Butler",
            position: "Regional Director",
            office: "London",
            age: "47",
            date: "2011/03/21",
            salary: "356"
          },
          {
            name: "Lael Greer",
            position: "Systems Administrator",
            office: "London",
            age: "21",
            date: "2009/02/27",
            salary: "103"
          },
          {
            name: "Jonas Alexander",
            position: "Developer",
            office: "San Francisco",
            age: "30",
            date: "2010/07/14",
            salary: "86"
          },
          {
            name: "Shad Decker",
            position: "Regional Director",
            office: "Edinburgh",
            age: "51",
            date: "2008/11/13",
            salary: "183"
          },
          {
            name: "Michael Bruce",
            position: "Javascript Developer",
            office: "Singapore",
            age: "29",
            date: "2011/06/27",
            salary: "183"
          },
          {
            name: "Donna Snider",
            position: "Customer Support",
            office: "New York",
            age: "27",
            date: "2011/01/25",
            salary: "112"
          }
        ]
      }
    };
  },
  beforeMount() {
    this.generalGet(
      "users",
      this.services,
      "5ea7f5a4200ad642305fc732",
      "services"
    );
  },
  mounted() {
    this.user = this.$store.state.user;
  },
  created() {
    bus.$on("supplierProfile", value => {
      this.isClient = false;
    });
  },
  methods: {
    /* getServices() {
      axios
        .get(
          "http://localhost:3000/api/v1/users/5ea7f5a4200ad642305fc732/services"
        )
        .then(response => {
          console.log(response.data.data.docs);
          this.services = response.data.data.docs;
          //console.log(this.services);
        });
    } */
  }
};
</script>

<style lang="scss" scoped>
.div-main {
  width: 99.99vw;

  margin-top: 10.2vh;
}

.profile-image-container button {
  border-radius: 20px;
}

.card-icons {
  margin-top: -20%;
}

.profile-img {
  object-fit: cover;
  width: 16rem;
  height: 16rem;
}

.profile-container {
  box-shadow: 1px 1px 8px #343a4033;
}

.test-img {
  z-index: -2;
}
</style>