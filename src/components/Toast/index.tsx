import React from "react";
import ReactDOM from "react-dom";
import { add, MessageContainer } from "./Container";

let toastWrap = document.querySelector("#toast_wrap");

if (!toastWrap) {
  toastWrap = document.createElement("div");
  toastWrap.id = "toast_wrap";
  document.body.appendChild(toastWrap);
  ReactDOM.render(<MessageContainer />, toastWrap);
}

export default {
  success: (text: string) => {
    add({
      type: "success",
      text,
    });
  },
  error: (text: string) => {
    add({
      type: "error",
      text,
    });
  },
  warning: (text: string) => {
    add({
      type: "warning",
      text,
    });
  },
  info: (text: string) => {
    add({
      type: "info",
      text,
    });
  },
};
