import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { Slide, ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./ui/redux/store";
import { ServerStyleSheet } from "styled-components";

export function render(url) {
  const sheet = new ServerStyleSheet();
  const html = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <React.StrictMode>
        <Provider store={store}>
          <StaticRouter location={url}>
            <App />
            <ToastContainer
              closeButton={true}
              hideProgressBar={true}
              position="top-right"
              transition={Slide}
              autoClose={3000}
            />
          </StaticRouter>
        </Provider>
      </React.StrictMode>
    )
  );

  const styleTags = sheet.getStyleTags();

  const loadedStore = store.getState();

  const script = `window.__PRELOADED_STATE__ = ${JSON.stringify(
    loadedStore
  ).replace(/</g, "\\u003c")}`;

  return { html, script, styles: styleTags };
}
