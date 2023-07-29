<template>
    <div>
        <router-link  v-bind:to="{ name: 'home' }">
    <button class="top-button">HOME</button>
</router-link>
        <div class="top-wrapper">
            <div class="loop-class" v-for="day in this.$store.state.forecast" :key="day.id">
                <div class="day-card">
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
        };
    },
    methods: {
        getForecast() {
            forecastService.getForecast().then((response) => {
                this.$store.commit("GET_FORECAST", response.data);
            })
        }
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
    background-image: url("../assets/lightning-crop.jpeg");
    background-size: cover;

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

.top-button {
    margin-bottom: 5px;
}
</style>