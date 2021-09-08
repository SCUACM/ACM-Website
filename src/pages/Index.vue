<template>
  <v-app>
    <Navbar no-elevation />
    <v-container
      ref="initContainer"
      class="main-container"
      style="max-width: 1200px;"
    >
      <v-scroll-x-transition appear>
        <v-row>
          <v-col cols="12" class="title-container">
            <div class="title-header">
              Association for Computing Machinery
            </div>
          </v-col>
          <v-col cols="12" class="title-container">
            <div class="title-sub-header">
              Advancing computing as a science & profession at Santa Clara
              University.
            </div>
          </v-col>
        </v-row>
      </v-scroll-x-transition>
    </v-container>

    <div ref="navigation" class="navigation">
      dsad
    </div>

    <v-scroll-x-transition appear>
      <v-container
        style="max-width: 1000px;"
        :style="{ marginTop: containerMargin() + 'px' }"
      >
        <!-- had to use style bind with js breakpoint because class didn't work for some reason... -->
        <v-row
          v-for="(item, i) in boxContent"
          :key="i"
          :style="{ marginBottom: containerMarginBottom + 'px' }"
        >
          <v-col v-if="i % 2 == 0" cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="item-container">
              <v-img class="item-img" :src="item.src" :lazy-src="item.src" />
            </div>
          </v-col>
          <v-col
            v-if="i % 2 == 1"
            class="hidden-md-and-up"
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <div class="item-container">
              <v-img class="item-img" :src="item.src" :lazy-src="item.src" />
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="item-container">
              <div class="item-title">
                {{ item.title }}
              </div>
              <div class="item-sub-title">
                {{ item.content }}
                <div v-if="item.content2"><br />{{ item.content2 }}</div>
              </div>
            </div>
          </v-col>
          <v-col
            class="hidden-sm-and-down"
            v-if="i % 2 == 1"
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <div class="item-container">
              <v-img class="item-img" :src="item.src" :lazy-src="item.src" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-scroll-x-transition>

    <v-container style="max-width: 1200px; margin-bottom: 100px;">
      <div class="event-title">
        Events
      </div>
      <div class="event-sub-title">
        We host a plethora of fun events for anyone of any background or major!
      </div>
      <v-row>
        <v-col
          v-for="(event, i) in eventContent"
          :key="i"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="4"
          style="text-align: center; margin-left: auto; margin-right: auto;"
        >
          <div>
            <v-img class="event-img" :src="event.src" :lazy-src="event.src" />
          </div>
          <div class="event-header">
            {{ event.title }}
          </div>
          <div class="event-sub-header">
            {{ event.content }}
          </div>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import "../assets/scss/index-media.scss";
import Navbar from "@/layout/Navbar.vue";
import Footer from "@/layout/Footer.vue";

import image1 from "@/assets/images/1.jpg";
import image2 from "@/assets/images/2.jpg";
import image3 from "@/assets/images/3.jpg";

import hackathon from "@/assets/images/events/hackathon.jpg";
import workshop from "@/assets/images/events/workshop.jpg";
import speaker from "@/assets/images/events/speaker.jpg";

export default {
  name: "Index",

  components: {
    Navbar,
    Footer,
  },

  mounted() {
    console.log(this.$refs);
    this.navigationTop = this.$refs.navigation.getBoundingClientRect().top;
    this.initContainerTop = this.$refs.initContainer.getBoundingClientRect().top;
    this.navigationHeight = this.$refs.navigation.clientHeight;
    this.isMounted = true;
  },

  computed: {
    containerMarginBottom() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 75;
        case "sm":
          return 100;
        default:
          return 200;
      }
    },
  },

  data: () => ({
    isMounted: false,
    navigationTop: 0,
    initContainerTop: 0,
    navigationHeight: 0,
    boxContent: [
      {
        src: image1,
        title: "What do we do?",
        content:
          "ACM is the largest Computer Science organization at SCU. We strongly encourage and welcome students of all backgrounds, majors, and skill levels to join us and share our love for technology!",
        content2:
          "At SCU's ACM, we present informative workshops, bring guest speakers, and host fun weekly meetings, as well as hackathons.",
      },
      {
        src: image2,
        title: "How do we do it?",
        content:
          "ACM has the help of an amazing board, as well as a network of computer science enthusiasts at SCU.",
        content2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        src: image3,
        title: "How do I get involved?",
        content:
          "Meetings are every Tuesday at 5:45. Join our mailing list or slack channel to get involved!",
        content2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],

    eventContent: [
      {
        src: hackathon,
        title: "Hackathons",
        content:
          "Every year we host Hack for Humanity, SCU's social good hackathon.",
      },
      {
        src: workshop,
        title: "Workshops",
        content:
          "Our bi-monthly workshops are a great way to learn cutting edge technologies right on SCU's campus.",
      },
      {
        src: speaker,
        title: "Speakers",
        content: "Learn about exciting new topics from guest speakers!",
      },
    ],
  }),

  methods: {
    containerMargin() {
      if (this.isMounted) {
        console.log(this.navigationTop);
        console.log(this.initContainerTop);
        console.log(this.navigationHeight);
        return (
          this.navigationTop - this.initContainerTop + this.navigationHeight
        );
      }
      return 0;
    },
  },
};
</script>

<style scoped></style>
