import React from "react";
import axios from "axios";

export default function FiveDay(props) {
  let apiKey = "d597852c40c3d897fb6c9155c9e167e0";
  let city = props.data.city;
  let url = `https://api.openweathermap.org/data/3.0/onecall?q=${city}&appid=${apiKey}&units=imperial`;

  function handleForecast(response) {
    console.log(response.data);
  }

  axios.get(url).then(handleForecast);
  return (
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
  );
}
