
<template>
  <div class="registerDiv">
    <div class="session-box text-center">
      <h4>Criar Conta</h4>
      <p>
        <small>
          Já tem uma conta?
          <router-link class="text-warning" to="/credentials/login">Entrar</router-link>
        </small>
      </p>
      <div class="d-inline">
        <button class="btn btn-primary btn-raised session-button">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          Facebook
        </button>
        &nbsp;
        <button class="btn btn-danger btn-raised session-button">
          <i class="fa fa-google" aria-hidden="true"></i>
          Google
        </button>
      </div>
    </div>

    <ValidationObserver v-slot="{  }">
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label for class="btn btn-warning active" @click="selectedRole(2)">
              <input type="radio" name="options" id="option1" />Cliente
            </label>
            <label for class="btn btn-warning" @click="selectedRole(1)">
              <input type="radio" name="options" id="option2" value="1" v-model="user.role" />Fornecedor
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for>
            <small>Nome*</small>
          </label>
          <ValidationProvider v-slot="{ errors }" mode="eager">
            <input
              type="text"
              rules="required|alpha|max:20|min:2"
              v-model="user.name"
              class="form-control"
              name="name"
              id="name"
            />
            <span class="form-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for>
            <small>Email*</small>
          </label>
          <ValidationProvider v-slot="{ errors }" mode="eager">
            <input
              type="email"
              rules="required|email"
              v-model="user.email"
              class="form-control"
              name="email"
              id="email"
            />
            <span class="form-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for>
            <small>Telemóvel*</small>
          </label>
          <ValidationProvider v-slot="{ errors }" mode="eager">
            <input
              type="tel"
              v-model="user.telemovel"
              rules="required|digits:9"
              class="form-control"
              name="telemovel"
              id="telemovel"
            />
            <span class="form-error">{{ errors[0] }}</span>
          </ValidationProvider>
          <input type="checkbox" name id="whatsappCheck" />
          <small>Funciona para Whatsapp</small>
        </div>
        <div class="form-group">
          <label for>
            <small>Password*</small>
          </label>
          <!--ValidationProvider
            /*v-slot="{ errors }"
            mode="eager"
            rules="required|min:8|password:@confirm"
          -->
          <input
            type="password"
            v-model="user.password"
            class="form-control"
            name="pass"
            id="password"
          />
          <span class="form-error"></span>
          <!--/ValidationProvider-->
        </div>
        <div class="form-group">
          <label for>
            <small>Confirmar Palavra-Passe*</small>
          </label>
          <!--ValidationProvider
            name="confirm"
            v-slot="{ errors }"
            mode="eager"
            rules="required|min:8"
          -->
          <input
            type="password"
            class="form-control"
            name="passwordConfirm"
            id="passwordConfirm"
            v-model="user.passwordConfirm"
          />
          <span class="form-error"></span>
          <!--/ValidationProvider-->
          <input type="checkbox" name id="privacyCheck" />
          <small>Aceito os termos de uso e privacidade</small>
        </div>

        <button type="submit" class="btn btn-block logButton">Registre-se</button>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      user: {
        name: "",
        email: "",
        telemovel: "",
        password: "",
        passwordConfirm: "",
        role: "",
        endereco: "Try"
      },
      picked: ""
    };
  },
  methods: {
    registerUser() {
      axios
        .post("http://localhost:3000/api/v1/users/signup", this.user)
        .then(response => {
          this.$notify({
            width: "25%",
            group: "auth",
            title: "Sucesso",
            text: this.user.name + " Foi Cadastrado com sucesso",
            type: "success"
          });
          this.$store.commit("changeUser", this.user);
          this.user.role == "2"
            ? this.$router.push("/main/explorer")
            : this.$router.push("/main/supplier/state");
        })
        .catch(error => {
          this.$notify({
            width: "50%",
            title: "Erro",
            text:
              "Não foi possível registrá-lo verifique os dados introduzidos",
            type: "danger",
            group: "auth"
          });
        });
    },
    validateAll() {
      alert("Form Submitted");
    },
    selectedRole(roleID) {
      console.log(roleID);
      this.user.role = roleID;
    }
  }
};
</script>
<style scoped>
.registerDiv {
  padding: 10%;
}
p {
  margin-top: 5%;
}

form input:focus {
  outline: none;
  box-shadow: 0px 0px 10px #ffcd03;
  transition: 300ms ease;
  /*background: rgba(0, 0, 0, 0.5);
  color: white;*/
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
