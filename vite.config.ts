import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
 plugins: [react()],
 base: "",
 resolve: {
  alias: {
   components: path.resolve(__dirname, "src/components"),
   context: path.resolve(__dirname, "src/context"),
   pages: path.resolve(__dirname, "src/pages"),
   content: path.resolve(__dirname, "src/content"),
   hooks: path.resolve(__dirname, "src/hooks"),
   utils: path.resolve(__dirname, "src/utils"),
   services: path.resolve(__dirname, "src/services"),
   themes: path.resolve(__dirname, "src/themes"),
   config: path.resolve(__dirname, "src/config"),
  },
 },
});
