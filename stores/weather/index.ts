import { toast } from "vue3-toastify";

interface IWeatherState {
  currentWeather: WeatherDataResponse | null;
  error: any;
}

export const useWeatherStore = defineStore("weatherStore", {
  state: (): IWeatherState => {
    return {
      currentWeather: null,
      error: null,
    };
  },
  actions: {
    setWeatherData(data: WeatherDataResponse) {
      this.currentWeather = data;
      this.error = null;
    },

    async fetchWeatherDataWithCache() {
      const weatherCookie = useWeatherCookie();
      if (!weatherCookie.value) {
        await this.fetchWeatherData();
        weatherCookie.value = this.currentWeather;
      } else {
        this.setWeatherData(weatherCookie.value);
      }
    },

    async fetchWeatherData() {
      try {
        const res = await $fetch("/api/getWeather");
        this.setWeatherData(res);
      } catch (error) {
        this.error = error;
        if (import.meta.client) {
          toast("fetch weather api error", {
            autoClose: 1000,
          });
        }
      }
    },
  },
});
