
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
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="validateAll">
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
              id
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
              v-model="user.phone"
              rules="required|digits:9"
              class="form-control"
              name="phone"
              id
            />
            <span class="form-error">{{ errors[0] }}</span>
          </ValidationProvider>
          <input type="checkbox" name id />
          <small>Funciona para Whatsapp</small>
        </div>
        <div class="form-group">
          <label for>
            <small>Password*</small>
          </label>
          <ValidationProvider
            v-slot="{ errors }"
            mode="eager"
            rules="required|min:8|password:@confirm"
          >
            <input type="password" v-model="user.password" class="form-control" name="pass" id />
            <span class="form-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for>
            <small>Confirmar Palavra-Passe*</small>
          </label>
          <ValidationProvider
            name="confirm"
            v-slot="{ errors }"
            mode="eager"
            rules="required|min:8"
          >
            <input
              type="password"
              class="form-control"
              name="confirmPass"
              id
              v-model="user.confirmPass"
            />
            <span class="form-error">{{ errors[0] }}</span>
          </ValidationProvider>
          <input type="checkbox" name id />
          <small>Aceito os termos de uso e privacidade</small>
        </div>

        <button type="submit" class="btn btn-block logButton" :disabled="invalid">Registre-se</button>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "Register",
  data() {
    return {
      user: {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        pass: "",
        confirmPass: ""
      }
    };
  },
  methods: {
    registerUser() {
      axios.post("", { user: this.user }).then(response => {});
    },
    validateAll() {
      alert("Form Submitted");
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
