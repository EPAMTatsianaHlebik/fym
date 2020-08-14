import React from "react";
import ReactDOM from "react-dom";

import App from "./js/check";
import "./js/sum";

import "./css/main.css";
import "./scss/main.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);