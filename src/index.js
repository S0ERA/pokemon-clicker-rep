import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./scss/app.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
