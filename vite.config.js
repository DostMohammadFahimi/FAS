import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html" ],
  plugins: [react()],
});
