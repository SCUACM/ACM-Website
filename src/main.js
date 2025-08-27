import App from "./App.vue";
import {createRouter, createWebHistory} from "vue-router";
import {createApp} from 'vue';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import Youtube from 'vue-youtube-vue-3';

// pages

import IndexHome from "@/pages/IndexHome.vue";
import BoardPage from "@/pages/BoardPage.vue";
import CalendarPage from "@/pages/CalendarPage.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import Events from "@/pages/EventList.vue";
import JoinUs from "@/pages/JoinUs.vue";
import EditEvent from "@/pages/EditEvent.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import AdminPage from "@/pages/AdminPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import RedirectRouter from "@/pages/RedirectRouter.vue";
import AdminRoles from '@/pages/AdminRoles.vue';

import {auth} from './firebase';
import { getUserPerms } from "./helpers";
import '@mdi/font/css/materialdesignicons.css';
import '@/assets/override.css';

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
    path: "/privacy",
    component: PrivacyPolicy,
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
        "editMyEvent",
        "deleteMyEvent",
        "acmAddEvent",
        "acmEditEvent",
        "acmDeleteEvent",
        "icpcAddEvent",
        "icpcEditEvent",
        "icpcDeleteEvent",
        "acmwAddEvent",
        "acmwEditEvent",
        "acmwDeleteEvent",
        "broncosecAddEvent",
        "broncosecEditEvent",
        "broncosecDeleteEvent",
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
      permsRequired: [["changeRolePerms", "changeUserRole"]]
    },
  },
  {
    path: "/admin/events/:id",
    component: EditEvent,
    meta: {
      authRequired: true,
      permsRequired: [[
        "editMyEvent",
        "acmAddEvent",
        "acmEditEvent",
        "acmwAddEvent",
        "acmwEditEvent",
        "icpcAddEvent",
        "icpcEditEvent",
        "broncosecAddEvent",
        "broncosecEditEvent",
        "aicAddEvent",
        "aicEditEvent",
        "otherAddEvent",
        "otherEditEvent",
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  }
});

async function getUser() {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      }
      else {
        reject(null);
      }
    })
  });
}

router.beforeEach( async (to, from) => {
  //Check if the page we are going to requires a user to be signed in or admin permissions
  const needsAuth = to.matched.some(record => record.meta.authRequired);
  const needsPerms = to.matched.find(record => record.meta.permsRequired)?.meta?.permsRequired;
  if (!needsAuth) {
    return true;
  }
  const user = await getUser();
  let valid = false;
  if (user) {
    valid = true;
    if (needsPerms && needsPerms.length > 0) {
      const perms = await getUserPerms(user);
      for (let permGroup of needsPerms) {
        let groupValid = false;
        for (let perm of permGroup) {
          if (perms[perm]) {
            groupValid = true;
          }
        }
        if (!groupValid) {
          // console.log("FAILED for", permGroup, perms)
          valid = false;
        }
      }
    }
  }
  if(valid) {
    return true;
  }

  let path = "/redirect?uri="+encodeURIComponent(to.path);
  if(needsPerms && needsPerms.length > 0) {
    path += "&perms="+encodeURIComponent(needsPerms.map(row => row.join(",")).join(":"))
  }
  return {
    name: path,
    replace: true
  };
});

const vuetify = createVuetify({
  components,
  directives
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(Youtube);
app.mount("#app")