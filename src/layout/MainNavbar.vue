<template>
  <div>
    <v-dialog v-model="showWelcome" max-width="800px">
      <WelcomePopup :user="user" @close="closePopup"></WelcomePopup>
    </v-dialog>
    <v-app-bar
      app
      :color="navColor"
      width="100vw"
      height="75px"
      elevate-on-scroll
    >
      <div class="app-bar mx-auto">
        <div class="mr-auto my-auto logo" @click="$router.push('/')">
          <v-img
            width="120px"
            height="60px"
            contain
            :laz-src="!isTransparent ? logoBlackSmall : logoWhiteSmall"
            :src="!isTransparent ? logoBlackSmall : logoWhiteSmall"
          />
        </div>
        <div class="ml-auto routes hidden-sm-and-down">
          <span class="link mx-6">
            <router-link
              to="/"
              :class="[
                isTransparent
                  ? aboutStyle
                    ? 'link-active'
                    : 'link-transparent'
                  : aboutStyle
                  ? 'link-active'
                  : 'link',
              ]"
            >
              about
            </router-link>
          </span>
          <span class="link mx-6">
            <router-link
              to="/board"
              :class="[
                isTransparent
                  ? boardStyle
                    ? 'link-active'
                    : 'link-transparent'
                  : boardStyle
                  ? 'link-active'
                  : 'link',
              ]"
            >
              board
            </router-link>
          </span>
          <span class="link mx-6" v-if="!showEvents">
            <router-link
              to="/calendar"
              :class="[
                isTransparent
                  ? calendarStyle
                    ? 'link-active'
                    : 'link-transparent'
                  : calendarStyle
                  ? 'link-active'
                  : 'link',
              ]"
            >
              events
            </router-link>
          </span>
          <span class="link mx-6" v-if="showEvents">
            <router-link
              to="/events"
              :class="[
                isTransparent
                  ? eventsStyle
                    ? 'link-active'
                    : 'link-transparent'
                  : eventsStyle
                  ? 'link-active'
                  : 'link',
              ]"
            >
              events
            </router-link>
          </span>
          <span class="link mx-6">
            <a
              @click="routeTo('https://hackforhumanity.io/')"
              :class="[!isTransparent ? 'link' : 'link-transparent']"
              style="cursor: alias;"
            >
              H4H
            </a>
          </span>
          <span class="link ml-6">
            <router-link
              to="/joinus"
              :class="[!isTransparent ? 'link' : 'link-transparent']"
            >
              newsletter
            </router-link>
          </span>
          <span class="link ml-6">
            <v-btn 
              v-if="user == null"
              @click="signIn()"
              outlined
              :class="[!isTransparent ? 'join-btn' : 'join-btn-transparent']"
              height="40px"
              width="130px"
              style="border-radius:10px; border: solid #0099ff"
            >
              sign in
            </v-btn>
            <v-menu offset-y v-else>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  outlined
                  :class="[!isTransparent ? 'join-btn' : 'join-btn-transparent']"
                  height="40px"
                  width="130px"
                  style="border-radius:10px; border: solid #0099ff"
                  v-bind="attrs"
                  v-on="on"
                >
                  account
                </v-btn>
              </template>
              <v-list>
                <router-link to="/profile">
                  <v-list-item>
                    <v-list-item-title>Manage Profile</v-list-item-title>
                  </v-list-item>
                </router-link><br>
                <router-link to="/admin" v-if="isAdmin">
                  <v-list-item>
                    <v-list-item-title>Admin Dashboard</v-list-item-title>
                  </v-list-item>
                </router-link><br>
                <a style="width: 100%" @click="signOut">
                  <v-list-item>
                    <v-list-item-title>Sign Out</v-list-item-title>
                  </v-list-item>
                </a>
              </v-list>
            </v-menu>
          </span>
        </div>
        <div class="ml-auto hidden-md-and-up">
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-flex justify-end>
                <v-btn
                  icon
                  color="white"
                  depressed
                  v-on="on"
                  v-bind="attrs"
                  style="margin-top: 12px"
                >
                  <v-icon large :color="fontColor">
                    mdi-menu
                  </v-icon>
                </v-btn>
              </v-flex>
            </template>
            <v-list>
              <v-list-item>
                <router-link to="/" class="link">
                  about
                </router-link>
              </v-list-item>
              <v-list-item>
                <router-link to="/board" class="link">
                  board
                </router-link>
              </v-list-item>
              <v-list-item v-if="!showEvents">
                <router-link to="/calendar" class="link">
                  calendar
                </router-link>
              </v-list-item>
              <v-list-item v-if="showEvents">
                <router-link to="/events" class="link">
                  events
                </router-link>
              </v-list-item>
              <v-list-item>
                <span
                  @click="routeTo('https://hackforhumanity.io/')"
                  class="link"
                >
                  H4H
                </span>
              </v-list-item>
              <v-list-item>
                <router-link to="/joinus" class="link">
                  newsletter
                </router-link>
              </v-list-item>
              <v-list-item v-if="!user">
                <a @click="signIn" class="link">
                  sign in
                </a>
              </v-list-item>
              <template v-else>
                <v-list-item>
                  <router-link to="/profile" class="link">
                    manage profile
                  </router-link>
                </v-list-item>
                <v-list-item v-if="isAdmin">
                  <router-link to="/admin" class="link">
                    admin dashboard
                  </router-link>
                </v-list-item>
                <v-list-item>
                  <a @click="signOut" class="link">
                    sign out
                  </a>
                </v-list-item>
              </template>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import "../assets/scss/navbar-media.scss";
