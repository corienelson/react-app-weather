import React from "react";
import "./App.css";
import SearchWeather from "./SearchWeather";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <SearchWeather />

        <footer>
          This project was coded by Corie Nelson and is{" "}
          <a href="https://github.com/corienelson/react-app-weather">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
