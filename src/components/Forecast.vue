<template>
    <div>
        <router-link v-bind:to="{ name: 'home' }">
            <button class="top-button">HOME</button>
        </router-link>
        <div class="top-wrapper">
            <div class="loop-class" v-for="day in this.$store.state.forecast" :key="day.id">
                <div class="day-card" :class="setImageByKey(day.imageKey)">
                    <h3 class="day-name">{{ day.name }}</h3>
                    <p class="weather-text">{{ day.temperature }}&deg;F</p>
                    <p class="weather-text">Chance of rain: {{ day.probabilityOfPrecipitation }}%</p>
                    <p class="weather-text">Wind Speed {{ day.windSpeed }}</p>
                    <p class="weather-text">Wind Direction {{ day.windDirection }}</p>
                    <p class="weather-text">Relative Humidity {{ day.relativeHumidity }}%</p>
                    <p class="weather-text">Dew Point {{ day.dewPoint }}&deg;F</p>
                    <p class="weather-text">{{ day.shortForecast }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import forecastService from '@/services/ForecastService.vue';

export default {
    name: "forecast-list",
    data() {
        return {
            forecastList: [],
            imageKey: "",
        };
    },
    methods: {
        getForecast() {
            forecastService.getForecast().then((response) => {
                this.$store.commit("GET_FORECAST", response.data);
            })
        },

        setImageByKey(imageKey) {
            if (imageKey == "sunny") {
                return "sunny-card";
            } else if (imageKey == "cloudy"){
                return "cloudy-card";
            } else if (imageKey == "lightning"){
                return "thunder-card";
            } else if (imageKey == "rain"){
                return "rain-card";
            }
            return "thunder-card";
        },
    },
    computed: {

    },

    created() {
        this.getForecast();
        this.forecastList = this.$store.state.forecast;
    }

}
</script>

<style>
.day-card {
    display: flex;
    flex-direction: column;
    border: black solid 3px;


}

.top-wrapper {
    display: flex;
    flex-direction: column;

}

.loop-class {
    width: 100vw;
}

.weather-text {
    padding: 0px;
    margin: 3px;
}

.day-name {
    padding: 0px;
    margin: 5px;
}

.cloudy-card {
    background-image: url("../assets/partly-cloudy-crop.jpeg");
    background-size: cover;
}

.thunder-card {
    background-image: url("../assets/lightning-crop.jpeg");
    background-size: cover;
}

.rain-card {
    background-image: url("../assets/rain-crop.jpeg");
    background-size: cover; 
}

.sunny-card {
    background-image: url("../assets/sunshine-crop.jpeg");
    background-size: cover;
}

.default-card{
    background-image: url("../assets/morning-sunshine-crop.jpeg");
    background-size: cover;
}

.top-button {
    margin-bottom: 5px;
}
</style>