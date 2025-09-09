<template>
  <v-app>
    <MainNavbar/>
    <v-container style="margin-top: 75px; max-width: 1000px">
      <h2>Attendance Data Statistics</h2>
      <div style="height: 40px; margin-top: 1em;">
        <v-btn v-if="!updating" @click="updateData()">Update</v-btn>
        <p v-else>Loading...</p>
      </div>
      <v-select
        v-if="allowedTags.length > 1"
        style="margin-top: 5px; width: fit-content;"
        :items="allowedTags"
        v-model="selectedTag"
        variant="underlined"
      >
      </v-select>
      <v-checkbox label="Omit events with 0 attendance" v-model="omitZeros" />
      <div>
        <v-select 
          :items="periodTypes"
          v-model="timePeriodType"
          item-title="type"
          item-value="enum"
          width="max-content"
          variant="underlined"
        />
        <v-select
          v-if="timePeriodType == 1"
          :items="timePeriods"
          item-title="period"
          item-value="months"
          v-model="relativeTimePeriod"
          variant="underlined"
          width="max-content"
        />
        <div v-if="timePeriodType == 2" style="display: inline-flex;">
          <v-text-field
          label=""
          outlined
          type="date"
          v-model="absoluteTimePeriod.startDate"
          variant="underlined"
          />
          <v-text-field
          label=""
          outlined
          type="date"
          v-model="absoluteTimePeriod.endDate"
          variant="underlined"
          />
        </div>
        <div v-if="timePeriodType == 3" style="display: inline-flex;">
          <v-slider
            v-model="tickValue"
            :max="25"
            :min="5"
            :step="5"
            thumb-label
            width="200px"
          />
          <p style="margin-left: 1em;">Last {{ this.tickValue }} events</p>
        </div>
      </div>
      <LineChart v-if="!updating && attendances.length" :data="chartData" :options="chartOptions"/>
      <h3 v-else>No attendance data in this time period</h3>
    </v-container>
    <MainFooter />
  </v-app>
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
import moment from 'moment';
import MainNavbar from "@/layout/MainNavbar.vue";
import MainFooter from "@/layout/MainFooter.vue";
import { auth, db } from '../firebase';
import { getUserPerms } from "../helpers";

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
  name: "AdminStats",

  components: {
    LineChart,
    MainNavbar,
    MainFooter
  },
  methods: {
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
      if (this.timePeriodType <= 2 && this.endDate.isBefore(this.startDate)) {
        alert("End date must be after start date");
        this.updating = false;
        return;
      }
      this.attendances = [];
      this.dates = [];
      this.eventNames = [];
      let cnt = this.tickValue;
      for (let i = 0; i < this.filteredEvents.length; i++) {
        let dt = this.filteredEvents[i].startDate.toDate();
        if (this.timePeriodType == 3 && cnt == 0) {
          break;
        } else {
          if (this.startDate.isAfter(dt)) {
            // console.log("brokeback mountain");
            // console.log(dt);
            break;
          } else if (this.timePeriodType == 2 && this.endDate.isBefore(dt)) {
            continue;
          }
        }
        if (this.omitZeros == true && this.filteredEvents[i].attendance == 0) {
          continue;
        }
        this.attendances.push(this.filteredEvents[i].attendance);
        this.dates.push(dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate());
        this.eventNames.push(this.filteredEvents[i].title);
        if (this.timePeriodType == 3) {
          cnt--;
        }
      }
      this.attendances.reverse();
      this.dates.reverse();
      this.eventNames.reverse();
      this.updating = false;
    }
  },

  mounted() {
    auth.onAuthStateChanged(async (user) => {
        if (user) {
          const perms = await getUserPerms(user);
          this.canViewRoles = perms.changeRolePerms || perms.changeUserRole;
          this.canAddEvents =
            perms.acmAddEvent ||
            perms.acmwAddEvent ||
            perms.broncosecAddEvent ||
            perms.otherAddEvent ||
            perms.icpcAddEvent;
          this.canEditEvents =
            perms.acmEditEvent ||
            perms.acmwEditEvent ||
            perms.broncosecEditEvent ||
            perms.otherEditEvent ||
            perms.icpcEditEvent;
          this.canDeleteEvents =
            perms.acmDeleteEvent ||
            perms.acmwDeleteEvent ||
            perms.broncosecDeleteEvent ||
            perms.otherDeleteEvent ||
            perms.icpcDeleteEvent;
          this.allowedTags = ["all"];
          if (perms.acmEditEvent || perms.acmDeleteEvent) {
            this.allowedTags.push("acm");
          }
          if (perms.acmwEditEvent || perms.acmwDeleteEvent) {
            this.allowedTags.push("acmw");
          }
          if (perms.broncosecEditEvent || perms.broncosecDeleteEvent) {
            this.allowedTags.push("broncosec");
          }
          if (perms.icpcEditEvent || perms.icpcDeleteEvent) {
            this.allowedTags.push("icpc");
          }
          const eventCollection = await db.collection("events").orderBy("startDate", "desc").get();
          if (eventCollection.empty) {
            console.log("No events found");
            return;
          }
          for (let doc of eventCollection.docs) {
            const data = doc.data();
            data.id = doc.id;
            if ((perms.editMyEvent || perms.deleteMyEvent && data.createdBy === user.uid) || (!perms.otherEditEvent && !perms.otherDeleteEvent && (data.tags === null || data.tags.some(t => data.tags.includes(t))))) {
              this.events.push(data);
            }
          }
          await this.updateData();
        }
    }); 
  },

  data: () => ({
    events: [],
    allowedTags: [],
    attendances: [],
    eventNames: [],
    dates: [],
    tickValue: 10,
    selectedTag: "all",
    filteredEvents: [],
    updating: false,
    omitZeros: false,
    timePeriodType: 1, // 1: relative, 2: absolute, 3: ticker
    relativeTimePeriod: 1, // number of months
    absoluteTimePeriod: {
      startDate: "",
      endDate: ""
    }
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
        maintainAspectRatio: true,
        interaction: {
          intersect: false,
          mode: 'index',
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: (tooltipItems) => {
                console.log(tooltipItems[0]);
                return tooltipItems[0].label + ": " + this.eventNames[tooltipItems[0].dataIndex];
              },
            }
          }
        }
      }
    },
    startDate() {
      if (this.timePeriodType == 1) {
        return moment().subtract(this.relativeTimePeriod, 'M');
      } else {
        let date = moment(this.absoluteTimePeriod.startDate);
        if (date.isValid()) {
          return date;
        } else {
          return this.endDate.subtract(1, 'y'); // arbitrary default value
        }
      }
    },
    endDate() {
      if (this.timePeriodType == 1) {
        return moment();
      } else {
        let date = moment(this.absoluteTimePeriod.endDate);
        if (date.isValid()) {
          return date;
        } else {
          return moment();
        }
      }
    }
  },
  setup() {
    const timePeriods = [
      {period: '1M', months: 1},
      {period: '2M', months: 2},
      {period: '3M', months: 3},
      {period: '6M', months: 6},
      {period: '1Y', months: 12},
    ];
    const periodTypes = [
      {type: 'Relative', enum: 1},
      {type: 'Absolute', enum: 2},
      {type: 'Ticker', enum: 3}
    ]

    return {
      timePeriods,
      periodTypes
    }
  }
};
</script>
<style scoped>
.v-text-field {
  width: fit-content;
  display: inline-flex;
  margin-right: 1em;
}
.v-select {
  width: fit-content;
  margin-right: 1em;
}
.v-slider {
  display: inline-block;
}
</style>