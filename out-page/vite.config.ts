import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [vue()],
  envDir:"env",
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  server:{
    port:5173,
    host:'0.0.0.0'
  }
});
