<template>
  <v-app>
    <Navbar />
    <div style="margin-top: 100px;">
      Events
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/layout/Navbar.vue";
export default {
  name: "Events",

  components: {
    Navbar,
  },

  data: () => ({}),
};
</script>

<style scoped></style>
