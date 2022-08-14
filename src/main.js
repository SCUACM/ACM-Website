import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import { firestorePlugin } from 'vuefire';

// pages

import Index from "@/pages/Index.vue";
import Board from "@/pages/Board.vue";
import Calendar from "@/pages/Calendar.vue";
import Events from "@/pages/Events.vue";
import JoinUs from "@/pages/JoinUs.vue";

import moment from 'moment'
import VueYoutube from 'vue-youtube'

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
    path: "/calendar",
    component: Calendar,
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

Vue.use(firestorePlugin);

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MMM Do, YYYY h:mm a')
  }
});
 
Vue.use(VueYoutube)

const router = new VueRouter({
  base: "",
  routes,
  mode: "hash",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
