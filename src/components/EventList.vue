<template>
  <div>
    <EventListSection title="2020 Events" :event-list="events2020" />

    <EventListSection title="2019 Events" :event-list="events2019" />

    <EventListSection title="2018 Events" :event-list="events2018" />
  </div>
</template>

<script>
import "../assets/scss/board-media.scss";

import EventListSection from "@/components/EventListSection.vue";

export default {
  name: "EventList",

  components: {
    EventListSection,
  },

  data() {
    return {
      events2020: [
        {
          src: "",
          date: "",
          info: "",
        },
      ],

      events2019: [
        {
          src: "",
          date: "",
          info: "",
        },
      ],

      events2018: [
        {
          src: "",
          date: "",
          info: "",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
