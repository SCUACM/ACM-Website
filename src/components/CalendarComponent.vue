<template>
  <v-container style="max-width: 1000px">
    <div style="margin-bottom: 200px;">
      <div class="events-title">
        Calendar
      </div>
      <div style="height: 600px;">
        <!-- Calendar Navigation -->
        <v-sheet tile height="54" class="d-flex">
          <!-- <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn> -->
          <v-spacer />
          <div class="events-calendar-title" v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </div>
          <v-spacer />
          <v-select
            v-model="calendarType"
            :items="calendarTypes"
            dense
            outlined
            hide-details
            class="ma-2"
            label="type"
          ></v-select>
          <!-- <v-btn icon class="ma-2" @click="$refs.calendar.next()">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn> -->
        </v-sheet>
        <!-- Calendar -->
        <v-calendar
          ref="calendar"
          v-model="today"
          :type="calendarType"
          :events="events"
          color="primary"
          @change="getEvents"
          @click:event="showEvent"
        />
        <!-- Below is code for popup on click -->
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <!-- eslint-disable -->
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <!-- eslint-enable -->
              <v-spacer></v-spacer>
              <v-btn icon @click="selectedOpen = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text v-if="selectedEvent.details">
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
          </v-card>
        </v-menu>
      </div>
    </div>
    <!-- List of events -->
    <!-- <EventList /> -->
  </v-container>
</template>

<script>
import "../assets/scss/events-media.scss";
import { VCalendar } from 'vuetify/labs/VCalendar';
// import EventList from "@/components/EventList";
export default {
  name: "CalendarComponent",

  components: {
    VCalendar
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
    today: new Date()
  }),

  async mounted() {
    let fetchEvents = async () => {
      const _events = [];
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
      for (let event of data.items) {
        _events.push({
          title: event.summary,
          start: new Date(event.start.date),
          color: "grey darken-1",
          allDay: true
        });
      }

      const acmEventsResponse = await fetch(
        `https://clients6.google.com/calendar/v3/calendars/santaclara.acm@gmail.com/events?calendarId=santaclara.acm%40gmail.com&singleEvents=true&timeZone=America%2FLos_Angeles&maxAttendees=1&maxResults=250&sanitizeHtml=true&timeMin=${timeMin}&timeMax=${timeMax}&key=${auth}`
      );
      const acmEventsData = await acmEventsResponse.json();
      for (let event of acmEventsData.items) {
        _events.push({
          title: event.summary,
          start: new Date(event.start.date),
          color: "grey darken-1",
          allDay: true
        });
      }
      this.events = _events;
    }
    await fetchEvents();
    console.log(this.events);
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

    // fetching acm events gives time string in incorrect format
    parseTime(dateTime) {
      if (!dateTime) return "2000-00-00";
      console.log(dateTime);
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
