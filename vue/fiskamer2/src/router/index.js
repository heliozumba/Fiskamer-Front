/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Credentials from "@/components/Credentials";
import Register from "@/components/Register";
import Home from "@/components/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/credentials",
      component: Credentials,
      children: [
        {
          path: "register",
          components: {
            helper: Register
          }
        },
        {
          path: "login",
          components: {
            helper: Login
          }
        }
      ]
    },
    {
      path: "/",
      component: Home
    }
  ]
});
