import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@styles/main.css";

import { CalcProvider } from "@contexts/CalcContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalcProvider>
      <App />
    </CalcProvider>
  </React.StrictMode>
);
