import React from "react";

export default function Overview() {
  return (
    <div className="overview">
      <h1 className="city ps-2">Seattle</h1>
      <div className="icon">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="Weather Icon"
        />
        <span className="current-temp">71°f</span>
      </div>
      <div className="current-time ps-2">3:46pm</div>
      <ul className="current-wh ps-2">
        <li>wind: 40km/h</li>
        <li>humidity: 56%</li>
      </ul>
    </div>
  );
}
