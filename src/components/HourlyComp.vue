<template>
    <div class="main-area">
        <p class="hourly-forecast-header">HOURLY FORECAST</p>
        <div class="card-collection">
            <div class="loop-class" v-for="hour in this.$store.state.hourly" :key="hour.id">
                <div class="hour-card">
                    <div class="weather-icon-container">
                        <img :src="setIconByKey(hour.imageKey)" class="weather-icon">
                    </div>
                    <p class="hourly-text">{{ hour.temperature }}&deg;F</p>
                    <p class="hourly-text">{{ hour.startTime }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "hourly-list",
    data() {
        return {
            forecastList: [],
            imageKey: "",
        };
    },
    methods: {
        setIconByKey(imageKey) {
            if (imageKey == "sunny") {
                return require('../assets/sun.png');
            } else if (imageKey == "cloudy") {
                return require('../assets/cloud.png');
            } else if (imageKey == "lightning") {
                return require('../assets/cloud-with-lightning.png');
            } else if (imageKey == "rain") {
                return require('../assets/cloud-with-rain.png');
            }
            return require('../assets/full-moon.png');
        },
    },
    computed: {

    },

    created() {

    }

}
</script>

<style scoped>
.card-collection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.weather-icon {
    display: flex;
    align-content: center;
    height: 1.5rem;
    width: 1.5rem;
}

.weather-icon-container {
    display: flex;
    justify-content: center;
}




@media only screen and (max-width: 600px) {
    .card-collection {
        width: auto;
        overflow: scroll;
    }

    .hourly-text {
        font-size: small;
    }

    .hour-card {
        padding-left: 4px;
        padding-right: 4px;
    }
    .hourly-forecast-header {
        font-size: smaller;
    }
}
</style>