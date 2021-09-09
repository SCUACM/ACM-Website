<template>
  <div>
    <transition name="fade">
      <BoardPopup
        @close-popup="closePopup()"
        :member="activeMember"
        :show="showPopup"
      />
    </transition>
    <div class="board-title">
      {{ title }}
    </div>
    <v-row>
      <v-col
        class="board-member"
        @click="updateCurrentMember(member)"
        cols="12"
        sm="6"
        md="6"
        lg="4"
        xl="4"
        v-for="(member, i) in memberList"
        :key="i"
      >
        <v-row no-gutters>
          <v-col cols="4">
            <v-img
              :lazy-src="member.src"
              :src="member.src"
              class="board-image"
            />
          </v-col>
          <v-col cols="8">
            <div class="board-name">
              {{ member.name }}
            </div>
            <div class="board-role">
              {{ member.role }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import "../assets/scss/board-media.scss";
import BoardPopup from "./BoardPopup.vue";
export default {
  name: "BoardListSection",

  components: {
    BoardPopup,
  },

  props: {
    title: String,
    memberList: Array,
  },

  data: () => ({
    // default value for type handling
    currentMember: {
      src: "",
      name: "",
      role: "",
      bio: "",
    },

    show: false,
  }),

  methods: {
    updateCurrentMember(member) {
      this.currentMember = member;
      this.show = true;
    },

    closePopup() {
      this.show = false;
    },
  },

  computed: {
    activeMember() {
      return this.currentMember;
    },

    showPopup() {
      return this.show;
    },
  },
};
</script>

<style scoped>
.board-member {
  border-radius: 10px;
  transition: background-color 0.3s ease;
}
.board-member:hover {
  background-color: #d3d3d3;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
