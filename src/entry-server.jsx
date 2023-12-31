import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { ServerStyleSheet } from "styled-components";
import { UserContextProvider } from "./ui/context/context";
import { Toaster } from "react-hot-toast";

export function render(url) {
  const sheet = new ServerStyleSheet();
  const html = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <React.StrictMode>
        <StaticRouter location={url}>
          <UserContextProvider>
            <App />
          </UserContextProvider>
          <Toaster position="top-right" />
        </StaticRouter>
      </React.StrictMode>
    )
  );

  const styleTags = sheet.getStyleTags();

  const script = `
  window.__SSR_ROUTE__ = ${JSON.stringify(url)}
  `;

  return { html, script, styles: styleTags };
}
