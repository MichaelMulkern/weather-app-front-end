import { createStore } from 'vuex'

export default createStore({
  state: {
    forecast: [],
  },
  getters: {
  },
  mutations: {
    GET_FORECAST(state, data) {
      state.forecast = data;
      //state.forecast = [1,2,3,4]
    },
  },
  actions: {
  },
  modules: {
  }
})
