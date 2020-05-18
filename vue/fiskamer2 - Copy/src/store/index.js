// store/index.js

import Vue from "vue";
import Vuex from "vuex";
import createdPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    service: {}
  },
  plugins: [
    createdPersistedState(/*{
      getState: key => Cookies.getJSON(key),
      setState: (key, state) =>
        Cookies.set(key, state, { expires: 3, secure: true })
    }*/)
  ],
  getters: {},
  mutations: {
    changeUser(state, payload) {
      state.user = payload;
    },
    setService(state, payload) {
      state.service = payload;
    }
  },
  actions: {
    changeUser(context, payload) {
      context.commit("changeUser", payload);
    },

    setService(context, payload) {
      context.commit("setService", payload);
    }
  }
});
