import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Windmill } from "@windmill/react-ui";
import { AuthProvider } from "./contexts/Auth";

ReactDOM.render(
  <AuthProvider>
    <Windmill>
      <App />
    </Windmill>
  </AuthProvider>,

  document.getElementById("root")
);
