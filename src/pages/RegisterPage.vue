<template>
  <v-app>
    <v-container style="max-width: 500px">
      <div v-if="event">
        <h1>{{ event.title }}</h1>
        <h3 v-if="event.startDate != undefined" class="event-date">
          {{ formatDateTime(event) }}
        </h3>
      </div>
      <div v-else-if="showSignIn">
        <button @click="signIn">Sign in to register for this event</button>
      </div>
      <button v-if="!isRegistered" @click="register">
        Register for this event
      </button>
      <div v-else>
        <div class="confirm-text">You are registered for this event ✓</div>
        <button
          @click="openLink('https://linktr.ee/scuacm')"
          class="link-button"
        >
          Visit Our Linktree
        </button>
        <button
          @click="openLink('https://hackforhumanity.io/')"
          class="link-button"
        >
          Learn About Hack 4 Humanity
        </button>
      </div>
      <img v-if="flyerImage && !isRegistered" :src="flyerImage" class="flyer" />
    </v-container>
  </v-app>
</template>

<script>
import "../assets/scss/board-media.scss";

// import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import { db, auth, Timestamp, storage } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { getFormatDateTime } from "../helpers";
import { ref, getDownloadURL } from "firebase/storage";

export default {
  name: "RegisterPage",

  components: {},

  mounted() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.user = user;
        const eventId = this.$route.params.id;
        const doc = await db.collection("events").doc(eventId).get();
        if (doc.exists) {
          const registration = await db
            .collection("registrations")
            .where("uid", "==", user.uid)
            .where("event", "==", eventId)
            .get();
          // console.log(registration.docs);
          if (registration.docs.length > 0) {
            this.isRegistered = true;
          }
          this.event = { ...doc.data(), id: doc.id };
          if (this.event.flyer) {
            try {
              this.flyerImage = await getDownloadURL(
                ref(storage, this.event.flyer)
              );
            } catch (e) {
              console.log("No image available");
            }
          }
        }
      } else {
        this.showSignIn = true;
      }
    });
  },

  methods: {
    async register() {
      const data = {
        uid: this.user.uid,
        event: this.$route.params.id,
        timestamp: Timestamp.now(),
      };
      await db.collection("registrations").add(data);
      this.isRegistered = true;
    },
    signIn() {
      const provider = new GoogleAuthProvider();
      provider.addScope("email");

      auth.signInWithPopup(provider);
    },
    formatDateTime(event) {
      return getFormatDateTime(event);
    },
    openLink(url) {
      window.open(url, "_blank");
    },
  },

  data() {
    return {
      showSignIn: false,
      event: null,
      isRegistered: false,
      user: null,
      flyerImage: null,
    };
  },
};
</script>

<style scoped>
.flyer {
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 20px;
}
button {
  width: 100%;
  border-radius: 40px;
  padding: 10px 30px;
  background-color: #1c548d;
  margin: 0px 20px 20px 0px;
  color: white;
}
.confirm-text {
  background-color: white;
  color: #4bb543;
  font-size: 20px;
}
.event-date {
  padding-bottom: 20px; /* Add padding to increase space */
}
.link-button {
  width: 100%;
  border-radius: 40px;
  padding: 10px 0;
  background-color: #1c548d;
  color: white;
  margin-top: 20px;
}
</style>
