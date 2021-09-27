<template>
  <v-app style="overflow: hidden">
    <Navbar :just-logo="true" />
    <v-row style="">
      <v-col class="left-panel" cols="12" sm="12" md="6" lg="6" xl="6">
        <div class="header">
          Want to join SCU ACM?
        </div>
        <div class="sub-header">
          Sign up below to follow us for updates and stay on top of upcoming
          events!
        </div>
        <v-form
          action="https://scu.us12.list-manage.com/subscribe/post?u=6c12b19c2669eb3e7b5abb862&amp;id=4bb2a9a097"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          novalidateref="emailForm"
          @submit="submitJoin()"
          onsbumit="return false"
        >
          <v-container class="form-container">
            <v-row no-gutters>
              <v-col cols="12">
                <div class="form-header">
                  Email
                </div>
                <v-text-field
                  label="example@domain.com"
                  :rules="[rules.required, rules.email]"
                  v-model="email"
                  outlined
                  solo
                  type="email"
                  :value="email"
                  name="EMAIL"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="form-header">
                  First Name
                </div>
                <v-text-field
                  label="Enter first Name"
                  :rules="[rules.required]"
                  v-model="firstName"
                  outlined
                  solo
                  type="text"
                  :value="firstName"
                  name="FNAME"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="form-header">
                  Last Name
                </div>
                <v-text-field
                  label="Enter last Name"
                  :rules="[rules.required]"
                  v-model="lastName"
                  outlined
                  solo
                  type="text"
                  :value="lastName"
                  name="LNAME"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" style="display: flex; justify-content: center;">
                <div
                  style="position: absolute; left: -5000px;"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_6c12b19c2669eb3e7b5abb862_4bb2a9a097"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <div class="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    class="mt-2 submit-btn"
                    style="height: 60px; width: 250px; border-radius: 40px; border: solid #1c548d"
                  />
                </div>
              </v-col>
              <v-col cols="12" style="margin-top: 40px">
                <div
                  class="form-header"
                  id="mce-error-response"
                  style="display: none;"
                ></div>
                <div
                  class="form-header"
                  id="mce-success-response"
                  style="display: none; color: #4BB543"
                ></div>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>

      <v-col class="hidden-sm-and-down right-panel-colored" cols="6">
        <div class="img-container">
          <v-img class="img" src="@/assets/branding/remote_work1.svg" />
          <div class="welcome-text">
            Welcome to SCU ACM!
          </div>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import "../assets/scss/join-us-media.scss";
import Navbar from "@/layout/TransparentNavbar.vue";

export default {
  name: "JoinUs",

  components: {
    Navbar,
  },

  data: () => ({
    email: "",
    firstName: "",
    lastName: "",
    dialog: false,

    rules: {
      required: (value) => !!value || "Required.",
      // disgusting regex from google to pattern match email string:
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  }),

  mounted() {
    // script 1 for mailchimp
    let mc_script1 = document.createElement("script");
    mc_script1.setAttribute(
      "src",
      "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
    );
    document.head.appendChild(mc_script1);
  },

  methods: {
    submitJoin() {
      console.log("email: ", this.email);
      console.log("First Name: ", this.firstName);
      console.log("Last Name: ", this.lastName);
    },
  },
};
</script>

<style scoped>
#mc_embed_signup {
  background: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
}

/* This is the border of the v-input-fields when selected */
.v-application .primary--text {
  color: #1c548d !important;
  caret-color: #1c548d !important;
}
.submit-btn {
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  letter-spacing: normal;
  font-weight: 500;
  text-transform: none !important;
  color: #1c548d;
  transition: color 0.1s, background-color 0.4s;
}

.submit-btn:hover {
  background-color: #1c548d;
  color: white;
  transition: color 0.1s, background-color 0.4s;
}

.success-checkmark {
  width: 80px;
  height: 115px;
  margin: 0 auto;
}
.success-checkmark .check-icon {
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  border: 4px solid #808080;
}
.success-checkmark .check-icon::before {
  top: 3px;
  left: -2px;
  width: 30px;
  transform-origin: 100% 50%;
  border-radius: 100px 0 0 100px;
}
.success-checkmark .check-icon::after {
  top: 0;
  left: 30px;
  width: 60px;
  transform-origin: 0 50%;
  border-radius: 0 100px 100px 0;
  animation: rotate-circle 4.25s ease-in;
}
.success-checkmark .check-icon::before,
.success-checkmark .check-icon::after {
  content: "";
  height: 100px;
  position: absolute;
  background: transparent;
  transform: rotate(-45deg);
}
.success-checkmark .check-icon .icon-line {
  height: 5px;
  background-color: #808080;
  display: block;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
}
.success-checkmark .check-icon .icon-line.line-tip {
  top: 46px;
  left: 14px;
  width: 25px;
  transform: rotate(45deg);
  animation: icon-line-tip 0.75s;
}
.success-checkmark .check-icon .icon-line.line-long {
  top: 38px;
  right: 8px;
  width: 47px;
  transform: rotate(-45deg);
  animation: icon-line-long 0.75s;
}
.success-checkmark .check-icon .icon-circle {
  top: -4px;
  left: -4px;
  z-index: 10;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  box-sizing: content-box;
  border: 4px solid rgba(0, 255, 0, 0.7);
}
.success-checkmark .check-icon .icon-fix {
  top: 8px;
  width: 5px;
  left: 26px;
  z-index: 1;
  height: 85px;
  position: absolute;
  transform: rotate(-45deg);
  background-color: transparent;
}
@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}
@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 14px;
    top: 45px;
  }
}
@keyframes icon-line-long {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0px;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 8px;
    top: 38px;
  }
}
</style>
