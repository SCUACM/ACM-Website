<template>
  <div :class="{'event-card-big': big, 'event-card': !big}">
    <div>
      <button @click="dialog = true">
        <img v-if="image" :src="image" class="flyer">
      </button>
      <v-dialog v-model="dialog" max-width="750px">
        <div class="dialog">
          <div class="dialog-img-container" style="background: white">
            <img v-if="image" :src="image" class="dialog-img" />
          </div>
          <div class="dialog-info">
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
      </v-dialog>
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
  name: "EventCardGrid",

  components: {},

  props: {
    event: Object,
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
  width: max(8vw, 7rem);
}

.event-card-big{
  width: max(18vw, 8.75rem);
}

.event-card-big img, .event-card img{
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

.dialog-info {
  padding: 0 5% 25px;
  background: white;
}

.dialog-img{
  height: 100%;
  border-radius: 0.5rem;
}

.dialog-img-container{
  height: 65%;
  text-align: center;
  padding: 25px;
}

.dialog {
  height: 75vh;
  background: white;
}

</style>