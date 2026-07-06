import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart({
      spa: { enabled: true },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 2500,
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
