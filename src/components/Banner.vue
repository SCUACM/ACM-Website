<template>
  <div v-if="show">
    <div class="banner-container">
      <div class="banner-text">
        {{ content }}
        <a class="banner-link" :href="link">{{ linkTitle }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/scss/banner-media.scss";
export default {
  name: "Banner",

  props: {
    link: String,
    linkTitle: String,
    show: Boolean,
    content: String,
  },

  data: () => ({}),

  methods: {},
};
</script>

<style scoped>
a,
a:visited,
a:active {
  font-family: "Poppins", sans-serif;
  font-weight: 400 !important;
  font-size: 1.1rem;
  color: black !important;
  text-transform: none;
  transition: 0.4s;
}

a:hover {
  color: white !important;
}
</style>
