import axios from "axios";
import { toast } from "vue3-toastify";

const weatherApiKey = "3978da9f7417a95247e8f31df0cf1f27";
const weatherLocation = "Basel";
const weatherApiBaselUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&appid=${weatherApiKey}&units=metric`;

export const useWeatherStore = defineStore("weatherStore", {
  state: () => {
    return {
      currentWeather: {},
      error: null,
    };
  },
  getters: {
    isLoading: (state) => state.loading === true,
  },
  actions: {
    async getWeather() {
      try {
        const cookie = useCookie("weather");
        if (cookie.value) {
          this.currentWeather = cookie.value;
          return;
        }
        const { data } = await useFetch(weatherApiBaselUrl);
        cookie.value = data.value;
        this.currentWeather = data.value;
        this.error = null;
      } catch (error) {
        this.error = error;
      }
    },
    async refreshData() {
      try {
        const cookie = useCookie("weather");
        const res = await $fetch(weatherApiBaselUrl);
        this.currentWeather = res;
        this.error = null;
        cookie.value = res;
      } catch (error) {
        toast(error.message, {
          autoClose: 1000,
        });
      }
    },
  },
});
