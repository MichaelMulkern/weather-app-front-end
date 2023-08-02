import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import forecastView from '@/views/ForecastView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/forecast',
    name: 'forecast-view',
    component: forecastView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
