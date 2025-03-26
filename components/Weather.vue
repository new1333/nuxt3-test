<script setup lang="ts">
const weatherStore = useWeatherStore();
const { currentWeather } = storeToRefs(weatherStore);

const weatherInfo = computed(() => currentWeather.value?.weather[0]);
const weatherData = computed(() => currentWeather.value?.main);
const city = computed(() => currentWeather.value?.name);
const temperature = computed(() => Math.round(weatherData.value!.temp));
</script>

<template>
  <div v-if="city">
    <div class="flex">
      <div class="weather-icon">
        <img
          class="w-20 h-20"
          :src="`http://openweathermap.org/img/wn/${weatherInfo?.icon}@2x.png`"
          alt=""
        />
      </div>
      <div class="weather-data">
        <h2 class="text-2xl text-gray-700 font-bold pt-4">
          {{ temperature }} <span class="text-yellow-300">&deg;C</span>
        </h2>
        <p class="text-gray-700 capitalize">
          {{ city }}
          <span class="text-gray-300">||</span>
          {{ weatherInfo?.description }}
        </p>
      </div>
    </div>
  </div>
</template>
