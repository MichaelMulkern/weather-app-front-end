<template>
  <div>
    <h1>Welcome to my weather app!</h1>

    <router-link class="top-links" v-bind:to="{ name: 'forecast-view' }">
      <button>7 DAY FORECAST</button>
    </router-link>
    <button @click="testMethod()">POOPNUGZ</button>
  </div>
</template>

<script>
import forecastService from '@/services/ForecastService.vue';
//import { ref } from 'vue'
export default {
  name: "poop-list",
  data() {
    return {
      test: "",
    };
  },
  methods: {
    testMethod(){
      let lat = "40.360278";
      let lon = "-81.057778";
     // let bodyObject = {"lat": "40.360278", "lon": "-81.057778"};
      this.getLocation(lat, lon);
      

    },
    getLocation(lat, lon) {
      
            forecastService.getLocationData(lat, lon).then((response) => {
                this.$store.commit("GET_LOCATION", response.data);
                console.log(this.$store.state.locationData);
            })
        },

  },
  created() {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log("Latitude " + lat + "Longitude " + long);
      }
      )
    },
}
</script>

<style>
button {
  background-color: #0078d0;
  border: 0;
  border-radius: 56px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: system-ui, -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 600;
  outline: 0;
  padding: 16px 32px;
  position: relative;
  text-align: center;
  text-decoration: none;
  -webkit-transition: all .3s;
  transition: all .3s;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}

button:before {
  background-color: initial;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff), to(rgba(255, 255, 255, 0)));
  background-image: linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%);
  border-radius: 125px;
  content: "";
  height: 50%;
  left: 4%;
  opacity: .5;
  position: absolute;
  top: 0;
  -webkit-transition: all .3s;
  transition: all .3s;
  width: 92%;
}

button:hover {
  -webkit-box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
  box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
}
</style>