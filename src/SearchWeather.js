import React, { useState } from "react";
import axios from "axios";
import "./SearchWeather.css";
import FormattedDate from "./FormattedDate";

export default function SearchWeather() {
  const [City, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4e9ba2aaf51b6c12486ee31333bf45cc";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiKey}&units=metric`;
    console.log(apiURL);
    axios.get(apiURL).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
        autoFocus="on"
      />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <h2>{City}</h2>
        <FormattedDate date={weather.date} />

        <div className="row">
          <div className="col-6">
            {" "}
            <img src={weather.icon} alt={weather.description} />
            <span className="temperature">
              {Math.round(weather.temperature)}{" "}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>{weather.description}</li>
              <li>Humidity: {weather.humidity}% </li>
              <li>Wind Speed: {Math.round(weather.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
