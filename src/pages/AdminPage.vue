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
      <AdminEventDataCard :events="acmEvents" :tags="this.allowedTags" />

      <h2>Manage Events</h2>
      <router-link to="/admin/events/new" v-if="canAddEvents">
        <button class="create">Create New Event</button>
      </router-link>
      <span v-if="canAddEvents">or select an existing event below:</span><br />
      <span v-if="this.allowedTags.length > 1">
        Filter to
        <select
          @change="updateSelectedTag($event.target.value)"
          style="text-decoration-line: underline"
        >
          <option value="all">all</option>
          <option :value="tag" v-for="tag in this.allowedTags" :key="tag">
            {{ tag }}
          </option>
        </select>
      </span>
      <AdminEventCard
        v-for="event of acmEvents.filter(
          (e) =>
            this.selectedTag == 'all' ||
            e.tags?.includes(this.selectedTag) ||
            false
        )"
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
import AdminEventDataCard from "../components/AdminEventDataCard.vue";
import { getUserPerms } from "../helpers";

export default {
  name: "AdminPage",

  components: {
    MainNavbar,
    MainFooter,
    AdminEventCard,
    AdminEventDataCard,
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
    updateSelectedTag(tag) {
      this.selectedTag = tag;
    },
    async fetchEventCounters() {
      const eventsSnapshot = await db.collection("events").get();
      const eventsData = eventsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      eventsData.forEach((eventData) => {
        const event = this.acmEvents.find((e) => e.id === eventData.id);
        if (event) {
          event.counter = eventData.counter;
        }
      });
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
          perms.aicAddEvent ||
          perms.otherAddEvent ||
          perms.icpcAddEvent;
        this.canEditEvents =
          perms.acmEditEvent ||
          perms.acmwEditEvent ||
          perms.broncosecEditEvent ||
          perms.aicEditEvent ||
          perms.otherEditEvent ||
          perms.icpcEditEvent;
        this.canDeleteEvents =
          perms.acmDeleteEvent ||
          perms.acmwDeleteEvent ||
          perms.broncosecDeleteEvent ||
          perms.aicDeleteEvent ||
          perms.otherDeleteEvent ||
          perms.icpcDeleteEvent;
        this.allowedTags = [];
        if (perms.acmEditEvent || perms.acmDeleteEvent) {
          this.allowedTags.push("acm");
        }
        if (perms.acmwEditEvent || perms.acmwDeleteEvent) {
          this.allowedTags.push("acmw");
        }
        if (perms.broncosecEditEvent || perms.broncosecDeleteEvent) {
          this.allowedTags.push("broncosec");
        }
        if (perms.aicEditEvent || perms.aicDeleteEvent) {
          this.allowedTags.push("aic");
        }
        if (perms.icpcEditEvent || perms.icpcDeleteEvent) {
          this.allowedTags.push("icpc");
        }
        this.acmEvents = [];

        if (perms.editMyEvent || perms.deleteMyEvent) {
          const response = await db
            .collection("events")
            .where("createdBy", "==", user.uid)
            .orderBy("startDate", "desc")
            .get();
          for (let doc of response.docs) {
            const data = doc.data();
            data.id = doc.id;
            this.acmEvents.push(data);
          }
        }

        if (this.allowedTags.length > 0) {
          let req2 = db.collection("events");
          if (!perms.otherEditEvent && !perms.otherDeleteEvent) {
            req2 = req2.where("tags", "array-contains-any", this.allowedTags);
          }
          const response2 = await req2.get();

          for (let doc of response2.docs) {
            const data = doc.data();
            data.id = doc.id;
            if (!this.acmEvents.find((event) => event.id == data.id)) {
              this.acmEvents.push(data);
            }
          }
        }
        this.acmEvents.sort((a, b) => {
          return b.startDate.seconds - a.startDate.seconds;
        });
        await this.fetchEventCounters();
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
      canDeleteEvents: false,
      allowedTags: [],
      selectedTag: "all",
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
