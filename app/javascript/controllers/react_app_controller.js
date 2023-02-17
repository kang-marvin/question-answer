import { Controller } from "@hotwired/stimulus";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "../components/App";

// Connects to data-controller="react-app"
export default class extends Controller {
  connect() {
    const root = ReactDOM.createRoot(document.getElementById("react_app"));
    root.render(<App />);
  }
}
