<template>
  <v-app>
    <Navbar />
    <v-container style="margin-top: 100px; max-width: 1000px;">
      <ul style="list-style: none; display: flex; justify-content: right; gap: 0.5rem; font-size: 1.25rem">
        <li @click="view=0" style="cursor: pointer" :style="[view == 0 ? {'color': '#0099ff'} : {'color': 'black'}]">
          List
        </li>
        /
        <li @click="view=1" style="cursor: pointer" :style="[view == 1 ? {'color': '#0099ff'} : {'color': 'black'}]">
          Grid
        </li>
        /
        <li @click="view=2" style="cursor: pointer" :style="[view == 2 ? {'color': '#0099ff'} : {'color': 'black'}]">
          Calendar
        </li>
      </ul>
    </v-container>
    <v-container v-if="view==0 || view==1" style="max-width: 1000px">
      <div class="events-title" v-if="upcoming.length">
        Upcoming Events
      </div>
      <EventCard v-show="view==0" v-for="event of this.upcoming" :event="event" :key="event.id" />
      <div v-if="view==1" style="display: flex; flex-wrap: wrap; justify-content: center; max-width: 1000px">
        <EventCardGrid v-for="event of this.upcoming" :event="event" :key="event.id" :big="true"/>
      </div>
      <div class="events-title" v-if="past.length">
        Past Events
      </div>
      <EventCard v-show="view==0" v-for="event of this.past" :event="event" :key="event.id" />
      <div v-if="view==1" style="display: flex; flex-wrap: wrap; justify-content: center; max-width: 1000px">
        <EventCardGrid v-for="event of this.past" :event="event" :key="event.id" :big="false"/>
      </div>
    </v-container>

    <CalendarComponent v-show="view==2"/>

    <Footer />
  </v-app>
</template>

<script>
import "../assets/scss/board-media.scss";

import EventCard from "@/components/EventCard.vue";
import EventCardGrid from "@/components/EventCardGrid.vue";
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
    EventCardGrid,
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
      view: 0,
    };
  },
};
</script>

<style scoped></style>
