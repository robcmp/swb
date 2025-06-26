import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    proxy: {
      // intercept /.netlify/functions/* and forward to your lambda emulator
      "/.netlify/functions": {
        target: "http://localhost:9999",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/\.netlify\/functions/, "")
      },
    },
  },
});