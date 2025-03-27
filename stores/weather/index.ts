import { toast } from "vue3-toastify";
import type { WeatherDataResponse } from "~/types/weather/Weather";

interface IWeatherState {
  currentWeather: WeatherDataResponse | null;
  error: any;
  fetchedDataInSsr: boolean;
  loading: boolean;
}

export const useWeatherStore = defineStore("weatherStore", {
  state: (): IWeatherState => {
    return {
      currentWeather: null,
      error: null,
      loading: false,
      fetchedDataInSsr: false,
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
        this.loading = true;
        const res = await $fetch("/api/getWeather").finally(() => {
          this.loading = false;
        });
        this.fetchedDataInSsr = import.meta.server;
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
