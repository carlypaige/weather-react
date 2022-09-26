import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

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
          <ForecastDay data={forecast[0]} />
          <ForecastDay data={forecast[1]} />
          <ForecastDay data={forecast[2]} />
          <ForecastDay data={forecast[3]} />
          <ForecastDay data={forecast[4]} />
        </ul>
      </div>
    );
  } else {
    let apiKey = "e450bc345a80a08ada69fd5c714d871d";
    let latitude = props.data.lat;
    let longitude = props.data.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleForecast);
    return "Loading...";
  }
}
