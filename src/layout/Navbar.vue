<template>
  <div>
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
          <span class="link mx-6">
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
              calendar
            </router-link>
          </span>
          <span class="link mx-6">
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
            <v-btn
              @click="toJoinUs()"
              outlined
              :class="[!isTransparent ? 'join-btn' : 'join-btn-transparent']"
              height="40px"
              width="130px"
              style="border-radius:10px; border: solid #0099ff"
            >
              join us!
            </v-btn>
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
              <v-list-item>
                <router-link to="/calendar" class="link">
                  calendar
                </router-link>
              </v-list-item>
              <v-list-item>
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
                  join us
                </router-link>
              </v-list-item>
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

export default {
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
      scrollPosition: null,
      logoBlackSmall,
      logoWhiteSmall,
    };
  },

  components: {},

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
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
