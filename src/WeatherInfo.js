import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo col-6">
      <div className="overview">
        <h1 className="city ps-2">{props.data.city}</h1>
        <div className="icon">
          <img src={props.data.iconUrl} alt="Weather Icon" />
          <span className="current-temp">
            {Math.round(props.data.temperature)}°F
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
    </div>
  );
}
