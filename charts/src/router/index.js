import { createRouter, createWebHistory } from 'vue-router'
import BetygVy from '../views/BetygVy.vue'
import WeatherVy from '../views/WeatherVy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'betyg',
      component: BetygVy,
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherVy
    }
  ],

})

export default router
