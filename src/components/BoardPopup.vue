<template>
  <div v-if="show" class="board-popup" @click="clickOutsideClose()">
    <div
      @mouseover="isHoverArea = true"
      @mouseleave="isHoverArea = false"
      class="board-popup-content"
    >
      <div @click="closePopup()" class="board-popup-close">
        &times;
      </div>
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

  data: () => ({
    isHoverArea: false,
  }),

  methods: {
    clickOutsideClose() {
      if (!this.isHoverArea) {
        this.$emit("close-popup");
      }
    },
    closePopup() {
      this.$emit("close-popup");
    },
  },
};
</script>

<style scoped></style>
