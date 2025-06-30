<template>
  <v-app>
    <v-container style="max-width: 500px">
      <div v-if="event">
        <h1>{{ event.title }}</h1>
        <h3 v-if="event.startDate != undefined" class="event-date">
          {{ formatDateTime(event) }}
        </h3>
      </div>
      <div v-else-if="showSignIn" class="center-container">
        <button @click="signIn">
          Sign in to register for this event
        </button>
      </div>
      <button v-if="!isRegistered" @click="register">
        Register for this event
      </button>
      <div v-else-if="isRegistered">
        <div class="confirm-text">You are registered for this event ✓</div>
        <div class="center-container column">
          <button @click="openLink('https://linktr.ee/scuacm')" class="button">
            Visit Our Linktree
          </button>
          <button @click="openLink('https://hackforhumanity.io/')" class="button">
            Learn About Hack for Humanity
          </button>
        </div>
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
      const eventId = this.$route.params.id;
      const data = {
        uid: this.user.uid,
        event: eventId,
        timestamp: Timestamp.now(),
      };

      const eventRef = db.collection("events").doc(eventId);
      const registrationRef = db.collection("registrations");
      const userRef = db.collection("users").doc(data.uid);

      await db.runTransaction(async (transaction) => {
        const eventDoc = await transaction.get(eventRef);
        const userDoc = await transaction.get(userRef);
        if (!eventDoc.exists) {
          throw "Event does not exist!";
        }
        else if (!userDoc.exists) {
          throw "User does not exist!?";
        }

        const newCount = (eventDoc.data().attendance ?? 0) + 1;
        const userRegis = (userDoc.data().eventsAttended ?? 0) + 1;
        transaction.update(eventRef, { attendance: newCount });
        transaction.update(userRef, {eventsAttended: userRegis});
        transaction.set(registrationRef.doc(), data);
      });

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
button {
  border-radius: 40px;
  padding: 10px 30px;
  background-color: #1c548d;
  margin: 0px 10px 20px 15px;
  color: white;
}
.flyer {
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 20px;
}
.confirm-text {
  background-color: white;
  color: #4bb543;
  font-size: 20px;
  margin: 17px 0px;
}
.event-date {
  padding-bottom: 20px;
}
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.center-container.column {
  flex-direction: column;
  align-items: center;
}
</style>
