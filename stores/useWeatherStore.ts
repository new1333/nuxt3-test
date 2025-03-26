export const useWeatherStore = defineStore("weatherStore", {
  state: () => {
    return {
      currentWeather: null as WeatherDataResponse | null,
    };
  },
  actions: {
    setWeatherData(weatherData: WeatherDataResponse | null) {
      this.currentWeather = weatherData;
    },
  },
});
