import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

// pages

import Index from "@/pages/Index.vue";
import Board from "@/pages/Board.vue";
import Events from "@/pages/Events.vue";
import JoinUs from "@/pages/JoinUs.vue";

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/board",
    component: Board,
  },
  {
    path: "/events",
    component: Events,
  },
  {
    path: "/joinus",
    component: JoinUs,
  },
  {
    path: "*",
    redirect: "/",
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  base: "",
  routes,
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
