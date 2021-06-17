<template>
  <v-app>
    <Navbar />
    <div style="margin-top: 100px;">
      Board
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/layout/Navbar.vue";
export default {
  name: "Board",

  components: {
    Navbar,
  },

  data: () => ({}),
};
</script>

<style scoped></style>
