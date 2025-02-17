import React, { useState } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Spinner from "./components/Spinner";
import axios from "axios";

function App() {
  const API_KEY = "c2da516696928bea0b25cf66dbea58f7";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async (e) => {
    e.preventDefault(); // !page reload
    setError("");
    setWeather(null);

    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const weatherData = response.data;
      if (weatherData.name === "Donji grad") {
        weatherData.name = "Zagreb";
      }
      // console.log(weatherData);
      setWeather(response.data);
    } catch (err) {
      const apiMessage = err.response?.data?.message;
      const formattedMessage =
        apiMessage ?
          apiMessage.charAt(0).toUpperCase() +
          apiMessage.slice(1).toLowerCase() +
          "."
        : "Something went wrong. Please check your internet connection and try again.";

      setError(formattedMessage);
    } finally {
      setLoading(false);
      setCity("");
    }
  };

  return (
    <div className="content">
      <Form city={city} setCity={setCity} fetchWeatherData={fetchWeatherData} />
      {loading && <Spinner loading={loading} />}
      {error && <p className="error-msg">{error}</p>}
      {weather && <Weather weather={weather} />}
    </div>
  );
}

export default App;
