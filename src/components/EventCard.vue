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
      <h3 v-if="event.startDate != undefined">{{ event | formatDate }}</h3>
      <h3 v-if="event.location">Location: 
      <a v-if="mapLink" :href="mapLink" target="_blank"> {{ event.location }}</a>
      <span v-else> {{ event.location }}</span>
      </h3>
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

  computed: {
    mapLink(){
      const buildingCodes = {
        "Alameda": 24,
        "Bellarmine": 133,
        "Benson": 7,
        "Bookstore": 9,
        "Campisi": 12,
        "Casa Italiana": 13,
        "Charney": 232,
        "Cowell": 15,
        "Museum": 17,
        "Dunne": 19,
        "Dowd": 227,
        "Facilities": 22,
        "Finn": 240,
        "Forge": 212,
        "Graham": 205,
        "Guadalupe": 230,
        "Kenna": 33,
        "Learning Commons": 144,
        "Leavey": 37,
        "Locatelli": 156,
        "Loyola": 117,
        "Lucas": 148,
        "Malley": 39,
        "Mayer Theatre": 40,
        "McLaughlin": 41,
        "Mission Church": 42,
        "Mission Gardens": 85,
        "Music and Dance Facility": 44,
        "Nobili Dining Room": 231,
        "Nobili": 45,
        "O'Connor": 46,
        "Physics Building": 16,
        "Ricard Observatory": 50,
        "Bergin": 8,
        "Heafey": 30,
        "Sanfilippo": 51,
        "Schott Stadium": 114,
        "Shapell Lounge": 95,
        "SCDI": 247,
        "Sobrato": 88,
        "Soccer Training Center": 224,
        "Softball Field": 228,
        "St. Clare": 3,
        "St. Joseph's": 57,
        "Stanton Field": 77,
        "Stevens Stadium Buck Shaw Field": 10,
        "Swig": 54,
        "Tennis Center": 76,
        "The Garage": 241,
        "Villas": 201,
        "Vari": 14,
        "Varsi": 58,
        "Walsh Admin": 55,
        "Walsh": 56
      }
      const buildingList = Object.keys(buildingCodes);
      const location = this.event.location ?? "";
      const splitIndex = location.lastIndexOf(" ");
      if(splitIndex === -1) {
        return null;
      }
      const building = location.substring(0, splitIndex);
      console.log(location,splitIndex,building);
      if(buildingList.includes(building)){
        const floor = location.substring(splitIndex + 1);
        if(floor){
          return `https://www.scu.edu/map/location/${buildingCodes[building]}/floors/${floor}`;
        }
        else{
          return `https://www.scu.edu/map/location/${buildingCodes[building]}`;
        }
      }
      return null;
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
</style>
