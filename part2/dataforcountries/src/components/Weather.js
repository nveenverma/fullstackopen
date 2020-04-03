import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({city}) => {

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}&units=m`;

  const [weatherData, setWeatherData] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setWeatherData(response.data);
      });
  }, [url]);

  console.log(weatherData);

  if (!weatherData) {
    return (
      <div></div>
    )
  }

  return (
    <>
      <h2>Weather in {city}</h2>
      <p>Temperature: {weatherData.current.temperature} Celcius</p>
      <img alt={`Weather in ${city}`} src={weatherData.current.weather_icons[0]}/>
      <p>Wind: {weatherData.current.wind_speed} kmh</p>
      <p>Wind Direction: {weatherData.current.wind_dir}</p>
    </>
  )
}

export default Weather;