import React from "react";
import currentTimeAndDate from "../utils/currentTimeAndDate";
import "./Weather.css";
import windIcon from "../public/breezy.png";
import humidityIcon from "../public/humidity.png";

function Weather({ weather }) {
  const { name, sys, main, weather: weatherData, wind, timezone } = weather;

  return (
    <div className="weather-container fade-in">
      <h2 className="time-and-date">
        {name}, {sys.country} ({currentTimeAndDate(timezone)})
      </h2>

      <p className="current-temp">{main.temp.toFixed(0)}°C</p>
      <div className="icon-description">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData[0].icon}@2x.png`}
          alt={weatherData[0].description}
        />
        <p>{weatherData[0].description}</p>
      </div>
      <div className="info">
        <img className="humidity-icon" src={humidityIcon} alt="Humidity icon" />
        <p>{main.humidity}%</p>
        <p className="feels-like">Feels like {main.feels_like.toFixed(0)}°C</p>
        <img className="wind-icon" src={windIcon} alt="Wind icon" />
        <p>{wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default Weather;
