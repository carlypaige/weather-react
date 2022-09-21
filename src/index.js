import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import "./styles.css";
import Form from "./Form";
import Overview from "./Overview";
import Fiveday from "./fiveDay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <div className="container">
        <div className="row">
          <Form />
        </div>
        <div>
          <Overview />
        </div>
        <div className="row">
          <Fiveday />
        </div>
        <a
          href="https://github.com/carlypaige/SheCodes-git-carly"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coded by Carly Paige
        </a>
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
