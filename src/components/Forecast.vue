<template>
    <div class="main-area">
        <div class="top-wrapper">
            <div class="loop-class" v-for="day in this.$store.state.forecast" :key="day.id">
                <div class="day-card" @click="this.forecastToggle()">
                    <div class="text-arranger">
                        <div class="weather-icon-container">
                            <img :src="setIconByKey(day.imageKey)" class="weather-icon">
                        </div>
                        <div class="text-block" id="day-name-adjuster">
                            <h3 class="day-name">{{ day.name }}</h3>
                            <h4 class="weather-text">{{ day.temperature }}&deg;F</h4>
                        </div>
                        <div class="text-block text-shortener">
                            <div class="icon-arranger">
                                <img src="@/assets/umbrella-with-rain-drops.png" class="weather-icon-small">
                                <p class="weather-text"> {{ day.probabilityOfPrecipitation }}%</p>
                            </div>
                            <div class="icon-arranger">
                                <img src="@/assets/wind.png" class="weather-icon-small">
                                <p class="weather-text"> {{ day.windSpeed }}</p>
                            </div>
                        </div>
                        <div class="text-block desktop-only">
                            <p class="weather-text">Relative Humidity {{ day.relativeHumidity }}%</p>
                            <p class="weather-text">Dew Point {{ day.dewPoint }}&deg;F</p>
                        </div>
                        <div class="text-block desktop-only">
                            <p class="weather-text">{{ day.shortForecast }}</p>
                        </div>
                    </div>
                </div>
                <div class="long-forecast" @click="this.forecastToggle()" v-show="clickRegister">
                    <p class="long-text">{{ day.longForecast }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "forecast-list",
    data() {
        return {
            forecastList: [],
            imageKey: "",
            clickRegister: false,
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
            } else if (imageKey == "moon") {
                return require('../assets/full-moon.png');
            } else if (imageKey == "partly") {
                return require('../assets/sun-behind-large-cloud.png');
            }
            return require('../assets/logo.png');
        },
        forecastToggle() {
            if (this.clickRegister == false) {
                this.clickRegister = true;
            } else {
                this.clickRegister = false;
            }
        }
    },
    computed: {

    },

    created() {

    }

}
</script>

<style scoped>
.main-area {
    background-color: rgb(30, 24, 70);
    color: aliceblue;

}

.day-card {
    display: flex;
    flex-direction: column;
    border-bottom: rgba(0, 0, 0, 0.13) solid 2px;
    

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

.text-arranger {
    display: flex;
    flex-direction: row;
    justify-content: left;

}

.text-block {
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 20vw;
}

.weather-icon {
    height: 3rem;
    width: 3rem;
}

.weather-icon-small {
    height: 1rem;
    width: 1rem;
}

.icon-arranger {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.long-text {
    background-color: rgba(0, 0, 0, 0.322);
}

@media only screen and (max-width: 600px) {
    .desktop-only {
        display: none;
        width: 0px;
        height: 0px;

    }

    .long-text {
        font-size: smaller;
    }

    .text-block {
        font-size: small;
        width: 50vw;

    }

    .weather-icon {
        display: flex;
        align-content: center;
        height: 1.5rem;
        width: 1.5rem;
    }

    button {
        border: 0;
        border-radius: 56px;
        display: inline-block;
        font-size: 15px;
        font-weight: 600;
        outline: 0;
        padding: 9px 9px;

    }
}

@media only screen and (min-width: 600px) {
    .text-shortener {

        width: 100px;
    }
}
</style>