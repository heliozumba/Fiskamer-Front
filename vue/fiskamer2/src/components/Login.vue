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
    <form>
      <div class="form-group">
        <label for>
          <small>Email ou Telemovel</small>
        </label>
        <input type="email" v-model="user.email" class="form-control rounded" name="email" />
      </div>
      <div class="form-group">
        <label for>
          <small>Palavra-Passe</small>
        </label>
        <input type="password" v-model="user.password" class="form-control rounded" name="pass" />
      </div>
      <button type="submit" class="btn btn-block logButton">Entrar</button>
      <input type="checkbox" name="keepConnected" id="keepconnected" />
      <small>Mantenha-me conectado</small>
      &nbsp;
      <small>
        <router-link class="text-warning" to="#">Esqueci a palavra-passe</router-link>
      </small>
    </form>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    loginUser() {
      axios.post("", { user: this.user }).then(response => {});
    }
  }
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
</style>