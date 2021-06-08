import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import ErrorBoundary from "@pages/Error";
import "@assets/css/main.css";
import routes from "@router/index";
import store from "@store/index";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="full_loading">加载中……</div>}>
        <Provider store={store}>
          <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </Provider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
