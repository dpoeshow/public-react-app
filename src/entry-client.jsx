import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LazyMotion } from "framer-motion";
import { UserContextProvider } from "./ui/context/context.jsx";
import { Toaster } from "react-hot-toast";

const loadFeatures = () => import("./features.js").then((res) => res.default);

ReactDOM.hydrateRoot(
  document.getElementById("app"),
  <React.StrictMode>
    <BrowserRouter>
      <LazyMotion features={loadFeatures}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
        <Toaster position="top-right" />
      </LazyMotion>
    </BrowserRouter>
  </React.StrictMode>
);
