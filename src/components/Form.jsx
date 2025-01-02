import React from "react";
import celsiusIcon from "../public/celsius.png";
import "./Form.css";

function Form({ city, setCity, fetchWeatherData }) {
  return (
    <>
      <div className="title-div">
        <img className="celsius-icon" src={celsiusIcon} alt="celsius icon" />
        <h1 className="title">WEATHER APP</h1>
      </div>
      <form className="form" onSubmit={fetchWeatherData}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          autoFocus
        />
        <button className="btn-submit" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default Form;
