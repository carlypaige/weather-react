import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function ForecastDay(props) {
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <li className="list-group-item">
      {day()}
      <span class="low-high">
        {" "}
        {minTemp()}/{maxTemp()}{" "}
      </span>
      <WeatherIcon code={props.data.weather[0].icon} />
    </li>
  );
}
