// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";

//import VueRouter from "vue-router";

Vue.component("login", require("./components/Login.vue").default);
Vue.component("register", require("./components/Register.vue").default);
Vue.component("credentials", require("./components/Credentials.vue").default);
Vue.component("home", require("./components/Home.vue").default);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
