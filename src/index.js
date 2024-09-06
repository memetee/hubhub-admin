import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "@/assets/css/reset.less";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
