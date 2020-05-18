/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Credentials from "@/components/Credentials";
import Register from "@/components/Register";
import Home from "@/components/Home";
import Feed from "@/components/Feed";
import Navbar from "@/components/Navbar";
import MainPage from "@/components/MainPage";
import Profile from "@/components/Profile";
import Explorer from "@/components/Explorer";
import SearchBar from "@/components/SearchBar";
import ServiceProfile from "@/components/ServiceProfile";
import SelectedView from "@/components/SelectedView";
import UserProfile from "@/components/UserProfile";
import ServicePayment from "@/components/ServicePayment";
import Supply from "@/components/Supply";
import AddService from "@/components/AddService";
import ConsultService from "@/components/ConsultService";
import RequestService from "@/components/RequestService";
import StateService from "@/components/StateService";

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
      component: MainPage,
      children: [
        {
          path: "feed",
          components: {
            navigator: Feed
          }
        },
        {
          path: "profile/:id",
          name: "userProfile",
          components: {
            navigator: UserProfile
          }
        },
        {
          path: "explorer",
          components: {
            navigator: Explorer,
            serviewer: SelectedView
          }
        },
        {
          path: "service/:id",
          name: "serviceProfile",
          components: {
            navigator: ServiceProfile
          },
          props: true
          /* children: [
            {
              path: "payment",
              components: {
                navigator: ServicePayment
              }
            }
          ] */
        },
        {
          path: "service/:id/payment",
          components: {
            navigator: ServicePayment
          }
        },
        {
          path: "supply",
          components: {
            navigator: Supply,
            helper2: StateService
          },
          children: [
            {
              path: "add",
              components: {
                helper2: AddService
              }
            },
            {
              path: "consult",
              components: {
                helper2: ConsultService
              }
            },

            {
              path: "request",
              components: {
                helper2: RequestService
              }
            },

            {
              path: "state",
              components: {
                helper2: StateService
              }
            }
          ]
        }
      ]
    }
  ]
});
