import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { createStore } from "redux";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
const myStore = createStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
