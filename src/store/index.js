import { createStore } from 'vuex'

export default createStore({
  state: {
    forecast: [],
    locationData: {},
    hourly: [],
  },
  getters: {
  },
  mutations: {
    GET_FORECAST(state, data) {
      state.forecast = data;
    },
    GET_LOCATION(state, data) {
      state.locationData = data;
    },
    GET_HOURLY(state, data) {
      state.hourly = data;
    },
  },
  actions: {
  },
  modules: {
  }
})
