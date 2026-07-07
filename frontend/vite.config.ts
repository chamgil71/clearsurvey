import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart({
      spa: { enabled: true },
    }),
    react(),
  ],
  build: {
    chunkSizeWarningLimit: 2500,
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
