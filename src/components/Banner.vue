<template>
  <div v-if="show">
    <div class="banner-container">
      <div class="banner-text">
        {{ content }}
        <a class="banner-link" :href="link">{{ linkTitle }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",

  props: {
    link: String,
    linkTitle: String,
    show: Boolean,
    content: String,
  },

  data: () => ({}),

  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap");

.banner-container {
  display: flex;
  width: 100%;
  min-height: 60px;
  background-color: blue;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(15, 72, 158, 1) 0%,
    rgba(0, 127, 255, 1) 100%
  );
  align-items: center;
  justify-content: center;
  padding: 10px 50px 10px 50px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.banner-text {
  font-family: "Poppins", sans-serif;
  font-weight: 400 !important;
  font-size: 1.1rem;
  color: white;
}

a,
a:visited,
a:active {
  font-family: "Poppins", sans-serif;
  font-weight: 400 !important;
  font-size: 1.1rem;
  color: black;
  text-transform: none;
  transition: 0.4s;
}

a:hover {
  color: white;
}
</style>
