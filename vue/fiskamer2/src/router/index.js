/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Credentials from "@/components/Credentials";
import Register from "@/components/Register";
import Home from "@/components/Home";
import Feed from "@/components/Feed";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Profile from "@/components/Profile";
import Explorer from "@/components/Explorer";
import SearchBar from "@/components/SearchBar";
import ServiceProfile from "@/components/ServiceProfile";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
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
      path: "/main",
      component: Main,
      children: [
        {
          path: "feed",
          components: {
            navigator: Feed
          }
        },
        {
          path: "profile",
          components: {
            navigator: Profile
          }
        },
        {
          path: "explorer",
          components: {
            navigator: Explorer
          }
        },
        {
          path: "service/profile/:id",
          name: "serviceProfile",
          components: {
            navigator: ServiceProfile
          }
        }
      ]
    }
  ]
});
