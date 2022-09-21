import React from "react";

export default function Overview() {
  return (
    <div className="overview">
      <h1 className="city">Seattle</h1>
      <h2 className="current-temp">71°f</h2>
      <div className="current-time">3:46pm</div>
      <ul className="current-wh">
        <li>wind: 40km/h</li>
        <li>humidity: 56%</li>
      </ul>
    </div>
  );
}
