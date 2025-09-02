<template>
  <div>
    <v-btn style="width: 150px; margin-bottom: 15px" @click="toggleShowData()"
      >{{ showData ? "Hide" : "Show" }} Statistics</v-btn
    >
    <v-card v-if="showData" style="padding: 10px">
      <div style="height: 40px">
        <v-btn v-if="!updating" @click="updateData()">Update</v-btn>
        <p v-else>Loading...</p>
      </div>
      <br />
      <v-select
        v-if="tags.length > 1"
        style="margin-top: 5px; width: fit-content;"
        :items="tags"
        v-model="selectedTag"
        variant="underlined"
      >
        <!-- <option value="all">all</option>
        <option :value="tag" v-for="tag in tags" :key="tag">{{ tag }}</option> -->
      </v-select>
      <v-checkbox label="Omit events with 0 attendance" v-model="omitZeros"></v-checkbox>
      <div style="width: 200px">
        <v-slider
          v-model="tickValue"
          :max="25"
          :min="5"
          :step="5"
          thumb-label
        />
      </div>
      <LineChart v-if="!updating && attendances.length" :data="chartData" :options="chartOptions"/>
      <h3>Last {{ Math.min(this.filteredEvents.length, tickValue) }} events</h3>
    </v-card>
  </div>
</template>

<script>

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import {Line as LineChart} from 'vue-chartjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "AdminEventDataCard",

  components: {
    LineChart
  },

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
      this.dates = [];
      let cnt = this.tickValue;
      for (let i = 0; i < this.filteredEvents.length; i++) {
        if (cnt == 0) {
          break;
        }
        if (this.omitZeros == true && this.filteredEvents[i].attendance == 0) {
          continue;
        }
        this.attendances.push(this.filteredEvents[i].attendance);
        let dt = this.filteredEvents[i].startDate.toDate();
        this.dates.push(dt.getMonth() + 1 + "/" + dt.getDate() + ": "+this.filteredEvents[i].title);
        cnt--;
      }
      this.attendances.reverse();
      this.dates.reverse();
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
    omitZeros: false
  }),
  computed: {
    chartData() {
      return {
        labels: this.dates,
        datasets: [
          {
            label: 'attendance',
            backgroundColor: '#1c548d',
            data: this.attendances
          }
        ]
      }
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: true
      }
    },
    maxAttendance() {

    }
  }
};
</script>
