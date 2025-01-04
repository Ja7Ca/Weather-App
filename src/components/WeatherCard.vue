<script setup lang="ts">
import { formatHour } from '../utils/dateUtils'

defineProps(['data', 'isCurrent'])
</script>

<template>
  <div :class="['forecast-item', { current: isCurrent }]" style="position: relative">
    <div class="time">{{ formatHour(new Date(data.local_datetime).getHours()) }}</div>
    <div class="temp">{{ data.t }}°C</div>
    <div class="condition">{{ data.weather_desc }}</div>
    <img :src="data.image" style="width: 40px; position: absolute; top: -10px; right: -10px" />
  </div>
</template>

<style scoped>
.forecast-item {
  min-width: 100%;
  padding: 15px;
  background: #2c3e50;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s;
}

.forecast-item:hover {
  transform: translateY(-5px);
  background: #42b883;
  transform: scale(1.05);
}

.forecast-item.current {
  /* background: #42b883; */
  /* transform: scale(1.05); */
}

.time {
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 8px;
}

.temp {
  font-size: 1.2em;
  margin-bottom: 8px;
}

.condition {
  font-size: 0.9em;
  color: #ccc;
}
</style>
