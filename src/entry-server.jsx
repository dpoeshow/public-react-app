import React from "react";
import ReactDOMServer from "react-dom/server";
import {
  StaticRouterProvider,
  createStaticRouter,
} from "react-router-dom/server";
import App from "./App";
import { ServerStyleSheet } from "styled-components";
import { UserContextProvider } from "./ui/context/context";
import { routeJson } from "./route";
import { Toaster } from "sonner";

export function render(url, manifest, routes, context) {
  const sheet = new ServerStyleSheet();

  const router = createStaticRouter(routes, context);

  const html = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <React.StrictMode>
        <UserContextProvider>
          <StaticRouterProvider context={context} router={router}>
            <App />
          </StaticRouterProvider>
          <Toaster position="top-right" richColors />
        </UserContextProvider>
      </React.StrictMode>
    )
  );

  const styleTags = sheet.getStyleTags();

  return { html, styles: styleTags };
}

export { routeJson };
