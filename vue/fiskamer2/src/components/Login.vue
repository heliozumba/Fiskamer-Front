<template>
  <div class="loginDiv">
    <div class="session-box text-center">
      <h4>Iniciar Sessão</h4>
      <p>
        <small>
          Ainda não tem uma conta?
          <router-link class="text-warning" to="/credentials/register">Crie agora</router-link>
        </small>
      </p>
      <div class="d-inline">
        <button class="btn btn-primary btn-raised session-button">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          Facebook
        </button>
        <button class="btn btn-danger btn-raised session-button">
          <i class="fa fa-google" aria-hidden="true"></i>
          Google
        </button>
      </div>
    </div>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="loginUser">
        <div class="form-group">
          <label for>
            <small>Email ou Telemovel</small>
          </label>
          <ValidationProvider v-slot="{ errors }" mode="eager">
            <input
              type="email"
              v-model="user.email"
              rules="email|required"
              class="form-control rounded"
              name="email"
            />
            <span class="form-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for>
            <small>Palavra-Passe</small>
          </label>
          <ValidationProvider v-slot="{ errors }" rules="required|min:8" mode="eager">
            <input
              type="password"
              v-model="user.password"
              class="form-control rounded"
              name="pass"
              ref="password"
            />
            <span class="form-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <button type="submit" class="btn btn-block logButton" :disabled="invalid">Entrar</button>
        <input type="checkbox" name="keepConnected" id="keepconnected" />
        <small>Mantenha-me conectado</small>
        &nbsp;
        <small>
          <router-link class="text-warning" to="#">Esqueci a palavra-passe</router-link>
        </small>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState, mapMutations, mapActions } from "vuex";
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      logged: []
    };
  },
  methods: {
    loginUser() {
      axios
        .post("http://localhost:3000/api/v1/users/login", this.user)
        .then(response => {
          this.logged = response.data.data.user;
          console.log(this.logged);
          this.$notify({
            width: "50%",
            title: "Sucesso",
            text: " Sê bem vindo" + this.logged.name + "!",
            type: "info",
            group: "auth"
          });
          this.changeUser(this.logged);
          this.logged.role.perfilCode == 2
            ? this.$router.push("/main/feed")
            : this.$router.push("/main/supply/state");
        })
        .catch(error => {
          this.$notify({
            width: "50%",
            title: "Erro",
            text: "Email ou palavra-passe errados",
            type: "danger",
            group: "auth"
          });
        });
    },
    validateAll() {},
    changeUser(payload) {
      this.$store.dispatch("changeUser", payload);
    }
  },
  computed: mapState(["userstore"])
};
</script>
<style scoped>
.loginDiv {
  padding: 10%;
}
p {
  margin-top: 5%;
}

form {
  margin-top: 10%;
}

.session-button {
  border-radius: 20px;
}

.form-group input {
  border-top: none;
  border-left: none;
  border-right: none;
  outline-color: none;
}

.form-group input:focus {
  outline: none;
  box-shadow: 0px 0px 10px #ffcd03;
  transition: 300ms ease;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-color: #ffcd03;
  outline-color: none;
}

.logButton {
  background-color: #ffcd03;
  color: white;
  border-radius: 20px;
  font-weight: bold;
  margin-bottom: 5%;
}

.form-error {
  color: #eb0600dd;
  font-size: 1vw;
  font-weight: bold;
}
</style>