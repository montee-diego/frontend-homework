import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@api": resolve(__dirname, "src/api"),
      "@assets": resolve(__dirname, "src/assets"),
      "@components": resolve(__dirname, "src/components"),
      "@contexts": resolve(__dirname, "src/contexts"),
      "@containers": resolve(__dirname, "src/containers"),
      "@styles": resolve(__dirname, "src/styles"),
    },
  },
});
