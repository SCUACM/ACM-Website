<template>
    <v-app>
        <MainNavbar />
            <v-container style="margin-top: 75px; max-width: 1000px">
                <h2>Manage Admin Users</h2>
                <v-text-field class="uid-input" label="Enter User UID" v-model="uid">
                </v-text-field>
                <button @click="addAdmin">Add Admin Privileges</button>
                <button @click="removeAdmin" class="remove">Remove Admin Privileges</button>
                <h2>Manage Events</h2>
                <router-link to="/admin/events/new">
                    <button class="create">Create New Event</button>
                </router-link>
                <span>or select an existing event below:</span><br>
                <AdminEventCard v-for="event of acmEvents" :key="event.id" :event="event">
                </AdminEventCard>
            </v-container>
        <MainFooter />
    </v-app>
  </template>
  
  <script>
  import MainNavbar from "@/layout/MainNavbar.vue";
  import MainFooter from "@/layout/MainFooter.vue";

  import 'firebase/compat/firestore'
  import {db, functions} from '../firebase';
import AdminEventCard from "../components/AdminEventCard.vue";
  
  export default {
    name: "AdminPage",
  
    components: {
    MainNavbar,
    MainFooter,
    AdminEventCard
},

    methods: {
        async addAdmin() {
            console.log(this.uid);
            if(this.uid.length > 0) {
                const result = await functions.httpsCallable("addAdmin")({uid: this.uid});
                alert(result.data.message);
            }
        },
        async removeAdmin() {
            if(this.uid.length > 0) {
                const result = await functions.httpsCallable("removeAdmin")({uid: this.uid});
                alert(result.data.message);
            }
        },
    },
  
    firestore: {
      acmEvents: db.collection('events').orderBy('startDate', 'desc')
    },

    data() {
      return {
        uid: "",
        acmEvents: [],
      };
    },
  };
  </script>
  
<style scoped>
    .uid-input {
        display: inline-block;
        width: 300px;
    }
    
    .event {
        margin-top: 10px;
        font-size: 18px;
        text-decoration: none;
    }

    span {
        font-size: 18px;
    }

    button {
        border-radius: 40px;
        padding: 10px 30px;
        margin: 0px 10px 20px 10px;
        margin-bottom: 15px;
        border: 2px solid #1c548d;
        color: black;
    }
    button.remove {
        border: 2px solid #eb4034;
        margin-right: 20px;
    }

    button.create {
        background-color: #1c548d;
        color: white;
    }

    h2 {
        margin-top: 20px;
    }

</style>
  