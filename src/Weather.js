import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
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
    console.log(response.data);
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
        <div className="row">
          <div className="overview col-6">
            <h1 className="city ps-2">{weatherData.city}</h1>
            <div className="icon">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="Weather Icon"
              />
              <span className="current-temp">
                {Math.round(weatherData.temperature)}°C
              </span>
            </div>
            <div className="current-time ps-2">
              <FormattedDate date={weatherData.date} />
            </div>
            <ul className="current-wh ps-2">
              <li>wind: {Math.round(weatherData.wind)} km/h</li>
              <li>humidity: {weatherData.humidity} %</li>
            </ul>
          </div>
          <div className="col-6 five-day">
            <ul className="five-day-items">
              <li className="list-group-item">
                T<span class="low-high"> 57/76 </span>⛅
              </li>
              <li className="list-group-item">
                W<span className="low-high"> 58/71 </span>⛅
              </li>
              <li className="list-group-item">
                R<span className="low-high"> 58/74 </span>🌧️
              </li>
              <li className="list-group-item">
                F<span className="low-high"> 54/75 </span>☀️
              </li>
              <li className="list-group-item">
                S<span className="low-high"> 57/78 </span>☀️
              </li>
            </ul>
          </div>
        </div>
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
