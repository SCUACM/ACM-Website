<template>
    <v-app>
        <Navbar />
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
                <div v-for="e in acmEvents" :key="e.id" :to="'/admin/events/'+e.id" class="event">
                    <h3>{{e.title}} ({{e | formatDateTime}})</h3>
                    <router-link :to="'/admin/events/'+e.id"><button>Edit Event</button></router-link>
                    <button @click="() => deleteEvent(e.id)" class="remove">Delete Event</button>
                    <button @click="() => openQrCode(e.id)">View Event QR Code</button>
                </div>
            </v-container>
        <Footer />
    </v-app>
  </template>
  
  <script>
  import Navbar from "@/layout/Navbar.vue";
  import Footer from "@/layout/Footer.vue";
  import QRCode from 'qrcode';
  
  import 'firebase/compat/firestore'
  import {db, functions} from '../firebase';
  
  export default {
    name: "Admin",
  
    components: {
        Navbar,
        Footer,
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
        async deleteEvent(id) {
            if (confirm("Are you sure you want to delete this event?") == true) {
                await db.collection("events").doc(id).delete();
                console.log("deleted");
            }
        },
        async openQrCode(id) {
            const url = window.location.origin+"/#/register/"+id;
            const imageSrc = await QRCode.toDataURL(url, {width: 512});
            const contentType = 'image/png';
            const byteCharacters = atob(imageSrc.substr(`data:${contentType};base64,`.length));
            const byteArrays = [];
            for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
                const slice = byteCharacters.slice(offset, offset + 1024);

                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }

                const byteArray = new Uint8Array(byteNumbers);

                byteArrays.push(byteArray);
            }
            const blob = new Blob(byteArrays, {type: contentType});
            const blobUrl = URL.createObjectURL(blob);

            window.open(blobUrl, '_blank');
        }
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
        margin-bottom: 15px;
        border: 2px solid #1c548d;
        margin: 0px 10px 20px 10px;
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
  