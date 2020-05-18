
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
    <register-form></register-form>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.withCredentials = true;
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
          this.user.role.profileCode == 2
            ? this.$router.push("/main/feed")
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
