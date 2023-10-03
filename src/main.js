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

import moment from 'moment'
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
    path: "*",
    redirect: "/",
  },
];

Vue.use(VueRouter);

Vue.use(firestorePlugin);

// Function (created using Vue filters, https://v2.vuejs.org/v2/guide/filters.html) used to format an event's date and time
Vue.filter('formatDateTime', function(event) {
  if(!event?.startDate) return '';
  // If a start date is provided but an end date isn't, return the start date:
  // Format: Oct 1st 5:45 pm
  if(event.startDate && !event.endDate) {
    return moment(event.startDate.toDate()).format('MMM Do YYYY, h:mm a');
  }
  // Format the start and end as dates. Ex: Oct 1st
  const startDate = moment(event.startDate.toDate()).format('MMM Do, YYYY,');
  const endDate = moment(event.endDate.toDate()).format('MMM Do, YYYY,');

  // Format the start and end as times. Ex: 5:45 pm
  const startTime = moment(event.startDate.toDate()).format('h:mm a');
  const endTime = moment(event.endDate.toDate()).format('h:mm a');

  if(startDate === endDate) {
    if(startTime === endTime) {
      // If the start and end match exactly, return only the start date. Ex: Oct 1st, 2022, 5:45 pm
      return `${startDate} ${startTime}`
    }
    // If the dates match but the times don't, return the start date and both times. Ex: May 10th, 2022, 5:45 pm - 6:45 pm
    return `${startDate} ${startTime} - ${endTime}`;
  }
  // Otherwise, return the start date and time and end date and time. Ex: Feb 12th, 2022, 10:00 am - Feb 13th, 2022, 12:00 pm
  return `${startDate} ${startTime} - ${endDate} ${endTime}`;

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
