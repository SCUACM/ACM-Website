<template>
  <v-app>
    <MainNavbar />
    <v-container style="margin-top: 75px; max-width: 1000px">
      <router-link to="/admin/roles" v-if="canViewRoles">
        <button class="create">Manage Roles and User Permissions</button>
      </router-link>
      <router-link to="/admin/stats" v-if="acmEvents.length">
        <button class="create">View attendance data statistics</button>
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
      <span v-if="canAddEvents">or select an existing event below:</span><br />
      <div style="margin-bottom: 1em;">
        <v-select
          v-if="this.allowedTags.length > 1"
          @update:model-value="this.setPageNumToStart()"
          v-model="selectedTag"
          :items="this.allowedTags"
          width="fit-content"
          style="margin-inline: 1em 2em; display: inline-flex;"
          variant="underlined"
          density="compact"
        >
        </v-select>
        <div class="pageButtonContainer">
          <span style="align-content: center; margin-right: 1em;">
            {{(this.pageNum-1) * this.eventsPerPage + 1}}-{{ Math.min(this.pageNum * this.eventsPerPage, this.eventsOnDisplay) }} of {{ this.eventsOnDisplay }}
          </span>
          <v-btn @click="pageDown()" class="pageButton">
            <v-icon large color="black">mdi mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn @click="pageUp()" class="pageButton">
            <v-icon large color="black">mdi mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
      <AdminEventCard
        v-for="event of filteredEvents.filter((value, index) => (index >= (this.pageNum-1)*this.eventsPerPage && index < this.pageNum*this.eventsPerPage))"
        :key="event.id"
        :event="event"
      >
      </AdminEventCard>
    </v-container>
    <MainFooter />
  </v-app>
</template>

<script>
import MainNavbar from "@/layout/MainNavbar.vue";
import MainFooter from "@/layout/MainFooter.vue";

import "firebase/compat/firestore";
import { db, functions, auth } from "../firebase";
import AdminEventCard from "../components/AdminEventCard.vue";
import { getUserPerms } from "../helpers";

export default {
  name: "AdminPage",

  components: {
    MainNavbar,
    MainFooter,
    AdminEventCard,
  },

  methods: {
    async addAdmin() {
      if (this.uid.length > 0) {
        const result = await functions.httpsCallable("addAdmin")({
          uid: this.uid,
        });
        alert(result.data.message);
      }
    },
    async removeAdmin() {
      if (this.uid.length > 0) {
        const result = await functions.httpsCallable("removeAdmin")({
          uid: this.uid,
        });
        alert(result.data.message);
      }
    },
    setPageNumToStart() {
      this.pageNum = 1;
    },
    pageUp() {
      this.pageNum += this.pageNum == this.maxPageNum ? 0 : 1;
    },
    pageDown() {
      this.pageNum -= this.pageNum > 1 ? 1 : 0;
    },
  },

  mounted() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const perms = await getUserPerms(user);
        this.canViewRoles = perms.changeRolePerms || perms.changeUserRole;
        this.canAddEvents =
          perms.acmAddEvent ||
          perms.acmwAddEvent ||
          perms.broncosecAddEvent ||
          perms.otherAddEvent ||
          perms.icpcAddEvent;
        this.canEditEvents =
          perms.acmEditEvent ||
          perms.acmwEditEvent ||
          perms.broncosecEditEvent ||
          perms.otherEditEvent ||
          perms.icpcEditEvent;
        this.canDeleteEvents =
          perms.acmDeleteEvent ||
          perms.acmwDeleteEvent ||
          perms.broncosecDeleteEvent ||
          perms.otherDeleteEvent ||
          perms.icpcDeleteEvent;
        this.allowedTags = ["all"];
        if (perms.acmEditEvent || perms.acmDeleteEvent) {
          this.allowedTags.push("acm");
        }
        if (perms.acmwEditEvent || perms.acmwDeleteEvent) {
          this.allowedTags.push("acmw");
        }
        if (perms.broncosecEditEvent || perms.broncosecDeleteEvent) {
          this.allowedTags.push("broncosec");
        }
        if (perms.icpcEditEvent || perms.icpcDeleteEvent) {
          this.allowedTags.push("icpc");
        }
        this.acmEvents = [];

        const eventCollection = await db
          .collection("events")
          .orderBy("startDate", "desc")
          .get();
        if (eventCollection.empty) {
          console.log("No events found");
          return;
        }
        for (let doc of eventCollection.docs) {
          const data = doc.data();
          data.id = doc.id;
          if ((perms.editMyEvent || perms.deleteMyEvent && data.createdBy === user.uid) || (!perms.otherEditEvent && !perms.otherDeleteEvent && (data.tags === null || data.tags.some(t => data.tags.includes(t))))) {
            this.acmEvents.push(data);
          }
        }
        this.eventsOnDisplay = this.acmEvents.length;
    }});
  },

  data() {
    return {
      uid: "",
      acmEvents: [],
      canViewRoles: false,
      canAddEvents: false,
      canEditEvents: false,
      canDeleteEvents: false,
      allowedTags: [],
      selectedTag: "all",
      eventsPerPage: 20,
      pageNum: 1,
      eventsOnDisplay: 0,
    };
  },
  computed: {
    maxPageNum() {
      return Math.trunc(this.eventsOnDisplay / this.eventsPerPage) + (this.eventsOnDisplay % this.eventsPerPage > 0 ? 1 : 0);
    },
    filteredEvents() {
      let result = this.acmEvents.filter((e) => (this.selectedTag == 'all' || e.tags?.includes(this.selectedTag)));
      this.eventsOnDisplay = result.length;
      return result;
    }
  }
};
</script>

<style scoped>
@import url("@mdi/font/css/materialdesignicons.css");
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

button.pageButton {
  border: none;
  background-color: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  aspect-ratio: 1;
  min-width: 0;
  width: fit-content;
}

div.pageButtonContainer {
  width: auto;
  float: right;
  display: inline-flex;
  margin-right: 4em;
}

h2 {
  margin-top: 20px;
}
</style>
