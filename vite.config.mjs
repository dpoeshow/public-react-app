import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    viteCompression({ algorithm: "brotliCompress" }),
    svgr({ include: "**/*.svg?react" }),
  ],
  ssr: {
    noExternal: ["styled-components", "react-icons"],
    target: "node",
    optimizeDeps: ["react-icons"],
  },
  build: {
    ssrEmitAssets: true,
    rollupOptions: {
      output: {
        sourcemap: false,
        manualChunks: (id) => {
          if (id.includes("react-router") || id.includes("router")) {
            return "react-router";
          }

          if (id.includes("framer")) {
            return "motion";
          }

          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    minify: true,
    cssMinify: true,
  },
});
