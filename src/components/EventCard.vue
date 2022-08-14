<template>
  <div>
    <h1>{{ event.title }}</h1>
    <h3>{{ event.date.toDate() | formatDate }}</h3>
    <h3>Location: {{ event.location }}</h3>
    <p>{{ event.description }}</p>
    <p v-for="link of event.links || {}" :key="link.title" class="link">
      <v-icon color="#1976d2" class="link-icon">
        {{ link.icon || 'mdi-link' }}
      </v-icon>
      <a :href="link.url" target="_blank">{{link.title}}</a>
    </p>
    <youtube v-if="event.youtube" :video-id="event.youtube"></youtube>
    <!-- <div class="events-title">
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
    </v-row> -->
  </div>
</template>

<script>
import "../assets/scss/board-media.scss";

export default {
  name: "EventCard",

  components: {},

  props: {
    event: Object
  },

  data: () => ({}),
};
</script>

<style scoped>
.link {
  font-size: 1.2rem;
}
.link-icon {
  margin-right: 5px;
}
</style>
