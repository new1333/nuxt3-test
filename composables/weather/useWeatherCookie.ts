export const useWeatherCookie = () => {
  const weatherCookie = useCookie<WeatherDataResponse | null>("weatherData");
  return weatherCookie;
};
