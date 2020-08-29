import React from "react";
import ReactDOM from "react-dom";

import App from "./js/app";
import "./js/sum";

import 'normalize.css'
import "./scss/main.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);