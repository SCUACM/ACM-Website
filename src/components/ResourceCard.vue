<template>
  <div @click="routeTo(resource.link)" class="resource-card-container">
    <v-img contain class="resource-img" :src="resource.src" />
    <v-row no-gutters>
      <v-col cols="12" class="resource-header">
        {{ resource.title }}
      </v-col>
      <v-col cols="12" class="resource-sub-header">
        {{ resource.content }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
import "../assets/scss/index-media.scss";

export default {
  name: "ResourceCard",

  props: {
    resource: {
      src: String,
      link: String,
      title: String,
      content: String,
    },
  },

  mounted() {},

  methods: {
    routeTo(path) {
      window.location = path;
    },
  },
};
</script>

<style scoped></style>
