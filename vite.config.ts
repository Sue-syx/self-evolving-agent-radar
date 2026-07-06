import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.LOCAL_PREVIEW ? "./" : "/self-evolving-agent-radar/",
});
