import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function FiveDay(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="col-6 five-day">
        <ul className="five-day-items">
          <li className="list-group-item">
            {forecast[0].dt}
            <span class="low-high">
              {" "}
              {Math.round(forecast[0].temp.min)}/
              {Math.round(forecast[0].temp.max)}{" "}
            </span>
            <WeatherIcon code={props.data.icon} />
          </li>
          <li className="list-group-item">
            {forecast[1].dt}
            <span className="low-high">
              {" "}
              {Math.round(forecast[1].temp.min)}/
              {Math.round(forecast[1].temp.max)}{" "}
            </span>
            <WeatherIcon code={props.data.icon} />
          </li>
          <li className="list-group-item">
            {forecast[2].dt}
            <span className="low-high">
              {" "}
              {Math.round(forecast[2].temp.min)}/
              {Math.round(forecast[2].temp.max)}{" "}
            </span>
            <WeatherIcon code={props.data.icon} />
          </li>
          <li className="list-group-item">
            {forecast[3].dt}
            <span className="low-high">
              {" "}
              {Math.round(forecast[3].temp.min)}/
              {Math.round(forecast[3].temp.max)}{" "}
            </span>
            <WeatherIcon code={props.data.icon} />
          </li>
          <li className="list-group-item">
            {forecast[4].dt}
            <span className="low-high">
              {" "}
              {Math.round(forecast[4].temp.min)}/
              {Math.round(forecast[4].temp.max)}{" "}
            </span>
            <WeatherIcon code={props.data.icon} />
          </li>
        </ul>
      </div>
    );
  } else {
    let apiKey = "d597852c40c3d897fb6c9155c9e167e0";
    let latitude = props.data.lat;
    let longitude = props.data.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleForecast);
    return null;
  }
}
