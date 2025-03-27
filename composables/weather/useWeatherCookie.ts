import type { WeatherDataResponse } from "~/types/weather/Weather";

export const useWeatherCookie = () => {
  const weatherCookie = useCookie<WeatherDataResponse | null>("weatherData");
  return weatherCookie;
};
