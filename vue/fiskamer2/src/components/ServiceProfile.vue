<template>
  <div class="main-div bg-white">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10 my-4">
        <div class="row">
          <div class="service-image-container col-md-9">
            <b-img
              :src="require('../assets/imgs/credentials.png')"
              fluid
              rounded
              alt="Responsive image"
              class="w-100"
            ></b-img>
            <div class="row my-2 bg-light">
              <div class="col-md-2">
                <b-avatar
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
                    <router-link
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
          </div>
          <div class="service-sidebar p-4 col-md-3 rounded bg-dark">
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
            </div>
            <div class="button-footer" v-else>
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
          </div>
          <div class="description-container text-justify my-4">
            <p class="lead">""</p>
          </div>
        </div>

        <div class="row">
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
            title="Title Comentary"
            :img-src="require('../assets/imgs/credentials.png')"
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
            title="Username"
            :img-src="require('../assets/imgs/credentials.png')"
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
            title="Username"
            :img-src="require('../assets/imgs/credentials.png')"
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

axios.defaults.withCredentials = true;
export default {
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
        .get("http://localhost:3000/api/v1/users/" + this.service.fornecedor)
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
</style>