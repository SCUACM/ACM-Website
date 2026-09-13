<template>
  <v-app-bar app color="transparent" flat width="100vw" height="75px" absolute>
    <div class="app-bar mx-auto">
      <div class="mr-auto my-auto logo" @click="$router.push('/')">
        <v-img width="120px" height="60px" contain :src="logoBlueSmall" />
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import "@/assets/scss/navbar-media.scss";
import logoBlueSmall from "../assets/branding/acm-blue.png";

export default {
  name: "TransparentNavbar",
  props: {},

  data() {
    return {
      logoBlueSmall,
    };
  },

  components: {},

  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
.app-bar {
  width: 100%;
  height: 75px;
  display: flex;
  padding-left: 5%;
}

/* overrides vuetify app-bar padding */

:deep() .v-toolbar__content {
  padding: 0px !important;
}
</style>
