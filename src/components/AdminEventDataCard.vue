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
        this.attendances.push(this.filteredEvents[i].attendance);
      }

      this.dates = [];
      for (
        let i = Math.min(this.filteredEvents.length - 1, this.tickValue - 1);
        i >= 0;
        i--
      ) {
        let dt = this.filteredEvents[i].startDate.toDate();
        this.dates.push(dt.getMonth() + 1 + "/" + dt.getDate() + ": "+this.filteredEvents[i].title);
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
    }
  }
};
</script>
