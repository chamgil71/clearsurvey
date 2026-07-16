import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

// vite 8은 빌드 시 resolve.tsconfigPaths 네이티브 옵션으로 이 플러그인을 대체하라고 안내하지만,
// vitest 4는 아직 그 옵션을 해석하지 못해 테스트에서 @/* 임포트가 전부 깨진다.
// 빌드와 테스트가 같은 방식으로 경로를 풀도록 당분간 플러그인을 유지한다.
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
    chunkSizeWarningLimit: 1000,
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
