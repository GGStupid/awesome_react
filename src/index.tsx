import ReactDom from "react-dom";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "@pages/Home";
import About from "@pages/About";

function RootRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDom.render(<RootRoute />, document.querySelector("#root"));
