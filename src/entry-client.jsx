import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Slide, ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./ui/redux/store";
import { Provider } from "react-redux";
import { LazyMotion } from "framer-motion";

const store = createStore(rootReducer, window.__PRELOADED_STATE__);

const loadFeatures = () => import("./features.js").then((res) => res.default);

ReactDOM.hydrateRoot(
  document.getElementById("app"),
  <React.StrictMode>
    <LazyMotion features={loadFeatures}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <ToastContainer
            closeButton={true}
            hideProgressBar={true}
            position="top-right"
            transition={Slide}
            autoClose={3000}
          />
        </BrowserRouter>
      </Provider>
    </LazyMotion>
  </React.StrictMode>
);
