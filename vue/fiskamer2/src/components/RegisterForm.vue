<template>
  <!--  <ValidationObserver v-slot="{  }"> -->
  <form @submit.prevent="registerUser" class="text-warning">
    <div class="form-group text-center">
      <div class="btn-group btn-group-toggle btn-group-md my-2" data-toggle="buttons">
        <label for class="btn btn-warning active" @click="selectedRole(2)">
          <input type="radio" name="options" id="option1" />Cliente
        </label>
        <label for class="btn btn-warning" @click="selectedRole(1)">
          <input type="radio" name="options" id="option2" value="1" v-model="user.role" />Fornecedor
        </label>
      </div>
    </div>
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
      label="Palavra-passe"
      type="password"
      v-model="user.password"
      name="pass"
      icon="lock"
      size="sm"
    />
    <mdb-input
      label="Confirmar Palavra-Passe"
      type="password"
      v-model="user.passwordConfirm"
      name="pass"
      icon="lock"
      size="sm"
    />
    <div class="d-none">
      <div class="form-group">
        <!-- <label for>
          <small>Nome*</small>
        </label>
        <ValidationProvider v-slot="{ errors }" mode="eager">-->
        <input type="text" v-model="user.name" class="form-control" name="name" id="name" />
        <!-- rules="required|alpha|max:20|min:2" -->
        <!--  <span class="form-error">{{ errors[0] }}</span>
        </ValidationProvider>-->
      </div>
      <div class="form-group">
        <!-- label for>
          <small>Email*</small>
        </label>-->
        <!--  <ValidationProvider v-slot="{ errors }" mode="eager"> -->
        <input type="email" v-model="user.email" class="form-control" name="email" id="email" />
        <!-- rules="required|email" -->
        <!--   <span class="form-error">{{ errors[0] }}</span>
        </ValidationProvider>-->
      </div>
      <div class="form-group">
        <!--  <label for>
          <small>Telemóvel*</small>
        </label>
        <ValidationProvider v-slot="{ errors }" mode="eager">-->
        <input
          type="tel"
          v-model="user.telemovel"
          class="form-control"
          name="telemovel"
          id="telemovel"
        />
        <!-- rules="required|digits:9" -->
        <!-- <span class="form-error">{{ errors[0] }}</span> -->
        <!--  </ValidationProvider> -->
        <!--     <input type="checkbox" name id="whatsappCheck" /> -->
        <!-- <small>Funciona para Whatsapp</small> -->
      </div>
      <div class="form-group">
        <!-- <label for>
          <small>Password*</small>
        </label>-->
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
        <!-- <label for>
          <small>Confirmar Palavra-Passe*</small>
        </label>-->
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
        <!-- <span class="form-error"></span> -->
        <!--/ValidationProvider-->
      </div>
    </div>
    <input type="checkbox" name id="privacyCheck" />
    <small class="text-light">Aceito os termos de uso e privacidade</small>
    <button type="submit" class="btn btn-block logButton">Registre-se</button>
  </form>
  <!-- </ValidationObserver> -->
</template>

<script>
import axios from "axios";
import { mdbInput } from "mdbvue";
axios.defaults.withCredentials = true;
export default {
  components: {
    mdbInput
  },
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
          if (!Boolean(this.$store.state.user)) {
            this.$store.commit("changeUser", this.user);
            this.user.role.profileCode == 2
              ? this.$router.push("/main/feed")
              : this.$router.push("/main/supplier/state");
          }
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
  /* margin-top: 10%; */
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
}
.form-error {
  color: #eb0600dd;
  font-size: 1vw;
  font-weight: bold;
}
</style>