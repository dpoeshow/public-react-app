import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Slide, ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./ui/redux/store";
import { Provider } from "react-redux";
import { LazyMotion } from "framer-motion";
import { UserContextProvider } from "./ui/context/context.jsx";

const store = createStore(rootReducer, window.__PRELOADED_STATE__);

const loadFeatures = () => import("./features.js").then((res) => res.default);

console.log(window.__SSR_ROUTE__);

ReactDOM.hydrateRoot(
  document.getElementById("app"),
  <React.StrictMode>
    <BrowserRouter>
      <LazyMotion features={loadFeatures}>
        <Provider store={store}>
          <UserContextProvider>
            <App location={window.__SSR_ROUTE__ ?? ""} />
            <ToastContainer
              closeButton={true}
              hideProgressBar={true}
              position="top-right"
              transition={Slide}
              autoClose={3000}
            />
          </UserContextProvider>
        </Provider>
      </LazyMotion>
    </BrowserRouter>
  </React.StrictMode>
);
