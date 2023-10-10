<template>
  <v-app>
    <MainNavbar />
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
        <v-textarea
          label="2-3 sentences about the event"
          v-model="eventDetails.description"
          :value="eventDetails.description"
          outlined
          solo
        >
        </v-textarea>
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
          type="datetime-local"
          v-model="eventDetails.startDate"
          :value="eventDetails.startDate"
        >
        </v-text-field>
        <div class="form-header">
          End Time
        </div>
        <v-text-field
          label=""
          outlined
          type="datetime-local"
          v-model="eventDetails.endDate"
          :value="eventDetails.endDate"
        >
        </v-text-field>
        <div class="form-header">
          Event Flyer
        </div>
        <input type="file" style="display: none" name="fileUpload" id='fileUpload' accept="image/*" @change='handleFile'/>
        <label
          type="button"
          for="fileUpload"
        >{{(eventDetails.flyer && !removeFlyer) ? "Replace" : "Upload"}} Flyer</label>
        <span v-if="flyerFile"> Selected {{flyerFile.name}}</span>
        <template v-if="eventDetails.flyer && !removeFlyer"> 
          <br>
          <button @click="viewFlyer">View Current Flyer</button>
          <button class="remove" @click="markFlyerRemoval">Remove Flyer</button>
        </template>
        <br><br>
        <input
          type="button"
          @click="submit"
          :value="this.isNew ? 'Create Event' : 'Update Event'"
          class="mt-2 submit-btn"
        />
      </v-form>
    </v-container>
    <MainFooter />
  </v-app>
</template>

<script>
import "../assets/scss/board-media.scss";

import MainNavbar from "@/layout/MainNavbar.vue";
import MainFooter from "@/layout/MainFooter.vue";

import moment from 'moment'
import 'firebase/compat/firestore'
import {db, Timestamp, storage} from '../firebase';

export default {
  name: "EditEvent",

  components: {
    MainNavbar,
    MainFooter,
  },

  computed: {
    isNew() {
      return this.$route.params.id == 'new'
    }
  },

  async mounted() {
    if(this.isNew) {
      //Set the date pickers to use today, 5:45-6:45PM by default
      const today = moment(new Date()).format('YYYY-MM-DDT');
      this.eventDetails.startDate = today+"17:45";
      this.eventDetails.endDate = today+"18:45";
    }
    else {
      const doc = await db.collection("events").doc(this.$route.params.id).get();
      const data = doc.data();
      this.eventDetails = data;
      // Format the start and end as date and times. Ex: 2022-09-19T17:45
      const startDate = moment(data.startDate.toDate()).format('YYYY-MM-DDTHH:mm');
      const endDate = moment(data.endDate.toDate()).format('YYYY-MM-DDTHH:mm');

      this.eventDetails.startDate = startDate;
      this.eventDetails.endDate = endDate;
    }
  },

  methods: {
    handleFile(e) {
      const file = e.target.files[0];
      if(!file) {
        return;
      }
      this.flyerFile = file;
    },
    async submit(e) {
      // Prevent the page from navigating to a form submission page (the default behavoior)
      e.preventDefault();
      const details = {...this.eventDetails};
      
      // Checks for if the event is valid
      if(details.title.length == 0) {
        alert("Please provide an event name");
        return;
      }
      const startDateTime = new Date(details.startDate);
      const endDateTime = new Date(details.endDate);
      if(startDateTime.getTime() > endDateTime.getTime()) {
        alert("End date should be after start date");
        return;
      }

      // Convert the date into a Firestore Timestamp object
      details.startDate = Timestamp.fromDate(startDateTime);
      details.endDate = Timestamp.fromDate(endDateTime);
      // Get the current event ID or generate a new one
      const docId = this.isNew ? db.collection("events").doc().id : this.$route.params.id;

      // Delete the event flyer
      if(details.flyer && this.removeFlyer) {
        await storage.ref(details.flyer).delete();
        delete details.flyer;
      }

      // Add an event flyer
      if(this.flyerFile) {
        const fileName = 'flyers/'+docId + this.flyerFile.name.substring(this.flyerFile.name.lastIndexOf("."));
        await storage.ref(fileName).put(this.flyerFile);
        details.flyer = fileName;
      }

      // Update the event and navigate back to the main events list page
      await db.collection("events").doc(docId).set(details);
      console.log("Event updated");
      this.$router.push("/events");
    },
    async viewFlyer(e){
      e.preventDefault();
      const url = await storage.ref(this.eventDetails.flyer).getDownloadURL();
      window.open(url, '_blank');
    },
    markFlyerRemoval(e) {
      e.preventDefault();
      this.removeFlyer = true;
    }
  },

  data() {
    return {
      eventDetails: {
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        location: '',
        flyer: null
      },
      removeFlyer: false,
      flyerFile: null,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
};
</script>

<style scoped>
  button {
    border-radius: 40px;
    padding: 10px 30px;
    margin-bottom: 15px;
    border: 2px solid #1c548d;
    margin-right: 20px;
  }
  button.remove {
    border: 2px solid #eb4034;

  }
  input[type=button], label {
    padding: 10px 30px;
    border-radius: 40px;
    background-color: #1c548d;
    color: white;
    margin-bottom: 15px;

  }
</style>
