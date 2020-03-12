<template>
  <div class="loginDiv">
    <form>
      <div class="form-group">
        <input
          type="email"
          v-model="user.email"
          class="form-control rounded"
          name="email"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="user.password"
          class="form-control rounded"
          name="pass"
          placeholder="Palavra-Passe"
        />
      </div>
      <button type="submit" class="btn btn-block btn-dark">Entrar</button>
      <p>
        <small>
          <router-link to="/credentials/register">Não possuo uma conta, Cadastrar.</router-link>
        </small>
      </p>
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
  margin-top: 50%;
  padding: 10%;
}
p {
  margin-top: 5%;
}
</style>
