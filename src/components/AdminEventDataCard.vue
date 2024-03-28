<template>
  <div>
    <v-btn style="width: 150px; margin-bottom: 15px;" @click="toggleShowData()">{{ showData ? "Hide" : "Show" }} Trends</v-btn>
    <v-card v-if="showData" style="padding: 10px">
      <div style="width: 200px">
        <v-btn @click="updateData()">Update</v-btn>
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
      <h3>Last {{ Math.min(events.length, tickValue) }} events</h3>
    </v-card>
  </div>
</template>


<script>
import {functions} from '../firebase';

export default {
  name: "AdminEventDataCard",
  
  props: {
    events: Array,
  },

  methods: {
    toggleShowData() {
      this.showData = !this.showData;
      if (this.showData) {
        this.updateData();
      }
    },
    async updateData() {
      this.attendances = [];
      this.dates = [];
      for (let i = Math.min(this.events.length - 1, this.tickValue - 1); i >= 0; i--) {
        this.attendances.push((await functions.httpsCallable("getEventAttendance")({id: this.events[i].id})).data);
      }
      for (let i = Math.min(this.events.length - 1, this.tickValue - 1); i >= 0; i--) {
        let dt = this.events[i].startDate.toDate();
        this.dates.push((dt.getMonth() + 1) + "/" + dt.getDate());
      }
    }
  },

  data: () => ({
    showData: false,
    attendances: [],
    dates: [],
    tickValue: 10,
  })
}
</script>
