<script setup></script>
<template>
  <navbar>
    <div class="container">
      <div class="wrap-nav">
        <!-- <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/weather">Wheater</router-link> -->
        <h3>Weather App</h3>
      </div>
    </div>
  </navbar>
</template>
<style scoped>
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  padding: 2em;
}

.container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.wrap-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
}
</style>
