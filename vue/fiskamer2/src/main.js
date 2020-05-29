// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
//import axios from "axios";

export const bus = new Vue();

Vue.component("login", require("./components/Login.vue").default);
Vue.component("register", require("./components/Register.vue").default);
Vue.component("credentials", require("./components/Credentials.vue").default);
Vue.component("home", require("./components/Home.vue").default);
Vue.component("feed", require("./components/Feed.vue").default);
Vue.component("navbar", require("./components/Navbar.vue").default);
Vue.component("main-page", require("./components/MainPage.vue").default);
Vue.component("profile", require("./components/Profile.vue").default);
Vue.component("explorer", require("./components/Explorer.vue").default);
Vue.component("search-bar", require("./components/SearchBar.vue").default);
Vue.component("service-card", require("./components/ServiceCard.vue").default);
Vue.component("service-list", require("./components/ServiceList.vue").default);
Vue.component(
  "service-profile",
  require("./components/ServiceProfile.vue").default
);
Vue.component("category-box", require("./components/CategoryBox.vue").default);
Vue.component(
  "selected-view",
  require("./components/SelectedView.vue").default
);
Vue.component("filter-inputs", require("./components/Filter.vue").default);
Vue.component("user-profile", require("./components/UserProfile.vue").default);
Vue.component(
  "service-payment",
  require("./components/ServicePayment.vue").default
);
Vue.component("supply", require("./components/Supply.vue").default);
Vue.component("add-service", require("./components/AddService.vue").default);
Vue.component(
  "consult-service",
  require("./components/ConsultService.vue").default
);
Vue.component(
  "request-service",
  require("./components/RequestService.vue").default
);
Vue.component(
  "state-service",
  require("./components/StateService.vue").default
);
Vue.component("edit-user", require("./components/EditUser.vue").default);

Vue.component("contact", require("./components/Contact.vue").default);
Vue.component("sidebar", require("./components/Sidebar.vue").default);
Vue.component("admin", require("./components/Admin.vue").default);
Vue.component("tabletests", require("./components/TableTests.vue").default);
Vue.component(
  "register-form",
  require("./components/RegisterForm.vue").default
);
Vue.component(
  "register-modal",
  require("./components/RegisterModal.vue").default
);
Vue.component("plan", require("./components/Plan.vue").default);
Vue.component("suggestions", require("./components/Suggestions.vue").default);
Vue.component("my-plan", require("./components/MyPlan.vue").default);
Vue.component(
  "confirm-modal",
  require("./components/ConfirmModal.vue").default
);

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

//VueBootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

//MDBootstrap
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
//VueX

import store from "./store";

//Mixin

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
