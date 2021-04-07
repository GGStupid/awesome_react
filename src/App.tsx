import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import ErrorBoundary from "@pages/Error";
import "@assets/css/main.css";
import store from "@store/index";
import Login from "@src/pages/Login";
import Home from "@src/pages/Home";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
