import React from "react";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes"

const App = () => {
  return (
    <BrowserRouter>
      {routes()}
    </BrowserRouter>
  )
}

export default App;