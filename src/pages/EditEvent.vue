<template>
  <v-app>
    <Navbar />
    <v-container style="margin-top: 75px; max-width: 1000px">
      <v-form>
        <div class="form-header">
          Event Name
        </div>
        <v-text-field
          label="Event Name"
          :rules="[rules.required]"
          v-model="eventDetails.title"
          :value="eventDetails.title"
          outlined
          solo
        >
        </v-text-field>
        <div class="form-header">
          Description
        </div>
        <v-text-field
          label="2-3 sentences about the event"
          v-model="eventDetails.description"
          :value="eventDetails.description"
          outlined
          solo
        >
        </v-text-field>
        <div class="form-header">
          Location
        </div>
        <v-text-field
          label="Ex: SCDI 1302"
          v-model="eventDetails.location"
          :value="eventDetails.location"
          outlined
          solo
        >
        </v-text-field>
        <div class="form-header">
          Start Time
        </div>
        <v-text-field
          label=""
          outlined
          type="date"
          v-model="eventDetails.startDate"
          :value="eventDetails.startDate"
        >
        </v-text-field>
        <v-text-field
          label=""
          outlined
          type="time"
          v-model="eventDetails.startTime"
          :value="eventDetails.startTime"
        >
        </v-text-field>
        <div class="form-header">
          End Time
        </div>
        <v-text-field
          label=""
          outlined
          type="date"
          v-model="eventDetails.endDate"
          :value="eventDetails.endDate"
        >
        </v-text-field>
        <v-text-field
          label=""
          outlined
          type="time"
          v-model="eventDetails.endTime"
          :value="eventDetails.endTime"
        >
        </v-text-field>
        <input
          type="button"
          @click="submit"
          :value="this.isNew ? 'Create Event' : 'Update Event'"
          class="mt-2 submit-btn"
          style="height: 60px; width: 250px; border-radius: 40px; border: solid #1c548d"
        />
        
      </v-form>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import "../assets/scss/board-media.scss";

import Navbar from "@/layout/Navbar.vue";
import Footer from "@/layout/Footer.vue";

import moment from 'moment'
// import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import {db, Timestamp} from '../firebase';

export default {
  name: "EditEvent",

  components: {
    Navbar,
    Footer,
  },

  computed: {
    isNew() {
      return this.$route.params.id == 'new'
    }
  },

  async mounted() {
    if(this.isNew) {
      const today = moment(new Date()).format('YYYY-MM-DD');
      this.eventDetails.startDate = today;
      this.eventDetails.endDate = today;
      this.eventDetails.startTime = '17:45';
      this.eventDetails.endTime = '18:45';
    } 
    else {
      const doc = await db.collection("events").doc(this.$route.params.id).get();
      const data = doc.data();
      this.eventDetails = data;
      // Format the start and end as dates. Ex: 2022-09-19
      const startDate = moment(data.startDate.toDate()).format('YYYY-MM-DD');
      const endDate = moment(data.endDate.toDate()).format('YYYY-MM-DD');

      // Format the start and end as times. Ex: 18:45
      const startTime = moment(data.startDate.toDate()).format('HH:mm');
      const endTime = moment(data.endDate.toDate()).format('HH:mm');

      this.eventDetails.startDate = startDate;
      this.eventDetails.endDate = endDate;
      this.eventDetails.startTime = startTime;
      this.eventDetails.endTime = endTime;
    }
  },

  methods: {
    async submit(e) {
      e.preventDefault();
      const details = {...this.eventDetails};
      if(details.title.length == 0) {
        alert("Please provide an event name");
        return;
      }
      const startDateTime = new Date(details.startDate+" "+details.startTime);
      const endDateTime = new Date(details.endDate+" "+details.endTime);
      if(startDateTime.getTime() > endDateTime.getTime()) {
        alert("End date should be after start date");
        return;
      }
      details.startDate = Timestamp.fromDate(startDateTime);
      details.endDate = Timestamp.fromDate(endDateTime);
      delete details.startTime;
      delete details.endTime;
      if(this.isNew){
        const newEvent = await db.collection("events").add(details);
        console.log("New Event created", newEvent.id);
      }
      else {
        await db.collection("events").doc(this.$route.params.id).update(details);
        console.log("Updated event");
      }
      this.$router.push("/events");
    }
  },

  data() {
    return {
      eventDetails: {
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        location: '',
      },
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
};
</script>

<style scoped></style>
