<template>
  <b-modal
    id="contact"
    title="Contactar Fornecedor"
    class="text-center"
    hide-backdrop
    hide-footer
    centered
  >
    <div></div>

    <div>
      <h4 class="text-center mb-4">Insira os seus Dados Pessoais</h4>
      <b-form-group>
        <b-form-input id="name" type="text" placeholder="Nome" required v-model="guest.name"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input id="email" type="email" placeholder="Email" required v-model="guest.email"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          id="phone"
          type="text"
          placeholder="Telemóvel"
          required
          v-model="guest.cellphone"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-textarea
          id="address"
          type="text"
          placeholder="Escreva uma mensagem..."
          required
          v-model="guest.message"
          rows="4"
        ></b-textarea>
      </b-form-group>
      <div class="text-center">
        <b-button variant="dark" class="ml-5" @click="sendMessage">Enviar Informações</b-button>
      </div>
    </div>
  </b-modal>
</template>

<script>
var total = $(".payment-phase").length;
var indexb = 0;

import { bus } from "../main";
export default {
  data() {
    return {
      guest: {
        name: "",
        email: "",
        cellphone: "",
        message: ""
      },
      supplier: {}
    };
  },
  methods: {
    sendMessage() {}
  },
  created() {
    bus.$on("sendsupplier", supplier => {
      this.supplier = supplier;
      console.log(this.supplier);
    });
  }
};

var total = $(".payment-phase").length;
var index = 0;
</script>

<style lang="scss" scoped>
.div-main {
  width: 99.99vw;
  height: 91.8vh;
  margin-top: 8.2vh;
}

.payment-form-container {
  border: 1px solid red;
}

.payment-phase {
  display: none;
}

.activated {
  display: block !important;
}
</style>