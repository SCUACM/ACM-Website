<template>
  <div>
    <div class="board-title">
      {{ title }}
    </div>
    <v-row>
      <v-col
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
            <v-img :src="member.src" class="board-image" />
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
export default {
  name: "BoardListSection",

  components: {},

  props: {
    title: String,
    memberList: Array,
  },

  data: () => ({}),
};
</script>

<style scoped></style>
