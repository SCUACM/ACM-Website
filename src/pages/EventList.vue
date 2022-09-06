<template>
  <v-app>
    <Navbar />
    <v-container style="margin-top: 75px; max-width: 1000px">
        <div class="events-title">
          Upcoming Events
        </div>
      <EventCard v-for="event of this.upcoming" :event="event" :key="event.id" />
        <div class="events-title">
          Past Events
        </div>
      <EventCard v-for="event of this.past" :event="event" :key="event.id" />
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import "../assets/scss/board-media.scss";

import EventCard from "@/components/EventCard.vue";
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
    Footer,
  },

  // Create Observables (objects that will auto update as data gets updated/added) of all upcoming and past event objects.
  firestore: {
    upcoming: db.collection('events').where("startDate",">=",Timestamp.now()).orderBy('startDate', 'desc'),
    past: db.collection('events').where("startDate","<",Timestamp.now()).orderBy('startDate', 'desc'),
  },

  data() {
    return {
      upcoming: [],
      past: [],
    };
  },
};
</script>

<style scoped></style>
