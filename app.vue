<template>
  <div @click="handleClick">
    <Weather />
  </div>
</template>

<script setup>
const weatherStore = useWeatherStore();

weatherStore.getWeather();

async function handleClick() {
  weatherStore.refreshData();
}

onMounted(() => {
  setTimeout(() => {
    weatherStore.refreshData();
  }, 3000);
});
</script>
