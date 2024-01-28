<template>
    <div>
        <h3>{{event.title}} ({{formatDateTime(event)}}) Attendance: {{this.Attendance}} </h3>
        <router-link v-if="canEdit" :to="'/admin/events/'+event.id"><button>Edit Event</button></router-link>
        <button v-if="canDelete" @click="() => deleteEvent(event.id)" class="remove">Delete Event</button>
        <button @click="() => openQrCode(event.id)">View Event QR Code</button>
    </div>
</template>
<script>

import {db, functions, auth} from '../firebase';
import QRCode from 'qrcode';
import {getFormatDateTime, getUserPerms} from '../helpers';

export default {
    name: "AdminEventCard",

    components: {},

    props: {
        event: Object,
    },

    async mounted(){
        this.getEventAttendance(this.event.id);
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const perms = await getUserPerms(user);
                this.canEdit = (perms.editMyEvent && this.event.createdBy == user.uid) || (perms.acmEditEvent && this.event.tags.includes("acm")) || (perms.acmwEditEvent && this.event.tags.includes("acmw")) || (perms.aicEditEvent && this.event.tags.includes("aic")) || (perms.broncosecEditEvent && this.event.tags.includes("broncosec")) || (perms.otherEditEvent && this.event.tags.includes("other")) || (perms.icpcEditEvent && this.event.tags.includes("icpc"));
                this.canDelete = (perms.deleteMyEvent && this.event.createdBy == user.uid) || (perms.acmDeleteEvent && this.event.tags.includes("acm")) || (perms.acmwDeleteEvent && this.event.tags.includes("acmw")) || (perms.aicDeleteEvent && this.event.tags.includes("aic")) || (perms.broncosecDeleteEvent && this.event.tags.includes("broncosec")) || (perms.otherDeleteEvent && this.event.tags.includes("other")) || (perms.icpcEditEvent && this.event.tags.includes("icpc"));
            }
        });
    },

    methods: {
        async deleteEvent(id) {
            if (confirm("Are you sure you want to delete this event?") == true) {
                await db.collection("events").doc(id).delete();
                alert("deleted");
            }
        },
        async getEventAttendance(e){
            this.Attendance = JSON.stringify((await functions.httpsCallable("getEventAttendance")({id: e})).data);
        
        },
        async openQrCode(id) {
            const url = window.location.origin+"/register/"+id;
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
        },
        formatDateTime(event) {
            return getFormatDateTime(event);
        }
    },

    data: () => ({
        Attendance: null,
        canEdit: false,
        canDelete: false,
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
  