// store/index.js

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "",
      email: "",
      telemovel: "",
      password: "",
      passwordConfirm: "",
      role: "",
      endereco: ""
    },
    service: {}
  },
  getters: {},
  mutations: {
    changeUser(state, payload) {
      state.user = payload;
    },
    setService(state, payload) {
      state.service = payload;
    }
  },
  actions: {}
});
