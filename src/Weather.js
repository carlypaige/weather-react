import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import FiveDay from "./FiveDay";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    let apiKey = "fcb0937f9bb31ac5445f032a52a60190";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="search-city">
          <input
            type="text"
            placeholder="Enter new city"
            className="w-75 p-1"
            onChange={changeCity}
          />
          <input type="submit" value="Search" className="btn btn-danger ms-2" />
        </form>
        <div className="row">
          <WeatherInfo data={weatherData} />
          <FiveDay data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
