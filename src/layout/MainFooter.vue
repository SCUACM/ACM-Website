<template>
  <div>
    <footer class="pa-8 mt-16" style="background-color: #1c548d;">
      <v-row
          style="display: flex; justify-content: center; text-align: center;"
      >
        <v-col cols="12" class="footer-header">
          Join our mailing list today
        </v-col>
        <v-col cols="12">
          <v-btn
              style="border-radius: 50px; border: solid white;"
              class="join-btn"
              outlined
              height="60px"
              width="230px"
              to="/joinus"
          >
            Sign me up!
          </v-btn>
        </v-col>
      </v-row>
    </footer>
    <footer class="pa-8" style="background-color: #181818; min-height: 300px">
      <v-container style="max-width: 1000px">
        <v-row>
          <v-col
              class="clickable"
              @click="$router.push('/')"
              cols="12"
              sm="12"
              md="4"
              lg="4"
              xl="4"
          >
            <v-img
                width="200px"
                height="100px"
                style="margin: auto;"
                contain
                :lazy-src="Logo"
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
            <div class="footer-title mb-4" style="text-align: center" @click="$router.push('/privacy')">
              <a href="/privacy" style="color: white; text-decoration: none;">Privacy Policy</a>
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
                class="ms-1"
                style="background-color: transparent;box-shadow: none;"
            >
              <v-icon large :color="social.color">
                {{ social.icon }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </footer>
  </div>
</template>

<script>
import Logo from "../assets/branding/logo_temp_new_invert.svg";
import "@/assets/scss/footer-media.scss";

export default {
  name: "MainFooter",

  components: {},

  data: () => ({
    Logo,

    socials: [
      {
        icon: "mdi mdi-slack",
        href: "https://scuacm.slack.com/",
        color: "#36C5F0",
      },
      {
        icon: "mdi mdi-instagram",
        href: "https://www.instagram.com/scu_acm/",
        color: "#E1306C",
      },
      {
        icon: "mdi mdi-github",
        href: "https://github.com/scuacm",
        color: "white",
      },
      {
        icon: "mdi mdi-laptop",
        href: "https://discord.gg/G242hXD",
        color: "#7289da",
      },
      {
        icon: "mdi mdi-linkedin",
        href: "https://www.linkedin.com/groups/13597280/",
        color: "#0e76a8",
      },
    ],
  }),
};
</script>

<style scoped>
.clickable:hover {
  cursor: pointer;
}

.join-btn {
  font-family: "Poppins", sans-serif;
  font-size: 1rem !important;
  letter-spacing: normal !important;
  text-transform: none !important;
  color: white !important;
  transition: color 0.1s, background-color 0.4s;
  background-color: #1c548d;
}

.join-btn:hover {
  background-color: white;
  color: black !important;
  transition: color 0.1s, background-color 0.4s;
}
</style>
