import fs from "node:fs/promises";
import express from "express";
import { createStaticHandler } from "react-router-dom/server.js";
// import { routeJson } from "./src/route.jsx";
import { createFetchRequest } from "./request.js";

// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

let handler;
// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";
const ssrManifest = isProduction
  ? await fs.readFile("./dist/client/.vite/ssr-manifest.json", "utf-8")
  : undefined;

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  const { routeJson } = await vite.ssrLoadModule("./src/route.jsx");
  handler = createStaticHandler(routeJson);
  app.use(vite.middlewares);
} else {
  const { routeJson } = await import("./dist/server/entry-server.js");
  handler = createStaticHandler(routeJson);
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(
    base,
    sirv("./dist/client", {
      extensions: [],
      // We're compressing to brotli
      brotli: true,
      setHeaders: (res, path, stats) => {
        // Never cache html, it helps load latest data (if updated)
        if (path.includes("html")) {
          return res;
        }

        // Cache other type of data for a day
        res.setHeader("Cache-Control", "public, max-age=86400");
        return res;
      },
    })
  );
}

// Serve HTML
app.use("*", async (req, res) => {
  try {
    let fetchRequest = createFetchRequest(req);
    let context = await handler.query(fetchRequest);

    const url = req.originalUrl.replace(base, "");
    let template;
    let render;
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    // Here we need req.originalUrl as `location` param in `StaticRouter` param is expecting path with a forward-slash(/)
    const rendered = await render(
      req.originalUrl,
      ssrManifest,
      handler.dataRoutes,
      context
    );

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "")

      // Created for our own purpose
      // We inject custom styles/script values from server to reduce latency
      .replace(`/* app-script */`, rendered.script ?? "")
      .replace("<!--app-style-->", rendered.styles ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, async () => {
  console.log(`Server started at http://localhost:${port}`);
});
