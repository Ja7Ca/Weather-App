import { createRouter, createWebHistory } from 'vue-router'
import Weather from '../Weater.vue'

const routes = [
  {
    path: '/',
    name: 'Weather App',
    component: Weather,
  },
]

document.title = 'Weather App'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
