<template>
  <v-app>
    <Navbar />
    <v-container style="margin-top: 75px; max-width: 750px">
        <div class="events-title">
          Manage Profile
        </div>
        <h2 style="text-align:center;" class="">
          Events Attended: {{ attendance }}
        </h2>
        <v-form v-if="formData" @submit.prevent="updateFirebase" @input="callDebounce">
          <div class="form-header">
            Preferred Name 
          </div>
          <v-text-field
            label="Preferred Name"
            @input="callDebounce"
            v-model="formData.name"
            outlined
            solo
          >
          </v-text-field>
          <div class="form-header">
            Graduation Year
          </div>
          <v-select
            label="Graduation Year"
            v-model="formData.year"
            @input="callDebounce"
            :items="graduationYears"
            outlined
            solo
          >
          </v-select>
          <div class="form-header">
            Major
          </div>
          <v-select
            label="Major"
            @input="callDebounce"
            :items="majorsList"
            v-model="formData.major"
            outlined
            solo
          >
          </v-select>
        </v-form>
        <ManageResume>

        </ManageResume>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/layout/Navbar.vue";
import Footer from "@/layout/Footer.vue";

import 'firebase/compat/firestore'
import {db, auth, functions} from '../firebase';
import { debounce } from 'debounce';
import { majorsList } from '../helpers';
import ManageResume from '../components/ManageResume.vue';

export default {
  name: "EventList",

  components: {
    Navbar,
    Footer,
    ManageResume
},

  methods: {
    callDebounce() {
      this.debouncedUpdate();
    },
    debouncedUpdate: debounce(function() {
      this.updateFirebase()
    }, 1000),
    async updateFirebase() {
      try {
        const ref = db.collection("users").doc(this.user.uid);
        await ref.set(this.formData);
        this.state = 'synced';
      } catch (error) {
        this.errorMessage = JSON.stringify(error)
        this.state = 'error';
      }
    },
    async getAttendance() {
        
    },
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.user = user;
        const ref = db.collection("users").doc(user.uid);
        let data = (await ref.get()).data();
        if (!data) {
          data = { name: user.displayName }
          await ref.set(data);
        }
        this.formData = data;
        var result;
        if(this.user.uid.length > 0) {
            result = await functions.httpsCallable("getUserAttendance")({id: user.uid});
            this.attendance = result.data;
        }
        
      }
    });
  },

  data() {
    return {
      graduationYears: [2023, 2024, 2025, 2026],
      formData: null,
      user: auth.currentUser,
      majorsList: majorsList,
      attendance: "loading"
    };
  },
};
</script>

<style scoped></style>
