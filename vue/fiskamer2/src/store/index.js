// store/index.js

import Vue from "vue";
import Vuex from "vuex";
import createdPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    service: {},
    cart: []
  },
  plugins: [createdPersistedState()],
  getters: {},
  mutations: {
    changeUser(state, payload) {
      state.user = payload;
    },
    setService(state, payload) {
      state.service = payload;
    },
    addCart(state, payload) {
      state.cart.push(payload);
    }
  },
  actions: {
    changeUser(context, payload) {
      context.commit("changeUser", payload);
    },

    setService(context, payload) {
      context.commit("setService", payload);
    },
    addCart(context, payload) {
      context.commit("addCart", payload);
    }
  }
});
