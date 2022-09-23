import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <Weather />
      <a
        href="https://github.com/carlypaige/SheCodes-git-carly"
        target="_blank"
        rel="noopener noreferrer"
        className="footer"
      >
        Open-source code by Carly Paige
      </a>
    </div>
  </React.StrictMode>
);

reportWebVitals();
