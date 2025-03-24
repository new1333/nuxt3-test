<template>
  <div>
    <div v-if="isLoading">loading...</div>
    <div v-else-if="error">
      {{ error }}
    </div>
    <div v-else>
      <Weather />
    </div>
  </div>
</template>

<script setup>
const weatherStore = useWeatherStore();

const { error, isLoading } = storeToRefs(weatherStore);
const { getWeather } = weatherStore;

onMounted(() => {
  getWeather();
});
</script>
