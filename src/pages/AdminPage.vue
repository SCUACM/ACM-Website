<template>
    <v-app>
        <MainNavbar />
            <v-container style="margin-top: 75px; max-width: 1000px">
                
                <router-link to="/admin/roles" v-if="canViewRoles">
                    <button class="create">Manage Roles and User Permissions</button>
                </router-link>
                <!-- <h2>Manage Admin Users</h2>
                <v-text-field class="uid-input" label="Enter User UID" v-model="uid">
                </v-text-field>
                <button @click="addAdmin">Add Admin Privileges</button>
                <button @click="removeAdmin" class="remove">Remove Admin Privileges</button> -->
                
                <h2>Manage Events</h2>
                <router-link to="/admin/events/new" v-if="canAddEvents">
                    <button class="create">Create New Event</button>
                </router-link>
                <span v-if="canAddEvents">or select an existing event below:</span><br>
                <AdminEventCard v-for="event of acmEvents" :key="event.id" :event="event" :canEdit="canEditEvents" :canDelete="canDeleteEvents">
                </AdminEventCard>
            </v-container>
        <MainFooter />
    </v-app>
  </template>
  
  <script>
  import MainNavbar from "@/layout/MainNavbar.vue";
  import MainFooter from "@/layout/MainFooter.vue";

  import 'firebase/compat/firestore'
  import {db, functions, auth} from '../firebase';
import AdminEventCard from "../components/AdminEventCard.vue";
import { getUserPerms } from "../helpers";
  
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

    mounted() {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const perms = await getUserPerms(user);
                this.canViewRoles = perms.changeRolePerms || perms.changeUserRole;
                this.canAddEvents = perms.acmAddEvent || perms.acmwAddEvent || perms.broncosecAddEvent || perms.aicAddEvent || perms.otherAddEvent;
                this.canEditEvents = perms.acmEditEvent || perms.acmwEditEvent || perms.broncosecEditEvent || perms.aicEditEvent || perms.otherEditEvent;
                this.canDeleteEvents = perms.acmDeleteEvent || perms.acmwDeleteEvent || perms.broncosecDeleteEvent || perms.aicDeleteEvent || perms.otherDeleteEvent;
            }
        });
    },

    data() {
      return {
        uid: "",
        acmEvents: [],
        canViewRoles: false,
        canAddEvents: false,
        canEditEvents: false,
        canDeleteEvents: false
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
  