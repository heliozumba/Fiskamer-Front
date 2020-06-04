<template>
  <div class="loginDiv p-4 rounded">
    <div class="session-box text-center">
      <img class="img-fluid w-75 rounded mr-4 my-2" src="./../assets/imgs/logo2.png" alt />
      <p>
        <small class="text-light">
          Ainda não tem uma conta?
          <router-link class="text-warning" to="/credentials/register">Crie agora</router-link>
        </small>
      </p>
      <div class="row d-inline-block p-2">
        <button class="btn btn-primary btn-raised session-button">
          <i class="fab fa-facebook-f"></i>
        </button>
        <button class="btn btn-danger btn-raised session-button">
          <i class="fab fa-google"></i>
        </button>
      </div>
    </div>
    <!-- <ValidationObserver v-slot="{ invalid }"> -->
    <form @submit.prevent="loginUser" class="mt-3 mb-5 text-warning" id="login-form">
      <div class="form-group">
        <!-- <ValidationProvider v-slot="{ errors }" mode="eager"> -->
        <mdb-input
          label="Email"
          type="email"
          v-model="user.email"
          validate
          error="wrong"
          success="right"
          name="email"
          icon="envelope"
          size="sm"
          id="login-mail"
        />
        <!-- <span class="form-error">{{ errors[0] }}</span>
        </ValidationProvider>-->
      </div>
      <div class="form-group mt-2">
        <!--  <ValidationProvider v-slot="{ errors }" rules="required" mode="eager"> -->
        <mdb-input
          label="Palavra-passe"
          type="password"
          v-model="user.password"
          name="pass"
          icon="lock"
          size="sm"
        />
        <!-- ref="password"class="form-control rounded" -->
        <!-- <span class="form-error">{{ errors[0] }}</span> -->
        <!--  </ValidationProvider> -->
      </div>
      <button type="submit" class="btn btn-block mt-5 logButton">Entrar</button>
      <input type="checkbox" name="keepConnected" id="keepconnected" />
      <small class="text-light">Mantenha-me conectado</small>
      &nbsp;
      <small>
        <router-link class="text-warning" to="#">Esqueci a palavra-passe</router-link>
      </small>
    </form>
    <!-- </ValidationObserver> -->
  </div>
</template>
<script>
/* eslint-disable */
import { mapState, mapMutations, mapActions } from "vuex";
import axios from "axios";
import { toast } from "../mixins/toasts";
import { mdbInput } from "mdbvue";
axios.defaults.withCredentials = true;

export default {
  mixins: [toast],
  components: { mdbInput },
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

          this.changeUser(this.logged);

          switch (this.logged.role.perfilCode) {
            case 0:
              this.$router.push("/main/admin");
              break;
            case 1:
              this.$router.push("/main/supply/state");
              break;
            case 2:
              this.$router.push("/main/feed");
              break;
            default:
              this.$router.push("/");
          }
          this.notify(
            "info",
            "Sê bem vindo ao Fiskamer " + this.logged.name + "!",
            "Saudação"
          );
        })
        .catch(error => {
          this.notify(
            "danger",
            "Por favor verifique as suas credênciais e tente novamente",
            "Erro"
          );
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
<style scoped lang="scss">
@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .loginDiv {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    /* background-color: rgba(255, 255, 255, 0); */
  }
}
/* .loginDiv {
  backdrop-filter: blur(0.8);
} */
p {
  margin-top: 5%;
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

.credentials-background {
  z-index: 1;
  background: url("../assets/imgs/credentials_overlay.jpg");
  position: absolute;
  width: inherit;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

input::placeholder {
  color: red !important;
}

label {
  color: red !important;
}
//
</style>