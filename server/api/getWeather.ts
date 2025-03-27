import type { WeatherDataResponse } from "~/types/weather/Weather";

const weatherApiKey = "3978da9f7417a95247e8f31df0cf1f27";
const weatherLocation = "Basel";
const weatherApiBaselUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&appid=${weatherApiKey}&units=metric`;

export default defineEventHandler(() => {
  return $fetch<WeatherDataResponse>(weatherApiBaselUrl);
});
