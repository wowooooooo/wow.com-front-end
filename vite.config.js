import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "wowooooooo",
  },
  server: {
    proxy: {
      // 选项写法
      "/juejin": {
        target: "https://api.1024bytelab.com:7001",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/zhihu": {
        target: "https://api.1024bytelab.com:7001",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/weibo": {
        target: "https://api.1024bytelab.com:7001",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