import logoBlackSmall from "@/assets/branding/logo_temp_new.svg";
import logoWhiteSmall from "@/assets/branding/logo_temp_new_invert.svg";
// New imports
import { GoogleAuthProvider } from "firebase/auth";
import {auth, db} from '../firebase';
import WelcomePopup from '../components/WelcomePopup.vue';
import { getUserPerms } from "../helpers";

export default {
  name: "MainNavbar",

  props: {
    noElevation: {
      default: false,
      type: Boolean,
    },
    transparent: {
      default: false,
      type: Boolean,
    },
  },

  data() {
    return {
      showWelcome: false,
      scrollPosition: null,
      logoBlackSmall,
      logoWhiteSmall,
      user: auth.currentUser,
      isAdmin: false,
      showEvents: false,
    };
  },

  components: { WelcomePopup },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // console.log("Signed in", user);
        const email = user.providerData[0].email;
        if (email.includes("@scu.edu")){
            const userName = user.displayName;
            const uid = user.uid;

            const doc = await db.collection("users").doc(uid).get()
            if (!(doc.exists)){
              await db.collection("users").doc(uid).set({
                name: userName,
              });
              this.showWelcome = true;
            }
            const perms = await getUserPerms(user);
            const adminPerms = [
              "changeRolePerms",
              "changeUserRole",
              "editMyEvent",
              "deleteMyEvent",

              "acmAddEvent",
              "acmEditEvent",
              "acmDeleteEvent",

              "icpcAddEvent",
              "icpcEditEvent",
              "icpcDeleteEvent",

              "acmwAddEvent",
              "acmwEditEvent",
              "acmwDeleteEvent",

              "broncosecAddEvent",
              "broncosecEditEvent",
              "broncosecDeleteEvent",

              "aicAddEvent",
              "aicEditEvent",
              "aicDeleteEvent",

              "otherAddEvent",
              "otherEditEvent",
              "otherDeleteEvent",
            ]
            const admin = Object.keys(perms).some((perm) => perms[perm] && adminPerms.includes(perm));
            if (admin) {
              this.isAdmin = true;
            }

            this.showEvents = perms.viewEvents;
        }
        else {
          alert("Please sign in with your scu.edu email address");
          await this.signOut();
        }
        this.user = user;
      } else {
        console.log("Signed out");
        this.user = null;
      }
    });
  },

  methods: {
    toJoinUs() {
      this.$router.push("/joinus");
    },

    updateScroll() {
      this.scrollPosition = window.scrollY;
    },

    routeTo(path) {
      window.open(path);
    },
    signIn() {

      const provider = new GoogleAuthProvider();
      provider.addScope('email');

      auth.signInWithPopup(provider);
    },
    async signOut() {
      await auth.signOut();
      if(this.$route.meta.authRequired){
        this.$router.push("/").catch(()=>{});
      }
    },
    closePopup() {
      this.showWelcome = false;
      this.$router.push("/profile");
    }
  },

  computed: {
    isTransparent() {
      return this.transparent && this.scrollPosition < 100;
    },
    fontColor() {
      if (!this.isTransparent) return "#000000";
      if (this.scrollPosition > 100) return "#000000";
      return "#FFFFFF";
    },
    navColor() {
      if (this.scrollPosition > 100) return "#FFFFFF";
      return this.transparent ? "transparent" : "#FFFFFF";
    },
    aboutStyle() {
      const path = this.$route.path.split("/");
      return path[path.length - 1].toLowerCase() === "";
    },
    boardStyle() {
      const path = this.$route.path.split("/");
      return path[path.length - 1].toLowerCase() === "board";
    },
    broncoSecStyle() {
      const path = this.$route.path.split("/");
      return path[path.length - 1].toLowerCase() === "broncosec";
    },
    eventsStyle() {
      const path = this.$route.path.split("/");
      return path[path.length - 1].toLowerCase() === "events";
    },
    calendarStyle() {
      const path = this.$route.path.split("/");
      return path[path.length - 1].toLowerCase() === "calendar";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");

.join-btn {
  font-family: "Poppins", sans-serif;
  font-size: 1rem !important;
  letter-spacing: normal !important;
  text-transform: none !important;
  color: #0099ff !important;
  transition: color 0.1s, background-color 0.4s;
}

.join-btn-transparent {
  font-family: "Poppins", sans-serif;
  font-size: 1rem !important;
  letter-spacing: normal !important;
  text-transform: none !important;
  color: #fff !important;
  transition: color 0.1s, background-color 0.4s;
}

.join-btn:hover,
.join-btn-transparent:hover {
  background-color: #0099ff;
  color: white !important;
  transition: color 0.1s, background-color 0.4s;
}

.link {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: black;
}
.link-transparent {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: white;
}

.link:active {
  color: #0099ff;
  transition: color 0.3s;
}

.link-active {
  color: #0099ff;
  border-bottom: 2px solid #0099ff;
  transition: color 0.3s;
}

a {
  text-decoration: none;
  position: relative;
  display: inline-block;
  transition: color 0.7s, background-color 0.1s;
  color: #000;
}
a:hover {
  color: #0099ff;
  transition: color 0.3s;
}
a:focus,
a:active {
  color: #0099ff;
  transition: color 0.3s;
}

a::before {
  content: "";
  display: block;
  position: absolute;
  top: 100%;
  height: 2px;
  width: 100%;
  background-color: #0099ff;
  -webkit-transform-origin: center top;
  transform-origin: center top;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
  transition: color 0.1s, -webkit-transform 0.3s ease-out;
  transition: color 0.1s, transform 0.3s ease-out;
  transition: color 0.1s, transform 0.3s ease-out,
    -webkit-transform 0.3s ease-out;
}

a:active::before {
  background-color: #0099ff;
  transition: color 0.3s;
}

a:hover::before,
a:focus::before {
  -webkit-transform-origin: center top;
  transform-origin: center top;
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
}
</style>
