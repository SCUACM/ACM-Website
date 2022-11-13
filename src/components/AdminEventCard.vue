<template>
    <div>
        <h3>{{event.title}} ({{event | formatDateTime}}) Attendance: {{this.Attendance}} </h3>
        <router-link :to="'/admin/events/'+event.id"><button>Edit Event</button></router-link>
        <button @click="() => deleteEvent(event.id)" class="remove">Delete Event</button>
        <button @click="() => openQrCode(event.id)">View Event QR Code</button>
    </div>
</template>
<script>

import {db, functions} from '../firebase';
import QRCode from 'qrcode';

export default {
    name: "AdminEventCard",

    components: {},

    props: {
        event: Object
    },

    async mounted(){
        this.getEventAttendance(this.event.id);
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
        async getEventAttendance(e){
            this.Attendance = JSON.stringify((await functions.httpsCallable("getEventAttendance")({id: e})).data);
        
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

    data: () => ({
        Attendance: null
    })
}
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
  