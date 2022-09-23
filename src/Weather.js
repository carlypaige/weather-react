import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  let [weatherData, setWeatherData] = useState({});
  let [ready, setReady] = useState(false);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form className="search-city">
          <input
            type="text"
            placeholder="Enter new city"
            className="w-75 p-1"
          />
          <input type="submit" value="Search" className="btn btn-danger ms-2" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    let apiKey = "fcb0937f9bb31ac5445f032a52a60190";
    let city = "Seattle";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
