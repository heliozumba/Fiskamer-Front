<template>
  <div class="main-div bg-white">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="row mt-5 main-row">
          <div class="col-md-7">
            <div class="row">
              <div class="col-md-12 p-2">
                <b-img
                  :src="require('../assets/imgs/profile-4.jpg')"
                  fluid
                  alt="Responsive image"
                  class="w-100 big-picture"
                ></b-img>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 p-1">
                <b-img
                  :src="require('../assets/imgs/profile-1.jpg')"
                  fluid
                  alt="Responsive image"
                  class="w-100 small-pictures pl-1"
                ></b-img>
              </div>
              <div class="col-md-3 p-1">
                <b-img
                  :src="require('../assets/imgs/profile-2.jpg')"
                  fluid
                  alt="Responsive image"
                  class="w-100 small-pictures"
                ></b-img>
              </div>
              <div class="col-md-3 p-1">
                <b-img
                  :src="require('../assets/imgs/profile-3.jpg')"
                  fluid
                  alt="Responsive image"
                  class="w-100 small-pictures"
                ></b-img>
              </div>
              <div class="col-md-3 p-1">
                <b-img
                  :src="require('../assets/imgs/profile-5.jpg')"
                  fluid
                  alt="Responsive image"
                  class="w-100 small-pictures pr-1"
                ></b-img>
              </div>
            </div>
          </div>
          <div class="col-md-5 p-3">
            <h2 class="font-weight-bold">{{ service.nome}}</h2>

            <mdb-rating value="4" class="my-3"></mdb-rating>
            <h4 class="font-weight-bold text-success">{{service.price.toLocaleString()}},00 AOA</h4>
            <small class="mb-5">Fornecedor: Jucas</small>

            <h4 class="mt-4 mb-3 font-weight-bold">Descrição</h4>
            <p
              class="text-justify"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aperiam nobis earum ab, facere optio molestias voluptatibus nemo. Voluptas, enim omnis! Minima dolore omnis officiis, asperiores debitis magni facere animi!</p>
            <div class="service-buttons text-center text-warning">
              <mdb-tooltip trigger="hover" :options="{placement:'top'}">
                <span slot="tip">Adicionar aos Favoritos</span>
                <mdb-btn
                  color="elegant"
                  class="text-warning"
                  slot="reference"
                  @click="addFavourite"
                >
                  <i class="fas fa-heart"></i>
                </mdb-btn>
              </mdb-tooltip>
              <mdb-tooltip trigger="hover" :options="{placement:'top'}">
                <span slot="tip">Adicionar ao Planejamento</span>
                <mdb-btn color="elegant" class="text-warning" slot="reference" @click="addPlan">
                  <i class="fas fa-plus"></i>
                </mdb-btn>
              </mdb-tooltip>
              <mdb-tooltip trigger="hover" :options="{placement:'top'}">
                <span slot="tip">Contactar Fornecedor</span>
                <mdb-btn
                  color="elegant"
                  class="text-warning"
                  slot="reference"
                  v-b-modal.contact
                  @click="sendSupplier"
                >
                  <i class="fas fa-phone"></i>
                </mdb-btn>
              </mdb-tooltip>
              <contact></contact>
              <mdb-tooltip trigger="hover" :options="{placement:'top'}">
                <span slot="tip">Adicionar ao Carrinho</span>
                <mdb-btn color="elegant" class="text-warning" slot="reference" @click="addToCart">
                  <i class="fas fa-cart-plus mr-1"></i>
                </mdb-btn>
              </mdb-tooltip>
            </div>
            <div class="other-options my-4">
              <h5 class="font-weight-bold">Outras opções:</h5>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    <i class="fas fa-file mx-1"></i>
                    <span class="font-weight-bold">Orçamento</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="details-footer">
              <p class="mb-1">
                <span class="font-weight-bold">Categoria:</span>
                <span>{{ service.categoria.categoria}}</span>
              </p>
              <p class="mb-1">
                <span class="font-weight-bold">Tags:</span>
                <span>Salão de Festas, Espaços, Casamentos</span>
              </p>
              <p>
                <span class="font-weight-bold">Partilhar:</span>
                <a href="#" class="text-dark">
                  <i class="fab fa-facebook mx-1"></i>
                </a>
                <a href="#" class="text-dark">
                  <i class="fab fa-twitter mx-1"></i>
                </a>
                <a href="#" class="text-dark">
                  <i class="fab fa-whatsapp mx-1"></i>
                </a>
                <a href="#" class="text-dark">
                  <i class="fab fa-instagram mx-1"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>

    <!--
        <div class="row bg-dark text-warning">
              <div class="col-md-2 mx-0">
                <b-button
                  v-b-tooltip.hover
                  title="Adicionar ao carrinho"
                  @click="addToCart"
                  variant="outline"
                  id="cart-button"
                >
                  <i class="fas fa-cart-plus"></i>
                </b-button>
              </div>
              <div class="col-md-2 mx-0">
                <b-button
                  variant="outline"
                  v-b-tooltip.hover
                  title="Wishlist"
                  @click="addFavourite"
                >
                  <i class="fas fa-heart"></i>
                </b-button>
              </div>
              <div class="col-md-2 mx-0">
                <b-button v-b-tooltip.hover title="Classificar" variant="outline">
                  <b-icon-star-fill></b-icon-star-fill>
                </b-button>
              </div>
              <div class="col-md-2 mx-0">
                <b-button v-b-tooltip.hover title="Orçamento" variant="outline">
                  <b-icon-file-text></b-icon-file-text>
                </b-button>
              </div>
              <div class="col-md-2 mx-0">
                <b-button
                  v-b-tooltip.hover
                  title="Adicionar ao Planejamento"
                  @click="addPlan"
                  variant="outline"
                >
                  <b-icon-plus-square></b-icon-plus-square>
                </b-button>
              </div>
              <div class="col-md-2 mx-0">
                <b-button
                  v-b-tooltip.hover
                  title="Solicitar"
                  v-b-modal.payment
                  @click="sendToPay(service)"
                  variant="outline"
                >
                  <i class="fa fa-credit-card" aria-hidden="true"></i>
                </b-button>
              </div>
              
              <div v-if="isClient">
                  <b-button
                  v-b-tooltip.hover
                  title="Teste Solicitacao"
                  @click="requestService"
                  variant="outline"
                >
                  <i class="fa fa-credit-card" aria-hidden="true"></i>
                  Teste
                </b-button>

                <service-payment></service-payment>
              </div>
              <div class="button-footer" v-else>
                <b-button
                  v-b-tooltip.hover
                  title="Contactar"
                  v-b-modal.contact
                  variant="outline"
                  @click="sendSupplier"
                >
                  <b-icon-phone></b-icon-phone>
                </b-button>
                <contact></contact>
              </div>
            </div>
    -->
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10 my-4">
        <div class="row">
          <!--div class="service-image-container col-md-9">
            <b-img
              :src="require('../assets/imgs/credentials.png')"
              fluid
              rounded
              alt="Responsive image"
              class="w-100"
            ></b-img>

            <div class="row my-2 bg-light">
              <div class="col-md-2">
                <  <b-avatar
                  size="8rem"
                  :src="require('../assets/imgs/credentials.png')"
                  class="mt-3 ml-1"
                ></b-avatar>
              </div>
              <div class="col-md-7">
                <div class="service-info">
                  <h4>{{ service.nome }}</h4>
                  <p class="text-muted">{{ }}</p>

                  <p class="text-success">{{ service.price.toLocaleString() }},00 AOA</p>
                  <p class>
                    fornecido por:
                    < <router-link
                      :to="{name:'userProfile',params:{ id:service.fornecedor._id}}"
                    >{{service.fornecedor._id}}</router-link>
                  </p>
                </div>
              </div>
              <div class="col-md-2 border text-center">
                <p class="mb-1 border-bottom">Classificação</p>
                <span class="display-4">{{ service.classification}}</span>
              </div>
              <hr />
            </div>
          </div-->
          <!--div class="service-sidebar p-4 col-md-3 rounded bg-dark">
            <b-list-group class="bg-light mb-2 rounded">
              <b-list-group-item>
                <b-icon-people-fill class font-scale="1.5"></b-icon-people-fill>
                <span class>Capacidade:</span>
                <span class>100 Pessoas</span>
              </b-list-group-item>

              <b-list-group-item class>
                <b-icon-people-fill class font-scale="1.5"></b-icon-people-fill>
                <span class>Serviços Inclusos:</span>
                <p
                  class="text-justify"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta suscipit dolorem debitis, reiciendis beatae et repellat dolore, fugit deserunt velit esse, quam in eveniet odit sit dolor facere cum!</p>
              </b-list-group-item>
              <b-list-group-item class>
                <b-icon-people-fill class font-scale="1.5"></b-icon-people-fill>
                <span class>Compartimentos:</span>
                <p
                  class="text-justify"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta suscipit dolorem debitis, reiciendis beatae et repellat dolore, fugit deserunt velit esse, quam in eveniet odit sit dolor facere cum!</p>
              </b-list-group-item>
            </b-list-group>

            <div class="buttons-footer" v-if="isClient">
              <b-button
                block
                variant="outline-danger"
                v-b-tooltip.hover
                title="Wishlist"
                @click="addFavourite"
              >
                <b-icon-heart-fill></b-icon-heart-fill>Favorito
              </b-button>
              <b-button block variant="outline-warning" v-b-tooltip.hover title="Classificar">
                <b-icon-star-fill></b-icon-star-fill>Classificar
              </b-button>
              <b-button block variant="outline-info" v-b-tooltip.hover title="Orçamento">
                <b-icon-file-text></b-icon-file-text>Orçamento
              </b-button>
              <b-button
                block
                variant="outline-primary"
                v-b-tooltip.hover
                title="Adicionar ao Planejamento"
                @click="addPlan"
              >
                <b-icon-plus-square></b-icon-plus-square>Planejamento
              </b-button>
              <b-button
                block
                variant="outline-success"
                v-b-tooltip.hover
                title="Solicitar"
                v-b-modal.payment
                @click="sendToPay(service)"
              >
                <i class="fa fa-credit-card" aria-hidden="true"></i> Solicitar
              </b-button>
              <b-button
                block
                variant="outline-light"
                v-b-tooltip.hover
                title="Teste Solicitacao"
                @click="requestService"
              >
                <i class="fa fa-credit-card" aria-hidden="true"></i> TesteSolicitar
              </b-button>
              <service-payment></service-payment>
          </div-->
          <!--div class="button-footer" v-else>
              <b-button
                block
                variant="outline-warning"
                v-b-tooltip.hover
                title="Contactar"
                v-b-modal.contact
                @click="sendSupplier"
              >
                <b-icon-phone></b-icon-phone>Contactar
              </b-button>
              <contact></contact>
            </div>
          </div-->
        </div>

        <div class="row my-5">
          <div class="col-md-7">
            <h3>Sobre {{service.nome}}</h3>
            <h5>Descrição</h5>
            <p
              class="text-justify"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aperiam nobis earum ab, facere optio molestias voluptatibus nemo. Voluptas, enim omnis! Minima dolore omnis officiis, asperiores debitis magni facere animi!</p>

            <h5>Espaços</h5>
            <p
              class="text-justify"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aperiam nobis earum ab, facere optio molestias voluptatibus nemo. Voluptas, enim omnis! Minima dolore omnis officiis, asperiores debitis magni facere animi!</p>

            <h5>Localização</h5>
            <p
              class="text-justify"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aperiam nobis earum ab, facere optio molestias voluptatibus nemo. Voluptas, enim omnis! Minima dolore omnis officiis, asperiores debitis magni facere animi!</p>
          </div>

          <div class="col-md-5">
            <h3>Informação adicional</h3>
            <b-table responsive :items="questions"></b-table>
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
    <section class="container-fluid col-md-12">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-md-10 comentantary-section">
          <h2 class="text-center mb-5">Veja o que outros utilizadores acharam deste serviço</h2>
          <b-card
            title="Maravilhoso"
            :img-src="require('../assets/imgs/user-3.jpg')"
            img-alt="user-image"
            img-top
            tag="article"
            class="col-md-3 mr-3 mb-2 d-inline-block"
            id="comment-lead"
          >
            <b-card-text>
              <blockquote class="blockquote">
                <p
                  class="text-justify"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nisi nulla. Sed accusamus ullam eligendi!</p>
                <footer class="blockquote-footer">
                  <cite class="ml-1">utilizador</cite>
                </footer>
              </blockquote>
            </b-card-text>
          </b-card>
          <b-card
            title="O Melhor Salão"
            :img-src="require('../assets/imgs/user-2.jpg')"
            img-alt="user-image"
            img-top
            tag="article"
            class="col-md-3 mx-3 mb-2 d-inline-block"
          >
            <b-card-text>
              <blockquote class="blockquote">
                <p
                  class="text-justify"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nisi nulla. Sed accusamus ullam eligendi!</p>
                <footer class="blockquote-footer">
                  <cite>utilizador</cite>
                </footer>
              </blockquote>
            </b-card-text>
          </b-card>
          <b-card
            title="Incrível!"
            :img-src="require('../assets/imgs/user-3.jpg')"
            img-alt="user-image"
            img-top
            tag="article"
            class="col-md-3 mx-3 mb-2 d-inline-block"
          >
            <b-card-text>
              <blockquote class="blockquote">
                <p
                  class="text-justify"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nisi nulla. Sed accusamus ullam eligendi!</p>
                <footer class="blockquote-footer">
                  <cite>utilizador</cite>
                </footer>
              </blockquote>
            </b-card-text>
          </b-card>
        </div>
        <div class="col-1"></div>
      </div>
    </section>
  </div>
