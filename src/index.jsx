import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CommonContextProvider from "context/CommonContext";
import { Provider } from "react-redux";
import getStore from "shared/redux/config/configStore";

const store = getStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CommonContextProvider>
      <App />
    </CommonContextProvider>
  </Provider>
);
