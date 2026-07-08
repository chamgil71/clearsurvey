import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
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
    watch: {
      // 백엔드 파이프라인이 정제 실행/내보내기 시 public/data/*.json 을 직접 기록함.
      // Vite는 publicDir 변경을 감지하면 항상 전체 페이지를 새로고침하는데,
      // 이로 인해 실행 화면이 성공 화면 표시 직전에 리셋되어 초기 화면으로 튕겨나감.
      ignored: ["**/public/data/**"],
    },
    proxy: {
      "/data": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
    },
  },
});
