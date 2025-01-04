<script setup>
import { useFetch } from '../utils/fetch'
import WeatherCard from './WeatherCard.vue'
// import { provinsiAPI, kabupatenAPI, kecamatanAPI, kelurahanAPI } from '../utils/url'
import { onMounted, ref } from 'vue'

const weatherData = ref([])

onMounted(async () => {
  const { data, error } = await useFetch(
    'https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=31.72.03.1002',
  )

  console.log(data, error)

  if (data?.data[0].cuaca[0].length < 7) {
    weatherData.value = [
      ...data.data[0].cuaca[0],
      ...data.data[0].cuaca[1].slice(0, 7 - data.data[0].cuaca[0].length),
    ]
  } else {
    weatherData.value = data?.data[0].cuaca[0]
  }
})
</script>

<template>
  <div class="weather-forecast">
    <h2>24-Hour Weather Forecast</h2>
    <div class="forecast-container">
      <WeatherCard
        v-for="data in weatherData"
        :key="data.local_datetime"
        :data="data"
        :is-current="
          new Date(data.local_datetime).getHours() >= currentHour &&
          currentHour <= new Date(data.local_datetime).getHours() + 3
        "
      />
    </div>
  </div>
</template>

<style scoped>
.weather-forecast {
  margin-top: 10em;
  max-width: 100%;
  overflow-x: auto;
  padding: 20px;
}

.forecast-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px 0;
}
</style>
