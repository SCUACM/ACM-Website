@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Francois+One&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap');

<template>
  <div class="dei-popup">
    <h2 style="font-family: Francois One, sans-serif;">Update Your Profile!</h2>
    <p class="subtext">In our ongoing efforts to be an inclusive and diverse organization, we would really appreciate
      if you could update your race and gender information on your profile page!
    </p>
    <button class="close-btn" @click="closePopup" style="font-family: Epilogue, sans-serif;">Go to Profile Page</button>
    <p>{{ data }}</p>
  </div>
</template>

<script>
export default {
  name: "DeiPopup",

  methods: {
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

.dei-popup {
  background-color: white;
  padding: 30px;
}

.close-btn {
  height: 60px;
  width: 200px;
  border-radius: 40px;
  border: solid #1c548d;
}

.close-btn:hover {
  background-color: #1c548d;
  color: white;
  transition: color 0.1s, background-color 0.2s;
}

.subtext {
  margin-top: 15px;
  font-size: 20px;
}
</style>