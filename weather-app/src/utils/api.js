import axios from "axios";

const API_KEY = "TWÓJ_KLUCZ_API"; // Zarejestruj się na https://openweathermap.org/api
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherData = async (city) => {
  const response = await axios.get(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return response.data;
};

export const getForecastData = async (city) => {
  const response = await axios.get(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  return response.data;
};
