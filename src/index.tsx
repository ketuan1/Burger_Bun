import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/layout/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "./context/StoreProvider";
import axios from "axios";

//SETTING URL for API
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
//SETTING axios tuong tac vs cookie
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
