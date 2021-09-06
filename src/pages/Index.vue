<template>
  <v-app>
    <Navbar />
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/layout/Navbar.vue";
import Footer from "@/layout/Footer.vue";

export default {
  name: "Index",

  components: {
    Navbar,
    Footer,
  },

  data: () => ({}),
};
</script>

<style scoped></style>
