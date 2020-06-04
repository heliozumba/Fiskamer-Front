<template>
  <!--   <b-modal id="editUser" title="Edição de Utilizador" class="text-center" hide-footer>
    <div class="payment-phase">
      <h4 class="text-center">Dados Pessoais</h4>
      <b-avatar size="10rem" class="profile-photo my-3"></b-avatar>
      <b-form-group label-for="name">
        <b-form-input id="name" type="text" required placeholder="Nome" v-model="user.name"></b-form-input>
      </b-form-group>
      <b-form-group label-for="email">
        <b-form-input id="email" type="email" placeholder="Email" v-model="user.email" required></b-form-input>
      </b-form-group>
      <b-form-group label-for="phone">
        <b-form-input
          id="phone"
          type="text"
          placeholder="Telemóvel"
          v-model="user.telemovel"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label-for="address">
        <b-form-input
          id="address"
          type="text"
          placeholder="Endereço"
          v-model="user.endereco"
          required
        ></b-form-input>
      </b-form-group>
      <b-button variant="info" class="update-button" @click="updateUser">Actualizar</b-button>
    </div>
  </b-modal>-->

  <mdb-container>
    <mdb-row>
      <mdb-col size="12" class="text-center mb-5">
        <mdb-btn @click.native="showModal = true" color="info">Editar</mdb-btn>
        <mdb-modal :show="showModal" @close="showModal = false" cascade class="text-left">
          <mdb-modal-header class="primary-color white-text blue-gradient">
            <h4 class="title">
              <fa class="fas fa-pencil-alt" />Edição de Dados Pessoais
            </h4>
          </mdb-modal-header>
          <mdb-modal-body class="grey-text">
            <mdb-input
              size="sm"
              label="Nome"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              v-model="user.name"
            />
            <mdb-input
              size="sm"
              label="Email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
              v-model="user.email"
            />
            <mdb-input
              size="sm"
              label="Telemóvel"
              icon="phone"
              group
              type="number"
              validate
              error="wrong"
              success="right"
              v-model="user.telemovel"
            />

            <mdb-input
              size="sm"
              label="Endereço"
              icon="map-marker-alt"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              v-model="user.endereco"
            />

            <mdb-textarea size="sm" :rows="3" label="Descrição" icon="pen-fancy" />
          </mdb-modal-body>
          <mdb-modal-footer class="mr-5">
            <mdb-btn color="blue-gradient" class="blue-gradient">Actualizar</mdb-btn>
            <mdb-btn color="secondary" @click.native="showModal = false">Cancelar</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>
<script>
import { bus } from "../main";
import axios from "axios";
import {
  mdbInput,
  mdbBtn,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbTextarea,
  mdbIcon,
  mdbModal,
  mdbModalHeader,
  mdbModalBody,
  mdbModalFooter
} from "mdbvue";
axios.defaults.withCredentials = true;
export default {
  components: {
    mdbInput,
    mdbBtn,
    mdbContainer,
    mdbRow,
    mdbCol,

    mdbTextarea,

    mdbIcon,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter
  },
  data() {
    return {
      /*  user: {}, */
      user: this.$store.state.user,
      showModal: false
    };
  },
  methods: {
    updateUser() {
      var route = "";
      console.log(this.user.role);
      this.user.role.perfilCode != 0
        ? (route = "http://localhost:3000/api/v1/users/" + this.user._id)
        : (route = "http://localhost:3000/api/v1/users/updateMe");

      axios
        .patch(route, this.user)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    /*   if (Boolean(this.user)) {
      if (this.user.role.perfilCode != 0)
        this.user = Object.assign({}, this.$store.state.user);
    }  */
  },
  created() {
    bus.$on("senduser", user => {
      this.user = user;
      alert(user);
    });
  }
};
</script>

<style lang="scss" scoped>
.profile-photo {
  margin-left: 35%;
}

.update-button {
  margin-left: 40%;
}
</style>