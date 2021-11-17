<template>
  <v-app style="position: relative;">
    <Navbar transparent no-elevation />
    <div
      ref="initContainer"
      class="parallax"
      :style="{ height: windowHeight - navigationHeight + 'px' }"
    >
      <v-container style="max-width: 1200px; margin: auto;">
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
    </div>

    <div ref="navigation" class="navigation">
      <!-- <Banner
        :show="true"
        content="Be a part of ACM! Come to our general meetings every Tuesday at 5:45 PM in SCDI 1302."
        link=""
        linkTitle=""
      /> -->
      <v-container style="max-width: 800px;">
        <v-row
          style="display: flex; justify-content: center; text-align: center;"
        >
          <v-col cols="12">
            <div class="navigation-header">
              Learn more
            </div>
          </v-col>
          <v-col v-for="(link, i) in navLinks" :key="i">
            <v-btn
              style="border-radius: 50px; border: solid white"
              class="join-btn"
              outlined
              height="60px"
              width="230px"
              @click="scrollTo(link.to)"
            >
              {{ link.title }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container
      ref="events"
      style="max-width: 1200px; margin-bottom: 250px; margin-top: 150px;"
    >
      <div class="event-title">
        Events
      </div>
      <div class="event-sub-title">
        We host a plethora of fun events for anyone of any background or major
        interested in computer science!
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

    <v-container style="max-width: 1000px;" ref="club-info">
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

    <v-container
      ref="resources"
      style="margin-bottom: 100px;"
      :style="{ maxWidth: resourceContainerWidth + 'px' }"
    >
      <div class="resource-title">
        Resources
      </div>
      <div class="event-sub-title">
        Utilize our resources to learn more about computer science and
        technology!
      </div>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="3"
          xl="3"
          v-for="(resource, i) in resourceContent"
          :key="i"
        >
          <ResourceCard :resource="resource" />
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
import ResourceCard from "@/components/ResourceCard.vue";
// import Banner from "@/components/Banner.vue";

import image1 from "@/assets/images/FirstGeneral.jpg";
import image2 from "@/assets/images/Bonfire.jpg";
import image3 from "@/assets/images/Veritas.jpg";

import hackathon from "@/assets/images/events/hackathon2.jpg";
import workshop from "@/assets/images/events/workshop.jpg";
import speaker from "@/assets/images/events/Speaker1.jpg";

import ACM from "@/assets/images/resources/ACM.svg";
import TeamTreeHouse from "@/assets/images/resources/teamtreehouse.svg";
import SmartScholar from "@/assets/images/resources/smartscholar.svg";
import DataScience from "@/assets/images/resources/datascience.svg";

export default {
  name: "Index",

  components: {
    Navbar,
    Footer,
    ResourceCard,
    //Banner,
  },

  watch: {
    windowHeight(newHeight, oldHeight) {
      console.log(`it changed to ${newHeight} from ${oldHeight}`);
    },
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.navigationHeight = this.$refs.navigation.clientHeight;
    this.isMounted = true;
  },

  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },

  computed: {
    containerMarginBottom() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 75;
        case "sm":
          return 100;
        default:
          return 150;
      }
    },

    resourceContainerWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "sm":
          return 700;
        case "md":
          return 700;
        default:
          return 1400;
      }
    },

    getContainerMargin() {
      return this.containerMargin() + 200;
    },
  },

  data: () => ({
    isMounted: false,
    navigationHeight: 0,
    windowHeight: window.innerHeight,
    boxContent: [
      {
        src: image1,
        title: "What do we do?",
        content:
          "ACM is one of the largest student organizations at SCU. We strongly encourage and welcome students of all backgrounds, majors, and skill levels to join us and share our love for technology!",
        content2:
          "At SCU's ACM, we present informative workshops, bring guest speakers, and host fun weekly meetings, as well as hackathons.",
      },
      {
        src: image2,
        title: "Why do we do it?",
        content:
          "ACM is comprised of individuals passionate about computer science determined to make a difference on campus.",
        content2:
          "We strive to make a community where people can find friends with similar interests and grow their real world technical knowledge to be more effective in industry.",
      },
      {
        src: image3,
        title: "How do I get involved?",
        content:
          "Meetings are every Tuesday at 5:45 in SCDI 1302. Join our mailing list or slack channel to get involved!",
        content2:
          "We are open to, and accepting of all majors and backgrounds. Don't be afraid to stop by even if you don't have any computer science experience.",
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
          "Our monthly workshops are a great way to learn real world technologies right on SCU's campus.",
      },
      {
        src: speaker,
        title: "Speakers",
        content:
          "Learn about exciting new topics from guest speakers. We have speakers from Google, Microsoft, and more!",
      },
    ],

    navLinks: [
      {
        title: "Events",
        to: "events",
      },
      {
        title: "Club Info",
        to: "club-info",
      },
      {
        title: "Resources",
        to: "resources",
      },
    ],

    resourceContent: [
      {
        src: ACM,
        link: "https://learning.acm.org/",
        title: "ACM Resources",
        content:
          "If you are a paid member of ACM, you can sign in to find access to loads of information from the Learning Center. Here you'll find a wealth of useful Ebooks, informative Webinars, a number of video courses you can follow and more!",
      },
      {
        src: TeamTreeHouse,
        link: "https://teamtreehouse.com/",
        title: "Team Treehouse",
        content:
          "Team Treehouse offers a variety of tutorials and video tutorials that help you walk through the fundamentals of whichever computer science topic you may be exploring. Please contact the ACM president for login credentials.",
      },
      {
        src: SmartScholar,
        link: "http://www.smartscholar.com/computer-science-guide/",
        title: "SmartScholar",
        content:
          "Smart Scholar's computer science education resource guide provides insight on computer science basics, and general industry knowledge.",
      },
      {
        src: DataScience,
        link: "https://www.mastersindatascience.org/careers/data-analyst/",
        title: "2U Data Science",
        content:
          "Mastersindatascience.org is a website dedicated to outlining everything Data Science for students interested in furthering their education in STEM related fields, specifically in the Technology departments.",
      },
    ],
  }),

  methods: {
    handleResize() {
      this.windowHeight = window.innerHeight;
      this.navigationHeight = this.$refs.navigation.clientHeight;
    },

    containerMargin() {
      // function for getting the position of the content
      // needed because the red navigation bar is dyhnamic based on window size
      if (this.isMounted) {
        return this.navigationHeight;
      }
      return 0;
    },

    scrollTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop - 120; // small offset for visuals

      window.scrollTo({ top, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.parallax {
  display: flex;
  /* The image used */
  background-image: url("../assets/images/parallax-temp1.jpg");

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.join-btn {
  font-family: "Poppins", sans-serif;
  font-size: 1rem !important;
  letter-spacing: normal !important;
  text-transform: none !important;
  color: white !important;
  transition: color 0.1s, background-color 0.4s;
}

.join-btn:hover {
  background-color: white;
  color: black !important;
  transition: color 0.1s, background-color 0.4s;
}
</style>
