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
  }),

  async mounted() {
    await this.getHolidays();
    this.isMounted = true;
  },

  methods: {
    getEventColor(event) {
      return event.color;
    },

    getEvents() {
      this.events;
    },

    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },

    async getHolidays() {
      // typically we want to hide our auth... but since this is private it is fine
      const auth = "AIzaSyCnRyFyPuJ9WSeu602Q7CE13TsxWVNbw10";

      // only get holidays for 6 months prior and forward
      let currentDate = new Date();
      let futureDate = new Date(currentDate);
      futureDate.setMonth(currentDate.getMonth() + 6);
      let pastDate = new Date(currentDate);
      pastDate.setMonth(currentDate.getMonth() - 6);

      const timeMin = pastDate.toJSON();
      const timeMax = futureDate.toJSON();

      const res = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/en.usa%23holiday%40group.v.calendar.google.com/events?key=${auth}&timeMin=${timeMin}&timeMax=${timeMax}`
      );
      const data = await res.json();
      // console.log(data);
      this.events = this.events.concat(
        data.items.map((event) => ({
          name: event.summary,
          start: event.start.date,
          color: "grey darken-1",
        }))
      );

      const acmEventsResponse = await fetch(
        `https://clients6.google.com/calendar/v3/calendars/santaclara.acm@gmail.com/events?calendarId=santaclara.acm%40gmail.com&singleEvents=true&timeZone=America%2FLos_Angeles&maxAttendees=1&maxResults=250&sanitizeHtml=true&timeMin=${timeMin}&timeMax=${timeMax}&key=${auth}`
      );
      const acmEventsData = await acmEventsResponse.json();
      // console.log(acmEventsData);
      this.events = this.events.concat(
        acmEventsData.items.map((event) => ({
          name: event.summary,
          start: this.parseTime(event.start.dateTime),
          end: this.parseTime(event.end.dateTime),
          color: this.getColor(event.summary),
          details: event.description,
        }))
      );
    },

    // fetching acm events gives time string in incorrect format
    parseTime(dateTime) {
      if (!dateTime) return "2000-00-00";
      // console.log(dateTime);
      // console.log(typeof dateTime);
      // console.log(
      //   dateTime.substring(0, dateTime.indexOf("T")) +
      //     " " +
      //     dateTime.substring(dateTime.indexOf("T") + 1, dateTime.length - 9)
      // );
      return (
        dateTime.substring(0, dateTime.indexOf("T")) +
        " " +
        dateTime.substring(dateTime.indexOf("T") + 1, dateTime.length - 9)
      );
    },

    getColor(eventName) {
      eventName = eventName.toLowerCase();
      if (eventName.includes("broncosec")) return "indigo";
      else if (eventName.includes("general")) return "orange";
      else if (eventName.includes("interview prep")) return "blue";
      else if (eventName.includes("workshop")) return "cyan";
      return "green";
    },
  },
};
</script>

<style scoped></style>
