<script>
import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:9000"
});

export default {
    getForecast(){
        return http.get('/forecast');
    },

    getLocationData(lat, lon) {
        return http.get(`/location/${lat}/${lon}`)
    },

    getHourly(){
        return http.get('/hourly');
    },

}
</script>

