import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ReservationContextProvider } from "./context/ReservationContext";
import { RequestContextProvider } from "./context/ResquestResponse.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReservationContextProvider>
      <RequestContextProvider>
        <App />
      </RequestContextProvider>
    </ReservationContextProvider>
  </React.StrictMode>
);
