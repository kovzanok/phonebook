import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ModalsProvider } from "@mantine/modals";
import { Provider } from "react-redux";
import store from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalsProvider>
        <App />
      </ModalsProvider>
    </Provider>
  </React.StrictMode>
);
