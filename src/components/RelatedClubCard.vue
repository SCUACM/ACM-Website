<template>
  <div class="related-club-card-container" @click="routeTo(club.link)">
    <v-img class="related-club-card-img" :src="club.src"/>
    <span class="related-club-card-header"> {{ club.title }} </span>
  </div>
</template>

<script>
import "../assets/scss/index-media.scss";

export default {
  name: "RelatedClubCard",

  props: {
    club: {
      src: String,
      link: String,
      title: String,
    },
  },

  mounted() {},

  methods: {
    routeTo(path) {
      // window.location = path; // routes without opening new tab
      window.open(path);
    },
  },
};
</script>

<style scoped></style>