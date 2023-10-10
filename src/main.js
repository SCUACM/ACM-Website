import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import { firestorePlugin } from 'vuefire';

// pages

import IndexHome from "@/pages/IndexHome.vue";
import BoardPage from "@/pages/BoardPage.vue";
import CalendarPage from "@/pages/CalendarPage.vue";
import Events from "@/pages/EventList.vue";
import JoinUs from "@/pages/JoinUs.vue";
import EditEvent from "@/pages/EditEvent.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import AdminPage from "@/pages/AdminPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import RedirectRouter from "@/pages/RedirectRouter.vue";

import VueYoutube from 'vue-youtube'

import {auth} from './firebase';

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    component: IndexHome,
  },
  {
    path: "/board",
    component: BoardPage,
  },
  {
    path: "/calendar",
    component: CalendarPage,
  },
  {
    path: "/events",
    component: Events,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/profile",
    component: ProfilePage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/register/:id",
    component: RegisterPage,
  },
  {
    path: "/admin",
    component: AdminPage,
    meta: {
      authRequired: true,
      adminRequired: true
    },
  },
  {
    path: "/admin/events/:id",
    component: EditEvent,
    meta: {
      authRequired: true,
      adminRequired: true
    },
  },
  {
    path: "/joinus",
    component: JoinUs,
  },
  {
    path: "/redirect",
    component: RedirectRouter,
  },
  {
    path: "/inrix",
    beforeEnter() {
        window.location.replace("https://inrix.scuacm.com")
    }
  },
  {
    path: "*",
    redirect: "/",
  },
];

Vue.use(VueRouter);

Vue.use(firestorePlugin);
 
Vue.use(VueYoutube)

const router = new VueRouter({
  base: "",
  routes,
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach( async (to, from, next) => {
  //Check if the page we are going to requires a user to be signed in or admin permissions
  const needsAuth = to.matched.some(record => record.meta.authRequired);
  const needsAdmin = to.matched.some(record => record.meta.adminRequired);
  if (needsAuth) {
    const user = auth.currentUser;
    if (user) {
      if(needsAdmin){
        const idToken = await user.getIdTokenResult();
        if(!idToken.claims.admin) {
          //Push the user to a redirect page to check if they have auth or not
          const path = "/redirect?uri="+encodeURIComponent(to.path)+"&admin=true";
          next({
            path: path,
          });
        }
      }
      next();
    } else {
      //Push the user to a redirect page to check if they have auth or not
      const path = "/redirect?uri="+encodeURIComponent(to.path)+"&admin="+(needsAdmin ? "true" : "false");
      next({
        path: path,
      });
    }
  } else {
    next();
  }
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
