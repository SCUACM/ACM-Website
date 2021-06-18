<template>
  <v-app>
    <Navbar />
    <v-container style="margin-top: 75px; max-width: 1000px">
      <BoardList />
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/layout/Navbar.vue";
import BoardList from "@/components/BoardList.vue";
import Footer from "../layout/Footer.vue";
export default {
  name: "Board",

  components: {
    Navbar,
    BoardList,
    Footer,
  },

  data: () => ({}),
};
</script>

<style scoped></style>
