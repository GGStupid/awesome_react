import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import ErrorBoundary from "@pages/Error";
import "@assets/css/main.css";
import routes from "@router/index";
import store from "@store/index";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>{renderRoutes(routes)}</ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
