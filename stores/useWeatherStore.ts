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
      const weatherDataCookie = useCookie<WeatherDataResponse | null>(
        "weatherData"
      );
      if (!weatherDataCookie.value) {
        await this.fetchWeatherData();
        weatherDataCookie.value = this.currentWeather;
      } else {
        this.setWeatherData(weatherDataCookie.value);
      }
    },

    async fetchWeatherData() {
      try {
        const res = await $fetch("/api/getWeather");
        this.setWeatherData(res);
      } catch (error) {
        this.error = error;
        if (import.meta.client) {
          toast("请求失败", {
            autoClose: 1000,
          });
        }
      }
    },
  },
});
