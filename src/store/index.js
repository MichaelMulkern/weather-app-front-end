import { createStore } from 'vuex'

export default createStore({
  state: {
    forecast: [],
    locationData: {},
  },
  getters: {
  },
  mutations: {
    GET_FORECAST(state, data) {
      state.forecast = data;
    },
    GET_LOCATION(state, data) {
      state.locationData = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
