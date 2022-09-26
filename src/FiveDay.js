import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function FiveDay(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="col-6 five-day">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <ul className="five-day-items mb-0" key={index}>
                <ForecastDay data={dailyForecast} />
              </ul>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "e450bc345a80a08ada69fd5c714d871d";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleForecast);
    return "Loading...";
  }
}
