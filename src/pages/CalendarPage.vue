<template>
  <v-app>
    <MainNavbar />
    <v-container style="margin-top: 100px; max-width: 1000px">
      <CalendarComponent />
    </v-container>
    <MainFooter />
  </v-app>
</template>

<script>
import "../assets/scss/events-media.scss";
import MainNavbar from "@/layout/MainNavbar.vue";
import MainFooter from "@/layout/MainFooter.vue";
import CalendarComponent from "@/components/CalendarComponent.vue";
// import EventList from "@/components/EventList";
export default {
  name: "CalendarPage",

  components: {
    MainNavbar,
    MainFooter,
    CalendarComponent
    // EventList,
  },

  data: () => ({
    isMounted: false,
    selectedOpen: false,
    selectedEvent: "",
    selectedElement: "",
    calendarType: "month",
    mode: "stack",
    value: "",
    calendarTypes: ["month", "week", "day"],
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
  })
}
</script>

<style scoped></style>
