<template>
  <footer class="blue-grey lighten-5 pa-8 mt-16" style="min-height: 250px">
    <v-container style="max-width: 1000px">
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="4" xl="4">
          <v-img
            width="200px"
            height="100px"
            style="margin: auto;"
            contain
            :src="Logo"
          />
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4" xl="4">
          <div class="footer-title mb-4" style="text-align: center">
            Reach us at:
          </div>
          <div class="footer-subtitle mb-4" style="text-align: center">
            acm@scu.edu
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
          xl="4"
          style="text-align: center"
        >
          <div class="footer-title mb-4">
            Connect with us on social media!
          </div>
          <v-btn
            icon
            v-for="(social, i) in socials"
            :key="i"
            :href="social.href"
            class="mx-1"
          >
            <v-icon large :color="social.color">
              {{ social.icon }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
import Logo from "../assets/branding/logo_temp_new.svg";
import "../assets/scss/footer-media.scss";
export default {
  name: "Footer",

  components: {},

  data: () => ({
    Logo,

    socials: [
      {
        icon: "mdi-facebook",
        href: "https://www.facebook.com/groups/165822943541098/?ref=br_rs",
        color: "#4267B2",
      },
      {
        icon: "mdi-slack",
        href: "https://scuacm.slack.com/",
        color: "#4A154B",
      },
      {
        icon: "mdi-instagram",
        href: "https://www.instagram.com/scu_acm/",
        color: "#E1306C",
      },
      {
        icon: "mdi-github",
        href: "https://github.com/scuacm",
        color: "black",
      },
      {
        icon: "mdi-discord",
        href: "https://discord.com/invite/ReQTuJD",
        color: "#7289da",
      },
      {
        icon: "mdi-linkedin",
        href: "https://www.linkedin.com/groups/13597280/",
        color: "#0e76a8",
      },
    ],
  }),
};
</script>

<style scoped></style>
