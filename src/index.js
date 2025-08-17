// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { Auth0ProviderWithHistory } from "./Auth0Provider";
import "./index.css"; // Make sure CSS is here

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </HashRouter>
  </React.StrictMode>
);
