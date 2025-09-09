<template>
  <div :class="{'event-card-list': view==pageViews.List, 'event-card-grid': view==pageViews.Grid, 'big': view==pageViews.Grid && big}">
    <div>
      <button @click="dialog = true">
        <img v-if="image" :src="image" class="flyer">
        <div v-else class="no-flyer" :class="[view==pageViews.List ? 'list' : 'grid']">
          {{ event.title }}
        </div>
      </button>
      <v-dialog v-model="dialog" width="unset">
        <!-- List Version: Dialog  -->
        <div v-if="view==pageViews.List" class="dialog-list">
          <img v-if="image" :src="image" class="dialog-img-list" />
          <div v-else class="dialog-img-list" style="background-color: #1c548d; color: white; font-size: 60px; padding: 30% 100px">{{ event.title }}</div>
        </div>
        <!-- Grid Version: Dialog -->
        <div v-if="view==pageViews.Grid" class="dialog-grid">
          <img v-if="image" :src="image" class="dialog-img-grid" />
          <!-- Grid Version: Event Info -->
          <h1>{{ event.title }}</h1>
          <p v-if="event.tags">
            <span v-for="tag of event.tags" :key="tag" class="tag">
              <span class="tag-circle" :style="{backgroundColor: eventColors[tag]}"></span>
              {{ eventTags[tag] }}
            </span>
          </p>
          <h3 v-if="event.startDate != undefined">{{ formatDateTime(event) }}</h3>
          <h3 v-if="event.location">Location: 
          <a v-if="mapLink" :href="mapLink" target="_blank"> {{ event.location }}</a>
          <span v-else> {{ event.location }}</span>
          </h3>
          <div v-html="getMarkdownDescription"></div>
          <p v-for="link of event.links || {}" :key="link.title" class="link">
            <a :href="link.url" target="_blank">
              <v-icon color="#1976d2" class="link-icon">
                {{ link.icon || 'mdi-link' }}
              </v-icon>
              <span>{{ link.title }}</span>
            </a>
          </p>
          <!-- <youtube v-if="event.youtube" :video-id="event.youtube"></youtube> -->
        </div>
      </v-dialog>
    </div>
    <!-- List Version: Event Info -->
    <div v-if="view==pageViews.List">
      <h1>{{ event.title }}</h1>
      <p v-if="event.tags">
        <span v-for="tag of event.tags" :key="tag" class="tag">
          <span class="tag-circle" :style="{backgroundColor: eventColors[tag]}"></span>
          {{ eventTags[tag] }}
        </span>
      </p>
      <h3 v-if="event.startDate != undefined">{{ formatDateTime(event) }}</h3>
      <h3 v-if="event.location">Location: 
      <a v-if="mapLink" :href="mapLink" target="_blank"> {{ event.location }}</a>
      <span v-else> {{ event.location }}</span>
      </h3>
      <div v-html="getMarkdownDescription"></div>
      <p v-for="link of event.links || {}" :key="link.title" class="link">
        <a :href="link.url" target="_blank">
          <v-icon color="#1976d2" class="link-icon">
            {{ link.icon || 'mdi-link' }}
          </v-icon>
          <span>{{ link.title }}</span>
        </a>
      </p>
      <!-- <youtube v-if="event.youtube" :video-id="event.youtube"></youtube> -->
    </div>
  </div>
</template>

<script>
import "../assets/scss/board-media.scss";
import {storage} from '../firebase';
import { ref, getDownloadURL } from "firebase/storage";
import {eventColors, eventTags, getMapLink} from '../helpers';
import { marked } from 'marked';
import {getFormatDateTime} from '../helpers';

export default {
  name: "EventCard",

  components: {},

  props: {
    event: Object,
    view: Number,
    big: Boolean,
  },

  async mounted(){
    if(this.event.flyer) {
      try{
        this.image = await getDownloadURL(ref(storage, this.event.flyer));
      }
      catch(e){
        console.log("No image available")
      }
    }
  },

  data: () => ({
    image: null,
    dialog: false,
    eventTags: eventTags,
    eventColors: eventColors,
    pageViews: {
        List: 0,
        Grid: 1,
      }
  }),

  methods: {
    formatDateTime(event) {
      return getFormatDateTime(event);
    }
  },

  computed: {
    mapLink(){
      return getMapLink(this.event.location ?? "")
    },
    getMarkdownDescription() {
      return marked.parse(this.event.description ?? "")
    }
  }
};
</script>

<style scoped>

/* Same for both: */

.event-card-list img, .event-card-grid img, .event-card-grid-big img {
  width: 100%;
  border-radius: 1rem;
}

.no-flyer{
  overflow: hidden;
  border: white 7.5px solid;
  background: #1c548d;
  border-radius: 20px;
  color: white;
  text-align: center;
  padding: 0.5rem;
}

.flyer {
  transition: all .2s ease-in-out;
  padding: 0.5rem;
}

.flyer:hover, .no-flyer:hover{
  transform: scale(1.05);
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

/* List version */

.event-card-list{
  display: grid;
  grid-template-columns: min(30vw, 15rem) auto;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
}

.no-flyer.list{
  width: 240px;
  height: 250px;
  font-size: 28px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.dialog-img-list{
  height: 100%;
  margin: 0 auto;
  object-fit: contain;
  border-radius: 0.5rem;
}

.dialog-list{
  height: 90vh;
  text-align: center;
  overflow: hidden;
}


@media screen and (max-width: 700px) {
  .event-card-list{
    display: inline;
  }

  .event-card-list img {
    width: min(12.5rem, 100%);
  }

  h1 {
    font-size: 1.125rem;
  }

  h3 {
    font-size: 1rem;
  }
}

/* Grid version */

.event-card-grid{
  width: max(8vw, 7rem);
}

.event-card-grid.big {
  width: max(20vw, 8.75rem) !important;
}

.no-flyer.grid{
 width: max(8vw, 7rem);
 height: calc(max(8vw, 7rem) * 1.25);
}

.event-card-grid.big .no-flyer.grid {
  width: max(20vw, 8.75rem) !important;
  height: calc(max(20vw, 8.75rem) * 1.25) !important;
  font-size: 2.5rem;
}

.dialog-img-grid{
  width: 75%;
  max-width: 350px;
  border-radius: 0.5rem;
  display: block;
  margin: 0 auto 25px;
}

.dialog-grid{
  height: 75vh;
  max-width: 1200px;
  background: white;
  overflow: auto;
  padding: 25px 5% 25px;
}

.tag-circle {
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin-left: 0.5rem;
}

@media screen and (max-width: 700px) {
  .event-card-grid.big .no-flyer.grid {
    font-size: 1.5rem;
  }
}

</style>
