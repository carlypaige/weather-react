import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  let [ready, setReady] = useState(false);
  function handleResponse(response) {
    console.log(response.data.main.name);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="form">
        <form className="search-city">
          <input
            type="text"
            placeholder="Enter new city"
            className="w-75 p-1"
          />
          <input type="submit" value="Search" className="btn btn-danger ms-2" />
        </form>
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
