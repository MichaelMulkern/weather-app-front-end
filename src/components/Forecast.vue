<template>
    <div>
        <ul v-for="day in this.$store.state.forecast" :key="day.id">{{ day.name }}</ul>
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

<style></style>