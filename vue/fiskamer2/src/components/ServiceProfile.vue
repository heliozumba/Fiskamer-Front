<template>
  <div class="main-div bg-white">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10 my-4">
        <div class="row">
          <div class="service-image-container col-md-9">
            <b-img
              :src="require('../assets/imgs/'+service.image)"
              fluid
              rounded
              alt="Responsive image"
              class="w-100"
            ></b-img>
            <div class="row my-2 bg-light">
              <div class="col-md-2">
                <b-avatar
                  size="8rem"
                  :src="require('../assets/imgs/'+service.image)"
                  class="mt-3 ml-1"
                ></b-avatar>
              </div>
              <div class="col-md-7">
                <div class="service-info">
                  <h4>{{ service.title }}</h4>
                  <p class="text-muted">{{ service.location }}</p>

                  <p class="text-success">{{ service.price }}, 00 AOA</p>
                  <p class>fornecido por: Juca</p>
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

            <div class="buttons-footer">
              <b-button block variant="outline-danger" v-b-tooltip.hover title="Wishlist">
                <b-icon-heart-fill></b-icon-heart-fill>
              </b-button>
              <b-button block variant="outline-warning" v-b-tooltip.hover title="Classificar">
                <b-icon-star-fill></b-icon-star-fill>
              </b-button>
              <b-button block variant="outline-info" v-b-tooltip.hover title="Orçamento">
                <b-icon-file-text></b-icon-file-text>
              </b-button>
              <b-button
                block
                variant="outline-success"
                v-b-tooltip.hover
                title="Solicitar"
                v-b-modal.payment
              >
                <i class="fa fa-credit-card" aria-hidden="true"></i>
              </b-button>
              <service-payment></service-payment>
            </div>
          </div>
          <div class="description-container text-justify my-4">
            <p class="lead">"{{service.description}}"</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-7">
            <h3>Sobre Nome do Serviço</h3>
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
            :img-src="require('../assets/imgs/'+service.image)"
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
            :img-src="require('../assets/imgs/'+service.image)"
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
            :img-src="require('../assets/imgs/'+service.image)"
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
export default {
  props: {},
  data() {
    return {
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
      service: null
    };
  },
  methods: {},
  mounted() {
    this.service = this.services[this.$route.params.id - 1];
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