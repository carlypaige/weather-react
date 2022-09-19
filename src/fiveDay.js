import React from "react";

export default function Fiveday() {
  return (
    <div>
      <div className="col">
        <ul className="five-day">
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
