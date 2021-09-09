<template>
  <div>
    <div class="events-title">
      {{ title }}
    </div>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
        v-for="(event, i) in eventList"
        :key="i"
        class="events-container"
      >
        <div class="events-img-container">
          <v-img class="events-img" :lazy-src="event.src" :src="event.src" />
        </div>
        <div class="events-date">
          {{ event.date }}
        </div>
        <div class="events-content">
          {{ event.info }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import "../assets/scss/board-media.scss";

export default {
  name: "EventListSection",

  components: {},

  props: {
    title: String,
    eventList: Array,
  },

  data: () => ({}),
};
</script>

<style scoped></style>
