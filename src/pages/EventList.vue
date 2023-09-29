<template>
  <v-app>
    <Navbar />
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
      <div class="events-title" v-if="upcoming.length">
        Upcoming Events
      </div>
      <div style="display: flex; flex-wrap: wrap; max-width: 1000px" :style="[view == pageViews.List ? {'justify-content': 'left'} : {'justify-content': 'center'}]">
        <EventCard v-for="event of this.upcoming" :event="event" :key="event.id" :view="view" :big="true"/>
      </div>
      <div class="events-title" v-if="past.length">
        Past Events
      </div>
      <div style="display: flex; flex-wrap: wrap; max-width: 1000px" :style="[view == pageViews.List ? {'justify-content': 'left'} : {'justify-content': 'center'}]">
        <EventCard v-for="event of this.past" :event="event" :key="event.id" :view="view" :big="false"/>
      </div>
    </v-container>
    <CalendarComponent v-show="view==pageViews.Calendar"/>
    <Footer />
  </v-app>
</template>

<script>
import "../assets/scss/board-media.scss";

import EventCard from "@/components/EventCard.vue";
import CalendarComponent from "@/components/CalendarComponent.vue";
import Navbar from "@/layout/Navbar.vue";
import Footer from "@/layout/Footer.vue";

// import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import {db, Timestamp} from '../firebase';

export default {
  name: "EventList",

  components: {
    Navbar,
    EventCard,
    CalendarComponent,
    Footer,
  },

  // Create Observables (objects that will auto update as data gets updated/added) of all upcoming and past event objects.
  firestore: {
    upcoming: db.collection('events').where("startDate",">=",Timestamp.now()).orderBy('startDate', 'asc').limit(5),
    past: db.collection('events').where("startDate","<",Timestamp.now()).orderBy('startDate', 'desc').limit(45),
  },

  data() {
    return {
      upcoming: [],
      past: [],
      pageViews: {
        List: 0,
        Grid: 1,
        Calendar: 2,
      },
      view: 0,
    };
  },
};
</script>

<style scoped></style>
