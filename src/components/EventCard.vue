<template>
  <div class="event-card">
    <div>
      <button @click="dialog = true">
        <img v-if="image" :src="image" class="flyer">
      </button>
      <v-dialog
        v-model="dialog"
        width="unset"
      >
        <div class="dialog">
          <img v-if="image" :src="image" class="dialog-img" />
        </div>
      </v-dialog>
    </div>
    <div>
      <h1>{{ event.title }}</h1>
      <h3 v-if="event.startDate != undefined">{{ event.startDate.toDate() | formatDate }}</h3>
      <h3 v-if="event.location">Location: {{ event.location }}</h3>
      <p>{{ event.description }}</p>
      <p v-for="link of event.links || {}" :key="link.title" class="link">
        <a :href="link.url" target="_blank">
          <v-icon color="#1976d2" class="link-icon">
            {{ link.icon || 'mdi-link' }}
          </v-icon>
          <span>{{ link.title }}</span>
        </a>
      </p>
      <youtube v-if="event.youtube" :video-id="event.youtube"></youtube>
    </div>
    <!-- <div class="events-title">
      {{ title }}
    </div>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
        v-for="(event, i) in eventList"
        :key="i"
        class="events-container"
      >
        <div class="events-img-container">
          <v-img class="events-img" :lazy-src="event.src" :src="event.src" />
        </div>
        <div class="events-date">
          {{ event.date }}
        </div>
        <div class="events-content">
          {{ event.info }}
        </div>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
import "../assets/scss/board-media.scss";
import {storage} from '../firebase';
import { ref, getDownloadURL } from "firebase/storage";

export default {
  name: "EventCard",

  components: {},

  props: {
    event: Object
  },

  async mounted(){
    try{
      this.image = await getDownloadURL(ref(storage, `flyers/${this.event.id}.jpg`));
    }
    catch(e){
      console.log("No image available")
    }
  },

  data: () => ({
    image: null,
    dialog: false,
  }),
};
</script>

<style scoped>

.flyer:hover{
  transform: scale(1.05);
  background-color: #f5f5f5;
}

.flyer{
  transition: all .2s ease-in-out;
  border-radius: .5rem;
  padding: 1rem;
}

.event-card{
  display: grid;
  grid-template-columns: min(30vw, 15rem) auto;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
}

.event-card img {
  width: 100%;
  border-radius: 0.5rem;
}
.link a {
  font-size: 1.2rem;
  text-decoration: none;
}

.link a span{
  font-size: 1.2rem;
  text-decoration: underline;
}

.link-icon {
  margin-right: 5px;
  text-decoration: none;
}

.dialog-img{
  height: 100%;
  margin: 0 auto;
  object-fit: contain;
  border-radius: 0.5rem;
}

.dialog{
  height: 90vh;
  text-align: center;
  overflow: hidden;
}
</style>
