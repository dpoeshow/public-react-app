import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LazyMotion } from "framer-motion";
import { UserContextProvider } from "./ui/context/context.jsx";
import { routeJson } from "./route.jsx";
import { Toaster } from "sonner";

// import { Toaster } from "react-hot-toast";

const loadFeatures = () => import("./features.js").then((res) => res.default);

const browserRouter = createBrowserRouter(routeJson);

ReactDOM.hydrateRoot(
  document.getElementById("app"),
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={browserRouter} fallbackElement={null}>
        {/* framer-motion lazy-load */}
        <LazyMotion features={loadFeatures}>
          <App />
        </LazyMotion>
      </RouterProvider>
      <Toaster position="top-right" richColors />
    </UserContextProvider>
  </React.StrictMode>
);
