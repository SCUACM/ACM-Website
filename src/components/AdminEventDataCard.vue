<template>
  <div>
    <v-btn style="width: 150px; margin-bottom: 15px" @click="toggleShowData()"
      >{{ showData ? "Hide" : "Show" }} Trends</v-btn
    >
    <v-card v-if="showData" style="padding: 10px">
      <div style="height: 40px">
        <v-btn v-if="!updating" @click="updateData()">Update</v-btn>
        <p v-else>Loading...</p>
      </div>
      <br />
      <select
        v-if="tags.length > 1"
        @change="updateSelectedTag($event.target.value)"
        style="margin-top: 5px"
      >
        <option value="all">all</option>
        <option :value="tag" v-for="tag in tags" :key="tag">{{ tag }}</option>
      </select>
      <div style="width: 200px">
        <v-slider
          v-model="tickValue"
          :max="25"
          :min="5"
          :step="5"
          thumb-label
        />
      </div>
      <v-sparkline
        :value="this.attendances"
        :labels="this.dates"
        :show-labels="true"
        :label-size="4"
        :line-width="1"
        :smooth="4"
      />
      <h3>Last {{ Math.min(this.filteredEvents.length, tickValue) }} events</h3>
    </v-card>
  </div>
</template>

<script>
import { functions } from "../firebase";

export default {
  name: "AdminEventDataCard",

  props: {
    events: Array,
    tags: Array,
  },

  methods: {
    toggleShowData() {
      this.showData = !this.showData;
      if (this.showData) {
        this.updateData();
      }
    },
    updateSelectedTag(tag) {
      this.selectedTag = tag;
    },
    async updateData() {
      if (this.updating) {
        return;
      }

      this.updating = true;
      this.filteredEvents = this.selectedTag == "all" ? this.events : [];
      if (this.selectedTag != "all") {
        for (let e of this.events) {
          if (e.tags?.includes(this.selectedTag)) {
            this.filteredEvents.push(e);
          }
        }
      }

      this.attendances = [];
      for (
        let i = Math.min(this.filteredEvents.length - 1, this.tickValue - 1);
        i >= 0;
        i--
      ) {
        const eventId = this.filteredEvents[i].id;
        const result = await functions.httpsCallable("getEventAttendance")({
          id: eventId,
        });
        this.attendances.push(result.data || 0);
      }

      this.dates = [];
      for (
        let i = Math.min(this.filteredEvents.length - 1, this.tickValue - 1);
        i >= 0;
        i--
      ) {
        let dt = this.filteredEvents[i].startDate.toDate();
        this.dates.push(dt.getMonth() + 1 + "/" + dt.getDate());
      }

      this.updating = false;
    },
  },

  data: () => ({
    showData: false,
    attendances: [],
    dates: [],
    tickValue: 10,
    selectedTag: "all",
    filteredEvents: [],
    updating: false,
  }),
};
</script>
