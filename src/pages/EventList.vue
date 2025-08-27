<template>
  <v-app>
    <MainNavbar />
    <v-container style="margin-top: 100px; max-width: 1000px;">
      <ul style="list-style: none; display: flex; justify-content: right; gap: 0.5rem; font-size: 1.25rem">
        <li @click="view=pageViews.List" style="cursor: pointer" :style="[view == pageViews.List ? {'color': '#0099ff'} : {'color': 'black'}]">
          List
        </li>
        /
        <li @click="view=pageViews.Grid" style="cursor: pointer" :style="[view == pageViews.Grid ? {'color': '#0099ff'} : {'color': 'black'}]">
          Grid
        </li>
        /
        <li @click="view=pageViews.Calendar" style="cursor: pointer" :style="[view == pageViews.Calendar ? {'color': '#0099ff'} : {'color': 'black'}]">
          Calendar
        </li>
      </ul>
    </v-container>
    <v-container v-if="view==pageViews.List || view==pageViews.Grid" style="max-width: 1000px">
      <div class="events-title" v-if="this.upcoming.length">
        Upcoming Events
      </div>
      <div style="display: flex; flex-wrap: wrap; max-width: 1000px" :style="[view == pageViews.List ? {'justify-content': 'left'} : {'justify-content': 'center'}]">
        <EventCard v-for="event of upcoming" :event="event" :key="event.id" :view="view" :big="true"/>
      </div>
      <div class="events-title" v-if="past.length">
        Past Events
      </div>
      <div style="display: flex; flex-wrap: wrap; max-width: 1000px" :style="[view == pageViews.List ? {'justify-content': 'left'} : {'justify-content': 'center'}]">
        <EventCard v-for="event of past" :event="event" :key="event.id" :view="view" :big="false"/>
      </div>
    </v-container>
    <CalendarComponent v-show="view==pageViews.Calendar"/>
    <MainFooter />
  </v-app>
</template>

<script>
import "@/assets/scss/board-media.scss";

import EventCard from "@/components/EventCard.vue";
import CalendarComponent from "@/components/CalendarComponent.vue";
import MainNavbar from "@/layout/MainNavbar.vue";
import MainFooter from "@/layout/MainFooter.vue";

// import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import {db, Timestamp} from '../firebase';

export default {
  name: "EventList",

  components: {
    MainNavbar,
    EventCard,
    CalendarComponent,
    MainFooter,
  },

  // Create Observables (objects that will auto update as data gets updated/added) of all upcoming and past event objects.
  // firestore: {
  //   upcoming: db.collection('events').where("startDate",">=",Timestamp.now()).orderBy('startDate', 'asc').limit(10),
  //   past: ,
  // },

  data() {
    return {
      pageViews: {
        List: 0,
        Grid: 1,
        Calendar: 2,
      },
      view: 0,
      past: [],
      upcoming: []
    };
  },
  mounted() {
    let getEvents = async () => {
      const upcomingEvents = await db.collection('events').where("startDate",">=",Timestamp.now()).orderBy('startDate', 'asc').limit(10).get();
      const pastEvents = await db.collection('events').where("startDate","<",Timestamp.now()).orderBy('startDate', 'desc').limit(45).get();
      for (let e of upcomingEvents.docs) {
        this.upcoming.push(e.data());
      }
      for (let e of pastEvents.docs) {
        this.past.push(e.data());
      }
      // console.log(this.upcoming);
      // console.log(this.past);
    }
    getEvents();
  }
};
</script>

<style scoped></style>
