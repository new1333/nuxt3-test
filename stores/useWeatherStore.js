import axios from "axios";
import { toast } from "vue3-toastify";

const weatherApiKey = "3978da9f7417a95247e8f31df0cf1f27";
const weatherLocation = "Basel";
const weatherApiBaselUrl = `http://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&appid=${weatherApiKey}&units=metric`;

export const useWeatherStore = defineStore("weatherStore", {
  state: () => {
    return {
      loading: true,
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
        const res = await axios.get(weatherApiBaselUrl).finally(() => {
          this.loading = false;
        });
        this.currentWeather = res.data;
        this.error = null;
      } catch (error) {
        this.error = error;
        if (import.meta.client) {
          toast(error.message, {
            autoClose: 1000,
          });
        }
      }
    },
  },
  persist: true,
});
