import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo row">
      <div className="overview col-6">
        <h1 className="city ps-2">{props.data.city}</h1>
        <div className="icon">
          <img src={props.data.iconUrl} alt="Weather Icon" />
          <span className="current-temp">
            {Math.round(props.data.temperature)}°C
          </span>
        </div>
        <div className="current-time ps-2">
          <FormattedDate date={props.data.date} />
        </div>
        <ul className="current-wh ps-2">
          <li>wind: {Math.round(props.data.wind)} km/h</li>
          <li>humidity: {props.data.humidity} %</li>
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
  );
}
