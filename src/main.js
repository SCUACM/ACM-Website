import App from "./App.vue";
import {createRouter, createWebHistory} from "vue-router";
import {createApp} from 'vue';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

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
import AdminStats from "@/pages/AdminStats.vue";
import TestCloudWatch from "@/pages/TestCloudWatch.vue";

import {auth} from './firebase';
import { getUserPerms } from "./helpers";
import cloudWatchLogger from './utils/cloudwatch-logger';
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
    path: "/admin/stats",
    component: AdminStats,
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
    }
  },
  {
    path: "/joinus",
    component: JoinUs,
  },
  {
    path: "/test-cloudwatch",
    component: TestCloudWatch,
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
    path: '/:pathMatch(.*)*',
    redirect: "/",
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  }
});

router.beforeEach( async (to, from) => {
  //Check if the page we are going to requires a user to be signed in or admin permissions
  const needsAuth = to.matched.some(record => record.meta.authRequired);
  const needsPerms = to.matched.find(record => record.meta.permsRequired)?.meta?.permsRequired;
  if (!needsAuth) {
    return true;
  }
  const user = await auth.currentUser;
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
  return path;
});

const vuetify = createVuetify({
  components,
  directives
});

const app = createApp(App);

// Global error handler for Vue
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err);
  console.error('Component:', vm);
  console.error('Info:', info);
  
  // Log to CloudWatch
  cloudWatchLogger.componentError(
    err, 
    vm?.$options?.name || 'Unknown', 
    info || 'unknown'
  ).catch(logError => {
    console.error('Failed to log Vue error to CloudWatch:', logError);
  });
};

// Global unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
  
  // Log to CloudWatch
  cloudWatchLogger.error(
    `Unhandled Promise Rejection: ${event.reason}`,
    {
      type: 'promise_rejection',
      url: window.location.href,
      userAgent: navigator.userAgent
    }
  ).catch(logError => {
    console.error('Failed to log promise rejection to CloudWatch:', logError);
  });
});

// Global JavaScript error handler
window.addEventListener('error', (event) => {
  console.error('Global JavaScript Error:', event.error);
  
  // Log to CloudWatch
  cloudWatchLogger.error(
    `Global JavaScript Error: ${event.error?.message || event.message}`,
    {
      type: 'javascript_error',
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      url: window.location.href
    }
  ).catch(logError => {
    console.error('Failed to log JS error to CloudWatch:', logError);
  });
});

app.use(router);
app.use(vuetify);
app.mount("#app")