import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { Slide, ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./ui/redux/store";
import { ServerStyleSheet } from "styled-components";
import { UserContextProvider } from "./ui/context/context";

export function render(url) {
  console.log(url, "url");
  const sheet = new ServerStyleSheet();
  const html = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <React.StrictMode>
        <StaticRouter location={url}>
          <Provider store={store}>
            <UserContextProvider>
              <App />
              <ToastContainer
                closeButton={true}
                hideProgressBar={true}
                position="top-right"
                transition={Slide}
                autoClose={3000}
              />
            </UserContextProvider>
          </Provider>
        </StaticRouter>
      </React.StrictMode>
    )
  );

  const styleTags = sheet.getStyleTags();

  const loadedStore = store.getState();

  const script = `window.__PRELOADED_STATE__ = ${JSON.stringify(
    loadedStore
  ).replace(/</g, "\\u003c")}
  
  window.__SSR_ROUTE__ = ${JSON.stringify(url)}
  `;

  return { html, script, styles: styleTags };
}
