<template>
  <div>
    <div class="board-title">
      {{ title }}
    </div>
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
