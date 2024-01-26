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
import Profile from "@/pages/Profile.vue";
import Admin from "@/pages/Admin.vue";
import Register from "@/pages/Register.vue";
import Redirect from "@/pages/Redirect.vue";
import AdminRoles from '@/pages/AdminRoles.vue'

import VueYoutube from 'vue-youtube'

import {auth} from './firebase';
import { getUserPerms } from "./helpers";

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
      permsRequired: [["viewEvents"]]
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
    permsRequired: [["canRegister"]]
  },
  {
    path: "/admin",
    component: AdminPage,
    meta: {
      authRequired: true,
      permsRequired: [[
        "changeRolePerms",
        "changeUserRole",
        "viewAllProfiles",
        "acmAddEvent",
        "acmEditEvent",
        "acmDeleteEvent",
        "acmwAddEvent",
        "acmwEditEvent",
        "acmwDeleteEvent",
        "broncosecAddEvent",
        "broncosecEditEvent",
        "broncosecDeleteEvent",
        "aicAddEvent",
        "aicEditEvent",
        "aicDeleteEvent",
        "otherAddEvent",
        "otherEditEvent",
        "otherDeleteEvent",
        "viewAllResume",
        "addProject",
        "editProject",
        "deleteProject"
      ]]
    },
  },
  {
    path: "/admin/roles",
    component: AdminRoles,
    meta: {
      authRequired: true,
      // permsRequired: [["changeRolePerms", "changeUserRole"]]
    },
  },
  {
    path: "/admin/events/:id",
    component: EditEvent,
    meta: {
      authRequired: true,
      permsRequired: [[
        "acmAddEvent",
        "acmEditEvent",
        "acmDeleteEvent",
        "acmwAddEvent",
        "acmwEditEvent",
        "acmwDeleteEvent",
        "broncosecAddEvent",
        "broncosecEditEvent",
        "broncosecDeleteEvent",
        "aicAddEvent",
        "aicEditEvent",
        "aicDeleteEvent",
        "otherAddEvent",
        "otherEditEvent",
        "otherDeleteEvent",
      ]]
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
  const needsPerms = to.matched.find(record => record.meta.permsRequired)?.meta?.permsRequired;
  if (!needsAuth) {
    next();
    return;
  }

  const user = auth.currentUser;
  if (user) {
    let valid = true;

    if(needsPerms && needsPerms.length > 0) {
      const perms = await getUserPerms(user);
      for(let permGroup of needsPerms) {
        let groupValid = false;
        for(let perm of permGroup) {
          if(perms[perm]) {
            groupValid = true;
          }
        }
        if(!groupValid) {
          console.log("FAILED for", permGroup, perms)
          valid = false;
        }
      }
    }
    if(valid) {
      next();
      return;
    }
  }

  let path = "/redirect?uri="+encodeURIComponent(to.path);
  if(needsPerms && needsPerms.length > 0) {
    path += "&perms="+encodeURIComponent(needsPerms.map(row => row.join(",")).join(":"))
  }

  next({
    path: path,
  });
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
