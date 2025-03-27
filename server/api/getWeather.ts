import { weatherApiBaselUrl } from "~/constants/weather";
import type { WeatherDataResponse } from "~/types/weather/Weather";

let count = 0;
export default defineEventHandler(() => {
  return $fetch<WeatherDataResponse>(weatherApiBaselUrl);
});
