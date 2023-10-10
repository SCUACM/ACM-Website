<template>
  <v-app>
    <MainNavbar />
    <v-container style="margin-top: 75px; max-width: 1000px">
      <BoardList />
    </v-container>
    <MainFooter />
  </v-app>
</template>

<script>
import MainNavbar from "@/layout/MainNavbar.vue";
import BoardList from "@/components/BoardList.vue";
import MainFooter from "@/layout/MainFooter.vue";
export default {
  name: "BoardPage",

  components: {
    MainNavbar,
    BoardList,
    MainFooter,
  },

  data: () => ({}),
};
</script>

<style scoped></style>
