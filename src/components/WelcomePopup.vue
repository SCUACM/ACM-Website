<template>
  <div class="welcome-popup">
    <h2>Thanks for joining SCU ACM!</h2>
    <span class="subtext">If you haven't already done so, please consider subscribing to our newsletter and filling out our welcome survey:</span>
    <v-form
      action="https://scu.us12.list-manage.com/subscribe/post?u=6c12b19c2669eb3e7b5abb862&amp;id=4bb2a9a097"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      novalidateref="emailForm"
      @submit="submitJoin()"
      onsbumit="return false"
    >
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" class="hidden">
            <v-text-field
              label="example@domain.com"
              v-model="email"
              outlined
              solo
              type="email"
              :value="email"
              name="EMAIL"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" class="hidden">
            <v-text-field
              label="Enter first Name"
              v-model="firstName"
              outlined
              solo
              type="text"
              :value="firstName"
              name="FNAME"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" class="hidden">
            <v-text-field
              label="Enter last Name"
              v-model="lastName"
              outlined
              solo
              type="text"
              :value="lastName"
              name="LNAME"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" style="display: flex; justify-content: left;">
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
                value="Subscribe to the ACM Newsletter"
                name="subscribe"
                class="mt-2 submit-btn"
                style="height: 60px; width: 300px; border-radius: 40px; margin-bottom: 10px; background-color: #1c548d; color: white; margin-right: 20px;"
              />
              <button 
                @click.prevent="takeSurvey"
                style="height: 60px; width: 300px; border-radius: 40px; background-color: #1c548d; color: white;"
                >Welcome Survey</button>
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
    <button @click="closPopup"
      style="margin-left: 12px; height: 60px; width: 200px; border-radius: 40px; border: solid #1c548d"
      >Continue</button>
  </div>
</template>

<script>
export default {
  name: "WelcomePopup",

  props: {
    user: Object,
  },

  watch: { 
    user: function(newVal) {
      const user = newVal;
      if(user) {
        this.email = user.providerData[0].email;
        const spaceIndex = user.displayName.indexOf(" ");
        if(spaceIndex != -1) {
          this.firstName = user.displayName.substring(0,spaceIndex);
          this.lastName = user.displayName.substring(spaceIndex+1);
        }
        else {
          this.firstName = user.displayName;
        }
        console.log(this.email, this.firstName, this.lastName)
      }
    }
  },

  mounted() {
    // script 1 for mailchimp
    let mc_script1 = document.createElement("script");
    mc_script1.setAttribute(
      "src",
      "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
    );
    document.head.appendChild(mc_script1);
    if(this.user) {
      this.email = this.user.providerData[0].email;
      const spaceIndex = this.user.displayName.indexOf(" ");
      if(spaceIndex != -1) {
        this.firstName = this.user.displayName.substring(0,spaceIndex);
        this.lastName = this.user.displayName.substring(spaceIndex+1);
      }
      else {
        this.firstName = this.user.displayName;
      }
      console.log(this.email, this.firstName, this.lastName);
    }
  },


  data: () => ({
    firstName: '',
    lastName: '',
    email: ''
  }),

  methods: {
    takeSurvey() {
      window.open("https://forms.gle/kdnVxfDR8DhTSCAJA","_blank");
    },
    submitJoin() {
      console.log("email: ", this.email);
      console.log("First Name: ", this.firstName);
      console.log("Last Name: ", this.lastName);
    },
    closePopup() {
      this.$emit('close');
    }
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

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

.welcome-popup {
  background-color: white;
  padding: 30px;
}
.subtext {
  margin-top: 15px;
  font-size: 20px;
}
</style>
