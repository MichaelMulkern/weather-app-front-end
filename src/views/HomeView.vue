<template>
  <div class="home">
    <div >
      <img class="noaa-logo" src='../assets/noaaLogo.png' >
    </div>
    <h1>NOAA WEATHER</h1>
    <h3>for</h3>
    <h3 class="location-title">{{ this.$store.state.locationData.city }} {{ this.$store.state.locationData.state }}</h3>
    <div class="forecast-main">
      <hourly />
      <forecast />
    </div>
    <footer>
    <p class="bottom-logo">Data provided by NOAA</p>
    <p class="bottom-logo">&copy; Michael Mulkern</p>
  </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import forecast from '@/components/Forecast.vue'
import hourly from '@/components/HourlyComp.vue'
import forecastService from '@/services/ForecastService.vue';

export default {
  name: 'HomeView',
  components: {
    forecast,
    hourly,
  },
  methods: {
    getLocation(lat, lon) {
      return forecastService.getLocationData(lat, lon).then((response) => {
        this.$store.commit("GET_LOCATION", response.data);
      })
    },
    // getPosition() {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.latitude = position.coords.latitude;
    //     this.longitude = position.coords.longitude;
    //   }
    //   )
    // },
    getCoordinates() {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    },
    async timerFunction() {
      const position = await this.getCoordinates();
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      return this.getLocation(latitude, longitude)
    },
    async getForecast() {
      await this.timerFunction();
      forecastService.getForecast().then((response) => {
        this.$store.commit("GET_FORECAST", response.data);
      })

      forecastService.getHourly().then((response) => {
        this.$store.commit("GET_HOURLY", response.data);
      })
    },
  },


  mounted() {
    this.getForecast();
  },
}
</script>
<style >
* {
  color: aliceblue;
  background-color: rgb(30, 24, 70);
}

.location-title {
  border-bottom: 1px black solid;
  padding-bottom: 8px;
}
.noaa-logo {
  width: 10%;
  height: 10%;
}

.bottom-logo {
  font-size: smaller;
}

@media only screen and (max-width: 600px) {
  .noaa-logo {
  width: 25%;
  height: 25%;
}
}
</style>
