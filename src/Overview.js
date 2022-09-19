import React from "react";

export default function Overview() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="city">Seattle</h1>
        <ul className="current-wh">
          <li>wind: 40km/h</li>
          <li>humidity: 56%</li>
        </ul>
      </div>
      <div className="col">
        <h2 className="current-temp">71°f</h2>
        <div className="col current-time">3:46pm</div>
      </div>
    </div>
  );
}
