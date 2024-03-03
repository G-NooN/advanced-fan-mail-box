import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CommonContextProvider from "context/CommonContext";
import { Provider } from "react-redux";
import getStore from "shared/redux/config/configStore";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const store = getStore();
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <CommonContextProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </CommonContextProvider>
    </Provider>
  </QueryClientProvider>
);
