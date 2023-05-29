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
      <h3 v-if="event.startDate != undefined">{{ event | formatDateTime }}</h3>
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
      <youtube v-if="event.youtube" :video-id="event.youtube"></youtube>
    </div>
  </div>
</template>

<script>
import "../assets/scss/board-media.scss";
import {storage} from '../firebase';
import { ref, getDownloadURL } from "firebase/storage";
import {getMapLink} from '../helpers';
import { marked } from 'marked';

export default {
  name: "EventCard",

  components: {},

  props: {
    event: Object
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
  }),

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

.flyer:hover{
  transform: scale(1.05);
}

.flyer{
  transition: all .2s ease-in-out;
  padding: 0.5rem;
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
  border-radius: 1rem;
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

@media screen and (max-width: 700px) {
  .event-card{
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.25rem;
    margin-bottom: 0rem;
  }

  .event-card img {
    width: min(12.5rem, 100%);
    border-radius: 1rem;
  }

  h1 {
    font-size: 1.125rem;
  }

  h3 {
    font-size: 1rem;
  }
}
</style>
