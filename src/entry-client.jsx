import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./ui/redux/store";
import { Provider } from "react-redux";
import { LazyMotion } from "framer-motion";
import { UserContextProvider } from "./ui/context/context.jsx";
import { Toaster } from "react-hot-toast";

const store = createStore(rootReducer, window.__PRELOADED_STATE__);

const loadFeatures = () => import("./features.js").then((res) => res.default);

ReactDOM.hydrateRoot(
  document.getElementById("app"),
  <React.StrictMode>
    <BrowserRouter>
      <LazyMotion features={loadFeatures}>
        <Provider store={store}>
          <UserContextProvider>
            <App />
          </UserContextProvider>
          <Toaster position="top-right" />
        </Provider>
      </LazyMotion>
    </BrowserRouter>
  </React.StrictMode>
);
