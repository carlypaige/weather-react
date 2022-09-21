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
          <div className="col">
            <Form />
          </div>
          <div className="row">
            <div className="col-4">
              <Overview />
            </div>
            <div className="col-6">
              <Fiveday />
            </div>
          </div>
        </div>
        <a
          href="https://github.com/carlypaige/SheCodes-git-carly"
          target="_blank"
          rel="noopener noreferrer"
          className="footer"
        >
          Open-source code by Carly Paige
        </a>
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
