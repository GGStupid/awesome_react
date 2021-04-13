import ReactDom from "react-dom";
import React from "react";
import App from "./App";

ReactDom.render(<App />, document.querySelector("#root"));

if ((module as any).hot) {
  // window.location.reload();
}
