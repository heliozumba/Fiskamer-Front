
<template>
  <div class="registerDiv">
    <form>
      <div class="form-group">
        <input type="text" v-model="user.name" class="form-control" name="name" placeholder="Nome" />
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="user.lastName"
          class="form-control"
          name="lastName"
          id
          placeholder="Sobrenome"
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          v-model="user.email"
          class="form-control"
          name="email"
          id
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <input
          type="tel"
          v-model="user.phone"
          class="form-control"
          name="phone"
          id
          placeholder="Telemovel"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="user.password"
          class="form-control"
          name="pass"
          id
          placeholder="Palavra-Passe"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          name="confirmPass"
          id
          placeholder="Confirmar Palavra-Passe"
          v-model="user.confirmPass"
        />
      </div>
      <button type="submit" class="btn btn-block btn-dark">Registrar</button>
      <p>
        <small>
          <router-link to="/credentials/login">Ja possuo uma conta, Entrar.</router-link>
        </small>
      </p>
    </form>
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
    }
  }
};
</script>
<style scoped>
.registerDiv {
  margin-top: 30%;
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
</style>
