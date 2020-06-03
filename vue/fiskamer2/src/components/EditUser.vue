<template>
  <b-modal id="editUser" title="Edição de Utilizador" class="text-center" hide-footer>
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
  </b-modal>
</template>
<script>
import { bus } from "../main";
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  data() {
    return {
      user: {}
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
    /* if (Boolean(this.user)) {
      if (this.user.role.perfilCode != 0)
        this.user = Object.assign({}, this.$store.state.user);
    } */
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