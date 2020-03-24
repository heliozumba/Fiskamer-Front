// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";

Vue.component("login", require("./components/Login.vue").default);
Vue.component("register", require("./components/Register.vue").default);
Vue.component("credentials", require("./components/Credentials.vue").default);
Vue.component("home", require("./components/Home.vue").default);

//localize("pt", pt);

Vue.config.productionTip = false;

//Vuelidate for input validations
import {
  ValidationObserver,
  ValidationProvider,
  localize,
  extend,
  configure,
  setInteractionMode
} from "vee-validate";
import {
  required,
  email,
  digits,
  min,
  max,
  alpha
} from "vee-validate/dist/rules";

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

extend("email", email);
extend("required", required);
extend("digits", digits);
extend("min", min);
extend("max", max);
extend("alpha", alpha);

configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
});

setInteractionMode("eager");

//Notification for notifications
import Notifications from "vue-notification";
Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
