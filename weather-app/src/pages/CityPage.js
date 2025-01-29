import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWeatherData, getForecastData } from "../utils/api";

function CityPage() {
  const { cityName } = useParams();
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const weatherData = await getWeatherData(cityName);
      const forecastData = await getForecastData(cityName);
      setWeather(weatherData);
      setForecast(forecastData.list.slice(0, 5)); // 5-dniowa prognoza
    }
    fetchData();
  }, [cityName]);

  if (!weather) return <div>Ładowanie...</div>;

  return (
    <div>
      <h1>Pogoda w {cityName}</h1>
      <p>Temperatura: {weather.main.temp}°C</p>
      <p>Warunki: {weather.weather[0].description}</p>
      <h2>Prognoza na 5 dni</h2>
      {forecast.map((day, index) => (
        <div key={index}>
          <p>{day.dt_txt}</p>
          <p>Temp: {day.main.temp}°C</p>
          <p>Warunki: {day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}

export default CityPage;
