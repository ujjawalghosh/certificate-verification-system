import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/auth": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/api/upload": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/api/certificates": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/api/admin": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
