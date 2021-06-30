import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import SearchWeather from "./SearchWeather";

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
