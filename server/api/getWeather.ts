import { weatherApiBaselUrl } from "~/constants/weather";
import type { WeatherDataResponse } from "~/types/weather/Weather";

export default defineEventHandler(() => {
  return $fetch<WeatherDataResponse>(weatherApiBaselUrl);
});
