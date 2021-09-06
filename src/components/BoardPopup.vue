<template>
  <div v-if="show" class="board-popup">
    <div class="board-popup-content">
      <div @click="closePopup()" class="board-popup-close">&times;</div>
      <v-img :src="member.src" class="board-popup-image" />
      <div class="board-popup-role">{{ member.role }}</div>
      <div class="board-popup-name">{{ member.name }}</div>
      <v-divider />
      <div class="board-popup-bio">{{ member.bio }}</div>
    </div>
  </div>
</template>

<script>
import "../assets/scss/board-media.scss";
export default {
  name: "BoardPopup",

  components: {},

  props: {
    member: Object,
    show: Boolean,
  },

  data: () => ({}),

  methods: {
    closePopup() {
      this.$emit("close-popup");
    },
  },
};
</script>

<style scoped></style>
