<template>
  <v-app>
    <MainNavbar />
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
            :disabled="!canEdit"
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
            :disabled="!canEdit"
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
            :disabled="!canEdit"
            v-model="formData.major"
            outlined
            solo
          >
          </v-select>
          <div class="form-header">
            Race/Ethnicity
          </div>
          <v-select
            label="Race"
            v-model="formData.race"
            @input="callDebounce"
            :items="race"
            :disabled="!canEdit"
            outlined
            solo
            multiple
          >
          </v-select>
          <div class="form-header">
            Gender
          </div>
          <v-select
            label="Gender"
            @input="callDebounce"
            :items="gender"
            :disabled="!canEdit"
            v-model="formData.gender"
            outlined
            solo
          >
          </v-select>
        </v-form>
        <ManageResume v-if="viewResume" :canUpload="canUploadResume">
        </ManageResume>
    </v-container>
    <MainFooter />
  </v-app>
</template>

<script>
import MainNavbar from "@/layout/MainNavbar.vue";
import MainFooter from "@/layout/MainFooter.vue";

import 'firebase/compat/firestore'
import {db, auth} from '../firebase';
import { debounce } from 'debounce';
import { getUserPerms, majorsList } from '../helpers';
import ManageResume from '../components/ManageResume.vue';

export default {
  name: "ProfilePage",

  components: {
    MainNavbar,
    MainFooter,
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
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.user = user;
        const perms = await getUserPerms(user);
        this.canEdit = perms.editMyProfile;
        this.viewResume = perms.viewMyResume;
        this.canUploadResume = perms.uploadResume;
        const ref = db.collection("users").doc(user.uid);
        let data = (await ref.get()).data();
        if (!data) {
          data = { name: user.displayName, eventsAttended: 0 }
          await ref.set(data);
        }
        this.formData = data;
        this.attendance = data.eventsAttended;
      }
    });
  },

  data() {
    return {
      graduationYears: [2025, 2026, 2027, 2028],
      race: ['White', 'Black/African American', 'Hispanic (any race)', 'Asian', 'Native American', 'Pacific Islander', 'Prefer not to say'],
      gender: ['Female', 'Male', 'Non-Binary', 'Other', 'Prefer not to say'],
      formData: {
        race: [],
      },
      user: auth.currentUser,
      majorsList: majorsList,
      canUploadResume: false,
      attendance: "loading",
      canEdit: false,
      viewResume: false
    };
  },
};
</script>

<style scoped></style>