</template>


<script>
import axios from "axios";
import { bus } from "../main";
import { general } from "../mixins/general";
import { mdbRating, mdbBtn, mdbTooltip } from "mdbvue";

axios.defaults.withCredentials = true;
export default {
  components: {
    mdbRating,
    mdbBtn,
    mdbTooltip
  },
  mixins: [general],
  props: {},
  data() {
    return {
      isClient: true,
      questions: [
        { question: "Celebração de mais de um evento diário", answer: "Não" },
        { question: "Aluguel só do espaço", answer: "Não" },
        { question: "Possui cozinha", answer: "Sim" },
        { question: "Possui Piscina", answer: "Não" },
        { question: "Alteração de Menu", answer: "Sim" },
        { question: "Bolo de Casamento Incluido", answer: "Sim" },
        { question: "Fotografo", answer: "Não" },
        { question: "Musica", answer: "Sim" },
        { question: "Horário Limite", answer: "Não" },
        { question: "Bar Aberto", answer: "Não" },
        { question: "Acesso para Deficientes", answer: "Cash" },
        { question: "Método de Pagamento", answer: "Cash" }
      ],

      service: this.$store.state.service
    };
  },
  methods: {
    getSupplier() {
      console.log(this.service.fornecedor._id);
      axios
        .get(
          "http://localhost:3000/api/v1/users/" + this.service.fornecedor._id
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    addFavourite() {
      axios
        .post(
          "http://localhost:3000/api/v1/services/" +
            this.service._id +
            "/favourites"
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    addPlan() {
      axios
        .patch(
          "http://localhost:3000/api/v1/planejamentos/" +
            this.service._id +
            "/addToPlanejamento"
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    requestService() {
      axios
        .post(
          "http://localhost:3000/api/v1/services/" +
            this.service._id +
            "/solicitacaos",
          { data: "2020-05-10" }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendSupplier() {
      bus.$emit("sendsupplier", this.service.fornecedor);
    },
    sendToPay() {
      bus.$emit("sendtopay", this.service);
    },
    addToCart() {
      this.$store.dispatch("addCart", this.service);
      $("#cart-button").addClass("disabled");
    }
  },
  beforeMount() {
    if (!Boolean(this.$store.state.user)) {
      this.isClient = false;
    }
  },
  mounted() {
    this.getSupplier();
  },
  created() {
    bus.$on("notclient", value => {
      this.isClient = false;
    });
  }
};
</script>

<style lang="scss" scoped>
.main-div {
  width: 99.99vw;
  height: 91.8vh;
  margin-top: 8.2vh;
}

img {
  height: -webkit-fill-avaliable;
}
.service-image-container img {
  height: 80vh;
  object-fit: cover;
}

#comment-lead {
  margin-left: 10%;
}

.service-sidebar {
  box-shadow: 1px 1px 3px #343a40ee;
}
.main-row {
}
.big-picture {
  object-fit: cover;
  height: 55vh;
}

.small-pictures {
  object-fit: cover;
  height: 20vh;
}
/* 
.service-new-images {
  object-fit: cover;
  height: 25vh;
} */
</style>