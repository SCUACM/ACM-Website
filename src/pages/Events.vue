<template>
  <v-app>
    <Navbar />
    <v-container style="margin-top: 75px; max-width: 1000px">
      calendar
      <EventList />
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/layout/Navbar.vue";
import Footer from "@/layout/Footer.vue";
import EventList from "@/components/EventList";
export default {
  name: "Events",

  components: {
    Navbar,
    Footer,
    EventList,
  },

  data: () => ({}),
};
</script>

<style scoped></style>
